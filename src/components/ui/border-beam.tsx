"use client";

import React from "react";
import { cn } from "@/lib/utils";

export interface BorderBeamProps {
  className?: string;
  size?: number;
  duration?: number;
  borderWidth?: number;
  colorFrom?: string;
  colorTo?: string;
  delay?: number;
}

/**
 * BorderBeam - 21st.dev / Magic UI component
 * Renders an animated luminous border beam that traces the container's perimeter.
 * Adheres strictly to the Opash 2-color brand palette (Brand Blue #1d4ed8 & Emerald #10b981).
 */
export function BorderBeam({
  className,
  size = 240,
  duration = 10,
  borderWidth = 1.5,
  colorFrom = "#1d4ed8",
  colorTo = "#10b981",
  delay = 0,
}: BorderBeamProps) {
  return (
    <div
      aria-hidden="true"
      style={
        {
          "--size": `${size}px`,
          "--duration": `${duration}s`,
          "--delay": `${delay}s`,
          "--color-from": colorFrom,
          "--color-to": colorTo,
          "--border-width": `${borderWidth}px`,
        } as React.CSSProperties
      }
      className={cn(
        "pointer-events-none absolute inset-0 rounded-[inherit] [border:calc(var(--border-width)*1px)_solid_transparent]",
        "![mask-clip:padding-box,border-box] ![mask-composite:intersect] [mask:linear-gradient(transparent,transparent),linear-gradient(#fff,#fff)]",
        className
      )}
    >
      <div
        className="absolute aspect-square bg-gradient-to-l from-[var(--color-from)] via-[var(--color-to)] to-transparent [offset-anchor:calc(var(--size)*0.5)_50%] [offset-path:rect(0_auto_auto_0_round_calc(var(--size)*1px))]"
        style={{
          width: "var(--size)",
          animation: "border-beam-run var(--duration) linear infinite",
          animationDelay: "var(--delay)",
        }}
      />
    </div>
  );
}
