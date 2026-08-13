"use client";
import { motion } from "framer-motion";
import { useCart } from "@/context/CartContext";
import { useRouter } from "next/navigation";

export default function CartDrawer() {
  const { cart, isCartOpen, setCartOpen, removeFromCart, cartTotal } = useCart();
  const router = useRouter();

  return (
    <div className="font-mono text-white text-[11px]">
      {isCartOpen && (
        <div 
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[99998] cursor-none"
          onClick={() => setCartOpen(false)}
        />
      )}

      <motion.div
        initial={{ x: "100%" }}
        animate={{ x: isCartOpen ? 0 : "100%" }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
        className="fixed top-0 right-0 h-screen w-full sm:w-[440px] bg-zinc-950 border-l border-zinc-900 z-[99999] flex flex-col justify-between shadow-2xl p-6 select-none"
      >
        <div className="flex justify-between items-center border-b border-zinc-900 pb-4">
          <span className="text-zinc-500 tracking-widest uppercase">[ BAG_INVENTORY // {cart.length} ITEMS ]</span>
          <button 
            onClick={() => setCartOpen(false)}
            className="text-zinc-400 hover:text-white transition-colors uppercase bg-transparent border-none tracking-widest cursor-none text-[10px]"
          >
            [ CLOSE_X ]
          </button>
        </div>

        <div className="flex-1 overflow-y-auto my-6 pr-2 flex flex-col gap-4 divide-y divide-zinc-900/40">
          {cart.length === 0 ? (
            <div className="text-zinc-600 text-center py-20 uppercase tracking-widest">
              [ BAG MATRIX VACANT ]
            </div>
          ) : (
            cart.map((item) => (
              <div key={`${item.id}-${item.size}`} className="flex items-center gap-4 pt-4 first:pt-0 group">
                <div className="w-16 h-20 bg-zinc-900 border border-zinc-850 flex items-center justify-center shrink-0">
                  <img src={item.image} alt="" className="w-auto h-full object-contain mix-blend-screen grayscale p-1" />
                </div>
                <div className="flex-1 flex flex-col gap-1">
                  <span className="text-zinc-200 uppercase font-black">{item.name}</span>
                  <span className="text-zinc-500 text-[10px] uppercase">SIZE: {item.size} // QTY: {item.quantity}</span>
                  <span className="text-zinc-400 font-bold mt-1">${item.price * item.quantity}</span>
                </div>
                <button
                  onClick={() => removeFromCart(item.id, item.size)}
                  className="text-zinc-600 hover:text-red-500 text-[10px] uppercase transition-colors pr-2 cursor-none font-bold"
                >
                  [ VOID ]
                </button>
              </div>
            ))
          )}
        </div>

        <div className="border-t border-zinc-900 pt-6 flex flex-col gap-4">
          <div className="flex justify-between items-baseline">
            <span className="text-zinc-500 uppercase tracking-widest">[ ESTIMATED_METRIC_TOTAL ]</span>
            <span className="text-xl font-bold tracking-tight text-white">${cartTotal}.00</span>
          </div>
          <p className="text-[10px] text-zinc-600 leading-relaxed uppercase">
            Extractions processed via industrial compliance layers. All currency final.
          </p>
          <button 
            disabled={cart.length === 0}
            onClick={() => {
              setCartOpen(false);
              router.push("/checkout");
            }}
            className="w-full py-4 mt-2 bg-white text-black font-sans text-xs font-black tracking-widest uppercase border border-transparent hover:bg-zinc-900 hover:text-white hover:border-zinc-800 disabled:bg-zinc-900 disabled:text-zinc-700 disabled:border-transparent transition-all cursor-none"
          >
            PROCEED TO CHECKOUT LAYER ➔
          </button>
        </div>
      </motion.div>
    </div>
  );
}