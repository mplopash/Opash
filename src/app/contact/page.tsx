"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { QuoteModal } from "@/components/sections/QuoteModal";
import { 
  Sparkles, 
  MapPin, 
  Phone, 
  Mail, 
  MessageSquare, 
  Clock, 
  Globe2, 
  Send, 
  ShieldCheck, 
  CheckCircle2 
} from "lucide-react";

export default function ContactPage() {
  const [quoteModalOpen, setQuoteModalOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    service: "Custom Software Development",
    budget: "$10k - $25k",
    message: "",
    nda: true,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
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
              <span>DIRECT ENGINEERING ACCESS</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-[var(--text-main)] max-w-4xl mx-auto leading-tight">
              Start Your Software Initiative With Tech Leads
            </h1>

            <p className="text-lg sm:text-xl text-[var(--text-muted)] max-w-3xl mx-auto leading-relaxed">
              Whether you have an extensive PRD or an early-stage architecture concept, our technical leaders are ready to evaluate feasibility, estimate sprints, and guide your roadmap.
            </p>

            <div className="flex items-center justify-center gap-4 flex-wrap pt-4">
              <a
                href="#contact-form"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-bold text-white bg-gradient-to-r from-[#476D9A] to-[#5DC099] hover:opacity-95 shadow-xl shadow-[#476D9A]/20 transition-all transform hover:-translate-y-0.5"
              >
                <Mail className="w-4 h-4" />
                <span>Send Direct Inquiry</span>
              </a>

              <a
                href="https://wa.me/919537222266"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-7 py-4 rounded-xl font-semibold border border-[var(--border-subtle)] bg-[var(--bg-elevated)] text-[var(--text-main)] hover:border-[#25D366] transition-all"
              >
                <MessageSquare className="w-4 h-4 text-[#25D366]" />
                <span>Chat on WhatsApp</span>
              </a>
            </div>
          </div>
        </section>

        {/* Contact Information & Form Grid */}
        <section id="contact-form" className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* Left Column: Direct Contact Info & Address */}
            <div className="lg:col-span-5 space-y-8">
              <div className="space-y-3">
                <div className="text-xs font-bold text-[#5DC099] uppercase tracking-wider">
                  Global Headquarters
                </div>
                <h2 className="text-3xl font-extrabold text-[var(--text-main)] tracking-tight">
                  Surat, Gujarat, India
                </h2>
                <p className="text-sm text-[var(--text-muted)] leading-relaxed">
                  129, The Galleria Shopping Hub, Nr. Sanjeev Kumar Auditorium, Opp. 3Seventy Kitchen Restaurant, Pal, Adajan, Surat - 395009, Gujarat, India
                </p>
                <a
                  href="https://maps.google.com/?q=The+Galleria+Pal+Adajan+Surat"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#5DC099] hover:underline"
                >
                  <MapPin className="w-3.5 h-3.5" />
                  <span>Open in Google Maps</span>
                </a>
              </div>

              {/* Direct Channels */}
              <div className="space-y-4 pt-4 border-t border-[var(--border-subtle)]">
                <div className="flex items-start gap-4 p-4 rounded-2xl bg-[var(--bg-secondary)] border border-[var(--border-subtle)]">
                  <div className="w-10 h-10 rounded-xl bg-[#476D9A]/15 text-[#476D9A] flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-[var(--text-muted)] font-medium">Direct Phone:</div>
                    <a href="tel:+919537222266" className="text-base font-bold text-[var(--text-main)] hover:text-[#5DC099]">
                      +91 95372-22266
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 rounded-2xl bg-[var(--bg-secondary)] border border-[var(--border-subtle)]">
                  <div className="w-10 h-10 rounded-xl bg-[#5DC099]/15 text-[#5DC099] flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-[var(--text-muted)] font-medium">Executive Email:</div>
                    <a href="mailto:hiren@opashsoftware.com" className="text-base font-bold text-[var(--text-main)] hover:text-[#5DC099]">
                      hiren@opashsoftware.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 rounded-2xl bg-[var(--bg-secondary)] border border-[var(--border-subtle)]">
                  <div className="w-10 h-10 rounded-xl bg-emerald-500/15 text-emerald-500 flex items-center justify-center shrink-0">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-[var(--text-muted)] font-medium">Office Hours &amp; Overlap:</div>
                    <div className="text-xs text-[var(--text-main)] font-semibold mt-0.5">
                      Monday - Friday: 9:30 AM to 6:30 PM IST
                    </div>
                    <div className="text-[11px] text-[var(--text-dim)] mt-0.5">
                      Dedicated teams support EST, PST, GMT, CET, and GST timezones.
                    </div>
                  </div>
                </div>
              </div>

              {/* Trust Guarantee */}
              <div className="p-5 rounded-2xl bg-[var(--bg-elevated)]/60 border border-[var(--border-subtle)] flex items-center gap-3">
                <ShieldCheck className="w-6 h-6 text-[#5DC099] shrink-0" />
                <div className="text-xs text-[var(--text-muted)]">
                  <strong className="text-[var(--text-main)]">Mutual Non-Disclosure Agreement:</strong> All project discussions and requirements are strictly covered under mutual NDA.
                </div>
              </div>
            </div>

            {/* Right Column: Direct Engineering Inquiry Form */}
            <div className="lg:col-span-7 rounded-3xl border border-[var(--border-subtle)] bg-[var(--bg-secondary)]/50 p-8 sm:p-12 shadow-xl">
              <div className="space-y-2 mb-8">
                <h3 className="text-2xl font-bold text-[var(--text-main)]">
                  Direct Engineering Inquiry
                </h3>
                <p className="text-sm text-[var(--text-muted)]">
                  Fill out this form or email us directly at <span className="text-[#5DC099] font-medium">hiren@opashsoftware.com</span>
                </p>
              </div>

              {submitted ? (
                <div className="py-12 text-center space-y-4">
                  <div className="w-16 h-16 rounded-full bg-[#5DC099]/20 text-[#5DC099] flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h4 className="text-2xl font-bold text-[var(--text-main)]">Inquiry Received!</h4>
                  <p className="text-sm text-[var(--text-muted)] max-w-md mx-auto">
                    Thank you, {form.name}. Our Chief Architect will review your requirements and reach out within 4 business hours.
                  </p>
                  <button
                    type="button"
                    onClick={() => setSubmitted(false)}
                    className="text-xs font-semibold text-[#5DC099] hover:underline"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-xs font-bold text-[var(--text-main)] uppercase tracking-wider mb-2">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        placeholder="Alex Morgan"
                        className="w-full px-4 py-3 rounded-xl bg-[var(--bg-main)] border border-[var(--border-subtle)] text-[var(--text-main)] placeholder-[var(--text-dim)] focus:outline-none focus:border-[#5DC099] text-sm"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-[var(--text-main)] uppercase tracking-wider mb-2">
                        Work Email *
                      </label>
                      <input
                        type="email"
                        required
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        placeholder="alex@company.com"
                        className="w-full px-4 py-3 rounded-xl bg-[var(--bg-main)] border border-[var(--border-subtle)] text-[var(--text-main)] placeholder-[var(--text-dim)] focus:outline-none focus:border-[#5DC099] text-sm"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-xs font-bold text-[var(--text-main)] uppercase tracking-wider mb-2">
                        Phone / WhatsApp
                      </label>
                      <input
                        type="tel"
                        value={form.phone}
                        onChange={(e) => setForm({ ...form, phone: e.target.value })}
                        placeholder="+1 (555) 000-0000"
                        className="w-full px-4 py-3 rounded-xl bg-[var(--bg-main)] border border-[var(--border-subtle)] text-[var(--text-main)] placeholder-[var(--text-dim)] focus:outline-none focus:border-[#5DC099] text-sm"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-[var(--text-main)] uppercase tracking-wider mb-2">
                        Primary Service
                      </label>
                      <select
                        value={form.service}
                        onChange={(e) => setForm({ ...form, service: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-[var(--bg-main)] border border-[var(--border-subtle)] text-[var(--text-main)] focus:outline-none focus:border-[#5DC099] text-sm"
                      >
                        <option>Custom Software Development</option>
                        <option>Web App Development (React/Next.js)</option>
                        <option>Mobile App (Flutter/React Native)</option>
                        <option>AI &amp; ML Solutions (RAG / LLMs)</option>
                        <option>Multi-Tenant SaaS Architecture</option>
                        <option>API Integration &amp; Microservices</option>
                        <option>QA Automation &amp; Testing</option>
                        <option>Hire Dedicated Engineering Squad</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-[var(--text-main)] uppercase tracking-wider mb-2">
                      Estimated Project Budget
                    </label>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                      {["<$10k", "$10k - $25k", "$25k - $50k", "$50k+"].map((b) => (
                        <button
                          key={b}
                          type="button"
                          onClick={() => setForm({ ...form, budget: b })}
                          className={`py-2 px-3 rounded-xl text-xs font-semibold border transition-all ${
                            form.budget === b
                              ? "bg-[#5DC099]/15 border-[#5DC099] text-[#5DC099]"
                              : "bg-[var(--bg-main)] border-[var(--border-subtle)] text-[var(--text-muted)]"
                          }`}
                        >
                          {b}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-[var(--text-main)] uppercase tracking-wider mb-2">
                      Project Details &amp; Objectives
                    </label>
                    <textarea
                      rows={4}
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      placeholder="Tell us about your system architecture, timelines, current tech stack, and goals..."
                      className="w-full px-4 py-3 rounded-xl bg-[var(--bg-main)] border border-[var(--border-subtle)] text-[var(--text-main)] placeholder-[var(--text-dim)] focus:outline-none focus:border-[#5DC099] text-sm"
                    />
                  </div>

                  <div className="flex items-center gap-3">
                    <input
                      type="checkbox"
                      id="nda-checkbox"
                      checked={form.nda}
                      onChange={(e) => setForm({ ...form, nda: e.target.checked })}
                      className="w-4 h-4 rounded border-[var(--border-subtle)] text-[#5DC099] focus:ring-[#5DC099]"
                    />
                    <label htmlFor="nda-checkbox" className="text-xs text-[var(--text-muted)] cursor-pointer">
                      Send a mutual Non-Disclosure Agreement (NDA) prior to technical calls
                    </label>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 rounded-xl font-bold text-white bg-gradient-to-r from-[#476D9A] to-[#5DC099] hover:opacity-95 shadow-xl shadow-[#476D9A]/20 transition-all flex items-center justify-center gap-2"
                  >
                    <Send className="w-4 h-4" />
                    <span>Submit Engineering Inquiry</span>
                  </button>
                </form>
              )}
            </div>

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
