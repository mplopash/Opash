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
      className={`spotlight-card relative overflow-hidden transition-all duration-300 rounded-[28px] border border-slate-200/90 dark:border-slate-800 bg-white dark:bg-[#0a101f] shadow-sm hover:shadow-xl hover:shadow-[#476D9A]/10 dark:hover:shadow-black/50 ${
        isHovered ? "border-[#476D9A]/50" : ""
      } ${className}`}
      {...props}
    >
      {/* Top Ambient Specular Sheen (Curved, zero corner clipping) */}
      <div 
        className={`pointer-events-none absolute -top-8 left-1/2 -translate-x-1/2 w-44 h-16 bg-[radial-gradient(ellipse_at_center,rgba(97,190,153,0.25)_0%,transparent_70%)] rounded-full blur-md transition-opacity duration-300 ${
          isHovered ? "opacity-100" : "opacity-0"
        }`} 
      />

      {/* Internal Radial Glow tracking cursor (Light & Dark calibrated) */}
      <div
        className={`pointer-events-none absolute -inset-px rounded-[inherit] transition-opacity duration-300 ${
          isHovered ? "opacity-100" : "opacity-0"
        }`}
        style={{
          background: `radial-gradient(420px circle at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(71, 109, 154, 0.16), transparent 60%)`,
        }}
      />

      {/* Specular Edge Ring tracking cursor */}
      <div
        className={`pointer-events-none absolute -inset-px rounded-[inherit] transition-opacity duration-300 ${
          isHovered ? "opacity-100" : "opacity-0"
        }`}
        style={{
          background: `radial-gradient(260px circle at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(97, 190, 153, 0.16), transparent 50%)`,
        }}
      />

      {children}
    </div>
  );
}
