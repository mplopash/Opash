"use client";

import React from "react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ProjectShowcase } from "@/components/ui/project-showcase";

export function ProjectShowcaseSection() {
  return (
    <section id="portfolio" className="py-14 sm:py-20 relative bg-[var(--bg-main)] transition-colors duration-300 overflow-hidden cv-auto">
      {/* Subtle ambient lighting for translucent glass refraction */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[750px] h-[400px] bg-gradient-to-r from-[#476D9A]/15 via-[#5DC099]/10 to-[#476D9A]/15 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          eyebrow="04 // Flagship Deployments & Case Studies"
          title="Flagship Software Engineered for"
          highlight="Enterprise Scale"
          description="Explore our high-impact production deliveries across InsureTech, Healthcare, Industrial Automation, and Autonomous AI. Hover any project to preview live interface telemetry."
        />

        {/* Pure Glass Container - Zero Borders, Zero Shadows, Maximum Performance */}
        <div className="mt-8 rounded-3xl backdrop-blur-2xl bg-white/45 dark:bg-white/[0.03] p-2 sm:p-6 relative overflow-hidden transition-all duration-300">
          <ProjectShowcase heading="Production Portfolios // Live Verified" />
        </div>
      </div>
    </section>
  );
}
