import { NextResponse, NextRequest } from "next/server";
import { prisma } from "@/lib/prisma";
import { SectionPlacement } from "../../../../prisma/generated";

// Helper function to parse PostgreSQL array literal strings
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
  
  // If it's a Cloudinary URL, add transformation parameters
  if (url.includes("res.cloudinary.com")) {
    return url.replace("/upload/", "/upload/f_auto,q_auto,w_1200,c_limit/");
  }
  
  return url;
}

// =========================================================================
// 1. GET: Fetch all active products (Optionally filtered by category)
// =========================================================================
export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const category = searchParams.get("category");

    const products = await prisma.product.findMany({
      where: {
        isActive: true,
        ...(category ? { category: category.toLowerCase() } : {}),
      },
      orderBy: {
        createdAt: "desc",
      },
    });

    const formattedProducts = products.map((prod) => ({
      ...prod,
      price: Number(prod.price),
      images: parsePostgresArray(prod.images).map(transformImageUrl),
    }));

    return NextResponse.json(formattedProducts, { status: 200 });
  } catch (error: any) {
    console.error("Failed to fetch database products:", error);
    return NextResponse.json(
      { error: "Failed to fetch products registry", details: error.message },
      { status: 500 }
    );
  }
}

// =========================================================================
// 2. POST: Create product with associated SKUs, serial and placement parameters
// =========================================================================
export async function POST(request: NextRequest) {
  try {
    const data = await request.json();

    // Validate required payload parameters
    if (!data.name || !data.price || !data.category) {
      return NextResponse.json(
        { error: "Bad Request: Missing name, price, or category properties" },
        { status: 400 }
      );
    }

    // Explicitly handle Prisma 7 required schema fields
    const generatedSerial = data.serial || `WST-${Date.now().toString().slice(-6)}`;
    const targetPlacement = (data.placement as SectionPlacement) || SectionPlacement.ARCHIVE_GRID;

    const product = await prisma.product.create({
      data: {
        serial: generatedSerial,
        name: data.name.toUpperCase(),
        price: data.price,
        category: data.category.toLowerCase(),
        composition: data.composition || "RAW COTTON BLEND // UNKNOWN SPEC",
        details: data.details || "",
        measurements: data.measurements || "ONE SIZE MATRIX FRAME",
        images: data.images || [],
        placement: targetPlacement,
        skus: {
          create: (data.skus || []).map((sku: any) => ({
            color: sku.color.toUpperCase(),
            size: sku.size.toUpperCase(),
            stock: Number(sku.stock) || 0,
          })),
        },
      },
      include: {
        skus: true,
      },
    });

    return NextResponse.json(product, { status: 201 });
  } catch (error: any) {
    console.error("Failed to create product:", error);
    return NextResponse.json(
      { error: "Database transaction aborted", details: error.message },
      { status: 500 }
    );
  }
}

// =========================================================================
// 3. PUT: Update dynamic product images
// =========================================================================
export async function PUT(request: NextRequest) {
  try {
    const data = await request.json();
    const { id, images } = data;

    if (!id || !Array.isArray(images)) {
      return NextResponse.json(
        { error: "Bad Request: id and images array are required parameters" },
        { status: 400 }
      );
    }

    const product = await prisma.product.update({
      where: { id },
      data: {
        images: images,
      },
    });

    return NextResponse.json(product, { status: 200 });
  } catch (error: any) {
    console.error("Failed to update product images:", error);
    return NextResponse.json(
      { error: "Failed to update target asset maps", details: error.message },
      { status: 500 }
    );
  }
}