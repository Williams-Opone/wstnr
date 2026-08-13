"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/navigation";

interface MatrixItem {
  serial: string;
  name: string;
  category: string;
  dimensions: string;
  composition: string;
  price: string;
  image: string;
}

const ARCHIVE_REGISTRY: MatrixItem[] = [
  { serial: "WST-01-SH", name: "DECONSTRUCTED COTTON ARMOUR", category: "TOPS // SHIRTS", dimensions: "72CM L x 64CM W", composition: "460GSM RAW DENSE CANVAS", price: "$165", image: "/images/shirt1.jpg" },
  { serial: "WST-02-SH", name: "HEAVY GAUGE RAW WORKSHIRT", category: "TOPS // SHIRTS", dimensions: "74CM L x 62CM W", composition: "500GSM REINFORCED DRILL", price: "$140", image: "/images/products/shirt-dist.jpg" },
  { serial: "WST-01-BN", name: "MOLTEN THREAD HEAVY BEANIE", category: "KNIT // ACC", dimensions: "ONE SIZE FRAME", composition: "100% MERINO THERMAL RETENTION", price: "$55", image: "/images/beanie1.jpg" },
  { serial: "WST-02-BN", name: "CROSS-STITCH TRIPLE LOOM HEADWEAR", category: "KNIT // ACC", dimensions: "ONE SIZE FRAME", composition: "INDUSTRIAL THICK GAUGE WOOL", price: "$65", image: "/images/products/beanie-loom.jpg" },
  { serial: "WST-01-SK", name: "ENGINEERED WAFFLE SKULLY", category: "KNIT // ACC", dimensions: "STRETCH COMPRESSION", composition: "MICRO-RIBBED SYNTH STRUCT", price: "$45", image: "/images/beanie1_macro.jpg" },
  { serial: "WST-01-CH", name: "FRACTURED LINK JEWELRY PIECE", category: "HARDWARE", dimensions: "55CM CORDE LENGTH", composition: "INDUSTRIAL WELDED STAINLESS STOCK", price: "$210", image: "/images/chain1.jpg" },
];

export default function InventoryMatrix() {
  const [hoveredItem, setHoveredItem] = useState<MatrixItem | null>(null);
  const [coords, setCoords] = useState({ x: 0, y: 0 });
  const router = useRouter();

  const handleMouseMove = (e: React.MouseEvent) => {
    // Map absolute screen positioning coordinates relative to viewport space
    setCoords({ x: e.clientX, y: e.clientY });
  };

  return (
    <section 
      className="min-h-[160vh] bg-black text-white py-40 border-t border-zinc-900 relative select-none"
      onMouseMove={handleMouseMove}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Section Index Marker */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end border-b border-zinc-900 pb-6 mb-20 font-mono text-xs text-zinc-500">
          <div>
            <span className="text-[10px] text-zinc-600 tracking-widest block mb-1">REGISTRY // INDEX_03</span>
            <h3 className="text-sm font-light text-zinc-300 uppercase tracking-wider">The Inventory Spec Matrix</h3>
          </div>
          <p className="max-w-xs mt-4 md:mt-0 font-light text-[11px] leading-relaxed">
            Historical workshop logging system. Comprehensive cataloging of all raw garments, link variants, and textures.
          </p>
        </div>

        {/* Giant Industrial Table */}
        <div className="w-full font-mono border-t border-b border-zinc-900 divide-y divide-zinc-900 text-[11px]">
          
          {/* Table Header Layout */}
          <div className="grid grid-cols-2 md:grid-cols-6 py-4 text-zinc-600 tracking-widest uppercase hidden md:grid font-bold">
            <div>[ SERIAL_REF ]</div>
            <div className="md:col-span-2">[ PIECE_NOMENCLATURE ]</div>
            <div>[ CLASSIFICATION ]</div>
            <div>[ COMPOSITION_SPECS ]</div>
            <div className="text-right">[ COST ]</div>
          </div>

          {/* Table Data Rows */}
          {ARCHIVE_REGISTRY.map((item) => (
            <div
              key={item.serial}
              className="grid grid-cols-2 md:grid-cols-6 py-8 items-center group transition-colors duration-200 hover:bg-zinc-950/40 cursor-none"
              onMouseEnter={() => setHoveredItem(item)}
              onMouseLeave={() => setHoveredItem(null)}
              onClick={() => router.push(`/shop?category=${item.serial.split("-")[2].toLowerCase()}`)}
            >
              <div className="text-zinc-400 group-hover:text-white transition-colors">{item.serial}</div>
              <div className="col-span-2 text-xs font-light text-zinc-200 group-hover:text-white transition-colors tracking-wide uppercase pt-1 md:pt-0">
                {item.name}
              </div>
              <div className="text-zinc-500 group-hover:text-zinc-300 transition-colors hidden md:block">{item.category}</div>
              <div className="text-zinc-500 font-light hidden md:block">
                <span className="block text-[10px] text-zinc-600">{item.dimensions}</span>
                <span className="block mt-0.5 text-zinc-400">{item.composition}</span>
              </div>
              <div className="text-right text-zinc-400 group-hover:text-white font-bold tracking-tight">{item.price}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Floating High-Contrast Cursor Thumbnail Portal Layer */}
      <AnimatePresence>
        {hoveredItem && (
          <motion.div
            key={hoveredItem.serial}
            className="fixed pointer-events-none w-52 h-72 border border-zinc-800 bg-zinc-950 z-50 overflow-hidden mix-blend-normal hidden md:block shadow-2xl"
            style={{ 
              top: coords.y + 25, // Offset 25px lower than custom cursor boundary crosshairs
              left: coords.x + 25, 
            }}
            initial={{ opacity: 0, scale: 0.85, rotate: -3 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            exit={{ opacity: 0, scale: 0.9, rotate: 3 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
          >
            <img 
              src={hoveredItem.image} 
              alt="" 
              className="w-full h-full object-cover filter grayscale contrast-125 scale-102" 
            />
          </motion.div>
        )}
      </AnimatePresence>

    </section>
  );
}