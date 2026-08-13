import { Suspense } from "react";
import Hero from "@/components/Hero";
import FeaturedDrop from "@/components/FeaturedDrop";
import AsymmetricGrid from "@/components/AsymmetricGrid";
import AsymmetricGridSkeleton from "@/components/AsymmetricGridSkeleton";
import BrandStatement from "@/components/BrandStatement";
import LookbookStatement from "@/components/LookbookStatement";
import LookbookSection from "@/components/LookbookSection";
import CommunityFooter from "@/components/CommunityFooter";
import CommunityFooterSection from "@/components/CommunityFooterSection";
import { getLatestFeaturedProduct, getHomepageGridProducts } from "@/app/actions/homepage";

interface BaseProduct {
  id: string;
  serial: string;
  name: string;
  price: number;
  category: string;
  composition: string;
  images: string[];
}

async function FeaturedSection() {
  const featuredProduct = await getLatestFeaturedProduct();
  if (!featuredProduct) return null;
  return <FeaturedDrop product={featuredProduct as BaseProduct} />;
}

async function GridSection() {
  const gridProducts = await getHomepageGridProducts();
  if (!gridProducts.length) return null;
  return <AsymmetricGrid products={gridProducts as BaseProduct[]} />;
}

function FeaturedSkeleton() {
  return (
    <div className="w-full bg-black">
      <div className="w-full bg-zinc-900 border-y border-zinc-800 py-3" />
      <div className="py-16 md:py-24 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="min-h-[300px] md:min-h-[500px] bg-[#1a1a18] border border-zinc-900 animate-pulse flex items-center justify-center">
          <span className="font-mono text-[10px] md:text-xs tracking-widest text-zinc-600 uppercase">
            [ loading latest drop... ]
          </span>
        </div>
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <main className="relative min-h-screen bg-black overflow-x-hidden">
      <Hero />

      <Suspense fallback={<FeaturedSkeleton />}>
        <FeaturedSection />
      </Suspense>

      <Suspense fallback={<AsymmetricGridSkeleton />}>
        <GridSection />
      </Suspense>

      <BrandStatement />
      
      <LookbookSection />

      <CommunityFooterSection  />
    </main>
  );
}