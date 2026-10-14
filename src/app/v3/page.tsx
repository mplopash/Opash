"use client";

import React, { useState, useEffect, useRef } from "react";
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
  Maximize2,
  MapPin,
  Mail,
  Phone,
  Send,
  Globe2,
  Cpu,
  Smartphone,
  Server,
  FileText
} from "lucide-react";
import { useTheme } from "@/context/ThemeContext";
import { soundEffects } from "@/lib/soundEffects";
import { MaterialRippleButton } from "@/components/effects/MaterialRippleButton";
import { MagneticHover } from "@/components/effects/MagneticHover";
import { AuroraBackground } from "@/components/effects/AuroraBackground";
import { InfiniteMarquee } from "@/components/effects/InfiniteMarquee";
import { SpotlightCard } from "@/components/common/SpotlightCard";
import { QuoteModal } from "@/components/sections/QuoteModal";

export default function CyberSpatialV3Page() {
  const { mode, setMode } = useTheme();
  const isLight = mode === "light";

  const [quoteModalOpen, setQuoteModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState("Custom Software Development");

  // Rotating Hero Words
  const heroWords = [
    "Autonomous AI Swarms",
    "Liquid Glass Web Systems",
    "60 FPS Native Mobile Apps",
    "Enterprise Cloud Infrastructure"
  ];
  const [wordIdx, setWordIdx] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setWordIdx((prev) => (prev + 1) % heroWords.length);
    }, 2800);
    return () => clearInterval(timer);
  }, [heroWords.length]);

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

  // Marquee speed
  const [marqueeSpeed, setMarqueeSpeed] = useState<number>(20);

  // Material click coordinates logger
  const [lastClickCoords, setLastClickCoords] = useState<{ x: number; y: number } | null>(null);

  // Estimator States
  const [calcTier, setCalcTier] = useState<"ai" | "saas" | "mobile" | "enterprise">("ai");
  const [calcScale, setCalcScale] = useState<"mvp" | "scale" | "enterprise">("scale");
  const [telemetryAddons, setTelemetryAddons] = useState<string[]>(["soc2", "k8s"]);

  const openQuote = (service = "Custom Software Development") => {
    soundEffects.click();
    setSelectedService(service);
    setQuoteModalOpen(true);
  };

  const calculateEstimate = () => {
    let base = 8500;
    if (calcTier === "ai") base = 14000;
    if (calcTier === "saas") base = 8000;
    if (calcTier === "mobile") base = 9500;
    if (calcTier === "enterprise") base = 21000;

    let mult = 1.0;
    if (calcScale === "mvp") mult = 0.7;
    if (calcScale === "enterprise") mult = 2.1;

    const total = Math.round((base * mult + telemetryAddons.length * 1500) / 500) * 500;
    const velocity = calcScale === "mvp" ? "4 WEEKS" : calcScale === "scale" ? "8 WEEKS" : "14 WEEKS";
    return { total: `$${total.toLocaleString()}`, velocity };
  };

  const est = calculateEstimate();

  const toggleAddon = (id: string) => {
    soundEffects.click();
    if (telemetryAddons.includes(id)) {
      setTelemetryAddons(telemetryAddons.filter((i) => i !== id));
    } else {
      setTelemetryAddons([...telemetryAddons, id]);
    }
  };

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
      {/* ============================================================ */}
      {/* 1. TOP CYBER SPATIAL HEADER                                  */}
      {/* ============================================================ */}
      <header className="sticky top-0 z-40 backdrop-blur-xl bg-[var(--bg-main)]/80 border-b border-[var(--border-subtle)] py-4 px-6 sm:px-10 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Link href="/v3" className="flex items-center gap-2.5 group">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-[var(--primary)] to-[var(--accent)] text-white font-bold flex items-center justify-center shadow-md shadow-[var(--brand-glow)]">
              O
            </div>
            <div>
              <div className="font-extrabold text-base tracking-tight flex items-center gap-1.5">
                <span>Opash</span>
                <span className="text-[var(--accent)] font-mono text-xs px-2 py-0.5 rounded-md bg-[var(--accent)]/10 border border-[var(--accent)]/30">
                  CYBER V3
                </span>
              </div>
              <div className="text-[10px] text-[var(--text-dim)] uppercase tracking-wider font-mono">
                Spatial UI & Kinetic Architecture
              </div>
            </div>
          </Link>
        </div>

        {/* Quick Nav Anchors */}
        <nav className="hidden lg:flex items-center gap-1 text-xs font-semibold">
          <a href="#hero" className="px-3 py-1.5 rounded-lg text-[var(--text-muted)] hover:text-[var(--text-main)] hover:bg-[var(--border-subtle)] transition-colors">
            Overview
          </a>
          <a href="#visual-styles" className="px-3 py-1.5 rounded-lg text-[var(--text-muted)] hover:text-[var(--text-main)] hover:bg-[var(--border-subtle)] transition-colors">
            UI Effects Studio
          </a>
          <a href="#services" className="px-3 py-1.5 rounded-lg text-[var(--text-muted)] hover:text-[var(--text-main)] hover:bg-[var(--border-subtle)] transition-colors">
            Capabilities
          </a>
          <a href="#proof" className="px-3 py-1.5 rounded-lg text-[var(--text-muted)] hover:text-[var(--text-main)] hover:bg-[var(--border-subtle)] transition-colors">
            Case Studies
          </a>
          <a href="#estimator" className="px-3 py-1.5 rounded-lg text-[var(--text-muted)] hover:text-[var(--text-main)] hover:bg-[var(--border-subtle)] transition-colors">
            Scope Calculator
          </a>
          <a href="#contact" className="px-3 py-1.5 rounded-lg text-[var(--text-muted)] hover:text-[var(--text-main)] hover:bg-[var(--border-subtle)] transition-colors">
            Surat Dispatch
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

          <MaterialRippleButton onClick={() => openQuote()} variant="accent">
            <span>Engage Squad</span>
            <ArrowRight className="w-4 h-4" />
          </MaterialRippleButton>
        </div>
      </header>

      {/* ============================================================ */}
      {/* 2. PROMINENT HIGH-IMPACT CYBER SPATIAL HERO                  */}
      {/* ============================================================ */}
      <section id="hero" className="relative pt-24 pb-20 md:pt-36 md:pb-28 px-6 lg:px-12 max-w-7xl mx-auto overflow-hidden">
        {/* Ambient Aurora Glowing Backdrop */}
        <AuroraBackground className="absolute inset-0 pointer-events-none opacity-40 z-0" />

        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[var(--primary)]/15 border border-[var(--primary)]/30 text-xs font-mono font-bold text-[var(--accent)] uppercase tracking-wider">
              <Sparkles className="w-4 h-4 text-[var(--accent)]" />
              <span>SPATIAL UI ARCHITECTURE // CYBER KINETIC V3</span>
            </div>

            <h1 className="text-4xl sm:text-6xl font-black tracking-tight leading-[1.08] text-[var(--text-main)]">
              Next-Generation <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--primary)] via-[var(--accent)] to-sky-300">
                {heroWords[wordIdx]}
              </span>{" "}
              Engineered at Scale.
            </h1>

            <p className="text-base sm:text-lg text-[var(--text-muted)] leading-relaxed max-w-xl">
              We architect high-concurrency cloud software, autonomous AI agent swarms, and cross-platform digital experiences engineered with sub-second performance and tactile kinetic polish.
            </p>

            {/* Quick Metrics Matrix */}
            <div className="grid grid-cols-3 gap-3 pt-2">
              <div className="p-4 rounded-2xl glass-panel border border-[var(--border-subtle)] text-center">
                <div className="text-2xl sm:text-3xl font-extrabold text-[var(--accent)]">70+</div>
                <div className="text-[11px] text-[var(--text-dim)] uppercase font-mono mt-0.5">Enterprise Ships</div>
              </div>
              <div className="p-4 rounded-2xl glass-panel border border-[var(--border-subtle)] text-center">
                <div className="text-2xl sm:text-3xl font-extrabold text-[var(--primary-light)]">100%</div>
                <div className="text-[11px] text-[var(--text-dim)] uppercase font-mono mt-0.5">IP Assignment</div>
              </div>
              <div className="p-4 rounded-2xl glass-panel border border-[var(--border-subtle)] text-center">
                <div className="text-2xl sm:text-3xl font-extrabold text-emerald-500">12ms</div>
                <div className="text-[11px] text-[var(--text-dim)] uppercase font-mono mt-0.5">Global P99</div>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-4 pt-3">
              <MagneticHover pullFactor={0.3}>
                <MaterialRippleButton
                  onClick={() => openQuote()}
                  variant="accent"
                  className="px-8 py-4 rounded-2xl text-sm font-extrabold uppercase tracking-wider"
                >
                  <span>Initiate Project Scope</span>
                  <ArrowRight className="w-4 h-4" />
                </MaterialRippleButton>
              </MagneticHover>

              <a
                href="#visual-styles"
                onClick={() => soundEffects.pop()}
                className="px-8 py-4 rounded-2xl border border-[var(--border-strong)] bg-[var(--bg-card)] hover:bg-[var(--border-subtle)] font-bold text-sm tracking-wider uppercase transition-colors"
              >
                Launch Effects Studio
              </a>
            </div>
          </div>

          {/* Right Floating Holographic Specimen with Neon Border */}
          <div className="lg:col-span-5">
            <SpotlightCard
              tiltAmount={14}
              className="p-7 rounded-3xl glass-panel border-2 border-cyan-400/60 shadow-2xl relative overflow-hidden neon-glow-active"
            >
              <div className="flex items-center justify-between pb-4 border-b border-[var(--border-subtle)]">
                <div className="flex items-center gap-2">
                  <Terminal className="w-4 h-4 text-cyan-400" />
                  <span className="text-xs font-mono font-bold uppercase text-[var(--text-main)]">
                    KINETIC ENGINE // SURAT NODE
                  </span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 shadow-[0_0_8px_#34d399]" />
                  <span className="text-[10px] font-mono font-bold text-emerald-400">ONLINE</span>
                </div>
              </div>

              <div className="py-6 space-y-4">
                <div className="p-4 rounded-2xl bg-[var(--bg-main)]/80 border border-[var(--border-subtle)] space-y-2 font-mono text-xs">
                  <div className="text-[var(--text-dim)]">// Real-time autonomous orchestration</div>
                  <div className="text-cyan-400 font-bold">$ opash-mesh --cluster surat-hq --mode production</div>
                  <div className="text-emerald-400">✓ 50+ In-House Engineers Connected</div>
                  <div className="text-blue-400">✓ Upwork Top-Rated 100% Score Verified</div>
                  <div className="text-[var(--text-main)]">✓ Zero Subcontractors. Strict Mutual NDA.</div>
                </div>

                <div className="grid grid-cols-2 gap-3 text-xs font-mono">
                  <div className="p-3 rounded-xl bg-[var(--bg-main)]/60 border border-[var(--border-subtle)]">
                    <span className="text-[var(--text-dim)] block text-[10px]">ENCRYPTION</span>
                    <span className="font-bold text-cyan-400">AES-256 GCM</span>
                  </div>
                  <div className="p-3 rounded-xl bg-[var(--bg-main)]/60 border border-[var(--border-subtle)]">
                    <span className="text-[var(--text-dim)] block text-[10px]">SLA TARGET</span>
                    <span className="font-bold text-emerald-400">99.99% Uptime</span>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-[var(--border-subtle)] flex items-center justify-between text-xs text-[var(--text-muted)] font-mono">
                <span>SURAT, GUJARAT, INDIA</span>
                <span className="text-[var(--accent)] font-bold">EST. 2017</span>
              </div>
            </SpotlightCard>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 3. COMPLETE UI EFFECTS SHOWCASE PLAYGROUND                   */}
      {/* ============================================================ */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">
        {/* 3.1 Visual Design Styles */}
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
              Glassmorphism · Neumorphism · Claymorphism · Bento Grid · Aurora
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Glassmorphism Card */}
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

            {/* Neumorphism (Soft UI) Card */}
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

            {/* Claymorphic Card */}
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

        {/* 3.2 Hover & Click Interactions */}
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
            {/* Material Ripple */}
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

            {/* Magnetic Hover */}
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

            {/* 3D Tilt Card */}
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

            {/* Shimmer Hover Beam */}
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

            {/* Breathing Neon Glow Border */}
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

        {/* 3.3 Scroll & Animation States */}
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
            {/* Infinite Marquee */}
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

                <div className="p-2 rounded-2xl bg-[var(--bg-main)] border border-[var(--border-subtle)]">
                  <InfiniteMarquee items={marqueePartners} speed={marqueeSpeed} />
                </div>
              </div>

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

            {/* Skeleton Shimmer */}
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

                {skeletonLoading ? (
                  <div className="p-5 rounded-2xl bg-[var(--bg-main)] border border-[var(--border-subtle)] space-y-3">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl skeleton-shimmer shrink-0" />
                      <div className="space-y-1.5 flex-1">
                        <div className="h-4 w-3/4 rounded skeleton-shimmer" />
                        <div className="h-3 w-1/2 rounded skeleton-shimmer" />
                      </div>
                    </div>
                    <div className="h-16 w-full rounded-xl skeleton-shimmer" />
                  </div>
                ) : (
                  <div className="p-5 rounded-2xl bg-[var(--bg-main)] border border-emerald-500/40 space-y-3">
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
                  </div>
                )}
              </div>

              <div className="pt-4 border-t border-[var(--border-subtle)] text-[11px] text-[var(--text-muted)]">
                Utilizes moving linear-gradient background-position animation
              </div>
            </div>
          </div>
        </section>

        {/* 3.4 Capabilities Section (Full Services) */}
        <section id="services" className="space-y-8">
          <div className="border-b border-[var(--border-subtle)] pb-4 flex flex-col sm:flex-row sm:items-end justify-between gap-2">
            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-[var(--accent)] font-bold">
                04 // Core Engineering Disciplines
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-[var(--text-main)] mt-1">
                Full-Stack Systems Capabilities
              </h2>
            </div>
            <p className="text-xs text-[var(--text-muted)] font-mono">
              AI · Cloud · High-Concurrency Web · Mobile
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Autonomous AI & Agents",
                desc: "Custom RAG multi-agent swarms, customized LLM reasoning pipelines, automated workflows, and private enterprise fine-tuning.",
                tags: ["PyTorch", "LangChain", "Vector RAG"],
              },
              {
                title: "High-Concurrency SaaS",
                desc: "Next.js 16 Edge architecture, performant database indexing, and reactive dashboards handling millions in transactions.",
                tags: ["Next.js", "React 19", "TypeScript"],
              },
              {
                title: "60 FPS Native Mobile Apps",
                desc: "Tactile haptic cross-platform applications built with Flutter and React Native with biometrics and offline synchronization.",
                tags: ["Flutter", "React Native", "iOS / Android"],
              },
              {
                title: "DevOps & Cloud Clusters",
                desc: "Kubernetes orchestration, zero-downtime blue/green deployments, automated CI/CD, and Terraform infrastructure as code.",
                tags: ["AWS", "Docker / K8s", "Terraform"],
              },
              {
                title: "Enterprise Modernization",
                desc: "Deconstruct legacy monolithic code into event-driven resilient microservices with zero downtime and strict fault isolation.",
                tags: ["PostgreSQL", "Kafka", "GraphQL"],
              },
              {
                title: "Institutional Code Audit",
                desc: "Thorough pen-testing, query profiling, security hardening, and institutional investor due-diligence preparation.",
                tags: ["SOC-2", "HIPAA", "ISO 27001"],
              },
            ].map((srv, idx) => (
              <div
                key={idx}
                className="p-7 rounded-3xl glass-panel border border-[var(--border-strong)] flex flex-col justify-between shadow-xl"
              >
                <div>
                  <h3 className="text-lg font-bold text-[var(--text-main)] mb-2">{srv.title}</h3>
                  <p className="text-xs text-[var(--text-muted)] leading-relaxed mb-6">{srv.desc}</p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {srv.tags.map((tag, tIdx) => (
                      <span key={tIdx} className="text-[11px] font-mono px-2.5 py-1 rounded-lg bg-[var(--border-subtle)] text-[var(--accent)]">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                <button
                  onClick={() => openQuote(srv.title)}
                  className="w-full py-3 rounded-xl border border-[var(--border-strong)] bg-[var(--bg-main)]/60 text-xs font-bold uppercase tracking-wider text-[var(--text-main)] hover:bg-[var(--primary)] hover:text-white transition-colors cursor-pointer"
                >
                  Configure Module
                </button>
              </div>
            ))}
          </div>
        </section>

        {/* 3.5 Verified Client Proof */}
        <section id="proof" className="space-y-8">
          <div className="border-b border-[var(--border-subtle)] pb-4 flex flex-col sm:flex-row sm:items-end justify-between gap-2">
            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-[var(--accent)] font-bold">
                05 // Verified Client ROI
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-[var(--text-main)] mt-1">
                Declassified Production Case Studies
              </h2>
            </div>
            <p className="text-xs text-[var(--text-muted)] font-mono">
              Measurable Business Impact
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-7 rounded-3xl glass-panel border border-[var(--border-strong)] flex flex-col justify-between shadow-xl">
              <div>
                <div className="text-xs font-mono text-[var(--accent)] font-bold mb-1">INSURETECH // MENA</div>
                <h3 className="text-2xl font-black mb-2">eSanad</h3>
                <p className="text-xs text-[var(--text-muted)] leading-relaxed mb-6">
                  Automated quotation and policy aggregation system handling millions in real-time underwriting.
                </p>
                <div className="p-5 rounded-2xl bg-[var(--bg-main)]/60 text-center mb-6 border border-[var(--border-subtle)]">
                  <div className="text-4xl font-extrabold text-[var(--accent)] mb-1">+340%</div>
                  <div className="text-xs text-[var(--text-dim)] font-mono">Policy Conversion Speed</div>
                </div>
              </div>
              <div className="text-xs text-[var(--text-dim)] flex justify-between font-mono">
                <span>Next.js + Node</span>
                <span className="text-emerald-500 font-bold">Verified Client</span>
              </div>
            </div>

            <div className="p-7 rounded-3xl glass-panel border border-[var(--border-strong)] flex flex-col justify-between shadow-xl">
              <div>
                <div className="text-xs font-mono text-blue-400 font-bold mb-1">HEALTHCARE // USA</div>
                <h3 className="text-2xl font-black mb-2">UCareHQ</h3>
                <p className="text-xs text-[var(--text-muted)] leading-relaxed mb-6">
                  HIPAA-compliant telemedicine platform with live WebRTC triage and patient scheduling.
                </p>
                <div className="p-5 rounded-2xl bg-[var(--bg-main)]/60 text-center mb-6 border border-[var(--border-subtle)]">
                  <div className="text-4xl font-extrabold text-blue-400 mb-1">120k+</div>
                  <div className="text-xs text-[var(--text-dim)] font-mono">Patients Managed</div>
                </div>
              </div>
              <div className="text-xs text-[var(--text-dim)] flex justify-between font-mono">
                <span>React + AWS HIPAA</span>
                <span className="text-emerald-500 font-bold">Verified Client</span>
              </div>
            </div>

            <div className="p-7 rounded-3xl glass-panel border border-[var(--border-strong)] flex flex-col justify-between shadow-xl">
              <div>
                <div className="text-xs font-mono text-sky-400 font-bold mb-1">LOGISTICS // GLOBAL</div>
                <h3 className="text-2xl font-black mb-2">IKO International</h3>
                <p className="text-xs text-[var(--text-muted)] leading-relaxed mb-6">
                  Industrial manufacturing supply chain synchronization tool with real-time inventory intelligence.
                </p>
                <div className="p-5 rounded-2xl bg-[var(--bg-main)]/60 text-center mb-6 border border-[var(--border-subtle)]">
                  <div className="text-4xl font-extrabold text-sky-400 mb-1">99.98%</div>
                  <div className="text-xs text-[var(--text-dim)] font-mono">Reconciliation Rate</div>
                </div>
              </div>
              <div className="text-xs text-[var(--text-dim)] flex justify-between font-mono">
                <span>Python + PostgreSQL</span>
                <span className="text-emerald-500 font-bold">Verified Client</span>
              </div>
            </div>
          </div>
        </section>

        {/* 3.6 Interactive Project Scope Estimator */}
        <section id="estimator" className="space-y-8">
          <div className="border-b border-[var(--border-subtle)] pb-4 flex flex-col sm:flex-row sm:items-end justify-between gap-2">
            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-[var(--accent)] font-bold">
                06 // Interactive Calculator
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-[var(--text-main)] mt-1">
                Project Scope & Pricing Matrix
              </h2>
            </div>
            <p className="text-xs text-[var(--text-muted)] font-mono">
              Transparent Sprint Engineering
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-7 space-y-6">
              <div className="p-6 rounded-3xl glass-panel border border-[var(--border-strong)]">
                <label className="text-xs font-mono font-bold uppercase tracking-wider block mb-4">
                  1. Platform Category
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  {[
                    { id: "ai", label: "AI Swarms" },
                    { id: "saas", label: "Web SaaS" },
                    { id: "mobile", label: "Mobile Apps" },
                    { id: "enterprise", label: "Enterprise" },
                  ].map((t) => (
                    <button
                      key={t.id}
                      onClick={() => {
                        soundEffects.click();
                        setCalcTier(t.id as any);
                      }}
                      className={`p-3 rounded-2xl text-xs font-bold transition-all cursor-pointer ${
                        calcTier === t.id
                          ? "bg-[var(--primary)] text-white shadow-lg"
                          : "bg-[var(--bg-main)]/60 text-[var(--text-muted)] hover:text-[var(--text-main)] border border-[var(--border-subtle)]"
                      }`}
                    >
                      {t.label}
                    </button>
                  ))}
                </div>
              </div>

              <div className="p-6 rounded-3xl glass-panel border border-[var(--border-strong)]">
                <label className="text-xs font-mono font-bold uppercase tracking-wider block mb-4">
                  2. Architecture Scale & Addons
                </label>
                <div className="grid grid-cols-2 gap-3">
                  {[
                    { id: "soc2", label: "SOC-2 & HIPAA Policy" },
                    { id: "k8s", label: "Multi-Region Kubernetes" },
                    { id: "rag", label: "Vector Search Memory" },
                    { id: "audit", label: "Third-Party Pen-Test" },
                  ].map((addon) => (
                    <button
                      key={addon.id}
                      onClick={() => toggleAddon(addon.id)}
                      className={`p-3 rounded-xl text-xs font-mono font-bold transition-all cursor-pointer text-left flex items-center justify-between ${
                        telemetryAddons.includes(addon.id)
                          ? "bg-cyan-500/20 text-cyan-400 border border-cyan-500/40"
                          : "bg-[var(--bg-main)]/60 text-[var(--text-muted)] border border-[var(--border-subtle)]"
                      }`}
                    >
                      <span>{addon.label}</span>
                      <span>{telemetryAddons.includes(addon.id) ? "✓" : "+"}</span>
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 sticky top-24">
              <div className="p-8 rounded-3xl glass-panel border-2 border-cyan-400/50 shadow-2xl space-y-4">
                <span className="text-xs font-mono font-bold text-[var(--accent)] uppercase">
                  ESTIMATED INVESTMENT
                </span>
                <div className="text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-[var(--primary)] to-[var(--accent)] my-2">
                  {est.total}
                </div>
                <div className="text-xs text-[var(--text-dim)] font-mono">
                  Estimated Launch Velocity: <span className="font-bold text-[var(--text-main)]">{est.velocity}</span>
                </div>
                <p className="text-xs text-[var(--text-muted)] leading-relaxed pt-2 border-t border-[var(--border-subtle)]">
                  Includes 100% intellectual property ownership, dedicated full-time engineering squad, and 60 days of post-launch warranty.
                </p>

                <MaterialRippleButton
                  onClick={() => openQuote(`V3 Scope: ${calcTier.toUpperCase()} (${est.total})`)}
                  variant="accent"
                  className="w-full py-4 text-xs font-extrabold uppercase tracking-wider"
                >
                  <span>Lock Sprint Availability</span>
                  <ArrowRight className="w-4 h-4" />
                </MaterialRippleButton>
              </div>
            </div>
          </div>
        </section>

        {/* 3.7 Contact & Surat Dispatch */}
        <section id="contact" className="p-8 sm:p-12 rounded-3xl glass-panel border border-[var(--border-strong)] relative overflow-hidden shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-6 space-y-4">
              <span className="text-xs font-mono font-bold text-[var(--accent)] uppercase tracking-wider">
                SURAT HQ DIRECT DISPATCH
              </span>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-[var(--text-main)]">
                Ready to Deploy Your Squad?
              </h2>
              <p className="text-sm text-[var(--text-muted)] leading-relaxed">
                Connect directly with our engineering architects. We evaluate your functional specs and return fixed-price sprint quotes within 24 hours.
              </p>
              <div className="space-y-2 text-xs font-mono text-[var(--text-dim)] pt-2">
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-blue-500" />
                  <span>Surat HQ Campus, Gujarat, India</span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="w-4 h-4 text-blue-500" />
                  <span>contact@opashsoftware.com</span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-blue-500" />
                  <span>+91 97277 88846 (24/7 Response)</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6">
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  openQuote("V3 Dispatch Form");
                }}
                className="space-y-4"
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <input
                    type="text"
                    required
                    placeholder="Your Full Name"
                    className="w-full p-3.5 rounded-xl bg-[var(--bg-main)] border border-[var(--border-strong)] text-sm focus:outline-none focus:border-[var(--accent)]"
                  />
                  <input
                    type="email"
                    required
                    placeholder="Work Email"
                    className="w-full p-3.5 rounded-xl bg-[var(--bg-main)] border border-[var(--border-strong)] text-sm focus:outline-none focus:border-[var(--accent)]"
                  />
                </div>
                <textarea
                  rows={3}
                  required
                  placeholder="Tell us about your project requirements..."
                  className="w-full p-3.5 rounded-xl bg-[var(--bg-main)] border border-[var(--border-strong)] text-sm focus:outline-none focus:border-[var(--accent)]"
                />
                <MaterialRippleButton
                  type="submit"
                  variant="primary"
                  className="w-full py-4 text-xs font-extrabold uppercase tracking-wider"
                >
                  <Send className="w-4 h-4" />
                  <span>Request Architectural Blueprint</span>
                </MaterialRippleButton>
              </form>
            </div>
          </div>
        </section>
      </main>

      {/* ============================================================ */}
      {/* 4. COMPREHENSIVE CYBER FOOTER                                */}
      {/* ============================================================ */}
      <footer className="mt-24 pt-12 pb-8 border-t border-[var(--border-subtle)] text-xs text-[var(--text-muted)]">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="space-y-3">
            <div className="font-extrabold text-sm text-[var(--text-main)]">OPASH SOFTWARE // CYBER V3</div>
            <p className="text-[11px] leading-relaxed">
              Autonomous AI systems, spatial glass web platforms, and Flutter mobile architectures.
            </p>
          </div>
          <div>
            <div className="font-bold text-[var(--text-main)] mb-2 font-mono">SECTORS</div>
            <ul className="space-y-1 text-[11px]">
              <li>Fintech & Underwriting</li>
              <li>Telehealth HIPAA</li>
              <li>Logistics Intelligence</li>
              <li>Enterprise SaaS</li>
            </ul>
          </div>
          <div>
            <div className="font-bold text-[var(--text-main)] mb-2 font-mono">STANDARDS</div>
            <ul className="space-y-1 text-[11px]">
              <li>100% In-House Engineers</li>
              <li>Strict Mutual NDA</li>
              <li>Zero Subcontractor Risk</li>
              <li>SOC-2 Type II Compliant</li>
            </ul>
          </div>
          <div>
            <div className="font-bold text-[var(--text-main)] mb-2 font-mono">HQ DISPATCH</div>
            <p className="text-[11px] leading-relaxed">
              Surat HQ Campus, Gujarat, India. 24/7 Global Delivery to US, Europe, and MENA.
            </p>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-6 pt-6 border-t border-[var(--border-subtle)] flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-[11px]">
          <div>OPASH SOFTWARE // CYBER SPATIAL V3 EDITION // EST. 2017</div>
          <div>SURAT HQ // 100% CODE OWNERSHIP // © 2026 OPASH</div>
        </div>
      </footer>

      <QuoteModal
        isOpen={quoteModalOpen}
        onClose={() => setQuoteModalOpen(false)}
        initialService={selectedService}
      />
    </div>
  );
}
