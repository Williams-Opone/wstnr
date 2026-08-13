import "@/app/globals.css";
import { CartProvider } from "@/context/CartContext";
import Navbar from "@/components/Navbar";
import CartDrawer from "@/components/CartDrawer";
import Script from "next/script";
import CustomCursor from "@/components/CustomCursor";
import AnalyticsTracker from "@/components/AnalyticsTracker";
import BrandLoader from "@/components/BrandLoader";
import GlobalLoader from "@/components/GlobalLoader";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="bg-black text-white antialiased">
      <body className="min-h-screen relative overflow-x-hidden">
        <AnalyticsTracker />
        <BrandLoader />
        <GlobalLoader />
        <Script
          src="https://js.paystack.co/v1/inline.js"
          strategy="lazyOnload"
        />
        <CustomCursor />
        <CartProvider>
          <Navbar />
          <CartDrawer />
          {children}
        </CartProvider>
      </body>
    </html>
  );
}