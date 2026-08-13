"use client";
import { useRef } from "react";
import { motion, useScroll, useTransform, useVelocity, useSpring } from "framer-motion";

export default function TextualDecay() {
  const containerRef = useRef<HTMLDivElement>(null);

  // 1. Monitor the scroll position over this specific layout element
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  // 2. Track the speed of the user's scrolling actions
  const scrollVelocity = useVelocity(scrollYProgress);
  
  // 3. Smooth out the raw data so the distortion flows organically instead of snapping
  const smoothedVelocity = useSpring(scrollVelocity, { stiffness: 100, damping: 30 });

  // 4. Map the velocity directly into a structural skew angle (-25deg to 25deg)
  const textSkew = useTransform(smoothedVelocity, [-1, 1], [-25, 25]);
  
  // 5. Map the velocity into subtle vertical compression/stretching scale
  const textScaleY = useTransform(smoothedVelocity, [-1, 1], [0.85, 1.15]);

  // 6. Map standard linear scroll progression to alternate horizontal drifting speeds
  const xRowLeft = useTransform(scrollYProgress, [0, 1], ["0%", "-40%"]);
  const xRowRight = useTransform(scrollYProgress, [0, 1], ["-30%", "10%"]);

  return (
    <section 
      ref={containerRef} 
      className="min-h-[120vh] bg-black py-40 border-t border-b border-zinc-900 overflow-hidden flex flex-col justify-center gap-12 relative select-none"
    >
      {/* Structural Framework Subheader Label */}
      <div className="absolute top-12 left-6 md:left-12 font-mono text-[9px] text-zinc-600 tracking-[0.3em]">
        [ MATRIX_SYSTEM_03 // STUDIO_MANNERISMS_MANIFESTO ]
      </div>

      {/* Dynamic Animated Typography Container Group */}
      <motion.div 
        style={{ skewX: textSkew, scaleY: textScaleY }}
        className="w-full flex flex-col gap-6 md:gap-8 transition-transform duration-200"
      >
        
        {/* ROW 1: SKEWS LEFT */}
        <motion.div 
          style={{ x: xRowLeft }}
          className="whitespace-nowrap text-[12vw] font-black tracking-tighter text-white font-mono leading-none flex gap-8 select-none"
        >
          <span>HEAVY GAUGE ARCHITECTURE</span>
          <span className="text-zinc-900">//</span>
          <span>RAW COTTON SHEDS</span>
          <span className="text-zinc-900">//</span>
          <span>FRACTURED SILHOUETTES</span>
        </motion.div>

        {/* ROW 2: SKEWS RIGHT */}
        <motion.div 
          style={{ x: xRowRight }}
          className="whitespace-nowrap text-[12vw] font-black tracking-tighter text-zinc-800 font-mono leading-none flex gap-8 select-none"
        >
          <span className="text-zinc-950">MOLTEN THREAD LOOMS</span>
          <span>//</span>
          <span>INDUSTRIAL HARDWARE PACKS</span>
          <span>//</span>
          <span className="text-zinc-950">FORM ADJUSTMENT</span>
        </motion.div>

        {/* ROW 3: SKEWS LEFT ACCENTED */}
        <motion.div 
          style={{ x: xRowLeft }}
          className="whitespace-nowrap text-[12vw] font-black tracking-tighter text-white font-mono leading-none flex gap-8 select-none"
        >
          <span>DECONSTRUCTED EDITIONS</span>
          <span className="text-zinc-900">//</span>
          <span>CROWNS & SKULLIES</span>
          <span className="text-zinc-900">//</span>
          <span>CHANNELS DECAYING</span>
        </motion.div>

      </motion.div>

      {/* Bottom Technical Frame Metric */}
      <div className="absolute bottom-12 right-6 md:right-12 text-right font-mono text-[9px] text-zinc-600 tracking-widest max-w-xs leading-relaxed">
        THE FABRIC CONFORMS TO CONTINUOUS post-wear WEAR CYCLES // DESTRUCTION DECREASED.
      </div>

    </section>
  );
}