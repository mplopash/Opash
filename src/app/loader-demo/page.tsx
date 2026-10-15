"use client";

import React, { useState } from "react";
import Link from "next/link";
import { VaporizeTextCycle, Tag } from "@/components/ui/vapour-text-effect";

export default function LoaderDemoPage() {
  const [fontSize, setFontSize] = useState(84);
  const [spread, setSpread] = useState(5);
  const [density, setDensity] = useState(6);

  return (
    <div className="min-h-screen bg-[#030712] text-white flex flex-col items-center justify-center p-4 sm:p-8 relative overflow-hidden select-none">
      {/* Background ambient radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[500px] bg-gradient-to-r from-[#476D9A]/20 via-[#61BE99]/15 to-[#476D9A]/20 blur-[150px] rounded-full pointer-events-none" />

      {/* Navigation header */}
      <div className="absolute top-6 left-6 right-6 flex items-center justify-between z-20">
        <Link
          href="/"
          className="text-xs font-mono tracking-widest text-white/60 hover:text-white px-3.5 py-1.5 rounded-lg border border-white/10 bg-white/[0.03] backdrop-blur-md transition-colors"
        >
          ← BACK TO HOME
        </Link>
        <span className="text-xs font-mono text-[#61BE99] border border-[#61BE99]/20 px-3 py-1 rounded-full bg-[#61BE99]/10 flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-[#61BE99] animate-pulse" />
          OPASH VAPORIZE TEXT ENGINE
        </span>
      </div>

      {/* Main Vaporize Text Stage (Enlarged and smooth) */}
      <div className="relative w-full max-w-5xl h-96 sm:h-[440px] flex items-center justify-center border border-white/10 rounded-3xl bg-white/[0.02] backdrop-blur-md shadow-2xl p-6 sm:p-10 my-8">
        <VaporizeTextCycle
          texts={[
            "WELCOME TO OPASH",
            "INNOVATION & TECHNOLOGY",
            "THANK YOU FOR VISITING US",
          ]}
          font={{
            fontFamily: "Nunito, sans-serif",
            fontSize: `${fontSize}px`,
            fontWeight: 800,
          }}
          color="rgb(255, 255, 255)"
          spread={spread}
          density={density}
          animation={{
            vaporizeDuration: 2.2,
            fadeInDuration: 1.1,
            waitDuration: 1.8,
          }}
          direction="left-to-right"
          alignment="center"
          tag={Tag.H1}
        />
      </div>

      {/* Interactive Controls (Size, Spread, Density) */}
      <div className="z-10 flex flex-wrap items-center justify-center gap-6 p-4 px-6 rounded-2xl border border-white/10 bg-white/[0.04] backdrop-blur-md text-xs font-mono shadow-lg">
        {/* Font Size slider */}
        <div className="flex items-center gap-3">
          <label htmlFor="font-size-slider" className="text-white/60 whitespace-nowrap">
            Size ({fontSize}px)
          </label>
          <input
            id="font-size-slider"
            type="range"
            min="48"
            max="120"
            step="2"
            value={fontSize}
            onChange={(e) => setFontSize(Number(e.target.value))}
            className="w-28 accent-blue-500 cursor-pointer"
          />
        </div>

        {/* Spread slider */}
        <div className="flex items-center gap-3">
          <label htmlFor="spread-slider" className="text-white/60 whitespace-nowrap">
            Spread ({spread})
          </label>
          <input
            id="spread-slider"
            type="range"
            min="1"
            max="10"
            value={spread}
            onChange={(e) => setSpread(Number(e.target.value))}
            className="w-24 accent-blue-500 cursor-pointer"
          />
        </div>

        {/* Density slider */}
        <div className="flex items-center gap-3">
          <label htmlFor="density-slider" className="text-white/60 whitespace-nowrap">
            Density ({density})
          </label>
          <input
            id="density-slider"
            type="range"
            min="2"
            max="10"
            value={density}
            onChange={(e) => setDensity(Number(e.target.value))}
            className="w-24 accent-emerald-500 cursor-pointer"
          />
        </div>
      </div>
    </div>
  );
}
