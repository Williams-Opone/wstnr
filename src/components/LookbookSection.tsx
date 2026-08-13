import { getPrismaClient } from "@/lib/prisma";
import LookbookStatement from "@/components/LookbookStatement";

export const dynamic = "force-dynamic";

export default async function LookbookSection() {
  const client = getPrismaClient();
  const products = await client.product.findMany({
    where: { placement: "LOOKBOOK_STATEMENT", isActive: true },
    orderBy: { createdAt: "desc" },
    take: 8,
    select: { id: true, name: true, price: true, images: true },
  });

  const formatted = products.map((p) => ({
    id: p.id,
    name: p.name,
    price: Number(p.price),
    images: Array.isArray(p.images) ? p.images : [],
  }));

  return <LookbookStatement products={formatted} />;
}