"use client";

import Link from "next/link";
import { useEffect } from "react";
import CustomCursor from "@/components/CustomCursor";

export default function GlobalError({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) {
  useEffect(() => {
    console.error("Application error:", error);
  }, [error]);

  return (
    <main className="bg-black text-white min-h-screen pt-40 pb-24 px-4 md:px-12 font-mono relative overflow-x-hidden select-none">
      <CustomCursor />
      <div className="max-w-4xl mx-auto flex flex-col items-center gap-8 text-center border border-zinc-900 p-10 md:p-20 bg-zinc-950/40">
        <div className="text-[120px] md:text-[200px] font-black leading-none text-zinc-700">501</div>
        <h1 className="text-xl md:text-2xl font-black uppercase tracking-widest text-zinc-300">
          [ TRANSMISSION FAULT // MODULE NOT IMPLEMENTED ]
        </h1>
        <p className="text-zinc-500 text-xs max-w-md">
          The requested operation is not currently supported by this atelier.
          {error.digest && <span className="block mt-2 text-zinc-600">Reference: {error.digest}</span>}
        </p>
        <div className="flex gap-4">
          <button
            onClick={reset}
            className="bg-white text-black px-6 py-3 text-xs font-black uppercase tracking-widest hover:bg-zinc-900 hover:text-white hover:border-zinc-800 border border-transparent transition-all"
          >
            RETRY OPERATION
          </button>
          <Link href="/" className="border border-zinc-800 px-6 py-3 text-xs font-black uppercase tracking-widest text-zinc-300 hover:bg-zinc-900 transition-colors">
            RETURN TO INDEX
          </Link>
        </div>
      </div>
    </main>
  );
}