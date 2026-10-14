"use client";

import React, { useRef, useEffect, useState } from "react";

interface CohereScrollTextRevealProps {
  text: string;
  className?: string;
  subtext?: string;
}

export function CohereScrollTextReveal({ text, className = "", subtext }: CohereScrollTextRevealProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);

  const words = text.split(" ");

  useEffect(() => {
    const handleScroll = () => {
      const el = containerRef.current;
      if (!el) return;

      const rect = el.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      // Start revealing when top is at 80% of viewport, finish when top is at 25% of viewport
      const start = windowHeight * 0.85;
      const end = windowHeight * 0.25;

      const current = (start - rect.top) / (start - end);
      const clamped = Math.max(0, Math.min(1, current));
      setProgress(clamped);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div ref={containerRef} className={`py-16 md:py-24 max-w-5xl mx-auto px-6 text-center ${className}`}>
      {subtext && (
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[var(--primary)]/10 border border-[var(--primary)]/25 text-xs font-mono font-bold text-[var(--accent)] uppercase tracking-widest mb-8">
          <span>{subtext}</span>
        </div>
      )}

      <h2 className="text-3xl sm:text-5xl md:text-6xl font-black tracking-tight leading-[1.25] text-left sm:text-center select-none">
        {words.map((word, index) => {
          // Calculate when this specific word should light up
          const wordThreshold = index / words.length;
          const isLit = progress >= wordThreshold;
          const wordOpacity = isLit ? 1 : Math.max(0.2, 0.2 + (progress - wordThreshold + 0.1) * 3);

          return (
            <span
              key={index}
              style={{
                opacity: wordOpacity,
                transition: "opacity 0.2s cubic-bezier(0.16, 1, 0.3, 1)",
              }}
              className={`inline-block mr-2 sm:mr-3 ${
                isLit
                  ? "text-[var(--text-main)] font-black"
                  : "text-[var(--text-muted)] font-extrabold"
              }`}
            >
              {word}
            </span>
          );
        })}
      </h2>
    </div>
  );
}
