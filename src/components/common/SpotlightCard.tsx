"use client";

import React, { useRef, useState, MouseEvent } from "react";

interface SpotlightCardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
  tiltAmount?: number;
}

export function SpotlightCard({
  children,
  className = "",
  ...props
}: SpotlightCardProps) {
  const cardRef = useRef<HTMLDivElement | null>(null);
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    // Update CSS variables for fluid mouse-following specular spotlight
    cardRef.current.style.setProperty("--mouse-x", `${x}px`);
    cardRef.current.style.setProperty("--mouse-y", `${y}px`);
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{
        transform: isHovered ? "translateY(-4px)" : "translateY(0px)",
        transition: "transform 0.3s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.3s ease, border-color 0.3s ease",
      }}
      className={`spotlight-card relative overflow-hidden transition-all duration-300 rounded-[28px] border border-slate-200/90 dark:border-slate-800 bg-white dark:bg-[#0a101f] shadow-sm hover:shadow-xl hover:shadow-blue-900/10 dark:hover:shadow-black/50 ${
        isHovered ? "border-[#1d4ed8]/50" : ""
      } ${className}`}
      {...props}
    >
      {/* Top Edge Specular Glint catching light */}
      <div 
        className={`pointer-events-none absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#1d4ed8]/80 to-[#10b981]/80 transition-opacity duration-300 ${
          isHovered ? "opacity-100" : "opacity-0"
        }`} 
      />

      {/* Internal Radial Glow tracking cursor (Light & Dark calibrated) */}
      <div
        className={`pointer-events-none absolute -inset-px rounded-[inherit] transition-opacity duration-300 ${
          isHovered ? "opacity-100" : "opacity-0"
        }`}
        style={{
          background: `radial-gradient(420px circle at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(29, 78, 216, 0.12), transparent 60%)`,
        }}
      />

      {/* Specular Edge Ring tracking cursor */}
      <div
        className={`pointer-events-none absolute -inset-px rounded-[inherit] transition-opacity duration-300 ${
          isHovered ? "opacity-100" : "opacity-0"
        }`}
        style={{
          background: `radial-gradient(260px circle at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(16, 185, 129, 0.16), transparent 50%)`,
        }}
      />

      {children}
    </div>
  );
}
