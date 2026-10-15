

"use client";

import React, { useState } from "react";
import Link from "next/link";
import { VaporizeTextCycle, Tag } from "@/components/ui/vapour-text-effect";

export default function LoaderDemoPage() {
  const [spread, setSpread] = useState(5);
  const [density, setDensity] = useState(6);

  return (
    <div className="min-h-screen bg-[#030712] text-white flex flex-col items-center justify-center p-6 relative overflow-hidden select-none">
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-gradient-to-r from-blue-600/20 via-emerald-500/15 to-blue-600/20 blur-[140px] rounded-full pointer-events-none" />

      {/* Navigation header */}
      <div className="absolute top-8 left-8 right-8 flex items-center justify-between z-20">
        <Link
          href="/"
          className="text-xs font-mono tracking-widest text-white/60 hover:text-white px-3.5 py-1.5 rounded-lg border border-white/10 bg-white/[0.03] backdrop-blur-md transition-colors"
        >
          ← BACK TO HOME
        </Link>
        <span className="text-xs font-mono text-emerald-400 border border-emerald-500/20 px-3 py-1 rounded-full bg-emerald-500/10">
          21ST.DEV VAPOUR TEXT EFFECT
        </span>
      </div>

      {/* Main Vaporize Text Stage */}
      <div className="relative w-full max-w-4xl h-64 md:h-80 flex items-center justify-center border border-white/10 rounded-2xl bg-white/[0.02] backdrop-blur-md shadow-2xl p-6 my-10">
        <VaporizeTextCycle
          texts={[
            "WELCOME TO OPASH",
            "INNOVATION & TECHNOLOGY",
            "THANK YOU FOR VISITING US",
          ]}
          font={{
            fontFamily: "Outfit, Plus Jakarta Sans, Inter, sans-serif",
            fontSize: "48px",
            fontWeight: 700,
          }}
          color="rgb(255, 255, 255)"
          spread={spread}
          density={density}
          animation={{
            vaporizeDuration: 1.8,
            fadeInDuration: 0.8,
            waitDuration: 0.5,
          }}
          direction="left-to-right"
          alignment="center"
          tag={Tag.H1}
        />
      </div>

      {/* Interactive controls */}
      <div className="z-10 flex flex-wrap items-center justify-center gap-6 p-4 rounded-xl border border-white/10 bg-white/[0.04] backdrop-blur-md text-xs font-mono">
        <div className="flex items-center gap-3">
          <label htmlFor="spread-slider" className="text-white/60">Spread ({spread})</label>
          <input
            id="spread-slider"
            type="range"
            min="1"
            max="10"
            value={spread}
            onChange={(e) => setSpread(Number(e.target.value))}
            className="w-24 accent-blue-500"
          />
        </div>
        <div className="flex items-center gap-3">
          <label htmlFor="density-slider" className="text-white/60">Density ({density})</label>
          <input
            id="density-slider"
            type="range"
            min="1"
            max="10"
            value={density}
            onChange={(e) => setDensity(Number(e.target.value))}
            className="w-24 accent-emerald-500"
          />
        </div>
      </div>
    </div>
  );
}
