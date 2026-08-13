"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

export default function StudioLocation() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.section
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: 0.4 }}
      className="py-16 md:py-24 border-b border-zinc-900"
    >
      <div className="flex flex-col md:flex-row justify-between gap-12">
        <div className="md:w-1/2">
          <p className="font-mono text-[10px] tracking-[0.35em] text-zinc-600 uppercase mb-6">
            [ PHYSICAL NODE ]
          </p>
          <div className="font-mono text-xs text-zinc-400 space-y-3">
            <p>WSTRNR / Atelier</p>
            <p className="text-zinc-700">Bergheimer Str. 147</p>
            <p className="text-zinc-700">69115 Heidelberg</p>
            <p className="text-zinc-700">Germany</p>
            <p className="text-zinc-600 mt-4 text-[10px] uppercase tracking-widest">
              By appointment only
            </p>
            <p className="text-zinc-600 text-[10px] uppercase tracking-widest">
              Coordinates released on confirmation
            </p>
          </div>
        </div>

        <div className="md:w-1/2 relative h-64 md:h-auto">
          <Image
            src="/images/studio/studio-map.jpg"
            alt="Studio location"
            fill
            className="object-cover border border-zinc-900 opacity-70"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>
      </div>
    </motion.section>
  );
}