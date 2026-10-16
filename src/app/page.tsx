"use client";

import React, { useState } from "react";
import dynamic from "next/dynamic";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { HeroSection } from "@/components/sections/HeroSection";
import { StatsSection } from "@/components/sections/StatsSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { ProjectShowcaseSection } from "@/components/sections/ProjectShowcaseSection";
import { InteractiveBrandSection } from "@/components/sections/InteractiveBrandSection";
import { WhyChooseUsSection } from "@/components/sections/WhyChooseUsSection";
import { RecognisedBySection } from "@/components/sections/RecognisedBySection";
import { ClientSuccessSection } from "@/components/sections/ClientSuccessSection";
import { TechStackSection } from "@/components/sections/TechStackSection";
import { FounderSection } from "@/components/sections/FounderSection";

// Dynamically import heavy below-the-fold components to keep INP < 50ms
const ProjectEstimatorSection = dynamic(
  () => import("@/components/sections/ProjectEstimatorSection").then((mod) => mod.ProjectEstimatorSection),
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
        {/* 01. Hero: Core Value Proposition & Interactive Architecture Spec */}
        <HeroSection onOpenQuoteModal={() => handleOpenQuoteModal()} />

        {/* 02. Verified Metrics & Live Engineering Benchmarks */}
        <StatsSection />

        {/* 03. Institutional Validation: Recognised By (Clutch, GoodFirms, Upwork, Google) */}
        <RecognisedBySection />

        {/* 04. Core Capabilities: Custom Software, Web, Mobile, AI/ML, Cloud & DevOps */}
        <ServicesSection onSelectService={(srv) => handleOpenQuoteModal(srv)} />

        {/* 05. Proven Work: Flagship Case Studies with Live Verified Telemetry */}
        <ProjectShowcaseSection />

        {/* 06. Interactive Engineering Canvas: Live Tactile Physics & Brand Wordmark */}
        <InteractiveBrandSection onOpenQuoteModal={() => handleOpenQuoteModal("Interactive Engineering Consultation")} />

        {/* 07. Institutional Guarantees: 2-Week Sprints, 100% IP Handover, Direct Senior Devs */}
        <WhyChooseUsSection />

        {/* 07. Curated Technology Ecosystem: 28-Stack Matrix with Production SLAs */}
        <TechStackSection onSelectTech={(tech) => handleOpenQuoteModal(`Technology Architecture: ${tech}`)} />

        {/* 08. Social Proof: Verified Client Testimonials from Global Product Leaders */}
        <ClientSuccessSection />

        {/* 09. Executive Leadership: Meet Our Founder & CEO (Hiren Danecha) */}
        <FounderSection eyebrow="Executive Leadership" />

        {/* 10. Interactive Scope Tool: 60-Second Budget & Timeline Estimator */}
        <ProjectEstimatorSection onEstimateSubmit={handleEstimateSubmit} />

        {/* 11. Engineering Consultation & Direct Inquiries */}
        <ContactSection />
      </main>

      {/* Global Halftone Engineering Footer */}
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
