// app/api/products/[id]/images/route.ts
import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function PATCH(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const { images } = await request.json();
    
    const product = await prisma.product.update({
      where: { id: params.id },
      data: { images },
    });

    return NextResponse.json(product);
  } catch (error) {
    console.error("Failed to update images:", error);
    return NextResponse.json({ error: "Update failed" }, { status: 500 });
  }
}