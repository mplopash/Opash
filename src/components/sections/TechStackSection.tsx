"use client";

import React, { useState } from "react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Badge } from "@/components/ui/Badge";
import { 
  Layout, 
  Server, 
  Smartphone, 
  Database, 
  CloudLightning, 
  ShieldAlert, 
  Cpu,
  Layers,
  Terminal,
  Sparkles
} from "lucide-react";
import { SpotlightCard } from "@/components/common/SpotlightCard";
import { soundEffects } from "@/lib/soundEffects";

export function TechStackSection() {
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [hoveredTech, setHoveredTech] = useState<string | null>(null);

  const categories = [
    { id: "all", name: "All Platforms", icon: <Layers className="w-4 h-4" /> },
    { id: "frontend", name: "Frontend & Edge", icon: <Layout className="w-4 h-4" /> },
    { id: "backend", name: "Backend & APIs", icon: <Server className="w-4 h-4" /> },
    { id: "mobile", name: "Mobile Ecosystem", icon: <Smartphone className="w-4 h-4" /> },
    { id: "database", name: "Databases & Cache", icon: <Database className="w-4 h-4" /> },
    { id: "cloud", name: "Cloud & DevOps", icon: <CloudLightning className="w-4 h-4" /> },
    { id: "ai", name: "AI & Neural Mesh", icon: <Cpu className="w-4 h-4" /> },
  ];

  const technologies = [
    // Frontend
    { name: "Next.js 16", category: "frontend", level: "Core Specialty", desc: "SSR, Edge & Full-stack React 19", benchmark: "Sub-second LCP" },
    { name: "React 19", category: "frontend", level: "Core Specialty", desc: "Concurrent components & Action hooks", benchmark: "60fps Re-rendering" },
    { name: "Angular", category: "frontend", level: "Production Proven", desc: "Enterprise enterprise dashboards (MEAN)", benchmark: "Type-safe Modules" },
    { name: "TypeScript", category: "frontend", level: "Standard", desc: "Type-safe robust maintainability", benchmark: "100% Strict Mode" },
    { name: "Tailwind CSS v4", category: "frontend", level: "Core Specialty", desc: "Dynamic CSS tokens & responsive system", benchmark: "Zero Bundle Bloat" },
    { name: "Svelte / SvelteKit", category: "frontend", level: "Production Proven", desc: "High-performance reactive interfaces", benchmark: "Virtual DOM Free" },
    
    // Backend
    { name: "Node.js & Express", category: "backend", level: "Core Specialty", desc: "High-throughput asynchronous APIs", benchmark: "12,000 req/sec" },
    { name: "Python & FastAPI", category: "backend", level: "Core Specialty", desc: "Machine Learning & Microservices", benchmark: "Async Pydantic v2" },
    { name: "Go (Golang)", category: "backend", level: "Production Proven", desc: "Ultra low-latency network microservices", benchmark: "3ms Execution" },
    { name: "Java & Spring Boot", category: "backend", level: "Production Proven", desc: "Enterprise robust backend architectures", benchmark: "Bank-Grade Core" },
    { name: ".NET Core", category: "backend", level: "Production Proven", desc: "Mission-critical corporate systems", benchmark: "High Throughput" },
    { name: "GraphQL & REST", category: "backend", level: "Standard", desc: "Modern data federation & OpenAPI schemas", benchmark: "Strict Contracts" },

    // Mobile
    { name: "Flutter", category: "mobile", level: "Core Specialty", desc: "Single codebase iOS & Android perfection", benchmark: "Pixel Match 120Hz" },
    { name: "React Native", category: "mobile", level: "Core Specialty", desc: "Native bridge with React ergonomics", benchmark: "TurboModules Core" },
    { name: "Swift / iOS", category: "mobile", level: "Native", desc: "Apple ecosystem & hardware optimization", benchmark: "Metal & SwiftUI" },
    { name: "Kotlin / Android", category: "mobile", level: "Native", desc: "Modern Jetpack & Android architecture", benchmark: "Coroutines Flow" },

    // Databases
    { name: "PostgreSQL", category: "database", level: "Core Specialty", desc: "Relational integrity, JSONB & pgvector", benchmark: "ACID Compliant" },
    { name: "MongoDB", category: "database", level: "Production Proven", desc: "Document storage for rapid schemas", benchmark: "Cluster Sharding" },
    { name: "Redis", category: "database", level: "Standard", desc: "In-memory caching & pub/sub messaging", benchmark: "< 1ms Read/Write" },
    { name: "Firebase / Supabase", category: "database", level: "Production Proven", desc: "Real-time subscriptions & edge DB", benchmark: "Real-time Sockets" },

    // Cloud & DevOps
    { name: "AWS (Amazon Web Services)", category: "cloud", level: "Certified", desc: "EC2, ECS, Lambda, S3, RDS, CloudFront", benchmark: "99.99% SLA" },
    { name: "Docker & Kubernetes", category: "cloud", level: "Standard", desc: "Containerized reproducible deployments", benchmark: "Auto-Healing" },
    { name: "Google Cloud Platform", category: "cloud", level: "Production Proven", desc: "BigQuery, Cloud Run, Vertex AI", benchmark: "Global VPC" },
    { name: "CI/CD (GitHub Actions)", category: "cloud", level: "Standard", desc: "Automated linting, test runs & deployments", benchmark: "Green Builds" },

    // AI
    { name: "OpenAI & GPT-4o", category: "ai", level: "Applied GenAI", desc: "Custom assistants & function calling", benchmark: "Agentic Swarms" },
    { name: "Gemini Pro / Flash", category: "ai", level: "Applied GenAI", desc: "Multimodal analysis & fast token rates", benchmark: "1M Context Window" },
    { name: "LangChain & LlamaIndex", category: "ai", level: "Orchestration", desc: "Agentic tool calling & multi-agent flows", benchmark: "RAG Pipeline" },
    { name: "Pinecone & Weaviate", category: "ai", level: "Vector DB", desc: "Semantic search & vector embeddings", benchmark: "Cosine Distance" },
  ];

  const filteredTech = technologies.filter((t) => {
    if (activeCategory === "all") return true;
    return t.category === activeCategory;
  });

  return (
    <section id="tech-stack" className="py-24 relative bg-[var(--bg-secondary)] transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="07 // Modern Technology Matrix"
          title="Battle-Tested Stacks for"
          highlight="Uncompromising Scale"
          description="We select the ideal platform architecture to guarantee maximum performance, security, and developer velocity for your project."
        />

        {/* Categories Tab Bar */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((c) => (
            <button
              key={c.id}
              onClick={() => {
                soundEffects.hover();
                setActiveCategory(c.id);
              }}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                activeCategory === c.id
                  ? "bg-[var(--primary)] text-white shadow-md shadow-[var(--brand-glow)]"
                  : "bg-[var(--bg-card)] text-[var(--text-muted)] hover:text-[var(--text-main)] border border-[var(--border-subtle)]"
              }`}
            >
              <span>{c.icon}</span>
              <span>{c.name}</span>
            </button>
          ))}
        </div>

        {/* Tech Grid with 3D Spotlight Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {filteredTech.map((tech, idx) => (
            <SpotlightCard
              key={idx}
              onMouseEnter={() => setHoveredTech(tech.name)}
              onMouseLeave={() => setHoveredTech(null)}
              className="p-5 rounded-2xl glass-panel border border-[var(--border-strong)] hover:border-[var(--primary)]/60 flex flex-col justify-between group transition-all duration-300 shadow-sm hover:shadow-xl hover:shadow-[var(--brand-glow)]"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-base font-bold text-[var(--text-main)] group-hover:text-[var(--primary-light)] transition-colors">
                    {tech.name}
                  </span>
                  <Badge variant="glass" size="sm">
                    {tech.level}
                  </Badge>
                </div>
                <p className="text-xs text-[var(--text-muted)] leading-relaxed font-normal">
                  {tech.desc}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-[var(--border-subtle)] flex items-center justify-between text-[11px] text-[var(--text-dim)] uppercase tracking-wider font-mono">
                <span className="font-semibold text-[var(--text-dim)]">{tech.category}</span>
                <span className="text-emerald-500 font-bold flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 inline-block" />
                  {tech.benchmark}
                </span>
              </div>
            </SpotlightCard>
          ))}
        </div>
      </div>
    </section>
  );
}
