import { Suspense } from "react";
import Link from "next/link";
import Image from "next/image";
import CustomCursor from "@/components/CustomCursor";
import PriceFilter from "@/components/PriceFilter";
import { getPrismaClient } from "@/lib/prisma";

export const dynamic = "force-dynamic";

interface SearchParams {
  category?: string;
  maxPrice?: string;
}

const DESKTOP_LAYOUTS = [
  "col-span-12 md:col-span-5 row-span-2 min-h-[600px] md:min-h-[900px]",
  "col-span-12 md:col-span-3 min-h-[350px] md:min-h-[440px]",
  "col-span-12 md:col-span-4 min-h-[350px] md:min-h-[440px]",
  "col-span-12 md:col-span-3 min-h-[350px] md:min-h-[440px]",
  "col-span-12 md:col-span-4 min-h-[350px] md:min-h-[440px]",
  "col-span-12 md:col-span-5 row-span-2 min-h-[600px] md:min-h-[900px]",
];

async function ShopCatalog({ searchParams }: { searchParams: SearchParams }) {
  const category = searchParams.category;
  const maxPriceThreshold = Number(searchParams.maxPrice || "180");

  const client = getPrismaClient();
  const products = await client.product.findMany({
    where: {
      isActive: true,
      ...(category ? { category: category.toLowerCase() } : {}),
      price: { lte: maxPriceThreshold },
    },
    orderBy: { createdAt: "desc" },
  });

  if (products.length === 0) {
    return (
      <div className="w-full py-32 text-center font-mono text-xs text-zinc-600 border border-dashed border-zinc-900 mt-4 uppercase tracking-widest">
        [ OUTSIDE RECOGNIZED BUDGET MATRIX PARAMETERS ]
      </div>
    );
  }

  return (
    <>
      {/* Mobile: strict 2x2 */}
      <div className="grid grid-cols-2 md:hidden gap-3 bg-zinc-900 border border-zinc-900">
        {products.map((prod, idx) => (
          <Link
            key={prod.id}
            href={`/shop/inspect?id=${prod.id}`}
            className="bg-[#949492] text-black p-4 flex flex-col justify-between min-h-[400px] relative overflow-hidden select-none block hover:scale-[0.99] transition-transform duration-150"
          >
            <div className="font-mono text-[9px] opacity-40 font-bold tracking-widest uppercase z-10 relative">
              [ ID_REF // {prod.serial} ]
            </div>
            <div className="w-full h-full flex items-center justify-center p-2 relative z-0">
              <Image
                src={prod.images?.[0] || "/images/placeholder.jpg"}
                alt={prod.name}
                width={300}
                height={400}
                unoptimized
                className="w-auto h-full max-h-[300px] object-contain"
                loading={idx < 2 ? "eager" : "lazy"}
              />
            </div>
            <div className="relative z-10 bg-[#949492] w-full flex justify-between items-baseline pt-4 border-t border-black/15 font-mono text-[10px] sm:text-[11px] font-black tracking-wide">
              <span className="uppercase text-[10px] leading-tight">{prod.name}</span>
              <span className="opacity-70 font-bold text-xs">${Number(prod.price)}</span>
            </div>
          </Link>
        ))}
      </div>

      {/* Desktop: asymmetrical mosaic */}
      <div className="hidden md:grid grid-cols-12 gap-px bg-zinc-900 border border-zinc-900">
        {products.map((prod, idx) => {
          const spanClass = DESKTOP_LAYOUTS[idx % DESKTOP_LAYOUTS.length];
          return (
            <Link
              key={prod.id}
              href={`/shop/inspect?id=${prod.id}`}
              className={`${spanClass} bg-[#949492] text-black p-6 md:p-10 flex flex-col justify-between group cursor-none relative overflow-hidden select-none hover:brightness-105 transition-all`}
            >
              <div className="font-mono text-[9px] opacity-40 font-bold tracking-widest uppercase z-10 relative">
                [ ID_REF // {prod.serial} ]
              </div>

              <div className="w-full h-full flex items-center justify-center p-4 my-auto relative">
                <Image
                  src={prod.images?.[0] || "/images/placeholder.jpg"}
                  alt={prod.name}
                  width={500}
                  height={600}
                  unoptimized
                  className="w-auto h-full max-h-[300px] md:max-h-[500px] object-contain transition-transform duration-600 group-hover:scale-[1.02]"
                  loading={idx < 2 ? "eager" : "lazy"}
                />
              </div>

              <div className="absolute inset-x-0 bottom-16 bg-gradient-to-t from-[#949492] via-[#949492]/95 to-transparent p-6 pt-12 transform translate-y-6 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 z-20 flex flex-col gap-1 font-mono text-center">
                <span className="text-[11px] text-black font-black tracking-widest uppercase bg-white border border-black py-3.5 shadow-xl">
                  INSPECT SPECIFICATIONS ➔
                </span>
              </div>

              <div className="w-full flex justify-between items-baseline pt-6 border-t border-black/15 font-mono text-xs md:text-sm font-black tracking-wide relative z-10 bg-[#949492]">
                <div className="flex flex-col">
                  <span className="uppercase">{prod.name}</span>
                  <span className="text-[9px] opacity-40 font-normal tracking-tight mt-0.5">
                    {prod.composition || "LIMITED BATCH"}
                  </span>
                </div>
                <span className="opacity-70 font-bold">${Number(prod.price)}</span>
              </div>
            </Link>
          );
        })}
      </div>
    </>
  );
}

export default async function ShopPage({
  searchParams,
}: {
  searchParams: Promise<SearchParams>;
}) {
  const resolvedParams = await searchParams;
  const activeCategory = resolvedParams.category || null;
  const maxPrice = Number(resolvedParams.maxPrice || "180");

  return (
    <main className="bg-black text-white min-h-screen pt-32 pb-24 px-4 md:px-12 relative overflow-x-hidden">
      <CustomCursor />
      <div className="max-w-7xl mx-auto">
        {/* Filter Toolbar */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end border-b border-zinc-900 pb-8 mb-16 font-mono text-xs gap-8 select-none">
          <div className="flex flex-wrap gap-4 text-zinc-500">
            <Link
              href="/shop"
              className={`tracking-widest uppercase cursor-none ${
                !activeCategory ? "text-white font-bold underline" : "hover:text-zinc-300"
              }`}
            >
              [ INDEX_ALL ]
            </Link>
            {["shirts", "beanies", "skullies"].map((cat) => (
              <Link
                key={cat}
                href={`/shop?category=${cat}`}
                className={`tracking-widest uppercase cursor-none ${
                  activeCategory === cat ? "text-white font-bold underline" : "hover:text-zinc-300"
                }`}
              >
                // {cat}
              </Link>
            ))}
          </div>

          <PriceFilter initialMaxPrice={maxPrice} />
        </div>

        <Suspense
          fallback={
            <div className="w-full py-40 text-center font-mono text-xs text-zinc-600 uppercase tracking-widest">
              [ LOADING SECURE INVENTORY MATRIX... ]
            </div>
          }
        >
          <ShopCatalog searchParams={resolvedParams} />
        </Suspense>
      </div>
    </main>
  );
} 