"use client";

import React, { useState } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { HeroSection } from "@/components/sections/HeroSection";
import { StatsSection } from "@/components/sections/StatsSection";
import { GlobalReachSection } from "@/components/sections/GlobalReachSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { IndustriesSection } from "@/components/sections/IndustriesSection";
import { TechStackSection } from "@/components/sections/TechStackSection";
import { UIEffectsBentoSection } from "@/components/sections/UIEffectsBentoSection";
import { WhyChooseUsSection } from "@/components/sections/WhyChooseUsSection";
import { ClientSuccessSection } from "@/components/sections/ClientSuccessSection";
import { ProjectEstimatorSection } from "@/components/sections/ProjectEstimatorSection";
import { BlogInsightsSection } from "@/components/sections/BlogInsightsSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { QuoteModal } from "@/components/sections/QuoteModal";

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
      {/* Sticky Header */}
      <Navbar onOpenQuoteModal={() => handleOpenQuoteModal()} />

      {/* Main Content Area */}
      <main className="flex-1">
        <HeroSection onOpenQuoteModal={() => handleOpenQuoteModal()} />
        <StatsSection />
        <GlobalReachSection />
        <ServicesSection onSelectService={(srv) => handleOpenQuoteModal(srv)} />
        <IndustriesSection onExploreIndustry={(ind) => handleOpenQuoteModal(`Industry Solution: ${ind}`)} />
        <TechStackSection />
        <UIEffectsBentoSection />
        <WhyChooseUsSection />
        <ClientSuccessSection />
        <ProjectEstimatorSection onEstimateSubmit={handleEstimateSubmit} />
        <BlogInsightsSection />
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Shared Global Quote & Consultation Modal */}
      <QuoteModal
        isOpen={quoteModalOpen}
        onClose={() => setQuoteModalOpen(false)}
        initialService={selectedService}
        estimateDetails={estimateDetails}
      />
    </div>
  );
}
