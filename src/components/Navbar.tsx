"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { useCart } from "@/context/CartContext";
import { usePathname } from "next/navigation";

const DROP_DOWN_COLLECTIONS = [
  {
    name: "TEES & TOPS",
    slug: "shirts",
    preview: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=800&q=80",
    details: "[ BATCH_M_04_CP // 460GSM RAW DENSE CANVAS ]",
  },
  {
    name: "KNIT BEANIES",
    slug: "beanies",
    preview: "https://images.unsplash.com/photo-1576871337632-b9aef4c17ab9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YmVhbmllfGVufDB8fDB8fHww",
    details: "[ BATCH_M_04_DB // 100% MERINO THERMAL LOOM ]",
  },
  {
    name: "ENGINEERED SKULLIES",
    slug: "skullies",
    preview: "https://images.unsplash.com/photo-1648483066215-e00f37a9e26f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGJlYW5pZSUyMGhhdHxlbnwwfHwwfHx8MA%3D%3D",
    details: "[ BATCH_M_04_WS // MICRO-RIBBED SYNTH STRUCT ]",
  },
  {
    name: "JEWELRY & HARDWARE",
    slug: "chains",
    preview: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800&q=80",
    details: "[ BATCH_M_04_JL // INDUSTRIAL STAINLESS STAMP ]",
  },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileCollectionsOpen, setMobileCollectionsOpen] = useState(false);
  const [hoveredIdx, setHoveredIdx] = useState(0);
  const { cart, setCartOpen } = useCart();
  const pathname = usePathname();

  const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);

  useEffect(() => {
    setMobileOpen(false);
    setMobileCollectionsOpen(false);
    setIsOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  return (
    <>
      <nav className="fixed top-0 left-0 w-full bg-black/40 backdrop-blur-md z-50 font-mono text-white text-[11px] h-16 md:h-20 flex items-center justify-between px-4 sm:px-6 md:px-12 select-none border-b border-b-zinc-900/40">
        <Link href="/" className="text-sm sm:text-base font-black tracking-tighter hover:opacity-70 transition-opacity relative z-[60]">
          WSTRNR
        </Link>

        <div className="hidden md:flex items-center gap-6 md:gap-10">
          <div className="h-20 flex items-center" onMouseEnter={() => setIsOpen(true)} onMouseLeave={() => setIsOpen(false)}>
            <span className="tracking-widest hover:text-zinc-400 transition-colors py-8">COLLECTIONS +</span>
            <AnimatePresence>
              {isOpen && (
                <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }} className="fixed top-20 left-0 w-full bg-[#09090b] border-b border-zinc-900 shadow-[0_20px_50px_rgba(0,0,0,0.8)] z-50 py-12 px-6 md:px-12">
                  <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 items-stretch">
                    <div className="md:col-span-7 flex flex-col justify-between">
                      <div className="flex flex-col gap-1.5">
                        <span className="text-[9px] text-zinc-600 tracking-[0.3em] uppercase block mb-4">[ ATELIER CATEGORY SPECIFICATION INDEX ]</span>
                        <div className="flex flex-col gap-2">
                          {DROP_DOWN_COLLECTIONS.map((cat, idx) => (
                            <Link key={cat.slug} href={`/shop?category=${cat.slug}`} onMouseEnter={() => setHoveredIdx(idx)} className="py-3 px-4 border border-zinc-900/50 hover:border-zinc-800 bg-[#0c0c0e] flex items-center justify-between transition-all group/item" onClick={() => setIsOpen(false)}>
                              <span className="font-sans text-sm md:text-base font-black tracking-tight uppercase group-hover/item:text-white text-zinc-400 transition-colors">{cat.name}</span>
                              <span className="text-[10px] text-zinc-600 group-hover/item:text-zinc-400 transition-colors">VIEW COLLECTION ➔</span>
                            </Link>
                          ))}
                        </div>
                      </div>
                      <div className="flex gap-12 pt-8 border-t border-zinc-900/60 mt-8 text-[9px] text-zinc-600 uppercase">
                        <div><span className="text-zinc-500 font-bold block mb-1">[ FRAMEWORK ]</span><span>NEXT.JS CORE MATRIX</span></div>
                        <div><span className="text-zinc-500 font-bold block mb-1">[ BATCH_M_04 ]</span><span>ACTIVE PIPELINE</span></div>
                      </div>
                    </div>
                    <div className="md:col-span-5 hidden md:flex flex-col bg-zinc-950 border border-zinc-900 p-6 relative overflow-hidden h-[280px] justify-between">
                      <div className="absolute inset-0 opacity-10 bg-repeat bg-[url('/images/concrete-noise.png')] pointer-events-none" />
                      <div className="absolute inset-x-0 top-0 h-[210px] flex items-center justify-center p-4">
                        <AnimatePresence mode="wait">
                          <motion.img key={hoveredIdx} src={DROP_DOWN_COLLECTIONS[hoveredIdx].preview} alt="" initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 0.35, scale: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.25 }} className="h-full w-auto object-contain mix-blend-lighten pointer-events-none" />
                        </AnimatePresence>
                      </div>
                      <div className="mt-auto relative z-10 flex flex-col gap-1 pt-4 border-t border-zinc-900/80 w-full">
                        <span className="text-[9px] text-zinc-500 uppercase tracking-widest">PREVIEW SPECIFICATION</span>
                        <span className="text-[10px] text-zinc-400 font-bold">{DROP_DOWN_COLLECTIONS[hoveredIdx].details}</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
          <Link href="/studio" className="tracking-widest hover:text-zinc-400 transition-colors">STUDIO</Link>
          <Link href="/contact" className="tracking-widest hover:text-zinc-400 transition-colors">INQUIRIES</Link>
          <button onClick={() => setCartOpen(true)} className="bg-transparent border-none text-white hover:text-zinc-400 transition-colors p-0 flex items-center relative gap-1.5 group" aria-label="Open bag">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-[15px] h-[15px] transition-transform duration-300 group-hover:scale-105"><path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path><line x1="3" y1="6" x2="21" y2="6"></line><path d="M16 10a4 4 0 0 1-8 0"></path></svg>
            <div className="font-mono text-[10px] flex items-center"><span>[</span>
              <AnimatePresence mode="popLayout"><motion.span key={totalItems} initial={{ y: -5, opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ y: 5, opacity: 0 }} transition={{ duration: 0.12, ease: "easeOut" }} className="px-0.5 font-bold inline-block min-w-[8px] text-center">{totalItems}</motion.span></AnimatePresence>
              <span>]</span>
            </div>
          </button>
        </div>

        <div className="flex md:hidden items-center gap-3 relative z-[60]">
          <button onClick={() => setCartOpen(true)} className="bg-transparent border-none text-white p-2 flex items-center gap-1.5 min-h-11 min-w-11 justify-center" aria-label="Open bag">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-4 h-4"><path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path><line x1="3" y1="6" x2="21" y2="6"></line><path d="M16 10a4 4 0 0 1-8 0"></path></svg>
            <span className="font-mono text-[10px]">[{totalItems}]</span>
          </button>
          <button type="button" onClick={() => setMobileOpen(v => !v)} className="bg-transparent border border-zinc-800 text-white px-3 py-2 min-h-11 font-mono text-[10px] tracking-[0.2em] uppercase" aria-expanded={mobileOpen} aria-label="Toggle menu">{mobileOpen ? "[ CLOSE ]" : "[ MENU ]"}</button>
        </div>
      </nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }} transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }} className="fixed inset-0 z-40 md:hidden bg-black pt-16 overflow-y-auto">
            <div className="px-4 sm:px-6 py-8 flex flex-col gap-2 min-h-full pb-[calc(2rem+env(safe-area-inset-bottom))]">
              <p className="font-mono text-[9px] tracking-[0.3em] text-zinc-600 uppercase mb-4">[ NAVIGATION INDEX ]</p>
              <button type="button" onClick={() => setMobileCollectionsOpen(v => !v)} className="w-full text-left border border-zinc-900 bg-zinc-950 px-4 py-4 flex items-center justify-between min-h-14">
                <span className="font-sans text-lg font-black tracking-tight uppercase">Collections</span>
                <span className="font-mono text-[10px] text-zinc-500 tracking-widest">{mobileCollectionsOpen ? "[ − ]" : "[ + ]"}</span>
              </button>
              <AnimatePresence initial={false}>
                {mobileCollectionsOpen && (
                  <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.25 }} className="overflow-hidden">
                    <div className="flex flex-col gap-2 py-2">
                      {DROP_DOWN_COLLECTIONS.map(cat => (
                        <Link key={cat.slug} href={`/shop?category=${cat.slug}`} onClick={() => setMobileOpen(false)} className="border border-zinc-900/80 bg-[#0c0c0e] px-4 py-4 flex flex-col gap-1 min-h-14">
                          <span className="font-sans text-sm font-black tracking-tight uppercase text-zinc-200">{cat.name}</span>
                          <span className="font-mono text-[9px] text-zinc-600 tracking-widest">{cat.details}</span>
                        </Link>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
              <Link href="/studio" onClick={() => setMobileOpen(false)} className="border border-zinc-900 bg-zinc-950 px-4 py-4 font-sans text-lg font-black tracking-tight uppercase min-h-14 flex items-center">Studio</Link>
              <Link href="/contact" onClick={() => setMobileOpen(false)} className="border border-zinc-900 bg-zinc-950 px-4 py-4 font-sans text-lg font-black tracking-tight uppercase min-h-14 flex items-center">Inquiries</Link>
              <Link href="/shop" onClick={() => setMobileOpen(false)} className="border border-zinc-900 bg-zinc-950 px-4 py-4 font-sans text-lg font-black tracking-tight uppercase min-h-14 flex items-center">Full Index</Link>
              <div className="mt-auto pt-10 border-t border-zinc-900 font-mono text-[9px] text-zinc-600 tracking-[0.25em] uppercase space-y-2">
                <p>[ BATCH_M_04 // ACTIVE ]</p>
                <p className="text-zinc-700">WSTRNR · CONCRETE PROPHETS</p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}