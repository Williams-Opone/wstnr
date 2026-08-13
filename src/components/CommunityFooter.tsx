"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { subscribeNewsletter } from "@/app/actions/newsletter";

interface CommunityImage {
  id: string;
  src: string;
  username: string;
  likes: number;
  instagramUrl: string;
}

export default function CommunityFooter({ communityImages = [] }: { communityImages?: CommunityImage[] }) {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [statusText, setStatusText] = useState("");

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;
    setStatus("sending");

    const result = await subscribeNewsletter(email.trim());

    if (result.ok) {
      setStatus("success");
      setStatusText(result.message);
      setEmail("");
      setTimeout(() => setStatus("idle"), 4000);
    } else {
      setStatus("error");
      setStatusText(result.message);
      setTimeout(() => setStatus("idle"), 4000);
    }
  };

  return (
    <footer className="w-full bg-black select-none font-mono text-white text-[11px]">
      {/* Community Section */}
      <section className="py-14 md:py-20 px-4 sm:px-6 md:px-12 border-b border-zinc-900">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-baseline border-b border-zinc-900 pb-4 mb-6 md:mb-8 gap-2 text-xs text-zinc-500">
            <span className="uppercase tracking-widest">COMMUNITY / SOCIAL PROOF</span>
            <h3 className="text-zinc-300 tracking-wider uppercase font-sans font-black text-sm md:text-base">
              WITNESSED IN THE WILD
            </h3>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3 md:gap-4">
            {communityImages.map((post) => (
              <a
                key={post.id}
                href={post.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="aspect-[3/4] bg-zinc-950 border border-zinc-900 overflow-hidden relative group"
              >
                <Image
                  src={post.src}
                  alt={`WSTNR community post by ${post.username}`}
                  width={400}
                  height={500}
                  unoptimized
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center gap-2 text-center p-2">
                  <span className="text-[10px] tracking-widest text-white">{post.username}</span>
                  <span className="text-[9px] text-zinc-300">♥ {post.likes} likes</span>
                  <span className="text-[9px] text-zinc-400 underline">VIEW ON INSTAGRAM</span>
                </div>
              </a>
            ))}
          </div>

          <div className="mt-6 text-zinc-500 tracking-[0.2em] text-[10px] sm:text-xs font-bold">
            @WSTRNR – TAG US IN YOUR FITS
          </div>
        </div>
      </section>

      {/* Newsletter + Footer Links (unchanged) */}
      <section className="py-14 md:py-20 px-4 sm:px-6 md:px-12 bg-black">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 md:gap-16">
          {/* Newsletter */}
          <div className="lg:col-span-6 flex flex-col gap-4 md:gap-6">
            <span className="text-zinc-500 tracking-[0.2em] block uppercase text-[10px] md:text-xs">
              [ NEWSLETTER + FOOTER ]
            </span>
            <h4 className="text-lg md:text-xl uppercase font-black tracking-wider text-zinc-200 leading-tight">
              JOIN THE WITNESS LIST
            </h4>

            <form onSubmit={handleSubscribe} className="w-full flex items-stretch mt-2">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your@email.com"
                required
                disabled={status === "sending" || status === "success"}
                className="w-full bg-zinc-950/60 border border-zinc-900 border-r-0 px-4 py-3 text-zinc-200 placeholder-zinc-700 outline-none focus:border-zinc-700 transition-colors text-xs md:text-sm disabled:opacity-50"
              />
              <button
                type="submit"
                disabled={status === "sending" || status === "success"}
                className={`bg-white text-black px-5 sm:px-6 py-3 font-bold uppercase tracking-widest hover:bg-zinc-900 hover:text-white hover:border-zinc-800 border border-transparent transition-all shrink-0 text-[10px] md:text-xs disabled:opacity-50 disabled:cursor-not-allowed ${status === "success" ? "bg-emerald-600 text-white" : status === "error" ? "bg-red-600 text-white" : ""}`}
              >
                {status === "sending" ? "SENDING..." : status === "success" ? "RECEIVED" : status === "error" ? "RETRY" : "SUBMIT ➔"}
              </button>
            </form>

            {statusText && (
              <div className={`font-mono text-[9px] tracking-widest uppercase mt-2 transition-all duration-300 ${status === "success" ? "text-emerald-400" : status === "error" ? "text-red-500" : "text-zinc-500"}`}>
                [{status === "success" ? "TRANSMISSION ACCEPTED" : status === "error" ? "SIGNAL INTERRUPTED" : "WAITING..."}] // {statusText}
              </div>
            )}
          </div>

          {/* Link Columns – unchanged */}
          <div className="lg:col-span-6 grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 text-zinc-400 text-[11px] md:text-xs">
            <div className="flex flex-col gap-2 md:gap-3">
              <span className="text-zinc-600 font-bold tracking-[0.2em] uppercase mb-1 text-[10px]">WSTRNR</span>
              <p className="text-zinc-600 font-light leading-relaxed text-[10px] md:text-[11px]">© 2026, All rights reserved.</p>
            </div>

            <div className="flex flex-col gap-2 md:gap-3">
              <span className="text-zinc-600 font-bold tracking-[0.2em] uppercase mb-1 text-[10px]">SHOP</span>
              <Link href="/shop?category=shirts" className="hover:text-white transition-colors">Tees & Tops</Link>
              <Link href="/shop?category=beanies" className="hover:text-white transition-colors">Beanies</Link>
              <Link href="/shop?category=skullies" className="hover:text-white transition-colors">Skullies</Link>
              <Link href="/shop?category=pants" className="hover:text-white transition-colors">Pants</Link>
            </div>

            <div className="flex flex-col gap-2 md:gap-3">
              <span className="text-zinc-600 font-bold tracking-[0.2em] uppercase mb-1 text-[10px]">BRAND</span>
              <Link href="/studio" className="hover:text-white transition-colors">Studio</Link>
              <Link href="/journal" className="hover:text-white transition-colors">Journal</Link>
            </div>

            <div className="flex flex-col gap-2 md:gap-3">
              <span className="text-zinc-600 font-bold tracking-[0.2em] uppercase mb-1 text-[10px]">CONNECT</span>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Instagram</a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Twitter</a>
              <Link href="/contact" className="hover:text-white transition-colors">Inquiries</Link>
            </div>
          </div>
        </div>
      </section>
    </footer>
  );
} 