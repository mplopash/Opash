"use client";

import React, { useState } from "react";
import Link from "next/link";
import { VaporizeTextCycle, Tag } from "@/components/ui/vapour-text-effect";
import { InitialLoader } from "@/components/common/InitialLoader";

export default function LoaderDemoPage() {
  const [activeEngine, setActiveEngine] = useState<"kinetic" | "vaporize">("kinetic");
  const [fontSize, setFontSize] = useState(52);
  const [spread, setSpread] = useState(5);
  const [density, setDensity] = useState(6);
  const [showFullLoader, setShowFullLoader] = useState(false);

  return (
    <div className="min-h-screen bg-[#030610] text-white flex flex-col items-center justify-center p-4 sm:p-8 relative overflow-hidden select-none font-sans">
      {/* Background ambient radial glow in #476D9A and #61BE99 */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[500px] bg-gradient-to-r from-[#476D9A]/20 via-[#61BE99]/15 to-[#476D9A]/20 blur-[150px] rounded-full pointer-events-none" />

      {/* Navigation header */}
      <div className="absolute top-6 left-6 right-6 flex items-center justify-between z-20">
        <Link
          href="/"
          className="text-xs font-mono tracking-widest text-white/70 hover:text-white px-3.5 py-1.5 rounded-full border border-white/10 bg-white/[0.04] backdrop-blur-md transition-all hover:border-white/30"
        >
          ← BACK TO HOME
        </Link>

        {/* Engine switcher tab */}
        <div className="flex items-center gap-1.5 p-1 rounded-full bg-white/[0.05] border border-white/10 backdrop-blur-md text-xs font-mono">
          <button
            onClick={() => setActiveEngine("kinetic")}
            className={`px-3.5 py-1 rounded-full transition-all cursor-pointer ${
              activeEngine === "kinetic"
                ? "bg-[#476D9A] text-white shadow-md font-bold"
                : "text-white/60 hover:text-white"
            }`}
          >
            Kinetic Engine (New)
          </button>
          <button
            onClick={() => setActiveEngine("vaporize")}
            className={`px-3.5 py-1 rounded-full transition-all cursor-pointer ${
              activeEngine === "vaporize"
                ? "bg-[#61BE99] text-white shadow-md font-bold"
                : "text-white/60 hover:text-white"
            }`}
          >
            Vapor Engine (Fitted)
          </button>
        </div>

        <button
          onClick={() => setShowFullLoader(true)}
          className="text-xs font-mono text-[#61BE99] border border-[#61BE99]/30 hover:border-[#61BE99] px-3.5 py-1.5 rounded-full bg-[#61BE99]/10 backdrop-blur-md flex items-center gap-2 cursor-pointer transition-all"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-[#61BE99] animate-pulse" />
          TEST FULL SCREEN
        </button>
      </div>

      {/* Main Display Stage */}
      <div className="relative w-full max-w-5xl h-96 sm:h-[440px] flex items-center justify-center border border-white/10 rounded-3xl bg-white/[0.02] backdrop-blur-xl shadow-2xl p-6 sm:p-10 my-8 overflow-hidden">
        {activeEngine === "vaporize" ? (
          <VaporizeTextCycle
            texts={[
              "CRAFTING DIGITAL EXCELLENCE",
              "ENGINEERING WITH PRECISION",
              "WELCOME TO OPASH SOFTWARE",
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
              vaporizeDuration: 2.0,
              fadeInDuration: 0.9,
              waitDuration: 1.8,
            }}
            direction="left-to-right"
            alignment="center"
            tag={Tag.H1}
          />
        ) : (
          <div className="flex flex-col items-center text-center space-y-4">
            <div className="w-16 h-16 rounded-2xl p-3 bg-white/[0.05] border border-white/15 backdrop-blur-2xl shadow-2xl shadow-[#476D9A]/30 flex items-center justify-center">
              <img
                src="/Only Logo.png"
                alt="Opash"
                className="w-full h-full object-contain filter drop-shadow-[0_0_10px_rgba(97,190,153,0.6)]"
              />
            </div>
            <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
              CRAFTING DIGITAL
            </h2>
            <h2 className="text-3xl sm:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-[#476D9A] via-[#5784b8] to-[#61BE99] tracking-tight">
              EXCELLENCE
            </h2>
            <p className="text-xs font-mono tracking-widest text-[#61BE99] uppercase pt-2">
              SYS::CUSTOM KINETIC ENGINE • ZERO FLICKER • 120 FPS
            </p>
          </div>
        )}
      </div>

      {/* Interactive Controls (For Vaporize Engine) */}
      {activeEngine === "vaporize" && (
        <div className="z-10 flex flex-wrap items-center justify-center gap-6 p-4 px-6 rounded-2xl border border-white/10 bg-white/[0.04] backdrop-blur-md text-xs font-mono shadow-lg">
          <div className="flex items-center gap-3">
            <label htmlFor="font-size-slider" className="text-white/60 whitespace-nowrap">
              Base Size ({fontSize}px)
            </label>
            <input
              id="font-size-slider"
              type="range"
              min="32"
              max="96"
              step="2"
              value={fontSize}
              onChange={(e) => setFontSize(Number(e.target.value))}
              className="w-28 accent-[#476D9A] cursor-pointer"
            />
          </div>

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
              className="w-24 accent-[#476D9A] cursor-pointer"
            />
          </div>

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
              className="w-24 accent-[#61BE99] cursor-pointer"
            />
          </div>
        </div>
      )}

      {/* Full screen loader simulation */}
      {showFullLoader && (
        <div className="fixed inset-0 z-50">
          <InitialLoader />
        </div>
      )}
    </div>
  );
}
