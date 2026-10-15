"use client";

import React, { useState } from "react";
import { 
  Cpu, 
  Layers, 
  Smartphone, 
  ShieldCheck, 
  ArrowRight, 
  CheckCircle2, 
  Terminal, 
  Zap, 
  Globe2, 
  Server 
} from "lucide-react";
import { soundEffects } from "@/lib/soundEffects";
import { BorderBeam } from "@/components/common/BorderBeam";
import { InteractiveHoverButton } from "@/components/ui/interactive-hover-button";

interface CohereStackedCardsSectionProps {
  onOpenQuoteModal: (service?: string) => void;
}

export function CohereStackedCardsSection({ onOpenQuoteModal }: CohereStackedCardsSectionProps) {
  const [activeLayer, setActiveLayer] = useState(0);

  const cards = [
    {
      id: "ai-core",
      num: "01",
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
      codeSnippet: `// Agentic Workflow Orchestration Mesh
const swarm = new OpashAgentMesh({
  coordinator: 'adaptive_planner',
  ragStore: 'pgvector_cluster',
  privacyZone: 'zero_retention_enterprise'
});

await swarm.dispatch(['architect', 'coder', 'security_auditor']);`,
    },
    {
      id: "edge-runtime",
      num: "02",
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
      codeSnippet: `// High-Concurrency Edge Stream
export const runtime = 'edge';
export const preferredRegion = ['iad1', 'fra1', 'sin1'];

export async function GET(req: Request) {
  const stream = await cacheMesh.pipeline({ buffer: 'zero_copy' });
  return new Response(stream, { headers: { 'Cache-Control': 's-maxage=60' } });
}`,
    },
    {
      id: "fluid-mobile",
      num: "03",
      icon: Smartphone,
      tag: "TACTILE CROSS-PLATFORM SYSTEMS",
      title: "60 FPS Flutter & Native Mobile Ecosystems",
      headline: "Fluid Physical Interfaces with Biometric Offline Sync",
      desc: "Mobile applications that feel indistinguishable from bespoke physical hardware. Haptic tactile feedback, offline-first SQLite synchronization, background thread biometrics, and pixel-precise fluid motion.",
      specs: [
        { label: "Frame Budget", value: "60 FPS Constant" },
        { label: "Offline Resilience", value: "100% Conflict-Free Replicated" },
        { label: "App Store Rating", value: "4.9★ Average" },
        { label: "Framework", value: "Flutter + Swift/Kotlin Bridges" },
      ],
      codeSnippet: `// Haptic Offline-First Architecture
class CoreEngineBloc extends Bloc<SyncEvent, SyncState> {
  CoreEngineBloc() : super(EngineNominal()) {
    on<TriggerLocalMutation>((event, emit) async {
      await localDb.commitWithVectorClock(event.payload);
      HapticFeedback.lightImpact();
      meshQueue.enqueueBackgroundSync();
    });
  }
}`,
    },
    {
      id: "governance",
      num: "04",
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
      codeSnippet: `// Cryptographic Proof of Assignment
const contract = {
  jurisdiction: 'Mutual US/EU/India Enforceable',
  subcontractingPolicy: 'Strictly Prohibited // 100% In-House',
  gitRepoHandover: 'Daily Automated Client Mirror',
  postLaunchWarranty: '60 Days Included Defect Coverage'
};`,
    },
  ];

  const current = cards[activeLayer];

  return (
    <section id="architecture-stack" className="py-14 sm:py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative transition-colors duration-300 cv-auto">
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14 space-y-3">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[var(--primary)]/10 border border-[var(--primary)]/30 text-xs font-mono font-bold text-[#1d4ed8] dark:text-[#10b981] uppercase tracking-widest">
          <Layers className="w-3.5 h-3.5 text-[#10b981]" />
          <span>Multi-Tier Architecture // Engineering Standards</span>
        </div>

        <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black tracking-tight text-[var(--text-main)] leading-tight">
          Architected for Enterprise Scale & <br className="hidden sm:inline" />
          <span className="text-[#1d4ed8] dark:text-[#3b82f6]">
            Sovereign Code Handover.
          </span>
        </h2>

        <p className="text-xs sm:text-sm text-[var(--text-muted)] leading-relaxed">
          Inspect our four core engineering tiers. Explore performance budgets, vector storage architectures, and institutional governance protocols.
        </p>

        {/* Interactive Architecture Tier Selectors */}
        <div className="pt-4 flex flex-wrap items-center justify-center gap-2 max-w-4xl mx-auto">
          {cards.map((card, idx) => {
            const Icon = card.icon;
            const isActive = activeLayer === idx;
            return (
              <button
                key={card.id}
                onClick={() => {
                  soundEffects.click();
                  setActiveLayer(idx);
                }}
                className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-mono font-bold uppercase transition-all duration-200 border ${
                  isActive
                    ? "bg-[#1d4ed8] text-white border-[#1d4ed8] shadow-lg shadow-blue-600/25 ring-2 ring-blue-500/20"
                    : "bg-white dark:bg-[#0c1324] text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-800 hover:border-[#1d4ed8]/50 hover:bg-slate-50 dark:hover:bg-[#111a33]"
                }`}
              >
                <Icon className={`w-3.5 h-3.5 ${isActive ? "text-emerald-300" : "text-[#1d4ed8] dark:text-[#3b82f6]"}`} />
                <span>{card.num} // {card.title.split(" ")[0]}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Featured Architecture Console Card */}
      <div className="rounded-[28px] border border-slate-200/90 dark:border-slate-800 p-6 sm:p-10 lg:p-12 shadow-2xl backdrop-blur-2xl transition-all duration-300 bg-white dark:bg-[#0c1324] shadow-blue-900/5 dark:shadow-black/60 relative overflow-hidden">
        {/* Perimeter Border Beam Glow */}
        <BorderBeam size={300} duration={14} colorFrom="#1d4ed8" colorTo="#10b981" />

        {/* Top Accent Line */}
        <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#1d4ed8] to-[#10b981] opacity-75 pointer-events-none" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
          {/* Left Column: Narrative Details */}
          <div className="lg:col-span-7 space-y-5">
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono font-bold text-[#1d4ed8] dark:text-[#10b981] tracking-widest uppercase">
                {current.num} // {current.tag}
              </span>
              <span className="text-[10px] font-mono font-bold px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700">
                LAYER 0{activeLayer + 1} OF 04
              </span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white leading-tight">
              {current.title}
            </h3>

            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
              {current.desc}
            </p>

            {/* Technical Specifications Grid */}
            <div className="grid grid-cols-2 gap-3 pt-2 font-mono text-xs">
              {current.specs.map((spec, sIdx) => (
                <div
                  key={sIdx}
                  className="p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-900/80 border border-slate-200/80 dark:border-slate-800 shadow-sm"
                >
                  <span className="text-[10px] text-slate-500 dark:text-slate-400 uppercase font-semibold block mb-0.5">
                    {spec.label}
                  </span>
                  <span className="font-bold text-slate-900 dark:text-white text-xs sm:text-sm">
                    {spec.value}
                  </span>
                </div>
              ))}
            </div>

            <div className="pt-2">
              <InteractiveHoverButton
                onClick={() => onOpenQuoteModal(current.title)}
                text={`Configure ${current.title}`}
                className="text-xs font-bold uppercase tracking-wider shadow-md shadow-blue-700/20"
              />
            </div>
          </div>

          {/* Right Column: Code & Architecture Terminal Specimen */}
          <div className="lg:col-span-5">
            <div className="rounded-2xl bg-[#090d16] border border-slate-800 shadow-2xl overflow-hidden text-xs font-mono">
              {/* Terminal Header */}
              <div className="px-4 py-3 bg-[#0f172a] border-b border-slate-800 flex items-center justify-between text-[11px] text-slate-400">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
                  <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                  <span className="ml-2 text-slate-200 font-bold">{current.id}.config.ts</span>
                </div>
                <span className="text-[10px] text-[#38bdf8] font-bold font-mono">STRICT_TYPES</span>
              </div>

              {/* Code Body */}
              <pre className="p-4 sm:p-5 text-slate-200 leading-relaxed overflow-x-auto text-[11px] select-all bg-[#090d16] max-h-[220px]">
                <code>{current.codeSnippet}</code>
              </pre>

              {/* Footer Metric */}
              <div className="px-4 py-2.5 bg-[#0f172a] border-t border-slate-800 flex items-center justify-between text-[10px] text-slate-400">
                <span className="flex items-center gap-1.5 text-emerald-400 font-semibold font-mono">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#10b981]" />
                  <span>Unit Coverage: 98.4%</span>
                </span>
                <span className="font-mono text-slate-400">SURAT HQ COMPILER // OK</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
