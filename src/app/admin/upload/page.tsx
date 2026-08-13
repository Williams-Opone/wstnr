// app/admin/upload/page.tsx
"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function UploadPage() {
  const router = useRouter();
  const [uploading, setUploading] = useState(false);
  const [uploadedUrls, setUploadedUrls] = useState<string[]>([]);
  const [productId, setProductId] = useState("");
  const [imagesArray, setImagesArray] = useState<string[]>([]);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileSelect = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files) return;

    setUploading(true);
    const urls: string[] = [];

    for (const file of Array.from(files)) {
      const formData = new FormData();
      formData.append("file", file);

      try {
        const res = await fetch("/api/upload", {
          method: "POST",
          body: formData,
        });
        const data = await res.json();
        if (data.success) {
          urls.push(data.url);
          console.log("✅ Uploaded:", data.url);
        }
      } catch (error) {
        console.error("Upload failed:", error);
      }
    }

    setUploadedUrls(urls);
    setUploading(false);
  };

  const saveToProduct = async () => {
    if (!productId || uploadedUrls.length === 0) {
      alert("Please enter a Product ID and upload at least one image");
      return;
    }

    try {
      const allImages = [...imagesArray, ...uploadedUrls];
      
      const res = await fetch(`/api/products/${productId}/images`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ images: allImages }),
      });

      if (res.ok) {
        alert("✅ Images saved to product!");
        setImagesArray(allImages);
        setUploadedUrls([]);
        if (fileInputRef.current) fileInputRef.current.value = "";
      } else {
        alert("❌ Failed to save images");
      }
    } catch (error) {
      console.error("Save failed:", error);
      alert("❌ Error saving images");
    }
  };

  const removeImage = (index: number) => {
    setImagesArray((prev) => prev.filter((_, i) => i !== index));
  };

  return (
    <div className="min-h-screen bg-black text-white p-8">
      {/* Header */}
      <div className="flex items-center gap-4 mb-8">
        <button
          onClick={() => router.push("/")}
          className="text-zinc-500 hover:text-white text-sm font-mono"
        >
          ← BACK TO HOME
        </button>
        <h1 className="text-2xl font-black tracking-tight">PRODUCT IMAGE UPLOAD</h1>
      </div>

      {/* Product ID Input */}
      <div className="mb-6 max-w-2xl">
        <label className="block text-xs text-zinc-500 mb-2 font-mono uppercase tracking-wider">
          [ PRODUCT ID ]
        </label>
        <input
          type="text"
          value={productId}
          onChange={(e) => setProductId(e.target.value)}
          placeholder="e.g., p1, p2, clxabc123..."
          className="w-full px-4 py-3 bg-zinc-900 border border-zinc-800 text-white font-mono text-sm focus:border-zinc-600 focus:outline-none"
        />
        <p className="text-zinc-600 text-xs mt-2">
          Find the Product ID in your Neon database or Prisma Studio
        </p>
      </div>

      {/* File Upload */}
      <div className="mb-6 max-w-2xl">
        <label className="block text-xs text-zinc-500 mb-2 font-mono uppercase tracking-wider">
          [ SELECT IMAGES ]
        </label>
        <input
          ref={fileInputRef}
          type="file"
          multiple
          accept="image/*"
          onChange={handleFileSelect}
          disabled={uploading}
          className="block w-full text-sm text-zinc-400
            file:mr-4 file:py-3 file:px-6
            file:rounded file:border-0
            file:text-xs file:font-bold file:font-mono
            file:bg-white file:text-black
            file:tracking-widest
            hover:file:bg-zinc-200
            disabled:opacity-50 disabled:cursor-not-allowed"
        />
      </div>

      {/* Upload Progress */}
      {uploading && (
        <div className="mb-6 max-w-2xl">
          <div className="flex items-center gap-3 text-zinc-400 font-mono text-sm">
            <div className="animate-spin w-4 h-4 border border-zinc-600 border-t-white rounded-full"></div>
            UPLOADING TO CLOUDINARY...
          </div>
        </div>
      )}

      {/* Currently Uploaded (in this session) */}
      {uploadedUrls.length > 0 && (
        <div className="mb-8 max-w-2xl">
          <p className="text-xs text-green-400 mb-3 font-mono uppercase tracking-wider">
            [ NEWLY UPLOADED - {uploadedUrls.length} IMAGE(S) ]
          </p>
          <div className="grid grid-cols-4 gap-4 mb-4">
            {uploadedUrls.map((url, idx) => (
              <div key={idx} className="relative aspect-square border border-zinc-800 overflow-hidden">
                <Image
                  src={url}
                  alt={`Upload ${idx + 1}`}
                  fill
                  className="object-cover"
                />
              </div>
            ))}
          </div>
          <button
            onClick={saveToProduct}
            disabled={!productId}
            className="px-6 py-3 bg-white text-black font-bold font-mono text-xs tracking-widest uppercase disabled:opacity-50 disabled:cursor-not-allowed hover:bg-zinc-200 transition-colors"
          >
            SAVE TO PRODUCT {productId ? `(${productId})` : ""}
          </button>
        </div>
      )}

      {/* Already Saved Images */}
      {imagesArray.length > 0 && (
        <div className="max-w-2xl">
          <p className="text-xs text-zinc-500 mb-3 font-mono uppercase tracking-wider">
            [ SAVED IMAGES - {imagesArray.length} IMAGE(S) ]
          </p>
          <div className="grid grid-cols-4 gap-4">
            {imagesArray.map((url, idx) => (
              <div key={idx} className="relative group">
                <div className="relative aspect-square border border-zinc-800 overflow-hidden">
                  <Image
                    src={url}
                    alt={`Saved ${idx + 1}`}
                    fill
                    className="object-cover"
                  />
                </div>
                <button
                  onClick={() => removeImage(idx)}
                  className="absolute top-1 right-1 w-6 h-6 bg-red-900 text-red-300 text-xs font-bold opacity-0 group-hover:opacity-100 transition-opacity"
                >
                  ✕
                </button>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Instructions */}
      <div className="mt-12 max-w-2xl border-t border-zinc-900 pt-8">
        <p className="text-zinc-600 text-xs font-mono leading-relaxed">
          [ INSTRUCTIONS ]<br />
          1. Enter the Product ID from your database<br />
          2. Select one or more images to upload<br />
          3. Wait for upload to complete<br />
          4. Click "SAVE TO PRODUCT" to store URLs<br />
          5. Visit /inspect?id={productId || "[ID]"} to preview
        </p>
      </div>
    </div>
  );
}           