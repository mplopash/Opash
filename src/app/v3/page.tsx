"use client";

import React, { useState, useRef, MouseEvent } from "react";
import Link from "next/link";
import { 
  Sparkles, 
  Layers, 
  Box, 
  Zap, 
  Move, 
  MousePointer, 
  RefreshCw, 
  Sliders, 
  Eye, 
  Play, 
  CheckCircle2, 
  Sun, 
  Moon, 
  ArrowRight,
  Code2,
  Terminal,
  Activity,
  Flame,
  ShieldCheck,
  Maximize2
} from "lucide-react";
import { useTheme } from "@/context/ThemeContext";
import { soundEffects } from "@/lib/soundEffects";
import { MaterialRippleButton } from "@/components/effects/MaterialRippleButton";
import { MagneticHover } from "@/components/effects/MagneticHover";
import { AuroraBackground } from "@/components/effects/AuroraBackground";
import { InfiniteMarquee } from "@/components/effects/InfiniteMarquee";
import { SpotlightCard } from "@/components/common/SpotlightCard";

export default function UIEffectsDashboard() {
  const { mode, setMode } = useTheme();
  const isLight = mode === "light";

  // Neumorphism state
  const [neuState, setNeuState] = useState<"raised" | "inset">("raised");

  // Glass blur slider state
  const [glassBlur, setGlassBlur] = useState<number>(18);
  const [glassOpacity, setGlassOpacity] = useState<number>(65);

  // Skeleton loading toggle state
  const [skeletonLoading, setSkeletonLoading] = useState<boolean>(true);

  // Stagger trigger state
  const [staggerKey, setStaggerKey] = useState<number>(0);

  // SVG drawing key
  const [svgKey, setSvgKey] = useState<number>(0);

  // Neon glow color
  const [neonColor, setNeonColor] = useState<string>("cyan");

  // Marquee speed
  const [marqueeSpeed, setMarqueeSpeed] = useState<number>(20);

  // Material click coordinates logger
  const [lastClickCoords, setLastClickCoords] = useState<{ x: number; y: number } | null>(null);

  const marqueePartners = [
    "Next.js 16 Edge",
    "React 19 Concurrent",
    "FastAPI Python",
    "PostgreSQL pgvector",
    "Tailwind CSS v4",
    "Lenis Smooth Scroll",
    "Docker Clusters",
    "Kubernetes Mesh",
    "Cloudflare Workers",
    "LangChain AI Agents",
  ];

  return (
    <div className="min-h-screen bg-[var(--bg-main)] text-[var(--text-main)] transition-colors duration-300 relative selection:bg-[var(--primary)] selection:text-white pb-32">
      {/* Top Floating Glass Header */}
      <header className="sticky top-0 z-40 backdrop-blur-xl bg-[var(--bg-main)]/80 border-b border-[var(--border-subtle)] py-4 px-6 sm:px-10 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Link href="/" className="flex items-center gap-2.5 group">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-[var(--primary)] to-[var(--accent)] text-white font-bold flex items-center justify-center shadow-md shadow-[var(--brand-glow)]">
              O
            </div>
            <div>
              <div className="font-extrabold text-base tracking-tight flex items-center gap-1.5">
                <span>Opash</span>
                <span className="text-[var(--accent)] font-mono text-xs px-2 py-0.5 rounded-md bg-[var(--accent)]/10 border border-[var(--accent)]/30">
                  V3 STUDIO
                </span>
              </div>
              <div className="text-[10px] text-[var(--text-dim)] uppercase tracking-wider font-mono">
                UI Effects Showcase Dashboard
              </div>
            </div>
          </Link>
        </div>

        {/* Quick Nav Anchors */}
        <nav className="hidden lg:flex items-center gap-1 text-xs font-semibold">
          <a href="#visual-styles" className="px-3 py-1.5 rounded-lg text-[var(--text-muted)] hover:text-[var(--text-main)] hover:bg-[var(--border-subtle)] transition-colors">
            Visual Styles
          </a>
          <a href="#hover-interactions" className="px-3 py-1.5 rounded-lg text-[var(--text-muted)] hover:text-[var(--text-main)] hover:bg-[var(--border-subtle)] transition-colors">
            Hover Mechanics
          </a>
          <a href="#animation-states" className="px-3 py-1.5 rounded-lg text-[var(--text-muted)] hover:text-[var(--text-main)] hover:bg-[var(--border-subtle)] transition-colors">
            Scroll & Animation
          </a>
          <a href="#bento-grid" className="px-3 py-1.5 rounded-lg text-[var(--text-muted)] hover:text-[var(--text-main)] hover:bg-[var(--border-subtle)] transition-colors">
            Master Bento
          </a>
        </nav>

        {/* Controls */}
        <div className="flex items-center gap-3">
          <button
            onClick={() => {
              soundEffects.click();
              setMode(mode === "light" ? "dark" : "light");
            }}
            className="p-2.5 rounded-xl border border-[var(--border-strong)] bg-[var(--bg-card)] hover:bg-[var(--border-subtle)] text-[var(--text-main)] transition-colors cursor-pointer"
            title={`Switch to ${mode === "light" ? "Dark" : "Light"} Mode`}
          >
            {mode === "light" ? <Moon className="w-4 h-4 text-blue-600" /> : <Sun className="w-4 h-4 text-amber-400" />}
          </button>

          <Link href="/">
            <MaterialRippleButton variant="accent">
              <span>View V1 Flagship</span>
              <ArrowRight className="w-4 h-4" />
            </MaterialRippleButton>
          </Link>
        </div>
      </header>

      {/* Hero Intro with Aurora Backdrop */}
      <AuroraBackground className="pt-20 pb-16 px-6 sm:px-10 text-center relative border-b border-[var(--border-subtle)]">
        <div className="max-w-4xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[var(--primary)]/15 border border-[var(--primary)]/30 text-xs font-mono font-bold text-[var(--accent)] uppercase tracking-wider mb-2">
            <Sparkles className="w-3.5 h-3.5 text-[var(--accent)]" />
            <span>Complete 2026 Frontend UI Architecture</span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-[var(--text-main)] leading-[1.1]">
            Modern Frontend <br className="hidden sm:inline" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--primary)] via-[var(--accent)] to-sky-300">
              UI Effects Showcase Dashboard
            </span>
          </h1>

          <p className="text-base sm:text-lg text-[var(--text-muted)] max-w-2xl mx-auto leading-relaxed">
            A comprehensive, interactive developer sandbox demonstrating all major modern frontend design styles, tactile physical feedback, and hardware-accelerated animations.
          </p>

          {/* Quick Metrics */}
          <div className="pt-6 flex flex-wrap items-center justify-center gap-4 text-xs font-mono text-[var(--text-muted)]">
            <span className="px-3 py-1.5 rounded-lg bg-[var(--bg-card)] border border-[var(--border-subtle)]">
              5 Visual Styles
            </span>
            <span className="px-3 py-1.5 rounded-lg bg-[var(--bg-card)] border border-[var(--border-subtle)]">
              5 Hover & Click Mechanics
            </span>
            <span className="px-3 py-1.5 rounded-lg bg-[var(--bg-card)] border border-[var(--border-subtle)]">
              4 Scroll & SVG Animations
            </span>
            <span className="px-3 py-1.5 rounded-lg bg-[var(--bg-card)] border border-[var(--border-subtle)] text-emerald-500 font-bold">
              100% Responsive & Dual-Mode
            </span>
          </div>
        </div>
      </AuroraBackground>

      {/* Main Showcase Container */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 space-y-24">
        {/* ================================================================= */}
        {/* 1. VISUAL DESIGN STYLES SECTION                                    */}
        {/* ================================================================= */}
        <section id="visual-styles" className="space-y-8">
          <div className="border-b border-[var(--border-subtle)] pb-4 flex flex-col sm:flex-row sm:items-end justify-between gap-2">
            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-[var(--accent)] font-bold">
                01 // Surface Architecture
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-[var(--text-main)] mt-1">
                Visual Design Styles
              </h2>
            </div>
            <p className="text-xs text-[var(--text-muted)] font-mono">
              Glassmorphism · Neumorphism · Claymorphism · Liquid Glass · Aurora
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* 1.1 Glassmorphism Card */}
            <div className="p-6 rounded-3xl border border-[var(--border-strong)] bg-[var(--bg-card)]/50 backdrop-blur-2xl flex flex-col justify-between space-y-6 shadow-xl relative overflow-hidden">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-mono font-bold text-[var(--accent)] uppercase tracking-wider">
                    [ Glassmorphism ]
                  </span>
                  <span className="text-[10px] px-2 py-0.5 rounded bg-[var(--accent)]/10 text-[var(--accent)] font-mono">
                    blur({glassBlur}px)
                  </span>
                </div>
                <h3 className="text-lg font-bold text-[var(--text-main)] mb-2">
                  Frosted Crystal Refraction
                </h3>
                <p className="text-xs text-[var(--text-muted)] leading-relaxed mb-4">
                  Multi-layered transparency with high blur threshold, delicate border highlights, and specular light refraction.
                </p>

                {/* Interactive Dynamic Glass Slab Preview */}
                <div
                  className="p-4 rounded-2xl border border-white/20 shadow-2xl relative overflow-hidden"
                  style={{
                    backdropFilter: `blur(${glassBlur}px)`,
                    WebkitBackdropFilter: `blur(${glassBlur}px)`,
                    background: isLight ? `rgba(255, 255, 255, ${glassOpacity / 100})` : `rgba(15, 23, 42, ${glassOpacity / 100})`,
                  }}
                >
                  <div className="text-xs font-bold text-[var(--text-main)]">Live Glass Specimen</div>
                  <div className="text-[11px] text-[var(--text-dim)] font-mono mt-1">
                    Layers underneath remain softly diffused.
                  </div>
                </div>
              </div>

              {/* Slider Controls */}
              <div className="pt-4 border-t border-[var(--border-subtle)] space-y-3">
                <div className="flex items-center justify-between text-[11px] font-mono">
                  <span>Blur Radius: {glassBlur}px</span>
                  <input
                    type="range"
                    min="4"
                    max="36"
                    value={glassBlur}
                    onChange={(e) => setGlassBlur(Number(e.target.value))}
                    className="w-28 cursor-pointer accent-[var(--accent)]"
                  />
                </div>
                <div className="flex items-center justify-between text-[11px] font-mono">
                  <span>Opacity: {glassOpacity}%</span>
                  <input
                    type="range"
                    min="20"
                    max="95"
                    value={glassOpacity}
                    onChange={(e) => setGlassOpacity(Number(e.target.value))}
                    className="w-28 cursor-pointer accent-[var(--accent)]"
                  />
                </div>
              </div>
            </div>

            {/* 1.2 Neumorphism (Soft UI) Card */}
            <div className="p-6 rounded-3xl border border-[var(--border-strong)] bg-[var(--bg-card)] flex flex-col justify-between space-y-6 shadow-xl">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-mono font-bold text-[var(--primary-light)] uppercase tracking-wider">
                    [ Neumorphism ]
                  </span>
                  <span className="text-[10px] px-2 py-0.5 rounded bg-[var(--primary)]/10 text-[var(--primary-light)] font-mono uppercase">
                    {neuState} State
                  </span>
                </div>
                <h3 className="text-lg font-bold text-[var(--text-main)] mb-2">
                  Dual Light/Dark Shadow Bevel
                </h3>
                <p className="text-xs text-[var(--text-muted)] leading-relaxed mb-6">
                  Minimalist surface extrusion simulating molded physical polymer using paired opposite light and dark shadows.
                </p>

                {/* Interactive Neumorphic Element */}
                <div className="flex items-center justify-center py-4">
                  <button
                    onClick={() => {
                      soundEffects.click();
                      setNeuState(neuState === "raised" ? "inset" : "raised");
                    }}
                    className={`w-32 h-32 rounded-3xl flex flex-col items-center justify-center gap-2 transition-all duration-300 cursor-pointer ${
                      neuState === "raised" ? "neu-raised hover:scale-105" : "neu-inset"
                    }`}
                  >
                    <Box className={`w-8 h-8 transition-transform duration-300 ${neuState === "inset" ? "scale-90 text-[var(--accent)]" : "text-[var(--primary)]"}`} />
                    <span className="text-xs font-mono font-bold uppercase tracking-wider">
                      {neuState}
                    </span>
                  </button>
                </div>
              </div>

              {/* State Switcher */}
              <div className="pt-4 border-t border-[var(--border-subtle)] flex items-center justify-between">
                <span className="text-xs text-[var(--text-muted)]">Click button to toggle</span>
                <button
                  onClick={() => {
                    soundEffects.click();
                    setNeuState(neuState === "raised" ? "inset" : "raised");
                  }}
                  className="px-3 py-1 rounded-lg text-xs font-mono font-bold bg-[var(--primary)]/15 text-[var(--primary-light)] border border-[var(--primary)]/30 hover:bg-[var(--primary)] hover:text-white transition-colors cursor-pointer"
                >
                  Switch to {neuState === "raised" ? "Inset (Sunken)" : "Extruded (Raised)"}
                </button>
              </div>
            </div>

            {/* 1.3 Claymorphic Card */}
            <div className="p-6 rounded-3xl border border-[var(--border-strong)] bg-[var(--bg-card)] flex flex-col justify-between space-y-6 shadow-xl">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-mono font-bold text-purple-400 uppercase tracking-wider">
                    [ Claymorphism ]
                  </span>
                  <span className="text-[10px] px-2 py-0.5 rounded bg-purple-500/10 text-purple-400 font-mono">
                    radius: 32px
                  </span>
                </div>
                <h3 className="text-lg font-bold text-[var(--text-main)] mb-2">
                  Inflated 3D Plastic Volume
                </h3>
                <p className="text-xs text-[var(--text-muted)] leading-relaxed mb-6">
                  Playful tactile aesthetic with generous rounded boundaries, dual internal inset highlights, and soft floating drop shadows.
                </p>

                {/* Clay Pill Specimen */}
                <div className="py-4 flex justify-center">
                  <div
                    onClick={() => soundEffects.hover()}
                    className="clay-inflated p-6 w-full max-w-xs text-center cursor-pointer hover:scale-105 active:scale-95 transition-transform duration-300"
                  >
                    <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-purple-500 to-indigo-400 text-white flex items-center justify-center mx-auto mb-2 shadow-md">
                      <Sparkles className="w-5 h-5" />
                    </div>
                    <div className="font-bold text-sm text-[var(--text-main)]">Claymorphic Pill</div>
                    <div className="text-[10px] text-[var(--text-dim)] font-mono mt-0.5">Click to Squish</div>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-[var(--border-subtle)] text-[11px] font-mono text-[var(--text-muted)] text-center">
                Distinct inner highlight bevel + deep outer diffusion
              </div>
            </div>
          </div>
        </section>

        {/* ================================================================= */}
        {/* 2. HOVER & CLICK INTERACTIONS SECTION                             */}
        {/* ================================================================= */}
        <section id="hover-interactions" className="space-y-8">
          <div className="border-b border-[var(--border-subtle)] pb-4 flex flex-col sm:flex-row sm:items-end justify-between gap-2">
            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-[var(--accent)] font-bold">
                02 // Micro-Physics & Kinetics
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-[var(--text-main)] mt-1">
                Hover & Click Interactions
              </h2>
            </div>
            <p className="text-xs text-[var(--text-muted)] font-mono">
              Material Ripple · Magnetic Pull · 3D Tilt · Shimmer Hover · Neon Glow
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* 2.1 Material Ripple */}
            <div className="p-6 rounded-3xl border border-[var(--border-strong)] bg-[var(--bg-card)] flex flex-col justify-between space-y-6 shadow-xl">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-mono font-bold text-[var(--accent)] uppercase tracking-wider">
                    [ Material Ripple ]
                  </span>
                  <span className="text-[10px] px-2 py-0.5 rounded bg-[var(--accent)]/10 text-[var(--accent)] font-mono">
                    Coordinate Math
                  </span>
                </div>
                <h3 className="text-lg font-bold text-[var(--text-main)] mb-2">
                  Radial X/Y Coordinate Ripple
                </h3>
                <p className="text-xs text-[var(--text-muted)] leading-relaxed mb-6">
                  Calculates the exact mouse click position relative to element bounds and spawns an expanding wave that dissipates outward.
                </p>

                <div className="flex flex-col items-center gap-3 py-2">
                  <MaterialRippleButton
                    variant="accent"
                    onClick={(e) => {
                      soundEffects.click();
                      const rect = e.currentTarget.getBoundingClientRect();
                      setLastClickCoords({
                        x: Math.round(e.clientX - rect.left),
                        y: Math.round(e.clientY - rect.top),
                      });
                    }}
                    className="w-full"
                  >
                    Click Anywhere on Button
                  </MaterialRippleButton>

                  <div className="text-[11px] font-mono text-[var(--text-dim)]">
                    {lastClickCoords
                      ? `Last Click: X=${lastClickCoords.x}px, Y=${lastClickCoords.y}px`
                      : "Click to log relative coordinate"}
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-[var(--border-subtle)] text-[11px] text-[var(--text-muted)]">
                SVG/CSS expanding keyframe animation with automatic cleanup
              </div>
            </div>

            {/* 2.2 Magnetic Hover */}
            <div className="p-6 rounded-3xl border border-[var(--border-strong)] bg-[var(--bg-card)] flex flex-col justify-between space-y-6 shadow-xl">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-mono font-bold text-[var(--primary-light)] uppercase tracking-wider">
                    [ Magnetic Hover ]
                  </span>
                  <span className="text-[10px] px-2 py-0.5 rounded bg-[var(--primary)]/10 text-[var(--primary-light)] font-mono">
                    Pull Factor: 0.35
                  </span>
                </div>
                <h3 className="text-lg font-bold text-[var(--text-main)] mb-2">
                  Cursor Proximity Attraction
                </h3>
                <p className="text-xs text-[var(--text-muted)] leading-relaxed mb-6">
                  Element tracks mouse position within its proximity radius and springs back smoothly on cursor exit using cubic-bezier easing.
                </p>

                <div className="flex items-center justify-center py-4">
                  <MagneticHover
                    pullFactor={0.4}
                    onClick={() => soundEffects.hover()}
                  >
                    <div className="px-6 py-4 rounded-2xl bg-gradient-to-r from-[var(--primary)] to-[var(--accent)] text-white font-bold text-sm shadow-xl shadow-[var(--brand-glow)] flex items-center gap-2 select-none">
                      <MousePointer className="w-4 h-4 animate-bounce" />
                      <span>Hover Close to Me</span>
                    </div>
                  </MagneticHover>
                </div>
              </div>

              <div className="pt-4 border-t border-[var(--border-subtle)] text-[11px] text-[var(--text-muted)]">
                Calculated via getBoundingClientRect() and delta vector scaling
              </div>
            </div>

            {/* 2.3 3D Tilt Card */}
            <div className="p-6 rounded-3xl border border-[var(--border-strong)] bg-[var(--bg-card)] flex flex-col justify-between space-y-6 shadow-xl">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-mono font-bold text-emerald-400 uppercase tracking-wider">
                    [ 3D Tilt Effect ]
                  </span>
                  <span className="text-[10px] px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 font-mono">
                    Perspective 1000px
                  </span>
                </div>
                <h3 className="text-lg font-bold text-[var(--text-main)] mb-2">
                  Gyro Specular Glare Card
                </h3>
                <p className="text-xs text-[var(--text-muted)] leading-relaxed mb-4">
                  Computes pitch and yaw rotation relative to card center and casts a dynamic radial specular shine across the surface.
                </p>

                <SpotlightCard
                  tiltAmount={14}
                  className="p-5 rounded-2xl border border-[var(--border-subtle)] bg-[var(--bg-main)]/80 shadow-lg text-center cursor-pointer"
                >
                  <div className="w-8 h-8 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto mb-2">
                    <Move className="w-4 h-4" />
                  </div>
                  <div className="text-xs font-bold text-[var(--text-main)]">Move Cursor Over Card</div>
                  <div className="text-[10px] text-[var(--text-dim)] font-mono mt-1">Real-time rotateX/Y tracking</div>
                </SpotlightCard>
              </div>

              <div className="pt-4 border-t border-[var(--border-subtle)] text-[11px] text-[var(--text-muted)]">
                Custom CSS variables --mouse-x / --mouse-y driving radial highlight
              </div>
            </div>

            {/* 2.4 Shimmer Hover Beam */}
            <div className="p-6 rounded-3xl border border-[var(--border-strong)] bg-[var(--bg-card)] flex flex-col justify-between space-y-6 shadow-xl">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-mono font-bold text-amber-400 uppercase tracking-wider">
                    [ Shimmer Hover ]
                  </span>
                  <span className="text-[10px] px-2 py-0.5 rounded bg-amber-500/10 text-amber-400 font-mono">
                    Linear Gloss Beam
                  </span>
                </div>
                <h3 className="text-lg font-bold text-[var(--text-main)] mb-2">
                  Reflective Diagonal Light Beam
                </h3>
                <p className="text-xs text-[var(--text-muted)] leading-relaxed mb-6">
                  A high-velocity gloss streak masked across the container that sweeps rapidly on hover to simulate reflective glass polish.
                </p>

                <div className="flex flex-col gap-3 py-2">
                  <button
                    onClick={() => soundEffects.hover()}
                    className="shimmer-hover w-full py-3.5 px-4 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-700 text-white font-semibold text-xs tracking-wide shadow-md transition-transform hover:scale-[1.02] cursor-pointer"
                  >
                    Hover to Flash Shimmer Beam
                  </button>
                  <div className="shimmer-hover p-4 rounded-xl border border-[var(--border-strong)] bg-[var(--bg-main)]/60 text-xs text-[var(--text-muted)] text-center cursor-pointer">
                    Card Surface with Shimmer Mask
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-[var(--border-subtle)] text-[11px] text-[var(--text-muted)]">
                Utilizes skewX(-20deg) linear-gradient sweep with zero layout shift
              </div>
            </div>

            {/* 2.5 Breathing Neon Glow Border */}
            <div className="p-6 rounded-3xl border border-[var(--border-strong)] bg-[var(--bg-card)] flex flex-col justify-between space-y-6 shadow-xl">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-mono font-bold text-pink-400 uppercase tracking-wider">
                    [ Neon Glow ]
                  </span>
                  <span className="text-[10px] px-2 py-0.5 rounded bg-pink-500/10 text-pink-400 font-mono">
                    Breathing Pulse
                  </span>
                </div>
                <h3 className="text-lg font-bold text-[var(--text-main)] mb-2">
                  Radiant Outer Neon Glow
                </h3>
                <p className="text-xs text-[var(--text-muted)] leading-relaxed mb-6">
                  Simulates gas-discharge neon tube emission with oscillating dual-layer box-shadow and saturated color accents.
                </p>

                <div className="flex justify-center py-3">
                  <div className="neon-glow-active px-6 py-4 rounded-2xl bg-[var(--bg-main)] border-2 border-cyan-400 text-cyan-300 font-bold text-xs tracking-wider uppercase font-mono shadow-xl flex items-center gap-2">
                    <Zap className="w-4 h-4 text-cyan-400" />
                    <span>Neon Active Engine</span>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-[var(--border-subtle)] flex items-center justify-between text-[11px] text-[var(--text-muted)]">
                <span>Oscillates box-shadow depth</span>
                <span className="text-cyan-400 font-mono font-bold">2.8s Cycle</span>
              </div>
            </div>
          </div>
        </section>

        {/* ================================================================= */}
        {/* 3. SCROLL & ANIMATION STATES SECTION                              */}
        {/* ================================================================= */}
        <section id="animation-states" className="space-y-8">
          <div className="border-b border-[var(--border-subtle)] pb-4 flex flex-col sm:flex-row sm:items-end justify-between gap-2">
            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-[var(--accent)] font-bold">
                03 // Temporal Kinetics
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-[var(--text-main)] mt-1">
                Scroll & Animation States
              </h2>
            </div>
            <p className="text-xs text-[var(--text-muted)] font-mono">
              Infinite Marquee · Skeleton Shimmer · Staggered Entrance · SVG Vector Draw
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* 3.1 Infinite Marquee */}
            <div className="p-6 sm:p-8 rounded-3xl border border-[var(--border-strong)] bg-[var(--bg-card)] flex flex-col justify-between space-y-6 shadow-xl">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-mono font-bold text-[var(--accent)] uppercase tracking-wider">
                    [ Infinite Scroll Marquee ]
                  </span>
                  <span className="text-[10px] px-2 py-0.5 rounded bg-[var(--accent)]/10 text-[var(--accent)] font-mono">
                    Hardware translateX
                  </span>
                </div>
                <h3 className="text-lg font-bold text-[var(--text-main)] mb-1">
                  Seamless Looping Technology Rail
                </h3>
                <p className="text-xs text-[var(--text-muted)] leading-relaxed mb-6">
                  Infinite ticker moving continuously along the X axis without stutter or visible seams. Pauses automatically on hover.
                </p>

                {/* Marquee Component */}
                <div className="p-2 rounded-2xl bg-[var(--bg-main)] border border-[var(--border-subtle)]">
                  <InfiniteMarquee items={marqueePartners} speed={marqueeSpeed} />
                </div>
              </div>

              {/* Speed Controls */}
              <div className="pt-4 border-t border-[var(--border-subtle)] flex items-center justify-between">
                <span className="text-xs text-[var(--text-muted)]">Ticker Speed</span>
                <div className="flex items-center gap-2">
                  {[30, 20, 10].map((s) => (
                    <button
                      key={s}
                      onClick={() => {
                        soundEffects.hover();
                        setMarqueeSpeed(s);
                      }}
                      className={`px-2.5 py-1 rounded-lg text-xs font-mono font-bold transition-colors cursor-pointer ${
                        marqueeSpeed === s
                          ? "bg-[var(--primary)] text-white"
                          : "bg-[var(--bg-main)] text-[var(--text-muted)] hover:text-[var(--text-main)] border border-[var(--border-subtle)]"
                      }`}
                    >
                      {s === 30 ? "Slow" : s === 20 ? "Normal" : "Fast"}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* 3.2 Skeleton Shimmer Loading States */}
            <div className="p-6 sm:p-8 rounded-3xl border border-[var(--border-strong)] bg-[var(--bg-card)] flex flex-col justify-between space-y-6 shadow-xl">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-mono font-bold text-amber-400 uppercase tracking-wider">
                    [ Skeleton Shimmer ]
                  </span>
                  <button
                    onClick={() => {
                      soundEffects.click();
                      setSkeletonLoading(!skeletonLoading);
                    }}
                    className="text-[10px] px-2.5 py-1 rounded-md bg-[var(--primary)]/15 text-[var(--primary-light)] border border-[var(--primary)]/30 font-mono font-bold hover:bg-[var(--primary)] hover:text-white transition-colors cursor-pointer"
                  >
                    Toggle: {skeletonLoading ? "Show Content" : "Show Skeleton"}
                  </button>
                </div>
                <h3 className="text-lg font-bold text-[var(--text-main)] mb-1">
                  Layout Placeholder Loading Shimmer
                </h3>
                <p className="text-xs text-[var(--text-muted)] leading-relaxed mb-6">
                  Continuous left-to-right gradient wash indicating active data fetching while matching target card geometry.
                </p>

                {/* Skeleton vs Content */}
                {skeletonLoading ? (
                  <div className="p-5 rounded-2xl bg-[var(--bg-main)] border border-[var(--border-subtle)] space-y-3 animate-in fade-in duration-300">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl skeleton-shimmer shrink-0" />
                      <div className="space-y-1.5 flex-1">
                        <div className="h-4 w-3/4 rounded skeleton-shimmer" />
                        <div className="h-3 w-1/2 rounded skeleton-shimmer" />
                      </div>
                    </div>
                    <div className="h-16 w-full rounded-xl skeleton-shimmer" />
                    <div className="flex gap-2">
                      <div className="h-6 w-16 rounded skeleton-shimmer" />
                      <div className="h-6 w-20 rounded skeleton-shimmer" />
                    </div>
                  </div>
                ) : (
                  <div className="p-5 rounded-2xl bg-[var(--bg-main)] border border-emerald-500/40 space-y-3 animate-in fade-in duration-300">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center font-bold">
                        <CheckCircle2 className="w-5 h-5" />
                      </div>
                      <div>
                        <div className="text-sm font-bold text-[var(--text-main)]">Data Ingestion Complete</div>
                        <div className="text-xs text-[var(--text-muted)]">Surat HQ Enterprise Cluster connected</div>
                      </div>
                    </div>
                    <p className="text-xs text-[var(--text-main)] leading-relaxed">
                      API payload loaded with 100% telemetry fidelity in 12ms.
                    </p>
                    <div className="flex gap-2">
                      <span className="px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-500 text-[10px] font-mono font-bold">Ready</span>
                      <span className="px-2 py-0.5 rounded bg-blue-500/10 text-blue-400 text-[10px] font-mono font-bold">HTTP/2</span>
                    </div>
                  </div>
                )}
              </div>

              <div className="pt-4 border-t border-[var(--border-subtle)] text-[11px] text-[var(--text-muted)]">
                Utilizes moving linear-gradient background-position animation
              </div>
            </div>

            {/* 3.3 Staggered Entrance Animations */}
            <div className="p-6 sm:p-8 rounded-3xl border border-[var(--border-strong)] bg-[var(--bg-card)] flex flex-col justify-between space-y-6 shadow-xl">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-mono font-bold text-indigo-400 uppercase tracking-wider">
                    [ Staggered Entrance ]
                  </span>
                  <button
                    onClick={() => {
                      soundEffects.click();
                      setStaggerKey((prev) => prev + 1);
                    }}
                    className="flex items-center gap-1.5 text-[10px] px-2.5 py-1 rounded-md bg-[var(--primary)]/15 text-[var(--primary-light)] border border-[var(--primary)]/30 font-mono font-bold hover:bg-[var(--primary)] hover:text-white transition-colors cursor-pointer"
                  >
                    <RefreshCw className="w-3 h-3" />
                    <span>Re-play Entrance</span>
                  </button>
                </div>
                <h3 className="text-lg font-bold text-[var(--text-main)] mb-1">
                  Sequential Cascade Micro-Delays
                </h3>
                <p className="text-xs text-[var(--text-muted)] leading-relaxed mb-6">
                  Grid items slide and fade into view sequentially using incremented animation delay tokens (100ms, 200ms, 300ms, 400ms).
                </p>

                {/* Staggered Grid */}
                <div key={staggerKey} className="grid grid-cols-2 gap-3">
                  {[
                    { title: "Architecture", delay: "0.05s", color: "text-cyan-400" },
                    { title: "Microservices", delay: "0.15s", color: "text-blue-400" },
                    { title: "AI Swarms", delay: "0.25s", color: "text-purple-400" },
                    { title: "Edge Deploy", delay: "0.35s", color: "text-emerald-400" },
                  ].map((card, idx) => (
                    <div
                      key={idx}
                      style={{ animationDelay: card.delay }}
                      className="p-3.5 rounded-xl bg-[var(--bg-main)] border border-[var(--border-subtle)] animate-in fade-in slide-in-from-bottom-4 duration-500 fill-mode-both"
                    >
                      <div className={`text-xs font-mono font-bold ${card.color}`}>Card 0{idx + 1}</div>
                      <div className="text-xs font-bold text-[var(--text-main)] mt-0.5">{card.title}</div>
                      <div className="text-[10px] text-[var(--text-dim)] font-mono mt-1">delay: {card.delay}</div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-[var(--border-subtle)] text-[11px] text-[var(--text-muted)]">
                Creates smooth perceived performance and guided visual hierarchy
              </div>
            </div>

            {/* 3.4 SVG Real-Time Line Drawing */}
            <div className="p-6 sm:p-8 rounded-3xl border border-[var(--border-strong)] bg-[var(--bg-card)] flex flex-col justify-between space-y-6 shadow-xl">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-mono font-bold text-pink-400 uppercase tracking-wider">
                    [ SVG Line Drawing ]
                  </span>
                  <button
                    onClick={() => {
                      soundEffects.click();
                      setSvgKey((prev) => prev + 1);
                    }}
                    className="flex items-center gap-1.5 text-[10px] px-2.5 py-1 rounded-md bg-[var(--primary)]/15 text-[var(--primary-light)] border border-[var(--primary)]/30 font-mono font-bold hover:bg-[var(--primary)] hover:text-white transition-colors cursor-pointer"
                  >
                    <Play className="w-3 h-3" />
                    <span>Redraw Path</span>
                  </button>
                </div>
                <h3 className="text-lg font-bold text-[var(--text-main)] mb-1">
                  Stroke Dash-Offset Path Tracer
                </h3>
                <p className="text-xs text-[var(--text-muted)] leading-relaxed mb-6">
                  Vector path drawing in real-time by animating stroke-dashoffset from total path length down to zero.
                </p>

                {/* SVG Vector Sandbox */}
                <div key={svgKey} className="p-4 rounded-2xl bg-[var(--bg-main)] border border-[var(--border-subtle)] flex items-center justify-center">
                  <svg width="220" height="110" viewBox="0 0 220 110" fill="none" className="overflow-visible">
                    {/* Background faint path */}
                    <path
                      d="M 10 55 C 40 10, 70 10, 110 55 C 150 100, 180 100, 210 55"
                      stroke="currentColor"
                      strokeWidth="2"
                      className="text-[var(--border-subtle)]"
                    />
                    {/* Animated drawing path */}
                    <path
                      d="M 10 55 C 40 10, 70 10, 110 55 C 150 100, 180 100, 210 55"
                      stroke="url(#svgDrawGradient)"
                      strokeWidth="3.5"
                      strokeLinecap="round"
                      className="svg-draw-path"
                    />
                    {/* Glowing nodes */}
                    <circle cx="10" cy="55" r="4" fill="#0e50d7" />
                    <circle cx="110" cy="55" r="5" fill="#00d4ff" />
                    <circle cx="210" cy="55" r="4" fill="#38bdf8" />
                    <defs>
                      <linearGradient id="svgDrawGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#0e50d7" />
                        <stop offset="50%" stopColor="#00d4ff" />
                        <stop offset="100%" stopColor="#38bdf8" />
                      </linearGradient>
                    </defs>
                  </svg>
                </div>
              </div>

              <div className="pt-4 border-t border-[var(--border-subtle)] text-[11px] text-[var(--text-muted)]">
                Driven by stroke-dasharray: 600 and CSS keyframe loop
              </div>
            </div>
          </div>
        </section>

        {/* ================================================================= */}
        {/* 4. MASTER BENTO GRID LAYOUT SECTION                               */}
        {/* ================================================================= */}
        <section id="bento-grid" className="space-y-8">
          <div className="border-b border-[var(--border-subtle)] pb-4 flex flex-col sm:flex-row sm:items-end justify-between gap-2">
            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-[var(--accent)] font-bold">
                04 // Structural Composition
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-[var(--text-main)] mt-1">
                Asymmetrical Master Bento Grid
              </h2>
            </div>
            <p className="text-xs text-[var(--text-muted)] font-mono">
              Combining all effects into a unified enterprise interface
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {/* Bento Item 1: Large Featured Spanning 2 Columns */}
            <SpotlightCard className="md:col-span-2 lg:col-span-2 p-8 rounded-3xl glass-panel border border-[var(--border-strong)] flex flex-col justify-between space-y-6 shadow-2xl relative overflow-hidden">
              <div className="space-y-3">
                <div className="flex items-center gap-2 text-xs font-mono text-[var(--accent)] font-bold uppercase">
                  <Terminal className="w-4 h-4" />
                  <span>Telemetry Mesh // Node 01</span>
                </div>
                <h3 className="text-2xl font-bold text-[var(--text-main)]">
                  Autonomous Edge Infrastructure
                </h3>
                <p className="text-sm text-[var(--text-muted)] leading-relaxed">
                  Distributed across 14 global data centers with sub-second DNS resolution, encrypted zero-trust pipelines, and automated multi-tenant database partitioning.
                </p>
              </div>

              <div className="grid grid-cols-3 gap-3 pt-4 border-t border-[var(--border-subtle)] text-center">
                <div className="p-3 rounded-2xl bg-[var(--bg-main)]/60">
                  <div className="text-xl font-bold text-[var(--accent)]">12ms</div>
                  <div className="text-[10px] text-[var(--text-dim)] uppercase">Global P99</div>
                </div>
                <div className="p-3 rounded-2xl bg-[var(--bg-main)]/60">
                  <div className="text-xl font-bold text-[var(--primary-light)]">100%</div>
                  <div className="text-[10px] text-[var(--text-dim)] uppercase">IP Handover</div>
                </div>
                <div className="p-3 rounded-2xl bg-[var(--bg-main)]/60">
                  <div className="text-xl font-bold text-emerald-500">70+</div>
                  <div className="text-[10px] text-[var(--text-dim)] uppercase">Deliveries</div>
                </div>
              </div>
            </SpotlightCard>

            {/* Bento Item 2: Vertical Pill */}
            <div className="p-6 rounded-3xl clay-inflated border border-[var(--border-subtle)] flex flex-col justify-between space-y-4">
              <div>
                <div className="p-3 rounded-2xl bg-[var(--primary)] text-white w-max mb-4 shadow-lg shadow-[var(--brand-glow)]">
                  <Flame className="w-5 h-5" />
                </div>
                <h4 className="text-lg font-bold text-[var(--text-main)] mb-1">
                  Sprint Velocity
                </h4>
                <p className="text-xs text-[var(--text-muted)] leading-relaxed">
                  Agile two-week deliverable cadence with live staging preview URLs and continuous client sprint demos.
                </p>
              </div>
              <div className="p-2.5 rounded-xl bg-[var(--bg-main)]/50 text-[11px] font-mono text-[var(--text-dim)] text-center">
                Next Demo: In 4 Days
              </div>
            </div>

            {/* Bento Item 3: Live Verification */}
            <div className="p-6 rounded-3xl glass-panel border border-[var(--border-strong)] flex flex-col justify-between space-y-4 shadow-xl">
              <div>
                <div className="p-3 rounded-2xl bg-emerald-500/20 text-emerald-500 border border-emerald-500/30 w-max mb-4">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <h4 className="text-lg font-bold text-[var(--text-main)] mb-1">
                  NDA & Security
                </h4>
                <p className="text-xs text-[var(--text-muted)] leading-relaxed">
                  Bank-grade mutual confidentiality with immediate code repository assignment and zero subcontractor leakage.
                </p>
              </div>
              <div className="flex items-center gap-1.5 text-xs text-emerald-500 font-bold">
                <CheckCircle2 className="w-4 h-4" />
                <span>Verified Clean Audit</span>
              </div>
            </div>
          </div>
        </section>

        {/* Global CTA Banner */}
        <section className="p-8 sm:p-12 rounded-3xl glass-panel border border-[var(--border-strong)] relative overflow-hidden text-center space-y-6 shadow-2xl">
          <div className="max-w-2xl mx-auto space-y-3">
            <h2 className="text-2xl sm:text-4xl font-extrabold text-[var(--text-main)]">
              Ready to Engineer with These Standards?
            </h2>
            <p className="text-sm text-[var(--text-muted)] leading-relaxed">
              Every production system we craft incorporates these world-class micro-interactions, responsive architectures, and accessible design principles.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <Link href="/">
              <MaterialRippleButton variant="accent">
                <span>Explore V1 Production Showcase</span>
                <ArrowRight className="w-4 h-4" />
              </MaterialRippleButton>
            </Link>
            <Link href="/v2">
              <button
                onClick={() => soundEffects.click()}
                className="px-6 py-3 rounded-xl border border-[var(--border-strong)] bg-[var(--bg-card)] hover:bg-[var(--border-subtle)] text-xs font-semibold text-[var(--text-main)] transition-colors cursor-pointer"
              >
                Inspect V2 3D Hardware Deck
              </button>
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
}
