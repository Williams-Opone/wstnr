"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";

interface SimilarProduct {
  id: string;
  serial: string;
  name: string;
  price: number;
  category: string;
  images: string[];
}

interface Props {
  currentProductId: string;
  category?: string;
}

export default function SimilarProducts({ currentProductId, category }: Props) {
  const [items, setItems] = useState<SimilarProduct[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchSimilar() {
      try {
        const params = new URLSearchParams();
        params.set("excludeId", currentProductId);
        if (category) params.set("category", category);
        const res = await fetch(`/api/similar?${params.toString()}`);
        const data = await res.json();
        setItems(data.products || []);
      } catch {
        setItems([]);
      } finally {
        setLoading(false);
      }
    }
    fetchSimilar();
  }, [currentProductId, category]);

  if (loading) {
    return <div className="font-mono text-xs text-zinc-600 uppercase tracking-widest">[ RESOLVING SIMILAR SPECIFICATIONS... ]</div>;
  }

  if (items.length === 0) return null;

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
      {items.map((prod) => (
        <Link
          key={prod.id}
          href={`/shop/inspect?id=${prod.id}`}
          className="bg-zinc-950 border border-zinc-900 overflow-hidden group flex flex-col"
        >
          <div className="aspect-[4/5] relative overflow-hidden">
            <img
              src={prod.images?.[0] || "/images/placeholder.jpg"}
              alt={prod.name}
              className="w-full h-full object-cover grayscale group-hover:scale-105 transition-transform duration-700"
              loading="lazy"
            />
            <div className="absolute bottom-3 left-3 font-mono text-[9px] text-zinc-500 uppercase bg-black/70 px-2 py-0.5 border border-zinc-900">
              {category || prod.category || "ARCHIVE"}
            </div>
          </div>
          <div className="p-4 md:p-5 flex flex-col gap-1">
            <h3 className="font-sans text-sm md:text-base font-black tracking-tight uppercase text-zinc-200 leading-tight">
              {prod.name}
            </h3>
            <div className="flex justify-between items-baseline font-mono text-[10px] md:text-xs text-zinc-500">
              <span className="uppercase tracking-wide">{prod.serial}</span>
              <span className="text-zinc-300 font-bold">${prod.price}</span>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}