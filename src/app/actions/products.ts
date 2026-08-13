"use server";

import { getPrismaClient } from "@/lib/prisma";

// Helper function to parse PostgreSQL array literal strings safely
function parsePostgresArray(arr: unknown): string[] {
  if (Array.isArray(arr)) return arr;
  if (typeof arr === "string") {
    const cleaned = arr.replace(/^{|}$/g, "").trim();
    if (!cleaned) return [];
    return cleaned.split(",").map((item) => item.trim());
  }
  return [];
}

// Transform Cloudinary URLs for optimization
function transformImageUrl(url: string): string {
  if (!url) return "";
  
  // If it's a Cloudinary URL, add transformation parameters for performance
  if (url.includes("res.cloudinary.com")) {
    return url.replace("/upload/", "/upload/f_auto,q_auto,w_1200,c_limit/");
  }
  
  // For Unsplash/others, keep as-is
  return url;
}

// ==========================================================
// 1. Fetch all active products (Optionally filtered by category)
// ==========================================================
export async function getProducts(category?: string | null) {
  try {
    const client = getPrismaClient(); // Dynamic runtime connection mapping
    const products = await client.product.findMany({
      where: {
        isActive: true,
        ...(category ? { category: category.toLowerCase() } : {}),
      },
      orderBy: {
        createdAt: "desc",
      },
    });

    return products.map((prod) => ({
      ...prod,
      price: Number(prod.price),
      images: parsePostgresArray(prod.images).map(transformImageUrl),
    }));
  } catch (error) {
    console.error("Failed to fetch database products:", error);
    return [];
  }
}

// ==========================================================
// 2. Fetch single product by ID
// ==========================================================
export async function getProductById(id: string) {
  try {
    const client = getPrismaClient(); // Dynamic runtime connection mapping
    const product = await client.product.findUnique({
      where: { id },
      include: {
        skus: true,
      },
    });

    if (!product) return null;

    const colors = Array.from(new Set(product.skus.map((s) => s.color)));
    const sizes = Array.from(new Set(product.skus.map((s) => s.size)));

    return {
      ...product,
      price: Number(product.price),
      images: parsePostgresArray(product.images).map(transformImageUrl),
      colors,
      sizes,
    };
  } catch (error) {
    console.error(`Failed to fetch product details for ${id}:`, error);
    return null;
  }
}

// ==========================================================
// 3. Create/Update product with Cloudinary images
// ==========================================================
export async function createProduct(data: {
  serial?: string;
  name: string;
  price: number;
  category: string;
  composition: string;
  details: string;
  measurements: string;
  images: string[]; // Cloudinary or remote image URLs
  skus: { color: string; size: string; stock: number }[];
}) {
  try {
    const client = getPrismaClient(); // Dynamic runtime connection mapping
    
    // Auto-generate serial code structure if not supplied
    const generatedSerial = data.serial || `WST-${Date.now().toString().slice(-6)}`;

    const product = await client.product.create({
      data: {
        serial: generatedSerial,
        name: data.name,
        price: data.price,
        category: data.category,
        composition: data.composition,
        details: data.details,
        measurements: data.measurements,
        images: data.images, // Store array mapping
        skus: {
          create: data.skus,
        },
      },
      include: {
        skus: true,
      },
    });  
    return product;
  } catch (error) {
    console.error("Failed to create product:", error);
    return null;
  }
}

// ==========================================================
// 4. Update product images
// ==========================================================
export async function updateProductImages(id: string, images: string[]) {
  try {
    const client = getPrismaClient(); // Dynamic runtime connection mapping
    const product = await client.product.update({
      where: { id },
      data: {
        images: images,
      },
    });

    return product; 
  } catch (error) {
    console.error("Failed to update product images:", error);
    return null;
  }
}