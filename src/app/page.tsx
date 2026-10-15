"use client";

import React, { useState } from "react";
import dynamic from "next/dynamic";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { HeroSection } from "@/components/sections/HeroSection";
import { StatsSection } from "@/components/sections/StatsSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { ProjectShowcaseSection } from "@/components/sections/ProjectShowcaseSection";
import { CohereStackedCardsSection } from "@/components/sections/CohereStackedCardsSection";
import { WhyChooseUsSection } from "@/components/sections/WhyChooseUsSection";
import { ClientSuccessSection } from "@/components/sections/ClientSuccessSection";
import { IndustriesSection } from "@/components/sections/IndustriesSection";
import { TechStackSection } from "@/components/sections/TechStackSection";
import { CohereScrollTextReveal } from "@/components/common/CohereScrollTextReveal";

// Dynamically import heavy below-the-fold components to reduce initial RAM and keep INP < 50ms
const GlobalReachSection = dynamic(
  () => import("@/components/sections/GlobalReachSection").then((mod) => mod.GlobalReachSection),
  {
    ssr: false,
    loading: () => (
      <div className="py-20 text-center text-xs font-mono text-[var(--text-muted)] animate-pulse">
        INITIALIZING SECURE SURAT HQ TELEMETRY NODE...
      </div>
    ),
  }
);

const ProjectEstimatorSection = dynamic(
  () => import("@/components/sections/ProjectEstimatorSection").then((mod) => mod.ProjectEstimatorSection),
  {
    loading: () => <div className="py-16" />,
  }
);

const BlogInsightsSection = dynamic(
  () => import("@/components/sections/BlogInsightsSection").then((mod) => mod.BlogInsightsSection),
  {
    loading: () => <div className="py-16" />,
  }
);

const ContactSection = dynamic(
  () => import("@/components/sections/ContactSection").then((mod) => mod.ContactSection),
  {
    loading: () => <div className="py-16" />,
  }
);

const QuoteModal = dynamic(
  () => import("@/components/sections/QuoteModal").then((mod) => mod.QuoteModal),
  {
    ssr: false,
  }
);

export default function Home() {
  const [quoteModalOpen, setQuoteModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState<string>("Custom Software Development");
  const [estimateDetails, setEstimateDetails] = useState<{
    platform: string;
    stage: string;
    timeline: string;
    addons: string[];
    approxCost: string;
    duration: string;
  } | null>(null);

  const handleOpenQuoteModal = (serviceName?: string) => {
    if (serviceName) {
      setSelectedService(serviceName);
    }
    setEstimateDetails(null);
    setQuoteModalOpen(true);
  };

  const handleEstimateSubmit = (details: {
    platform: string;
    stage: string;
    timeline: string;
    addons: string[];
    approxCost: string;
    duration: string;
  }) => {
    setEstimateDetails(details);
    setSelectedService(details.platform);
    setQuoteModalOpen(true);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[var(--bg-main)] text-[var(--text-main)] selection:bg-[var(--primary)] selection:text-white">
      {/* Dynamic Sticky Header */}
      <Navbar onOpenQuoteModal={() => handleOpenQuoteModal()} />

      {/* Main Content Area - Arranged as a High-Converting Enterprise Engineering Platform */}
      <main className="flex-1">
        {/* 01. Hero: Core Value Prop & Interactive Architecture Spec */}
        <HeroSection onOpenQuoteModal={() => handleOpenQuoteModal()} />

        {/* 02. Proof & Key Metrics: 50+ Devs, 70+ Deliveries, 99.8% SLA, 8+ Years */}
        <StatsSection />

        {/* 03. Core Capabilities: Custom Software, Web, Mobile, AI/ML, SaaS */}
        <ServicesSection onSelectService={(srv) => handleOpenQuoteModal(srv)} />

        {/* 04. Proven Work: Flagship Case Studies with Live Verified Telemetry */}
        <ProjectShowcaseSection />

        {/* 05. Engineering Architecture: 4-Tier Scalable Stack & Sovereign IP */}
        <CohereStackedCardsSection onOpenQuoteModal={handleOpenQuoteModal} />

        {/* 06. Global Delivery: Surat HQ Active Beacon & Worldwide Client Hubs */}
        <GlobalReachSection />

        {/* 07. Institutional Guarantees: 2-Week Sprints, Mutual NDA, Direct Slack */}
        <WhyChooseUsSection />

        {/* 08. Social Proof: Verified Client Testimonials & Upwork Top-Rated Ratings */}
        <ClientSuccessSection />

        {/* 09. Interactive Scope Tool: Project & Budget Estimator */}
        <ProjectEstimatorSection onEstimateSubmit={handleEstimateSubmit} />

        {/* 10. Domain Verticals: InsurTech, Healthcare, Logistics, FinTech */}
        <IndustriesSection onExploreIndustry={(ind) => handleOpenQuoteModal(`Industry Solution: ${ind}`)} />

        {/* 11. Technology Matrix: Next.js, React, Node, Python, Flutter, Go, AWS */}
        <TechStackSection />

        {/* 12. Engineering Manifesto Statement */}
        <CohereScrollTextReveal 
          subtext="THE NEW NATURE OF DIGITAL ENGINEERING // OPASH STANDARDS"
          text="We engineer mission-critical software and autonomous AI systems that reason, adapt, and scale natively into modern enterprise workflows with mathematical precision."
        />

        {/* 13. High-Authority Engineering Insights & Thought Leadership */}
        <BlogInsightsSection />

        {/* 14. High-Intent Consultation & Inquiries */}
        <ContactSection />
      </main>

      {/* 15. Global Halftone Engineering Footer */}
      <Footer />

      {/* Shared Global Quote & Consultation Modal */}
      {quoteModalOpen && (
        <QuoteModal
          isOpen={quoteModalOpen}
          onClose={() => setQuoteModalOpen(false)}
          initialService={selectedService}
          estimateDetails={estimateDetails}
        />
      )}
    </div>
  );
}
