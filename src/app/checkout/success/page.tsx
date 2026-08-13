"use client";

import { useEffect } from "react";
import { useCart } from "@/context/CartContext";
import Link from "next/link";
import CustomCursor from "@/components/CustomCursor";

export default function CheckoutSuccessPage() {
  const { clearCart } = useCart();

  useEffect(() => {
    clearCart();
  }, [clearCart]);

  return (
    <main className="bg-black text-white min-h-screen pt-40 pb-24 px-4 md:px-12 font-mono relative overflow-x-hidden select-none">
      <CustomCursor />
      <div className="max-w-3xl mx-auto border border-zinc-900 p-10 md:p-16 flex flex-col items-center gap-8 text-center">
        <span className="text-emerald-400 text-4xl font-black">✓</span>
        <h1 className="text-xl md:text-2xl font-black uppercase tracking-widest">
          EXTRACTION SUCCESSFUL
        </h1>
        <p className="text-zinc-500 text-xs leading-relaxed max-w-md">
          Your payment has been verified and your inventory extraction is now being processed.
          A confirmation email will be dispatched to your digital node shortly.
        </p>
        <Link
          href="/shop"
          className="bg-white text-black px-8 py-3 text-xs font-black uppercase tracking-widest hover:bg-zinc-900 hover:text-white hover:border-zinc-800 border border-transparent transition-all"
        >
          RETURN TO ARCHIVE
        </Link>
      </div>
    </main>
  );
}