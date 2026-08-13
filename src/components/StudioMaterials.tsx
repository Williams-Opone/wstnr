"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const materials = [
  { name: "RAW CANVAS", weight: "450 GSM", origin: "Japan" },
  { name: "WAXED COTTON", weight: "320 GSM", origin: "UK" },
  { name: "CEMENT-WASH DENIM", weight: "14 OZ", origin: "Italy" },
  { name: "HARDWARE", weight: "ZINC ALLOY", origin: "Germany" },
];

export default function StudioMaterials() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.section
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: 0.3 }}
      className="py-16 md:py-24 border-b border-zinc-900"
    >
      <p className="font-mono text-[10px] tracking-[0.35em] text-zinc-600 uppercase mb-12">
        [ MATERIAL LIBRARY ]
      </p>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {materials.map((m, i) => (
          <div
            key={i}
            className="bg-zinc-950 border border-zinc-900 p-6 md:p-8 flex flex-col justify-between gap-4 hover:border-zinc-700 transition-colors"
          >
            <span className="font-mono text-[10px] tracking-widest text-zinc-600 uppercase">
              {m.name}
            </span>
            <div className="text-zinc-400 text-sm font-mono">
              <div>{m.weight}</div>
              <div className="text-zinc-700">{m.origin}</div>
            </div>
          </div>
        ))}
      </div>
    </motion.section>
  );
}