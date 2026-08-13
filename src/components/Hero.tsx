"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

// Static images – real Unsplash URLs (swap with your own if you prefer)
const HERO_CATEGORIES = [
  {
    id: "shirts",
    name: "TEES & TOPS",
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=800&q=80",
    desc: "SHIRTS ARCHIVE",
  },
  {
    id: "beanies",
    name: "KNIT BEANIES",
    image: "https://images.unsplash.com/photo-1576871337632-b9aef4c17ab9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YmVhbmllfGVufDB8fDB8fHww",
    desc: "HEAVY BEANIES",
  },
  {
    id: "skullies",
    name: "ENGINEERED SKULLIES",
    image: "https://images.unsplash.com/photo-1648483066215-e00f37a9e26f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGJlYW5pZSUyMGhhdHxlbnwwfHwwfHx8MA%3D%3D",
    desc: "STRUCTURED CROWNS",
  },
  {
    id: "chains",
    name: "JEWELRY & HARDWARE",
    image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800&q=80",
    desc: "INDUSTRIAL LINKS",
  },
];

function useIsFinePointer() {
  const [fine, setFine] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia("(hover: hover) and (pointer: fine)");
    const update = () => setFine(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);
  return fine;
}

export default function Hero({ onScrollPrompt }: { onScrollPrompt?: () => void }) {
  const [activeIdx, setActiveIdx] = useState<number | null>(null);
  const [coords, setCoords] = useState({ x: 0, y: 0 });
  const router = useRouter();
  const isFinePointer = useIsFinePointer();

  useEffect(() => {
    const handleScrollClear = () => {
      if (window.scrollY > window.innerHeight - 100) setActiveIdx(null);
    };
    window.addEventListener("scroll", handleScrollClear, { passive: true });
    return () => window.removeEventListener("scroll", handleScrollClear);
  }, []);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isFinePointer) return;
    setCoords({ x: e.clientX, y: e.clientY });
    const target = e.target as HTMLElement;
    if (target.closest("[data-cursor-hide-portal]")) {
      setActiveIdx(null);
      return;
    }
    const sectorWidth = window.innerWidth / HERO_CATEGORIES.length;
    const currentSector = Math.floor(e.clientX / sectorWidth);
    if (currentSector >= 0 && currentSector < HERO_CATEGORIES.length) setActiveIdx(currentSector);
  };

  const handleHeroClick = () => {
    if (!isFinePointer) return;
    if (activeIdx !== null) router.push(`/shop?category=${HERO_CATEGORIES[activeIdx].id}`);
  };

  const scrollToArchive = () => {
    onScrollPrompt?.();
    window.scrollTo({ top: window.innerHeight, behavior: "smooth" });
  };

  return (
    <section
      className="w-full min-h-[100svh] h-[100svh] flex flex-col items-center justify-center relative select-none px-4 overflow-hidden bg-black"
      onMouseMove={handleMouseMove}
      onMouseLeave={() => setActiveIdx(null)}
      onClick={handleHeroClick}
    >
      <AnimatePresence>
        {isFinePointer && activeIdx !== null && (
          <motion.div
            key={activeIdx}
            className="fixed pointer-events-none w-[min(30vw,320px)] h-[min(45vh,380px)] z-0 opacity-40 border border-zinc-900 flex flex-col justify-end p-4"
            style={{ top: coords.y - 180, left: coords.x - 120, position: "fixed" }}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 0.5, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <img
              src={HERO_CATEGORIES[activeIdx].image}
              alt=""
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="relative z-10 bg-black/80 p-2 border border-zinc-900 font-mono text-[10px]">
              <p className="text-white tracking-wider">{HERO_CATEGORIES[activeIdx].name}</p>
              <p className="text-zinc-500 tracking-widest mt-0.5">// {HERO_CATEGORIES[activeIdx].desc}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <h1 className="text-[clamp(3.5rem,18vw,14rem)] font-black tracking-tighter z-10 mix-blend-difference leading-none text-center">
        WSTRNR
      </h1>

      <motion.button
        data-cursor-hide-portal="true"
        type="button"
        onClick={(e) => { e.stopPropagation(); scrollToArchive(); }}
        className="absolute bottom-[max(1.5rem,env(safe-area-inset-bottom))] sm:bottom-12 font-mono text-[9px] sm:text-[10px] tracking-[0.2em] sm:tracking-[0.3em] text-zinc-400 hover:text-white transition-colors bg-transparent border-none z-20 px-3 text-center max-w-[90vw]"
        animate={{ y: [0, -8, 0], filter: ["drop-shadow(0 0 2px rgba(255,255,255,0.15))", "drop-shadow(0 0 8px rgba(255,255,255,0.45))", "drop-shadow(0 0 2px rgba(255,255,255,0.15))"] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        [ SCROLL DOWN TO WITNESS ARCHIVE ]
      </motion.button>
    </section>
  );
}