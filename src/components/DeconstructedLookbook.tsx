"use client";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function DeconstructedLookbook() {
  const containerRef = useRef<HTMLDivElement>(null);

  // Monitor scroll progression specifically over this long lookbook runway
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  // map out varying scrolling speeds for true asymmetric multi-layered parallax
  const yDriftSlow = useTransform(scrollYProgress, [0, 1], ["0%", "15%"]);
  const yDriftFast = useTransform(scrollYProgress, [0, 1], ["0%", "-30%"]);
  const yDriftUltra = useTransform(scrollYProgress, [0, 1], ["5%", "-45%"]);

  return (
    <section 
      ref={containerRef}
      className="min-h-[220vh] bg-black text-white py-40 border-t border-zinc-900 overflow-hidden relative select-none"
    >
      {/* Structural Floating Label */}
      <div className="absolute top-12 left-6 md:left-12 font-mono text-[9px] text-zinc-600 tracking-[0.4em]">
        [ RUNWAY_02 // THE DECONSTRUCTED FORM ]
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 h-full flex flex-col gap-[35vh] relative">
        
        {/* ROW 1: Pinned Far Left - Heavy Cotton Focus */}
        <div className="grid grid-cols-1 md:grid-cols-12 w-full">
          <motion.div 
            style={{ y: yDriftSlow }}
            className="md:col-span-5 flex flex-col gap-6"
          >
            <div className="w-full aspect-[3/4] bg-zinc-950 border border-zinc-900 overflow-hidden relative group">
              <img 
                src="/images/about_macro1.jpg" 
                alt="Heavy cotton form" 
                className="w-full h-full object-cover grayscale contrast-115 transition-transform duration-700 group-hover:scale-102"
              />
              <div className="absolute top-4 left-4 font-mono text-[9px] text-zinc-500 bg-black/80 px-2 py-1 border border-zinc-900">
                FRAME // 01A
              </div>
            </div>
            <div className="font-mono text-[10px] text-zinc-500 tracking-wider">
              01 // DECONSTRUCTED TEES: RAW POSTURE HEAVY GAUGE WEIGHTS.
            </div>
          </motion.div>
        </div>

        {/* ROW 2: Massive Shift Right - High Contrast Video Loop Layer */}
        <div className="grid grid-cols-1 md:grid-cols-12 w-full justify-end">
          <motion.div 
            style={{ y: yDriftFast }}
            className="md:col-start-7 md:col-span-6 flex flex-col gap-6 relative"
          >
            {/* Background border trace for an organic overlapping layout feel */}
            <div className="absolute -inset-6 border border-zinc-900/30 pointer-events-none z-0" />
            
            <div className="w-full aspect-[4/5] bg-zinc-950 border border-zinc-900 overflow-hidden relative z-10">
              {/* High contrast, heavily grained infinite loop video */}
              <video 
                src="/videos/lookbook_texture_grain.mp4"
                autoPlay 
                muted 
                loop 
                playsInline
                className="w-full h-full object-cover grayscale opacity-60 mix-blend-screen scale-105"
              />
              <div className="absolute bottom-4 left-4 font-mono text-[9px] text-white bg-black px-3 py-1 border border-zinc-800 tracking-widest">
                LIVE_FEED // ATELIER_STUDIO_MOTION
              </div>
            </div>
            <div className="font-mono text-[10px] text-zinc-400 max-w-xs tracking-relaxed leading-relaxed ml-auto text-right">
              THE HARDWARE (CHAINS & LINKS) REJECTS MARKUP TRADITIONS. HAND-WELDED INCONSISTENCIES RETAINED.
            </div>
          </motion.div>
        </div>

        {/* ROW 3: Overlapping Central Element - High Parallax Macro Shot */}
        <div className="grid grid-cols-1 md:grid-cols-12 w-full relative">
          <motion.div 
            style={{ y: yDriftUltra }}
            className="md:col-start-3 md:col-span-5 md:-translate-y-24 flex flex-col gap-4"
          >
            <div className="w-full aspect-[2/3] bg-zinc-950 border border-zinc-900 overflow-hidden relative shadow-2xl">
              <img 
                src="/images/about_wide.jpg" 
                alt="Textile silhouette" 
                className="w-full h-full object-cover grayscale brightness-90 filter contrast-125"
              />
              <div className="absolute top-4 right-4 font-mono text-[9px] text-zinc-500">
                [ CROWN_ARCH_REF // 03B ]
              </div>
            </div>
            <div className="font-mono text-[10px] text-zinc-600 uppercase tracking-[0.2em] mt-2">
              // SKULLIES & BEANIES APPLIED BY HAND.
            </div>
          </motion.div>
        </div>

      </div>

      {/* Vertical Side String Decor */}
      <div className="absolute right-8 top-1/3 [writing-mode:vertical-lr] font-mono text-[9px] text-zinc-800 tracking-[0.8em] hidden lg:block">
        WSTRNR CLOTHING BRAND CO // ALL RIGHTS VOIDED
      </div>
    </section>
  );
}