"use client";
import { ForwardRefRenderFunction, forwardRef, useRef } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import Image from "next/image";
import { useRouter } from "next/navigation";

interface FeaturedProductProps {
  product: {
    id: string;
    serial: string;
    name: string;
    price: number;
    category: string;
    composition: string;
    images: string[];
  };
}

const FeaturedDropComponent: ForwardRefRenderFunction<HTMLDivElement, FeaturedProductProps> = ({ product }, ref) => {
  const router = useRouter();
  const buttonRef = useRef<HTMLButtonElement>(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 150, damping: 15 });
  const springY = useSpring(y, { stiffness: 150, damping: 15 });

  const handleMagneticMove = (e: React.MouseEvent) => {
    if (!buttonRef.current) return;
    const { clientX, clientY } = e;
    const { left, top, width, height } = buttonRef.current.getBoundingClientRect();
    const centerX = left + width / 2;
    const centerY = top + height / 2;
    x.set((clientX - centerX) * 0.35);
    y.set((clientY - centerY) * 0.35);
  };

  const handleMagneticLeave = () => { x.set(0); y.set(0); };

  return (
    <div ref={ref} className="scroll-mt-4 bg-black w-full">
      {/* Ticker */}
      <div className="w-full bg-zinc-900 border-t border-b border-zinc-800 py-3 overflow-hidden whitespace-nowrap font-mono text-[10px] sm:text-[11px] tracking-widest flex select-none">
        <motion.div animate={{ x: ["0%", "-50%"] }} transition={{ ease: "linear", duration: 16, repeat: Infinity }} className="flex gap-8 sm:gap-16 pr-16 shrink-0 uppercase text-zinc-300 font-bold text-[10px] sm:text-[11px]">
          <span>◀◀ DROP 04 LIVE</span> <span>CONCRETE PROPHETS VOL. 04</span> <span>{product.category} SPECIFICATION</span> <span>LIMITED RUN</span>
          <span>◀◀ DROP 04 LIVE</span> <span>CONCRETE PROPHETS VOL. 04</span> <span>{product.category} SPECIFICATION</span> <span>LIMITED RUN</span>
        </motion.div>
      </div>

      <section className="py-12 sm:py-16 md:py-24 lg:py-32 px-4 sm:px-6 md:px-10 lg:p-12 max-w-7xl mx-auto flex flex-col gap-10 md:gap-16">
        <div className="w-full grid grid-cols-1 md:grid-cols-12 items-start md:items-center bg-[#b5b5b3] text-black border-[3px] md:border-[4px] border-black relative overflow-hidden p-6 sm:p-8 md:p-12 lg:p-16 xl:p-20 shadow-2xl min-h-[420px] md:min-h-[480px] lg:min-h-[540px]" style={{ backgroundImage: "radial-gradient(rgba(0,0,0,0.15) 1px, transparent 0)", backgroundSize: "4px 4px" }}>
          <div className="absolute inset-0 opacity-[0.06] bg-repeat pointer-events-none mix-blend-overlay bg-[url('/images/concrete-noise.png')]" />
          <div className="col-span-1 md:col-span-5 flex justify-center md:justify-end pr-0 md:pr-10 lg:pr-16 relative z-10">
            <div className="w-full max-w-[260px] sm:max-w-[300px] md:max-w-[340px] lg:max-w-[380px] aspect-square flex items-center justify-center relative">
              {product.images[0] ? (
                <Image src={product.images[0]} alt={product.name} width={400} height={400} unoptimized />
              ) : (
                <div className="w-full h-full bg-zinc-300 animate-pulse" />
              )}
            </div>
          </div>
          <div className="col-span-1 md:col-span-7 flex flex-col items-start gap-4 md:gap-5 mt-8 md:mt-0 relative z-10">
            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-[64px] font-black tracking-tight uppercase leading-[0.9] text-black font-sans">LATEST DROP</h2>
            <div className="font-sans text-lg sm:text-xl md:text-2xl lg:text-[24px] font-bold text-black tracking-tight leading-snug">
              <span className="block md:inline">— "{product.name}"</span>
              <span className="block text-sm sm:text-base md:text-[19px] font-medium text-black/80 mt-1">LTD BATCH EXTRACTION.</span>
            </div>
            <motion.div onMouseMove={handleMagneticMove} onMouseLeave={handleMagneticLeave} className="relative py-3 md:py-4 pr-8 md:pr-12 flex items-center justify-center group mt-2">
              <motion.button ref={buttonRef} style={{ x: springX, y: springY }} onClick={() => router.push(`/shop/inspect?id=${product.id}`)} className="px-8 sm:px-10 py-3 md:py-4 bg-black text-white font-sans text-xs sm:text-sm font-bold tracking-wider uppercase flex items-center gap-2 md:gap-3 border border-transparent shadow-xl transition-colors duration-200 group-hover:bg-zinc-900 cursor-none whitespace-nowrap">
                <span>INSPECT DROP</span>
                <motion.span animate={{ x: [0, 4, 0] }} transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}>➔</motion.span>
              </motion.button>
            </motion.div>
          </div>
        </div>
        <div className="w-full grid grid-cols-2 md:grid-cols-4 gap-y-8 gap-x-6 pt-8 md:pt-12 border-t border-zinc-900 font-mono text-[10px] sm:text-[11px] text-zinc-500 uppercase select-none">
          <div className="flex flex-col gap-1.5"><span className="text-zinc-700 font-bold">[ BATCH_SPEC ]</span><span className="text-zinc-300 font-light">{product.serial}</span></div>
          <div className="flex flex-col gap-1.5 font-sans"><span className="text-zinc-700 font-bold font-mono">[ TEXTILE_BUILD ]</span><span className="text-zinc-300 font-light text-[9px] sm:text-[10px] tracking-wide">{product.composition}</span></div>
          <div className="flex flex-col gap-1.5"><span className="text-zinc-700 font-bold">[ CATALOG_NODE ]</span><span className="text-zinc-300 font-light">// {product.category}</span></div>
          <div className="flex flex-col gap-1.5 flex-wrap"><span className="text-zinc-700 font-bold">[ AVAILABILITY ]</span><span className="text-red-500 font-bold text-[9px] sm:text-[10px] animate-pulse">CRITICAL STOCK LEVELS // NO RESTOCK RE-RUNS</span></div>
        </div>
      </section>
    </div>
  );
};

export default forwardRef(FeaturedDropComponent);