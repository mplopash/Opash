"use client";

import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { 
  ArrowRight, 
  Sparkles, 
  CheckCircle2, 
  Terminal, 
  ShieldCheck, 
  Star, 
  Layers, 
  Zap, 
  Globe2, 
  Code2,
  Lock,
  Cpu,
  Activity,
  Server,
  CloudLightning,
  ChevronRight,
  Play,
  Copy,
  Check
} from "lucide-react";
import { HeroParticleCanvas } from "@/components/common/HeroParticleCanvas";
import { SpotlightCard } from "@/components/common/SpotlightCard";
import { BorderBeam } from "@/components/common/BorderBeam";
import { InteractiveHoverButton } from "@/components/ui/interactive-hover-button";
import { useTheme } from "@/context/ThemeContext";
import { soundEffects } from "@/lib/soundEffects";

interface HeroSectionProps {
  onOpenQuoteModal: () => void;
}

const rotatingWords = [
  "Custom Software",
  "AI & ML Solutions",
  "Scalable Web Apps",
  "Mobile Ecosystems",
  "Enterprise Cloud",
];

const architectureTabs = [
  {
    id: "frontend",
    label: "Frontend & Edge",
    icon: Layers,
    badge: "99.8% Speed Index",
    headline: "Next.js 16 + React 19 + Tailwind v4 + Lenis",
    desc: "Sub-second Core Web Vitals, dynamic tokenized theming, edge server rendering, and buttery 60fps micro-interactions.",
    code: `// Next.js 16 Edge Route Architecture
export const dynamic = 'force-dynamic';
export const runtime = 'edge';

export async function GET(req: Request) {
  const telemetry = await opashEngine.cluster.ping();
  return Response.json({
    status: 200,
    latency: '12ms',
    region: 'Surat-IN // Cloudflare-Edge',
    clientPayload: telemetry.optimizedBundle
  });
}`,
  },
  {
    id: "backend",
    label: "APIs & Core",
    icon: Terminal,
    badge: "15,000 req/sec",
    headline: "Node.js, Python FastAPI, Go & Microservices",
    desc: "High-throughput asynchronous event-driven pipelines, strict OpenAPI contracts, and self-healing Docker/Kubernetes clusters.",
    code: `// Python High-Velocity AI Inference Gateway
from fastapi import FastAPI, Depends
from opash_ai import ModelEnsemble

app = FastAPI(title="Opash Enterprise Neural Pipeline")

@app.post("/v1/neural-infer")
async def execute_task(prompt: InferenceTask):
    tokens = await ModelEnsemble.stream_reasoning(prompt)
    return {"status": "dispatched", "latency_ms": 14.2}`,
  },
  {
    id: "ai",
    label: "Autonomous AI",
    icon: Cpu,
    badge: "Vector RAG + LLMs",
    headline: "Custom Fine-Tuned Models & Agentic Workflows",
    desc: "Enterprise semantic memory, multimodal computer vision, automated workflow orchestrators, and private on-premise deployments.",
    code: `// Agentic Workflow Orchestration Matrix
const agentSwarm = new OpashAgentMesh({
  strategy: 'adaptive_reasoning',
  privacyZone: 'zero_retention_enterprise',
  ragEmbeddings: 'vector-768-dim'
});

await agentSwarm.deploySquad(['architect', 'coder', 'qa_auditor']);`,
  },
];

export function HeroSection({ onOpenQuoteModal }: HeroSectionProps) {
  const { mode } = useTheme();
  const isLight = mode === "light";
  const [wordIndex, setWordIndex] = useState(0);
  const [activeTab, setActiveTab] = useState("frontend");
  const [latency, setLatency] = useState(12);
  const [isExecutingTest, setIsExecutingTest] = useState(false);
  const [copied, setCopied] = useState(false);
  const [testResult, setTestResult] = useState<string | null>(null);

  const currentTab = architectureTabs.find((t) => t.id === activeTab) || architectureTabs[0];

  const handleRunTest = async () => {
    soundEffects.click();
    setIsExecutingTest(true);
    setTestResult(null);
    try {
      await new Promise((resolve) => setTimeout(resolve, 350));
      const calculated = Math.floor(Math.random() * 6) + 8; // 8-13ms
      setLatency(calculated);
      setTestResult(`Benchmark OK: 200 OK • Latency: ${calculated}ms • Edge Cache: HIT`);
    } finally {
      setIsExecutingTest(false);
    }
  };

  const handleCopyCode = () => {
    soundEffects.click();
    if (navigator.clipboard) {
      navigator.clipboard.writeText(currentTab.code);
    }
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(80);

  // Typewriter effect: letters come one-by-one with a blinking cursor line, pause, and cycle
  useEffect(() => {
    const currentWord = rotatingWords[loopNum % rotatingWords.length];

    const handleType = () => {
      if (!isDeleting) {
        setDisplayText(currentWord.substring(0, displayText.length + 1));
        setTypingSpeed(75);

        if (displayText.length + 1 >= currentWord.length) {
          setTypingSpeed(2200); // Pause on completed word
          setIsDeleting(true);
        }
      } else {
        setDisplayText(currentWord.substring(0, displayText.length - 1));
        setTypingSpeed(38); // Fast backspace

        if (displayText.length <= 1) {
          setIsDeleting(false);
          setLoopNum((prev) => prev + 1);
          setTypingSpeed(300); // Brief pause before starting next word
        }
      }
    };

    const timer = setTimeout(handleType, typingSpeed);
    return () => clearTimeout(timer);
  }, [displayText, isDeleting, loopNum, typingSpeed]);

  const handleScrollToEstimator = (e: React.MouseEvent) => {
    e.preventDefault();
    soundEffects.click();
    const el = document.getElementById("estimator");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
      el.classList.add("ring-4", "ring-[var(--accent)]");
      setTimeout(() => el.classList.remove("ring-4", "ring-[var(--accent)]"), 2000);
    }
  };

  return (
    <section id="hero" className="relative pt-28 pb-12 md:pt-36 md:pb-16 overflow-hidden bg-[var(--bg-main)] transition-colors duration-300">
      {/* High-Definition 3D Liquid Metal / Fluid Glass Background Video in Opash Brand Colors */}
      {isLight ? (
        <div className="absolute inset-0 w-full h-full pointer-events-none z-0 overflow-hidden bg-white">
          <div className="relative w-full h-full">
            <video
              className="w-full h-full object-cover hero-video-light opacity-80"
              src="/hero-bg.mp4"
              autoPlay
              muted
              loop
              playsInline
              preload="auto"
              disablePictureInPicture
              onEnded={(e) => {
                e.currentTarget.currentTime = 0;
                e.currentTarget.play().catch(() => {});
              }}
            />
            {/* Spotless Crystal Brand Blue with Minimal Green Highlight */}
            <div className="absolute inset-0 hero-video-light-tint" />
          </div>
          {/* Clean ambient radial illumination */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-15%,rgba(71,109,154,0.08),rgba(255,255,255,0))]" />
        </div>
      ) : (
        <div className="absolute inset-0 w-full h-full pointer-events-none z-0 overflow-hidden bg-[#060913]">
          <div className="relative w-full h-full">
            <video
              className="w-full h-full object-cover hero-video-dark opacity-85"
              src="/hero-bg.mp4"
              autoPlay
              muted
              loop
              playsInline
              preload="auto"
              disablePictureInPicture
              onEnded={(e) => {
                e.currentTarget.currentTime = 0;
                e.currentTarget.play().catch(() => {});
              }}
            />
            {/* Pure Brand Blue + Minimal Green Color Matrix Tint */}
            <div className="absolute inset-0 hero-video-dark-tint" />
            <div className="absolute inset-0 hero-video-dark-glow" />
          </div>
          {/* Hardware-accelerated radial gradients (0% CPU blur cost) */}
          <div className="absolute inset-0 bg-radial-[circle_at_50%_40%_rgba(6,9,19,0.3)_0%,rgba(6,9,19,0.85)_70%,#060913_100%]" />
          <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-[radial-gradient(ellipse_at_center,rgba(71,109,154,0.22)_0%,transparent_70%)] pointer-events-none" />
          <div className="absolute top-10 left-10 w-[300px] h-[300px] bg-[radial-gradient(circle_at_center,rgba(71,109,154,0.18)_0%,transparent_70%)] pointer-events-none" />
          <div className="absolute top-20 right-10 w-[350px] h-[350px] bg-[radial-gradient(circle_at_center,rgba(97,190,153,0.12)_0%,transparent_70%)] pointer-events-none" />
        </div>
      )}

      {/* Interactive Constellation Particle Canvas */}
      <div className="absolute inset-0 pointer-events-none z-0 transition-opacity duration-300 opacity-100">
        <HeroParticleCanvas />
      </div>

      {/* Subtle Architectural Grid Mesh */}
      <div className={`absolute inset-0 grid-mesh pointer-events-none z-0 transition-opacity duration-300 ${isLight ? "opacity-40" : "opacity-70"}`} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
        <div className="text-center max-w-4xl mx-auto space-y-6">
          {/* Main Headline with Strict Brand Typography */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-[var(--text-main)] leading-[1.08]">
            Engineering Next-Gen <br className="hidden sm:inline" />
            <span className="relative inline-block mt-2 min-h-[1.2em]">
              <span 
                className={`inline-block font-extrabold tracking-tight ${
                  isLight
                    ? "text-[#476D9A] drop-shadow-sm"
                    : "text-[#5784b8] drop-shadow-[0_0_35px_rgba(71,109,154,0.6)]"
                }`}
              >
                {displayText || "\u00A0"}
              </span>
              {/* Blinking kinetic cursor line in brand accent */}
              <span 
                className="inline-block w-[3.5px] h-[0.88em] ml-1 bg-[#5DC099] dark:bg-[#61BE99] align-middle rounded-full animate-pulse shadow-[0_0_12px_#61BE99]" 
                aria-hidden="true"
              />
              {/* Opash Logo Signature: Brand Blue Underline Bar with Minimal Green Accent Dot */}
              <span className="absolute -bottom-2 left-0 right-0 h-1.5 bg-[#476D9A] rounded-full opacity-90 shadow-[0_0_12px_rgba(71,109,154,0.5)] flex items-center justify-end pr-0.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#5DC099] dark:bg-[#61BE99] shadow-[0_0_6px_#61BE99]" />
              </span>
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg sm:text-xl text-[var(--text-muted)] max-w-2xl mx-auto leading-relaxed pt-2 font-normal">
            With the power of innovation and technology, Opash Software empowers startups, SMEs, and global enterprises to build high-performance web, mobile, and AI solutions delivered with agile sprint velocity.
          </p>

          {/* Dual CTAs - 21st.dev Interactive Hover Button and Cost Estimator */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <InteractiveHoverButton
              onClick={() => {
                soundEffects.click();
                onOpenQuoteModal();
              }}
              text="Get Free Project Scope & Quote"
              className="w-full sm:w-auto text-sm sm:text-base shadow-xl shadow-blue-600/30 font-bold py-3.5 px-8"
            />
            <Button
              variant="outline"
              size="lg"
              onClick={handleScrollToEstimator}
              leftIcon={<Sparkles className="w-4 h-4 text-[var(--accent)]" />}
              className="w-full sm:w-auto text-base bg-[var(--bg-card)]/80 backdrop-blur-md text-[var(--text-main)] font-semibold cursor-pointer"
            >
              Interactive Cost Estimator
            </Button>
          </div>

          {/* Trust badges - interactive on click */}
          <div className="pt-6 flex flex-wrap items-center justify-center gap-y-2 gap-x-6 text-xs text-[var(--text-muted)]">
            <button
              onClick={() => {
                soundEffects.hover();
                const el = document.getElementById("testimonials");
                if (el) el.scrollIntoView({ behavior: "smooth" });
              }}
              className="flex items-center gap-1.5 font-medium hover:text-[var(--text-main)] transition-colors cursor-pointer"
            >
              <Star className="w-4 h-4 text-amber-400 fill-amber-400" />
              100% Upwork Job Success
            </button>
            <button
              onClick={() => {
                soundEffects.hover();
                onOpenQuoteModal();
              }}
              className="flex items-center gap-1.5 font-medium hover:text-[var(--text-main)] transition-colors cursor-pointer"
            >
              <ShieldCheck className="w-4 h-4 text-[var(--primary-light)]" />
              Strict NDA & Full Code Ownership
            </button>
            <button
              onClick={() => {
                soundEffects.hover();
                const el = document.getElementById("why-us");
                if (el) el.scrollIntoView({ behavior: "smooth" });
              }}
              className="flex items-center gap-1.5 font-medium hover:text-[var(--text-main)] transition-colors cursor-pointer"
            >
              <Zap className="w-4 h-4 text-[var(--accent)]" />
              Agile Two-Week Sprints
            </button>
          </div>
        </div>

        {/* Steady, Ultra-Clean Architecture Console (No 3D Tilting - Creative Interactive Telemetry) */}
        <div className="mt-14 sm:mt-18 max-w-5xl mx-auto">
          <SpotlightCard className="liquid-glass liquid-border rounded-3xl p-5 sm:p-8 shadow-2xl relative border border-[var(--border-strong)] overflow-hidden">
            {/* Travelling Luminous Perimeter Beam in Brand Colors */}
            <BorderBeam size={320} duration={16} colorFrom="#476D9A" colorTo="#61BE99" />

            {/* Top Bar with Status and Tab Buttons */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-6 mb-6 border-b border-[var(--border-subtle)]">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-rose-500/80 inline-block shadow-sm" />
                <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block shadow-sm" />
                <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block shadow-sm" />
                <span className="text-xs text-[var(--text-dim)] font-mono ml-2 tracking-wider flex items-center gap-2">
                  <span>opash-core-engine::v4.2 // live telemetry</span>
                  <span className="inline-flex items-center gap-1 text-[10px] font-semibold font-mono px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-600 dark:bg-emerald-950/40 dark:text-emerald-400 border border-emerald-500/30 dark:border-emerald-800/60">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                    {latency}ms
                  </span>
                </span>
              </div>

              {/* Interactive Tabs */}
              <div className="flex items-center p-1 rounded-xl bg-[var(--bg-main)]/80 border border-[var(--border-subtle)] w-full sm:w-auto">
                {architectureTabs.map((tab) => {
                  const Icon = tab.icon;
                  const isActive = activeTab === tab.id;
                  return (
                    <button
                      key={tab.id}
                      onClick={() => {
                        soundEffects.click();
                        setActiveTab(tab.id);
                        setTestResult(null);
                      }}
                      className={`flex-1 sm:flex-initial flex items-center justify-center gap-2 px-3.5 py-2 rounded-xl text-xs font-semibold tracking-wide transition-all duration-200 cursor-pointer ${
                        isActive
                          ? "bg-[var(--primary)] text-white shadow-md shadow-blue-600/30 scale-[1.02]"
                          : "text-[var(--text-muted)] hover:text-[var(--text-main)] hover:bg-[var(--primary)]/10"
                      }`}
                    >
                      <Icon className="w-3.5 h-3.5" />
                      <span>{tab.label}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Main Interactive Body: Split Overview & Live Code Preview */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
              {/* Left Column: Spec Sheet */}
              <div className="lg:col-span-5 flex flex-col justify-between space-y-4 p-5 rounded-2xl bg-[var(--bg-card)]/90 border border-[var(--border-subtle)]">
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] font-mono uppercase tracking-wider text-[var(--accent)] font-bold">
                      Specification // {currentTab.label}
                    </span>
                    <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-emerald-500/10 text-emerald-500 border border-emerald-500/20">
                      {currentTab.badge}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-[var(--text-main)] leading-snug">
                    {currentTab.headline}
                  </h3>
                  <p className="text-xs text-[var(--text-muted)] leading-relaxed">
                    {currentTab.desc}
                  </p>
                </div>

                <div className="pt-4 border-t border-[var(--border-subtle)] grid grid-cols-3 gap-2 text-center">
                  <div 
                    onClick={() => onOpenQuoteModal()}
                    className="p-2 rounded-xl bg-[var(--bg-main)]/60 cursor-pointer hover:bg-[var(--primary)]/10 transition-colors"
                  >
                    <div className="text-sm font-extrabold text-[var(--accent)]">100%</div>
                    <div className="text-[9px] uppercase tracking-wider text-[var(--text-dim)] font-medium">Ownership</div>
                  </div>
                  <div 
                    onClick={() => onOpenQuoteModal()}
                    className="p-2 rounded-xl bg-[var(--bg-main)]/60 cursor-pointer hover:bg-[var(--primary)]/10 transition-colors"
                  >
                    <div className="text-sm font-extrabold text-[var(--primary-light)]">14-Day</div>
                    <div className="text-[9px] uppercase tracking-wider text-[var(--text-dim)] font-medium">Sprints</div>
                  </div>
                  <div 
                    onClick={() => onOpenQuoteModal()}
                    className="p-2 rounded-xl bg-[var(--bg-main)]/60 cursor-pointer hover:bg-[var(--primary)]/10 transition-colors"
                  >
                    <div className="text-sm font-extrabold text-emerald-500">Zero</div>
                    <div className="text-[9px] uppercase tracking-wider text-[var(--text-dim)] font-medium">Vendor Lock</div>
                  </div>
                </div>

                <button
                  onClick={() => {
                    soundEffects.click();
                    onOpenQuoteModal();
                  }}
                  className="w-full py-2.5 px-3 rounded-xl bg-[var(--primary)]/10 hover:bg-[var(--primary)] text-[var(--primary-light)] hover:text-white border border-[var(--primary)]/30 text-xs font-semibold flex items-center justify-center gap-1.5 transition-all cursor-pointer"
                >
                  <span>Build with {currentTab.label}</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>
              </div>

              {/* Right Column: Interactive Code Terminal */}
              <div className="lg:col-span-7 rounded-2xl bg-[#090d16] text-slate-200 border border-slate-800 p-4 font-mono text-xs overflow-x-auto shadow-inner relative flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between pb-3 mb-3 border-b border-slate-800/80">
                    <span className="text-[11px] text-slate-400 flex items-center gap-2">
                      <Terminal className="w-3.5 h-3.5 text-[#476D9A] dark:text-[#61BE99]" />
                      <span>opash-{currentTab.id}-spec.ts</span>
                    </span>
                    <div className="flex items-center gap-2">
                      <button
                        onClick={handleRunTest}
                        disabled={isExecutingTest}
                        className="px-2.5 py-1 rounded bg-[#476D9A]/20 hover:bg-[#476D9A] text-[#61BE99] hover:text-white text-[10px] font-semibold flex items-center gap-1.5 transition-all cursor-pointer disabled:opacity-50"
                        title="Simulate Edge Request"
                      >
                        <Play className={`w-3 h-3 ${isExecutingTest ? "animate-spin" : ""}`} />
                        <span>{isExecutingTest ? "Pinging..." : "Test Latency"}</span>
                      </button>
                      <button
                        onClick={handleCopyCode}
                        className="px-2.5 py-1 rounded bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white text-[10px] font-semibold flex items-center gap-1.5 transition-all cursor-pointer"
                        title="Copy Code Specification"
                      >
                        {copied ? <Check className="w-3 h-3 text-[#61BE99]" /> : <Copy className="w-3 h-3" />}
                        <span>{copied ? "Copied!" : "Copy"}</span>
                      </button>
                    </div>
                  </div>
                  <pre className="text-slate-300 leading-relaxed overflow-x-auto">
                    <code>{currentTab.code}</code>
                  </pre>
                </div>

                {/* Simulated Telemetry Benchmark Output */}
                {testResult && (
                  <div className="mt-4 pt-2.5 border-t border-slate-800/80 flex items-center justify-between text-[11px] text-[#61BE99] animate-in fade-in slide-in-from-bottom-1 duration-200">
                    <span className="flex items-center gap-1.5 font-mono">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#5DC099] dark:bg-[#61BE99] animate-pulse" />
                      {testResult}
                    </span>
                    <span className="text-[10px] text-slate-400 font-mono">Surat HQ Edge // HTTP/3</span>
                  </div>
                )}
              </div>
            </div>
          </SpotlightCard>
        </div>
      </div>
    </section>
  );
}
