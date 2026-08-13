"use client";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

const STATEMENT_CATEGORIES = [
  { name: "GRAPHIC TEES", slug: "shirts", image: "https://images.unsplash.com/photo-1780566035913-9233ca20dc29?auto=format&fit=crop&w=800&q=80" },
  { name: "SKULLIES", slug: "skullies", image: "https://images.unsplash.com/photo-1664289321749-07316ab5e374?auto=format&fit=crop&w=800&q=80" },
  { name: "BEANIES", slug: "beanies", image: "https://images.unsplash.com/photo-1664289321749-07316ab5e374?auto=format&fit=crop&w=800&q=80" },
  { name: "ACCESSORIES", slug: "chains", image: "https://images.unsplash.com/photo-1605884878538-6468614df578?auto=format&fit=crop&w=800&q=80" }
];

export default function BrandStatement() {
  const router = useRouter();

  return (
    <section className="py-16 md:py-24 lg:py-32 px-4 md:px-12 bg-black border-b border-zinc-900">
      <div className="max-w-7xl mx-auto">
        <div className="font-mono text-[10px] md:text-[11px] text-zinc-500 tracking-widest uppercase mb-6 md:mb-8">
          BRAND STATEMENT
        </div>

        {/* 2x2 grid — taller aspect on both mobile and desktop */}
        <div className="w-full border border-zinc-800 p-3 sm:p-4 md:p-6 lg:p-8 bg-black grid grid-cols-2 gap-3 sm:gap-4 md:gap-6">
          {STATEMENT_CATEGORIES.map((cat) => (
            <div
              key={cat.name}
              onClick={() => router.push(`/shop?category=${cat.slug}`)}
              className="w-full aspect-[4/3.5] md:aspect-[16/11] lg:aspect-[4/3.5] bg-[#222222] border border-zinc-900 relative overflow-hidden group cursor-none select-none active:scale-[0.99] transition-transform duration-150"
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") router.push(`/shop?category=${cat.slug}`);
              }}
            >
              <div className="absolute inset-0 w-full h-full flex items-center justify-center p-6 sm:p-8 md:p-10 z-0">
                <motion.img
                  src={cat.image}
                  alt={cat.name}
                  className="w-full h-full object-contain filter grayscale contrast-115 brightness-90"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                />
              </div>

              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent pointer-events-none z-10" />

              <div className="absolute bottom-4 left-4 sm:bottom-6 sm:left-6 md:bottom-8 md:left-8 z-20 flex items-center gap-2 sm:gap-3 text-white font-sans text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-black tracking-tight uppercase group-hover:text-zinc-300 transition-colors duration-300">
                <span>{cat.name}</span>
                <span className="font-light tracking-normal transform transition-transform duration-300 group-hover:translate-x-2">➔</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}