"use client";
import { useRouter, useSearchParams } from "next/navigation";
import { useState, useEffect } from "react";

export default function PriceFilter({ initialMaxPrice = 180 }: { initialMaxPrice?: number }) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [maxPrice, setMaxPrice] = useState(initialMaxPrice);

  // Sync state with URL params to keep UI consistent
  useEffect(() => {
    const urlPrice = searchParams?.get("maxPrice");
    if (urlPrice) setMaxPrice(Number(urlPrice));
  }, [searchParams]);

  const handleSliderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    setMaxPrice(Number(val));
    
    // Push the filter parameters smoothly to the server URL
    const params = new URLSearchParams(searchParams?.toString() || "");
    params.set("maxPrice", val);
    router.replace(`/shop?${params.toString()}`, { scroll: false });
  };

  return (
    <div className="w-full sm:w-72 flex flex-col gap-2 relative font-mono text-xs">
      <div className="flex justify-between font-mono text-[10px] text-zinc-500">
        <span>MIN // $30</span>
        <span className="text-white font-bold">THRESHOLD: ${maxPrice}.00</span>
      </div>
      <div className="relative w-full h-6 flex items-center">
        <input 
          type="range"
          min="30"
          max="180"
          step="1"
          value={maxPrice}
          onChange={handleSliderChange}
          className="w-full h-1 bg-zinc-800 appearance-none outline-none cursor-none accent-white"
          style={{ WebkitAppearance: "none" }}
        />
        <div 
          className="absolute left-0 top-[11px] h-0.5 bg-white pointer-events-none"
          style={{ width: `${((maxPrice - 30) / 150) * 100}%` }}
        />
      </div>
    </div>
  );
}