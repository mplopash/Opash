"use client";

import React, { useState } from "react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Badge } from "@/components/ui/Badge";
import { 
  Star, 
  ExternalLink, 
  Quote, 
  CheckCircle2, 
  ArrowLeft, 
  ArrowRight,
  ShieldCheck,
  Server,
  Layers,
  Sparkles,
  GitBranch
} from "lucide-react";
import { SpotlightCard } from "@/components/common/SpotlightCard";
import { soundEffects } from "@/lib/soundEffects";

export function ClientSuccessSection() {
  const testimonials = [
    {
      clientName: "Anas M.",
      clientRole: "Founder & CTO",
      companyName: "eSanad",
      companyUrl: "https://www.esanad.com/",
      industry: "InsureTech & Document Verification",
      testimonial:
        "We partnered with Opash Software to bring our vision for eSanad.com to life, and they delivered beyond expectations. From secure document verification to a seamless user interface, the platform is fast, intuitive, and scalable.",
      stats: "300,000+ Documents Verified Securely",
      tech: ["Next.js", "Node.js", "AWS", "Security Encryption"],
      architecture: "Decoupled edge-rendered Next.js frontend with encrypted AWS S3 vault, asynchronous OCR verification queues, and KMS key security.",
    },
    {
      clientName: "Brad Jeffery",
      clientRole: "Product Director",
      companyName: "UCareHQ",
      companyUrl: "https://ucarehq.com/",
      industry: "Healthcare & Patient Operations",
      testimonial:
        "Opash Software delivered a seamless and intuitive platform for UCareHQ, combining modern design with robust functionality to enhance user experience and operational efficiency.",
      stats: "40% Boost in Administrative Efficiency",
      tech: ["React", "TypeScript", "REST APIs", "HIPAA Architecture"],
      architecture: "HIPAA-compliant patient workflow portal with role-based access, automated telehealth scheduling, and audited state machine stores.",
    },
    {
      clientName: "Fred Bene",
      clientRole: "VP of Engineering",
      companyName: "IKO International",
      companyUrl: "https://next.ikointl.com/",
      industry: "Global Industrial Tech",
      testimonial:
        "We worked with Hiren and Opash Software for 2 years on a full-time basis as a full stack developer (MEAN) working on frontend Angular and backend services. They are true professionals - communication was fantastic, and commitment was unmatched.",
      stats: "2-Year Sustained Production Engagement",
      tech: ["Angular", "Node.js", "Express", "MongoDB"],
      architecture: "High-volume industrial parts catalog with multi-currency pricing, real-time inventory synchronization, and enterprise ERP bridge.",
    },
    {
      clientName: "Anthony F.",
      clientRole: "Head of Digital",
      companyName: "OpinionPoll",
      companyUrl: "https://www.opinionpoll.org/",
      industry: "Civic Tech & Analytics",
      testimonial:
        "Thank you Hiren, for your hard work and dedication! Your expertise has been invaluable, and we truly appreciate the effort you’ve put into delivering exceptional results. Looking forward to collaborating again!",
      stats: "High-Traffic Real-Time Polling Engine",
      tech: ["React", "PostgreSQL", "WebSockets", "Cloud"],
      architecture: "Sub-100ms real-time vote tallying engine powered by Redis pub/sub, WebSocket broadcast clusters, and anti-tamper rate limiters.",
    },
    {
      clientName: "Sepi G.",
      clientRole: "Founder",
      companyName: "Taygo",
      companyUrl: "https://www.taygo.com/",
      industry: "Fintech & Mortgage Systems",
      testimonial:
        "It was great working with Opash Software. They developed excellent products for me and provided the best support—great knowledge of AWS setup and API management. It is highly recommended to Hire.",
      stats: "Cloud AWS Multi-Service Deployment",
      tech: ["AWS", "Microservices", "Fintech APIs", "Docker"],
      architecture: "Multi-tenant mortgage application funnel with automated credit scoring connectors and automated PDF statement generators.",
    },
    {
      clientName: "Austin Rogers",
      clientRole: "Creative Director",
      companyName: "StickyFrame",
      companyUrl: "https://www.stickyframe.com/",
      industry: "Digital Media & Interactive Video",
      testimonial:
        "It was a great experience working with Opash Software and we are continuing to work on our upcoming projects together. Fast turnaround, proactive suggestions, and clean code.",
      stats: "Next-Gen Interactive Media Web App",
      tech: ["Next.js", "Video APIs", "Tailwind CSS", "Vercel"],
      architecture: "GPU-accelerated interactive web video canvas with custom video timeline scrubbers and ultra-responsive edge caching.",
    },
  ];

  const [activeIdx, setActiveIdx] = useState(0);
  const [viewMode, setViewMode] = useState<"testimonial" | "architecture">("testimonial");

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
    <section id="case-studies" className="py-24 relative bg-[var(--bg-secondary)] overflow-hidden transition-colors duration-300">
      <div id="testimonials" className="absolute -top-24 left-0 pointer-events-none" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="05 // Verified Case Studies"
          title="Real Projects, Real Growth,"
          highlight="Unfiltered Client Proof"
          description="We take pride in building long-term engineering partnerships with founders and enterprise leaders across the globe."
        />

        {/* Direct Interactive Client Pill Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-8 max-w-4xl mx-auto">
          {testimonials.map((t, idx) => (
            <button
              key={idx}
              onClick={() => {
                soundEffects.click();
                setActiveIdx(idx);
              }}
              className={`px-4 py-2 rounded-xl text-xs font-semibold tracking-wide transition-all cursor-pointer ${
                activeIdx === idx
                  ? "bg-[var(--primary)] text-white shadow-lg shadow-[var(--brand-glow)] scale-105"
                  : "bg-[var(--bg-card)] text-[var(--text-muted)] hover:text-[var(--text-main)] border border-[var(--border-subtle)]"
              }`}
            >
              {t.companyName}
            </button>
          ))}
        </div>

        {/* Featured Case Spotlight Card with 3D Tilt */}
        <div className="max-w-5xl mx-auto mb-16" data-cursor="CASE STUDY">
          <SpotlightCard className="p-8 sm:p-12 rounded-3xl glass-panel border border-[var(--border-strong)] relative shadow-2xl">
            <Quote className="w-16 h-16 text-[var(--primary)]/15 absolute top-6 right-8 pointer-events-none" />

            {/* View Mode Toggle: Client Words vs Architectural Breakdown */}
            <div className="flex items-center gap-2 mb-6">
              <button
                onClick={() => {
                  soundEffects.hover();
                  setViewMode("testimonial");
                }}
                className={`px-3 py-1 rounded-lg text-xs font-semibold tracking-wider uppercase transition-all cursor-pointer ${
                  viewMode === "testimonial"
                    ? "bg-[var(--primary)]/20 text-[var(--primary-light)] border border-[var(--primary)]/40 font-bold"
                    : "text-[var(--text-muted)] hover:text-[var(--text-main)]"
                }`}
              >
                Founder Feedback
              </button>
              <button
                onClick={() => {
                  soundEffects.hover();
                  setViewMode("architecture");
                }}
                className={`px-3 py-1 rounded-lg text-xs font-semibold tracking-wider uppercase transition-all cursor-pointer ${
                  viewMode === "architecture"
                    ? "bg-[var(--accent)]/20 text-[var(--accent)] border border-[var(--accent)]/40 font-bold"
                    : "text-[var(--text-muted)] hover:text-[var(--text-main)]"
                }`}
              >
                Architecture Topology
              </button>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-8 space-y-6">
                <div className="flex items-center gap-3">
                  <div className="flex items-center gap-1 text-amber-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400" />
                    ))}
                  </div>
                  <Badge variant="glass" size="sm">
                    {current.industry}
                  </Badge>
                </div>

                {viewMode === "testimonial" ? (
                  <p className="text-lg sm:text-2xl font-medium text-[var(--text-main)] leading-relaxed italic animate-in fade-in duration-300">
                    "{current.testimonial}"
                  </p>
                ) : (
                  <div className="p-5 rounded-2xl bg-[var(--bg-main)]/90 border border-[var(--border-subtle)] space-y-2 animate-in fade-in duration-300">
                    <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[var(--accent)] font-bold">
                      <GitBranch className="w-4 h-4" />
                      Engineering Topology: {current.companyName}
                    </div>
                    <p className="text-sm text-[var(--text-main)] leading-relaxed font-sans">
                      {current.architecture}
                    </p>
                  </div>
                )}

                <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-[var(--border-subtle)]">
                  <div>
                    <h4 className="text-base font-bold text-[var(--text-main)]">
                      {current.clientName}
                    </h4>
                    <p className="text-xs text-[var(--text-muted)]">
                      {current.clientRole} ·{" "}
                      <a
                        href={current.companyUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="text-[var(--primary-light)] font-semibold hover:underline inline-flex items-center gap-1"
                      >
                        {current.companyName}
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    </p>
                  </div>

                  <div className="flex items-center gap-2">
                    <button
                      onClick={prev}
                      className="p-2.5 rounded-xl border border-[var(--border-subtle)] text-[var(--text-muted)] hover:text-[var(--text-main)] hover:bg-[var(--border-subtle)] transition-colors cursor-pointer"
                      aria-label="Previous testimonial"
                    >
                      <ArrowLeft className="w-4 h-4" />
                    </button>
                    <span className="text-xs font-mono text-[var(--text-dim)] px-2 font-bold">
                      0{activeIdx + 1} / 0{testimonials.length}
                    </span>
                    <button
                      onClick={next}
                      className="p-2.5 rounded-xl border border-[var(--border-subtle)] text-[var(--text-muted)] hover:text-[var(--text-main)] hover:bg-[var(--border-subtle)] transition-colors cursor-pointer"
                      aria-label="Next testimonial"
                    >
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>

              {/* Case Stats Column */}
              <div className="lg:col-span-4 p-6 rounded-2xl bg-[var(--bg-main)]/90 border border-[var(--border-subtle)] space-y-4">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[var(--primary)]">
                  <ShieldCheck className="w-4 h-4" />
                  Verified Production Deliverable
                </div>

                <div className="text-sm font-bold text-[var(--text-main)]">
                  {current.stats}
                </div>

                <div className="pt-3 border-t border-[var(--border-subtle)]">
                  <div className="text-[11px] font-semibold text-[var(--text-dim)] uppercase tracking-wider mb-2">
                    Architecture Stack
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {current.tech.map((t, idx) => (
                      <span
                        key={idx}
                        className="px-2.5 py-1 rounded-md bg-[var(--bg-card)] text-[11px] font-mono text-[var(--text-muted)] border border-[var(--border-subtle)] font-medium"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                <a
                  href={current.companyUrl}
                  target="_blank"
                  rel="noreferrer"
                  onClick={() => soundEffects.click()}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-[var(--accent)] hover:underline pt-1"
                >
                  Visit Live Client Platform
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </SpotlightCard>
        </div>

        {/* Client Logos / URLs Strip */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 text-center">
          {testimonials.map((item, idx) => (
            <button
              key={idx}
              onClick={() => {
                soundEffects.hover();
                setActiveIdx(idx);
              }}
              className={`p-4 rounded-2xl border transition-all cursor-pointer ${
                activeIdx === idx
                  ? "border-[var(--primary)] bg-[var(--primary)]/10 text-[var(--text-main)] font-bold shadow-md shadow-[var(--brand-glow)]"
                  : "border-[var(--border-subtle)] bg-[var(--bg-card)] text-[var(--text-muted)] hover:text-[var(--text-main)] hover:border-[var(--border-strong)]"
              }`}
            >
              <div className="text-sm font-bold truncate">{item.companyName}</div>
              <div className="text-[11px] text-[var(--text-dim)] truncate mt-0.5">
                {item.clientName}
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
