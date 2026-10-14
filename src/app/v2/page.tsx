"use client";

import React, { useState } from "react";
import Link from "next/link";
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
  ToggleLeft,
  ToggleRight
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
  const [codeAuditActive, setCodeAuditActive] = useState(false);

  // Estimator Slider States
  const [sprintDuration, setSprintDuration] = useState(6); // 2 to 16 weeks
  const [teamSize, setTeamSize] = useState(4); // 2 to 12 engineers
  const [platformType, setPlatformType] = useState<"ai" | "saas" | "mobile">("ai");

  const openQuote = (service = "Custom Software Development") => {
    soundEffects.click();
    setSelectedService(service);
    setQuoteModalOpen(true);
  };

  const calculateHardwareEstimate = () => {
    let ratePerEngWeek = 1450;
    if (platformType === "ai") ratePerEngWeek = 1850;
    if (platformType === "mobile") ratePerEngWeek = 1600;

    let subtotal = sprintDuration * teamSize * ratePerEngWeek;
    if (aiEngineActive) subtotal += 2500;
    if (soc2Active) subtotal += 1500;
    if (codeAuditActive) subtotal += 1200;

    const rounded = Math.round(subtotal / 500) * 500;
    return `$${rounded.toLocaleString()}`;
  };

  const isLight = mode === "light";

  return (
    <div
      className={`min-h-screen transition-colors duration-300 font-sans selection:bg-[#0e50d7] selection:text-white ${
        isLight
          ? "bg-[#eef2f6] text-[#1e293b]"
          : "bg-[#111622] text-[#f1f5f9]"
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
          background: #151b2a;
          box-shadow: 8px 8px 20px #0b0e17, -6px -6px 16px #1f283d;
        }

        .tactile-concave-dark {
          background: #0f1420;
          box-shadow: inset 4px 4px 10px #080a10, inset -3px -3px 8px #1a2336;
        }

        .tactile-btn-dark {
          background: #161c2c;
          box-shadow: 5px 5px 14px #0b0e17, -4px -4px 12px #212a41;
          transition: all 0.15s ease;
        }

        .tactile-btn-dark:active {
          box-shadow: inset 3px 3px 6px #080a10, inset -2px -2px 5px #1a2336;
          transform: translateY(1px);
        }
      `}</style>

      {/* ============================================================ */}
      {/* 1. TACTILE HARDWARE HEADER                                   */}
      {/* ============================================================ */}
      <header
        className={`sticky top-0 z-40 px-6 lg:px-12 py-4 border-b transition-colors backdrop-blur-md ${
          isLight ? "bg-[#eef2f6]/90 border-slate-300/60" : "bg-[#111622]/90 border-slate-800"
        }`}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <Link href="/v2" className="flex items-center gap-3">
            <div
              className={`w-10 h-10 rounded-2xl flex items-center justify-center font-black text-xl text-[#0e50d7] ${
                isLight ? "tactile-convex-light" : "tactile-convex-dark"
              }`}
            >
              O
            </div>
            <div>
              <span className="text-base font-extrabold tracking-tight">Opash</span>
              <span className="text-sm font-semibold text-[#00d4ff]">.Tactile</span>
              <span className="ml-2 text-[10px] px-2 py-0.5 rounded-full font-mono font-bold bg-blue-600/10 text-blue-500 border border-blue-500/20">
                HARDWARE V2
              </span>
            </div>
          </Link>

          {/* Physical Hardware Switches in Nav */}
          <div className="hidden lg:flex items-center gap-6">
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
              <span className="text-xs font-semibold">AI ENGINE: {aiEngineActive ? "ACTIVE" : "STANDBY"}</span>
              <button
                onClick={() => {
                  soundEffects.click();
                  setAiEngineActive(!aiEngineActive);
                }}
                className="text-xs text-blue-500 cursor-pointer hover:underline ml-1"
              >
                TOGGLE
              </button>
            </div>
          </div>

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
              Deploy Team
            </MaterialRippleButton>
          </div>
        </div>
      </header>

      {/* ============================================================ */}
      {/* 2. TACTILE HARDWARE HERO                                     */}
      {/* ============================================================ */}
      <section className="py-20 lg:py-28 px-6 lg:px-12 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-6">
            <div
              className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider ${
                isLight ? "tactile-concave-light text-blue-600" : "tactile-concave-dark text-cyan-400"
              }`}
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>TACTILE SKEUOMORPHIC SOFTWARE ENGINEERING</span>
            </div>

            <h1 className="text-4xl sm:text-6xl font-black tracking-tight leading-[1.08]">
              Physical-Grade <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-sky-500 to-cyan-400">
                Software & AI Systems
              </span>{" "}
              Engineered with Touch.
            </h1>

            <p className="text-base text-slate-500 dark:text-slate-400 leading-relaxed max-w-xl">
              We construct mission-critical digital infrastructure for founders who demand tactile perfection. Over 70+ enterprise web platforms, mobile ecosystems, and autonomous AI agents shipped worldwide.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-4">
              <MaterialRippleButton
                onClick={() => openQuote()}
                variant="accent"
                className="px-7 py-4 rounded-2xl text-sm font-extrabold uppercase tracking-wider"
              >
                <span>Engage Dedicated Squad</span>
                <ArrowRight className="w-4 h-4" />
              </MaterialRippleButton>

              <a
                href="#proof"
                onClick={() => soundEffects.pop()}
                className={`px-7 py-4 rounded-2xl font-bold text-sm tracking-wider uppercase cursor-pointer ${
                  isLight ? "tactile-btn-light" : "tactile-btn-dark"
                }`}
              >
                Inspect 70+ Case Studies
              </a>
            </div>
          </div>

          {/* Right Tactile Hardware Deck */}
          <div className="lg:col-span-5">
            <div
              className={`p-7 rounded-3xl ${
                isLight ? "tactile-convex-light" : "tactile-convex-dark"
              }`}
            >
              <div className="flex items-center justify-between pb-4 border-b border-slate-300 dark:border-slate-800">
                <span className="text-xs font-bold uppercase tracking-wider">HARDWARE CONSOLE</span>
                <div className="flex gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 shadow-[0_0_8px_#10b981]" />
                  <span className="w-2.5 h-2.5 rounded-full bg-cyan-500 shadow-[0_0_8px_#06b6d4]" />
                  <span className="w-2.5 h-2.5 rounded-full bg-blue-500 shadow-[0_0_8px_#3b82f6]" />
                </div>
              </div>

              {/* Physical Switches */}
              <div className="py-6 space-y-4">
                <div
                  className={`p-4 rounded-2xl flex items-center justify-between ${
                    isLight ? "tactile-concave-light" : "tactile-concave-dark"
                  }`}
                >
                  <div>
                    <div className="text-sm font-bold">Autonomous AI Core</div>
                    <div className="text-xs text-slate-400">Multi-agent RAG reasoning</div>
                  </div>
                  <button
                    onClick={() => {
                      soundEffects.click();
                      setAiEngineActive(!aiEngineActive);
                    }}
                    className={`w-12 h-7 rounded-full p-1 transition-colors cursor-pointer ${
                      aiEngineActive ? "bg-blue-600" : "bg-slate-400 dark:bg-slate-700"
                    }`}
                  >
                    <div
                      className={`w-5 h-5 rounded-full bg-white shadow-md transition-transform ${
                        aiEngineActive ? "translate-x-5" : "translate-x-0"
                      }`}
                    />
                  </button>
                </div>

                <div
                  className={`p-4 rounded-2xl flex items-center justify-between ${
                    isLight ? "tactile-concave-light" : "tactile-concave-dark"
                  }`}
                >
                  <div>
                    <div className="text-sm font-bold">SOC-2 & HIPAA Shield</div>
                    <div className="text-xs text-slate-400">Audit-ready compliance</div>
                  </div>
                  <button
                    onClick={() => {
                      soundEffects.click();
                      setSoc2Active(!soc2Active);
                    }}
                    className={`w-12 h-7 rounded-full p-1 transition-colors cursor-pointer ${
                      soc2Active ? "bg-emerald-600" : "bg-slate-400 dark:bg-slate-700"
                    }`}
                  >
                    <div
                      className={`w-5 h-5 rounded-full bg-white shadow-md transition-transform ${
                        soc2Active ? "translate-x-5" : "translate-x-0"
                      }`}
                    />
                  </button>
                </div>

                <div
                  className={`p-4 rounded-2xl flex items-center justify-between ${
                    isLight ? "tactile-concave-light" : "tactile-concave-dark"
                  }`}
                >
                  <div>
                    <div className="text-sm font-bold">Independent Code Audit</div>
                    <div className="text-xs text-slate-400">Pen-testing & optimization</div>
                  </div>
                  <button
                    onClick={() => {
                      soundEffects.click();
                      setCodeAuditActive(!codeAuditActive);
                    }}
                    className={`w-12 h-7 rounded-full p-1 transition-colors cursor-pointer ${
                      codeAuditActive ? "bg-cyan-600" : "bg-slate-400 dark:bg-slate-700"
                    }`}
                  >
                    <div
                      className={`w-5 h-5 rounded-full bg-white shadow-md transition-transform ${
                        codeAuditActive ? "translate-x-5" : "translate-x-0"
                      }`}
                    />
                  </button>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-300 dark:border-slate-800 flex justify-between text-xs text-slate-400">
                <span>SURAT HQ CAMPUS</span>
                <span className="font-bold text-blue-500">50+ IN-HOUSE TALENT</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 3. CORE ENGINEERING DISCIPLINES (TACTILE CARDS)             */}
      {/* ============================================================ */}
      <section id="services" className="py-20 px-6 lg:px-12 max-w-7xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-xs font-bold uppercase tracking-widest text-blue-500">
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
      {/* 4. VERIFIED CLIENT PROOF & ROI METRICS                       */}
      {/* ============================================================ */}
      <section id="proof" className="py-20 px-6 lg:px-12 max-w-7xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-xs font-bold uppercase tracking-widest text-blue-500">
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
      {/* 5. PHYSICAL HARDWARE SLIDER SPRINT ESTIMATOR                 */}
      {/* ============================================================ */}
      <section id="estimator" className="py-20 px-6 lg:px-12 max-w-7xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-xs font-bold uppercase tracking-widest text-blue-500">
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
              <label className="text-xs font-bold uppercase tracking-wider block mb-4">
                1. System Category
              </label>
              <div className="grid grid-cols-3 gap-3">
                {[
                  { id: "ai", label: "AI Autonomous Agents" },
                  { id: "saas", label: "Web SaaS Platform" },
                  { id: "mobile", label: "Mobile Apps (iOS/Android)" },
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
                <label className="text-xs font-bold uppercase tracking-wider">
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
              <div className="flex justify-between text-[11px] text-slate-400 mt-2">
                <span>2 Weeks (MVP Sprint)</span>
                <span>8 Weeks (Standard)</span>
                <span>16 Weeks (Enterprise)</span>
              </div>
            </div>

            {/* Slider 2: Team Size */}
            <div
              className={`p-6 rounded-3xl ${
                isLight ? "tactile-convex-light" : "tactile-convex-dark"
              }`}
            >
              <div className="flex justify-between items-center mb-3">
                <label className="text-xs font-bold uppercase tracking-wider">
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
              <div className="flex justify-between text-[11px] text-slate-400 mt-2">
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
              <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
                CALCULATED SPRINT INVESTMENT
              </span>
              <div className="text-5xl font-black text-blue-600 dark:text-cyan-400 my-4">
                {calculateHardwareEstimate()}
              </div>
              <p className="text-xs text-slate-400 leading-relaxed mb-6">
                Includes 100% intellectual property ownership, milestone-based payments, and 60 days of post-deployment warranty.
              </p>

              <div
                className={`p-4 rounded-2xl space-y-2.5 text-xs mb-6 ${
                  isLight ? "tactile-concave-light" : "tactile-concave-dark"
                }`}
              >
                <div className="flex justify-between">
                  <span className="text-slate-400">Squad Architecture:</span>
                  <span className="font-bold">{teamSize} Full-Time In-House Engineers</span>
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
      {/* 6. CONTACT & SURAT HQ DISPATCH                               */}
      {/* ============================================================ */}
      <section id="contact" className="py-20 px-6 lg:px-12 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-5 space-y-6">
            <span className="text-xs font-bold uppercase tracking-widest text-blue-500">
              DIRECT DISPATCH
            </span>
            <h2 className="text-3xl sm:text-5xl font-black tracking-tight">
              Initiate Project Consultation
            </h2>
            <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
              Connect directly with our engineering leadership at Surat HQ. We review requirements, provide architectural blueprints, and return fixed-price estimates promptly.
            </p>

            <div className="space-y-4 text-xs font-bold">
              <div
                className={`p-4 rounded-2xl flex items-center gap-3 ${
                  isLight ? "tactile-concave-light" : "tactile-concave-dark"
                }`}
              >
                <MapPin className="w-5 h-5 text-blue-500" />
                <span>SURAT, GUJARAT, INDIA (HQ CAMPUS)</span>
              </div>
              <div
                className={`p-4 rounded-2xl flex items-center gap-3 ${
                  isLight ? "tactile-concave-light" : "tactile-concave-dark"
                }`}
              >
                <Mail className="w-5 h-5 text-blue-500" />
                <span>contact@opashsoftware.com</span>
              </div>
              <div
                className={`p-4 rounded-2xl flex items-center gap-3 ${
                  isLight ? "tactile-concave-light" : "tactile-concave-dark"
                }`}
              >
                <Phone className="w-5 h-5 text-blue-500" />
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
                    <label className="text-xs font-bold uppercase tracking-wider block mb-2">
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
                    <label className="text-xs font-bold uppercase tracking-wider block mb-2">
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
                  <label className="text-xs font-bold uppercase tracking-wider block mb-2">
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

      {/* Footer */}
      <footer
        className={`py-10 px-6 lg:px-12 border-t text-xs text-slate-500 flex flex-col sm:flex-row items-center justify-between gap-4 ${
          isLight ? "border-slate-300" : "border-slate-800"
        }`}
      >
        <div>OPASH SOFTWARE // TACTILE HARDWARE V2 EDITION // EST. 2017</div>
        <div>SURAT HQ // 100% CODE OWNERSHIP // © 2026 OPASH</div>
      </footer>

      <QuoteModal
        isOpen={quoteModalOpen}
        onClose={() => setQuoteModalOpen(false)}
        initialService={selectedService}
      />
    </div>
  );
}
