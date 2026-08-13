"use client";

import { usePathname, useSearchParams } from "next/navigation";
import { useState, useEffect, Suspense } from "react";
import { AnimatePresence, motion } from "framer-motion";

function RouteLoaderInner() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => setLoading(false), 700); // Simulate loading time
    return () => clearTimeout(timer);
  }, [pathname, searchParams]);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          key={`route-loader-${pathname}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.3 } }}
          className="fixed top-0 left-0 z-[1000] w-full h-1 bg-white"
        >
          <motion.div
            className="h-full bg-emerald-400"
            initial={{ width: "0%" }}
            animate={{ width: "100%" }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default function GlobalLoader() {
  return (
    <Suspense fallback={null}>
      <RouteLoaderInner />
    </Suspense>
  );
}