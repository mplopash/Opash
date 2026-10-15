"use client";

import React, { useState } from "react";
import { Users, Rocket, Clock, Award, CheckCircle2, Activity, ShieldCheck, Zap, GitCommit } from "lucide-react";
import { SpotlightCard } from "@/components/common/SpotlightCard";
import { CountUp } from "@/components/common/CountUp";
import { BorderBeam } from "@/components/common/BorderBeam";
import { soundEffects } from "@/lib/soundEffects";

export function StatsSection() {
  const [telemetryMode, setTelemetryMode] = useState<"milestones" | "engineering">("milestones");

  const milestones = [
    {
      value: "50+",
      label: "Vetted Senior Developers",
      subtext: "Full-stack, Mobile, AI & DevOps in-house",
      icon: <Users className="w-5 h-5 text-[var(--primary)]" />,
    },
    {
      value: "70+",
      label: "Custom Projects Delivered",
      subtext: "Enterprise platforms & modern mobile apps",
      icon: <Rocket className="w-5 h-5 text-[var(--accent)]" />,
    },
    {
      value: "12,000+",
      label: "Hours of Execution",
      subtext: "Agile sprints & production uptime",
      icon: <Clock className="w-5 h-5 text-emerald-500" />,
    },
    {
      value: "8+",
      label: "Years Market Stability",
      subtext: "Transforming digital visions since 2017",
      icon: <Award className="w-5 h-5 text-amber-500" />,
    },
  ];

  const telemetry = [
    {
      value: "12ms",
      label: "Average Edge Latency",
      subtext: "Cloudflare Workers & Surat HQ routing",
      icon: <Zap className="w-5 h-5 text-[var(--accent)]" />,
    },
    {
      value: "100%",
      label: "Source Code Handover",
      subtext: "Immediate IP assignment on sprint completion",
      icon: <ShieldCheck className="w-5 h-5 text-emerald-500" />,
    },
    {
      value: "99.98%",
      label: "CI/CD Pipeline Health",
      subtext: "Automated lint, unit & end-to-end tests",
      icon: <GitCommit className="w-5 h-5 text-[var(--primary-light)]" />,
    },
    {
      value: "2-Week",
      label: "Sprint Delivery Cadence",
      subtext: "Predictable demos with staging releases",
      icon: <Activity className="w-5 h-5 text-indigo-400" />,
    },
  ];

  const currentStats = telemetryMode === "milestones" ? milestones : telemetry;

  return (
    <section id="stats" className="py-10 sm:py-14 relative bg-[var(--bg-main)] transition-colors duration-300 cv-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SpotlightCard className="p-6 sm:p-10 rounded-3xl glass-panel border border-[var(--border-strong)] relative overflow-hidden shadow-2xl">
          {/* Subtle perimeter border beam in brand colors */}
          <BorderBeam size={280} duration={14} colorFrom="#476D9A" colorTo="#61BE99" />

          {/* Subtle decorative glow */}
          <div className="absolute top-0 right-1/4 w-96 h-96 bg-[var(--primary)]/10 rounded-full blur-3xl pointer-events-none" />

          {/* Header Switcher */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-6 mb-8 border-b border-[var(--border-subtle)]">
            <div>
              <span className="text-[11px] font-mono uppercase tracking-widest text-[var(--accent)] font-bold">
                02 // Verified Engineering Benchmark
              </span>
              <h2 className="text-xl sm:text-2xl font-bold text-[var(--text-main)] mt-0.5">
                Measurable Impact & Production Velocity
              </h2>
            </div>

            {/* Interactive Mode Toggle */}
            <div className="flex items-center p-1 rounded-xl bg-[var(--bg-main)]/80 border border-[var(--border-subtle)]">
              <button
                onClick={() => {
                  soundEffects.hover();
                  setTelemetryMode("milestones");
                }}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold tracking-wide transition-all cursor-pointer ${
                  telemetryMode === "milestones"
                    ? "bg-[var(--primary)] text-white shadow-sm"
                    : "text-[var(--text-muted)] hover:text-[var(--text-main)]"
                }`}
              >
                Agency Milestones
              </button>
              <button
                onClick={() => {
                  soundEffects.hover();
                  setTelemetryMode("engineering");
                }}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold tracking-wide transition-all cursor-pointer ${
                  telemetryMode === "engineering"
                    ? "bg-[var(--primary)] text-white shadow-sm"
                    : "text-[var(--text-muted)] hover:text-[var(--text-main)]"
                }`}
              >
                Live Engineering Telemetry
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 divide-y sm:divide-y-0 sm:divide-x divide-[var(--border-subtle)]">
            {currentStats.map((item, idx) => (
              <div
                key={idx}
                className={`flex flex-col items-start ${idx > 0 ? "pt-6 sm:pt-0 sm:pl-8" : ""}`}
              >
                <div className="p-2.5 rounded-2xl bg-[var(--border-subtle)] border border-[var(--border-subtle)] mb-4">
                  {item.icon}
                </div>
                <div className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[var(--text-main)]">
                  <CountUp key={`${telemetryMode}-${idx}`} value={item.value} />
                </div>
                <div className="text-sm font-bold text-[var(--text-main)] mt-1.5">
                  {item.label}
                </div>
                <div className="text-xs text-[var(--text-muted)] mt-1 leading-relaxed">
                  {item.subtext}
                </div>
              </div>
            ))}
          </div>

          {/* Bottom Trust Line */}
          <div className="mt-10 pt-6 border-t border-[var(--border-subtle)] flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-[var(--text-muted)]">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
              <span>
                Recognized as a leading Custom Software and AI Development Company in India with a global client footprint.
              </span>
            </div>
            <div className="flex items-center gap-4 text-[var(--text-main)] font-semibold">
              <span className="flex items-center gap-1.5 text-emerald-500">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping inline-block" />
                Surat HQ Hub Active
              </span>
              <span>•</span>
              <span>Zero Vendor Lock-in</span>
            </div>
          </div>
        </SpotlightCard>
      </div>
    </section>
  );
}
