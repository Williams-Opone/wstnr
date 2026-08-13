"use client";
import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useRouter } from "next/navigation";

interface GridProduct {
  id: string;
  serial: string;
  name: string;
  price: number;
  category: string;
  composition: string;
  images: string[];
}

interface AsymmetricGridProps {
  products: GridProduct[];
}

const DESKTOP_LAYOUTS = [
  "col-span-12 md:col-span-5 row-span-2 min-h-[600px] md:min-h-[900px]",
  "col-span-12 md:col-span-3 min-h-[350px] md:min-h-[440px]",
  "col-span-12 md:col-span-4 min-h-[350px] md:min-h-[440px]",
  "col-span-12 md:col-span-3 min-h-[350px] md:min-h-[440px]",
  "col-span-12 md:col-span-4 min-h-[350px] md:min-h-[440px]",
  "col-span-12 md:col-span-5 row-span-2 min-h-[600px] md:min-h-[900px]",
];

export default function AsymmetricGrid({ products }: AsymmetricGridProps) {
  const router = useRouter();
  const [maxPrice, setMaxPrice] = useState<number>(180);

  const filteredProducts = useMemo(
    () => products.filter((prod) => prod.price <= maxPrice),
    [products, maxPrice]
  );

  return (
    <section className="py-16 md:py-32 px-4 md:px-12 bg-black border-b border-zinc-900">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end border-b border-zinc-900 pb-8 mb-10 md:mb-16 font-mono text-xs gap-8 select-none">
          <div className="flex flex-col gap-1">
            <span className="tracking-widest text-zinc-500 uppercase">
              [ ARCHIVE_MOSAIC_COLLECTIONS ]
            </span>
            <span className="text-zinc-400 text-[10px]">
              SHOWING ITEMS BELOW: ${maxPrice}.00
            </span>
          </div>
          <div className="w-full md:w-72 flex flex-col gap-2">
            <div className="flex justify-between font-mono text-[10px] text-zinc-500">
              <span>MIN // $30</span>
              <span className="text-white font-bold">BUDGET THRESHOLD: ${maxPrice}</span>
            </div>
            <input
              type="range"
              min="30"
              max="180"
              step="1"
              value={maxPrice}
              onChange={(e) => setMaxPrice(Number(e.target.value))}
              className="w-full h-1 bg-zinc-800 appearance-none outline-none cursor-none accent-white"
              style={{ WebkitAppearance: "none" }}
            />
            <div
              className="h-0.5 bg-white pointer-events-none"
              style={{ width: `${((maxPrice - 30) / 150) * 100}%` }}
            />
          </div>
        </div>

        {/* Mobile 2x2 */}
        <div className="grid grid-cols-2 md:hidden gap-2 bg-zinc-900 border border-zinc-900">
          <AnimatePresence mode="popLayout">
            {filteredProducts.map((prod, idx) => (
              <motion.div
                key={prod.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                onClick={() => router.push(`/shop/inspect?id=${prod.id}`)}
                className="bg-[#949492] text-black p-4 flex flex-col justify-between min-h-[380px] relative overflow-hidden select-none"
              >
                <div className="font-mono text-[9px] opacity-40 font-bold tracking-widest uppercase z-10 relative">
                  [ ID_REF // {prod.serial} ]
                </div>
                <div className="w-full flex-1 flex items-center justify-center p-2 relative">
                  {prod.images[0] ? (
                    <Image
                      src={prod.images[0]}
                      alt={prod.name}
                      width={300}
                      height={400}
                      unoptimized
                      className="w-auto h-full max-h-[280px] object-contain transition-transform duration-700"
                      loading={idx < 2 ? "eager" : "lazy"}
                    />
                  ) : (
                    <div className="w-full h-full bg-zinc-300 animate-pulse" />
                  )}
                </div>
                <div className="w-full flex justify-between items-baseline pt-4 border-t border-black/15 font-mono text-[11px] font-black tracking-wide relative z-10 bg-[#949492]">
                  <div className="flex flex-col">
                    <span className="uppercase text-[10px]">{prod.name}</span>
                    <span className="text-[8px] opacity-40 font-normal tracking-tight mt-0.5">
                      {prod.composition}
                    </span>
                  </div>
                  <span className="opacity-70 font-bold text-xs">${prod.price}</span>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Desktop mosaic */}
        <motion.div
          layout
          className="hidden md:grid grid-cols-12 gap-px bg-zinc-900 border border-zinc-900"
        >
          <AnimatePresence mode="popLayout">
            {filteredProducts.map((prod, idx) => {
              const spanClass = DESKTOP_LAYOUTS[idx % DESKTOP_LAYOUTS.length];
              return (
                <motion.div
                  key={prod.id}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                  onClick={() => router.push(`/shop/inspect?id=${prod.id}`)}
                  className={`${spanClass} bg-[#949492] text-black p-6 md:p-10 flex flex-col justify-between group cursor-none relative overflow-hidden select-none`}
                >
                  <div className="font-mono text-[9px] opacity-40 font-bold tracking-widest uppercase z-10 relative">
                    [ ID_REF // {prod.serial} ]
                  </div>

                  <div className="w-full h-full flex items-center justify-center p-4 my-auto relative">
                    {prod.images[0] ? (
                      <Image
                        src={prod.images[0]}
                        alt={prod.name}
                        width={500}
                        height={600}
                        unoptimized
                        className="w-auto h-full max-h-[300px] md:max-h-[500px] object-contain transition-transform duration-700 ease-out group-hover:scale-105"
                        loading={idx < 2 ? "eager" : "lazy"}
                      />
                    ) : (
                      <div className="w-full h-full bg-zinc-300 animate-pulse" />
                    )}
                  </div>

                  <div className="absolute inset-x-0 bottom-16 bg-gradient-to-t from-[#949492] via-[#949492]/95 to-transparent p-6 pt-12 transform translate-y-6 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 z-20 flex flex-col gap-1 font-mono text-center">
                    <span className="text-[11px] text-black font-black tracking-widest uppercase bg-white border border-black py-3.5 shadow-xl">
                      INSPECT DESIGN ➔
                    </span>
                  </div>

                  <div className="w-full flex justify-between items-baseline pt-6 border-t border-black/15 font-mono text-xs md:text-sm font-black tracking-wide relative z-10">
                    <div className="flex flex-col">
                      <span className="uppercase">{prod.name}</span>
                      <span className="text-[9px] opacity-40 font-normal tracking-tight mt-0.5">
                        {prod.composition}
                      </span>
                    </div>
                    <span className="opacity-70 font-bold">${prod.price}</span>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>

        {filteredProducts.length === 0 && (
          <div className="w-full py-20 text-center font-mono text-xs text-zinc-600 border border-dashed border-zinc-900 mt-4 uppercase">
            [ OUTSIDE RECOGNIZED BUDGET MATRIX PARAMETERS ]
          </div>
        )}
      </div>
    </section>
  );
}