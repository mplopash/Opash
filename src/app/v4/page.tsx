"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { 
  Sparkles, 
  Layers, 
  Box, 
  Zap, 
  Move, 
  ArrowRight, 
  CheckCircle2, 
  Sun, 
  Moon, 
  Code2, 
  Terminal, 
  Activity, 
  Flame, 
  ShieldCheck, 
  Globe2, 
  Cpu, 
  Smartphone, 
  Server, 
  MapPin, 
  Mail, 
  Phone, 
  Send,
  Sliders,
  ChevronDown,
  Compass,
  Workflow,
  Eye
} from "lucide-react";
import { useTheme } from "@/context/ThemeContext";
import { soundEffects } from "@/lib/soundEffects";
import { MaterialRippleButton } from "@/components/effects/MaterialRippleButton";
import { MagneticHover } from "@/components/effects/MagneticHover";
import { SpotlightCard } from "@/components/common/SpotlightCard";
import { QuoteModal } from "@/components/sections/QuoteModal";

export default function ScrollytellingV4Page() {
  const { mode, setMode } = useTheme();
  const isLight = mode === "light";

  const [quoteModalOpen, setQuoteModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState("Custom Software Development");

  // Scroll Progress Percentage for Scrollytelling Bar
  const [scrollProgress, setScrollProgress] = useState(0);

  // Active Pinned Scrollytelling Stage
  const [activeStage, setActiveStage] = useState(0);

  // Estimator States
  const [sprintWeeks, setSprintWeeks] = useState(8);
  const [engineerCount, setEngineerCount] = useState(5);
  const [tier, setTier] = useState<"ai" | "saas" | "mobile" | "enterprise">("ai");

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      if (totalScroll > 0) {
        const current = (window.scrollY / totalScroll) * 100;
        setScrollProgress(Math.min(100, Math.max(0, current)));
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const openQuote = (service = "Custom Software Development") => {
    soundEffects.click();
    setSelectedService(service);
    setQuoteModalOpen(true);
  };

  const calculateEstimate = () => {
    let rate = 1500;
    if (tier === "ai") rate = 1900;
    if (tier === "mobile") rate = 1650;
    if (tier === "enterprise") rate = 2200;

    const total = Math.round((sprintWeeks * engineerCount * rate) / 500) * 500;
    return `$${total.toLocaleString()}`;
  };

  // Scrollytelling Phases
  const scrollyPhases = [
    {
      num: "01",
      tag: "DISCOVERY & SPECIFICATION",
      title: "Algorithmic System Mapping",
      desc: "We analyze high-throughput data pipelines, draft architectural blueprints, and model schema relationships with zero ambiguity before writing a single line of production code.",
      badge: "Week 01 // Blueprint Phase",
      deliverable: "System ERDs, API Contracts & Threat Models",
      color: "from-blue-600 to-cyan-500",
    },
    {
      num: "02",
      tag: "HIGH-CONCURRENCY ENGINEERING",
      title: "Edge Cloud & Reactive Logic",
      desc: "Continuous micro-sprints with bi-weekly client demos. Automated testing harnesses, type-safe Next.js 16 Edge runtime, and pgvector semantic query tuning.",
      badge: "Weeks 02-06 // Core Sprint",
      deliverable: "CI/CD Staging URL & Automated Unit Coverage",
      color: "from-cyan-500 to-teal-400",
    },
    {
      num: "03",
      tag: "FLUID INTERACTION DESIGN",
      title: "Liquid Glass & 60 FPS Polish",
      desc: "Crafting fluid spatial aesthetics, micro-interactions, responsive tactile layouts, and sub-50ms paint execution that make digital platforms feel remarkably alive.",
      badge: "Weeks 06-08 // Haptic Tuning",
      deliverable: "WCAG AAA Accessible, 99+ Lighthouse P99",
      color: "from-indigo-600 to-purple-500",
    },
    {
      num: "04",
      tag: "ENTERPRISE DEPLOYMENT",
      title: "Autonomous Launch & IP Transfer",
      desc: "Blue/green zero-downtime cutover into client AWS/GCP tenancy. Complete intellectual property transfer, code signing, and 60 days of hypercare warranty.",
      badge: "Launch // 100% IP Transfer",
      deliverable: "Git Tenancy Handover & 24/7 Monitoring",
      color: "from-emerald-500 to-teal-500",
    },
  ];

  return (
    <div className="min-h-screen bg-[var(--bg-main)] text-[var(--text-main)] transition-colors duration-300 relative selection:bg-[var(--primary)] selection:text-white pb-32">
      {/* Top Fixed Scroll Progress Indicator */}
      <div className="fixed top-0 left-0 right-0 h-1 z-50 bg-[var(--border-subtle)]">
        <div
          className="h-full bg-gradient-to-r from-blue-600 via-cyan-400 to-emerald-400 transition-all duration-75"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      {/* ============================================================ */}
      {/* 1. SCROLLYTELLING FLOATING LIQUID HEADER                     */}
      {/* ============================================================ */}
      <header className="sticky top-1 z-40 backdrop-blur-2xl bg-[var(--bg-main)]/70 border-b border-[var(--border-subtle)] py-4 px-6 sm:px-10 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Link href="/v4" className="flex items-center gap-2.5 group">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-cyan-500 to-blue-600 text-white font-black flex items-center justify-center shadow-lg shadow-cyan-500/20">
              O
            </div>
            <div>
              <div className="font-extrabold text-base tracking-tight flex items-center gap-1.5">
                <span>Opash</span>
                <span className="text-cyan-400 font-mono text-xs px-2 py-0.5 rounded-md bg-cyan-500/10 border border-cyan-500/30">
                  SCROLL V4
                </span>
              </div>
              <div className="text-[10px] text-[var(--text-dim)] uppercase tracking-wider font-mono">
                Scrollytelling & Fluid Spatial UI
              </div>
            </div>
          </Link>
        </div>

        {/* Quick Nav Anchors */}
        <nav className="hidden lg:flex items-center gap-1 text-xs font-semibold">
          <a href="#hero" className="px-3 py-1.5 rounded-lg text-[var(--text-muted)] hover:text-[var(--text-main)] hover:bg-[var(--border-subtle)] transition-colors">
            Immersion
          </a>
          <a href="#scrolly-journey" className="px-3 py-1.5 rounded-lg text-[var(--text-muted)] hover:text-[var(--text-main)] hover:bg-[var(--border-subtle)] transition-colors">
            Scrollytelling Flow
          </a>
          <a href="#services" className="px-3 py-1.5 rounded-lg text-[var(--text-muted)] hover:text-[var(--text-main)] hover:bg-[var(--border-subtle)] transition-colors">
            Capabilities
          </a>
          <a href="#proof" className="px-3 py-1.5 rounded-lg text-[var(--text-muted)] hover:text-[var(--text-main)] hover:bg-[var(--border-subtle)] transition-colors">
            Case Studies
          </a>
          <a href="#estimator" className="px-3 py-1.5 rounded-lg text-[var(--text-muted)] hover:text-[var(--text-main)] hover:bg-[var(--border-subtle)] transition-colors">
            Potentiometer
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
      {/* 2. PROMINENT IMMERSIVE SCROLLYTELLING HERO                   */}
      {/* ============================================================ */}
      <section id="hero" className="relative min-h-[85vh] flex items-center justify-center px-6 lg:px-12 max-w-7xl mx-auto overflow-hidden text-center py-24">
        {/* Iridescent Liquid Glowing Gradient Background */}
        <div className="absolute inset-0 pointer-events-none flex items-center justify-center z-0">
          <div className="w-[600px] h-[600px] rounded-full bg-gradient-to-tr from-blue-600/20 via-cyan-400/20 to-purple-600/10 blur-[130px] animate-pulse" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-panel border border-cyan-400/30 text-xs font-mono font-bold text-cyan-400 uppercase tracking-widest">
            <Workflow className="w-4 h-4" />
            <span>SCROLLYTELLING ARCHITECTURE // FLUID SPATIAL V4</span>
          </div>

          <h1 className="text-4xl sm:text-7xl font-black tracking-tight leading-[1.05] text-[var(--text-main)]">
            Scroll Through the Future of <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-cyan-400 to-teal-300">
              Autonomous Software Engineering.
            </span>
          </h1>

          <p className="text-base sm:text-xl text-[var(--text-muted)] max-w-2xl mx-auto leading-relaxed">
            Experience our step-by-step delivery lifecycle in high-fidelity 3D depth. We engineer mission-critical AI swarms, high-concurrency SaaS, and 60 FPS mobile ecosystems from Surat HQ.
          </p>

          {/* Quick Metrics Rail */}
          <div className="pt-4 flex flex-wrap items-center justify-center gap-4 text-xs font-mono">
            <div className="px-4 py-2 rounded-xl glass-panel border border-[var(--border-subtle)] flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
              <span>Scroll Velocity Tracker Active</span>
            </div>
            <div className="px-4 py-2 rounded-xl glass-panel border border-[var(--border-subtle)]">
              <span>70+ Shipped Enterprise Systems</span>
            </div>
            <div className="px-4 py-2 rounded-xl glass-panel border border-[var(--border-subtle)]">
              <span>50+ Dedicated In-House Engineers</span>
            </div>
          </div>

          <div className="pt-8 flex flex-wrap items-center justify-center gap-4">
            <MagneticHover pullFactor={0.3}>
              <MaterialRippleButton
                onClick={() => openQuote()}
                variant="accent"
                className="px-8 py-4 rounded-2xl text-sm font-extrabold uppercase tracking-wider"
              >
                <span>Deploy Dedicated Squad</span>
                <ArrowRight className="w-4 h-4" />
              </MaterialRippleButton>
            </MagneticHover>

            <a
              href="#scrolly-journey"
              onClick={() => soundEffects.pop()}
              className="px-8 py-4 rounded-2xl glass-panel border border-[var(--border-strong)] font-bold text-sm tracking-wider uppercase hover:bg-[var(--border-subtle)] transition-colors flex items-center gap-2"
            >
              <span>Explore Scrollytelling Story</span>
              <ChevronDown className="w-4 h-4 animate-bounce" />
            </a>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 3. PINNED STICKY SCROLLYTELLING JOURNEY (SIGNATURE V4 FEATURE)*/}
      {/* ============================================================ */}
      <section id="scrolly-journey" className="py-24 px-6 lg:px-12 max-w-7xl mx-auto relative">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="text-xs font-mono font-bold uppercase tracking-widest text-cyan-400">
            01 // PINNED ARCHITECTURAL CADENCE
          </span>
          <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-[var(--text-main)]">
            The Scrollytelling Delivery Pipeline
          </h2>
          <p className="text-sm sm:text-base text-[var(--text-muted)]">
            Follow our 4-phase transformation process. Every stage is engineered with strict milestones, client repository transparency, and zero subcontractor leakage.
          </p>
        </div>

        {/* Phase Selector Tabs */}
        <div className="flex justify-center gap-2 mb-12 overflow-x-auto pb-2">
          {scrollyPhases.map((phase, idx) => (
            <button
              key={idx}
              onClick={() => {
                soundEffects.click();
                setActiveStage(idx);
              }}
              className={`px-4 py-2.5 rounded-2xl text-xs font-mono font-bold transition-all cursor-pointer whitespace-nowrap ${
                activeStage === idx
                  ? "bg-gradient-to-r from-blue-600 to-cyan-500 text-white shadow-lg shadow-cyan-500/25 scale-105"
                  : "glass-panel text-[var(--text-muted)] hover:text-[var(--text-main)] border border-[var(--border-subtle)]"
              }`}
            >
              <span>{phase.num}. {phase.tag}</span>
            </button>
          ))}
        </div>

        {/* Dynamic Pinned Stage Card */}
        <div className="max-w-4xl mx-auto">
          <SpotlightCard
            tiltAmount={10}
            className="p-8 sm:p-12 rounded-3xl glass-panel border-2 border-cyan-400/40 shadow-2xl relative overflow-hidden transition-all duration-500"
          >
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-[var(--border-subtle)]">
              <div>
                <span className="text-xs font-mono font-bold text-cyan-400 uppercase tracking-widest">
                  PHASE {scrollyPhases[activeStage].num} // {scrollyPhases[activeStage].badge}
                </span>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-[var(--text-main)] mt-1">
                  {scrollyPhases[activeStage].title}
                </h3>
              </div>
              <div className="text-right">
                <span className="text-[10px] font-mono text-[var(--text-dim)] uppercase block">MILESTONE OUTPUT</span>
                <span className="text-xs font-bold text-emerald-400 font-mono">
                  {scrollyPhases[activeStage].deliverable}
                </span>
              </div>
            </div>

            <div className="py-8 space-y-6">
              <p className="text-base sm:text-lg text-[var(--text-muted)] leading-relaxed">
                {scrollyPhases[activeStage].desc}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 font-mono text-xs">
                <div className="p-4 rounded-2xl bg-[var(--bg-main)]/60 border border-[var(--border-subtle)]">
                  <span className="text-[10px] text-[var(--text-dim)] uppercase block mb-1">TEAM ALLOCATION</span>
                  <span className="font-bold text-[var(--text-main)]">Dedicated Senior Engineers</span>
                </div>
                <div className="p-4 rounded-2xl bg-[var(--bg-main)]/60 border border-[var(--border-subtle)]">
                  <span className="text-[10px] text-[var(--text-dim)] uppercase block mb-1">CLIENT REPO ACCESS</span>
                  <span className="font-bold text-cyan-400">Daily Git Commits</span>
                </div>
                <div className="p-4 rounded-2xl bg-[var(--bg-main)]/60 border border-[var(--border-subtle)]">
                  <span className="text-[10px] text-[var(--text-dim)] uppercase block mb-1">QA POLICY</span>
                  <span className="font-bold text-emerald-400">100% CI/CD Verified</span>
                </div>
              </div>
            </div>

            <div className="pt-6 border-t border-[var(--border-subtle)] flex items-center justify-between">
              <div className="flex gap-2">
                {scrollyPhases.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => {
                      soundEffects.click();
                      setActiveStage(i);
                    }}
                    className={`w-3 h-3 rounded-full transition-all cursor-pointer ${
                      activeStage === i ? "bg-cyan-400 w-8" : "bg-[var(--border-strong)]"
                    }`}
                  />
                ))}
              </div>

              <button
                onClick={() => {
                  soundEffects.click();
                  setActiveStage((prev) => (prev + 1) % scrollyPhases.length);
                }}
                className="text-xs font-mono font-bold text-cyan-400 hover:underline flex items-center gap-1 cursor-pointer"
              >
                <span>Next Lifecycle Phase</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </SpotlightCard>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 4. CORE DISCIPLINES & SERVICES SECTION                       */}
      {/* ============================================================ */}
      <section id="services" className="py-20 px-6 lg:px-12 max-w-7xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-14 space-y-2">
          <span className="text-xs font-mono font-bold uppercase tracking-widest text-cyan-400">
            02 // FULL ENGINEERING DISCIPLINES
          </span>
          <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-[var(--text-main)]">
            Autonomous Digital Systems
          </h2>
          <p className="text-sm text-[var(--text-muted)]">
            Crafted for venture-backed startups and multinational corporations requiring enterprise resilience.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              title: "Autonomous AI & RAG Swarms",
              desc: "Multi-agent LangGraph orchestrators, domain-adapted fine-tuned models, pgvector semantic search, and private on-premise execution.",
              tags: ["PyTorch", "LangChain", "Vector RAG"],
            },
            {
              title: "High-Concurrency SaaS",
              desc: "Next.js 16 Edge computing, distributed PostgreSQL, real-time WebSockets, and low-latency billing matrices.",
              tags: ["Next.js", "React 19", "TypeScript"],
            },
            {
              title: "60 FPS Cross-Platform Apps",
              desc: "Tactile haptics, biometric authentication, offline synchronization, and native camera processing built with Flutter.",
              tags: ["Flutter", "React Native", "iOS / Android"],
            },
            {
              title: "Multi-Region Cloud & DevOps",
              desc: "Kubernetes cluster auto-scaling, blue/green zero-downtime cutover, Terraform IaC, and Cloudflare Edge caching.",
              tags: ["AWS", "Docker / K8s", "Terraform"],
            },
            {
              title: "Enterprise Monolith Refactoring",
              desc: "Deconstruct legacy technical debt into event-driven resilient microservices with continuous data consistency.",
              tags: ["PostgreSQL", "Kafka", "GraphQL"],
            },
            {
              title: "Security & Penetration Audit",
              desc: "Institutional vulnerability analysis, zero-trust HIPAA/SOC-2 policies, and automated security scans.",
              tags: ["SOC-2", "HIPAA", "ISO 27001"],
            },
          ].map((srv, idx) => (
            <div
              key={idx}
              className="p-7 rounded-3xl glass-panel border border-[var(--border-strong)] flex flex-col justify-between shadow-xl hover:border-cyan-400/50 transition-colors"
            >
              <div>
                <h3 className="text-xl font-bold text-[var(--text-main)] mb-3">{srv.title}</h3>
                <p className="text-xs text-[var(--text-muted)] leading-relaxed mb-6">{srv.desc}</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {srv.tags.map((t, i) => (
                    <span key={i} className="text-[11px] font-mono px-2.5 py-1 rounded-xl bg-[var(--border-subtle)] text-cyan-400">
                      {t}
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

      {/* ============================================================ */}
      {/* 5. VERIFIED CLIENT PROOF & ROI METRICS                       */}
      {/* ============================================================ */}
      <section id="proof" className="py-20 px-6 lg:px-12 max-w-7xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-14 space-y-2">
          <span className="text-xs font-mono font-bold uppercase tracking-widest text-cyan-400">
            03 // DECLASSIFIED SUCCESS
          </span>
          <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-[var(--text-main)]">
            Verified Business Impact
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-7 rounded-3xl glass-panel border border-[var(--border-strong)] flex flex-col justify-between shadow-xl">
            <div>
              <div className="text-xs font-mono text-cyan-400 font-bold mb-1">INSURETECH // MENA</div>
              <h3 className="text-2xl font-black mb-2">eSanad</h3>
              <p className="text-xs text-[var(--text-muted)] leading-relaxed mb-6">
                Automated insurance aggregation system managing millions in instant policy underwriting.
              </p>
              <div className="p-5 rounded-2xl bg-[var(--bg-main)]/60 text-center mb-6 border border-[var(--border-subtle)]">
                <div className="text-4xl font-black text-cyan-400 mb-1">+340%</div>
                <div className="text-xs text-[var(--text-dim)] font-mono">Conversion Velocity</div>
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
                HIPAA-compliant telemedicine platform with live WebRTC triage and patient record management.
              </p>
              <div className="p-5 rounded-2xl bg-[var(--bg-main)]/60 text-center mb-6 border border-[var(--border-subtle)]">
                <div className="text-4xl font-black text-blue-400 mb-1">120k+</div>
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
              <div className="text-xs font-mono text-teal-400 font-bold mb-1">LOGISTICS // GLOBAL</div>
              <h3 className="text-2xl font-black mb-2">IKO International</h3>
              <p className="text-xs text-[var(--text-muted)] leading-relaxed mb-6">
                Real-time enterprise inventory intelligence and manufacturing supply chain synchronization tool.
              </p>
              <div className="p-5 rounded-2xl bg-[var(--bg-main)]/60 text-center mb-6 border border-[var(--border-subtle)]">
                <div className="text-4xl font-black text-teal-400 mb-1">99.98%</div>
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

      {/* ============================================================ */}
      {/* 6. INTERACTIVE POTENTIOMETER SPRINT ESTIMATOR                */}
      {/* ============================================================ */}
      <section id="estimator" className="py-20 px-6 lg:px-12 max-w-7xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-14 space-y-2">
          <span className="text-xs font-mono font-bold uppercase tracking-widest text-cyan-400">
            04 // REAL-TIME CALCULATION
          </span>
          <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-[var(--text-main)]">
            Sprint Scope Potentiometer
          </h2>
          <p className="text-sm text-[var(--text-muted)]">
            Adjust dedicated team size and duration faders to calculate immediate project parameters.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-7 space-y-6">
            <div className="p-6 rounded-3xl glass-panel border border-[var(--border-strong)]">
              <label className="text-xs font-mono font-bold uppercase tracking-wider block mb-4">
                1. System Category
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
                      setTier(t.id as any);
                    }}
                    className={`p-3 rounded-2xl text-xs font-bold transition-all cursor-pointer ${
                      tier === t.id
                        ? "bg-gradient-to-r from-blue-600 to-cyan-500 text-white shadow-lg"
                        : "bg-[var(--bg-main)]/60 text-[var(--text-muted)] border border-[var(--border-subtle)]"
                    }`}
                  >
                    {t.label}
                  </button>
                ))}
              </div>
            </div>

            <div className="p-6 rounded-3xl glass-panel border border-[var(--border-strong)] space-y-4">
              <div className="flex justify-between items-center">
                <label className="text-xs font-mono font-bold uppercase tracking-wider">
                  2. Sprint Duration (Weeks):
                </label>
                <span className="text-base font-black text-cyan-400 font-mono">{sprintWeeks} Weeks</span>
              </div>
              <input
                type="range"
                min="4"
                max="16"
                step="2"
                value={sprintWeeks}
                onChange={(e) => setSprintWeeks(Number(e.target.value))}
                className="w-full h-3 bg-[var(--border-strong)] rounded-lg appearance-none cursor-pointer accent-cyan-400"
              />
            </div>

            <div className="p-6 rounded-3xl glass-panel border border-[var(--border-strong)] space-y-4">
              <div className="flex justify-between items-center">
                <label className="text-xs font-mono font-bold uppercase tracking-wider">
                  3. Dedicated Senior Engineers:
                </label>
                <span className="text-base font-black text-blue-400 font-mono">{engineerCount} Engineers</span>
              </div>
              <input
                type="range"
                min="2"
                max="12"
                step="1"
                value={engineerCount}
                onChange={(e) => setEngineerCount(Number(e.target.value))}
                className="w-full h-3 bg-[var(--border-strong)] rounded-lg appearance-none cursor-pointer accent-blue-500"
              />
            </div>
          </div>

          <div className="lg:col-span-5 sticky top-24">
            <div className="p-8 rounded-3xl glass-panel border-2 border-cyan-400/50 shadow-2xl space-y-4">
              <span className="text-xs font-mono font-bold text-cyan-400 uppercase">
                CALCULATED INVESTMENT
              </span>
              <div className="text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-cyan-400 to-teal-300 my-2">
                {calculateEstimate()}
              </div>
              <p className="text-xs text-[var(--text-muted)] leading-relaxed pt-2 border-t border-[var(--border-subtle)]">
                Includes full IP assignment, dedicated in-house Surat squad, bi-weekly client demos, and 60 days of post-deployment warranty.
              </p>

              <MaterialRippleButton
                onClick={() => openQuote(`V4 Scope: ${tier.toUpperCase()} (${calculateEstimate()})`)}
                variant="accent"
                className="w-full py-4 text-xs font-extrabold uppercase tracking-wider"
              >
                <span>Reserve Sprint Availability</span>
                <ArrowRight className="w-4 h-4" />
              </MaterialRippleButton>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 7. CONTACT & SURAT HQ DISPATCH                               */}
      {/* ============================================================ */}
      <section id="contact" className="py-20 px-6 lg:px-12 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5 space-y-6">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-cyan-400">
              DIRECT DISPATCH
            </span>
            <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-[var(--text-main)]">
              Initiate Project Consultation
            </h2>
            <p className="text-sm text-[var(--text-muted)] leading-relaxed">
              Connect directly with our engineering leadership at Surat HQ. We review requirements, provide architectural blueprints, and return fixed-price estimates promptly.
            </p>

            <div className="space-y-4 text-xs font-mono">
              <div className="p-4 rounded-2xl glass-panel border border-[var(--border-subtle)] flex items-center gap-3">
                <MapPin className="w-5 h-5 text-cyan-400 shrink-0" />
                <span>SURAT, GUJARAT, INDIA (HQ CAMPUS)</span>
              </div>
              <div className="p-4 rounded-2xl glass-panel border border-[var(--border-subtle)] flex items-center gap-3">
                <Mail className="w-5 h-5 text-cyan-400 shrink-0" />
                <span>contact@opashsoftware.com</span>
              </div>
              <div className="p-4 rounded-2xl glass-panel border border-[var(--border-subtle)] flex items-center gap-3">
                <Phone className="w-5 h-5 text-cyan-400 shrink-0" />
                <span>+91 97277 88846 (24/7 Response)</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="p-8 rounded-3xl glass-panel border border-[var(--border-strong)] shadow-2xl">
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  openQuote("V4 Dispatch Form");
                }}
                className="space-y-4"
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <input
                    type="text"
                    required
                    placeholder="Your Full Name"
                    className="w-full p-4 rounded-2xl bg-[var(--bg-main)] border border-[var(--border-strong)] text-sm focus:outline-none focus:border-cyan-400"
                  />
                  <input
                    type="email"
                    required
                    placeholder="Work Email"
                    className="w-full p-4 rounded-2xl bg-[var(--bg-main)] border border-[var(--border-strong)] text-sm focus:outline-none focus:border-cyan-400"
                  />
                </div>
                <textarea
                  rows={4}
                  required
                  placeholder="Describe your technical requirements and launch timeline..."
                  className="w-full p-4 rounded-2xl bg-[var(--bg-main)] border border-[var(--border-strong)] text-sm focus:outline-none focus:border-cyan-400"
                />
                <MaterialRippleButton
                  type="submit"
                  variant="primary"
                  className="w-full py-4 text-xs font-extrabold uppercase tracking-wider"
                >
                  <Send className="w-4 h-4" />
                  <span>Send Project Blueprint Request</span>
                </MaterialRippleButton>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 8. COMPREHENSIVE ENTERPRISE FOOTER                           */}
      {/* ============================================================ */}
      <footer className="mt-20 py-12 px-6 lg:px-12 border-t border-[var(--border-subtle)] text-xs text-[var(--text-muted)]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="space-y-3">
            <div className="font-extrabold text-sm text-[var(--text-main)]">OPASH SOFTWARE // SCROLL V4</div>
            <p className="text-[11px] leading-relaxed">
              Scrollytelling & fluid spatial engineering, autonomous AI agent swarms, and high-concurrency cloud systems.
            </p>
          </div>
          <div>
            <div className="font-bold text-[var(--text-main)] mb-2 font-mono">CAPABILITIES</div>
            <ul className="space-y-1 text-[11px]">
              <li>Autonomous AI Agents</li>
              <li>Liquid Glass SaaS</li>
              <li>Flutter Native Mobile</li>
              <li>Kubernetes DevOps</li>
            </ul>
          </div>
          <div>
            <div className="font-bold text-[var(--text-main)] mb-2 font-mono">GLOBAL HUBS</div>
            <ul className="space-y-1 text-[11px]">
              <li>Surat HQ (Gujarat, India)</li>
              <li>North America (USA & Canada)</li>
              <li>United Kingdom & EU</li>
              <li>MENA Delivery Center</li>
            </ul>
          </div>
          <div>
            <div className="font-bold text-[var(--text-main)] mb-2 font-mono">GUARANTEE</div>
            <p className="text-[11px] leading-relaxed">
              100% Client Intellectual Property Rights, NDA-protected from day one, zero subcontractor handoff.
            </p>
          </div>
        </div>
        <div className="max-w-7xl mx-auto pt-6 border-t border-[var(--border-subtle)] flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-[11px]">
          <div>OPASH SOFTWARE // SCROLLYTELLING V4 EDITION // EST. 2017</div>
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
