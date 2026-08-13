import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET() {
  try {
    const products = await prisma.product.findMany({
      orderBy: { createdAt: "desc" },
      take: 50,
      include: { skus: true },
    });
    return NextResponse.json({ products });
  } catch (error) {
    console.error("Fetch products error:", error);
    return NextResponse.json({ products: [], error: "FAILED TO LOAD" }, { status: 500 });
  }
}