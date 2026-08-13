"use client";

const SKELETON_LAYOUTS = [
  "col-span-12 md:col-span-5 row-span-2 min-h-[400px] md:min-h-[700px] lg:min-h-[900px]",
  "col-span-12 md:col-span-3 min-h-[300px] md:min-h-[400px]",
  "col-span-12 md:col-span-4 min-h-[300px] md:min-h-[400px]",
  "col-span-12 md:col-span-3 min-h-[300px] md:min-h-[400px]",
  "col-span-12 md:col-span-4 min-h-[300px] md:min-h-[400px]",
  "col-span-12 md:col-span-5 row-span-2 min-h-[400px] md:min-h-[700px] lg:min-h-[900px]",
];

export default function AsymmetricGridSkeleton() {
  return (
    <section className="py-16 md:py-32 px-4 md:px-8 lg:px-12 bg-black border-b border-zinc-900">
      <div className="max-w-7xl mx-auto">
        {/* Header mirror */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end border-b border-zinc-900 pb-6 md:pb-8 mb-8 md:mb-16 font-mono text-xs gap-4">
          <div className="flex flex-col gap-2">
            <span className="tracking-widest text-zinc-600 uppercase text-[10px] md:text-xs">
              [ ARCHIVE_MOSAIC_COLLECTIONS ]
            </span>
            <div className="h-2 md:h-2.5 w-36 md:w-44 bg-zinc-900 animate-pulse" />
          </div>
          <div className="w-full md:w-72 h-6 bg-zinc-900 animate-pulse" />
        </div>

        {/* Loading status */}
        <div className="mb-4 md:mb-6 flex items-center gap-3 font-mono text-[9px] md:text-[10px] uppercase tracking-widest text-zinc-500">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-zinc-400 opacity-60" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-zinc-300" />
          </span>
          <span>[ DECODING ARCHIVE MOSAIC... ]</span>
        </div>

        {/* Mosaic placeholders */}
        <div className="grid grid-cols-12 gap-px bg-zinc-900 border border-zinc-900">
          {SKELETON_LAYOUTS.map((spanClass, idx) => (
            <div
              key={idx}
              className={`${spanClass} bg-[#2a2a28] p-4 md:p-6 lg:p-10 flex flex-col justify-between animate-pulse`}
            >
              <div className="h-2 md:h-2.5 w-24 md:w-28 bg-black/30" />
              <div className="w-full flex-1 flex items-center justify-center my-4 md:my-8">
                <div className="w-2/3 max-w-[220px] aspect-square bg-black/20" />
              </div>
              <div className="pt-4 md:pt-6 border-t border-black/20 flex justify-between gap-4">
                <div className="h-3 w-32 bg-black/30" />
                <div className="h-3 w-10 bg-black/30" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}