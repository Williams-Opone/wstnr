import { NextRequest, NextResponse } from "next/server";
import { getPrismaClient } from "@/lib/prisma";

export async function GET(req: NextRequest) {
  const url = new URL(req.url);
  const excludeId = url.searchParams.get("excludeId") || "";
  const category = url.searchParams.get("category") || "";

  const prisma = getPrismaClient();
  const similar = await prisma.product.findMany({
    where: {
      id: { not: excludeId },
      isActive: true,
      ...(category ? { category: category.toLowerCase() } : {}),
    },
    take: 4,
    orderBy: { createdAt: "desc" },
  });

  return NextResponse.json({ products: similar });
}