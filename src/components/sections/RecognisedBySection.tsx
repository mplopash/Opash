"use client";

import React, { useState } from "react";
import { 
  Award, 
  ExternalLink, 
  Star, 
  ShieldCheck, 
  CheckCircle2, 
  TrendingUp,
  Sparkles,
  Layers
} from "lucide-react";
import { SiGoogle, SiUpwork, SiTrustpilot } from "react-icons/si";
import { soundEffects } from "@/lib/soundEffects";

interface RecognitionItem {
  id: string;
  name: string;
  badge: string;
  rating?: string;
  stars?: number;
  category: string;
  verifiedUrl: string;
  accentColor: string;
  summary: string;
  tag: string;
}

const recognitions: RecognitionItem[] = [
  {
    id: "clutch",
    name: "Clutch",
    badge: "TOP DEVELOPER",
    rating: "4.9 / 5.0",
    stars: 5,
    category: "Top Custom Software & Web Engineering Partner",
    verifiedUrl: "https://clutch.co/profile/opash-software",
    accentColor: "#FF4A3D",
    summary: "Recognized as leading software development company based on verified client feedback and technical delivery excellence.",
    tag: "Global 4.9★",
  },
  {
    id: "goodfirms",
    name: "GoodFirms",
    badge: "TOP RATED",
    rating: "5.0 / 5.0",
    stars: 5,
    category: "Top Web & Mobile App Development Firm",
    verifiedUrl: "https://www.goodfirms.co/company/opash-software",
    accentColor: "#1B82E6",
    summary: "Ranked among top custom software engineering agencies for consistent on-time project execution and enterprise architecture.",
    tag: "5.0★ Quality Score",
  },
  {
    id: "upwork",
    name: "Upwork",
    badge: "TOP-RATED PLUS",
    rating: "100% JSS",
    stars: 5,
    category: "Elite Enterprise Agency (Top 1% Worldwide)",
    verifiedUrl: "https://www.opashsoftware.com/",
    accentColor: "#14A800",
    summary: "Highest agency tier awarded for sustained large-contract success, 100% job satisfaction, and flawless client retention.",
    tag: "Top 1% Global",
  },
  {
    id: "google",
    name: "Google Reviews",
    badge: "VERIFIED RATING",
    rating: "4.9 / 5.0",
    stars: 5,
    category: "Trusted Software Consultancy & Development HQ",
    verifiedUrl: "https://www.opashsoftware.com/",
    accentColor: "#4285F4",
    summary: "Dozens of 5-star public verified reviews from startup founders, CTOs, and global product managers.",
    tag: "4.9★ Public Trust",
  },
  {
    id: "topdevelopers",
    name: "TopDevelopers",
    badge: "FEATURED FIRM",
    rating: "Premier 2024",
    stars: 5,
    category: "Leading Next-Gen Web & AI Engineering Partner",
    verifiedUrl: "https://www.topdevelopers.co/",
    accentColor: "#F59E0B",
    summary: "Recognized for modern stack adoption, cloud-native deployments, and agile sprint-driven engineering teams.",
    tag: "Premier Partner",
  },
  {
    id: "techreviewer",
    name: "TechReviewer",
    badge: "TOP SOFTWARE CO",
    rating: "Top 10 Tier",
    stars: 5,
    category: "Top AI, Web & Cloud Engineering Solutions",
    verifiedUrl: "https://techreviewer.co/companies/opash-software",
    accentColor: "#6366F1",
    summary: "Vetted for technical rigor, code audit transparency, and multi-disciplinary software engineering talent.",
    tag: "Vetted Agency",
  },
  {
    id: "designrush",
    name: "DesignRush",
    badge: "ACCREDITED AGENCY",
    rating: "Top Mobile Dev",
    stars: 5,
    category: "Custom Software & Cross-Platform Mobile Apps",
    verifiedUrl: "https://www.designrush.com/",
    accentColor: "#EC4899",
    summary: "Recognized for cutting-edge UI/UX design integrated natively with robust microservices and secure backends.",
    tag: "Accredited Agency",
  },
  {
    id: "trustpilot",
    name: "Trustpilot",
    badge: "EXCELLENT",
    rating: "4.8 / 5.0",
    stars: 5,
    category: "Verified Enterprise Software Services",
    verifiedUrl: "https://www.trustpilot.com/review/opashsoftware.com",
    accentColor: "#00B67A",
    summary: "High customer trust index reflecting responsive communications, transparent pricing, and robust post-launch warranties.",
    tag: "Verified Reviews",
  },
  {
    id: "techimply",
    name: "TechImply",
    badge: "TOP CONSULTING",
    rating: "Certified",
    stars: 5,
    category: "Top Software Development Companies",
    verifiedUrl: "https://www.techimply.com/profile/opash-software",
    accentColor: "#06B6D4",
    summary: "Indexed as a premier technological vendor for scalable enterprise workflows, APIs, and SaaS development.",
    tag: "Certified Partner",
  },
];

export function RecognisedBySection() {
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  return (
    <section className="relative py-20 bg-[var(--bg-card)]/40 border-y border-[var(--border-subtle)] overflow-hidden">
      {/* Ambient Radial Mesh Background */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-30 dark:opacity-40"
        style={{
          backgroundImage: `radial-gradient(ellipse 60% 50% at 50% 50%, rgba(71, 109, 154, 0.12), transparent 70%)`,
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header Block */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[var(--primary)]/10 border border-[var(--primary)]/25 text-xs font-bold tracking-wider text-[var(--primary)] uppercase mb-4 shadow-sm">
            <Award className="w-3.5 h-3.5 text-[#5DC099]" />
            <span>08 // Global Industry Accreditations</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[var(--text-main)] tracking-tight">
            We Are <span className="text-[#476D9A] dark:text-[#6a9bcc]">Recognised By</span>
          </h2>

          <p className="mt-4 text-base sm:text-lg text-[var(--text-muted)] leading-relaxed">
            Consistently ranked among the world’s premier software engineering and AI consultancy agencies across leading independent review platforms.
          </p>
        </div>

        {/* High-Converting Grid of Recognition Badges */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {recognitions.map((item) => {
            const isHovered = hoveredId === item.id;
            return (
              <a
                key={item.id}
                href={item.verifiedUrl}
                target="_blank"
                rel="noopener noreferrer"
                onMouseEnter={() => {
                  soundEffects.hover();
                  setHoveredId(item.id);
                }}
                onMouseLeave={() => setHoveredId(null)}
                className={`group relative p-6 rounded-2xl backdrop-blur-xl transition-all duration-300 flex flex-col justify-between overflow-hidden cursor-pointer ${
                  isHovered 
                    ? "bg-white/70 dark:bg-white/[0.06] border border-[#476D9A]/40 dark:border-[#5DC099]/40 -translate-y-1" 
                    : "bg-white/40 dark:bg-white/[0.02] border border-slate-200/50 dark:border-white/[0.05] hover:bg-white/60 dark:hover:bg-white/[0.04]"
                }`}
              >
                {/* Decorative Top Accent Glow Bar */}
                <div 
                  className="absolute top-0 left-0 right-0 h-1 transition-opacity duration-300"
                  style={{
                    backgroundColor: item.accentColor,
                    opacity: isHovered ? 1 : 0.4,
                  }}
                />

                <div>
                  {/* Top Row: Name + Rating / Badge */}
                  <div className="flex items-center justify-between gap-3 mb-4">
                    <div className="flex items-center gap-2.5">
                      {/* Authentic Brand Icon Container */}
                      <div 
                        className="w-9 h-9 rounded-xl flex items-center justify-center font-bold text-sm text-white shadow-xs transition-transform duration-300 group-hover:scale-105"
                        style={{ backgroundColor: item.accentColor }}
                      >
                        {item.id === "google" && <SiGoogle className="w-4 h-4 text-white" />}
                        {item.id === "upwork" && <SiUpwork className="w-4 h-4 text-white" />}
                        {item.id === "trustpilot" && <SiTrustpilot className="w-4 h-4 text-white" />}
                        {item.id === "clutch" && (
                          <svg className="w-4 h-4 fill-white" viewBox="0 0 24 24">
                            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 14.5c-2.48 0-4.5-2.02-4.5-4.5S10.52 7.5 13 7.5c1.37 0 2.6.62 3.42 1.6l-1.42 1.42C14.47 9.87 13.78 9.5 13 9.5c-1.38 0-2.5 1.12-2.5 2.5s1.12 2.5 2.5 2.5c.78 0 1.47-.37 2-1.02l1.42 1.42c-.82.98-2.05 1.6-3.42 1.6z"/>
                          </svg>
                        )}
                        {item.id === "goodfirms" && (
                          <svg className="w-4 h-4 fill-white" viewBox="0 0 24 24">
                            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
                          </svg>
                        )}
                        {item.id === "designrush" && <Layers className="w-4 h-4 text-white" />}
                        {item.id === "topdevelopers" && <Award className="w-4 h-4 text-white" />}
                        {item.id === "techreviewer" && <ShieldCheck className="w-4 h-4 text-white" />}
                        {item.id === "techimply" && <CheckCircle2 className="w-4 h-4 text-white" />}
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-[var(--text-main)] group-hover:text-[var(--primary)] transition-colors flex items-center gap-1.5">
                          {item.name}
                          <ExternalLink className="w-3.5 h-3.5 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-[var(--text-muted)]" />
                        </h3>
                        <span className="text-[11px] font-semibold text-[var(--text-muted)] uppercase tracking-wider">
                          {item.badge}
                        </span>
                      </div>
                    </div>

                    {/* Star or Metric Badge */}
                    <div className="flex flex-col items-end">
                      <div className="flex items-center gap-1 px-2.5 py-1 rounded-lg bg-[var(--bg-main)] border border-[var(--border-subtle)] shadow-xs">
                        {item.stars && (
                          <div className="flex items-center text-amber-400">
                            {[...Array(item.stars)].map((_, i) => (
                              <Star key={i} className="w-3 h-3 fill-amber-400 text-amber-400" />
                            ))}
                          </div>
                        )}
                        <span className="text-xs font-bold text-[var(--text-main)] ml-1">
                          {item.rating}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Recognition Category */}
                  <div className="mb-3">
                    <p className="text-xs font-bold text-[#476D9A] dark:text-[#5DC099] uppercase tracking-wide">
                      {item.category}
                    </p>
                  </div>

                  {/* Summary */}
                  <p className="text-sm text-[var(--text-muted)] leading-relaxed mb-4">
                    {item.summary}
                  </p>
                </div>

                {/* Footer Strip */}
                <div className="pt-3 border-t border-[var(--border-subtle)] flex items-center justify-between text-xs font-medium text-[var(--text-muted)]">
                  <span className="inline-flex items-center gap-1.5 text-emerald-600 dark:text-emerald-400 font-semibold">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    Verified Accreditations
                  </span>
                  <span className="group-hover:text-[var(--primary)] group-hover:translate-x-0.5 transition-all flex items-center gap-1 font-semibold">
                    View Verification &rarr;
                  </span>
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
