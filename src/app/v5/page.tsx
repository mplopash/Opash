"use client";

import React from "react";
import Link from "next/link";
import { ArrowLeft, Sparkles } from "lucide-react";
import InkHeroDemo from "@/components/ui/ink-hero-demo";
import ScrollAnimation from "@/components/ui/you-can-scroll";

export default function V5KineticScrollEdition() {
  return (
    <div className="min-h-screen bg-[var(--bg-main)] text-[var(--text-main)] selection:bg-[var(--primary)] selection:text-white">
      {/* Floating Top Navigation Pill */}
      <div className="fixed top-6 left-6 z-50">
        <Link
          href="/"
          className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-[var(--bg-card)]/80 backdrop-blur-xl border border-[var(--border-strong)] text-xs font-mono font-bold hover:bg-[var(--primary)] hover:text-white transition-all shadow-xl"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Return to Flagship</span>
        </Link>
      </div>

      <div className="fixed top-6 right-6 z-50">
        <span className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-cyan-500/15 border border-cyan-500/30 text-cyan-400 text-xs font-mono font-bold shadow-lg">
          <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
          <span>V5 KINETIC SCROLL EDITION</span>
        </span>
      </div>

      {/* 1. WebGL Ink Hero Dissolve in Three Stations */}
      <section className="relative">
        <InkHeroDemo />
      </section>

      {/* 2. Chromatic Hue-Shift Scroll Animation */}
      <section className="relative border-t border-[var(--border-subtle)] bg-[var(--bg-secondary)]/50">
        <div className="max-w-7xl mx-auto px-6 pt-16 text-center">
          <span className="text-xs font-mono text-[var(--accent)] uppercase tracking-widest font-bold">
            Station Transition // Chromatic Phase
          </span>
        </div>
        <ScrollAnimation />
      </section>
    </div>
  );
}
