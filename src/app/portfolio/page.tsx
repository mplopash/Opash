"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { QuoteModal } from "@/components/sections/QuoteModal";
import { portfolioProjects, PortfolioProject } from "@/data/portfolioData";
import { 
  Sparkles, 
  ExternalLink, 
  CheckCircle2, 
  ArrowRight, 
  FolderGit2, 
  Layers, 
  ShieldCheck, 
  Star,
  Quote,
  ChevronDown
} from "lucide-react";

export default function PortfolioPage() {
  const [quoteModalOpen, setQuoteModalOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [expandedProjectId, setExpandedProjectId] = useState<string | null>("ucarehq");

  const categories = ["All", "HealthTech", "Industrial Tech", "FinTech", "Creative Media"];

  const filteredProjects = selectedCategory === "All"
    ? portfolioProjects
    : portfolioProjects.filter((p) => p.category === selectedCategory);

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
              <span>VERIFIED PRODUCTION IMPACT</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-[var(--text-main)] max-w-4xl mx-auto leading-tight">
              Proven Software Architectures Delivered At Scale
            </h1>

            <p className="text-lg sm:text-xl text-[var(--text-muted)] max-w-3xl mx-auto leading-relaxed">
              Explore how Opash Software partners with international founders and CTOs to modernize legacy systems, scale high-traffic portals, and launch breakthrough platforms.
            </p>

            {/* Filter Pills */}
            <div className="flex items-center justify-center gap-2.5 flex-wrap pt-6">
              {categories.map((cat) => (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 ${
                    selectedCategory === cat
                      ? "bg-gradient-to-r from-[#476D9A] to-[#5DC099] text-white shadow-lg shadow-[#476D9A]/20"
                      : "bg-[var(--bg-elevated)] border border-[var(--border-subtle)] text-[var(--text-muted)] hover:text-[var(--text-main)] hover:border-[#5DC099]/40"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Case Studies Detailed Cards */}
        <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          {filteredProjects.map((project, idx) => {
            const isExpanded = expandedProjectId === project.id;
            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.05 }}
                className="rounded-3xl border border-[var(--border-subtle)] bg-[var(--bg-secondary)]/50 overflow-hidden shadow-lg hover:border-[#5DC099]/40 transition-all duration-300"
              >
                {/* Header Banner */}
                <div className="p-8 sm:p-12 space-y-6">
                  <div className="flex flex-wrap items-center justify-between gap-4">
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-bold text-[#5DC099] uppercase tracking-wider">
                        {project.industry}
                      </span>
                    </div>

                    {project.url && (
                      <a
                        href={project.url}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs font-semibold text-[var(--text-muted)] hover:text-[#5DC099] transition-colors"
                      >
                        <span>{project.displayUrl || project.url}</span>
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    )}
                  </div>

                  <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[var(--text-main)] leading-snug">
                    {project.title}
                  </h2>

                  <p className="text-[var(--text-muted)] text-base sm:text-lg leading-relaxed max-w-4xl">
                    {project.summary}
                  </p>

                  {/* Challenge & Solution Grid */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
                    <div className="p-6 rounded-2xl bg-[var(--bg-elevated)]/60 border border-[var(--border-subtle)] space-y-2">
                      <div className="text-xs font-bold text-amber-500 uppercase tracking-wider">The Challenge</div>
                      <p className="text-xs sm:text-sm text-[var(--text-muted)] leading-relaxed">{project.challenge}</p>
                    </div>
                    <div className="p-6 rounded-2xl bg-[var(--bg-elevated)]/60 border border-[var(--border-subtle)] space-y-2">
                      <div className="text-xs font-bold text-[#5DC099] uppercase tracking-wider">Our Solution</div>
                      <p className="text-xs sm:text-sm text-[var(--text-muted)] leading-relaxed">{project.solution}</p>
                    </div>
                  </div>

                  {/* Metrics Bar */}
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4 border-t border-[var(--border-subtle)]">
                    {project.metrics.map((m, mIdx) => (
                      <div key={mIdx} className="text-center p-3 rounded-xl bg-[var(--bg-main)]/80 border border-[var(--border-subtle)]">
                        <div className="text-2xl sm:text-3xl font-black text-[#5DC099]">{m.value}</div>
                        <div className="text-[11px] sm:text-xs text-[var(--text-muted)] font-medium mt-0.5">{m.label}</div>
                      </div>
                    ))}
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 pt-2">
                    {project.tags.map((t, tIdx) => (
                      <span key={tIdx} className="px-3 py-1 rounded-full text-xs font-medium bg-[var(--bg-main)] border border-[var(--border-subtle)] text-[var(--text-main)]">
                        {t}
                      </span>
                    ))}
                  </div>

                  {/* Toggle Deliverables Drawer Button */}
                  <div className="pt-4 flex items-center justify-between flex-wrap gap-4">
                    <button
                      type="button"
                      onClick={() => setExpandedProjectId(isExpanded ? null : project.id)}
                      className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-[#5DC099] hover:underline"
                    >
                      <FolderGit2 className="w-4 h-4" />
                      <span>{isExpanded ? "Hide Deliverables & Verified Client Review" : "Inspect Deliverables & Client Feedback"}</span>
                      <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isExpanded ? "rotate-180" : ""}`} />
                    </button>

                    <button
                      type="button"
                      onClick={() => setQuoteModalOpen(true)}
                      className="inline-flex items-center gap-1.5 text-xs font-semibold px-4 py-2 rounded-xl bg-[var(--bg-elevated)] border border-[var(--border-subtle)] text-[var(--text-main)] hover:border-[#5DC099] transition-colors"
                    >
                      <span>Build Similar Architecture</span>
                      <ArrowRight className="w-3.5 h-3.5 text-[#5DC099]" />
                    </button>
                  </div>
                </div>

                {/* Expanded Drawer: Deliverables & Testimonial */}
                <AnimatePresence>
                  {isExpanded && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="border-t border-[var(--border-subtle)] bg-[var(--bg-main)]/60 p-8 sm:p-12 space-y-8"
                    >
                      {/* Deliverables List */}
                      <div>
                        <h4 className="text-xs font-bold text-[var(--text-main)] uppercase tracking-wider mb-4 flex items-center gap-2">
                          <Layers className="w-4 h-4 text-[#5DC099]" />
                          <span>Production Deliverables Archive</span>
                        </h4>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          {project.deliverables.map((del, dIdx) => (
                            <div key={dIdx} className="p-4 rounded-xl bg-[var(--bg-secondary)] border border-[var(--border-subtle)] flex items-start gap-3">
                              <CheckCircle2 className="w-4 h-4 text-[#5DC099] shrink-0 mt-0.5" />
                              <div>
                                <div className="font-bold text-xs sm:text-sm text-[var(--text-main)]">{del.title}</div>
                                <div className="text-xs text-[var(--text-muted)] mt-0.5">{del.description}</div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Client Testimonial if present */}
                      {project.clientQuote && (
                        <div className="p-6 rounded-2xl bg-[var(--bg-elevated)] border border-[var(--border-subtle)] relative">
                          <Quote className="w-8 h-8 text-[#5DC099]/20 absolute top-4 right-4" />
                          <div className="flex items-center gap-1 text-amber-500 mb-2">
                            {[...Array(5)].map((_, i) => (
                              <Star key={i} className="w-3.5 h-3.5 fill-amber-500 text-amber-500" />
                            ))}
                          </div>
                          <p className="italic text-sm sm:text-base text-[var(--text-main)] leading-relaxed mb-4">
                            &ldquo;{project.clientQuote}&rdquo;
                          </p>
                          <div className="text-xs font-bold text-[var(--text-main)]">
                            {project.clientName}
                          </div>
                          <div className="text-[11px] text-[var(--text-muted)]">
                            {project.clientRole}
                          </div>
                        </div>
                      )}
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </section>

        {/* Bottom CTA */}
        <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="rounded-3xl border border-[var(--border-subtle)] bg-gradient-to-br from-[#476D9A]/15 via-[var(--bg-secondary)] to-[#5DC099]/15 p-8 sm:p-14 space-y-6">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[var(--text-main)] tracking-tight">
              Ready to Build Your Flagship Case Study?
            </h2>
            <p className="text-[var(--text-muted)] max-w-xl mx-auto text-base">
              From MVP in weeks to 2-year dedicated enterprise squad partnerships, Opash delivers guaranteed velocity and sovereign IP.
            </p>
            <button
              type="button"
              onClick={() => setQuoteModalOpen(true)}
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-bold text-white bg-gradient-to-r from-[#476D9A] to-[#5DC099] hover:opacity-95 shadow-xl shadow-[#476D9A]/20 transition-all"
            >
              <Sparkles className="w-4 h-4" />
              <span>Scope Your Solution Now</span>
              <ArrowRight className="w-4 h-4" />
            </button>
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
