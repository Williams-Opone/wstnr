// components/CloudImage.tsx
"use client";

import Image from "next/image";
import { useState } from "react";

interface CloudImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  priority?: boolean;
}

export default function CloudImage({
  src,
  alt,
  width = 800,
  height = 800,
  className = "",
  priority = false,
}: CloudImageProps) {
  const [isLoading, setLoading] = useState(true);
  const [hasError, setError] = useState(false);

  // If it's already a full URL (Unsplash, etc.), use it directly
  const isExternalUrl = src.startsWith("http");
  const imageUrl = isExternalUrl ? src : src; // For Cloudinary, you'd transform the URL

  if (hasError) {
    return (
      <div className={`flex items-center justify-center bg-zinc-900 ${className}`}>
        <span className="text-zinc-600 text-xs font-mono">IMAGE UNAVAILABLE</span>
      </div>
    );
  }

  return (
    <Image
      src={imageUrl}
      alt={alt}
      width={width}
      height={height}
      className={`${className} ${isLoading ? "blur-sm" : "blur-0"} transition-all duration-500`}
      onLoad={() => setLoading(false)}
      onError={() => setError(true)}
      priority={priority}
      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
    />
  );
}