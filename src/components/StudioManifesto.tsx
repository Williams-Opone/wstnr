"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function StudioManifesto() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.section
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="py-16 md:py-24 border-b border-zinc-900"
    >
      <p className="font-mono text-[10px] tracking-[0.35em] text-zinc-600 uppercase mb-10">
        [ MANIFESTO ]
      </p>

      <div className="max-w-4xl mx-auto font-sans text-2xl md:text-4xl font-light tracking-tight leading-relaxed text-zinc-400 space-y-8">
        <p>
          We don’t chase trends. We erase them. Every WSTRNR piece is born from
          material honesty — raw concrete greys, blacked-out seams, zero
          branding that screams.
        </p>
        <p>
          The atelier functions as a{" "}
          <span className="text-white font-medium">closed research loop</span>:
          study, prototype, destroy, repeat. Only the strongest forms survive
          the edit.
        </p>
        <p className="text-zinc-600 font-mono text-[10px] uppercase tracking-widest mt-10">
          Concrete Prophets · Volume I · Heidelberg / Berlin
        </p>
      </div>
    </motion.section>
  );
}