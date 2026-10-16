"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { 
  ArrowUpRight, 
  ShieldCheck, 
  Activity, 
  Factory, 
  Sparkles, 
  ExternalLink,
  CheckCircle2,
  Lock,
  Layers,
  ArrowRight
} from "lucide-react";
import { soundEffects } from "@/lib/soundEffects";

export interface Project {
  title: string;
  description: string;
  year: string;
  link: string;
  image: string;
  category: string;
  metrics: string;
  tags: string[];
  icon: React.ComponentType<{ className?: string }>;
}

export const defaultProjects: Project[] = [
  {
    title: "eSanad InsureTech",
    description: "Enterprise policy lifecycle & encrypted document underwriting platform with zero-knowledge vaulting.",
    year: "2024",
    link: "https://www.esanad.com/",
    image: "/images/projects/esanad.jpg",
    category: "FinTech & InsureTech",
    metrics: "99.99% Underwriting SLA",
    tags: ["Next.js 16", "AWS S3", "KMS Encryption", "Node.js"],
    icon: ShieldCheck,
  },
  {
    title: "UCareHQ Healthcare",
    description: "HIPAA-compliant clinician portal, vitals monitoring & real-time telehealth coordination workflow.",
    year: "2024",
    link: "https://ucarehq.com/",
    image: "/images/projects/ucarehq.jpg",
    category: "HealthTech & Telehealth",
    metrics: "65% Less Admin Overhead",
    tags: ["React 19", "TypeScript", "PostgreSQL", "HIPAA Ready"],
    icon: Activity,
  },
  {
    title: "IKO International",
    description: "High-volume industrial parts catalog with real-time ERP synchronization and global inventory routing.",
    year: "2023",
    link: "https://next.ikointl.com/",
    image: "/images/projects/ikointl.jpg",
    category: "Industrial Tech & ERP",
    metrics: "Real-time Multi-Region Sync",
    tags: ["Angular", "Node.js", "MongoDB", "ERP API"],
    icon: Factory,
  },
  {
    title: "Opash Neural Mesh",
    description: "Autonomous multi-agent reasoning, vector RAG & AI task orchestrators executing private enterprise workflows.",
    year: "2024",
    link: "/services",
    image: "/images/projects/neural-mesh.webp",
    category: "Enterprise AI & LLM",
    metrics: "Sub-10ms Vector Traversal",
    tags: ["Python", "LangChain", "Gemini API", "Vector RAG"],
    icon: Sparkles,
  },
];

interface ProjectShowcaseProps {
  items?: Project[];
  heading?: string;
  className?: string;
}

export function ProjectShowcase({
  items = defaultProjects,
  heading = "Production Portfolios // Live Verified",
  className = "",
}: ProjectShowcaseProps) {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const activeProject = items[activeIndex] || items[0];

  return (
    <div className={`w-full max-w-6xl mx-auto ${className}`}>
      {heading && (
        <div className="flex items-center justify-between mb-8 pb-3 border-b border-slate-200/40 dark:border-white/[0.06]">
          <h2 className="text-xs font-mono font-bold tracking-widest text-[#476D9A] dark:text-[#5DC099] uppercase flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span>{heading}</span>
          </h2>
          <span className="text-xs text-[var(--text-dim)] font-mono">
            {items.length} Flagship Case Studies
          </span>
        </div>
      )}

      {/* Responsive Split Showcase Layout - No Broken Floating Overlays, No Viewport Clipping */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start">
        
        {/* Left Column: 4 Case Study Rows (7 Cols on Desktop) */}
        <div className="lg:col-span-7 space-y-2">
          {items.map((project, index) => {
            const ProjectIcon = project.icon;
            const isActive = activeIndex === index;

            return (
              <div
                key={project.title}
                onMouseEnter={() => {
                  soundEffects.hover();
                  setActiveIndex(index);
                }}
                onClick={() => {
                  soundEffects.click();
                  setActiveIndex(index);
                }}
                className={`group relative p-4 sm:p-5 rounded-2xl transition-all duration-300 cursor-pointer ${
                  isActive
                    ? "bg-white/60 dark:bg-white/[0.06] backdrop-blur-xl"
                    : "hover:bg-white/35 dark:hover:bg-white/[0.02]"
                }`}
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex items-start gap-3.5 flex-1 min-w-0">
                    {/* Icon Badge */}
                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 transition-transform duration-300 group-hover:scale-105 ${
                      isActive
                        ? "bg-[#476D9A] text-white dark:bg-[#5DC099] dark:text-slate-950 shadow-xs"
                        : "bg-[#476D9A]/10 text-[#476D9A] dark:bg-white/[0.05] dark:text-[#5DC099]"
                    }`}>
                      <ProjectIcon className="w-5 h-5" />
                    </div>

                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 flex-wrap">
                        <h3 className={`font-bold text-base sm:text-lg tracking-tight transition-colors ${
                          isActive 
                            ? "text-[#476D9A] dark:text-[#5DC099]" 
                            : "text-[var(--text-main)] group-hover:text-[#476D9A] dark:group-hover:text-[#5DC099]"
                        }`}>
                          {project.title}
                        </h3>
                        <span className="text-[10px] font-mono font-semibold px-2 py-0.5 rounded-md bg-[#5DC099]/15 text-[#5DC099] border border-[#5DC099]/30">
                          {project.metrics}
                        </span>
                      </div>

                      <p className="text-xs sm:text-sm mt-1.5 leading-relaxed text-[var(--text-muted)] line-clamp-2">
                        {project.description}
                      </p>

                      {/* Tech Chips */}
                      <div className="flex flex-wrap gap-1.5 mt-2.5">
                        {project.tags.map((tag, tIdx) => (
                          <span
                            key={tIdx}
                            className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-100 dark:bg-white/[0.04] text-[var(--text-muted)]"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Year & Action Arrow */}
                  <div className="flex flex-col items-end justify-between self-stretch shrink-0">
                    <span className="text-xs font-mono font-bold text-[var(--text-dim)]">
                      {project.year}
                    </span>
                    <a
                      href={project.link}
                      target={project.link.startsWith("http") ? "_blank" : undefined}
                      rel={project.link.startsWith("http") ? "noopener noreferrer" : undefined}
                      onClick={(e) => e.stopPropagation()}
                      className={`w-7 h-7 rounded-lg flex items-center justify-center transition-all ${
                        isActive 
                          ? "bg-[#476D9A] text-white dark:bg-[#5DC099] dark:text-slate-950" 
                          : "text-[var(--text-dim)] hover:text-[var(--text-main)]"
                      }`}
                      title={`Visit ${project.title}`}
                    >
                      <ArrowUpRight className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Right Column: Active Live Architecture & Interface Telemetry (5 Cols on Desktop) */}
        <div className="lg:col-span-5 sticky top-28">
          <div className="p-4 sm:p-5 rounded-2xl backdrop-blur-2xl bg-white/50 dark:bg-white/[0.03] transition-all duration-300">
            {/* Header Strip */}
            <div className="flex items-center justify-between pb-3 mb-3 border-b border-slate-200/40 dark:border-white/[0.06] text-xs">
              <span className="font-mono text-[11px] font-bold text-[#476D9A] dark:text-[#5DC099] uppercase flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#5DC099]" />
                <span>{activeProject.category}</span>
              </span>
              <span className="font-mono text-[10px] text-[var(--text-dim)]">
                PRODUCTION_OK
              </span>
            </div>

            {/* Live Interface Screenshot Canvas */}
            <div className="relative aspect-[16/10] w-full rounded-xl overflow-hidden bg-slate-950 shadow-inner group/preview">
              <Image
                src={activeProject.image}
                alt={activeProject.title}
                fill
                sizes="(max-width: 1024px) 100vw, 420px"
                className="object-cover object-top transition-transform duration-700 ease-out group-hover/preview:scale-105"
                priority
              />
              {/* Subtle glass lighting overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#040711]/75 via-transparent to-transparent pointer-events-none" />
              
              {/* Dynamic Bottom Badge */}
              <div className="absolute bottom-2.5 left-3 right-3 flex items-center justify-between text-[11px] text-white/95 font-medium drop-shadow-md">
                <span className="font-mono font-bold tracking-tight">{activeProject.title}</span>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-emerald-500/80 text-white font-bold backdrop-blur-sm">
                  Verified
                </span>
              </div>
            </div>

            {/* Direct Visit / Feasibility Action */}
            <div className="mt-4 pt-3 border-t border-slate-200/40 dark:border-white/[0.06] flex items-center justify-between gap-3">
              <span className="text-xs text-[var(--text-muted)] font-medium truncate">
                {activeProject.metrics}
              </span>
              <a
                href={activeProject.link}
                target={activeProject.link.startsWith("http") ? "_blank" : undefined}
                rel={activeProject.link.startsWith("http") ? "noopener noreferrer" : undefined}
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold text-white bg-gradient-to-r from-[#476D9A] to-[#5DC099] hover:opacity-95 shadow-xs transition-transform hover:scale-102 shrink-0 cursor-pointer"
              >
                <span>Live Deploy</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
}

export default ProjectShowcase;
