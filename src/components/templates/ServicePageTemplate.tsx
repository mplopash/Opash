"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { QuoteModal } from "@/components/sections/QuoteModal";
import { ServiceDetail } from "@/data/servicesData";
import { 
  Sparkles, 
  ArrowRight, 
  CheckCircle2, 
  ChevronDown, 
  Layers, 
  Code2, 
  Cpu, 
  ShieldCheck, 
  Globe2, 
  Clock, 
  Award,
  Zap,
  Check,
  Send
} from "lucide-react";

interface ServicePageTemplateProps {
  service: ServiceDetail;
}

export function ServicePageTemplate({ service }: ServicePageTemplateProps) {
  const [quoteModalOpen, setQuoteModalOpen] = useState(false);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const deliverySteps = [
    {
      step: "01",
      title: "Discovery & Blueprint Architecture",
      desc: "Deep dive into your technical requirements, user personas, API integrations, and non-functional scalability metrics to create an immutable specification.",
    },
    {
      step: "02",
      title: "Agile 2-Week Sprint Execution",
      desc: "Continuous delivery with transparent Jira/Linear boards, daily git commits, and live staging previews delivered every fortnight.",
    },
    {
      step: "03",
      title: "Rigorous QA & Security Hardening",
      desc: "Automated Playwright test suites, OWASP security audits, and load stress testing to ensure zero regressions in production.",
    },
    {
      step: "04",
      title: "Production Launch & 100% Handover",
      desc: "Zero-downtime deployment, infrastructure monitoring telemetry, and complete IP and repository ownership transferred to your team.",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-[var(--bg-main)] text-[var(--text-main)] selection:bg-[var(--primary)] selection:text-white font-sans">
      <Navbar onOpenQuoteModal={() => setQuoteModalOpen(true)} />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative pt-36 pb-20 overflow-hidden border-b border-[var(--border-subtle)] bg-[var(--bg-secondary)]/30">
          {/* Ambient decorative glow */}
          <div 
            className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[500px] rounded-full pointer-events-none opacity-20 blur-3xl"
            style={{ background: "radial-gradient(circle, #476D9A 0%, transparent 70%)" }}
          />
          <div 
            className="absolute top-1/3 right-10 w-96 h-96 rounded-full pointer-events-none opacity-15 blur-3xl"
            style={{ background: "radial-gradient(circle, #5DC099 0%, transparent 70%)" }}
          />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="max-w-4xl mx-auto text-center space-y-6">
              
              {/* Badge */}
              <motion.div 
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#5DC099]/30 bg-[#5DC099]/10 text-xs font-semibold text-[#5DC099] tracking-wider uppercase"
              >
                <Sparkles className="w-3.5 h-3.5" />
                <span>{service.tagline}</span>
              </motion.div>

              {/* Title */}
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-[var(--text-main)] leading-tight"
              >
                {service.heroTitle}
              </motion.h1>

              {/* Subtitle */}
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-lg sm:text-xl text-[var(--text-muted)] leading-relaxed max-w-3xl mx-auto"
              >
                {service.heroSubtitle}
              </motion.p>

              {/* Actions */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="flex items-center justify-center gap-4 flex-wrap pt-4"
              >
                <button
                  type="button"
                  onClick={() => setQuoteModalOpen(true)}
                  className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-bold text-white bg-gradient-to-r from-[#476D9A] to-[#5DC099] hover:opacity-95 shadow-xl shadow-[#476D9A]/20 transition-all duration-200 transform hover:-translate-y-0.5 active:translate-y-0"
                >
                  <Sparkles className="w-4 h-4" />
                  <span>Get a Fast Project Estimate</span>
                  <ArrowRight className="w-4 h-4 ml-1" />
                </button>

                <a
                  href="#capabilities"
                  className="inline-flex items-center gap-2 px-7 py-4 rounded-xl font-semibold border border-[var(--border-subtle)] bg-[var(--bg-elevated)] text-[var(--text-main)] hover:border-[#5DC099] transition-all duration-200 shadow-sm"
                >
                  <span>Explore Capabilities</span>
                  <ChevronDown className="w-4 h-4 text-[var(--text-muted)]" />
                </a>
              </motion.div>

              {/* Global Corridor Bar */}
              <div className="pt-8 flex items-center justify-center gap-2 text-xs text-[var(--text-muted)] font-mono">
                <Globe2 className="w-3.5 h-3.5 text-[#5DC099]" />
                <span>SURAT HQ ⇄ 8 ACTIVE GLOBAL HUBS • 96% CLIENT RETENTION</span>
              </div>
            </div>

            {/* Metrics Ribbon */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 max-w-5xl mx-auto mt-16 pt-8 border-t border-[var(--border-subtle)]">
              {service.metrics.map((metric, idx) => (
                <div 
                  key={idx}
                  className="rounded-2xl border border-[var(--border-subtle)] bg-[var(--bg-main)]/80 backdrop-blur-sm p-5 text-center shadow-sm hover:border-[#5DC099]/40 transition-colors"
                >
                  <div className="text-3xl sm:text-4xl font-extrabold text-[#5DC099] tracking-tight">
                    {metric.value}
                  </div>
                  <div className="text-xs sm:text-sm text-[var(--text-muted)] font-medium mt-1">
                    {metric.label}
                  </div>
                </div>
              ))}
            </div>

          </div>
        </section>

        {/* Core Capabilities Section */}
        <section id="capabilities" className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <div className="text-xs font-bold text-[#5DC099] uppercase tracking-wider">
              Engineered for Excellence
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[var(--text-main)] tracking-tight">
              Core {service.title} Capabilities
            </h2>
            <p className="text-[var(--text-muted)] text-base sm:text-lg">
              We apply battle-tested architectures, clean design patterns, and agile engineering principles to deliver software that outperforms.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {service.capabilities.map((cap, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                className="group relative rounded-2xl border border-[var(--border-subtle)] bg-[var(--bg-secondary)]/50 p-8 hover:border-[#5DC099]/50 transition-all duration-300 shadow-sm hover:shadow-xl flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#476D9A]/20 to-[#5DC099]/20 border border-[#5DC099]/30 flex items-center justify-center text-[#5DC099] group-hover:scale-110 transition-transform duration-300">
                    <Zap className="w-5 h-5" />
                  </div>
                  <h3 className="text-xl font-bold text-[var(--text-main)] group-hover:text-[#5DC099] transition-colors">
                    {cap.title}
                  </h3>
                  <p className="text-sm text-[var(--text-muted)] leading-relaxed">
                    {cap.description}
                  </p>
                </div>
                <div className="pt-6 mt-4 border-t border-[var(--border-subtle)]/50 flex items-center gap-2 text-xs font-semibold text-[#5DC099] opacity-0 group-hover:opacity-100 transition-opacity">
                  <span>Enterprise Ready</span>
                  <Check className="w-3.5 h-3.5" />
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Technology Stack & Deliverables */}
        <section className="py-20 border-y border-[var(--border-subtle)] bg-[var(--bg-secondary)]/40">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              
              {/* Left Column: Tech Stack */}
              <div className="lg:col-span-6 space-y-6">
                <div className="text-xs font-bold text-[#5DC099] uppercase tracking-wider">
                  Technology Stack
                </div>
                <h2 className="text-3xl font-extrabold text-[var(--text-main)] tracking-tight">
                  Tools &amp; Frameworks We Employ
                </h2>
                <p className="text-[var(--text-muted)] leading-relaxed">
                  We choose the optimal stack based on throughput targets, developer productivity, and long-term maintainability.
                </p>

                <div className="flex flex-wrap gap-2.5 pt-2">
                  {service.techStack.map((tech, idx) => (
                    <span 
                      key={idx}
                      className="px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold bg-[var(--bg-elevated)] border border-[var(--border-subtle)] text-[var(--text-main)] hover:border-[#5DC099] hover:text-[#5DC099] transition-colors shadow-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Right Column: Deliverables (100% IP) */}
              <div className="lg:col-span-6 rounded-3xl border border-[var(--border-subtle)] bg-[var(--bg-main)] p-8 sm:p-10 shadow-lg">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 flex items-center justify-center">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-[var(--text-main)]">
                      Deliverables (100% IP Ownership)
                    </h3>
                    <p className="text-xs text-[var(--text-muted)]">
                      Everything belongs to you from day one
                    </p>
                  </div>
                </div>

                <div className="space-y-4">
                  {service.deliverables.map((del, idx) => (
                    <div key={idx} className="flex items-start gap-3.5 p-3 rounded-xl bg-[var(--bg-elevated)]/40 border border-[var(--border-subtle)]">
                      <CheckCircle2 className="w-4 h-4 text-[#5DC099] shrink-0 mt-0.5" />
                      <div>
                        <div className="font-semibold text-sm text-[var(--text-main)]">{del.title}</div>
                        <div className="text-xs text-[var(--text-muted)] mt-0.5">{del.description}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* 4-Step Process Section */}
        <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <div className="text-xs font-bold text-[#5DC099] uppercase tracking-wider">
              Methodology
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[var(--text-main)] tracking-tight">
              How We Deliver Success
            </h2>
            <p className="text-[var(--text-muted)] text-base sm:text-lg">
              Predictable, agile delivery built around 2-week sprint releases and continuous client visibility.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {deliverySteps.map((step, idx) => (
              <div 
                key={idx}
                className="rounded-2xl border border-[var(--border-subtle)] bg-[var(--bg-secondary)]/50 p-6 relative flex flex-col justify-between hover:border-[#5DC099]/40 transition-colors"
              >
                <div>
                  <div className="text-3xl font-black text-[#5DC099]/40 mb-3 font-mono">
                    {step.step}
                  </div>
                  <h3 className="font-bold text-lg text-[var(--text-main)] mb-2">
                    {step.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[var(--text-muted)] leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* FAQs Section */}
        <section className="py-20 border-t border-[var(--border-subtle)] bg-[var(--bg-secondary)]/30">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 space-y-3">
              <h2 className="text-3xl font-extrabold text-[var(--text-main)] tracking-tight">
                Frequently Asked Questions
              </h2>
              <p className="text-[var(--text-muted)] text-sm sm:text-base">
                Everything you need to know about our {service.title} engineering engagements.
              </p>
            </div>

            <div className="space-y-4">
              {service.faqs.map((faq, idx) => {
                const isOpen = openFaqIndex === idx;
                return (
                  <div
                    key={idx}
                    className="rounded-2xl border border-[var(--border-subtle)] bg-[var(--bg-main)] overflow-hidden shadow-sm transition-colors"
                  >
                    <button
                      type="button"
                      onClick={() => setOpenFaqIndex(isOpen ? null : idx)}
                      className="w-full text-left px-6 py-5 flex items-center justify-between gap-4 font-bold text-base sm:text-lg text-[var(--text-main)] hover:text-[#5DC099] transition-colors"
                    >
                      <span>{faq.q}</span>
                      <ChevronDown 
                        className={`w-5 h-5 text-[var(--text-muted)] transition-transform duration-200 shrink-0 ${isOpen ? "rotate-180 text-[#5DC099]" : ""}`}
                      />
                    </button>
                    <AnimatePresence>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.2 }}
                        >
                          <div className="px-6 pb-6 text-sm sm:text-base text-[var(--text-muted)] leading-relaxed border-t border-[var(--border-subtle)]/50 pt-4">
                            {faq.a}
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

        {/* Bottom CTA Banner */}
        <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl border border-[var(--border-subtle)] bg-gradient-to-br from-[#476D9A]/15 via-[var(--bg-secondary)] to-[#5DC099]/15 p-8 sm:p-14 text-center space-y-6 shadow-2xl relative overflow-hidden">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#5DC099]/40 bg-[#5DC099]/10 text-xs font-bold text-[#5DC099] tracking-wider uppercase">
              <Sparkles className="w-3.5 h-3.5" />
              <span>START YOUR SPRINT</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[var(--text-main)] max-w-2xl mx-auto tracking-tight">
              Ready to Build Your {service.title} Solution?
            </h2>

            <p className="text-[var(--text-muted)] max-w-xl mx-auto text-base sm:text-lg">
              Connect directly with our senior architecture leads. We evaluate scope, provide estimated timelines, and begin sprint planning in days.
            </p>

            <div className="flex items-center justify-center gap-4 flex-wrap pt-2">
              <button
                type="button"
                onClick={() => setQuoteModalOpen(true)}
                className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-bold text-white bg-gradient-to-r from-[#476D9A] to-[#5DC099] hover:opacity-95 shadow-xl shadow-[#476D9A]/20 transition-all duration-200 transform hover:-translate-y-0.5"
              >
                <Sparkles className="w-4 h-4" />
                <span>Scope Your Project With Us</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-7 py-4 rounded-xl font-semibold border border-[var(--border-subtle)] bg-[var(--bg-elevated)] text-[var(--text-main)] hover:border-[#5DC099] transition-all duration-200"
              >
                <Send className="w-4 h-4 text-[#5DC099]" />
                <span>Contact Tech Leads</span>
              </Link>
            </div>
          </div>
        </section>

      </main>

      <Footer />

      {quoteModalOpen && (
        <QuoteModal
          isOpen={quoteModalOpen}
          onClose={() => setQuoteModalOpen(false)}
          initialService={service.title}
        />
      )}
    </div>
  );
}
