"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

export default function BrandLoader({ show = true }: { show?: boolean }) {
  const [visible, setVisible] = useState(show);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(false), 2500); // 2.5s splash
    return () => clearTimeout(timer);
  }, []);   

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          key="brand-loader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.4 } }}
          className="fixed inset-0 z-[999] flex flex-col items-center justify-center bg-black"
        >
          <motion.span
            initial={{ opacity: 0, letterSpacing: "0.5em" }}
            animate={{ opacity: 1, letterSpacing: "0.1em" }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="text-2xl md:text-4xl font-black text-white uppercase tracking-[0.2em]"
          >
            WSTNR
          </motion.span>
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="w-32 h-px bg-white mt-4"
          />
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.6 }}
            transition={{ delay: 0.7 }}
            className="text-[10px] text-zinc-500 uppercase tracking-[0.4em] mt-4"
          >
            Establishing Control Link…
          </motion.p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}