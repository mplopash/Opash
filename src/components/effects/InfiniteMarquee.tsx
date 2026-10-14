"use client";

import React from "react";

interface InfiniteMarqueeProps {
  items: string[];
  speed?: number; // seconds
  direction?: "left" | "right";
  className?: string;
}

export function InfiniteMarquee({
  items,
  speed = 25,
  direction = "left",
  className = "",
}: InfiniteMarqueeProps) {
  return (
    <div className={`overflow-hidden relative w-full select-none py-3 ${className}`}>
      {/* Side Fade Masks */}
      <div className="absolute left-0 top-0 bottom-0 w-20 z-10 bg-gradient-to-r from-[var(--bg-main)] to-transparent pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-20 z-10 bg-gradient-to-l from-[var(--bg-main)] to-transparent pointer-events-none" />

      <div
        className="flex gap-6 w-max hover:[animation-play-state:paused]"
        style={{
          animation: `${direction === "left" ? "marqueeLeft" : "marqueeRight"} ${speed}s linear infinite`,
        }}
      >
        {/* Render twice for seamless loop */}
        {[...items, ...items, ...items].map((item, idx) => (
          <div
            key={idx}
            className="flex items-center gap-3 px-4 py-2 rounded-xl bg-[var(--bg-card)] border border-[var(--border-subtle)] text-xs font-mono font-semibold text-[var(--text-main)] shadow-sm hover:border-[var(--primary)] transition-colors whitespace-nowrap"
          >
            <span className="w-2 h-2 rounded-full bg-[var(--accent)]" />
            <span>{item}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
