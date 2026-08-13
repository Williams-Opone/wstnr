"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const steps = [
  {
    label: "01 — MATERIAL SOURCING",
    detail:
      "Deadstock textiles, raw denim, industrial-grade canvas. Only what passes the hand test.",
  },
  {
    label: "02 — PATTERN DECOMPRESSION",
    detail:
      "We break classic silhouettes into geometric fragments, then rebuild around the body.",
  },
  {
    label: "03 — ARCHIVE ITERATION",
    detail:
      "Each prototype enters a feedback loop with the archive team. 1 in 5 survive.",
  },
  {
    label: "04 — LOW-VOLUME RELEASE",
    detail:
      "Drops are limited to single-digit batches. No restocks. No retcons.",
  },
];

export default function StudioProcess() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.section
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: 0.2 }}
      className="py-16 md:py-24 border-b border-zinc-900"
    >
      <p className="font-mono text-[10px] tracking-[0.35em] text-zinc-600 uppercase mb-12">
        [ PROCESS ]
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
        {steps.map((step, i) => (
          <div
            key={i}
            className="border-l border-zinc-900 pl-6 hover:border-white/30 transition-colors"
          >
            <h3 className="font-mono text-xs font-bold tracking-widest text-white mb-2">
              {step.label}
            </h3>
            <p className="font-sans text-zinc-500 text-lg font-light leading-relaxed">
              {step.detail}
            </p>
          </div>
        ))}
      </div>
    </motion.section>
  );
}