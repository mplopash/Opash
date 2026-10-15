"use client";

import React, { useEffect, useState, useRef } from "react";
import { VaporizeTextCycle, Tag } from "@/components/ui/vapour-text-effect";

export function InitialLoader() {
  const [mounted, setMounted] = useState(false);
  const [isExiting, setIsExiting] = useState(false);
  const [isFinished, setIsFinished] = useState(false);
  const [progress, setProgress] = useState(15);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    setMounted(true);

    // Fast progress increment reaching 100% at ~1.9s
    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          return 100;
        }
        const remaining = 100 - prev;
        const jump = Math.max(3, Math.floor(remaining * 0.28));
        return Math.min(100, prev + jump);
      });
    }, 120);

    // After ~2.1 seconds, initiate smooth fade-out exit
    const exitTimer = setTimeout(() => {
      setIsExiting(true);
    }, 2100);

    // At 2.7 seconds, completely unmount component from DOM
    const finishTimer = setTimeout(() => {
      setIsFinished(true);
    }, 2700);

    return () => {
      clearInterval(progressInterval);
      clearTimeout(exitTimer);
      clearTimeout(finishTimer);
    };
  }, []);

  const handleSkip = () => {
    setIsExiting(true);
    setTimeout(() => setIsFinished(true), 400);
  };

  // If already finished, remove completely from DOM
  if (isFinished) return null;

  return (
    <div
      id="opash-initial-loader"
      role="status"
      aria-live="polite"
      className={`fixed inset-0 z-[999999] flex flex-col items-center justify-center overflow-hidden bg-[#030712] transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${
        isExiting ? "opacity-0 pointer-events-none scale-[1.01]" : "opacity-100"
      }`}
    >
      {/* Background ambient glow highlights */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-gradient-to-r from-blue-600/15 via-emerald-500/10 to-blue-600/15 blur-[120px] rounded-full pointer-events-none" />

      {/* Subtle modern enterprise top badge */}
      <div className="absolute top-8 left-1/2 -translate-x-1/2 flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-white/10 bg-white/[0.03] backdrop-blur-md">
        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
        <span className="text-[11px] font-mono tracking-widest text-white/70 uppercase">
          OPASH SOFTWARE • SYSTEM READY
        </span>
      </div>

      {/* Main Vapour Particle Animation Container */}
      <div className="relative w-full max-w-4xl h-44 sm:h-52 md:h-60 flex items-center justify-center px-4">
        {mounted && (
          <VaporizeTextCycle
            texts={[
              "WELCOME TO OPASH",
              "THANK YOU FOR VISITING US",
            ]}
            font={{
              fontFamily: "Outfit, Plus Jakarta Sans, Inter, sans-serif",
              fontSize: "46px",
              fontWeight: 800,
            }}
            color="rgb(255, 255, 255)"
            spread={4}
            density={6}
            animation={{
              vaporizeDuration: 0.9,
              fadeInDuration: 0.35,
              waitDuration: 0.3,
            }}
            direction="left-to-right"
            alignment="center"
            tag={Tag.H1}
          />
        )}
      </div>

      {/* Bottom Progress Bar & Telemetry */}
      <div className="w-full max-w-xs px-6 mt-4 flex flex-col items-center gap-2.5">
        <div className="w-full h-[2px] bg-white/10 rounded-full overflow-hidden relative">
          <div
            className="h-full bg-gradient-to-r from-blue-500 to-emerald-400 transition-all duration-150 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>

        <div className="w-full flex items-center justify-between text-[10px] font-mono tracking-wider text-white/40">
          <span>LOADING ECOSYSTEM</span>
          <span>{progress}%</span>
        </div>
      </div>

      {/* Quick Skip button in top right for instant access */}
      <button
        onClick={handleSkip}
        className="absolute bottom-8 right-8 text-[11px] font-mono tracking-widest text-white/40 hover:text-white/80 transition-colors px-3 py-1.5 rounded border border-white/10 hover:border-white/20 bg-white/[0.02]"
        aria-label="Skip intro animation"
      >
        SKIP [ESC]
      </button>
    </div>
  );
}
