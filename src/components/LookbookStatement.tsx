"use client";

import { useRef } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

// Fallback images are actual products (with productId = "demo" or "")
const FALLBACK_LOOKBOOK = [
  { id: "lb1", name: "CONCRETE PROPHET TEE", price: 45, productId: "", url: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=800&q=80" },
  { id: "lb2", name: "BRUTALIST HOODIE", price: 95, productId: "", url: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=800&q=80" },
  { id: "lb3", name: "MONOLITH CARGO PANTS", price: 120, productId: "", url: "https://images.unsplash.com/photo-1517438476312-10d79c077509?w=800&q=80" },
  { id: "lb4", name: "SHRAPNEL CREW", price: 78, productId: "", url: "https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=800&q=80" },
  { id: "lb5", name: "REBAR CHAIN", price: 60, productId: "", url: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800&q=80" },
];

interface ComingSoonProduct {
  id: string;
  name: string;
  price: number;
  images: string[];
}

export default function LookbookStatement({ products }: { products?: ComingSoonProduct[] }) {
  const router = useRouter();
  const constraintsRef = useRef<HTMLDivElement>(null); // keep if needed

  // Build slides from products or fallback
  const slides = products && products.length > 0
    ? products.flatMap((p) =>
        p.images?.length
          ? p.images.map((url, idx) => ({
              id: `${p.id}-${idx}`,
              name: p.name,
              price: p.price,
              productId: p.id,
              url,
            }))
          : []
      )
    : FALLBACK_LOOKBOOK;

  const finalSlides = slides.length > 0 ? slides : FALLBACK_LOOKBOOK;

  return (
    <div className="w-full bg-black border-b border-zinc-900 select-none">
      <section className="py-14 md:py-20 border-b border-zinc-900 overflow-hidden">
        <div className="px-4 sm:px-6 md:px-12 mb-6 md:mb-8 font-mono text-[10px] text-zinc-500 tracking-[0.2em] flex justify-between items-center">
          <span>[ COMING SOON / PREORDER ]</span>
          <span className="hidden sm:inline animate-pulse">◀ SCROLL TO EXPLORE → CLICK TO PREORDER ▶</span>
        </div>

        {/* Native horizontal scroll */}
        <div
          ref={constraintsRef}
          className="px-4 sm:px-6 md:px-12 overflow-x-auto overflow-y-hidden touch-pan-x scroll-smooth"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          <div className="flex gap-4 md:gap-6 w-max">
            {finalSlides.map((slide) => (
              <div
                key={slide.id}
                onClick={() => slide.productId && router.push(`/shop/inspect?id=${slide.productId}`)}
                className="w-[78vw] sm:w-[60vw] md:w-[30vw] lg:w-[28vw] aspect-[3/4] bg-zinc-950 border border-zinc-900 shrink-0 relative overflow-hidden cursor-pointer group"
              >
                <Image
                  src={slide.url}
                  alt={slide.name}
                  width={600}
                  height={800}
                  unoptimized
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="absolute bottom-2 left-2 right-2 md:bottom-3 md:left-3 font-mono text-[9px] text-zinc-200 uppercase bg-black/70 px-2 py-0.5 border border-zinc-900 backdrop-blur-sm flex justify-between items-center gap-2">
                  <span>{slide.name}</span>
                  <span>${slide.price}</span>
                </div>
                {slide.productId && (
                  <div className="absolute top-2 right-2 bg-white text-black text-[8px] font-black px-2 py-1 uppercase tracking-widest">
                    PREORDER
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-36 px-4 sm:px-6 md:px-12 bg-black text-center flex flex-col items-center justify-center relative">
        <div className="absolute left-4 sm:left-6 right-4 sm:right-6 top-0 bottom-0 border-l border-r border-zinc-900/30 pointer-events-none" />
        <div className="max-w-3xl z-10 px-2">
          <span className="font-mono text-[9px] text-zinc-600 tracking-[0.4em] block mb-6 uppercase">[ NEXT DROP / PREORDER ]</span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extralight tracking-tight uppercase leading-[1.1] text-zinc-200">
            UPCOMING EXTRACTIONS. <br className="hidden sm:block" />
            RESERVE NOW BEFORE THEY VANISH.
          </h2>
          <p className="font-mono text-[9px] sm:text-[10px] text-zinc-500 tracking-widest mt-6 md:mt-8">— WSTRNR STUDIO, 2026</p>
        </div>
      </section>
    </div>
  );
}