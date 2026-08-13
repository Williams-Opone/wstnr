"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import CustomCursor from "@/components/CustomCursor";

export default function AdminLogin() {
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const router = useRouter();

  const handleLoginSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setErrorMsg("");

    try {
      const res = await fetch("/api/admin/auth", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ password }),
      });

      if (res.ok) {
        // Authorized successfully, transition inside
        router.push("/admin");
        router.refresh();
      } else {
        setErrorMsg("ACCESS DENIED // CRITICAL VERIFICATION FAULT");
        setPassword("");
      }
    } catch (err) {
      setErrorMsg("CONNECTION CORRUPTED // HANDSHAKE FAILED");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="bg-black text-white min-h-screen flex items-center justify-center p-4 relative font-mono select-none overflow-hidden">
      <CustomCursor />

      {/* Grid Overlay Matrix */}
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(rgba(255,255,255,0.15) 1px, transparent 0)",
          backgroundSize: "8px 8px",
        }}
      />

      <div className="w-full max-w-md border border-zinc-900 p-8 bg-zinc-950/40 relative z-10 backdrop-blur-md">
        
        {/* Top Header Signatures */}
        <div className="flex justify-between items-center border-b border-zinc-900 pb-6 mb-8">
          <div className="flex flex-col gap-1">
            <span className="text-[9px] text-zinc-600 tracking-widest uppercase">[ GATEWAY NODE SECURE ]</span>
            <h1 className="text-md font-black tracking-widest text-zinc-300">WSTRNR SECURITY CORE</h1>
          </div>
          <span className="text-[9px] text-red-500 font-bold animate-pulse">● ENCRYPTED</span>
        </div>

        <form onSubmit={handleLoginSubmit} className="flex flex-col gap-6">
          <div className="flex flex-col gap-2">
            <label className="text-[9px] text-zinc-500 uppercase tracking-wider">ENTER COMMAND SECRET PASSPHRASE</label>
            <input
              required
              type="password"
              placeholder="••••••••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              disabled={loading}
              className="bg-black border border-zinc-900 p-4 text-xs text-center tracking-widest text-white outline-none focus:border-zinc-700 transition-colors placeholder-zinc-800"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full py-4 bg-white text-black font-sans font-black text-xs tracking-widest uppercase hover:bg-zinc-900 hover:text-white border border-transparent hover:border-zinc-800 transition-all"
          >
            {loading ? "[ TESTING SHA-256 SIGNATURE... ]" : "VERIFY COMMAND PRIVILEGES ➔"}
          </button>
        </form>

        <AnimatePresence>
          {errorMsg && (
            <motion.div
              initial={{ opacity: 0, y: 4 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              className="mt-6 p-4 bg-red-950/40 border border-red-900/60 text-red-500 text-[9px] text-center font-bold tracking-wider uppercase"
            >
              ⚠️ {errorMsg}
            </motion.div>
          )}
        </AnimatePresence>

        <div className="text-[8px] text-zinc-700 text-center tracking-widest uppercase mt-8 border-t border-zinc-900/40 pt-4">
          WARNING: ALL ACCESS ROUTE ATTEMPTS ARE GEOMETRICALLY MONITORED IN NEON ENGINE REGISTRIES.
        </div>
      </div>
    </main>
  );
}