"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Cpu, 
  Layers, 
  Smartphone, 
  ShieldCheck, 
  ArrowRight, 
  ArrowUpRight,
  CheckCircle2, 
  Terminal, 
  Zap, 
  Globe2, 
  Server,
  Lock,
  Code2,
  Check,
  Copy,
  Sparkles,
  ChevronRight
} from "lucide-react";
import { soundEffects } from "@/lib/soundEffects";
import { useTheme } from "@/context/ThemeContext";

interface CohereStackedCardsSectionProps {
  onOpenQuoteModal: (service?: string) => void;
}

interface TierCardData {
  id: string;
  num: string;
  shortLabel: string;
  icon: React.ElementType;
  tag: string;
  title: string;
  headline: string;
  desc: string;
  specs: { label: string; value: string }[];
  terminalFile: string;
  codeSnippet: string;
  statusBadge: string;
}

const TIERS: TierCardData[] = [
  {
    id: "ai-core",
    num: "01",
    shortLabel: "AI Swarms",
    icon: Cpu,
    tag: "AUTONOMOUS INTELLIGENCE LAYER",
    title: "Agentic Reasoning & Semantic Memory",
    headline: "Custom Enterprise AI Swarms Engineered for Private Workflows",
    desc: "Move beyond simple chat wrappers. We construct multi-agent reasoning meshes that ingest multi-modal documents, query internal relational databases, and execute multi-step business logic with zero human intervention.",
    specs: [
      { label: "Vector Indexing", value: "pgvector + HNSW" },
      { label: "Reasoning Latency", value: "< 140ms P99" },
      { label: "Data Retention", value: "0% Third-Party Logging" },
      { label: "Deployment", value: "Private AWS / On-Prem" },
    ],
    terminalFile: "agent-mesh.config.ts",
    statusBadge: "ZERO_RETENTION_AI",
    codeSnippet: `// Agentic Workflow Orchestration Mesh
import { OpashAgentMesh, VectorStore } from '@opash/neural-core';

export const swarm = new OpashAgentMesh({
  coordinator: 'adaptive_planner',
  ragStore: new VectorStore({ index: 'pgvector_hnsw', dim: 1536 }),
  privacyZone: 'zero_retention_enterprise',
  maxHops: 8
});

// Autonomous Multi-Step Dispatch
const execution = await swarm.dispatch([
  'system_architect', 
  'distributed_coder', 
  'security_auditor'
]);`,
  },
  {
    id: "edge-runtime",
    num: "02",
    shortLabel: "Edge Stream",
    icon: Zap,
    tag: "HIGH-CONCURRENCY INFRASTRUCTURE",
    title: "Sub-10ms Distributed Edge Computing",
    headline: "Next.js 16 Reactive Architecture Built for Global Scale",
    desc: "Architected for millions of simultaneous transactions with zero jitter. Server-rendered layouts, dynamic streaming hydration, edge key-value caching, and self-healing microservice clusters.",
    specs: [
      { label: "Global P99", value: "12ms DNS Resolution" },
      { label: "Burst Concurrency", value: "25k req/sec" },
      { label: "Availability SLA", value: "99.99% Guaranteed" },
      { label: "Cutover Policy", value: "Zero-Downtime Blue/Green" },
    ],
    terminalFile: "edge-pipeline.ts",
    statusBadge: "SUB_10MS_STREAM",
    codeSnippet: `// Next.js 16 High-Concurrency Edge Stream
export const runtime = 'edge';
export const preferredRegion = ['iad1', 'fra1', 'bom1', 'sin1'];

export async function GET(req: Request) {
  const stream = await cacheMesh.pipeline({ 
    buffer: 'zero_copy',
    strategy: 'stale_while_revalidate',
    revalidateSeconds: 60
  });

  return new Response(stream, { 
    headers: { 'Cache-Control': 's-maxage=60, stale-while-revalidate=86400' } 
  });
}`,
  },
  {
    id: "fluid-mobile",
    num: "03",
    shortLabel: "Mobile 120Hz",
    icon: Smartphone,
    tag: "TACTILE CROSS-PLATFORM SYSTEMS",
    title: "60–120 FPS Flutter & Native Mobile Ecosystems",
    headline: "Fluid Physical Interfaces with Biometric Offline Sync",
    desc: "Mobile applications that feel indistinguishable from bespoke physical hardware. Haptic tactile feedback, offline-first SQLite synchronization, background thread biometrics, and pixel-precise fluid motion.",
    specs: [
      { label: "Frame Budget", value: "120 FPS Impeller" },
      { label: "Offline Resilience", value: "100% Conflict-Free CRDT" },
      { label: "App Store Rating", value: "4.9★ Average" },
      { label: "Framework", value: "Flutter 3.x + Swift/Kotlin" },
    ],
    terminalFile: "offline_sync_bloc.dart",
    statusBadge: "120HZ_IMPELLER",
    codeSnippet: `// Haptic Offline-First Architecture
class CoreEngineBloc extends Bloc<SyncEvent, SyncState> {
  CoreEngineBloc() : super(EngineNominal()) {
    on<TriggerLocalMutation>((event, emit) async {
      // Offline-First Vector Clock Commit
      await localDb.commitWithVectorClock(event.payload);
      HapticFeedback.lightImpact();
      
      // Async Mesh Queue for Distributed Reconcile
      meshQueue.enqueueBackgroundSync(retryBudget: 5);
      emit(EngineSynchronized());
    });
  }
}`,
  },
  {
    id: "governance",
    num: "04",
    shortLabel: "Sovereign IP",
    icon: ShieldCheck,
    tag: "INSTITUTIONAL GOVERNANCE & SECURITY",
    title: "Sovereign Code Handover & Audit Immunity",
    headline: "100% In-House Surat Squad with Mutual NDA from Day One",
    desc: "We don't freelance or broker talent. Over 50+ full-time in-house engineers at our Surat HQ campus execute your roadmap with institutional rigor, SOC-2 Type II audit compliance, and clean git ownership transferred on every sprint.",
    specs: [
      { label: "Talent Model", value: "100% In-House Surat Campus" },
      { label: "IP Ownership", value: "Complete Client Assignment" },
      { label: "Compliance", value: "SOC-2 Type II + HIPAA Ready" },
      { label: "Warranty", value: "60 Days Post-Launch Hypercare" },
    ],
    terminalFile: "sovereign-contract.json",
    statusBadge: "100%_IN_HOUSE",
    codeSnippet: `// Cryptographic Proof of Assignment
const contract = {
  jurisdiction: 'Mutual US/EU/India Enforceable',
  subcontractingPolicy: 'Strictly Prohibited // 100% In-House',
  gitRepoHandover: 'Daily Automated Client Mirror',
  soc2TypeIICompliance: 'Audited & Enforced Annually',
  postLaunchWarranty: '60 Days Included Defect Coverage'
};`,
  },
];

export function CohereStackedCardsSection({ onOpenQuoteModal }: CohereStackedCardsSectionProps) {
  const { mode } = useTheme();
  const isLight = mode === "light";

  const [activeTierIdx, setActiveTierIdx] = useState<number>(0);
  const [copiedTierId, setCopiedTierId] = useState<string | null>(null);

  const tierRefs = useRef<(HTMLDivElement | null)[]>([]);
  const containerRef = useRef<HTMLDivElement | null>(null);

  // Scroll listener to update activeTierIdx dynamically as user scrolls
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight * 0.35;

      for (let i = tierRefs.current.length - 1; i >= 0; i--) {
        const el = tierRefs.current[i];
        if (el) {
          const rect = el.getBoundingClientRect();
          const topAbsolute = rect.top + window.scrollY;
          if (scrollPosition >= topAbsolute) {
            setActiveTierIdx(i);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTier = (idx: number) => {
    soundEffects.click();
    setActiveTierIdx(idx);
    const targetEl = tierRefs.current[idx];
    if (targetEl) {
      const offsetTop = targetEl.getBoundingClientRect().top + window.scrollY - 120;
      window.scrollTo({ top: offsetTop, behavior: "smooth" });
    }
  };

  const handleCopyCode = (tierId: string, snippet: string) => {
    soundEffects.click();
    navigator.clipboard.writeText(snippet);
    setCopiedTierId(tierId);
    setTimeout(() => setCopiedTierId(null), 2000);
  };

  return (
    <section 
      id="architecture-stack" 
      ref={containerRef}
      className={`relative pt-20 md:pt-28 pb-20 md:pb-32 transition-colors duration-300 font-sans scroll-mt-24 ${
        isLight ? "bg-[#FAFBFD]" : "bg-[#060913]"
      }`}
    >
      {/* Background Architectural Ambient Glow & Grid Mesh */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-30">
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: isLight 
              ? `radial-gradient(circle at 50% 10%, rgba(71,109,154,0.08) 0%, transparent 60%), linear-gradient(to right, rgba(71,109,154,0.03) 1px, transparent 1px), linear-gradient(to bottom, rgba(71,109,154,0.03) 1px, transparent 1px)`
              : `radial-gradient(circle at 50% 10%, rgba(93,192,153,0.08) 0%, transparent 60%), linear-gradient(to right, rgba(255,255,255,0.02) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.02) 1px, transparent 1px)`,
            backgroundSize: "100% 100%, 48px 48px, 48px 48px"
          }}
        />
        <div className="absolute top-1/4 right-0 w-[450px] h-[450px] bg-[#476D9A]/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-1/4 left-0 w-[450px] h-[450px] bg-[#5DC099]/10 rounded-full blur-3xl pointer-events-none" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* ========================================================= */}
        {/* SECTION HEADER                                            */}
        {/* ========================================================= */}
        <div className="text-center max-w-3xl mx-auto mb-14 md:mb-20">
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase mb-4 ${
              isLight 
                ? "bg-[#476D9A]/10 text-[#476D9A] border border-[#476D9A]/20" 
                : "bg-[#5DC099]/10 text-[#5DC099] border border-[#5DC099]/20"
            }`}
          >
            <Layers className="w-3.5 h-3.5" />
            <span>05 // MULTI-TIER ARCHITECTURE & ENGINEERING STANDARDS</span>
          </motion.div>

          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className={`text-3xl sm:text-4xl md:text-5xl font-black tracking-tight leading-tight mb-4 ${
              isLight ? "text-slate-900" : "text-white"
            }`}
          >
            Architected for Enterprise Scale & <br className="hidden sm:inline" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#476D9A] via-[#5DC099] to-[#61BE99]">
              Sovereign Code Handover.
            </span>
          </motion.h2>

          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className={`text-sm md:text-base leading-relaxed ${
              isLight ? "text-slate-600" : "text-slate-400"
            }`}
          >
            Inspect our four core engineering tiers. Explore deterministic vector storage, sub-10ms edge pipelines, 120Hz physical mobile runtimes, and institutional SOC-2 governance.
          </motion.p>
        </div>

        {/* ========================================================= */}
        {/* MAIN INTERACTIVE SCROLL EXPERIENCE                        */}
        {/* ========================================================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* ========================================================= */}
          {/* LEFT COLUMN: STICKY ARCHITECTURE RAIL (5 COLS)            */}
          {/* ========================================================= */}
          <div className="lg:col-span-5 lg:sticky lg:top-28 space-y-6">
            
            {/* Tier Selector Rail Card */}
            <div className={`p-4 sm:p-6 rounded-2xl border transition-all backdrop-blur-xl shadow-xl ${
              isLight 
                ? "bg-white/90 border-slate-200/90 shadow-slate-200/40" 
                : "bg-[#0b101d]/90 border-slate-800 shadow-black/40"
            }`}>
              
              <div className="flex items-center justify-between mb-4 pb-3 border-b border-slate-200 dark:border-slate-800/80">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
                  Engineering Stack Rail
                </span>
                <span className={`text-[10px] font-extrabold px-2 py-0.5 rounded-full ${
                  isLight ? "bg-[#476D9A]/10 text-[#476D9A]" : "bg-[#5DC099]/15 text-[#5DC099]"
                }`}>
                  TIER 0{activeTierIdx + 1} ACTIVE
                </span>
              </div>

              {/* Connected Vertical Progress Track */}
              <div className="space-y-2 relative">
                {/* Connecting Line */}
                <div className="absolute left-[19px] top-6 bottom-6 w-[2px] bg-slate-200 dark:bg-slate-800 pointer-events-none" />

                {TIERS.map((tier, idx) => {
                  const Icon = tier.icon;
                  const isActive = activeTierIdx === idx;

                  return (
                    <button
                      key={tier.id}
                      onClick={() => scrollToTier(idx)}
                      className={`group w-full relative z-10 flex items-center gap-3 p-3 rounded-xl border text-left transition-all duration-300 ${
                        isActive
                          ? isLight
                            ? "bg-gradient-to-r from-[#476D9A] to-[#345378] text-white border-[#476D9A] shadow-md shadow-[#476D9A]/20 scale-[1.02]"
                            : "bg-gradient-to-r from-[#17253b] to-[#0f1d30] text-white border-[#5DC099] shadow-lg shadow-[#5DC099]/15 scale-[1.02]"
                          : isLight
                            ? "bg-slate-50/70 border-slate-200/70 text-slate-700 hover:bg-slate-100 hover:border-slate-300"
                            : "bg-[#111728]/70 border-slate-800/80 text-slate-400 hover:bg-[#151c30] hover:text-white hover:border-slate-700"
                      }`}
                    >
                      {/* Node Icon */}
                      <div className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 transition-colors ${
                        isActive
                          ? isLight ? "bg-white/20 text-white" : "bg-[#5DC099] text-slate-950 font-black"
                          : isLight ? "bg-white text-[#476D9A] border border-slate-200" : "bg-slate-800 text-slate-300"
                      }`}>
                        <Icon className="w-4 h-4" />
                      </div>

                      {/* Text Details */}
                      <div className="min-w-0 flex-1">
                        <div className="flex items-center gap-2">
                          <span className={`text-[10px] font-mono font-bold tracking-wider ${
                            isActive 
                              ? isLight ? "text-white/80" : "text-[#5DC099]"
                              : "text-slate-400"
                          }`}>
                            {tier.num}
                          </span>
                          <span className="text-xs font-bold truncate">
                            {tier.title}
                          </span>
                        </div>
                        <span className={`text-[11px] block truncate font-medium ${
                          isActive
                            ? isLight ? "text-white/90" : "text-slate-300"
                            : "text-slate-400"
                        }`}>
                          {tier.headline}
                        </span>
                      </div>

                      {/* Arrow indicator */}
                      <ChevronRight className={`w-4 h-4 shrink-0 transition-transform ${
                        isActive ? "translate-x-0.5 opacity-100" : "opacity-0 group-hover:opacity-60"
                      }`} />
                    </button>
                  );
                })}
              </div>

            </div>

            {/* Institutional Trust Telemetry Dock (Matching Footer and Hero Accreditations) */}
            <div className={`p-5 rounded-2xl border transition-all ${
              isLight 
                ? "bg-slate-50 border-slate-200 text-slate-700" 
                : "bg-[#0b101d] border-slate-800 text-slate-300"
            }`}>
              <div className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3 flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-[#5DC099]" />
                <span>Enterprise Delivery Rigor</span>
              </div>

              <div className="space-y-2.5 text-xs font-semibold">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#5DC099] shrink-0" />
                  <span>50+ Full-Time Engineers at Surat Campus</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#5DC099] shrink-0" />
                  <span>Mutual US/EU/India Enforceable NDA</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#5DC099] shrink-0" />
                  <span>Daily Automated Git Mirror Handover</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#5DC099] shrink-0" />
                  <span>60 Days Included Defect Warranty</span>
                </div>
              </div>

              <div className="mt-5 pt-4 border-t border-slate-200 dark:border-slate-800">
                <button
                  onClick={() => {
                    soundEffects.click();
                    onOpenQuoteModal("Multi-Tier Architecture Consultation");
                  }}
                  className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl text-xs font-bold text-white bg-gradient-to-r from-[#476D9A] to-[#345378] dark:from-[#476D9A] dark:to-[#5DC099] shadow-md shadow-[#476D9A]/20 hover:opacity-95 transition-all hover:scale-[1.01] cursor-pointer"
                >
                  <span>Schedule Architecture Review</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

          </div>

          {/* ========================================================= */}
          {/* RIGHT COLUMN: 4 INTERACTIVE ARCHITECTURE CARDS (7 COLS)   */}
          {/* ========================================================= */}
          <div className="lg:col-span-7 space-y-8">
            {TIERS.map((tier, idx) => {
              const Icon = tier.icon;
              const isActive = activeTierIdx === idx;

              return (
                <div
                  key={tier.id}
                  ref={(el) => { tierRefs.current[idx] = el; }}
                  className={`group relative rounded-3xl p-6 sm:p-8 transition-all duration-300 backdrop-blur-xl border ${
                    isActive
                      ? isLight
                        ? "bg-white/95 border-[#476D9A]/50 shadow-[0_16px_36px_-8px_rgba(71,109,154,0.18)] ring-1 ring-[#476D9A]/40"
                        : "bg-[#0b1222]/90 border-[#5DC099]/50 shadow-[0_16px_40px_-8px_rgba(93,192,153,0.15)] ring-1 ring-[#5DC099]/40"
                      : isLight
                        ? "bg-white/75 border-slate-200/90 shadow-md shadow-slate-200/40 hover:bg-white/90 hover:border-[#476D9A]/30 hover:shadow-xl"
                        : "bg-[#0b101d]/70 border-white/[0.08] shadow-lg shadow-black/40 hover:bg-[#0e1628]/85 hover:border-white/20 hover:shadow-2xl"
                  }`}
                >
                  {/* Top-Right Status Badge & Clean Link Indicator */}
                  <div className="absolute top-6 right-6 flex items-center gap-2 z-10">
                    <span className={`text-[10px] font-mono font-bold px-3 py-1 rounded-full border transition-colors ${
                      isActive
                        ? isLight
                          ? "bg-[#476D9A]/10 text-[#476D9A] border-[#476D9A]/30"
                          : "bg-[#5DC099]/15 text-[#5DC099] border-[#5DC099]/30"
                        : isLight
                          ? "bg-slate-100 text-slate-600 border-slate-200"
                          : "bg-white/[0.05] text-slate-400 border-white/10"
                    }`}>
                      {tier.statusBadge}
                    </span>
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center border transition-all ${
                      isActive
                        ? isLight
                          ? "bg-[#476D9A] text-white border-[#476D9A]"
                          : "bg-[#5DC099] text-slate-950 border-[#5DC099]"
                        : isLight
                          ? "bg-slate-100 text-slate-500 border-slate-200 group-hover:bg-[#476D9A] group-hover:text-white group-hover:border-[#476D9A]"
                          : "bg-white/[0.05] text-slate-400 border-white/10 group-hover:bg-[#5DC099] group-hover:text-slate-950 group-hover:border-[#5DC099]"
                    }`}>
                      <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </div>
                  </div>

                  {/* Card Content Layer */}
                  <div className="space-y-6">
                    
                    {/* Top Tier Tag & Status Indicator */}
                    <div className="pr-36">
                      <div className="flex items-center gap-3">
                        <div className={`w-11 h-11 rounded-2xl flex items-center justify-center shrink-0 border transition-transform duration-300 group-hover:scale-105 ${
                          isActive
                            ? isLight
                              ? "bg-[#476D9A] text-white border-[#476D9A] shadow-md shadow-[#476D9A]/25"
                              : "bg-[#5DC099] text-slate-950 border-[#5DC099] shadow-md shadow-[#5DC099]/25 font-black"
                            : isLight
                              ? "bg-slate-100 text-[#476D9A] border-slate-200"
                              : "bg-white/[0.06] text-[#5DC099] border-white/10"
                        }`}>
                          <Icon className="w-5 h-5" />
                        </div>
                        <div>
                          <span className="text-[11px] font-mono font-bold tracking-widest text-[#476D9A] dark:text-[#5DC099] uppercase block mb-0.5">
                            TIER {tier.num} // {tier.tag}
                          </span>
                          <h3 className="text-xl sm:text-2xl font-black tracking-tight text-slate-900 dark:text-white">
                            {tier.title}
                          </h3>
                        </div>
                      </div>
                    </div>

                    {/* Headline & Description */}
                    <div>
                      <h4 className="text-sm sm:text-base font-bold text-[#476D9A] dark:text-[#5DC099] mb-1.5">
                        {tier.headline}
                      </h4>
                      <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
                        {tier.desc}
                      </p>
                    </div>

                    {/* 4-Cell Technical Specification Grid */}
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                      {tier.specs.map((spec, sIdx) => (
                        <div
                          key={sIdx}
                          className={`p-3 rounded-xl border transition-all ${
                            isLight 
                              ? "bg-slate-50/90 border-slate-200/80 shadow-xs" 
                              : "bg-white/[0.03] border-white/[0.08] shadow-inner"
                          }`}
                        >
                          <span className="text-[10px] font-mono uppercase text-slate-500 dark:text-slate-400 block mb-0.5">
                            {spec.label}
                          </span>
                          <span className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white line-clamp-1">
                            {spec.value}
                          </span>
                        </div>
                      ))}
                    </div>

                    {/* Live Architecture Code Terminal Specimen (Matching Hero & Navbar Standards) */}
                    <div className="rounded-2xl bg-[#070b14] border border-slate-800/90 overflow-hidden shadow-2xl">
                      {/* Terminal Top Window Controls */}
                      <div className="px-4 py-2.5 bg-[#0d1322] border-b border-slate-800 flex items-center justify-between text-xs">
                        <div className="flex items-center gap-2">
                          <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
                          <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                          <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                          <span className="ml-2 font-mono text-[11px] text-slate-300 font-bold">
                            {tier.terminalFile}
                          </span>
                        </div>

                        <div className="flex items-center gap-3">
                          <span className="text-[10px] font-mono text-[#5DC099] font-bold">
                            STRICT_TYPES
                          </span>
                          <button
                            onClick={() => handleCopyCode(tier.id, tier.codeSnippet)}
                            title="Copy code specimen"
                            className="text-slate-400 hover:text-white transition-colors"
                          >
                            {copiedTierId === tier.id ? (
                              <Check className="w-3.5 h-3.5 text-emerald-400" />
                            ) : (
                              <Copy className="w-3.5 h-3.5" />
                            )}
                          </button>
                        </div>
                      </div>

                      {/* Code Snippet */}
                      <pre className="p-4 text-[11px] font-mono text-slate-300 leading-relaxed overflow-x-auto select-all max-h-[180px] bg-[#070b14]">
                        <code>{tier.codeSnippet}</code>
                      </pre>

                      {/* Terminal Footer Status Bar */}
                      <div className="px-4 py-2 bg-[#0a0f1d] border-t border-slate-800/80 flex items-center justify-between text-[10px] text-slate-400 font-mono">
                        <span className="flex items-center gap-1.5 text-[#5DC099] font-semibold">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#5DC099]" />
                          <span>Unit Coverage: 98.4%</span>
                        </span>
                        <span>SURAT HQ COMPILER // PRODUCTION_OK</span>
                      </div>
                    </div>

                    {/* Bottom Action Button */}
                    <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-3">
                      <span className="text-xs text-slate-500 dark:text-slate-400 font-medium text-center sm:text-left">
                        Want this architecture deployed into your stack?
                      </span>
                      <button
                        onClick={() => {
                          soundEffects.click();
                          onOpenQuoteModal(tier.title);
                        }}
                        className="w-full sm:w-auto inline-flex items-center justify-center gap-2 py-2.5 px-5 rounded-full text-xs font-bold text-white bg-gradient-to-r from-[#476D9A] to-[#345378] dark:from-[#476D9A] dark:to-[#5DC099] hover:opacity-95 shadow-md shadow-[#476D9A]/20 transition-all hover:scale-[1.02] cursor-pointer"
                      >
                        <span>Configure {tier.shortLabel}</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </button>
                    </div>

                  </div>

                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
