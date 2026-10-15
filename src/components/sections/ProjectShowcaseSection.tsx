"use client";

import React from "react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ProjectShowcase } from "@/components/ui/project-showcase";

export function ProjectShowcaseSection() {
  return (
    <section id="portfolio" className="py-24 relative bg-[var(--bg-main)] transition-colors duration-300 border-b border-[var(--border-subtle)] overflow-hidden">
      {/* Subtle ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-[#1d4ed8]/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          eyebrow="06 // Production Deployments & Case Studies"
          title="Flagship Software Engineered for"
          highlight="Enterprise Scale"
          description="Explore our high-impact production deliveries across InsureTech, Healthcare, Industrial Automation, and Autonomous AI. Hover any project to preview live interface telemetry."
        />

        <div className="mt-8 rounded-3xl glass-panel border border-[var(--border-strong)] p-2 sm:p-6 shadow-2xl relative">
          <ProjectShowcase heading="Production Portfolios // Live Verified" />
        </div>
      </div>
    </section>
  );
}
