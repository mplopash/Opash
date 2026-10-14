"use client";

import React, { useState } from "react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { 
  Star, 
  ExternalLink, 
  ArrowLeft, 
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  TrendingUp,
  Cpu
} from "lucide-react";
import { soundEffects } from "@/lib/soundEffects";

export function ClientSuccessSection() {
  const testimonials = [
    {
      clientName: "Anas M.",
      clientRole: "Founder & CTO",
      companyName: "eSanad",
      companyUrl: "https://www.esanad.com/",
      industry: "InsureTech & Underwriting",
      metricNumber: "300,000+",
      metricLabel: "Documents Verified Securely",
      testimonial:
        "We partnered with Opash Software to bring our vision for eSanad.com to life, and they delivered beyond expectations. From secure document verification to a seamless user interface, the platform is fast, intuitive, and scalable.",
      tech: ["Next.js", "Node.js", "AWS S3 Vault", "KMS Security"],
      architecture: "Decoupled edge-rendered Next.js frontend with encrypted AWS S3 vault, asynchronous OCR verification queues, and KMS key security.",
    },
    {
      clientName: "Brad Jeffery",
      clientRole: "Product Director",
      companyName: "UCareHQ",
      companyUrl: "https://ucarehq.com/",
      industry: "Healthcare & Patient Operations",
      metricNumber: "+40%",
      metricLabel: "Boost in Administrative Efficiency",
      testimonial:
        "Opash Software delivered a seamless and intuitive platform for UCareHQ, combining modern design with robust functionality to enhance user experience and operational efficiency.",
      tech: ["React", "TypeScript", "REST APIs", "HIPAA Architecture"],
      architecture: "HIPAA-compliant patient workflow portal with role-based access, automated telehealth scheduling, and audited state machine stores.",
    },
    {
      clientName: "Fred Bene",
      clientRole: "VP of Engineering",
      companyName: "IKO International",
      companyUrl: "https://next.ikointl.com/",
      industry: "Global Industrial Tech",
      metricNumber: "2-Year",
      metricLabel: "Sustained Production Engagement",
      testimonial:
        "We worked with Hiren and Opash Software for 2 years on a full-time basis as a full stack developer (MEAN) working on frontend Angular and backend services. They are true professionals - communication was fantastic, and commitment was unmatched.",
      tech: ["Angular", "Node.js", "Express", "MongoDB"],
      architecture: "High-volume industrial parts catalog with multi-currency pricing, real-time inventory synchronization, and enterprise ERP bridge.",
    },
    {
      clientName: "Anthony F.",
      clientRole: "Head of Digital",
      companyName: "OpinionPoll",
      companyUrl: "https://www.opinionpoll.org/",
      industry: "Civic Tech & Analytics",
      metricNumber: "Sub-100ms",
      metricLabel: "Real-Time Polling Engine Latency",
      testimonial:
        "Thank you Hiren, for your hard work and dedication! Your expertise has been invaluable, and we truly appreciate the effort you’ve put into delivering exceptional results. Looking forward to collaborating again!",
      tech: ["React", "PostgreSQL", "WebSockets", "Redis Pub/Sub"],
      architecture: "Sub-100ms real-time vote tallying engine powered by Redis pub/sub, WebSocket broadcast clusters, and anti-tamper rate limiters.",
    },
    {
      clientName: "Sepi G.",
      clientRole: "Founder",
      companyName: "Taygo",
      companyUrl: "https://www.taygo.com/",
      industry: "Fintech & Mortgage Systems",
      metricNumber: "Multi-Region",
      metricLabel: "AWS Cloud Infrastructure",
      testimonial:
        "It was great working with Opash Software. They developed excellent products for me and provided the best support—great knowledge of AWS setup and API management. Highly recommended to hire.",
      tech: ["AWS", "Microservices", "Fintech APIs", "Docker"],
      architecture: "Multi-tenant mortgage application funnel with automated credit scoring connectors and automated PDF statement generators.",
    },
    {
      clientName: "Austin Rogers",
      clientRole: "Creative Director",
      companyName: "StickyFrame",
      companyUrl: "https://www.stickyframe.com/",
      industry: "Digital Media & Interactive Video",
      metricNumber: "60 FPS",
      metricLabel: "Interactive Video Canvas Scrubbing",
      testimonial:
        "It was a great experience working with Opash Software and we are continuing to work on our upcoming projects together. Fast turnaround, proactive suggestions, and clean code.",
      tech: ["Next.js", "Video APIs", "Tailwind CSS", "Vercel Edge"],
      architecture: "GPU-accelerated interactive web video canvas with custom video timeline scrubbers and ultra-responsive edge caching.",
    },
  ];

  const [activeIdx, setActiveIdx] = useState(0);

  const prev = () => {
    soundEffects.hover();
    setActiveIdx((curr) => (curr === 0 ? testimonials.length - 1 : curr - 1));
  };

  const next = () => {
    soundEffects.hover();
    setActiveIdx((curr) => (curr === testimonials.length - 1 ? 0 : curr + 1));
  };

  const current = testimonials[activeIdx];

  return (
    <section id="case-studies" className="py-24 relative bg-[var(--bg-main)] border-t border-[var(--border-subtle)] transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="05 // Verified Case Studies"
          title="Real Projects, Real Growth,"
          highlight="Unfiltered Client Proof"
          description="We take pride in building long-term engineering partnerships with founders and enterprise leaders across the globe."
        />

        {/* Clean Client Navigation Strip (Editorial Style) */}
        <div className="flex items-center justify-start sm:justify-center gap-2 overflow-x-auto pb-4 mb-10 no-scrollbar">
          {testimonials.map((t, idx) => (
            <button
              key={idx}
              onClick={() => {
                soundEffects.click();
                setActiveIdx(idx);
              }}
              className={`px-4 py-2 rounded-full text-xs font-mono font-medium transition-all whitespace-nowrap cursor-pointer ${
                activeIdx === idx
                  ? "bg-[var(--text-main)] text-[var(--bg-main)] font-bold shadow-md"
                  : "bg-[var(--bg-card)] text-[var(--text-muted)] hover:text-[var(--text-main)] border border-[var(--border-subtle)] hover:border-[var(--border-strong)]"
              }`}
            >
              {t.companyName}
            </button>
          ))}
        </div>

        {/* Clean Editorial Case Study Presentation (Cohere-style Calm Layout) */}
        <div className="max-w-5xl mx-auto rounded-3xl border border-[var(--border-strong)] bg-[var(--bg-card)]/50 backdrop-blur-xl p-8 sm:p-12 shadow-xl relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            
            {/* Left Column: Direct Quote & Author Attribution */}
            <div className="lg:col-span-7 space-y-6">
              <div className="flex items-center gap-3">
                <div className="flex items-center gap-1 text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-amber-400" />
                  ))}
                </div>
                <span className="text-[11px] font-mono uppercase tracking-wider text-[var(--text-dim)] px-2.5 py-0.5 rounded-full bg-[var(--border-subtle)] border border-[var(--border-subtle)]">
                  {current.industry}
                </span>
              </div>

              <blockquote className="text-xl sm:text-2xl text-[var(--text-main)] leading-relaxed font-normal tracking-tight">
                "{current.testimonial}"
              </blockquote>

              <div className="pt-4 border-t border-[var(--border-subtle)] flex items-center justify-between">
                <div>
                  <div className="font-bold text-base text-[var(--text-main)]">
                    {current.clientName}
                  </div>
                  <div className="text-xs text-[var(--text-muted)] flex items-center gap-1.5 mt-0.5">
                    <span>{current.clientRole}</span>
                    <span>·</span>
                    <a
                      href={current.companyUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="text-[var(--primary-light)] font-semibold hover:underline inline-flex items-center gap-1"
                    >
                      {current.companyName}
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                </div>

                {/* Minimal Pagination Arrows */}
                <div className="flex items-center gap-2">
                  <button
                    onClick={prev}
                    className="p-2 rounded-xl border border-[var(--border-strong)] bg-[var(--bg-main)] text-[var(--text-muted)] hover:text-[var(--text-main)] hover:bg-[var(--border-subtle)] transition-colors cursor-pointer"
                    aria-label="Previous case study"
                  >
                    <ArrowLeft className="w-4 h-4" />
                  </button>
                  <span className="text-xs font-mono text-[var(--text-dim)] font-semibold px-2">
                    0{activeIdx + 1} / 0{testimonials.length}
                  </span>
                  <button
                    onClick={next}
                    className="p-2 rounded-xl border border-[var(--border-strong)] bg-[var(--bg-main)] text-[var(--text-muted)] hover:text-[var(--text-main)] hover:bg-[var(--border-subtle)] transition-colors cursor-pointer"
                    aria-label="Next case study"
                  >
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>

            {/* Right Column: Key Metric Callout & Architecture Details */}
            <div className="lg:col-span-5 p-6 sm:p-7 rounded-2xl bg-[var(--bg-main)]/80 border border-[var(--border-subtle)] space-y-5">
              <div className="flex items-center justify-between text-xs font-mono text-[var(--text-dim)]">
                <span className="inline-flex items-center gap-1.5 text-emerald-400 font-semibold">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  Verified Deliverable
                </span>
                <span>Surat HQ</span>
              </div>

              <div>
                <div className="text-3xl sm:text-4xl font-extrabold text-[var(--accent)] tracking-tight">
                  {current.metricNumber}
                </div>
                <div className="text-xs text-[var(--text-muted)] font-mono mt-1">
                  {current.metricLabel}
                </div>
              </div>

              <div className="pt-4 border-t border-[var(--border-subtle)] space-y-2">
                <div className="text-[11px] font-mono text-[var(--text-dim)] uppercase tracking-wider flex items-center gap-1.5">
                  <Cpu className="w-3.5 h-3.5 text-[var(--primary)]" />
                  <span>Architecture Topology</span>
                </div>
                <p className="text-xs text-[var(--text-main)] leading-relaxed">
                  {current.architecture}
                </p>
              </div>

              <div className="pt-3 border-t border-[var(--border-subtle)]">
                <div className="flex flex-wrap gap-1.5">
                  {current.tech.map((t, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-0.5 rounded text-[10px] font-mono bg-[var(--bg-card)] text-[var(--text-dim)] border border-[var(--border-subtle)]"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
