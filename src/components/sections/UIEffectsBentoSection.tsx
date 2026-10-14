"use client";

import React, { useState } from "react";
import Link from "next/link";
import { 
  Sparkles, 
  Layers, 
  Box, 
  Move, 
  MousePointer, 
  ArrowRight, 
  Zap, 
  Sliders,
  CheckCircle2
} from "lucide-react";
import { MaterialRippleButton } from "@/components/effects/MaterialRippleButton";
import { MagneticHover } from "@/components/effects/MagneticHover";
import { SpotlightCard } from "@/components/common/SpotlightCard";
import { soundEffects } from "@/lib/soundEffects";
import { useTheme } from "@/context/ThemeContext";

export function UIEffectsBentoSection() {
  const { mode } = useTheme();
  const isLight = mode === "light";
  const [neuState, setNeuState] = useState<"raised" | "inset">("raised");
  const [glassBlur, setGlassBlur] = useState<number>(16);

  return (
    <section id="ui-effects" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative">
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[var(--primary)]/15 border border-[var(--primary)]/30 text-xs font-mono font-bold text-[var(--accent)] uppercase tracking-wider">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Next-Generation Frontend Engineering</span>
        </div>

        <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-[var(--text-main)]">
          Modern UI Effects &{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--primary)] via-[var(--accent)] to-sky-300">
            Tactile Kinetic Design
          </span>
        </h2>

        <p className="text-sm sm:text-base text-[var(--text-muted)] leading-relaxed">
          Experience our complete design system architecture. Each component is engineered with zero-layout-shift performance, accessible contrast, and tactile physical feedback.
        </p>
      </div>

      {/* Bento Grid Layout Showcase */}
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {/* Bento 1: Glassmorphism Card */}
        <div className="p-6 sm:p-7 rounded-3xl border border-[var(--border-strong)] bg-[var(--bg-card)]/50 backdrop-blur-2xl flex flex-col justify-between shadow-xl space-y-4 relative overflow-hidden">
          <div>
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs font-mono font-bold text-[var(--accent)] uppercase">
                [ Glassmorphism ]
              </span>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[var(--accent)]/10 text-[var(--accent)]">
                blur({glassBlur}px)
              </span>
            </div>
            <h3 className="text-lg font-bold text-[var(--text-main)] mb-1">
              Frosted Crystal Refraction
            </h3>
            <p className="text-xs text-[var(--text-muted)] leading-relaxed mb-4">
              Multi-layer transparency with backdrop blur, specular borders, and soft light absorption.
            </p>

            <div
              className="p-3.5 rounded-xl border border-white/20 shadow-md text-center"
              style={{
                backdropFilter: `blur(${glassBlur}px)`,
                WebkitBackdropFilter: `blur(${glassBlur}px)`,
                background: isLight ? "rgba(255,255,255,0.7)" : "rgba(15,23,42,0.6)",
              }}
            >
              <div className="text-xs font-bold text-[var(--text-main)]">Live Glass Layer</div>
            </div>
          </div>

          <div className="pt-3 border-t border-[var(--border-subtle)] flex items-center justify-between text-[11px] font-mono">
            <span>Blur: {glassBlur}px</span>
            <input
              type="range"
              min="4"
              max="28"
              value={glassBlur}
              onChange={(e) => setGlassBlur(Number(e.target.value))}
              className="w-24 cursor-pointer accent-[var(--accent)]"
            />
          </div>
        </div>

        {/* Bento 2: Neumorphism (Soft UI) */}
        <div className="p-6 sm:p-7 rounded-3xl border border-[var(--border-strong)] bg-[var(--bg-card)] flex flex-col justify-between shadow-xl space-y-4">
          <div>
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs font-mono font-bold text-[var(--primary-light)] uppercase">
                [ Neumorphism ]
              </span>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[var(--primary)]/10 text-[var(--primary-light)] uppercase">
                {neuState}
              </span>
            </div>
            <h3 className="text-lg font-bold text-[var(--text-main)] mb-1">
              Tactile Extruded Polymer
            </h3>
            <p className="text-xs text-[var(--text-muted)] leading-relaxed mb-4">
              Molded physical surfaces utilizing paired dual light and dark shadows.
            </p>

            <div className="flex justify-center py-2">
              <button
                onClick={() => {
                  soundEffects.click();
                  setNeuState(neuState === "raised" ? "inset" : "raised");
                }}
                className={`w-24 h-24 rounded-2xl flex flex-col items-center justify-center gap-1.5 transition-all duration-300 cursor-pointer ${
                  neuState === "raised" ? "neu-raised hover:scale-105" : "neu-inset"
                }`}
              >
                <Box className={`w-6 h-6 ${neuState === "inset" ? "text-[var(--accent)]" : "text-[var(--primary)]"}`} />
                <span className="text-[10px] font-mono font-bold uppercase">{neuState}</span>
              </button>
            </div>
          </div>

          <div className="pt-3 border-t border-[var(--border-subtle)] text-center">
            <button
              onClick={() => {
                soundEffects.click();
                setNeuState(neuState === "raised" ? "inset" : "raised");
              }}
              className="text-xs text-[var(--primary-light)] hover:underline font-mono font-bold cursor-pointer"
            >
              Toggle Inset / Raised
            </button>
          </div>
        </div>

        {/* Bento 3: Claymorphism Card */}
        <div className="p-6 sm:p-7 rounded-3xl border border-[var(--border-strong)] bg-[var(--bg-card)] flex flex-col justify-between shadow-xl space-y-4">
          <div>
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs font-mono font-bold text-purple-400 uppercase">
                [ Claymorphism ]
              </span>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-purple-500/10 text-purple-400">
                Inflated 3D
              </span>
            </div>
            <h3 className="text-lg font-bold text-[var(--text-main)] mb-1">
              Playful Rounded Volume
            </h3>
            <p className="text-xs text-[var(--text-muted)] leading-relaxed mb-4">
              High border radius with dual internal inset highlights and soft floating drop shadows.
            </p>

            <div className="py-2 flex justify-center">
              <div
                onClick={() => soundEffects.hover()}
                className="clay-inflated p-4 w-full text-center cursor-pointer hover:scale-105 active:scale-95 transition-transform"
              >
                <div className="text-xs font-bold text-[var(--text-main)]">Clay Squish Pill</div>
                <div className="text-[10px] text-[var(--text-dim)] font-mono">Click to press</div>
              </div>
            </div>
          </div>

          <div className="pt-3 border-t border-[var(--border-subtle)] text-[11px] text-[var(--text-muted)] text-center font-mono">
            Dual internal bevel + outer diffusion
          </div>
        </div>

        {/* Bento 4: 3D Tilt Card */}
        <SpotlightCard
          tiltAmount={16}
          className="p-6 sm:p-7 rounded-3xl border border-[var(--border-strong)] bg-[var(--bg-card)] flex flex-col justify-between shadow-xl space-y-4 cursor-pointer"
        >
          <div>
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs font-mono font-bold text-emerald-400 uppercase">
                [ 3D Gyro Tilt ]
              </span>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400">
                Tracking
              </span>
            </div>
            <h3 className="text-lg font-bold text-[var(--text-main)] mb-1">
              Cursor Specular Glare
            </h3>
            <p className="text-xs text-[var(--text-muted)] leading-relaxed mb-4">
              Real-time multi-axis tilt with dynamic specular reflection tracking mouse movement.
            </p>

            <div className="p-3.5 rounded-xl bg-[var(--bg-main)] border border-[var(--border-subtle)] text-center">
              <Move className="w-5 h-5 text-emerald-400 mx-auto mb-1 animate-pulse" />
              <div className="text-xs font-bold text-[var(--text-main)]">Tilt Cursor Around</div>
            </div>
          </div>

          <div className="pt-3 border-t border-[var(--border-subtle)] text-[11px] text-[var(--text-muted)] font-mono text-center">
            Perspective 1000px RotateX/Y
          </div>
        </SpotlightCard>

        {/* Bento 5: Wide Kinetic Showcase Banner spanning all 4 columns */}
        <div className="md:col-span-3 lg:col-span-4 p-8 rounded-3xl glass-panel border border-[var(--border-strong)] shadow-2xl relative overflow-hidden flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="space-y-3 max-w-xl">
            <div className="flex items-center gap-2 text-xs font-mono text-[var(--accent)] font-bold uppercase">
              <Zap className="w-4 h-4 text-amber-400" />
              <span>Explore The Full Interactive Showcase</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-[var(--text-main)]">
              Interactive UI Effects Studio (V3)
            </h3>
            <p className="text-xs sm:text-sm text-[var(--text-muted)] leading-relaxed">
              Test all 14 visual effects with live parameter sliders, copyable code tokens, and interactive sandbox environments including Material Ripples, Magnetic Proximity, Infinite Marquees, Skeleton Loaders, and SVG Real-time Drawing.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-4 shrink-0">
            <MagneticHover pullFactor={0.35}>
              <Link href="/v3">
                <MaterialRippleButton variant="accent" className="px-6 py-3.5 text-xs font-bold uppercase tracking-wider">
                  <span>Open Effects Studio (V3)</span>
                  <ArrowRight className="w-4 h-4" />
                </MaterialRippleButton>
              </Link>
            </MagneticHover>

            <Link href="/v2">
              <button
                onClick={() => soundEffects.click()}
                className="px-6 py-3.5 rounded-xl border border-[var(--border-strong)] bg-[var(--bg-card)] hover:bg-[var(--border-subtle)] text-xs font-bold text-[var(--text-main)] transition-colors cursor-pointer"
              >
                Inspect 3D Hardware (V2)
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
