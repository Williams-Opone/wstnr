"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import CustomCursor from "@/components/CustomCursor";
import {
  getAnalyticsMetrics,
  uploadProduct,
  updateProduct,
  deleteProduct,
  seedTestAnalytics,
  sendBroadcastToSubscribers,
} from "@/app/actions/admin";

export default function AdminDashboard() {
  const [metrics, setMetrics] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState<any[]>([]);
  const [fetchingProducts, setFetchingProducts] = useState(false);
  const [subscribers, setSubscribers] = useState(0);
  const [activeTab, setActiveTab] = useState<"inventory" | "upload">("inventory");

  const [serial, setSerial] = useState("");
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("shirts");
  const [composition, setComposition] = useState("");
  const [details, setDetails] = useState("");
  const [measurements, setMeasurements] = useState("");
  const [imageInput, setImageInput] = useState("");
  const [placement, setPlacement] = useState("ARCHIVE_GRID");

  const [variants, setVariants] = useState<{ color: string; size: string; stock: number }[]>([]);
  const [currColor, setCurrColor] = useState("");
  const [currSize, setCurrSize] = useState("M");
  const [currStock, setCurrStock] = useState("12");

  const [statusMsg, setStatusMsg] = useState({ type: "", text: "" });
  const [editingId, setEditingId] = useState<string | null>(null);
  const [editForm, setEditForm] = useState({
    serial: "", name: "", price: 0, category: "", composition: "", details: "",
    measurements: "", images: "", isActive: true,
  });

  const [broadcastSubject, setBroadcastSubject] = useState("ARCHIVE UPDATE");
  const [broadcastBody, setBroadcastBody] = useState("A new extraction has been added to the WSTNR archive. Limited batches remain available.");

  const loadData = async () => {
    try {
      const data = await getAnalyticsMetrics();
      setMetrics(data);
      const subRes = await fetch("/api/admin/subscribers");
      const subData = await subRes.json();
      setSubscribers(subData.count || 0);
    } catch (e) {
      console.error("Metrics load error:", e);
      setMetrics({ totalVisits: 0, pastWeekVisits: 0, dailyBreakdown: [] });
      setSubscribers(0);
    }
  };

  const loadProducts = async () => {
    setFetchingProducts(true);
    try {
      const res = await fetch("/api/admin/products");
      if (!res.ok) throw new Error("Failed");
      const data = await res.json();
      setProducts(data.products ?? []);
    } catch (e) {
      console.error("Products load error:", e);
      setProducts([]);
    } finally {
      setFetchingProducts(false);
    }
  };

  useEffect(() => {
    async function init() {
      await loadData();
      await loadProducts();
      setLoading(false);
    }
    init();
  }, []);

  const addVariant = () => {
    if (!currColor || !currSize || !currStock) return;
    setVariants([...variants, { color: currColor, size: currSize, stock: Number(currStock) }]);
    setCurrColor("");
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (variants.length === 0) {
      setStatusMsg({ type: "error", text: "INVENTORY MATRIX MUST CONTAIN AT LEAST 1 SKU" });
      return;
    }
    setStatusMsg({ type: "process", text: "[ TRANSMITTING SECURE ARCHIVE RECORD TO NEON... ]" });
    const res = await uploadProduct({
      serial, name, price: Number(price), category, composition, details, measurements,
      images: [imageInput || "https://images.unsplash.com/photo-1780566035913-9233ca20dc29?auto=format&fit=crop&w=800&q=80"],
      placement,
      variants,
    });
    if (res.success) {
      setStatusMsg({ type: "success", text: "SUCCESS // INVENTORY RECORD LIVE" });
      setSerial(""); setName(""); setPrice(""); setComposition(""); setDetails(""); setMeasurements(""); setImageInput(""); setVariants([]);
      await loadProducts();
    } else {
      setStatusMsg({ type: "error", text: `FAULT: ${res.error}` });
    }
  };

  const handleEdit = (prod: any) => {
    setEditingId(prod.id);
    setEditForm({
      serial: prod.serial || "", name: prod.name || "", price: Number(prod.price) || 0,
      category: prod.category || "", composition: prod.composition || "", details: prod.details || "",
      measurements: prod.measurements || "", images: Array.isArray(prod.images) ? prod.images.join(", ") : (prod.images || ""),
      isActive: prod.isActive,
    });
  };

  const handleSave = async () => {
    if (!editingId) return;
    const imagesArray = editForm.images.split(",").map((s: string) => s.trim()).filter(Boolean);
    await updateProduct(editingId, {
      serial: editForm.serial, name: editForm.name, price: editForm.price, category: editForm.category,
      composition: editForm.composition, details: editForm.details, measurements: editForm.measurements,
      images: imagesArray, isActive: editForm.isActive,
    });
    setEditingId(null);
    await loadProducts();
    setStatusMsg({ type: "success", text: "PRODUCT UPDATED" });
  };

  const handleDelete = async (id: string) => {
    if (!confirm("Delete permanently?")) return;
    await deleteProduct(id);
    await loadProducts();
    setStatusMsg({ type: "success", text: "PRODUCT DELETED" });
  };

  const handleGenerateTestData = async () => {
    setStatusMsg({ type: "process", text: "[ INJECTING TEST ANALYTICS DATA... ]" });
    const res = await seedTestAnalytics();
    await loadData();
    setStatusMsg({ type: res.success ? "success" : "error", text: res.message || "Done" });
  };

  const handleBroadcast = async () => {
    if (!broadcastSubject.trim() || !broadcastBody.trim()) {
      setStatusMsg({ type: "error", text: "SUBJECT AND BODY REQUIRED" });
      return;
    }
    setStatusMsg({ type: "process", text: "[ BROADCASTING... ]" });
    const res = await sendBroadcastToSubscribers(broadcastSubject, broadcastBody);
    setStatusMsg({ type: res.ok ? "success" : "error", text: res.message || "Complete" });
  };

  if (loading) return <div className="bg-black text-zinc-650 min-h-screen flex items-center justify-center font-mono text-xs tracking-widest uppercase">[ ESTABLISHING CONTROL LINK... ]</div>;

  return (
    <main className="bg-black text-white min-h-screen pt-28 pb-24 px-4 md:px-12 relative font-mono select-none">
      <CustomCursor />
      <div className="max-w-7xl mx-auto flex flex-col gap-12">
        <div className="border border-zinc-900 p-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-4 bg-gradient-to-r from-zinc-950 via-black to-zinc-950">
          <div>
            <span className="text-[10px] text-zinc-500 tracking-widest uppercase block">[ ATELIER CENTRAL COMMAND ]</span>
            <h1 className="text-2xl font-black font-sans tracking-tight">WSTRNR ENGINE TERMINAL</h1>
          </div>
          <div className="text-[10px] text-zinc-600 md:text-right leading-relaxed">
            <div>NODE PROTOCOL // V7.8.0</div>
            <div className="text-emerald-500 animate-pulse">● LIVE STREAM ACTIVE</div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          <div className="border border-zinc-900 p-6 bg-zinc-950/40 flex flex-col justify-between">
            <span className="text-[10px] text-zinc-500">[ TOTAL_HITS ]</span>
            <div className="text-5xl font-black tracking-tighter my-6">{metrics?.totalVisits ?? 0}</div>
            <span className="text-[9px] text-zinc-600">ARCHIVE INDEX</span>
          </div>
          <div className="border border-zinc-900 p-6 bg-zinc-950/40 flex flex-col justify-between">
            <div className="flex justify-between items-start">
              <span className="text-[10px] text-zinc-500">[ SEVEN_DAY_WINDOW ]</span>
              <button onClick={handleGenerateTestData} className="text-[9px] bg-zinc-900 border border-zinc-800 px-2 py-1 text-zinc-300 hover:bg-white hover:text-black hover:border-white transition-all uppercase tracking-widest">Generate Test Data</button>
            </div>
            <div className="text-5xl font-black tracking-tighter my-6 text-zinc-400">{metrics?.pastWeekVisits ?? 0}</div>
            <span className="text-[9px] text-zinc-600">WEEK DELTA</span>
          </div>
          <div className="border border-zinc-900 p-6 bg-zinc-950/40 flex flex-col justify-between">
            <span className="text-[10px] text-zinc-500 mb-4">[ DAILY_METRIC_FREQUENCY ]</span>
            <div className="flex items-end gap-2 h-28 px-1">
              {metrics?.dailyBreakdown?.map((d: any, i: number) => {
                const max = Math.max(...(metrics.dailyBreakdown?.map((v: any) => v.count) || [1]), 1);
                const h = `${Math.max((d.count / max) * 100, 8)}%`;
                return (
                  <div key={i} className="flex-1 flex flex-col items-center justify-end h-full gap-1">
                    <span className="text-[8px] text-zinc-500 font-bold">{d.count}</span>
                    <div style={{ height: h }} className="w-full bg-zinc-800 border-t-2 border-white hover:bg-white transition-colors" />
                    <span className="text-[8px] text-zinc-600 font-bold uppercase">{d.day}</span>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="border border-emerald-900/40 bg-emerald-950/10 p-6 flex flex-col justify-between">
            <span className="text-[10px] text-emerald-300">[ NEWSLETTER_SUBSCRIBERS ]</span>
            <div className="text-5xl font-black tracking-tighter my-6 text-emerald-400">{subscribers}</div>
            <span className="text-[9px] text-emerald-600">WITNESS LIST INVENTORY</span>
          </div>
        </div>

        {/* Broadcast */}
        <section className="border border-emerald-900/40 bg-emerald-950/10 p-6 md:p-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-emerald-900/30 pb-4 mb-6">
            <div>
              <h2 className="text-sm font-black font-sans tracking-tight uppercase text-emerald-300">Broadcast Transmission</h2>
              <p className="font-mono text-[10px] text-zinc-600 mt-1">Send message to all subscribers on witness list</p>
            </div>
            <span className="text-[9px] text-zinc-600 font-mono">[ LIVE DATABASE CONNECTION ]</span>
          </div>
          <div className="flex flex-col gap-3">
            <input value={broadcastSubject} onChange={e => setBroadcastSubject(e.target.value)} placeholder="Broadcast Subject" className="w-full bg-black border border-zinc-900 px-4 py-3 text-xs text-white outline-none focus:border-emerald-600 transition-colors font-mono" />
            <textarea value={broadcastBody} onChange={e => setBroadcastBody(e.target.value)} rows={4} placeholder="Write archive update..." className="w-full bg-black border border-zinc-900 px-4 py-3 text-xs text-zinc-300 outline-none focus:border-emerald-600 transition-colors font-mono resize-none" />
            <button onClick={handleBroadcast} className="self-end bg-emerald-600 text-black px-6 py-3 text-[10px] font-black tracking-[0.2em] uppercase hover:bg-emerald-400 transition-all border border-transparent hover:border-emerald-300">
              DISPATCH BROADCAST ➔
            </button>
          </div>
        </section>

        {/* Tabs */}
        <div className="flex">
          <button onClick={() => setActiveTab("inventory")} className={`flex-1 py-4 font-black tracking-[0.2em] text-xs uppercase border transition-all ${activeTab === "inventory" ? "bg-white text-black border-white" : "bg-black text-zinc-500 border-zinc-900 hover:text-white hover:border-zinc-600"}`}>
            [ INVENTORY MATRIX ]
          </button>
          <button onClick={() => setActiveTab("upload")} className={`flex-1 py-4 font-black tracking-[0.2em] text-xs uppercase border transition-all ${activeTab === "upload" ? "bg-white text-black border-white" : "bg-black text-zinc-500 border-zinc-900 hover:text-white hover:border-zinc-600"}`}>
            [ INJECT ARCHIVE ]
          </button>
        </div>

        <AnimatePresence mode="wait">
          {activeTab === "inventory" ? (
            <motion.div key="inv" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} transition={{ duration: 0.2 }}>
              <h2 className="text-xs font-black tracking-widest text-zinc-300 border-b border-zinc-900 pb-3 mb-6 uppercase">[ LIVE INVENTORY // {products.length} ]</h2>
              {fetchingProducts ? <div className="text-zinc-600 text-xs">[ FETCHING... ]</div> : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {products.map((prod: any) => (
                    <div key={prod.id} className="border border-zinc-900 bg-zinc-950 p-5 flex flex-col gap-4">
                      <div className="flex gap-4">
                        {prod.images && prod.images[0] ? (
                          <img src={Array.isArray(prod.images) ? prod.images[0] : prod.images.split(",")[0]} alt={prod.name} className="w-24 h-28 object-cover border border-zinc-800 shrink-0" />
                        ) : <div className="w-24 h-28 bg-zinc-900 border border-zinc-800 flex items-center justify-center text-[9px] text-zinc-600 shrink-0">NO IMAGE</div>}
                        <div className="flex-1 flex flex-col gap-1">
                          <h3 className="font-black text-base uppercase leading-tight">{prod.name}</h3>
                          <p className="text-[10px] text-zinc-500 font-mono">{prod.serial}</p>
                          <p className="text-sm font-bold text-zinc-300">${Number(prod.price)}</p>
                          <p className="text-[10px] text-zinc-600">Category: {prod.category}</p>
                          <p className="text-[10px] text-zinc-600">Active: {prod.isActive ? "YES" : "NO"}</p>
                        </div>
                      </div>
                      {editingId === prod.id ? (
                        <div className="flex flex-col gap-2 border-t border-zinc-900 pt-4">
                          <input value={editForm.name} onChange={e => setEditForm({ ...editForm, name: e.target.value })} className="bg-black border border-zinc-800 p-2 text-xs" placeholder="Name" />
                          <input type="number" value={editForm.price} onChange={e => setEditForm({ ...editForm, price: Number(e.target.value) })} className="bg-black border border-zinc-800 p-2 text-xs" placeholder="Price" />
                          <textarea value={editForm.images} onChange={e => setEditForm({ ...editForm, images: e.target.value })} className="bg-black border border-zinc-800 p-2 text-xs" placeholder="Images (comma URLs)" rows={2} />
                          <div className="flex gap-2">
                            <button onClick={handleSave} className="bg-white text-black px-4 py-2 text-xs font-bold uppercase">Save</button>
                            <button onClick={() => setEditingId(null)} className="border border-zinc-700 px-4 py-2 text-xs">Cancel</button>
                          </div>
                        </div>
                      ) : (
                        <div className="flex gap-2 border-t border-zinc-900 pt-4">
                          <button onClick={() => handleEdit(prod)} className="text-xs font-mono uppercase tracking-widest text-zinc-400 hover:text-white">Edit</button>
                          <button onClick={() => handleDelete(prod.id)} className="text-xs font-mono uppercase tracking-widest text-red-500 hover:text-red-400">Delete</button>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </motion.div>
          ) : (
            <motion.div key="upload" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} transition={{ duration: 0.2 }}>
              <form onSubmit={handleSubmit} className="border border-zinc-900 p-6 md:p-8 bg-zinc-950/20">
                <h2 className="text-xs font-black tracking-widest text-zinc-300 border-b border-zinc-900 pb-3 mb-6 uppercase">[ INJECT NEW ARCHIVE ]</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex flex-col gap-1.5">
                    <label className="text-[9px] text-zinc-500">SERIAL BLOCK (UNIQUE)</label>
                    <input required type="text" value={serial} onChange={e => setSerial(e.target.value)} className="bg-zinc-950 border border-zinc-900 p-3 text-xs text-white outline-none focus:border-zinc-500" />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label className="text-[9px] text-zinc-500">NAME</label>
                    <input required type="text" value={name} onChange={e => setName(e.target.value)} className="bg-zinc-950 border border-zinc-900 p-3 text-xs text-white outline-none focus:border-zinc-500" />
                  </div>
                </div>
                <div className="grid grid-cols-3 gap-4 mt-4">
                  <div className="flex flex-col gap-1.5">
                    <label className="text-[9px] text-zinc-500">PRICE (USD)</label>
                    <input required type="number" value={price} onChange={e => setPrice(e.target.value)} className="bg-zinc-950 border border-zinc-900 p-3 text-xs text-white outline-none focus:border-zinc-500" />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label className="text-[9px] text-zinc-500">CATEGORY</label>
                    <select value={category} onChange={e => setCategory(e.target.value)} className="bg-zinc-950 border border-zinc-900 p-3 text-xs text-white outline-none focus:border-zinc-500">
                      <option value="shirts">SHIRTS</option>
                      <option value="beanies">BEANIE</option>
                      <option value="skullies">SKULLIES</option>
                      <option value="chains">CHAINS</option>
                    </select>
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label className="text-[9px] text-zinc-500">PLACEMENT</label>
                    <select value={placement} onChange={e => setPlacement(e.target.value)} className="bg-zinc-950 border border-zinc-900 p-3 text-xs text-white outline-none focus:border-zinc-500">
                      <option value="ARCHIVE_GRID">ARCHIVE_GRID</option>
                      <option value="LATEST_DROP">LATEST_DROP</option>
                      <option value="LOOKBOOK_STATEMENT">LOOKBOOK</option>
                    </select>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4 mt-4">
                  <div className="flex flex-col gap-1.5">
                    <label className="text-[9px] text-zinc-500">COMPOSITION</label>
                    <input required type="text" value={composition} onChange={e => setComposition(e.target.value)} className="bg-zinc-950 border border-zinc-900 p-3 text-xs text-white outline-none focus:border-zinc-500" />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label className="text-[9px] text-zinc-500">MEASUREMENTS</label>
                    <input required type="text" value={measurements} onChange={e => setMeasurements(e.target.value)} className="bg-zinc-950 border border-zinc-900 p-3 text-xs text-white outline-none focus:border-zinc-500" />
                  </div>
                </div>
                <div className="flex flex-col gap-1.5 mt-4">
                  <label className="text-[9px] text-zinc-500">ARCHITECTURAL DESIGN DETAILS</label>
                  <textarea required rows={3} value={details} onChange={e => setDetails(e.target.value)} className="bg-zinc-950 border border-zinc-900 p-3 text-xs text-white outline-none focus:border-zinc-500 resize-none" />
                </div>
                <div className="flex flex-col gap-1.5 mt-4">
                  <label className="text-[9px] text-zinc-500">IMAGE URL</label>
                  <input type="text" value={imageInput} onChange={e => setImageInput(e.target.value)} className="bg-zinc-950 border border-zinc-900 p-3 text-xs text-white outline-none focus:border-zinc-500" placeholder="https://images.unsplash.com/..." />
                </div>
                <div className="mt-6 border-t border-zinc-900 pt-6">
                  <div className="text-[9px] text-zinc-500 tracking-widest uppercase mb-4">[ INVENTORY VARIANT MATRIX ]</div>
                  <div className="grid grid-cols-3 gap-4 mb-4">
                    <input value={currColor} onChange={e => setCurrColor(e.target.value)} placeholder="Color" className="bg-zinc-950 border border-zinc-900 p-3 text-xs text-white" />
                    <select value={currSize} onChange={e => setCurrSize(e.target.value)} className="bg-zinc-950 border border-zinc-900 p-3 text-xs text-white">
                      <option>S</option><option>M</option><option>L</option><option>XL</option><option>ONE SIZE</option>
                    </select>
                    <input type="number" value={currStock} onChange={e => setCurrStock(e.target.value)} placeholder="Stock" className="bg-zinc-950 border border-zinc-900 p-3 text-xs text-white" />
                  </div>
                  <button type="button" onClick={addVariant} className="w-full py-2 bg-zinc-900 border border-zinc-800 text-zinc-300 text-[10px] font-bold tracking-widest uppercase hover:bg-white hover:text-black hover:border-transparent transition-colors">
                    + ADD VARIANT
                  </button>
                  <div className="flex flex-wrap gap-2 mt-4">
                    {variants.map((v, i) => (
                      <span key={i} className="bg-zinc-950 border border-zinc-800 px-3 py-1.5 text-[9px] font-mono text-zinc-300 uppercase tracking-wide">
                        {v.color} / {v.size} / QTY:{v.stock}
                      </span>
                    ))}
                  </div>
                </div>
                <button type="submit" className="w-full py-4 bg-white text-black font-sans font-black text-xs tracking-[0.3em] uppercase hover:bg-zinc-900 hover:text-white hover:border-zinc-800 border border-transparent transition-colors mt-6">
                  TRANSMIT MATERIAL PAYLOAD ➔
                </button>
                <AnimatePresence>
                  {statusMsg.text && (
                    <motion.div initial={{ opacity: 0, y: 4 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} className={`p-4 border text-[10px] font-bold tracking-wide uppercase ${statusMsg.type === "error" ? "bg-red-950 text-red-400 border-red-900" : statusMsg.type === "success" ? "bg-emerald-950 text-emerald-400 border-emerald-900" : "bg-zinc-900 text-zinc-400 border-zinc-800"}`}>
                      {statusMsg.text}
                    </motion.div>
                  )}
                </AnimatePresence>
              </form>
            </motion.div>
          )}
        </AnimatePresence>

        <div className={`mt-6 p-4 border text-[10px] font-mono tracking-wider uppercase ${statusMsg.type === "success" ? "bg-emerald-950 border-emerald-900 text-emerald-300" : statusMsg.type === "error" ? "bg-red-950 border-red-900 text-red-300" : "bg-zinc-900 border-zinc-800 text-zinc-400"}`}>
          {statusMsg.text || "[ SYSTEM IDLE // AWAITING OPERATOR INPUT ]"}
        </div>
      </div>
    </main>
  );
}