"use client";

import { useState, useEffect, useRef } from "react";
import { useCart } from "@/context/CartContext";
import CustomCursor from "@/components/CustomCursor";
import { finalizeCheckout } from "@/app/actions/checkout";

declare global {
  interface Window {
    PaystackPop?: any;
  }
}

export default function CheckoutPage() {
  const { cart, cartTotal, clearCart } = useCart();
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [processing, setProcessing] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState<"stripe" | "paystack">("stripe");
  const [paystackReady, setPaystackReady] = useState(false);

  // Load Paystack SDK
  useEffect(() => {
    if (typeof window === "undefined") return;
    if (window.PaystackPop) {
      setPaystackReady(true);
      return;
    }

    const script = document.createElement("script");
    script.src = "https://js.paystack.co/v1/inline.js";
    script.async = true;
    script.onload = () => {
      console.log("Paystack SDK loaded successfully");
      setPaystackReady(true);
    };
    script.onerror = () => {
      console.error("Failed to load Paystack SDK");
    };
    document.body.appendChild(script);
  }, []);

  const switchPaymentMethod = (method: "stripe" | "paystack") => {
    setPaymentMethod(method);
    setProcessing(false);
  };

  const handleCheckoutSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!email || !name || !phone || !address) {
      alert("Please fill in all shipping fields.");
      return;
    }
    if (cart.length === 0) {
      alert("Your cart is empty.");
      return;
    }

    setProcessing(true);

    if (paymentMethod === "stripe") {
      // STRIPE LOGIC (unchanged)
      try {
        const res = await fetch("/api/stripe-checkout", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            cartItems: cart.map((item) => ({
              skuId: item.skuId,
              name: item.name,
              price: item.price,
              size: item.size,
              quantity: item.quantity,
              image: item.image,
            })),
            customerEmail: email,
            customerName: name,
            customerPhone: phone,
            shippingAddress: address,
          }),
        });
        const data = await res.json();
        if (data.url) {
          window.location.href = data.url;
        } else {
          alert("Stripe error: " + data.error);
          setProcessing(false);
        }
      } catch (err: any) {
        alert("Stripe request failed: " + err.message);
        setProcessing(false);
      }
    } else {
      // PAYSTACK LOGIC
      console.log("Paystack payment attempt", { paystackReady, hasPaystack: !!window.PaystackPop });

      if (!paystackReady || !window.PaystackPop) {
        alert("Paystack is still loading. Please wait and try again.");
        setProcessing(false);
        return;
      }

      const amountInNGN = Math.round(cartTotal * 100 * 500);
      const ref = `WST-${Date.now()}`;

      // Validate critical variables
      const publicKey = process.env.NEXT_PUBLIC_PAYSTACK_PUBLIC_KEY || "pk_test_97a8fb23ebb4dd32be6729f8391efa9fe62c0872";
      console.log("Paystack config →", { publicKey, amountInNGN, ref, email });

      // Define callback as a named function (not async directly)
      function handlePaystackCallback(response: any) {
        console.log("Paystack callback received", response);
        // Immediately set processing? It's already true from submit
        (async () => {
          try {
            const result = await finalizeCheckout({
              customerName: name,
              customerEmail: email,
              customerPhone: phone,
              shippingAddress: address,
              cartItems: cart.map((item) => ({
                skuId: item.skuId,
                name: item.name,
                price: item.price,
                size: item.size,
                quantity: item.quantity,
                image: item.image || "",
              })),
              totalAmount: cartTotal,
              paymentReference: response.reference,
              provider: "paystack",
            });

            if (result.ok) {
              clearCart();
              alert("Payment verified! Order confirmed. Ref: " + result.reference);
              window.location.href = "/checkout/success";
            } else {
              alert("Order failed: " + result.error);
              setProcessing(false);
            }
          } catch (err: any) {
            console.error("finalizeCheckout error", err);
            alert("Checkout error: " + err.message);
            setProcessing(false);
          }
        })();
      }

      function handlePaystackClose() {
        console.log("Paystack popup closed by user");
        setProcessing(false);
        alert("Transaction cancelled.");
      }

      try {
        const handler = window.PaystackPop.setup({
          key: publicKey,
          email: email,
          amount: amountInNGN,
          currency: "NGN",
          ref: ref,
          callback: handlePaystackCallback,   // named function
          onClose: handlePaystackClose,       // named function
          metadata: {
            custom_fields: [
              { display_name: "Customer Name", variable_name: "customer_name", value: name },
              { display_name: "Shipping Address", variable_name: "shipping_address", value: address },
              {
                display_name: "Cart Manifest",
                variable_name: "cart_manifest",
                value: cart.map((i) => `${i.name} (${i.size}) x${i.quantity}`).join(", "),
              },
            ],
          },
        });

        handler.openIframe();
        console.log("Paystack popup opened");
      } catch (err: any) {
        console.error("Paystack setup error", err);
        alert("Failed to initialize Paystack: " + err.message);
        setProcessing(false);
      }
    }
  };

  return (
    <main className="bg-black text-white min-h-screen pt-32 pb-24 px-4 md:px-12 font-mono relative overflow-x-hidden select-none">
      <CustomCursor />
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
        <form onSubmit={handleCheckoutSubmit} className="lg:col-span-7 flex flex-col gap-6">
          {/* Payment method selector */}
          <div className="flex gap-2">
            <button
              type="button"
              onClick={() => switchPaymentMethod("stripe")}
              className={`px-4 py-2 border text-xs ${paymentMethod === "stripe" ? "bg-white text-black" : "border-zinc-800 text-zinc-400"}`}
            >
              STRIPE (CARD)
            </button>
            <button
              type="button"
              onClick={() => switchPaymentMethod("paystack")}
              className={`px-4 py-2 border text-xs ${paymentMethod === "paystack" ? "bg-white text-black" : "border-zinc-800 text-zinc-400"}`}
            >
              PAYSTACK (NGN)
            </button>
          </div>

          <div className="border-b border-zinc-900 pb-4 mb-2">
            <span className="text-zinc-500 text-[10px] tracking-widest uppercase">
              [ STAGE_01 // DISPATCH SHIELD ADDRESS ]
            </span>
            <h1 className="text-xl font-black text-zinc-100 uppercase tracking-tight mt-1">
              SHIPPING MANIFEST
            </h1>
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-[10px] text-zinc-500 uppercase">FULL NAME</label>
            <input
              type="text"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full bg-zinc-950 border border-zinc-900 px-4 py-3 text-zinc-200 focus:border-zinc-700 outline-none transition-colors text-xs"
              placeholder="Your Name"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-[10px] text-zinc-500 uppercase">EMAIL ADDRESS</label>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full bg-zinc-950 border border-zinc-900 px-4 py-3 text-zinc-200 focus:border-zinc-700 outline-none transition-colors text-xs"
              placeholder="you@example.com"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-[10px] text-zinc-500 uppercase">PHONE NUMBER</label>
            <input
              type="tel"
              required
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="w-full bg-zinc-950 border border-zinc-900 px-4 py-3 text-zinc-200 focus:border-zinc-700 outline-none transition-colors text-xs"
              placeholder="+234..."
            />
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-[10px] text-zinc-500 uppercase">SHIPPING ADDRESS</label>
            <textarea
              rows={3}
              required
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              className="w-full bg-zinc-950 border border-zinc-900 p-4 text-zinc-200 focus:border-zinc-700 outline-none transition-colors text-xs resize-none"
              placeholder="Street, City, Country"
            />
          </div>

          <button
            type="submit"
            disabled={processing}
            className={`w-full py-4 mt-4 font-sans text-xs font-black tracking-widest uppercase border border-transparent transition-all shadow-2xl ${
              processing
                ? "bg-zinc-800 text-zinc-500 cursor-not-allowed"
                : "bg-white text-black hover:bg-zinc-900 hover:text-white hover:border-zinc-800"
            }`}
          >
            {processing
              ? "PROCESSING..."
              : paymentMethod === "stripe"
              ? "PAY WITH STRIPE ➔"
              : "PAY WITH PAYSTACK ➔"}
          </button>
        </form>

        <div className="lg:col-span-5 lg:sticky lg:top-32 bg-zinc-950 border border-zinc-900 p-6 flex flex-col gap-6">
          <div className="border-b border-zinc-900 pb-4">
            <span className="text-zinc-500 text-[10px] tracking-widest uppercase">
              [ METRIC_SUMMARY // REVIEW ]
            </span>
            <h2 className="text-sm font-black text-zinc-300 uppercase tracking-wider mt-1">
              BAG MANIFEST ARCHIVE
            </h2>
          </div>

          <div className="flex flex-col gap-4 max-h-[260px] overflow-y-auto pr-2 divide-y divide-zinc-900/40">
            {cart.length === 0 ? (
              <div className="text-zinc-600 py-6 uppercase text-[10px] tracking-widest text-center">
                [ EXTRACTION MANIFEST EMPTY ]
              </div>
            ) : (
              cart.map((item) => (
                <div
                  key={`${item.id}-${item.size}`}
                  className="flex items-center gap-4 pt-4 first:pt-0"
                >
                  <div className="w-12 h-14 bg-zinc-900 border border-zinc-850 flex items-center justify-center shrink-0">
                    <img
                      src={item.image}
                      alt=""
                      className="w-auto h-full object-contain mix-blend-screen grayscale p-1"
                    />
                  </div>
                  <div className="flex-1 flex flex-col gap-0.5">
                    <span className="text-zinc-300 uppercase font-bold text-[10px] tracking-wide">
                      {item.name}
                    </span>
                    <span className="text-zinc-650 text-[9px] uppercase">
                      SIZE: {item.size} // QTY: {item.quantity}
                    </span>
                  </div>
                  <span className="text-zinc-400 font-bold">
                    ${item.price * item.quantity}
                  </span>
                </div>
              ))
            )}
          </div>

          <div className="border-t border-zinc-900 pt-4 flex flex-col gap-2">
            <div className="flex justify-between items-baseline text-[10px] text-zinc-500">
              <span>BASE ORDER METRIC</span>
              <span className="text-zinc-400">${cartTotal}.00</span>
            </div>
            <div className="flex justify-between items-baseline text-[10px] text-zinc-500">
              <span>DISPATCH HANDLING EXTRACTION</span>
              <span className="text-zinc-400">FREE</span>
            </div>
            <div className="flex justify-between items-baseline border-t border-zinc-900 pt-4 mt-2">
              <span className="text-zinc-400 tracking-wider font-bold">
                [ AGGREGATE EXTRACTION TOTAL ]
              </span>
              <span className="text-lg font-black text-white">
                ${cartTotal}.00
              </span>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}