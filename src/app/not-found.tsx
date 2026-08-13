import Link from "next/link";
import CustomCursor from "@/components/CustomCursor";

export default function NotFound() {
  return (
    <main className="bg-black text-white min-h-screen pt-40 pb-24 px-4 md:px-12 font-mono relative overflow-x-hidden select-none">
      <CustomCursor />
      <div className="max-w-4xl mx-auto flex flex-col items-center gap-8 text-center border border-zinc-900 p-10 md:p-20 bg-zinc-950/40">
        <div className="text-[200px] md:text-[300px] font-black leading-none text-zinc-800">404</div>
        <h1 className="text-xl md:text-2xl font-black uppercase tracking-widest text-zinc-300">
          [ SIGNAL LOST // INDEX UNRESOLVED ]
        </h1>
        <p className="text-zinc-500 text-xs max-w-md">
          The archive node you are trying to access has been redacted, moved, or never existed.
        </p>
        <Link
          href="/"
          className="bg-white text-black px-8 py-4 text-xs font-black uppercase tracking-widest hover:bg-zinc-900 hover:text-white hover:border-zinc-800 border border-transparent transition-all"
        >
          RETURN TO BASE INDEX ➔
        </Link>
      </div>
    </main>
  );
}