import { Suspense } from "react";
import Image from "next/image";
import { getPrismaClient } from "@/lib/prisma";
import StudioManifesto from "@/components/StudioManifesto";
import StudioProcess from "@/components/StudioProcess";
import StudioMaterials from "@/components/StudioMaterials";
import StudioLocation from "@/components/StudioLocation";
import StudioFooter from "@/components/StudioFooter";

async function getStudioStats() {
  const prisma = getPrismaClient();
  const [productCount, inquiryCount, orderCount] = await Promise.all([
    prisma.product.count({ where: { isActive: true } }),
    (prisma as any).inquiry?.count() ?? 0,
    (prisma as any).order?.count({ where: { status: "SUCCESSFUL" } }) ?? 0,
  ]);
  return { productCount, inquiryCount, orderCount };
}

export default async function StudioPage() {
  const stats = await getStudioStats();

  return (
    <main className="relative min-h-screen bg-black text-white overflow-x-hidden selection:bg-white selection:text-black">
      {/* Concrete grain */}
      <div
        className="pointer-events-none fixed inset-0 opacity-[0.035] z-0"
        style={{
          backgroundImage:
            "radial-gradient(rgba(255,255,255,0.5) 0.5px, transparent 0)",
          backgroundSize: "3px 3px",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 md:px-12 pt-28 md:pt-36 pb-[calc(2rem+env(safe-area-inset-bottom))]">
        {/* Hero */}
        <section className="mb-20 md:mb-32 border-b border-zinc-900 pb-14 md:pb-20">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 md:gap-10">
            <div className="max-w-3xl">
              <p className="font-mono text-[10px] md:text-[11px] tracking-[0.35em] text-zinc-500 uppercase mb-4 md:mb-6">
                [ PREFACE ]
              </p>
              <h1 className="text-4xl sm:text-5xl md:text-7xl font-extralight tracking-tight leading-[1.05]">
                WSTRNR is a tactile experiment. We exist to map out the friction between heavy textile structures and transient human forms.
              </h1>
            </div>

            <div className="font-mono text-[10px] md:text-[11px] text-zinc-600 uppercase tracking-widest space-y-1 md:text-right">
              <p>NODE // STUDIO_ORIGIN</p>
              <p>EST // 2024</p>
              <p>LIVE PIECES // {stats.productCount}</p>
              <p>TRANSMISSIONS LOGGED // {stats.inquiryCount}</p>
              <p>ORDERS FULFILLED // {stats.orderCount}</p>
            </div>
          </div>
        </section>

        {/* Visual narrative */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center mb-20 md:mb-32">
        <div className="w-full aspect-[4/5] bg-zinc-950 border border-zinc-900 overflow-hidden group relative">
        <video
          src="https://res.cloudinary.com/dotcy7lhz/video/upload/v1786716010/9257197-uhd_2160_4096_25fps_1_1_dymvyn.mp4"
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          className="w-full h-full object-cover grayscale transition-all duration-700 group-hover:scale-105"
        />
        {/* Dark gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-black/20 pointer-events-none" />
      </div>
          <div className="flex flex-col justify-center max-w-md">
            <span className="font-mono text-[10px] text-zinc-500 tracking-widest mb-4">
              VOLUME_I // THE WEIGHT OF COTTON
            </span>
            <h3 className="text-2xl md:text-3xl font-light mb-4 tracking-wide leading-tight">
              Heavy Gauge Architecture
            </h3>
            <p className="text-sm md:text-base text-zinc-400 leading-relaxed font-light">
              Our garments drop outside standard industry timelines. Our shirts are cut from high-density raw canvases that shape themselves to your posture over years of continuous exposure. We do not design for a season; we build architectural shells.
            </p>
          </div>
        </section>

        <StudioManifesto />
        <StudioProcess />

        {/* Asymmetrical interlude */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 mb-20 md:mb-32 pt-14 md:pt-16 border-t border-zinc-900">
          <div>
            <h4 className="font-mono text-xs tracking-widest text-zinc-500 mb-4 uppercase">
              [ ACCENTS & LINKS ]
            </h4>
            <p className="text-sm text-zinc-400 font-light leading-relaxed">
              Stainless metal chains constructed from pure industrial stock. Each link is hand-welded within heavy settings to retain an unpolished silver patina that ages gracefully.
            </p>
          </div>
          <div className="md:col-span-2 w-full h-72 md:h-80 bg-zinc-950 border border-zinc-900 overflow-hidden">
            <Image
              src="https://res.cloudinary.com/dotcy7lhz/image/upload/v1786732718/pexels-hatice-genc-3580692-32797481_mtvofc.jpg"
              alt="Studio Look"
              width={1200}
              height={600}
              className="w-full h-full object-cover grayscale contrast-125"
              sizes="(max-width: 768px) 100vw, 66vw"
            />
          </div>
        </section>

        <StudioMaterials />
        <StudioLocation />

        {/* Closing */}
        <section className="max-w-3xl border-t border-zinc-900 pt-14 md:pt-16 mb-20">
          <span className="font-mono text-[10px] text-zinc-500 tracking-widest block mb-4 uppercase">
            [ MANIFESTO CLOSURE ]
          </span>
          <p className="text-xl md:text-2xl lg:text-3xl font-light text-zinc-300 leading-relaxed italic">
            “We reject fast cycles. We embrace the deliberate weight of things that are meant to last.”
          </p>
        </section>

        <StudioFooter />
      </div>
    </main>
  );
}