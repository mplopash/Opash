"use client";

import React from "react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ProjectShowcase } from "@/components/ui/project-showcase";
import { BorderBeam } from "@/components/common/BorderBeam";

export function ProjectShowcaseSection() {
  return (
    <section id="portfolio" className="py-14 sm:py-20 relative bg-[var(--bg-main)] transition-colors duration-300 overflow-hidden cv-auto">
      {/* Subtle ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-[#476D9A]/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          eyebrow="04 // Flagship Deployments & Case Studies"
          title="Flagship Software Engineered for"
          highlight="Enterprise Scale"
          description="Explore our high-impact production deliveries across InsureTech, Healthcare, Industrial Automation, and Autonomous AI. Hover any project to preview live interface telemetry."
        />

        <div className="mt-8 rounded-3xl glass-panel border border-[var(--border-strong)] p-2 sm:p-6 shadow-2xl relative overflow-hidden">
          {/* 21st.dev Border Beam Perimeter Accent */}
          <BorderBeam size={320} duration={12} colorFrom="#476D9A" colorTo="#61BE99" />
          <ProjectShowcase heading="Production Portfolios // Live Verified" />
        </div>
      </div>
    </section>
  );
}
