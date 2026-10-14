"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { 
  Sparkles, 
  Layers, 
  Box, 
  Zap, 
  ArrowRight,
  Terminal,
  Activity,
  ShieldCheck,
  MapPin,
  Mail,
  Phone,
  Send,
  Globe2,
  Cpu,
  Smartphone,
  Server,
  CheckCircle2,
  Sun,
  Moon,
  Lock,
  Workflow,
  BarChart3,
  TrendingUp,
  Award
} from "lucide-react";
import { useTheme } from "@/context/ThemeContext";
import { soundEffects } from "@/lib/soundEffects";
import { MaterialRippleButton } from "@/components/effects/MaterialRippleButton";
import { MagneticHover } from "@/components/effects/MagneticHover";
import { AuroraBackground } from "@/components/effects/AuroraBackground";
import { InfiniteMarquee } from "@/components/effects/InfiniteMarquee";
import { SpotlightCard } from "@/components/common/SpotlightCard";
import { QuoteModal } from "@/components/sections/QuoteModal";
import HalftoneWordmarkFooter from "@/components/ui/halftone-wordmark-footer";

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
    "Flutter 3.x Engine",
    "Docker Clusters",
    "Kubernetes Mesh",
    "Cloudflare Workers",
    "LangChain AI Agents",
    "PyTorch Models",
    "Redis Cluster"
  ];

  return (
    <div className="min-h-screen bg-[var(--bg-main)] text-[var(--text-main)] transition-colors duration-300 relative selection:bg-[var(--primary)] selection:text-white">
      {/* ============================================================ */}
      {/* 1. TOP CYBER SPATIAL HEADER                                  */}
      {/* ============================================================ */}
      <header className="sticky top-0 z-40 backdrop-blur-2xl bg-[var(--bg-main)]/80 border-b border-[var(--border-subtle)] py-4 px-6 sm:px-10 flex items-center justify-between">
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
          <a href="#tech-stack" className="px-3 py-1.5 rounded-lg text-[var(--text-muted)] hover:text-[var(--text-main)] hover:bg-[var(--border-subtle)] transition-colors">
            Tech Rail
          </a>
          <a href="#architecture" className="px-3 py-1.5 rounded-lg text-[var(--text-muted)] hover:text-[var(--text-main)] hover:bg-[var(--border-subtle)] transition-colors">
            Spatial Bento
          </a>
          <a href="#services" className="px-3 py-1.5 rounded-lg text-[var(--text-muted)] hover:text-[var(--text-main)] hover:bg-[var(--border-subtle)] transition-colors">
            Services
          </a>
          <a href="#proof" className="px-3 py-1.5 rounded-lg text-[var(--text-muted)] hover:text-[var(--text-main)] hover:bg-[var(--border-subtle)] transition-colors">
            Case Studies
          </a>
          <a href="#estimator" className="px-3 py-1.5 rounded-lg text-[var(--text-muted)] hover:text-[var(--text-main)] hover:bg-[var(--border-subtle)] transition-colors">
            Estimator
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
      <section id="hero" className="relative pt-20 pb-16 md:pt-32 md:pb-24 px-6 lg:px-12 max-w-7xl mx-auto overflow-hidden">
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
                href="#architecture"
                onClick={() => soundEffects.pop()}
                className="px-8 py-4 rounded-2xl border border-[var(--border-strong)] bg-[var(--bg-card)] hover:bg-[var(--border-subtle)] font-bold text-sm tracking-wider uppercase transition-colors"
              >
                Explore Architecture
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
      {/* 3. INFINITE TECHNOLOGY RAIL (MARQUEE)                        */}
      {/* ============================================================ */}
      <section id="tech-stack" className="py-8 border-y border-[var(--border-subtle)] bg-[var(--bg-card)]/40 backdrop-blur-xl relative z-10">
        <div className="max-w-7xl mx-auto px-6 mb-3 flex items-center justify-between text-xs font-mono text-[var(--text-dim)] uppercase tracking-wider">
          <span>Enterprise Production Stack</span>
          <span className="text-[var(--accent)]">High-Throughput / Zero Latency</span>
        </div>
        <InfiniteMarquee items={marqueePartners} speed={24} />
      </section>

      {/* ============================================================ */}
      {/* 4. REAL SPATIAL BENTO GRID ARCHITECTURE                     */}
      {/* ============================================================ */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24 mt-20">
        <section id="architecture" className="space-y-8">
          <div className="border-b border-[var(--border-subtle)] pb-4 flex flex-col sm:flex-row sm:items-end justify-between gap-2">
            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-[var(--accent)] font-bold">
                01 // Institutional Foundation
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-[var(--text-main)] mt-1">
                Spatial Systems Architecture
              </h2>
            </div>
            <p className="text-xs text-[var(--text-muted)] font-mono">
              Surat HQ · Dedicated In-House Squad · Full Sovereign Code Ownership
            </p>
          </div>

          {/* Bento Grid with Spatial Glass & Neumorphic Accents */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Tile 1: 50+ In-House Engineers (Span 2) */}
            <div className="md:col-span-2 p-8 rounded-3xl glass-panel border border-[var(--border-strong)] relative overflow-hidden shadow-2xl flex flex-col justify-between group">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-blue-500/10 border border-blue-500/30 text-blue-400 font-mono text-xs font-bold">
                    <Activity className="w-3.5 h-3.5 animate-pulse" />
                    <span>SURAT HQ CAMPUS</span>
                  </div>
                  <span className="text-xs font-mono text-[var(--text-dim)]">50+ IN-HOUSE DEVELOPERS</span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-extrabold text-[var(--text-main)]">
                  Zero Subcontractor Hand-offs. <br />
                  Direct Access to Senior System Architects.
                </h3>
                <p className="text-sm text-[var(--text-muted)] leading-relaxed max-w-xl">
                  Every line of TypeScript, Python, and Flutter is authored and code-reviewed on-site in Surat, Gujarat. We operate with strict mutual NDA protections and enforce peer-reviewed git hygiene.
                </p>
              </div>

              <div className="grid grid-cols-3 gap-4 pt-6 mt-6 border-t border-[var(--border-subtle)]">
                <div>
                  <div className="text-2xl font-black text-[var(--accent)]">100%</div>
                  <div className="text-[11px] font-mono text-[var(--text-dim)]">In-House Staff</div>
                </div>
                <div>
                  <div className="text-2xl font-black text-emerald-400">70+</div>
                  <div className="text-[11px] font-mono text-[var(--text-dim)]">Delivered Deployments</div>
                </div>
                <div>
                  <div className="text-2xl font-black text-cyan-400">99.9%</div>
                  <div className="text-[11px] font-mono text-[var(--text-dim)]">Client Satisfaction</div>
                </div>
              </div>
            </div>

            {/* Tile 2: Autonomous AI Swarms with 3D Tilt */}
            <SpotlightCard
              tiltAmount={15}
              className="p-8 rounded-3xl glass-panel border-2 border-cyan-400/40 relative overflow-hidden shadow-2xl flex flex-col justify-between neon-glow-active"
            >
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-cyan-500/15 border border-cyan-500/30 text-cyan-400 flex items-center justify-center shadow-lg">
                  <Cpu className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xs font-mono text-cyan-400 font-bold uppercase">AI KINETICS</span>
                  <h3 className="text-xl font-bold text-[var(--text-main)] mt-1">Autonomous Agent Swarms</h3>
                </div>
                <p className="text-xs text-[var(--text-muted)] leading-relaxed">
                  Enterprise retrieval-augmented generation (RAG) with local vector databases and multi-agent coordination.
                </p>
              </div>

              <div className="pt-4 border-t border-[var(--border-subtle)] text-xs font-mono text-cyan-400 flex items-center justify-between">
                <span>Vector pgvector</span>
                <span>Active Model</span>
              </div>
            </SpotlightCard>

            {/* Tile 3: Neumorphic Security Vault */}
            <div className="p-8 rounded-3xl border border-[var(--border-strong)] bg-[var(--bg-card)] neu-raised shadow-xl flex flex-col justify-between">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-[var(--primary)]/15 border border-[var(--primary)]/30 text-[var(--primary-light)] flex items-center justify-center">
                  <Lock className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xs font-mono text-[var(--primary-light)] font-bold uppercase">SECURITY FIRST</span>
                  <h3 className="text-xl font-bold text-[var(--text-main)] mt-1">Sovereign IP Ownership</h3>
                </div>
                <p className="text-xs text-[var(--text-muted)] leading-relaxed">
                  Complete repository handover, CI/CD secrets transfer, and SOC-2 audit-ready architecture from day one.
                </p>
              </div>

              <div className="pt-4 border-t border-[var(--border-subtle)] text-xs font-mono text-[var(--text-dim)] flex items-center justify-between">
                <span>AES-256 GCM</span>
                <span className="text-emerald-400 font-bold">Verified</span>
              </div>
            </div>

            {/* Tile 4: 60 FPS Native Mobile & Flutter (Claymorphic Depth) */}
            <div className="p-8 rounded-3xl border border-[var(--border-strong)] bg-[var(--bg-card)] shadow-xl clay-inflated flex flex-col justify-between">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-purple-500/15 border border-purple-500/30 text-purple-400 flex items-center justify-center">
                  <Smartphone className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xs font-mono text-purple-400 font-bold uppercase">CROSS-PLATFORM</span>
                  <h3 className="text-xl font-bold text-[var(--text-main)] mt-1">Tactile Flutter 60 FPS</h3>
                </div>
                <p className="text-xs text-[var(--text-muted)] leading-relaxed">
                  Smooth haptic micro-interactions, biometric authentication, and offline-first state synchronization.
                </p>
              </div>

              <div className="pt-4 border-t border-[var(--border-subtle)] text-xs font-mono text-[var(--text-dim)] flex items-center justify-between">
                <span>iOS & Android</span>
                <span className="text-purple-400 font-bold">120Hz Fluid</span>
              </div>
            </div>

            {/* Tile 5: Cloud Deployment Mesh */}
            <div className="p-8 rounded-3xl glass-panel border border-[var(--border-strong)] shadow-xl flex flex-col justify-between">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-amber-500/15 border border-amber-500/30 text-amber-400 flex items-center justify-center">
                  <Server className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xs font-mono text-amber-400 font-bold uppercase">INFRASTRUCTURE</span>
                  <h3 className="text-xl font-bold text-[var(--text-main)] mt-1">Kubernetes & Edge Mesh</h3>
                </div>
                <p className="text-xs text-[var(--text-muted)] leading-relaxed">
                  Terraform-orchestrated clusters with automated blue/green zero-downtime rollouts and multi-region failover.
                </p>
              </div>

              <div className="pt-4 border-t border-[var(--border-subtle)] text-xs font-mono text-[var(--text-dim)] flex items-center justify-between">
                <span>Global Multi-Region</span>
                <span className="text-amber-400 font-bold">99.99% SLA</span>
              </div>
            </div>
          </div>
        </section>

        {/* ============================================================ */}
        {/* 5. CAPABILITIES & SERVICES (3D Tilt & Glassmorphism)        */}
        {/* ============================================================ */}
        <section id="services" className="space-y-8">
          <div className="border-b border-[var(--border-subtle)] pb-4 flex flex-col sm:flex-row sm:items-end justify-between gap-2">
            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-[var(--accent)] font-bold">
                02 // Core Engineering Disciplines
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
              <SpotlightCard
                key={idx}
                tiltAmount={10}
                className="p-7 rounded-3xl glass-panel border border-[var(--border-strong)] flex flex-col justify-between shadow-xl group hover:border-[var(--accent)]/50 transition-colors"
              >
                <div>
                  <h3 className="text-lg font-bold text-[var(--text-main)] mb-2">{srv.title}</h3>
                  <p className="text-xs text-[var(--text-muted)] leading-relaxed mb-6">{srv.desc}</p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {srv.tags.map((tag, tIdx) => (
                      <MagneticHover key={tIdx} pullFactor={0.2}>
                        <span className="text-[11px] font-mono px-2.5 py-1 rounded-lg bg-[var(--border-subtle)] text-[var(--accent)] block">
                          {tag}
                        </span>
                      </MagneticHover>
                    ))}
                  </div>
                </div>
                <MaterialRippleButton
                  onClick={() => openQuote(srv.title)}
                  variant="primary"
                  className="w-full py-3 text-xs font-bold uppercase tracking-wider"
                >
                  Configure Module
                </MaterialRippleButton>
              </SpotlightCard>
            ))}
          </div>
        </section>

        {/* ============================================================ */}
        {/* 6. VERIFIED CLIENT ROI CASE STUDIES                         */}
        {/* ============================================================ */}
        <section id="proof" className="space-y-8">
          <div className="border-b border-[var(--border-subtle)] pb-4 flex flex-col sm:flex-row sm:items-end justify-between gap-2">
            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-[var(--accent)] font-bold">
                03 // Verified Client ROI
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
            <SpotlightCard
              tiltAmount={12}
              className="p-7 rounded-3xl glass-panel border border-[var(--border-strong)] flex flex-col justify-between shadow-xl hover:border-cyan-400/60 transition-colors"
            >
              <div>
                <div className="text-xs font-mono text-[var(--accent)] font-bold mb-1">INSURETECH // MENA</div>
                <h3 className="text-2xl font-black mb-2">eSanad</h3>
                <p className="text-xs text-[var(--text-muted)] leading-relaxed mb-6">
                  Automated quotation and policy aggregation system handling millions in real-time underwriting.
                </p>
                <div className="p-5 rounded-2xl bg-[var(--bg-main)]/60 text-center mb-6 border border-[var(--border-subtle)] neu-inset">
                  <div className="text-4xl font-extrabold text-[var(--accent)] mb-1">+340%</div>
                  <div className="text-xs text-[var(--text-dim)] font-mono">Policy Conversion Speed</div>
                </div>
              </div>
              <div className="text-xs text-[var(--text-dim)] flex justify-between font-mono">
                <span>Next.js + Node</span>
                <span className="text-emerald-500 font-bold">Verified Client</span>
              </div>
            </SpotlightCard>

            <SpotlightCard
              tiltAmount={12}
              className="p-7 rounded-3xl glass-panel border border-[var(--border-strong)] flex flex-col justify-between shadow-xl hover:border-blue-400/60 transition-colors"
            >
              <div>
                <div className="text-xs font-mono text-blue-400 font-bold mb-1">HEALTHCARE // USA</div>
                <h3 className="text-2xl font-black mb-2">UCareHQ</h3>
                <p className="text-xs text-[var(--text-muted)] leading-relaxed mb-6">
                  HIPAA-compliant telemedicine platform with live WebRTC triage and patient scheduling.
                </p>
                <div className="p-5 rounded-2xl bg-[var(--bg-main)]/60 text-center mb-6 border border-[var(--border-subtle)] neu-inset">
                  <div className="text-4xl font-extrabold text-blue-400 mb-1">120k+</div>
                  <div className="text-xs text-[var(--text-dim)] font-mono">Patients Managed</div>
                </div>
              </div>
              <div className="text-xs text-[var(--text-dim)] flex justify-between font-mono">
                <span>React + AWS HIPAA</span>
                <span className="text-emerald-500 font-bold">Verified Client</span>
              </div>
            </SpotlightCard>

            <SpotlightCard
              tiltAmount={12}
              className="p-7 rounded-3xl glass-panel border border-[var(--border-strong)] flex flex-col justify-between shadow-xl hover:border-sky-400/60 transition-colors"
            >
              <div>
                <div className="text-xs font-mono text-sky-400 font-bold mb-1">LOGISTICS // GLOBAL</div>
                <h3 className="text-2xl font-black mb-2">IKO International</h3>
                <p className="text-xs text-[var(--text-muted)] leading-relaxed mb-6">
                  Industrial manufacturing supply chain synchronization tool with real-time inventory intelligence.
                </p>
                <div className="p-5 rounded-2xl bg-[var(--bg-main)]/60 text-center mb-6 border border-[var(--border-subtle)] neu-inset">
                  <div className="text-4xl font-extrabold text-sky-400 mb-1">99.98%</div>
                  <div className="text-xs text-[var(--text-dim)] font-mono">Reconciliation Rate</div>
                </div>
              </div>
              <div className="text-xs text-[var(--text-dim)] flex justify-between font-mono">
                <span>Python + PostgreSQL</span>
                <span className="text-emerald-500 font-bold">Verified Client</span>
              </div>
            </SpotlightCard>
          </div>
        </section>

        {/* ============================================================ */}
        {/* 7. INTERACTIVE PROJECT SCOPE ESTIMATOR                      */}
        {/* ============================================================ */}
        <section id="estimator" className="space-y-8">
          <div className="border-b border-[var(--border-subtle)] pb-4 flex flex-col sm:flex-row sm:items-end justify-between gap-2">
            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-[var(--accent)] font-bold">
                04 // Interactive Calculator
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
                          ? "bg-[var(--primary)] text-white shadow-lg shadow-[var(--brand-glow)]"
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
              <div className="p-8 rounded-3xl glass-panel border-2 border-cyan-400/50 shadow-2xl space-y-4 neon-glow-active">
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

        {/* ============================================================ */}
        {/* 8. CONTACT & SURAT DIRECT DISPATCH                           */}
        {/* ============================================================ */}
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
                    className="w-full p-3.5 rounded-xl bg-[var(--bg-main)] border border-[var(--border-strong)] text-sm focus:outline-none focus:border-[var(--accent)] transition-colors"
                  />
                  <input
                    type="email"
                    required
                    placeholder="Work Email"
                    className="w-full p-3.5 rounded-xl bg-[var(--bg-main)] border border-[var(--border-strong)] text-sm focus:outline-none focus:border-[var(--accent)] transition-colors"
                  />
                </div>
                <textarea
                  rows={3}
                  required
                  placeholder="Tell us about your project requirements..."
                  className="w-full p-3.5 rounded-xl bg-[var(--bg-main)] border border-[var(--border-strong)] text-sm focus:outline-none focus:border-[var(--accent)] transition-colors"
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
      {/* 9. HALFTONE INTERACTIVE WORDMARK FOOTER (OPASH)              */}
      {/* ============================================================ */}
      <HalftoneWordmarkFooter
        wordmark="opash"
        label="Opash Software // Cyber V3"
        meta="©2026 · Surat HQ Campus · Spatial Architecture"
        preset="cobalt"
        height="520px"
        className="mt-20 border-t border-[var(--border-subtle)]"
      />

      <QuoteModal
        isOpen={quoteModalOpen}
        onClose={() => setQuoteModalOpen(false)}
        initialService={selectedService}
      />
    </div>
  );
}
