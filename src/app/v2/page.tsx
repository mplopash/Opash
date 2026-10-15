"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { 
  ArrowRight, 
  Sparkles, 
  Layers, 
  ShieldCheck, 
  CheckCircle2, 
  ExternalLink,
  Phone,
  Mail,
  MapPin,
  Send,
  Zap,
  Globe2,
  Cpu,
  Smartphone,
  Code2,
  Sliders,
  DollarSign,
  Clock,
  Sun,
  Moon,
  Activity,
  Terminal,
  Server,
  Radio,
  FileText,
  Lock,
  Flame,
  Award
} from "lucide-react";
import { QuoteModal } from "@/components/sections/QuoteModal";
import { useTheme } from "@/context/ThemeContext";
import { MaterialRippleButton } from "@/components/effects/MaterialRippleButton";
import { soundEffects } from "@/lib/soundEffects";

export default function TactileHardwareV2Page() {
  const { mode, setMode } = useTheme();
  const [quoteModalOpen, setQuoteModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState("Custom Software Development");

  // Physical Hardware Switch States
  const [aiEngineActive, setAiEngineActive] = useState(true);
  const [soc2Active, setSoc2Active] = useState(true);
  const [codeAuditActive, setCodeAuditActive] = useState(true);
  const [cloudMeshActive, setCloudMeshActive] = useState(false);

  // Estimator Slider States
  const [sprintDuration, setSprintDuration] = useState(6); // 2 to 16 weeks
  const [teamSize, setTeamSize] = useState(4); // 2 to 12 engineers
  const [platformType, setPlatformType] = useState<"ai" | "saas" | "mobile" | "enterprise">("ai");

  // Oscilloscope Canvas Ref for CRT simulation
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let phase = 0;

    const render = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw oscilloscope grid
      ctx.strokeStyle = mode === "light" ? "rgba(14, 80, 215, 0.08)" : "rgba(0, 212, 255, 0.12)";
      ctx.lineWidth = 1;
      const step = 20;
      for (let x = 0; x < canvas.width; x += step) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, canvas.height);
        ctx.stroke();
      }
      for (let y = 0; y < canvas.height; y += step) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(canvas.width, y);
        ctx.stroke();
      }

      // Sine wave simulation of system telemetry
      ctx.beginPath();
      ctx.lineWidth = 2.5;
      ctx.strokeStyle = mode === "light" ? "#0e50d7" : "#00d4ff";
      ctx.shadowBlur = mode === "light" ? 4 : 10;
      ctx.shadowColor = mode === "light" ? "#0e50d7" : "#00d4ff";

      for (let x = 0; x < canvas.width; x++) {
        const freq = aiEngineActive ? 0.03 : 0.015;
        const amp = soc2Active ? 28 : 16;
        const y = canvas.height / 2 + Math.sin(x * freq + phase) * amp + Math.cos(x * 0.01 + phase * 0.5) * 8;
        if (x === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
      }
      ctx.stroke();

      phase += 0.05;
      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, [aiEngineActive, soc2Active, mode]);

  const openQuote = (service = "Custom Software Development") => {
    soundEffects.click();
    setSelectedService(service);
    setQuoteModalOpen(true);
  };

  const calculateHardwareEstimate = () => {
    let ratePerEngWeek = 1450;
    if (platformType === "ai") ratePerEngWeek = 1850;
    if (platformType === "mobile") ratePerEngWeek = 1600;
    if (platformType === "enterprise") ratePerEngWeek = 2100;

    let subtotal = sprintDuration * teamSize * ratePerEngWeek;
    if (aiEngineActive) subtotal += 2500;
    if (soc2Active) subtotal += 1500;
    if (codeAuditActive) subtotal += 1200;
    if (cloudMeshActive) subtotal += 1800;

    const rounded = Math.round(subtotal / 500) * 500;
    return `$${rounded.toLocaleString()}`;
  };

  const isLight = mode === "light";

  return (
    <div
      className={`min-h-screen transition-colors duration-300 font-sans selection:bg-[#0e50d7] selection:text-white pb-24 ${
        isLight
          ? "bg-[#eef2f6] text-[#1e293b]"
          : "bg-[#0b0f19] text-[#f1f5f9]"
      }`}
    >
      <style jsx global>{`
        /* True Tactile Skeuomorphism & Neomorphism Tokens */
        .tactile-convex-light {
          background: #eef2f6;
          box-shadow: 8px 8px 18px #d1d9e6, -8px -8px 18px #ffffff;
        }

        .tactile-concave-light {
          background: #eef2f6;
          box-shadow: inset 4px 4px 8px #d1d9e6, inset -4px -4px 8px #ffffff;
        }

        .tactile-btn-light {
          background: #eef2f6;
          box-shadow: 6px 6px 14px #d1d9e6, -6px -6px 14px #ffffff;
          transition: all 0.15s ease;
        }

        .tactile-btn-light:active {
          box-shadow: inset 3px 3px 6px #d1d9e6, inset -3px -3px 6px #ffffff;
          transform: translateY(1px);
        }

        /* Dark Neomorphism */
        .tactile-convex-dark {
          background: #111726;
          box-shadow: 10px 10px 24px #070a11, -8px -8px 20px #1b243b;
        }

        .tactile-concave-dark {
          background: #0d121f;
          box-shadow: inset 4px 4px 10px #06090e, inset -3px -3px 8px #172033;
        }

        .tactile-btn-dark {
          background: #131929;
          box-shadow: 6px 6px 16px #070a11, -5px -5px 14px #1c263d;
          transition: all 0.15s ease;
        }

        .tactile-btn-dark:active {
          box-shadow: inset 3px 3px 7px #06090e, inset -2px -2px 5px #172033;
          transform: translateY(1px);
        }
      `}</style>

      {/* ============================================================ */}
      {/* 1. TACTILE HARDWARE HEADER                                   */}
      {/* ============================================================ */}
      <header
        className={`sticky top-0 z-40 px-6 lg:px-12 py-4 border-b transition-colors backdrop-blur-md ${
          isLight ? "bg-[#eef2f6]/90 border-slate-300/60" : "bg-[#0b0f19]/90 border-slate-800"
        }`}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <Link href="/v2" className="flex items-center gap-3">
            <Image
              src="/logos/opash-icon.png"
              alt="Opash"
              width={40}
              height={40}
              className="w-10 h-10 object-contain rounded-xl"
            />
            <div>
              <div className="flex items-center gap-1.5">
                <span className="text-base font-extrabold tracking-tight">Opash</span>
                <span className="text-sm font-semibold text-[#00d4ff]">.Tactile</span>
                <span className="ml-1 text-[10px] px-2 py-0.5 rounded-full font-mono font-bold bg-blue-600/10 text-blue-500 border border-blue-500/20">
                  HARDWARE V2
                </span>
              </div>
              <div className="text-[10px] text-slate-400 font-mono">
                Physical Skeuomorphic Engineering Console
              </div>
            </div>
          </Link>

          {/* Physical Hardware Switches in Nav */}
          <div className="hidden xl:flex items-center gap-4">
            <div
              className={`flex items-center gap-2 px-3 py-1.5 rounded-xl ${
                isLight ? "tactile-concave-light" : "tactile-concave-dark"
              }`}
            >
              <span
                className={`w-2.5 h-2.5 rounded-full ${
                  aiEngineActive ? "bg-emerald-400 shadow-[0_0_8px_#34d399]" : "bg-slate-400"
                }`}
              />
              <span className="text-xs font-semibold">AI CORE: {aiEngineActive ? "ACTIVE" : "STANDBY"}</span>
              <button
                onClick={() => {
                  soundEffects.click();
                  setAiEngineActive(!aiEngineActive);
                }}
                className="text-xs text-blue-500 cursor-pointer hover:underline ml-1 font-mono font-bold"
              >
                TOGGLE
              </button>
            </div>

            <div
              className={`flex items-center gap-2 px-3 py-1.5 rounded-xl ${
                isLight ? "tactile-concave-light" : "tactile-concave-dark"
              }`}
            >
              <span
                className={`w-2.5 h-2.5 rounded-full ${
                  soc2Active ? "bg-cyan-400 shadow-[0_0_8px_#22d3ee]" : "bg-slate-400"
                }`}
              />
              <span className="text-xs font-semibold">SOC-2: {soc2Active ? "LOCKED" : "BYPASS"}</span>
            </div>
          </div>

          {/* Quick Nav Anchors */}
          <nav className="hidden lg:flex items-center gap-2 text-xs font-semibold">
            <a href="#services" className="px-3 py-1.5 rounded-lg hover:text-blue-500 transition-colors">
              Capabilities
            </a>
            <a href="#telemetry" className="px-3 py-1.5 rounded-lg hover:text-blue-500 transition-colors">
              Global Nodes
            </a>
            <a href="#industries" className="px-3 py-1.5 rounded-lg hover:text-blue-500 transition-colors">
              Industries
            </a>
            <a href="#proof" className="px-3 py-1.5 rounded-lg hover:text-blue-500 transition-colors">
              Case Proof
            </a>
            <a href="#estimator" className="px-3 py-1.5 rounded-lg hover:text-blue-500 transition-colors">
              Estimator
            </a>
          </nav>

          {/* Right Action & Theme Toggle */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => {
                soundEffects.click();
                setMode(isLight ? "dark" : "light");
              }}
              className={`p-2.5 rounded-xl cursor-pointer ${
                isLight ? "tactile-btn-light" : "tactile-btn-dark"
              }`}
              title="Toggle Light / Dark Mode"
            >
              {isLight ? <Moon className="w-4 h-4 text-blue-600" /> : <Sun className="w-4 h-4 text-amber-400" />}
            </button>

            <MaterialRippleButton
              onClick={() => openQuote()}
              variant="primary"
              className="px-5 py-2.5 rounded-xl text-xs uppercase tracking-wider"
            >
              Engage Squad
            </MaterialRippleButton>
          </div>
        </div>
      </header>

      {/* ============================================================ */}
      {/* 2. PROMINENT HIGH-IMPACT TACTILE HARDWARE HERO               */}
      {/* ============================================================ */}
      <section className="py-20 lg:py-28 px-6 lg:px-12 max-w-7xl mx-auto relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-6">
            <div
              className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-mono font-bold uppercase tracking-wider ${
                isLight ? "tactile-concave-light text-blue-600" : "tactile-concave-dark text-cyan-400"
              }`}
            >
              <Sparkles className="w-4 h-4 text-[#00d4ff]" />
              <span>TACTILE SKEUOMORPHIC SOFTWARE ENGINEERING // SURAT HQ</span>
            </div>

            <h1 className="text-4xl sm:text-6xl font-black tracking-tight leading-[1.08]">
              Physical-Grade <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-sky-500 to-cyan-400">
                Software & AI Systems
              </span>{" "}
              Engineered with Touch.
            </h1>

            <p className="text-base sm:text-lg text-slate-500 dark:text-slate-400 leading-relaxed max-w-xl">
              We construct mission-critical digital infrastructure for enterprise founders who demand tactile perfection. Over 70+ enterprise web platforms, mobile ecosystems, and autonomous AI agents shipped worldwide with zero downtime.
            </p>

            {/* Hardware Telemetry Counters */}
            <div className="grid grid-cols-3 gap-3 py-2">
              <div className={`p-4 rounded-2xl text-center ${isLight ? "tactile-concave-light" : "tactile-concave-dark"}`}>
                <div className="text-2xl sm:text-3xl font-black text-blue-600 dark:text-cyan-400">70+</div>
                <div className="text-[11px] text-slate-400 uppercase font-mono mt-0.5">Global Deployments</div>
              </div>
              <div className={`p-4 rounded-2xl text-center ${isLight ? "tactile-concave-light" : "tactile-concave-dark"}`}>
                <div className="text-2xl sm:text-3xl font-black text-emerald-500">50+</div>
                <div className="text-[11px] text-slate-400 uppercase font-mono mt-0.5">In-House Engineers</div>
              </div>
              <div className={`p-4 rounded-2xl text-center ${isLight ? "tactile-concave-light" : "tactile-concave-dark"}`}>
                <div className="text-2xl sm:text-3xl font-black text-sky-500">100%</div>
                <div className="text-[11px] text-slate-400 uppercase font-mono mt-0.5">Client IP Ownership</div>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <MaterialRippleButton
                onClick={() => openQuote()}
                variant="accent"
                className="px-8 py-4 rounded-2xl text-sm font-extrabold uppercase tracking-wider"
              >
                <span>Engage Dedicated Squad</span>
                <ArrowRight className="w-4 h-4" />
              </MaterialRippleButton>

              <a
                href="#proof"
                onClick={() => soundEffects.pop()}
                className={`px-8 py-4 rounded-2xl font-bold text-sm tracking-wider uppercase cursor-pointer ${
                  isLight ? "tactile-btn-light" : "tactile-btn-dark"
                }`}
              >
                Inspect 70+ Case Studies
              </a>
            </div>
          </div>

          {/* Right Hardware Deck with Animated CRT Oscilloscope */}
          <div className="lg:col-span-5">
            <div
              className={`p-7 rounded-3xl relative overflow-hidden ${
                isLight ? "tactile-convex-light" : "tactile-convex-dark"
              }`}
            >
              {/* Header Chassis Status Bar */}
              <div className="flex items-center justify-between pb-4 border-b border-slate-300 dark:border-slate-800">
                <div className="flex items-center gap-2">
                  <Radio className="w-4 h-4 text-cyan-400 animate-pulse" />
                  <span className="text-xs font-mono font-bold uppercase tracking-wider">
                    TELEMETRY OSCILLOSCOPE // CH-1
                  </span>
                </div>
                <div className="flex gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 shadow-[0_0_8px_#61BE99]" />
                  <span className="w-2.5 h-2.5 rounded-full bg-cyan-500 shadow-[0_0_8px_#06b6d4]" />
                  <span className="w-2.5 h-2.5 rounded-full bg-blue-500 shadow-[0_0_8px_#476D9A]" />
                </div>
              </div>

              {/* CRT Monitor Display */}
              <div className="py-4">
                <div
                  className={`p-3 rounded-2xl relative overflow-hidden ${
                    isLight ? "tactile-concave-light" : "tactile-concave-dark"
                  }`}
                >
                  <canvas
                    ref={canvasRef}
                    width={380}
                    height={140}
                    className="w-full h-[140px] rounded-xl block"
                  />
                  <div className="flex items-center justify-between text-[10px] font-mono text-slate-400 pt-2 px-1">
                    <span>STATUS: OPERATIONAL</span>
                    <span className="text-emerald-500 font-bold">LATENCY: 12ms</span>
                    <span>BURST: 2.4k req/s</span>
                  </div>
                </div>
              </div>

              {/* Physical Switches */}
              <div className="space-y-3 pb-2">
                <div
                  className={`p-3.5 rounded-2xl flex items-center justify-between ${
                    isLight ? "tactile-concave-light" : "tactile-concave-dark"
                  }`}
                >
                  <div>
                    <div className="text-xs font-bold">Autonomous AI Core</div>
                    <div className="text-[10px] text-slate-400">Multi-agent RAG vector memory</div>
                  </div>
                  <button
                    onClick={() => {
                      soundEffects.click();
                      setAiEngineActive(!aiEngineActive);
                    }}
                    className={`w-11 h-6 rounded-full p-1 transition-colors cursor-pointer ${
                      aiEngineActive ? "bg-blue-600" : "bg-slate-400 dark:bg-slate-700"
                    }`}
                  >
                    <div
                      className={`w-4 h-4 rounded-full bg-white shadow-md transition-transform ${
                        aiEngineActive ? "translate-x-5" : "translate-x-0"
                      }`}
                    />
                  </button>
                </div>

                <div
                  className={`p-3.5 rounded-2xl flex items-center justify-between ${
                    isLight ? "tactile-concave-light" : "tactile-concave-dark"
                  }`}
                >
                  <div>
                    <div className="text-xs font-bold">SOC-2 & HIPAA Shield</div>
                    <div className="text-[10px] text-slate-400">Audit-ready enterprise policy</div>
                  </div>
                  <button
                    onClick={() => {
                      soundEffects.click();
                      setSoc2Active(!soc2Active);
                    }}
                    className={`w-11 h-6 rounded-full p-1 transition-colors cursor-pointer ${
                      soc2Active ? "bg-emerald-600" : "bg-slate-400 dark:bg-slate-700"
                    }`}
                  >
                    <div
                      className={`w-4 h-4 rounded-full bg-white shadow-md transition-transform ${
                        soc2Active ? "translate-x-5" : "translate-x-0"
                      }`}
                    />
                  </button>
                </div>

                <div
                  className={`p-3.5 rounded-2xl flex items-center justify-between ${
                    isLight ? "tactile-concave-light" : "tactile-concave-dark"
                  }`}
                >
                  <div>
                    <div className="text-xs font-bold">Continuous Cloud Mesh</div>
                    <div className="text-[10px] text-slate-400">Multi-region Kubernetes cluster</div>
                  </div>
                  <button
                    onClick={() => {
                      soundEffects.click();
                      setCloudMeshActive(!cloudMeshActive);
                    }}
                    className={`w-11 h-6 rounded-full p-1 transition-colors cursor-pointer ${
                      cloudMeshActive ? "bg-cyan-600" : "bg-slate-400 dark:bg-slate-700"
                    }`}
                  >
                    <div
                      className={`w-4 h-4 rounded-full bg-white shadow-md transition-transform ${
                        cloudMeshActive ? "translate-x-5" : "translate-x-0"
                      }`}
                    />
                  </button>
                </div>
              </div>

              <div className="pt-3 border-t border-slate-300 dark:border-slate-800 flex justify-between text-[11px] text-slate-400 font-mono">
                <span>SURAT HQ SERVER ROOM</span>
                <span className="font-bold text-blue-500">100% IN-HOUSE SQUAD</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 3. GLOBAL NODE TELEMETRY (NEW COMPLETE SECTION)             */}
      {/* ============================================================ */}
      <section id="telemetry" className="py-20 px-6 lg:px-12 max-w-7xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-xs font-bold uppercase tracking-widest text-blue-500 font-mono">
            GLOBAL REACH // 14 COUNTRIES
          </span>
          <h2 className="text-3xl sm:text-5xl font-black tracking-tight mt-2 mb-4">
            Worldwide Delivery Nodes
          </h2>
          <p className="text-sm text-slate-500 dark:text-slate-400">
            Engineered at Surat HQ, deployed to mission-critical infrastructure in North America, Europe, MENA, and Asia-Pacific.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { region: "North America", hubs: "New York · SF · Toronto", active: "34 Projects", lat: "18ms", status: "Nominal" },
            { region: "Europe & UK", hubs: "London · Berlin · Amsterdam", active: "19 Projects", lat: "22ms", status: "Nominal" },
            { region: "Middle East (MENA)", hubs: "Dubai · Riyadh · Doha", active: "12 Projects", lat: "15ms", status: "Nominal" },
            { region: "India & APAC", hubs: "Surat HQ · Singapore · Sydney", active: "25+ Projects", lat: "8ms", status: "Core HQ" },
          ].map((node, i) => (
            <div
              key={i}
              className={`p-6 rounded-3xl flex flex-col justify-between ${
                isLight ? "tactile-convex-light" : "tactile-convex-dark"
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-mono font-bold text-blue-500">NODE 0{i + 1}</span>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-500 font-bold">
                    {node.status}
                  </span>
                </div>
                <h3 className="text-lg font-bold mb-1">{node.region}</h3>
                <div className="text-xs text-slate-400 font-mono mb-4">{node.hubs}</div>
              </div>
              <div
                className={`p-3 rounded-xl flex items-center justify-between text-xs font-mono ${
                  isLight ? "tactile-concave-light" : "tactile-concave-dark"
                }`}
              >
                <span>{node.active}</span>
                <span className="text-cyan-400 font-bold">RTT: {node.lat}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ============================================================ */}
      {/* 4. CORE ENGINEERING DISCIPLINES (TACTILE CARDS)             */}
      {/* ============================================================ */}
      <section id="services" className="py-20 px-6 lg:px-12 max-w-7xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-xs font-bold uppercase tracking-widest text-blue-500 font-mono">
            ENGINEERING CAPABILITIES
          </span>
          <h2 className="text-3xl sm:text-5xl font-black tracking-tight mt-2 mb-4">
            Built with Physical Precision
          </h2>
          <p className="text-sm text-slate-500 dark:text-slate-400">
            Every module engineered with strict performance budgets, automated unit coverage, and clean modular code.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              title: "AI & Machine Learning",
              desc: "Autonomous workflow agents, customized LLM fine-tuning, retrieval-augmented generation (RAG), and real-time computer vision.",
              tags: ["PyTorch", "LangChain", "OpenAI"],
            },
            {
              title: "Custom Web Engineering",
              desc: "Next.js 16 high-concurrency SaaS apps, performant database architectures, and reactive dashboards engineered for scale.",
              tags: ["Next.js", "React", "TypeScript"],
            },
            {
              title: "Mobile App Ecosystems",
              desc: "60 FPS cross-platform and native apps built with Flutter and React Native with tactile haptics, biometrics, and offline caching.",
              tags: ["Flutter", "React Native", "iOS / Android"],
            },
            {
              title: "Cloud & DevOps Automation",
              desc: "Zero-downtime blue/green deployments, auto-scaling Kubernetes clusters, and automated Terraform infrastructure.",
              tags: ["AWS", "Docker / K8s", "Terraform"],
            },
            {
              title: "Enterprise Modernization",
              desc: "Deconstruct monolithic legacy debt into event-driven microservices with zero downtime and improved fault isolation.",
              tags: ["PostgreSQL", "Kafka", "GraphQL"],
            },
            {
              title: "Architecture & Security Audit",
              desc: "Deep pen-testing, query performance profiling, code smell elimination, and institutional investor due-diligence preparation.",
              tags: ["HIPAA", "ISO 27001", "SOC-2"],
            },
          ].map((service, i) => (
            <div
              key={i}
              className={`p-7 rounded-3xl flex flex-col justify-between ${
                isLight ? "tactile-convex-light" : "tactile-convex-dark"
              }`}
            >
              <div>
                <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed mb-6">
                  {service.desc}
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {service.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className={`text-[11px] font-semibold px-2.5 py-1 rounded-xl ${
                        isLight ? "tactile-concave-light text-slate-700" : "tactile-concave-dark text-cyan-300"
                      }`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <button
                onClick={() => openQuote(service.title)}
                className={`w-full py-3 rounded-xl font-bold text-xs uppercase tracking-wider cursor-pointer ${
                  isLight ? "tactile-btn-light text-blue-600" : "tactile-btn-dark text-cyan-400"
                }`}
              >
                Configure Module
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* ============================================================ */}
      {/* 5. INDUSTRY VERTICALS (NEW COMPLETE SECTION)                 */}
      {/* ============================================================ */}
      <section id="industries" className="py-20 px-6 lg:px-12 max-w-7xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-xs font-bold uppercase tracking-widest text-blue-500 font-mono">
            SECTOR SPECIALIZATIONS
          </span>
          <h2 className="text-3xl sm:text-5xl font-black tracking-tight mt-2 mb-4">
            Domain-Specific Architecture
          </h2>
          <p className="text-sm text-slate-500 dark:text-slate-400">
            Tailored compliance and architectural patterns for heavily regulated and high-throughput verticals.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              title: "Fintech & Insuretech",
              desc: "Automated underwriting, algorithmic risk modeling, payment gateways, and PCI-DSS compliant ledgers.",
              stat: "$450M+",
              statLabel: "Volume Processed",
            },
            {
              title: "Healthcare & Medtech",
              desc: "HIPAA-compliant telehealth platforms, EHR/EMR interoperability, and encrypted patient data vaults.",
              stat: "120k+",
              statLabel: "Patients Managed",
            },
            {
              title: "Supply Chain & Logistics",
              desc: "Real-time fleet tracking, barcode/RFID automated warehouse reconciliation, and dispatch algorithms.",
              stat: "99.98%",
              statLabel: "Inventory Accuracy",
            },
            {
              title: "Enterprise SaaS & AI",
              desc: "Multi-tenant tenant isolation, autonomous LLM swarms, vector databases, and billing tiers.",
              stat: "99.99%",
              statLabel: "Target Uptime SLA",
            },
          ].map((ind, i) => (
            <div
              key={i}
              className={`p-7 rounded-3xl flex flex-col justify-between ${
                isLight ? "tactile-convex-light" : "tactile-convex-dark"
              }`}
            >
              <div>
                <h3 className="text-lg font-bold mb-2">{ind.title}</h3>
                <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed mb-6">
                  {ind.desc}
                </p>
              </div>
              <div
                className={`p-4 rounded-2xl text-center ${
                  isLight ? "tactile-concave-light" : "tactile-concave-dark"
                }`}
              >
                <div className="text-2xl font-black text-blue-600 dark:text-cyan-400">{ind.stat}</div>
                <div className="text-[10px] text-slate-400 uppercase font-mono mt-0.5">{ind.statLabel}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ============================================================ */}
      {/* 6. VERIFIED CLIENT PROOF & ROI METRICS                       */}
      {/* ============================================================ */}
      <section id="proof" className="py-20 px-6 lg:px-12 max-w-7xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-xs font-bold uppercase tracking-widest text-blue-500 font-mono">
            PROVEN CLIENT IMPACT
          </span>
          <h2 className="text-3xl sm:text-5xl font-black tracking-tight mt-2 mb-4">
            Declassified Client Success
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Case 1: eSanad */}
          <div
            className={`p-7 rounded-3xl ${
              isLight ? "tactile-convex-light" : "tactile-convex-dark"
            }`}
          >
            <div className="text-xs text-blue-500 font-bold mb-1">INSURETECH // MENA</div>
            <h3 className="text-2xl font-black mb-2">eSanad</h3>
            <p className="text-xs text-slate-500 dark:text-slate-400 mb-6">
              Instant insurance quotation & policy issuance aggregation platform handling millions in automated underwriting.
            </p>
            <div
              className={`p-5 rounded-2xl text-center mb-6 ${
                isLight ? "tactile-concave-light" : "tactile-concave-dark"
              }`}
            >
              <div className="text-4xl font-black text-cyan-500 mb-1">+340%</div>
              <div className="text-xs text-slate-400">Policy conversion speed</div>
            </div>
            <div className="text-xs text-slate-400 flex justify-between">
              <span>Next.js + Node.js</span>
              <span className="text-emerald-500 font-bold">Verified Case</span>
            </div>
          </div>

          {/* Case 2: UCareHQ */}
          <div
            className={`p-7 rounded-3xl ${
              isLight ? "tactile-convex-light" : "tactile-convex-dark"
            }`}
          >
            <div className="text-xs text-blue-500 font-bold mb-1">HEALTHCARE // USA</div>
            <h3 className="text-2xl font-black mb-2">UCareHQ</h3>
            <p className="text-xs text-slate-500 dark:text-slate-400 mb-6">
              HIPAA-compliant telemedicine platform with live WebRTC triage, patient record aggregation, and smart provider scheduling.
            </p>
            <div
              className={`p-5 rounded-2xl text-center mb-6 ${
                isLight ? "tactile-concave-light" : "tactile-concave-dark"
              }`}
            >
              <div className="text-4xl font-black text-blue-500 mb-1">120k+</div>
              <div className="text-xs text-slate-400">Patients securely managed</div>
            </div>
            <div className="text-xs text-slate-400 flex justify-between">
              <span>React + AWS HIPAA</span>
              <span className="text-emerald-500 font-bold">Verified Case</span>
            </div>
          </div>

          {/* Case 3: IKO */}
          <div
            className={`p-7 rounded-3xl ${
              isLight ? "tactile-convex-light" : "tactile-convex-dark"
            }`}
          >
            <div className="text-xs text-blue-500 font-bold mb-1">INDUSTRIAL // GLOBAL</div>
            <h3 className="text-2xl font-black mb-2">IKO International</h3>
            <p className="text-xs text-slate-500 dark:text-slate-400 mb-6">
              Real-time enterprise inventory intelligence and manufacturing supply chain synchronization tool.
            </p>
            <div
              className={`p-5 rounded-2xl text-center mb-6 ${
                isLight ? "tactile-concave-light" : "tactile-concave-dark"
              }`}
            >
              <div className="text-4xl font-black text-sky-500 mb-1">99.98%</div>
              <div className="text-xs text-slate-400">Inventory reconciliation rate</div>
            </div>
            <div className="text-xs text-slate-400 flex justify-between">
              <span>Python + PostgreSQL</span>
              <span className="text-emerald-500 font-bold">Verified Case</span>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 7. PHYSICAL HARDWARE SLIDER SPRINT ESTIMATOR                 */}
      {/* ============================================================ */}
      <section id="estimator" className="py-20 px-6 lg:px-12 max-w-7xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-xs font-bold uppercase tracking-widest text-blue-500 font-mono">
            TRANSPARENT SPRINT POTENTIOMETER
          </span>
          <h2 className="text-3xl sm:text-5xl font-black tracking-tight mt-2 mb-4">
            Hardware Scope & Pricing Calculator
          </h2>
          <p className="text-sm text-slate-500 dark:text-slate-400">
            Adjust team size and sprint duration faders to calculate your project framework immediately.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-7 space-y-6">
            {/* Platform Select */}
            <div
              className={`p-6 rounded-3xl ${
                isLight ? "tactile-convex-light" : "tactile-convex-dark"
              }`}
            >
              <label className="text-xs font-bold uppercase tracking-wider block mb-4 font-mono">
                1. System Category
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {[
                  { id: "ai", label: "AI Swarms" },
                  { id: "saas", label: "Web SaaS" },
                  { id: "mobile", label: "Mobile 60fps" },
                  { id: "enterprise", label: "Enterprise" },
                ].map((type) => (
                  <button
                    key={type.id}
                    onClick={() => {
                      soundEffects.click();
                      setPlatformType(type.id as any);
                    }}
                    className={`p-3 rounded-2xl text-xs font-bold cursor-pointer transition-all ${
                      platformType === type.id
                        ? "bg-blue-600 text-white shadow-lg"
                        : isLight ? "tactile-btn-light" : "tactile-btn-dark"
                    }`}
                  >
                    {type.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Slider 1: Sprint Duration */}
            <div
              className={`p-6 rounded-3xl ${
                isLight ? "tactile-convex-light" : "tactile-convex-dark"
              }`}
            >
              <div className="flex justify-between items-center mb-3">
                <label className="text-xs font-bold uppercase tracking-wider font-mono">
                  2. Sprint Velocity Duration:
                </label>
                <span className="text-base font-black text-blue-500">{sprintDuration} Weeks</span>
              </div>
              <input
                type="range"
                min="2"
                max="16"
                step="2"
                value={sprintDuration}
                onChange={(e) => setSprintDuration(Number(e.target.value))}
                className="w-full h-3 bg-slate-300 dark:bg-slate-700 rounded-lg appearance-none cursor-pointer accent-blue-600"
              />
              <div className="flex justify-between text-[11px] text-slate-400 mt-2 font-mono">
                <span>2 Wks (MVP)</span>
                <span>8 Wks (Standard)</span>
                <span>16 Wks (Enterprise)</span>
              </div>
            </div>

            {/* Slider 2: Team Size */}
            <div
              className={`p-6 rounded-3xl ${
                isLight ? "tactile-convex-light" : "tactile-convex-dark"
              }`}
            >
              <div className="flex justify-between items-center mb-3">
                <label className="text-xs font-bold uppercase tracking-wider font-mono">
                  3. Dedicated Engineer Squad:
                </label>
                <span className="text-base font-black text-cyan-500">{teamSize} Engineers</span>
              </div>
              <input
                type="range"
                min="2"
                max="12"
                step="1"
                value={teamSize}
                onChange={(e) => setTeamSize(Number(e.target.value))}
                className="w-full h-3 bg-slate-300 dark:bg-slate-700 rounded-lg appearance-none cursor-pointer accent-cyan-500"
              />
              <div className="flex justify-between text-[11px] text-slate-400 mt-2 font-mono">
                <span>2 Engineers</span>
                <span>6 Engineers</span>
                <span>12 Senior Architects</span>
              </div>
            </div>
          </div>

          {/* Right Result Card */}
          <div className="lg:col-span-5 sticky top-24">
            <div
              className={`p-8 rounded-3xl ${
                isLight ? "tactile-convex-light" : "tactile-convex-dark"
              }`}
            >
              <span className="text-xs font-bold uppercase tracking-wider text-slate-400 font-mono">
                CALCULATED SPRINT INVESTMENT
              </span>
              <div className="text-5xl font-black text-blue-600 dark:text-cyan-400 my-4">
                {calculateHardwareEstimate()}
              </div>
              <p className="text-xs text-slate-400 leading-relaxed mb-6">
                Includes 100% intellectual property ownership, milestone-based payments, and 60 days of post-deployment warranty.
              </p>

              <div
                className={`p-4 rounded-2xl space-y-2.5 text-xs mb-6 font-mono ${
                  isLight ? "tactile-concave-light" : "tactile-concave-dark"
                }`}
              >
                <div className="flex justify-between">
                  <span className="text-slate-400">Squad Architecture:</span>
                  <span className="font-bold">{teamSize} In-House Engineers</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">Deployment Window:</span>
                  <span className="font-bold">{sprintDuration} Weeks to Launch</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">Source Code:</span>
                  <span className="font-bold text-emerald-500">100% Client Held</span>
                </div>
              </div>

              <MaterialRippleButton
                onClick={() => openQuote(`Tactile Hardware Squad: ${teamSize} Engineers`)}
                variant="accent"
                className="w-full py-4 rounded-2xl text-xs font-extrabold uppercase tracking-wider"
              >
                <span>Reserve Squad Capacity</span>
                <ArrowRight className="w-4 h-4" />
              </MaterialRippleButton>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 8. FIELD LOGS & INSIGHTS (NEW COMPLETE SECTION)             */}
      {/* ============================================================ */}
      <section id="insights" className="py-20 px-6 lg:px-12 max-w-7xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-xs font-bold uppercase tracking-widest text-blue-500 font-mono">
            ENGINEERING FIELD LOGS
          </span>
          <h2 className="text-3xl sm:text-5xl font-black tracking-tight mt-2 mb-4">
            Technical Publications
          </h2>
          <p className="text-sm text-slate-500 dark:text-slate-400">
            Lessons learned shipping high-throughput systems and autonomous AI agents.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              tag: "AI ARCHITECTURE",
              title: "Migrating from Single-Agent Prompts to Hierarchical LangGraph Swarms",
              date: "OCT 2026",
              read: "6 MIN READ",
            },
            {
              tag: "PERFORMANCE",
              title: "Sub-50ms Global P99: Tuning Edge Caching with Next.js 16 and Cloudflare",
              date: "SEP 2026",
              read: "8 MIN READ",
            },
            {
              tag: "SECURITY",
              title: "Zero-Trust HIPAA Telehealth Architecture: A Practical Engineer's Blueprint",
              date: "AUG 2026",
              read: "10 MIN READ",
            },
          ].map((post, i) => (
            <div
              key={i}
              className={`p-7 rounded-3xl flex flex-col justify-between ${
                isLight ? "tactile-convex-light" : "tactile-convex-dark"
              }`}
            >
              <div>
                <div className="flex justify-between items-center text-[10px] font-mono text-blue-500 font-bold mb-3">
                  <span>{post.tag}</span>
                  <span className="text-slate-400">{post.date}</span>
                </div>
                <h3 className="text-lg font-bold mb-4 leading-snug">{post.title}</h3>
              </div>
              <div className="pt-4 border-t border-slate-300 dark:border-slate-800 flex justify-between items-center text-xs text-slate-400 font-mono">
                <span>{post.read}</span>
                <span className="text-blue-500 font-bold hover:underline cursor-pointer">READ LOG →</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ============================================================ */}
      {/* 9. CONTACT & SURAT HQ DISPATCH                               */}
      {/* ============================================================ */}
      <section id="contact" className="py-20 px-6 lg:px-12 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-5 space-y-6">
            <span className="text-xs font-bold uppercase tracking-widest text-blue-500 font-mono">
              DIRECT DISPATCH
            </span>
            <h2 className="text-3xl sm:text-5xl font-black tracking-tight">
              Initiate Project Consultation
            </h2>
            <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
              Connect directly with our engineering leadership at Surat HQ. We review requirements, provide architectural blueprints, and return fixed-price estimates promptly.
            </p>

            <div className="space-y-4 text-xs font-bold font-mono">
              <div
                className={`p-4 rounded-2xl flex items-center gap-3 ${
                  isLight ? "tactile-concave-light" : "tactile-concave-dark"
                }`}
              >
                <MapPin className="w-5 h-5 text-blue-500 shrink-0" />
                <span>SURAT, GUJARAT, INDIA (HQ CAMPUS)</span>
              </div>
              <div
                className={`p-4 rounded-2xl flex items-center gap-3 ${
                  isLight ? "tactile-concave-light" : "tactile-concave-dark"
                }`}
              >
                <Mail className="w-5 h-5 text-blue-500 shrink-0" />
                <span>contact@opashsoftware.com</span>
              </div>
              <div
                className={`p-4 rounded-2xl flex items-center gap-3 ${
                  isLight ? "tactile-concave-light" : "tactile-concave-dark"
                }`}
              >
                <Phone className="w-5 h-5 text-blue-500 shrink-0" />
                <span>+91 97277 88846 (24/7 Response)</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7">
            <div
              className={`p-8 rounded-3xl ${
                isLight ? "tactile-convex-light" : "tactile-convex-dark"
              }`}
            >
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  openQuote("Tactile Dispatch Form");
                }}
                className="space-y-5"
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="text-xs font-bold uppercase tracking-wider block mb-2 font-mono">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Sundar Pichai"
                      className={`w-full p-4 rounded-2xl text-sm focus:outline-none ${
                        isLight ? "tactile-concave-light" : "tactile-concave-dark"
                      }`}
                    />
                  </div>
                  <div>
                    <label className="text-xs font-bold uppercase tracking-wider block mb-2 font-mono">
                      Work Email *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="sundar@enterprise.com"
                      className={`w-full p-4 rounded-2xl text-sm focus:outline-none ${
                        isLight ? "tactile-concave-light" : "tactile-concave-dark"
                      }`}
                    />
                  </div>
                </div>

                <div>
                  <label className="text-xs font-bold uppercase tracking-wider block mb-2 font-mono">
                    Project Specification *
                  </label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Briefly describe your product goals, technical expectations, and delivery timeline..."
                    className={`w-full p-4 rounded-2xl text-sm focus:outline-none ${
                      isLight ? "tactile-concave-light" : "tactile-concave-dark"
                    }`}
                  />
                </div>

                <MaterialRippleButton
                  type="submit"
                  variant="primary"
                  className="w-full py-4 rounded-2xl text-xs font-extrabold uppercase tracking-wider"
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
      {/* 10. COMPREHENSIVE HARDWARE FOOTER                            */}
      {/* ============================================================ */}
      <footer
        className={`py-12 px-6 lg:px-12 border-t text-xs text-slate-500 ${
          isLight ? "border-slate-300" : "border-slate-800"
        }`}
      >
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="space-y-3">
            <div className="font-black text-sm text-[var(--text-main)]">OPASH SOFTWARE</div>
            <p className="text-[11px] leading-relaxed">
              Specialized custom software engineering, autonomous AI agent architecture, and mission-critical cloud deployments.
            </p>
          </div>
          <div>
            <div className="font-bold text-[var(--text-main)] mb-2 font-mono">CAPABILITIES</div>
            <ul className="space-y-1 text-[11px]">
              <li>Autonomous AI Swarms</li>
              <li>Next.js Enterprise SaaS</li>
              <li>Flutter & Native Mobile</li>
              <li>Kubernetes & DevOps</li>
            </ul>
          </div>
          <div>
            <div className="font-bold text-[var(--text-main)] mb-2 font-mono">GLOBAL HUBS</div>
            <ul className="space-y-1 text-[11px]">
              <li>Surat HQ Campus (India)</li>
              <li>North America (USA & Canada)</li>
              <li>United Kingdom & EU</li>
              <li>MENA Delivery Center</li>
            </ul>
          </div>
          <div>
            <div className="font-bold text-[var(--text-main)] mb-2 font-mono">GUARANTEE</div>
            <p className="text-[11px] leading-relaxed text-slate-400">
              100% Client Intellectual Property Rights, NDA-protected from day one, zero subcontractor handoff.
            </p>
          </div>
        </div>
        <div className="max-w-7xl mx-auto pt-6 border-t border-slate-300 dark:border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono">
          <div>OPASH SOFTWARE // TACTILE HARDWARE V2 EDITION // EST. 2017</div>
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
