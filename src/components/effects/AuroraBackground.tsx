"use client";

import React from "react";
import { useTheme } from "@/context/ThemeContext";

interface AuroraBackgroundProps {
  children?: React.ReactNode;
  className?: string;
  intensity?: "subtle" | "vibrant";
}

export function AuroraBackground({
  children,
  className = "",
  intensity = "vibrant",
}: AuroraBackgroundProps) {
  const { mode } = useTheme();
  const isLight = mode === "light";

  return (
    <div className={`relative overflow-hidden ${className}`}>
      {/* Aurora Ambient Blobs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
        <div
          className={`absolute -top-[20%] -left-[10%] w-[600px] h-[600px] rounded-full blur-[140px] animate-aurora-1 ${
            isLight ? "bg-blue-300/30" : "bg-[var(--primary)]/25"
          }`}
        />
        <div
          className={`absolute top-[20%] -right-[15%] w-[550px] h-[550px] rounded-full blur-[130px] animate-aurora-2 ${
            isLight ? "bg-cyan-200/35" : "bg-[var(--accent)]/20"
          }`}
        />
        <div
          className={`absolute -bottom-[20%] left-[25%] w-[650px] h-[650px] rounded-full blur-[150px] animate-aurora-3 ${
            isLight ? "bg-indigo-200/30" : "bg-purple-600/20"
          }`}
        />
      </div>

      <div className="relative z-10">{children}</div>
    </div>
  );
}
