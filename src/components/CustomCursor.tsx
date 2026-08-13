"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [isHovered, setIsHovered] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const handleHover = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.tagName === "A" ||
        target.tagName === "BUTTON" ||
        target.closest("a") ||
        target.closest("button") ||
        target.closest('[role="button"]') ||
        target.classList.contains("cursor-pointer")
      ) {
        setIsHovered(true);
      } else {
        setIsHovered(false);
      }
    };

    window.addEventListener("mousemove", moveCursor);
    window.addEventListener("mouseover", handleHover);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      window.removeEventListener("mouseover", handleHover);
    };
  }, [pathname]);

  return (
    <div
      className="hidden md:flex fixed rounded-full pointer-events-none mix-blend-difference items-center justify-center transition-transform duration-150 ease-out"
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
        width: "32px",
        height: "32px",
        border: "1px solid white",
        transform: `translate(-50%, -50%) scale(${isHovered ? 1.6 : 1})`,
        zIndex: 100000,
      }}
    >
      <div
        className="w-1 h-1 bg-white rounded-full pointer-events-none"
        style={{ zIndex: 100001 }}
      />
    </div>
  );
}