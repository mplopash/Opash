"use client";

import React from "react";
import HalftoneWordmarkFooter from "@/components/ui/halftone-wordmark-footer";
import { useTheme } from "@/context/ThemeContext";
import { Activity, Layers, Cpu, ArrowUpRight, Sparkles } from "lucide-react";
import Link from "next/link";

interface InteractiveBrandSectionProps {
  onOpenQuoteModal?: () => void;
}

export function InteractiveBrandSection({ onOpenQuoteModal }: InteractiveBrandSectionProps) {
  const { mode } = useTheme();

  const brandColumns = [
    {
      title: "Capabilities",
      links: [
        { label: "AI Swarms & RAG", href: "/ai-ml-solutions" },
        { label: "Cloud Platforms", href: "/web-development" },
        { label: "Flutter 60 FPS", href: "/mobile-development" },
        { label: "Institutional Audit", href: "/qa-testing" },
      ],
    },
    {
      title: "Enterprise",
      links: [
        { label: "Surat HQ Campus", href: "/company" },
        { label: "50+ In-House Squad", href: "/company" },
        { label: "Zero Subcontractor NDA", href: "/company" },
        { label: "Verified Case Studies", href: "/portfolio" },
      ],
    },
    {
      title: "Surat Dispatch",
      links: [
        { label: "hiren@opashsoftware.com", href: "mailto:hiren@opashsoftware.com" },
        { label: "+91 95372-22266", href: "tel:+919537222266" },
        { label: "Gujarat, India · 24/7", href: "/contact" },
      ],
    },
  ];

  // Palette tuned to match the dark & light modes of Opash
  const palette = mode === "dark"
    ? { background: "#050814", ink: "#476D9A", warm: "#5DC099" }
    : { background: "#F1F5F9", ink: "#334155", warm: "#059669" };

  return (
    <section
      id="tactile-canvas"
      aria-label="Interactive Brand Canvas"
      className="py-16 sm:py-24 relative bg-[var(--bg-main)] overflow-hidden transition-colors duration-300 cv-auto"
    >
      {/* Ambient background glow for organic light refraction */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[450px] bg-gradient-to-r from-[#476D9A]/15 via-[#5DC099]/15 to-[#476D9A]/15 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[var(--primary)]/10 text-[var(--primary)] border border-[var(--primary)]/20 text-xs font-mono tracking-wider uppercase mb-4 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping inline-block" />
            <span>Interactive Engineering Canvas // Live Tactile Physics</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[var(--text-main)] leading-tight">
            Tactile Precision. Built Into{" "}
            <span className="bg-gradient-to-r from-[var(--primary)] to-[var(--accent)] bg-clip-text text-transparent">
              Every Dot.
            </span>
          </h2>

          <p className="mt-4 text-base sm:text-lg text-[var(--text-muted)] leading-relaxed">
            Glide your cursor across the grid to interact with elastic spring physics. Click anywhere on the wordmark to emit kinetic shockwaves.
          </p>

          <div className="mt-4 inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/40 dark:bg-white/[0.05] border border-[var(--border-subtle)] text-xs text-[var(--text-muted)] backdrop-blur-md">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            <span>Interactive Canvas · Reacts to mouse pointer, touch &amp; clicks</span>
          </div>
        </div>

        {/* Pure Glass Canvas Card */}
        <div className="rounded-3xl border border-[var(--border-subtle)] bg-[var(--bg-card)]/80 backdrop-blur-2xl shadow-2xl overflow-hidden relative">
          <HalftoneWordmarkFooter
            as="div"
            wordmark="opash"
            label="OPASH SOFTWARE"
            meta="©2026 · SURAT HQ CAMPUS / GLOBAL DELIVERY"
            columns={brandColumns}
            backToTop={false}
            customBadge="TACTILE PHYSICS // HOOKE'S SPRINGS"
            preset={mode === "dark" ? "night" : "paper"}
            palette={palette}
            height="520px"
            dotGap={8}
            radius={85}
            crop={0}
          />

          {/* Bottom Telemetry Bar */}
          <div className="border-t border-[var(--border-subtle)] bg-[var(--bg-secondary)]/80 px-6 py-4 flex flex-wrap items-center justify-between gap-4 text-xs font-mono text-[var(--text-muted)]">
            <div className="flex items-center gap-6">
              <span className="flex items-center gap-1.5 text-emerald-400">
                <Activity className="w-3.5 h-3.5" />
                60 FPS Hardware Physics
              </span>
              <span className="hidden sm:flex items-center gap-1.5">
                <Layers className="w-3.5 h-3.5 text-[var(--primary)]" />
                Elastic Hooke&apos;s Spring Matrix
              </span>
              <span className="hidden md:flex items-center gap-1.5">
                <Cpu className="w-3.5 h-3.5 text-[var(--accent)]" />
                Zero CPU on Idle (Auto-Sleep)
              </span>
            </div>

            <div className="flex items-center gap-4">
              {onOpenQuoteModal ? (
                <button
                  type="button"
                  onClick={onOpenQuoteModal}
                  className="inline-flex items-center gap-1 text-xs font-semibold text-[var(--primary)] hover:text-[var(--primary-light)] transition-colors"
                >
                  Schedule Technical Discovery
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
              ) : (
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-1 text-xs font-semibold text-[var(--primary)] hover:text-[var(--primary-light)] transition-colors"
                >
                  Start Your Consultation
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
