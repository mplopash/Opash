"use client";

import React, { useState } from "react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { 
  ShieldAlert, 
  Coins, 
  ShoppingBag, 
  Stethoscope, 
  Building2, 
  GraduationCap, 
  Plane, 
  HeartHandshake, 
  Radio,
  ArrowRight,
  TrendingUp,
  Lock,
  Zap
} from "lucide-react";

interface IndustriesSectionProps {
  onExploreIndustry: (industry: string) => void;
}

export function IndustriesSection({ onExploreIndustry }: IndustriesSectionProps) {
  const [selectedIndustry, setSelectedIndustry] = useState(0);

  const industries = [
    {
      id: "insuretech",
      name: "InsureTech & Insurance",
      icon: <ShieldAlert className="w-5 h-5 text-blue-400" />,
      tagline: "Automated underwriting, fraud mitigation, and instantaneous claims verification.",
      metrics: "60% Reduction in Claim Cycle Times",
      highlights: [
        "Automated Policy Lifecycle Management",
        "Encrypted KYC & Document Verification (eSanad Architecture)",
        "Real-Time Fraud Detection with AI Scoring",
        "Seamless Broker & Agent Portals",
      ],
      deliverable: "Enterprise-grade digital insurance platforms with bank-grade audit logs.",
    },
    {
      id: "fintech",
      name: "FinTech & Digital Banking",
      icon: <Coins className="w-5 h-5 text-emerald-400" />,
      tagline: "Next-gen payment gateways, ledger security, and algorithmic compliance.",
      metrics: "99.999% Transaction Reliability",
      highlights: [
        "Multi-Currency Payment Processing & Wallets",
        "PCI-DSS & SOC-2 Compliant Architecture",
        "Automated Reconciliation & Reporting Engines",
        "Micro-Lending & Credit Scoring Algorithms",
      ],
      deliverable: "High-throughput fintech platforms handling millions in transactions safely.",
    },
    {
      id: "ecommerce",
      name: "E-Commerce & Omnichannel",
      icon: <ShoppingBag className="w-5 h-5 text-amber-400" />,
      tagline: "Ultra-fast headless commerce, real-time stock sync, and personalized recommendations.",
      metrics: "3.4x Higher Conversion Rates",
      highlights: [
        "Sub-Second Checkout Flow Optimization",
        "Multi-Warehouse Inventory Synchronization",
        "AI-Powered Personalized Product Feeds",
        "Custom Shopify Plus & Headless Next.js Storefronts",
      ],
      deliverable: "Frictionless global storefronts engineered for Black Friday traffic spikes.",
    },
    {
      id: "healthcare",
      name: "HealthCare & MedTech",
      icon: <Stethoscope className="w-5 h-5 text-rose-400" />,
      tagline: "HIPAA-compliant telemedicine, electronic health records, and clinician workflows.",
      metrics: "100% HIPAA & Data Privacy Compliant",
      highlights: [
        "Encrypted Video Consultation Streams",
        "Electronic Health Record (EHR/EMR) Interoperability",
        "Patient Self-Scheduling & Reminders",
        "IoT Medical Device Telemetry Integration",
      ],
      deliverable: "Secure healthcare apps that improve patient care and clinical workflows.",
    },
    {
      id: "realestate",
      name: "Real Estate & PropTech",
      icon: <Building2 className="w-5 h-5 text-cyan-400" />,
      tagline: "Virtual property tours, automated lease contracts, and real estate CRM systems.",
      metrics: "45% Faster Property Closing Velocity",
      highlights: [
        "Interactive Geospatial Property Search & Maps",
        "Digital Contract Signing & Escrow Gateways",
        "Automated Tenant Verification & Screening",
        "Property Management & Maintenance Ticketing",
      ],
      deliverable: "Complete digital real estate suites for brokerages, developers, and asset managers.",
    },
    {
      id: "edtech",
      name: "EdTech & Learning Platforms",
      icon: <GraduationCap className="w-5 h-5 text-indigo-400" />,
      tagline: "Interactive learning management systems, gamified learning, and virtual classrooms.",
      metrics: "85% Student Retention Rate",
      highlights: [
        "Adaptive Learning Quizzes with AI Feedback",
        "Live Classroom Video & Screen Sharing",
        "Automated Certificate Generation & Badging",
        "Parent-Teacher Engagement Dashboards",
      ],
      deliverable: "Engaging educational portals for universities, K-12, and corporate training.",
    },
    {
      id: "travel",
      name: "Travel & Hospitality",
      icon: <Plane className="w-5 h-5 text-sky-400" />,
      tagline: "End-to-end booking engines, dynamic room pricing, and itinerary planners.",
      metrics: "Sub-Second Global Flight & Hotel Search",
      highlights: [
        "GDS & Bedbank API Integrations (Amadeus, Sabre)",
        "Dynamic Yield Management & Pricing Engines",
        "Mobile Keyless Entry & Concierge Apps",
        "Automated Multi-lingual Guest Communications",
      ],
      deliverable: "Robust travel tech platforms with global inventory connectivity.",
    },
    {
      id: "industrial",
      name: "Industrial Tech & Telecom",
      icon: <Radio className="w-5 h-5 text-teal-400" />,
      tagline: "IoT machine telemetry, predictive maintenance, and network analytics.",
      metrics: "30% Reduction in Factory Downtime",
      highlights: [
        "Edge Device Telemetry & Time-Series Ingestion",
        "Predictive Equipment Maintenance Alerts",
        "Supply Chain Logistics Track & Trace",
        "Custom Supervisory Control & SCADA Web Interfaces",
      ],
      deliverable: "Connected industrial dashboards that visualize sensor streams in real-time.",
    },
    {
      id: "ngo",
      name: "NGOs & Social Impact",
      icon: <HeartHandshake className="w-5 h-5 text-red-400" />,
      tagline: "Transparent donor management, grant tracking, and worldwide field dashboards.",
      metrics: "100% Transparent Fund Accountability",
      highlights: [
        "Low-Fee Recurring Giving & Donor Portals",
        "Field Worker Mobile Data Collection with Offline Sync",
        "Automated Tax Exemption Receipt Delivery",
        "Interactive Public Impact & SDG Dashboards",
      ],
      deliverable: "Purpose-driven software platforms that amplify humanitarian initiatives.",
    },
  ];

  const current = industries[selectedIndustry];

  return (
    <section id="industries" className="py-14 sm:py-20 relative bg-[var(--bg-main)] cv-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="11 // Specialized Verticals"
          title="Tailored Solutions for"
          highlight="High-Stakes Industries"
          description="Opash Software brings over 8 years of specialized engineering across heavily regulated, data-intensive industries."
        />

        {/* Industry Pill Selector Grid */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-10">
          {industries.map((ind, idx) => (
            <button
              key={ind.id}
              onClick={() => setSelectedIndustry(idx)}
              className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                selectedIndustry === idx
                  ? "bg-[var(--primary)] text-white shadow-lg shadow-[var(--brand-glow)]"
                  : "bg-[var(--bg-card)] text-[var(--text-muted)] hover:text-[var(--text-main)] border border-[var(--border-subtle)]"
              }`}
            >
              <span>{ind.icon}</span>
              <span>{ind.name}</span>
            </button>
          ))}
        </div>

        {/* Selected Industry Detail Card */}
        <div className="max-w-5xl mx-auto">
          <Card className="p-8 sm:p-10 border border-[var(--border-strong)] relative overflow-hidden" glow>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-7 space-y-5">
                <div className="flex items-center gap-3">
                  <div className="p-3 rounded-2xl bg-[var(--primary)]/15 border border-[var(--primary)]/30">
                    {current.icon}
                  </div>
                  <div>
                    <Badge variant="primary" size="sm">
                      SPECIALIZED INDUSTRY SOLUTION
                    </Badge>
                    <h3 className="text-2xl sm:text-3xl font-extrabold text-[var(--text-main)] mt-1">
                      {current.name}
                    </h3>
                  </div>
                </div>

                <p className="text-base text-[var(--text-muted)] leading-relaxed">
                  {current.tagline}
                </p>

                <div className="space-y-3 pt-2">
                  <div className="text-xs font-bold uppercase tracking-wider text-[var(--text-dim)]">
                    Architectural Highlights
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {current.highlights.map((item, hIdx) => (
                      <div
                        key={hIdx}
                        className="flex items-center gap-2 text-xs text-[var(--text-main)] p-2 rounded-lg bg-[var(--bg-main)]/50 border border-[var(--border-subtle)]"
                      >
                        <Zap className="w-3.5 h-3.5 text-[var(--accent)] shrink-0" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-2">
                  <Button
                    variant="gradient"
                    size="md"
                    onClick={() => onExploreIndustry(current.name)}
                    rightIcon={<ArrowRight className="w-4 h-4" />}
                  >
                    Build for {current.name}
                  </Button>
                </div>
              </div>

              {/* Metrics & Impact Column */}
              <div className="lg:col-span-5 p-6 sm:p-8 rounded-2xl bg-[var(--bg-main)]/80 border border-[var(--border-subtle)] space-y-6">
                <div>
                  <div className="flex items-center gap-2 text-emerald-400 text-xs font-bold uppercase tracking-wider mb-2">
                    <TrendingUp className="w-4 h-4" />
                    Key Business Outcome
                  </div>
                  <div className="text-2xl sm:text-3xl font-extrabold text-[var(--text-main)]">
                    {current.metrics}
                  </div>
                </div>

                <div className="pt-4 border-t border-[var(--border-subtle)]">
                  <div className="text-xs font-semibold text-[var(--text-dim)] uppercase tracking-wider mb-1">
                    Production Deliverable
                  </div>
                  <div className="text-xs text-[var(--text-muted)] leading-relaxed">
                    {current.deliverable}
                  </div>
                </div>

                <div className="p-3 rounded-xl bg-[var(--primary)]/10 border border-[var(--primary)]/20 flex items-center gap-2.5 text-xs text-[var(--primary-light)]">
                  <Lock className="w-4 h-4 shrink-0" />
                  <span>Enterprise SLA, NDA & IP Security Guarantees</span>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}
