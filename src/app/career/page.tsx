"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { QuoteModal } from "@/components/sections/QuoteModal";
import { jobOpenings, culturePerks, JobOpening } from "@/data/careerData";
import { 
  Sparkles, 
  Briefcase, 
  MapPin, 
  Clock, 
  ChevronDown, 
  ArrowRight, 
  CheckCircle2, 
  Send,
  Laptop,
  TrendingUp,
  Coffee,
  HeartPulse,
  CalendarCheck,
  Award
} from "lucide-react";

export default function CareerPage() {
  const [quoteModalOpen, setQuoteModalOpen] = useState(false);
  const [expandedJobId, setExpandedJobId] = useState<string | null>("senior-full-stack-engineer");

  const perkIcons: Record<string, React.ElementType> = {
    Laptop,
    TrendingUp,
    Coffee,
    HeartPulse,
    CalendarCheck,
    Award,
  };

  return (
    <div className="min-h-screen flex flex-col bg-[var(--bg-main)] text-[var(--text-main)] selection:bg-[var(--primary)] selection:text-white font-sans">
      <Navbar onOpenQuoteModal={() => setQuoteModalOpen(true)} />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative pt-36 pb-20 overflow-hidden border-b border-[var(--border-subtle)] bg-[var(--bg-secondary)]/30 text-center">
          <div 
            className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[500px] rounded-full pointer-events-none opacity-20 blur-3xl"
            style={{ background: "radial-gradient(circle, #476D9A 0%, transparent 70%)" }}
          />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#5DC099]/30 bg-[#5DC099]/10 text-xs font-semibold text-[#5DC099] tracking-wider uppercase">
              <Sparkles className="w-3.5 h-3.5" />
              <span>ELITE ENGINEERING CULTURE • WE ARE HIRING</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-[var(--text-main)] max-w-4xl mx-auto leading-tight">
              Let Your Software Career Take Flight
            </h1>

            <p className="text-lg sm:text-xl text-[var(--text-muted)] max-w-3xl mx-auto leading-relaxed">
              Join a passionate collective of 50+ engineers, creators, and innovators engineering world-class software for global brands across North America, Europe, and Asia.
            </p>

            <div className="flex items-center justify-center gap-4 flex-wrap pt-4">
              <a
                href="#openings"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-bold text-white bg-gradient-to-r from-[#476D9A] to-[#5DC099] hover:opacity-95 shadow-xl shadow-[#476D9A]/20 transition-all transform hover:-translate-y-0.5"
              >
                <Briefcase className="w-4 h-4" />
                <span>Explore 5 Open Roles</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="mailto:hiren@opashsoftware.com?subject=Job Application - Opash Software"
                className="inline-flex items-center gap-2 px-7 py-4 rounded-xl font-semibold border border-[var(--border-subtle)] bg-[var(--bg-elevated)] text-[var(--text-main)] hover:border-[#5DC099] transition-all"
              >
                <Send className="w-4 h-4 text-[#5DC099]" />
                <span>Direct Resume Submission</span>
              </a>
            </div>
          </div>
        </section>

        {/* Culture & Perks Section */}
        <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <div className="text-xs font-bold text-[#5DC099] uppercase tracking-wider">Life at Opash</div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[var(--text-main)] tracking-tight">
              Why Engineers Love Building Here
            </h2>
            <p className="text-[var(--text-muted)]">
              We believe great ideas grow in a relaxed, friendly, and flexible environment — where deadlines are met without killing the vibe.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {culturePerks.map((perk, idx) => {
              const Icon = perkIcons[perk.icon] || Award;
              return (
                <div
                  key={idx}
                  className="p-8 rounded-2xl border border-[var(--border-subtle)] bg-[var(--bg-secondary)]/50 hover:border-[#5DC099]/50 transition-colors shadow-sm space-y-3"
                >
                  <div className="w-12 h-12 rounded-xl bg-[#5DC099]/15 text-[#5DC099] flex items-center justify-center">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="font-bold text-lg text-[var(--text-main)]">{perk.title}</h3>
                  <p className="text-sm text-[var(--text-muted)] leading-relaxed">{perk.description}</p>
                </div>
              );
            })}
          </div>
        </section>

        {/* Current Openings */}
        <section id="openings" className="py-24 border-t border-[var(--border-subtle)] bg-[var(--bg-secondary)]/30">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
            <div className="text-center space-y-3">
              <div className="text-xs font-bold text-[#5DC099] uppercase tracking-wider">Current Openings</div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[var(--text-main)] tracking-tight">
                Explore Open Engineering Roles
              </h2>
              <p className="text-[var(--text-muted)]">
                Find the opportunity that aligns with your ambition and technical mastery.
              </p>
            </div>

            <div className="space-y-6">
              {jobOpenings.map((job) => {
                const isExpanded = expandedJobId === job.id;
                return (
                  <div
                    key={job.id}
                    className="rounded-3xl border border-[var(--border-subtle)] bg-[var(--bg-main)] overflow-hidden shadow-sm transition-all duration-200"
                  >
                    <div 
                      onClick={() => setExpandedJobId(isExpanded ? null : job.id)}
                      className="p-6 sm:p-8 cursor-pointer hover:bg-[var(--bg-secondary)]/40 transition-colors flex flex-col sm:flex-row sm:items-center justify-between gap-4"
                    >
                      <div className="space-y-2">
                        <div className="flex items-center gap-2 text-xs font-bold text-[#5DC099]">
                          <span>{job.department}</span>
                          <span>•</span>
                          <span>{job.type}</span>
                        </div>
                        <h3 className="text-xl sm:text-2xl font-bold text-[var(--text-main)]">
                          {job.title}
                        </h3>
                        <div className="flex items-center gap-4 text-xs text-[var(--text-muted)]">
                          <span className="flex items-center gap-1">
                            <MapPin className="w-3.5 h-3.5 text-[var(--primary)]" />
                            {job.location}
                          </span>
                          <span className="flex items-center gap-1">
                            <Clock className="w-3.5 h-3.5 text-[#5DC099]" />
                            Exp: {job.experience}
                          </span>
                        </div>
                      </div>

                      <div className="flex items-center gap-3">
                        <span className="text-xs font-bold text-[#5DC099] hidden sm:inline">
                          {isExpanded ? "Close Details" : "View Role"}
                        </span>
                        <div className={`p-2 rounded-full border border-[var(--border-subtle)] transition-transform duration-200 ${isExpanded ? "rotate-180 bg-[#5DC099]/10" : ""}`}>
                          <ChevronDown className="w-4 h-4 text-[var(--text-muted)]" />
                        </div>
                      </div>
                    </div>

                    <AnimatePresence>
                      {isExpanded && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                          className="border-t border-[var(--border-subtle)] p-6 sm:p-8 bg-[var(--bg-secondary)]/20 space-y-6"
                        >
                          <p className="text-sm sm:text-base text-[var(--text-muted)] leading-relaxed">
                            {job.description}
                          </p>

                          <div className="space-y-3">
                            <h4 className="font-bold text-sm text-[var(--text-main)] uppercase tracking-wider">
                              Key Responsibilities:
                            </h4>
                            <ul className="space-y-2 text-xs sm:text-sm text-[var(--text-muted)]">
                              {job.responsibilities.map((r, rIdx) => (
                                <li key={rIdx} className="flex items-start gap-2">
                                  <CheckCircle2 className="w-4 h-4 text-[#5DC099] shrink-0 mt-0.5" />
                                  <span>{r}</span>
                                </li>
                              ))}
                            </ul>
                          </div>

                          <div className="space-y-3">
                            <h4 className="font-bold text-sm text-[var(--text-main)] uppercase tracking-wider">
                              Qualifications &amp; Requirements:
                            </h4>
                            <ul className="space-y-2 text-xs sm:text-sm text-[var(--text-muted)]">
                              {job.qualifications.map((q, qIdx) => (
                                <li key={qIdx} className="flex items-start gap-2">
                                  <CheckCircle2 className="w-4 h-4 text-[#476D9A] shrink-0 mt-0.5" />
                                  <span>{q}</span>
                                </li>
                              ))}
                            </ul>
                          </div>

                          <div className="pt-4 border-t border-[var(--border-subtle)] flex items-center justify-between flex-wrap gap-4">
                            <a
                              href={`mailto:hiren@opashsoftware.com?subject=Application for ${encodeURIComponent(job.title)}&body=Hi Hiren,%0D%0A%0D%0AI would like to apply for the ${encodeURIComponent(job.title)} role at Opash Software.%0D%0A%0D%0APlease find my resume attached.`}
                              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-white bg-gradient-to-r from-[#476D9A] to-[#5DC099] hover:opacity-95 shadow-md transition-all"
                            >
                              <Send className="w-4 h-4" />
                              <span>Apply For This Position</span>
                            </a>
                            <span className="text-xs text-[var(--text-muted)]">
                              Send resume &amp; portfolio link directly to hiren@opashsoftware.com
                            </span>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Join Our Squad Banner */}
        <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="rounded-3xl border border-[var(--border-subtle)] bg-gradient-to-br from-[#476D9A]/15 via-[var(--bg-secondary)] to-[#5DC099]/15 p-8 sm:p-14 space-y-6">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[var(--text-main)] tracking-tight">
              Don&apos;t See Your Exact Role?
            </h2>
            <p className="text-[var(--text-muted)] max-w-xl mx-auto text-base">
              We are always excited to meet hungry, curious developers. Send an open application and tell us how you can elevate our engineering stack.
            </p>
            <a
              href="mailto:hiren@opashsoftware.com?subject=Open Application - Engineering Talent"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-bold text-white bg-gradient-to-r from-[#476D9A] to-[#5DC099] hover:opacity-95 shadow-xl transition-all"
            >
              <Send className="w-4 h-4" />
              <span>Send Your Open Application</span>
            </a>
          </div>
        </section>

      </main>

      <Footer />

      {quoteModalOpen && (
        <QuoteModal
          isOpen={quoteModalOpen}
          onClose={() => setQuoteModalOpen(false)}
        />
      )}
    </div>
  );
}
