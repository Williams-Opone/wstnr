"use server";

import { unstable_cache } from "next/cache";
import { getPrismaClient } from "@/lib/prisma";

function parsePostgresArray(arr: unknown): string[] {
  if (Array.isArray(arr)) return arr;
  if (typeof arr === "string") {
    const cleaned = arr.replace(/^{|}$/g, "").trim();
    if (!cleaned) return [];
    return cleaned.split(",").map((item) => item.trim());
  }
  return [];
}

function mapProduct<T extends { price: unknown; images: unknown }>(product: T) {
  return {
    ...product,
    price: Number(product.price),
    images: parsePostgresArray(product.images),
  };
}

/**
 * One DB round-trip for both homepage sections.
 * Cached for 60s so repeat visits don't wait on Neon.
 */
const getHomepageCatalogCached = unstable_cache(
  async () => {
    const client = getPrismaClient();

    // Pull a small active set once, then split in memory
    const products = await client.product.findMany({
      where: { isActive: true },
      take: 12,
      orderBy: { createdAt: "desc" },
      select: {
        id: true,
        serial: true,
        name: true,
        price: true,
        category: true,
        composition: true,
        images: true,
        placement: true,
        createdAt: true,
      },
    });

    const mapped = products.map(mapProduct);

    const featured =
      mapped.find((p) => p.placement === "LATEST_DROP") ?? mapped[0] ?? null;

    const grid = mapped
      .filter((p) => p.id !== featured?.id)
      .filter((p) => p.placement === "ARCHIVE_GRID" || true)
      .slice(0, 6);

    // If everything is LATEST_DROP-only, still fill grid from remaining
    const gridFinal =
      grid.length > 0
        ? grid
        : mapped.filter((p) => p.id !== featured?.id).slice(0, 6);

    return {
      featuredProduct: featured,
      gridProducts: gridFinal,
    };
  },
  ["homepage-catalog-v1"],
  {
    revalidate: 60, // seconds — raise to 300 if content changes rarely
    tags: ["homepage", "products"],
  }
);

export async function getLatestFeaturedProduct() {
  try {
    const { featuredProduct } = await getHomepageCatalogCached();
    return featuredProduct;
  } catch (error) {
    console.error("Failed to fetch featured product:", error);
    return null;
  }
}

export async function getHomepageGridProducts() {
  try {
    const { gridProducts } = await getHomepageCatalogCached();
    return gridProducts;
  } catch (error) {
    console.error("Failed to fetch homepage grid products:", error);
    return [];
  }
}

/** Preferred: one call from page.tsx */
export async function getHomepageContent() {
  try {
    return await getHomepageCatalogCached();
  } catch (error) {
    console.error("Failed to fetch homepage content:", error);
    return { featuredProduct: null, gridProducts: [] as any[] };
  }
}