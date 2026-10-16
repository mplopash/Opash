"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { QuoteModal } from "@/components/sections/QuoteModal";
import { ProjectEstimatorSection } from "@/components/sections/ProjectEstimatorSection";
import { 
  Sparkles, 
  ShieldCheck, 
  CheckCircle2, 
  Clock, 
  FileText, 
  Code2, 
  Rocket 
} from "lucide-react";

export default function GetAQuotePage() {
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

  const roadmap = [
    {
      step: "01",
      title: "Scope & Requirement Analysis",
      desc: "We analyze your parameters, tech stack, and deliverables to calculate precise velocity models.",
      icon: FileText,
    },
    {
      step: "02",
      title: "Transparent Fixed or Sprint Pricing",
      desc: "Receive clear, itemized milestone budgets with zero hidden surcharges or surprise billing.",
      icon: Clock,
    },
    {
      step: "03",
      title: "Technical Discovery Call",
      desc: "Meet directly with our senior full-stack architects to review APIs and white-board architectures.",
      icon: Code2,
    },
    {
      step: "04",
      title: "Sprint Kickoff Within 5 Days",
      desc: "Sign mutual NDA, provision GitHub repositories, and begin development with daily Slack updates.",
      icon: Rocket,
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-[var(--bg-main)] text-[var(--text-main)] selection:bg-[var(--primary)] selection:text-white font-sans">
      <Navbar onOpenQuoteModal={() => setQuoteModalOpen(true)} />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative pt-36 pb-16 overflow-hidden border-b border-[var(--border-subtle)] bg-[var(--bg-secondary)]/30 text-center">
          <div 
            className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[500px] rounded-full pointer-events-none opacity-20 blur-3xl"
            style={{ background: "radial-gradient(circle, #476D9A 0%, transparent 70%)" }}
          />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#5DC099]/30 bg-[#5DC099]/10 text-xs font-semibold text-[#5DC099] tracking-wider uppercase">
              <Sparkles className="w-3.5 h-3.5" />
              <span>TRANSPARENT PROJECT SCOPING</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-[var(--text-main)] max-w-4xl mx-auto leading-tight">
              Accurate Project Estimates With Zero Surprise Fees
            </h1>

            <p className="text-lg sm:text-xl text-[var(--text-muted)] max-w-3xl mx-auto leading-relaxed">
              We analyze your requirements, divide them into actionable milestones, and deliver clear fixed-price or dedicated squad sprint estimates in minutes.
            </p>
          </div>
        </section>

        {/* The Estimator Component */}
        <section className="py-12">
          <ProjectEstimatorSection onEstimateSubmit={handleEstimateSubmit} />
        </section>

        {/* How We Turn Ideas Into Predictable Roadmaps */}
        <section className="py-24 border-t border-[var(--border-subtle)] bg-[var(--bg-secondary)]/30 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <div className="text-xs font-bold text-[#5DC099] uppercase tracking-wider">Predictable Process</div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[var(--text-main)] tracking-tight">
              How We Turn Ideas Into Predictable Roadmaps
            </h2>
            <p className="text-[var(--text-muted)]">
              From your initial inquiry to production handover, every step is transparent and milestone-verified.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {roadmap.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div 
                  key={idx}
                  className="p-6 rounded-2xl border border-[var(--border-subtle)] bg-[var(--bg-main)] space-y-3 hover:border-[#5DC099]/40 transition-colors shadow-sm flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-2xl font-black text-[#5DC099]/40 font-mono">{item.step}</span>
                      <div className="w-8 h-8 rounded-lg bg-[#5DC099]/15 text-[#5DC099] flex items-center justify-center">
                        <Icon className="w-4 h-4" />
                      </div>
                    </div>
                    <h3 className="font-bold text-base text-[var(--text-main)]">{item.title}</h3>
                    <p className="text-xs sm:text-sm text-[var(--text-muted)] mt-1 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

      </main>

      <Footer />

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
