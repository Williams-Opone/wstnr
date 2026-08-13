"use client";

import { useState, useRef, useEffect, Suspense } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { motion, useMotionValue, useSpring } from "framer-motion";
import Image from "next/image";
import CustomCursor from "@/components/CustomCursor";
import { useCart } from "@/context/CartContext";
import { getProductById } from "@/app/actions/products";
import SimilarProducts from "@/components/SimilarProducts";

interface ProductDetails {
  id: string;
  serial: string;
  name: string;
  price: number;
  composition: string;
  details: string;
  measurements: string;
  images: string[];
  colors: string[];
  sizes: string[];
  skus: { id: string; color: string; size: string; stock: number }[];
  category?: string;
}

function InspectContent() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const buttonRef = useRef<HTMLButtonElement>(null);
  const [product, setProduct] = useState<ProductDetails | null>(null);
  const [loading, setLoading] = useState(true);
  const [selectedSize, setSelectedSize] = useState<string | null>(null);
  const [selectedColor, setSelectedColor] = useState<string | null>(null);
  const [isIngesting, setIsIngesting] = useState(false);
  const [feedbackError, setFeedbackError] = useState(false);
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const { addToCart } = useCart();
  const productId = searchParams?.get("id");

  useEffect(() => {
    async function loadDetails() {
      if (!productId) return;
      setLoading(true);
      const data = await getProductById(productId);
      setProduct(data as ProductDetails);
      setLoading(false);
    }
    loadDetails();
  }, [productId]);

  // Find the selected SKU based on color + size
  const findSkuId = () => {
    if (!product || !selectedColor || !selectedSize) return null;
    const sku = product.skus.find(
      (s) => s.color === selectedColor && s.size === selectedSize
    );
    return sku ? sku.id : null;
  };

  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 150, damping: 15 });
  const springY = useSpring(y, { stiffness: 150, damping: 15 });

  const handleMagneticMove = (e: React.MouseEvent) => {
    if (!buttonRef.current) return;
    const { clientX, clientY } = e;
    const { left, top, width, height } = buttonRef.current.getBoundingClientRect();
    const cx = left + width / 2;
    const cy = top + height / 2;
    x.set((clientX - cx) * 0.3);
    y.set((clientY - cy) * 0.3);
  };
  const handleMagneticLeave = () => { x.set(0); y.set(0); };

  if (loading) {
    return <div className="w-full py-40 text-center font-mono text-xs text-zinc-650 uppercase tracking-widest">[ RETRIEVING ATELIER BLUEPRINT FROM CLOUD NODE... ]</div>;
  }
  if (!product) {
    return <div className="w-full py-40 text-center font-mono text-xs text-red-500 uppercase tracking-widest border border-dashed border-red-950">[ ERROR: FILE INDEX UNRESOLVED IN REGISTER ]</div>;
  }

  return (
    <div className="max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start">
        {/* DESKTOP LEFT / MOBILE ORDER 3: Description + Details */}
        <div className="lg:col-span-5 lg:sticky lg:top-32 flex flex-col gap-6 md:gap-8 font-mono select-none order-3 lg:order-1">
          <div className="flex flex-col gap-2 border-b border-zinc-900 pb-6">
            <span className="text-[10px] text-zinc-600 font-bold tracking-widest uppercase">[ RECORD // {product.serial || "N/A"} ]</span>
            <h1 className="text-2xl md:text-3xl font-black font-sans tracking-tight text-zinc-100 uppercase leading-tight">{product.name}</h1>
            <span className="text-xl font-bold tracking-tight text-zinc-300 mt-2">${product.price}.00</span>
          </div>

          <div className="flex flex-col gap-3 text-[11px] leading-relaxed text-zinc-400">
            <div>
              <span className="text-zinc-600 block font-bold mb-0.5">[ MATERIAL_COMPOSITION ]</span>
              <p className="font-light">{product.composition}</p>
            </div>
            <div className="mt-2">
              <span className="text-zinc-600 block font-bold mb-0.5">[ ARCHITECTURAL_DESIGN ]</span>
              <p className="font-light text-zinc-500">{product.details}</p>
            </div>
          </div>

          {product.colors && product.colors.length > 0 && (
            <div className="flex flex-col gap-3 border-t border-zinc-900 pt-6">
              <span className="text-[10px] text-zinc-500 uppercase">[ SELECT COLOR TEXTURE ]</span>
              <div className="flex flex-wrap gap-2">
                {product.colors.map((color) => (
                  <button
                    key={color}
                    onClick={() => { setSelectedColor(color); setFeedbackError(false); }}
                    className={`px-4 py-2.5 border text-[10px] font-bold tracking-wider transition-all cursor-none uppercase min-h-[44px] ${selectedColor === color ? "bg-white text-black border-white" : "bg-transparent text-zinc-400 border-zinc-900 hover:border-zinc-500"}`}
                  >
                    {color}
                  </button>
                ))}
              </div>
            </div>
          )}

          <div className="flex flex-col gap-4 border-b border-zinc-900 pb-6">
            <div className="flex justify-between text-[10px] text-zinc-500">
              <span>SELECT SIZE MATRIX</span>
              {product.measurements && (
                <span className="text-zinc-600 underline cursor-none" onClick={() => alert(product.measurements)}>VIEW MEASUREMENT INDEX</span>
              )}
            </div>
            <div className="flex gap-3">
              {product.sizes && product.sizes.map((size) => (
                <button
                  key={size}
                  onClick={() => { setSelectedSize(size); setFeedbackError(false); }}
                  className={`w-12 h-12 border font-bold text-xs flex items-center justify-center transition-all cursor-none min-w-[44px] min-h-[44px] ${selectedSize === size ? "bg-white text-black border-white" : "bg-transparent text-zinc-400 border-zinc-900 hover:border-zinc-500"}`}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          <motion.div onMouseMove={handleMagneticMove} onMouseLeave={handleMagneticLeave} className="w-full relative py-2">
            <motion.button
              ref={buttonRef}
              style={{ x: springX, y: springY }}
              disabled={isIngesting && !feedbackError}
              onClick={() => {
                // Validation
                if ((product.colors && product.colors.length > 0 && !selectedColor) || !selectedSize) {
                  setFeedbackError(true); setIsIngesting(true);
                  setTimeout(() => { setIsIngesting(false); setFeedbackError(false); }, 2000);
                  return;
                }
                const skuId = findSkuId();
                if (!skuId) {
                  setFeedbackError(true); setIsIngesting(true);
                  setTimeout(() => { setIsIngesting(false); setFeedbackError(false); }, 2000);
                  return;
                }
                setIsIngesting(true); setFeedbackError(false);
                addToCart({
                  id: product.id,
                  skuId,
                  name: selectedColor ? `${product.name} (${selectedColor})` : product.name,
                  price: product.price,
                  image: product.images?.[0] || "",
                  size: selectedSize || "ONE SIZE",
                });
                setTimeout(() => setIsIngesting(false), 2000);
              }}
              className={`w-full py-4 font-sans text-xs font-black tracking-widest uppercase border transition-colors duration-200 shadow-2xl cursor-none min-h-[52px] ${feedbackError ? "bg-red-950 text-red-400 border-red-900" : isIngesting ? "bg-zinc-900 text-zinc-400 border-zinc-800" : "bg-white text-black border-transparent hover:bg-zinc-900 hover:text-white hover:border-zinc-800"}`}
            >
              {feedbackError ? (!selectedColor && product.colors && product.colors.length > 0 ? "SELECT COLOR MATRIX OPTION" : "CHOOSE SIZE MATRIX PARAMETER") : isIngesting ? "[ INVENTORY INGESTED ]" : "ADD INVENTORY TO BAG ➔"}
            </motion.button>
          </motion.div>

          <div className="text-[9px] text-zinc-600 tracking-wider leading-relaxed mt-4 border-t border-zinc-900/60 pt-4">
            [ COMPLIANCE_NOTICE ] // EVERY EXTRACTION IS RECORDED INFLEXIBLY.
          </div>
        </div>

        {/* DESKTOP RIGHT / MOBILE ORDER 1: Image + Thumbnails */}
        <div className="lg:col-span-7 flex flex-col gap-8 md:gap-12 relative order-1 lg:order-2">
          <div className="w-full bg-[#949492] border border-zinc-900 aspect-[4/5] p-6 md:p-12 flex items-center justify-center relative overflow-hidden group">
            {product.images?.[activeImageIndex] ? (
              <Image
                src={product.images[activeImageIndex]}
                alt={product.name}
                width={600}
                height={750}
                unoptimized
                className="w-full h-full object-contain mix-blend-multiply transition-transform duration-700 ease-out group-hover:scale-102"
                priority={activeImageIndex === 0}
              />
            ) : (
              <div className="text-zinc-600 font-mono text-xs">[ NO PRIMARY IMAGE ]</div>
            )}
          </div>

          {product.images && product.images.length > 1 && (
            <div className="flex gap-3 md:gap-4 overflow-x-auto pb-2">
              {product.images.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveImageIndex(idx)}
                  className={`relative w-16 h-20 md:w-20 md:h-24 flex-shrink-0 border overflow-hidden transition-all min-w-[64px] min-h-[80px] md:min-w-[80px] md:min-h-[96px] ${activeImageIndex === idx ? "border-white" : "border-zinc-900 hover:border-zinc-600"}`}
                >
                  <Image
                    src={img}
                    alt={`${product.name} view ${idx + 1}`}
                    width={80}
                    height={96}
                    unoptimized
                    className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all"
                  />
                </button>
              ))}
            </div>
          )}
        </div>

        {/* ORDER 4: Similar Products */}
        <div className="order-4 lg:col-span-12 mt-16 md:mt-24 pt-10 md:pt-14 border-t border-zinc-900">
          <div className="font-mono text-[10px] text-zinc-500 tracking-widest uppercase mb-6 md:mb-8">[ RELATED ARCHIVE EXTRACTIONS ]</div>
          <Suspense fallback={<div className="font-mono text-xs text-zinc-600 uppercase tracking-widest">[ RESOLVING SIMILAR SPECIFICATIONS... ]</div>}>
            <SimilarProducts currentProductId={product.id} category={product.category || ""} />
          </Suspense>
        </div>
      </div>
    </div>
  );
}

export default function InspectPage() {
  const router = useRouter();
  return (
    <main className="bg-black text-white min-h-screen pt-32 pb-24 px-4 md:px-12 relative overflow-x-hidden">
      <CustomCursor />
      <div className="max-w-7xl mx-auto flex items-center gap-2 font-mono text-[10px] text-zinc-500 mb-12 uppercase select-none">
        <span className="hover:text-white cursor-none" onClick={() => router.push("/")}>INDEX</span>
        <span>//</span>
        <span className="hover:text-white cursor-none" onClick={() => router.push("/shop")}>COLLECTIONS</span>
        <span>//</span>
        <span className="text-zinc-300">[ INSPECTION_NODE ]</span>
      </div>
      <Suspense fallback={<div className="font-mono text-xs text-zinc-650 text-center py-40">[ RESOLVING SPECIFICATIONS... ]</div>}>
        <InspectContent />
      </Suspense>
    </main>
  );
}