"use client";

import { FormEvent, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import CustomCursor from "@/components/CustomCursor";
import { submitInquiry } from "@/app/actions/inquiry";

type InquiryType = "order" | "collab" | "press" | "general";

const INQUIRY_OPTIONS: { value: InquiryType; label: string; code: string }[] = [
  { value: "order", label: "EXISTING PIECE / ORDER", code: "ORD" },
  { value: "collab", label: "ARTISTIC COLLABORATION", code: "CLB" },
  { value: "press", label: "PRESS / EDITORIAL", code: "PRS" },
  { value: "general", label: "GENERAL INVESTIGATION", code: "GEN" },
];

export default function CreativeContact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [inquiryType, setInquiryType] = useState<InquiryType>("general");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 150, damping: 15 });
  const springY = useSpring(y, { stiffness: 150, damping: 15 });

  const handleMagneticMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    x.set((e.clientX - centerX) * 0.3);
    y.set((e.clientY - centerY) * 0.3);
  };

  const handleMagneticLeave = () => {
    x.set(0);
    y.set(0);
  };

  const selected = INQUIRY_OPTIONS.find((o) => o.value === inquiryType);

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setErrorMsg("");

    if (!name.trim() || !email.trim() || !message.trim()) {
      setStatus("error");
      setErrorMsg("Complete all required fields.");
      return;
    }

    setStatus("sending");

    try {
      const result = await submitInquiry({
        name,
        email,
        inquiryType,
        message,
      });

      if (!result.ok) {
        setStatus("error");
        setErrorMsg(result.error || "Transmission failed.");
        return;
      }

      setStatus("sent");
      setName("");
      setEmail("");
      setMessage("");
      setInquiryType("general");
    } catch {
      setStatus("error");
      setErrorMsg("Network fault. Retry shortly.");
    }
  }

  return (
    <main className="relative min-h-screen bg-black text-white overflow-x-hidden">
      <CustomCursor />

      <div
        className="pointer-events-none absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage: "radial-gradient(rgba(255,255,255,0.5) 0.5px, transparent 0)",
          backgroundSize: "3px 3px",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 md:px-12 pt-28 md:pt-36 pb-[calc(2rem+env(safe-area-inset-bottom))]">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 md:gap-10 border-b border-zinc-900 pb-8 md:pb-10 mb-12 md:mb-14">
          <div>
            <p className="font-mono text-[10px] md:text-[11px] tracking-[0.35em] text-zinc-500 uppercase mb-4">
              [ CHANNEL // INQUIRIES ]
            </p>
            <h1 className="font-sans text-4xl md:text-6xl lg:text-7xl font-black uppercase tracking-tight leading-[0.95]">
              Initiate
              <span className="block text-zinc-500">Dialogue</span>
            </h1>
            <p className="mt-3 md:mt-4 font-mono text-[10px] tracking-[0.25em] text-zinc-600 uppercase">
              WSTNR / CONCRETE PROPHETS — DESK SIGNAL
            </p>
          </div>

          <div className="font-mono text-[10px] md:text-[11px] text-zinc-600 uppercase tracking-widest space-y-1 md:text-right leading-relaxed">
            <p>NODE // CONTACT_DESK</p>
            <p>
              STATUS //{" "}
              <span className="text-zinc-300">
                {status === "sent" ? "TRANSMISSION_RECEIVED" : "OPEN_FOR_SIGNAL"}
              </span>
            </p>
            <p>LATENCY // MANUAL REVIEW 24–48H</p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 md:gap-16 lg:gap-12">
          {/* Sidebar */}
          <aside className="lg:col-span-4 flex flex-col gap-8 md:gap-10">
            <div className="border border-zinc-900 bg-zinc-950/50 p-5 md:p-8">
              <p className="font-mono text-[10px] tracking-[0.3em] text-zinc-600 uppercase mb-6">
                [ TRANSMISSION PROTOCOL ]
              </p>
              <ul className="space-y-4 md:space-y-5 font-mono text-[11px] text-zinc-500 uppercase tracking-wide leading-relaxed">
                <li className="flex gap-3">
                  <span className="text-zinc-700 shrink-0">01</span>
                  <span>Identify with legal name or atelier alias.</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-zinc-700 shrink-0">02</span>
                  <span>Select inquiry class for correct desk routing.</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-zinc-700 shrink-0">03</span>
                  <span>Leave secure return channel + raw intent.</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-zinc-700 shrink-0">04</span>
                  <span>Dispatch. No auto-replies. Human review only.</span>
                </li>
              </ul>
            </div>

            <div className="border border-zinc-900 p-5 md:p-8">
              <p className="font-mono text-[10px] tracking-[0.3em] text-zinc-600 uppercase mb-6">
                [ DIRECT CHANNELS ]
              </p>
              <div className="space-y-4 font-mono text-xs md:text-sm">
                <div>
                  <p className="text-zinc-700 text-[10px] tracking-widest mb-1">EMAIL</p>
                  <a href="mailto:desk@wstnr.com" className="text-zinc-300 hover:text-white transition-colors break-all">
                    desk@wstnr.com
                  </a>
                </div>
                <div>
                  <p className="text-zinc-700 text-[10px] tracking-widest mb-1">INSTAGRAM</p>
                  <a href="https://instagram.com/wstnr" target="_blank" rel="noopener noreferrer" className="text-zinc-300 hover:text-white transition-colors">
                    @wstnr
                  </a>
                </div>
                <div>
                  <p className="text-zinc-700 text-[10px] tracking-widest mb-1">STUDIO</p>
                  <p className="text-zinc-500 uppercase tracking-wide text-[11px] leading-relaxed">
                    By appointment only
                    <br />
                    Coordinates released on confirmation
                  </p>
                </div>
              </div>
            </div>

            <div className="hidden lg:block font-mono text-[10px] text-zinc-700 tracking-[0.25em] uppercase leading-relaxed">
              <p>CLASSIFIED AS NON-TRANSACTIONAL</p>
              <p className="mt-2 text-zinc-800">
                ORDERS THROUGH CHECKOUT ONLY · THIS DESK IS FOR SIGNAL
              </p>
            </div>
          </aside>

          {/* Form */}
          <section className="lg:col-span-8">
            <div
              className="relative border-[3px] border-zinc-900 bg-[#0c0c0c] p-6 md:p-10 lg:p-12 overflow-hidden"
              style={{
                backgroundImage: "radial-gradient(rgba(255,255,255,0.03) 1px, transparent 0)",
                backgroundSize: "4px 4px",
              }}
            >
              <span className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-zinc-600" />
              <span className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-zinc-600" />
              <span className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-zinc-600" />
              <span className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-zinc-600" />

              <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-10 md:mb-14 gap-2">
                <p className="font-mono text-[10px] tracking-[0.35em] text-zinc-500 uppercase">
                  [ COMPOSE TRANSMISSION ]
                </p>
                <p className="font-mono text-[10px] tracking-widest text-zinc-700 uppercase">
                  REF // {selected?.code ?? "GEN"}-{new Date().getFullYear()}
                </p>
              </div>

              {status === "sent" ? (
                <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} className="py-16 md:py-24 text-center">
                  <p className="font-mono text-[11px] tracking-[0.35em] text-zinc-500 uppercase mb-6">[ SIGNAL ACCEPTED ]</p>
                  <h2 className="font-sans text-3xl md:text-5xl font-black uppercase tracking-tight mb-6">
                    Transmission
                    <span className="block text-zinc-500">Logged</span>
                  </h2>
                  <p className="font-mono text-xs text-zinc-600 max-w-md mx-auto leading-relaxed uppercase tracking-wide">
                    Your inquiry entered the WSTNR desk queue. Expect a human response within 24–48 hours if actionable.
                  </p>
                  <button
                    type="button"
                    onClick={() => setStatus("idle")}
                    className="mt-12 px-10 py-4 border border-zinc-800 font-mono text-[11px] tracking-[0.3em] uppercase text-zinc-300 hover:bg-white hover:text-black hover:border-white transition-all"
                  >
                    Send Another
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-12 md:gap-14">
                  {/* Identity */}
                  <div>
                    <label className="block font-mono text-[10px] tracking-[0.3em] text-zinc-600 uppercase mb-4">
                      [ 01 // IDENTITY ]
                    </label>
                    <div className="font-sans text-xl md:text-3xl font-light tracking-tight leading-relaxed text-zinc-500">
                      MY NAME IS{" "}
                      <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="[ ALIAS OR LEGAL NAME ]"
                        required
                        className="inline-block min-w-[200px] sm:min-w-[260px] md:min-w-[320px] max-w-full bg-transparent border-b border-zinc-800 text-white placeholder-zinc-800 outline-none px-1 py-1 focus:border-white transition-colors font-mono text-base md:text-2xl"
                      />
                    </div>
                  </div>

                  {/* Inquiry class */}
                  <div>
                    <label className="block font-mono text-[10px] tracking-[0.3em] text-zinc-600 uppercase mb-4">
                      [ 02 // INQUIRY CLASS ]
                    </label>
                    <div className="font-sans text-xl md:text-3xl font-light tracking-tight leading-relaxed text-zinc-500 mb-5 md:mb-6">
                      I WISH TO CONNECT REGARDING
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {INQUIRY_OPTIONS.map((opt) => {
                        const active = inquiryType === opt.value;
                        return (
                          <button
                            key={opt.value}
                            type="button"
                            onClick={() => setInquiryType(opt.value)}
                            className={`text-left border px-4 py-4 font-mono text-[11px] tracking-widest uppercase transition-all min-h-[4.5rem] flex flex-col justify-center ${active ? "border-white bg-white text-black" : "border-zinc-900 bg-black text-zinc-500 hover:border-zinc-600 hover:text-zinc-300"}`}
                          >
                            <span className="block text-[9px] opacity-60 mb-1">{opt.code}</span>
                            <span className="leading-tight">{opt.label}</span>
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block font-mono text-[10px] tracking-[0.3em] text-zinc-600 uppercase mb-4">
                      [ 03 // RETURN CHANNEL ]
                    </label>
                    <div className="font-sans text-xl md:text-3xl font-light tracking-tight leading-relaxed text-zinc-500">
                      REACH ME AT{" "}
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="[ SECURE_EMAIL ]"
                        required
                        className="inline-block min-w-[220px] sm:min-w-[280px] md:min-w-[360px] max-w-full bg-transparent border-b border-zinc-800 text-white placeholder-zinc-800 outline-none px-1 py-1 focus:border-white transition-colors font-mono text-base md:text-2xl"
                      />
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block font-mono text-[10px] tracking-[0.3em] text-zinc-600 uppercase mb-4">
                      [ 04 // RAW NOTES ]
                    </label>
                    <textarea
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      rows={5}
                      required
                      placeholder="Piece serial, collab intent, press deadline, sizing conflict..."
                      className="w-full bg-zinc-950/80 border border-zinc-900 text-zinc-200 p-5 md:p-6 font-mono text-xs md:text-sm placeholder-zinc-800 outline-none focus:border-zinc-600 transition-colors resize-none leading-relaxed"
                    />
                    <div className="mt-3 flex justify-between font-mono text-[10px] text-zinc-700 tracking-widest uppercase">
                      <span>Plain text only</span>
                      <span>{message.length} chars</span>
                    </div>
                  </div>

                  {/* Footer actions */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 pt-4 border-t border-zinc-900">
                    <p
                      className={`font-mono text-[10px] tracking-widest uppercase max-w-sm leading-relaxed ${status === "error" ? "text-red-500" : "text-zinc-600"}`}
                    >
                      {status === "error"
                        ? `[ ERROR // ${errorMsg || "RETRY TRANSMISSION"} ]`
                        : "[ NO BOTS · NO NEWSLETTER SPAM · HUMAN DESK ONLY ]"}
                    </p>

                    <div
                      onMouseMove={handleMagneticMove}
                      onMouseLeave={handleMagneticLeave}
                      className="self-start sm:self-auto"
                    >
                      <motion.button
                        type="submit"
                        disabled={status === "sending"}
                        style={{ x: springX, y: springY }}
                        className="px-10 py-4 bg-white text-black font-mono text-[11px] font-bold tracking-[0.3em] uppercase border border-white hover:bg-zinc-200 disabled:opacity-60 disabled:cursor-wait transition-colors flex items-center gap-3"
                      >
                        {status === "sending" ? (
                          <>
                            <span className="relative flex h-2 w-2">
                              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-black/50" />
                              <span className="relative inline-flex h-2 w-2 rounded-full bg-black" />
                            </span>
                            SENDING
                          </>
                        ) : (
                          <>
                            DISPATCH
                            <motion.span animate={{ x: [0, 4, 0] }} transition={{ repeat: Infinity, duration: 1.4, ease: "easeInOut" }}>
                              ➔
                            </motion.span>
                          </>
                        )}
                      </motion.button>
                    </div>
                  </div>
                </form>
              )}
            </div>

            <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-4 font-mono text-[10px] text-zinc-700 uppercase tracking-widest">
              <div>
                <p className="text-zinc-800 mb-1">[ DESK ]</p>
                <p className="text-zinc-500">WSTNR Inquiries</p>
              </div>
              <div>
                <p className="text-zinc-800 mb-1">[ WINDOW ]</p>
                <p className="text-zinc-500">24–48h</p>
              </div>
              <div>
                <p className="text-zinc-800 mb-1">[ CLASS ]</p>
                <p className="text-zinc-500">{selected?.code ?? "GEN"}</p>
              </div>
              <div>
                <p className="text-zinc-800 mb-1">[ ENCRYPTION ]</p>
                <p className="text-zinc-500">TLS transit</p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}