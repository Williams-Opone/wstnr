import Link from "next/link";
import CustomCursor from "@/components/CustomCursor";

export default function Unauthorized() {
  return (
    <main className="bg-black text-white min-h-screen pt-40 pb-24 px-4 md:px-12 font-mono relative overflow-x-hidden select-none">
      <CustomCursor />
      <div className="max-w-4xl mx-auto flex flex-col items-center gap-8 text-center border border-red-900/40 p-10 md:p-20 bg-red-950/10">
        <div className="text-[120px] md:text-[200px] font-black leading-none text-red-800">401</div>
        <h1 className="text-xl md:text-2xl font-black uppercase tracking-widest text-red-400">
          [ ACCESS DENIED // CLEARANCE LEVEL INSUFFICIENT ]
        </h1>
        <p className="text-red-500 text-xs max-w-md">
          You do not possess the necessary credentials to enter this secure node.
        </p>
        <div className="flex gap-4">
          <Link href="/" className="bg-white text-black px-6 py-3 text-xs font-black uppercase tracking-widest hover:bg-zinc-900 hover:text-white hover:border-zinc-800 border border-transparent transition-all">
            RETURN TO INDEX
          </Link>
          <Link href="/contact" className="border border-red-900 px-6 py-3 text-xs font-black uppercase tracking-widest text-red-400 hover:bg-red-950 transition-colors">
            REQUEST ACCESS
          </Link>
        </div>
      </div>
    </main>
  );
}