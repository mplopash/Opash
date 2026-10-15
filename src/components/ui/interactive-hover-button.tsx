"use client";

import React from "react";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { soundEffects } from "@/lib/soundEffects";

export interface InteractiveHoverButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  text?: string;
  variant?: "primary" | "secondary" | "outline";
}

/**
 * InteractiveHoverButton - 21st.dev / Magic UI component
 * A high-engagement button that smoothly expands a luminous brand dot across the background
 * while transitioning text and animating an arrow icon on hover.
 */
export const InteractiveHoverButton = React.forwardRef<
  HTMLButtonElement,
  InteractiveHoverButtonProps
>(
  (
    {
      text = "Get a Quote",
      variant = "primary",
      className,
      children,
      onClick,
      onMouseEnter,
      ...props
    },
    ref
  ) => {
    return (
      <button
        ref={ref}
        onClick={(e) => {
          soundEffects.click();
          onClick?.(e);
        }}
        onMouseEnter={(e) => {
          soundEffects.hover();
          onMouseEnter?.(e);
        }}
        className={cn(
          "group relative inline-flex items-center justify-center cursor-pointer overflow-hidden rounded-full font-bold select-none transition-all duration-300",
          variant === "primary" &&
            "bg-[#1d4ed8] text-white border border-blue-500/40 shadow-md shadow-blue-700/25 hover:shadow-xl hover:shadow-blue-600/40 active:scale-[0.98]",
          variant === "secondary" &&
            "bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-100 border border-slate-200 dark:border-slate-700 hover:border-blue-500/40 active:scale-[0.98]",
          variant === "outline" &&
            "bg-white/80 dark:bg-slate-900/80 text-slate-900 dark:text-white border border-slate-300 dark:border-slate-700 backdrop-blur-md active:scale-[0.98]",
          "px-6 py-2.5 sm:px-7 sm:py-3 text-xs sm:text-sm tracking-wide",
          className
        )}
        {...props}
      >
        {/* Expanding dot highlight */}
        <span
          className={cn(
            "absolute left-4 top-1/2 -translate-y-1/2 h-2.5 w-2.5 rounded-full transition-all duration-500 ease-out pointer-events-none",
            variant === "primary"
              ? "bg-[#10b981] group-hover:scale-[65] group-hover:bg-[#1e40af]"
              : "bg-[#1d4ed8] group-hover:scale-[65] group-hover:bg-[#1d4ed8]"
          )}
        />

        {/* Initial Text State */}
        <span className="relative z-10 flex items-center gap-2 transition-all duration-300 group-hover:translate-x-6 group-hover:opacity-0">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 group-hover:opacity-0 transition-opacity" />
          <span>{children || text}</span>
        </span>

        {/* Hovered State with Arrow Translation */}
        <span
          className={cn(
            "absolute inset-0 z-10 flex items-center justify-center gap-2 opacity-0 transition-all duration-300 group-hover:opacity-100 font-bold",
            "text-white"
          )}
        >
          <span>{children || text}</span>
          <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
        </span>
      </button>
    );
  }
);

InteractiveHoverButton.displayName = "InteractiveHoverButton";
