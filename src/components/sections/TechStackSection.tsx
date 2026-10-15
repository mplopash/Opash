"use client";

import React, { useState, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Badge } from "@/components/ui/Badge";
import { 
  Layout, 
  Server, 
  Smartphone, 
  Database, 
  CloudLightning, 
  Cpu, 
  Layers, 
  Sparkles, 
  ArrowRight, 
  Zap, 
  CheckCircle2,
  Code2,
  LayoutGrid,
  Activity,
  Search,
  X
} from "lucide-react";
import { MagneticHover } from "@/components/effects/MagneticHover";
import { soundEffects } from "@/lib/soundEffects";
import { useTheme } from "@/context/ThemeContext";

interface TechnologyItem {
  id: string;
  name: string;
  category: "frontend" | "backend" | "mobile" | "database" | "cloud" | "ai";
  level: string;
  desc: string;
  benchmark: string;
  icon: React.ReactNode;
}

interface TechStackSectionProps {
  onSelectTech?: (techName: string) => void;
}

export function TechStackSection({ onSelectTech }: TechStackSectionProps) {
  const { mode } = useTheme();
  const isLight = mode === "light";

  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [hoveredTechId, setHoveredTechId] = useState<string | null>(null);
  const [viewMode, setViewMode] = useState<"stream" | "grid">("stream");
  const [searchQuery, setSearchQuery] = useState<string>("");

  const containerRef = useRef<HTMLDivElement | null>(null);

  // Scroll-linked parallax translation for the 3 lanes
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const xLane1 = useTransform(scrollYProgress, [0, 1], [-60, 60]);
  const xLane2 = useTransform(scrollYProgress, [0, 1], [60, -60]);
  const xLane3 = useTransform(scrollYProgress, [0, 1], [-45, 45]);

  const categories = [
    { id: "all", name: "All Technologies", count: 28, icon: <Layers className="w-3.5 h-3.5" /> },
    { id: "frontend", name: "Frontend & Web", count: 6, icon: <Layout className="w-3.5 h-3.5" /> },
    { id: "backend", name: "Backend & APIs", count: 6, icon: <Server className="w-3.5 h-3.5" /> },
    { id: "mobile", name: "Mobile", count: 4, icon: <Smartphone className="w-3.5 h-3.5" /> },
    { id: "database", name: "Data & Cache", count: 4, icon: <Database className="w-3.5 h-3.5" /> },
    { id: "cloud", name: "Cloud & DevOps", count: 4, icon: <CloudLightning className="w-3.5 h-3.5" /> },
    { id: "ai", name: "AI & Neural Mesh", count: 4, icon: <Cpu className="w-3.5 h-3.5" /> },
  ];

  // ---------------- Lane 1: Client, Frontend & Mobile ----------------
  const lane1Technologies: TechnologyItem[] = [
    {
      id: "nextjs",
      name: "Next.js 16",
      category: "frontend",
      level: "Core Specialty",
      desc: "SSR, Edge & Full-stack React 19 with Partial Prerendering (PPR).",
      benchmark: "Sub-second LCP",
      icon: <Layout className="w-4 h-4 text-[#476D9A]" />
    },
    {
      id: "react",
      name: "React 19",
      category: "frontend",
      level: "Core Specialty",
      desc: "Concurrent components, React Compiler & Action hooks.",
      benchmark: "60fps Re-rendering",
      icon: <Code2 className="w-4 h-4 text-[#61BE99]" />
    },
    {
      id: "flutter",
      name: "Flutter",
      category: "mobile",
      level: "Core Specialty",
      desc: "Single codebase iOS & Android apps with 120Hz Impeller engine.",
      benchmark: "Pixel Match 120Hz",
      icon: <Smartphone className="w-4 h-4 text-[#476D9A]" />
    },
    {
      id: "typescript",
      name: "TypeScript",
      category: "frontend",
      level: "Standard",
      desc: "100% strict type safety across client and server RPC contracts.",
      benchmark: "Strict Mode",
      icon: <Code2 className="w-4 h-4 text-[#61BE99]" />
    },
    {
      id: "tailwind",
      name: "Tailwind CSS v4",
      category: "frontend",
      level: "Core Specialty",
      desc: "Rust Oxide engine with dynamic CSS tokens and zero bundle bloat.",
      benchmark: "Zero Bloat",
      icon: <Layout className="w-4 h-4 text-[#476D9A]" />
    },
    {
      id: "swift",
      name: "Swift / iOS",
      category: "mobile",
      level: "Native",
      desc: "Apple ecosystem & hardware optimization via SwiftUI and Metal.",
      benchmark: "Metal & SwiftUI",
      icon: <Smartphone className="w-4 h-4 text-[#61BE99]" />
    },
    {
      id: "reactnative",
      name: "React Native",
      category: "mobile",
      level: "Core Specialty",
      desc: "Native platform components with modern TurboModules and Fabric.",
      benchmark: "TurboModules Core",
      icon: <Smartphone className="w-4 h-4 text-[#476D9A]" />
    },
    {
      id: "kotlin",
      name: "Kotlin / Android",
      category: "mobile",
      level: "Native",
      desc: "Modern Jetpack Compose architecture and Coroutines Flow.",
      benchmark: "Coroutines Flow",
      icon: <Smartphone className="w-4 h-4 text-[#61BE99]" />
    },
    {
      id: "svelte",
      name: "Svelte / SvelteKit",
      category: "frontend",
      level: "Production Proven",
      desc: "Compile-time reactive web framework eliminating virtual DOM overhead.",
      benchmark: "Virtual DOM Free",
      icon: <Layout className="w-4 h-4 text-[#476D9A]" />
    },
    {
      id: "angular",
      name: "Angular",
      category: "frontend",
      level: "Production Proven",
      desc: "Enterprise standalone components with zoneless Signals reactivity.",
      benchmark: "Type-safe Modules",
      icon: <Layout className="w-4 h-4 text-[#61BE99]" />
    },
  ];

  // ---------------- Lane 2: Backend & Distributed Data ----------------
  const lane2Technologies: TechnologyItem[] = [
    {
      id: "python",
      name: "Python & FastAPI",
      category: "backend",
      level: "Core Specialty",
      desc: "Async OpenAPI-native microservices with Pydantic v2 validation.",
      benchmark: "Async Pydantic v2",
      icon: <Server className="w-4 h-4 text-[#61BE99]" />
    },
    {
      id: "golang",
      name: "Go (Golang)",
      category: "backend",
      level: "Production Proven",
      desc: "Compiled goroutine channels for ultra low-latency network backends.",
      benchmark: "3ms Execution",
      icon: <Server className="w-4 h-4 text-[#476D9A]" />
    },
    {
      id: "postgres",
      name: "PostgreSQL",
      category: "database",
      level: "Core Specialty",
      desc: "ACID transactional relational core with JSONB and pgvector embeddings.",
      benchmark: "ACID Compliant",
      icon: <Database className="w-4 h-4 text-[#61BE99]" />
    },
    {
      id: "nodejs",
      name: "Node.js & Express",
      category: "backend",
      level: "Core Specialty",
      desc: "Event-driven non-blocking I/O microservices and WebSocket gateways.",
      benchmark: "12,000 req/sec",
      icon: <Server className="w-4 h-4 text-[#476D9A]" />
    },
    {
      id: "redis",
      name: "Redis",
      category: "database",
      level: "Standard",
      desc: "Ultra-fast in-memory caching, rate limiting, and pub/sub message brokers.",
      benchmark: "< 1ms Read/Write",
      icon: <Database className="w-4 h-4 text-[#61BE99]" />
    },
    {
      id: "java",
      name: "Java & Spring Boot",
      category: "backend",
      level: "Production Proven",
      desc: "Enterprise-grade microservices with virtual threads (Project Loom).",
      benchmark: "Bank-Grade Core",
      icon: <Server className="w-4 h-4 text-[#476D9A]" />
    },
    {
      id: "mongodb",
      name: "MongoDB",
      category: "database",
      level: "Production Proven",
      desc: "Document storage for rapid flexible schemas and distributed clusters.",
      benchmark: "Cluster Sharding",
      icon: <Database className="w-4 h-4 text-[#61BE99]" />
    },
    {
      id: "dotnet",
      name: ".NET Core",
      category: "backend",
      level: "Production Proven",
      desc: "High-performance modular enterprise runtime with cross-platform C# 13.",
      benchmark: "High Throughput",
      icon: <Server className="w-4 h-4 text-[#476D9A]" />
    },
    {
      id: "firebase",
      name: "Firebase / Supabase",
      category: "database",
      level: "Production Proven",
      desc: "Real-time reactive edge databases with declarative Row-Level Security.",
      benchmark: "Real-time Sockets",
      icon: <Database className="w-4 h-4 text-[#61BE99]" />
    },
    {
      id: "graphql",
      name: "GraphQL & REST",
      category: "backend",
      level: "Standard",
      desc: "Unified data layer federating microservices into a type-safe contract.",
      benchmark: "Strict Contracts",
      icon: <Server className="w-4 h-4 text-[#476D9A]" />
    },
  ];

  // ---------------- Lane 3: Cloud, DevOps & Applied AI ----------------
  const lane3Technologies: TechnologyItem[] = [
    {
      id: "openai",
      name: "OpenAI & GPT-4o",
      category: "ai",
      level: "Applied GenAI",
      desc: "Multimodal reasoning models with structured JSON outputs and streaming.",
      benchmark: "Agentic Swarms",
      icon: <Cpu className="w-4 h-4 text-[#61BE99]" />
    },
    {
      id: "aws",
      name: "AWS Multi-AZ",
      category: "cloud",
      level: "Certified",
      desc: "ECS/EKS container clusters, RDS, and CloudFront edge CDN with 99.99% SLA.",
      benchmark: "99.99% SLA",
      icon: <CloudLightning className="w-4 h-4 text-[#476D9A]" />
    },
    {
      id: "gemini",
      name: "Gemini 1.5 Pro",
      category: "ai",
      level: "Applied GenAI",
      desc: "Massive 1M+ token context window with native multimodal analysis.",
      benchmark: "1M Context Window",
      icon: <Cpu className="w-4 h-4 text-[#61BE99]" />
    },
    {
      id: "docker",
      name: "Docker & Kubernetes",
      category: "cloud",
      level: "Standard",
      desc: "Immutable container virtualization with automated scaling & self-healing.",
      benchmark: "Auto-Healing",
      icon: <CloudLightning className="w-4 h-4 text-[#476D9A]" />
    },
    {
      id: "langchain",
      name: "LangChain & LangGraph",
      category: "ai",
      level: "Orchestration",
      desc: "Cyclic multi-agent state machines with human-in-the-loop checkpoints.",
      benchmark: "RAG Pipeline",
      icon: <Cpu className="w-4 h-4 text-[#61BE99]" />
    },
    {
      id: "gcp",
      name: "Google Cloud Platform",
      category: "cloud",
      level: "Production Proven",
      desc: "Serverless containers via Cloud Run, BigQuery, and Vertex AI.",
      benchmark: "Global VPC",
      icon: <CloudLightning className="w-4 h-4 text-[#476D9A]" />
    },
    {
      id: "pinecone",
      name: "Pinecone & Vector DB",
      category: "ai",
      level: "Vector DB",
      desc: "High-dimensional vector embeddings with sub-15ms HNSW similarity search.",
      benchmark: "Cosine Distance",
      icon: <Cpu className="w-4 h-4 text-[#61BE99]" />
    },
    {
      id: "cicd",
      name: "CI/CD (GitHub Actions)",
      category: "cloud",
      level: "Standard",
      desc: "Automated linting, test suites, vulnerability scans & blue-green deploys.",
      benchmark: "Green Builds",
      icon: <CloudLightning className="w-4 h-4 text-[#476D9A]" />
    },
  ];

  const handleCategorySelect = (catId: string) => {
    soundEffects.hover();
    setActiveCategory(catId);
  };

  const handleTechClick = (tech: TechnologyItem) => {
    soundEffects.click();
    if (onSelectTech) {
      onSelectTech(tech.name);
    }
  };

  // Combine all 28 technologies
  const allTechnologies: TechnologyItem[] = [
    ...lane1Technologies,
    ...lane2Technologies,
    ...lane3Technologies,
  ];

  // Filtered technologies based on category + search
  const filteredTechnologies = allTechnologies.filter((tech) => {
    const matchesCat = activeCategory === "all" || tech.category === activeCategory;
    const matchesSearch =
      !searchQuery.trim() ||
      tech.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      tech.desc.toLowerCase().includes(searchQuery.toLowerCase()) ||
      tech.benchmark.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCat && matchesSearch;
  });

  const renderTechCard = (
    tech: TechnologyItem,
    popoverPosition: "top" | "bottom" = "top"
  ) => {
    const isMatching =
      (activeCategory === "all" || tech.category === activeCategory) &&
      (!searchQuery.trim() ||
        tech.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        tech.desc.toLowerCase().includes(searchQuery.toLowerCase()));
    const isHovered = hoveredTechId === tech.id;

    return (
      <div
        key={tech.id}
        onMouseEnter={() => {
          soundEffects.hover();
          setHoveredTechId(tech.id);
        }}
        onMouseLeave={() => setHoveredTechId(null)}
        onClick={() => handleTechClick(tech)}
        className={`group relative shrink-0 transition-all duration-300 cursor-pointer ${
          isMatching ? "opacity-100 scale-100" : "opacity-35 hover:opacity-75 scale-95"
        } ${isHovered ? "z-50" : "z-10"}`}
      >
        {/* Main Capsule Card */}
        <div
          className={`flex items-center gap-3 px-4 py-2.5 sm:px-5 sm:py-3 rounded-2xl border transition-all duration-200 select-none shadow-sm ${
            isHovered
              ? "bg-white dark:bg-[#0c1424] border-[#476D9A] dark:border-[#61BE99] shadow-xl shadow-[#476D9A]/15 scale-105 -translate-y-1 ring-1 ring-[#476D9A]/30 dark:ring-[#61BE99]/30"
              : isMatching && (activeCategory !== "all" || searchQuery.trim())
              ? "bg-[#61BE99]/10 border-[#61BE99]/50 text-slate-900 dark:text-white"
              : "glass-panel border-slate-200/80 dark:border-white/10 hover:border-[#476D9A]/40 bg-white/70 dark:bg-[#070b14]/70"
          }`}
        >
          {/* Tech Category Icon */}
          <div className="p-1.5 rounded-lg bg-slate-100 dark:bg-white/[0.06] border border-slate-200/80 dark:border-white/10 shrink-0">
            {tech.icon}
          </div>

          {/* Name & Quick Benchmark */}
          <div className="flex flex-col text-left">
            <span className="text-xs sm:text-sm font-extrabold text-slate-900 dark:text-white whitespace-nowrap leading-tight">
              {tech.name}
            </span>
            <span className="text-[10px] font-mono text-slate-500 dark:text-slate-400 font-semibold uppercase tracking-wider">
              {tech.benchmark}
            </span>
          </div>

          {/* Active green dot indicator */}
          <span className="w-1.5 h-1.5 rounded-full bg-[#61BE99] shrink-0 ml-1 group-hover:scale-125 transition-transform" />
        </div>

        {/* ========================================================
            MINIMAL HOVER POPOVER (Directional: bottom for Lane 1, top for Lane 2 & 3)
            ======================================================== */}
        {isHovered && (
          <div
            className={`absolute left-1/2 -translate-x-1/2 w-64 p-3 rounded-xl bg-slate-900/95 text-white dark:bg-[#060a14]/95 border border-slate-700/80 dark:border-white/15 shadow-2xl backdrop-blur-xl z-50 pointer-events-none animate-in fade-in zoom-in-95 duration-150 ${
              popoverPosition === "bottom"
                ? "top-full mt-2.5"
                : "bottom-full mb-2.5"
            }`}
          >
            {/* Notch Arrow */}
            <div
              className={`absolute left-1/2 -translate-x-1/2 w-3 h-3 rotate-45 bg-slate-900 dark:bg-[#060a14] ${
                popoverPosition === "bottom"
                  ? "-top-1.5 border-t border-l border-slate-700/80 dark:border-white/15"
                  : "-bottom-1.5 border-b border-r border-slate-700/80 dark:border-white/15"
              }`}
            />

            <div className="relative z-10">
              <div className="flex items-center justify-between pb-1.5 mb-1.5 border-b border-white/10 text-[10px] font-mono">
                <span className="text-[#61BE99] font-bold uppercase tracking-wider flex items-center gap-1">
                  <CheckCircle2 className="w-3 h-3 text-[#61BE99]" />
                  {tech.level}
                </span>
                <span className="text-slate-400 font-semibold uppercase">
                  {tech.category}
                </span>
              </div>

              <p className="text-[11px] text-slate-300 leading-snug font-sans mb-1.5">
                {tech.desc}
              </p>

              <div className="flex items-center justify-between text-[10px] font-mono text-[#61BE99] pt-1 border-t border-white/5">
                <span>{tech.benchmark}</span>
                <span className="text-slate-400 text-[9px]">Click to Consult →</span>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  };

  return (
    <section 
      ref={containerRef}
      id="tech-stack" 
      className="py-14 sm:py-20 relative bg-[var(--bg-secondary)] transition-colors duration-300 cv-auto overflow-x-clip"
    >
      {/* Ambient background soft light */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-[radial-gradient(ellipse_at_center,rgba(71,109,154,0.12)_0%,rgba(97,190,153,0.06)_45%,transparent_70%)] rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          eyebrow="11 // Technology Matrix"
          title="Battle-Tested Stacks for"
          highlight="Uncompromising Scale"
          description="The modern technologies, high-throughput engines, and applied AI frameworks our engineering teams deploy with mathematical precision."
        />

        {/* ========================================================
            CATEGORY FILTER TABS + VIEW MODE TOGGLE (Stream vs Grid)
            ======================================================== */}
        <div className="flex flex-col items-center gap-4 mb-8">
          {/* Category Chips */}
          <div className="flex items-center justify-center gap-1.5 sm:gap-2 flex-wrap">
            {categories.map((c) => {
              const isActive = activeCategory === c.id;
              return (
                <button
                  key={c.id}
                  onClick={() => handleCategorySelect(c.id)}
                  className={`flex items-center gap-2 px-3.5 py-1.5 sm:py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer whitespace-nowrap ${
                    isActive
                      ? "bg-[var(--primary)] text-white shadow-md shadow-[var(--brand-glow)] ring-1 ring-white/20"
                      : "bg-[var(--bg-card)] text-[var(--text-muted)] hover:text-[var(--text-main)] border border-[var(--border-subtle)] hover:bg-[var(--bg-card-hover)]"
                  }`}
                >
                  <span>{c.icon}</span>
                  <span>{c.name}</span>
                  <span
                    className={`text-[10px] font-mono px-1.5 py-0.2 rounded-full ${
                      isActive
                        ? "bg-white/20 text-white font-bold"
                        : "bg-slate-200 dark:bg-white/10 text-slate-500"
                    }`}
                  >
                    {c.count}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Sub-bar: Search Input + View Mode Switcher */}
          <div className="w-full max-w-2xl flex flex-col sm:flex-row items-center justify-between gap-3 px-2">
            {/* Search filter */}
            <div className="relative w-full sm:w-72">
              <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search 28 technologies..."
                className="w-full pl-9 pr-8 py-1.5 text-xs rounded-xl bg-white/70 dark:bg-[#070b14]/70 border border-slate-200 dark:border-white/10 text-slate-900 dark:text-white placeholder:text-slate-400 focus:outline-none focus:border-[#476D9A] dark:focus:border-[#61BE99] transition-all"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="absolute right-2.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 dark:hover:text-white"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              )}
            </div>

            {/* View Mode Toggle: Kinetic Stream vs All 28 Grid */}
            <div className="flex items-center gap-1 p-1 rounded-xl bg-slate-200/60 dark:bg-white/5 border border-slate-200 dark:border-white/10">
              <button
                onClick={() => {
                  soundEffects.click();
                  setViewMode("stream");
                }}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                  viewMode === "stream"
                    ? "bg-white dark:bg-[#0c1424] text-[var(--primary)] dark:text-[#61BE99] shadow-sm"
                    : "text-slate-500 hover:text-slate-800 dark:hover:text-slate-300"
                }`}
              >
                <Activity className="w-3.5 h-3.5" />
                <span>Kinetic Stream</span>
              </button>
              <button
                onClick={() => {
                  soundEffects.click();
                  setViewMode("grid");
                }}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                  viewMode === "grid"
                    ? "bg-white dark:bg-[#0c1424] text-[var(--primary)] dark:text-[#61BE99] shadow-sm"
                    : "text-slate-500 hover:text-slate-800 dark:hover:text-slate-300"
                }`}
              >
                <LayoutGrid className="w-3.5 h-3.5" />
                <span>All 28 Grid</span>
                <span className="text-[10px] font-mono px-1 rounded-md bg-[#61BE99]/15 text-[#476D9A] dark:text-[#61BE99]">
                  {filteredTechnologies.length}
                </span>
              </button>
            </div>
          </div>
        </div>

        {/* ========================================================
            VIEW MODE 1: SCROLL-LINKED 3-LANE KINETIC TECH RIVER
            (Lane 1 popover opens DOWNWARDS so it's never cut off)
            ======================================================== */}
        {viewMode === "stream" && (
          <div className="relative py-6 overflow-x-clip overflow-y-visible [mask-image:linear-gradient(to_right,transparent,white_6%,white_94%,transparent)] space-y-4">
            {/* Lane 1: Client & Mobile (Downward Popover) */}
            <motion.div 
              style={{ x: xLane1 }} 
              className={`flex items-center gap-3.5 w-max will-change-transform relative ${
                lane1Technologies.some((t) => t.id === hoveredTechId) ? "z-40" : "z-10"
              }`}
            >
              {[...lane1Technologies, ...lane1Technologies].map((tech, idx) => (
                <React.Fragment key={`${tech.id}-${idx}`}>
                  {renderTechCard(tech, "bottom")}
                </React.Fragment>
              ))}
            </motion.div>

            {/* Lane 2: Backend & Distributed Data (Upward Popover) */}
            <motion.div 
              style={{ x: xLane2 }} 
              className={`flex items-center gap-3.5 w-max will-change-transform relative ${
                lane2Technologies.some((t) => t.id === hoveredTechId) ? "z-40" : "z-10"
              }`}
            >
              {[...lane2Technologies, ...lane2Technologies].map((tech, idx) => (
                <React.Fragment key={`${tech.id}-${idx}`}>
                  {renderTechCard(tech, "top")}
                </React.Fragment>
              ))}
            </motion.div>

            {/* Lane 3: Cloud, DevOps & Applied AI (Upward Popover) */}
            <motion.div 
              style={{ x: xLane3 }} 
              className={`flex items-center gap-3.5 w-max will-change-transform relative ${
                lane3Technologies.some((t) => t.id === hoveredTechId) ? "z-40" : "z-10"
              }`}
            >
              {[...lane3Technologies, ...lane3Technologies].map((tech, idx) => (
                <React.Fragment key={`${tech.id}-${idx}`}>
                  {renderTechCard(tech, "top")}
                </React.Fragment>
              ))}
            </motion.div>

            {/* Switch hint when category filtered */}
            {activeCategory !== "all" && (
              <div className="pt-2 text-center">
                <button
                  onClick={() => {
                    soundEffects.click();
                    setViewMode("grid");
                  }}
                  className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold text-[#476D9A] dark:text-[#61BE99] bg-[#476D9A]/10 hover:bg-[#476D9A]/15 border border-[#476D9A]/20 transition-all cursor-pointer"
                >
                  <span>Viewing matching technologies — Switch to Grid view to see all {filteredTechnologies.length} cards together</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            )}
          </div>
        )}

        {/* ========================================================
            VIEW MODE 2: ALL 28 RESPONSIVE BENTO MATRIX
            (Shows all 28 technologies simultaneously with clean details)
            ======================================================== */}
        {viewMode === "grid" && (
          <div className="animate-in fade-in zoom-in-95 duration-200">
            {filteredTechnologies.length === 0 ? (
              <div className="text-center py-12 p-6 rounded-2xl border border-dashed border-slate-300 dark:border-white/10">
                <p className="text-sm text-slate-500 dark:text-slate-400 font-medium mb-3">
                  No technologies matched your search query &ldquo;{searchQuery}&rdquo;.
                </p>
                <button
                  onClick={() => {
                    setSearchQuery("");
                    setActiveCategory("all");
                  }}
                  className="px-4 py-1.5 rounded-xl bg-[var(--primary)] text-white text-xs font-bold cursor-pointer shadow-sm"
                >
                  Clear Filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5">
                {filteredTechnologies.map((tech) => (
                  <div
                    key={tech.id}
                    onClick={() => handleTechClick(tech)}
                    onMouseEnter={() => {
                      soundEffects.hover();
                      setHoveredTechId(tech.id);
                    }}
                    onMouseLeave={() => setHoveredTechId(null)}
                    className="group relative p-4 rounded-2xl border transition-all duration-200 cursor-pointer glass-panel bg-white/70 dark:bg-[#070b14]/70 border-slate-200/80 dark:border-white/10 hover:border-[#476D9A]/50 dark:hover:border-[#61BE99]/50 hover:shadow-lg hover:shadow-[#476D9A]/10 hover:-translate-y-1 flex flex-col justify-between"
                  >
                    <div>
                      {/* Top row: Icon, Name, Category and Level */}
                      <div className="flex items-start justify-between gap-2 mb-2.5">
                        <div className="flex items-center gap-2.5">
                          <div className="p-2 rounded-xl bg-slate-100 dark:bg-white/[0.06] border border-slate-200/80 dark:border-white/10 shrink-0 group-hover:scale-110 transition-transform">
                            {tech.icon}
                          </div>
                          <div>
                            <h4 className="text-sm font-extrabold text-slate-900 dark:text-white leading-tight">
                              {tech.name}
                            </h4>
                            <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wider">
                              {tech.category}
                            </span>
                          </div>
                        </div>

                        <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded-md bg-[#61BE99]/15 text-[#476D9A] dark:text-[#61BE99] border border-[#61BE99]/30 shrink-0">
                          {tech.level}
                        </span>
                      </div>

                      {/* Brief description */}
                      <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed font-sans line-clamp-2 mb-3">
                        {tech.desc}
                      </p>
                    </div>

                    {/* Bottom metric & consult action */}
                    <div className="flex items-center justify-between pt-2.5 border-t border-slate-200/60 dark:border-white/5 text-[10px] font-mono">
                      <span className="text-slate-500 dark:text-slate-400 font-semibold flex items-center gap-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#61BE99]" />
                        {tech.benchmark}
                      </span>
                      <span className="text-[#476D9A] dark:text-[#61BE99] font-bold group-hover:translate-x-0.5 transition-transform flex items-center gap-1">
                        Consult <ArrowRight className="w-3 h-3" />
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {/* ========================================================
            CLEAN BOTTOM ACTION FOOTER
            ======================================================== */}
        <div className="mt-12 flex flex-col sm:flex-row items-center justify-between gap-4 p-5 sm:p-6 rounded-2xl border border-slate-200 dark:border-white/10 bg-white/60 dark:bg-[#070b14]/60 backdrop-blur-xl shadow-sm">
          <div className="flex items-center gap-3 text-center sm:text-left">
            <div className="p-2.5 rounded-xl bg-[#476D9A]/10 border border-[#476D9A]/20 text-[#476D9A] dark:text-[#61BE99] hidden sm:block">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm sm:text-base font-extrabold text-slate-900 dark:text-white">
                Looking for a bespoke architecture or custom platform migration?
              </h4>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                Our staff engineers evaluate your business constraints to design the optimal stack with zero vendor lock-in.
              </p>
            </div>
          </div>

          <MagneticHover pullFactor={0.16} maxPull={8}>
            <button
              onClick={() => {
                soundEffects.click();
                if (onSelectTech) {
                  onSelectTech("Custom Architecture Stack Consultation");
                }
              }}
              className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-[#476D9A] to-[#61BE99] text-white text-xs sm:text-sm font-bold shadow-md hover:shadow-lg hover:shadow-[#476D9A]/20 transition-all flex items-center justify-center gap-2 cursor-pointer whitespace-nowrap shrink-0"
            >
              <span>Consult with an Architect</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </MagneticHover>
        </div>
      </div>
    </section>
  );
}
