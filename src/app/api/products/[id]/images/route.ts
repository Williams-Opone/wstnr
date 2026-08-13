import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { prisma } from "@/lib/prisma";

export async function PATCH(
  request: NextRequest,
  context: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await context.params;
    const body = await request.json();

    const product = await prisma.product.update({
      where: { id },
      data: {
        images: body.images,
      },
    });

    return NextResponse.json(product);
  } catch (error) {
    console.error("Failed to update product images:", error);
    return NextResponse.json(
      { error: "FAILED TO UPDATE IMAGES" },
      { status: 500 }
    );
  }
}