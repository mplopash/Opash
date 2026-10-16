"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { QuoteModal } from "@/components/sections/QuoteModal";
import { FounderSection } from "@/components/sections/FounderSection";
import { 
  Sparkles, 
  ArrowRight, 
  Target, 
  Compass, 
  Calendar, 
  ShieldCheck, 
  Cpu, 
  Users, 
  Clock, 
  Lock, 
  Headphones,
  Globe2,
  Award
} from "lucide-react";

export default function CompanyPage() {
  const [quoteModalOpen, setQuoteModalOpen] = useState(false);

  const stats = [
    { value: "50+", label: "Senior In-House Developers" },
    { value: "75+", label: "Global Projects Delivered" },
    { value: "50,000+", label: "Hours of Execution" },
    { value: "8+", label: "Years of Industry Legacy" },
  ];

  const timeline = [
    {
      year: "2021",
      badge: "Inception",
      title: "Laying The Foundation",
      desc: "Opash Software was founded in Surat, India with an elite team of engineers dedicated to delivering custom web & cloud solutions for startups in North America.",
    },
    {
      year: "2022",
      badge: "Expansion",
      title: "Full-Stack & Cloud Scale",
      desc: "Diversified our engineering stack across React, Angular, Node, Python, and AWS. Scaled our cross-platform mobile app development services for enterprise clients.",
    },
    {
      year: "2023",
      badge: "Global Growth",
      title: "50+ Engineers & 75+ Projects",
      desc: "Surpassed 50 full-time engineers and successfully delivered 75+ global projects across US, UK, UAE, and Europe, establishing high-trust Upwork and Clutch agency rankings.",
    },
    {
      year: "2024",
      badge: "Transformation",
      title: "FinTech, HealthTech & Microservices",
      desc: "Engineered scalable digital ecosystems including eSanad document verification, UCareHQ healthcare portal, and industrial SaaS architectures with 99.99% uptime.",
    },
    {
      year: "2025 - 2026",
      badge: "Next-Gen AI",
      title: "AI/ML Solutions & Cloud-First Future",
      desc: "Integrated Generative AI, LLM orchestration, predictive analytics, and automated DevOps CI/CD into core deliverables, empowering clients to lead their industries.",
    },
  ];

  const values = [
    {
      title: "Integrity & Transparency",
      desc: "Open code repositories, transparent sprint tracking, real-time communication, and zero hidden costs.",
      icon: ShieldCheck,
    },
    {
      title: "Innovation-Driven",
      desc: "We don't just follow blueprints; we engineer modern architectures using AI, microservices, and cutting-edge tech.",
      icon: Cpu,
    },
    {
      title: "Client-Centric Partnerships",
      desc: "We align deeply with your KPIs, business models, and runway to build software that maximizes your ROI.",
      icon: Users,
    },
    {
      title: "On-Time, Every Sprint",
      desc: "Agile 2-week delivery cycles, clear roadmaps, and predictable release deadlines that respect your go-to-market speed.",
      icon: Clock,
    },
    {
      title: "100% IP & Code Ownership",
      desc: "You own all code, repositories, architectures, and intellectual property from day one without vendor lock-in.",
      icon: Lock,
    },
    {
      title: "24/7 Global Support",
      desc: "Round-the-clock coverage with seamless overlap across US, UK, Europe, Middle East, and APAC time zones.",
      icon: Headphones,
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-[var(--bg-main)] text-[var(--text-main)] selection:bg-[var(--primary)] selection:text-white font-sans">
      <Navbar onOpenQuoteModal={() => setQuoteModalOpen(true)} />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative pt-36 pb-20 overflow-hidden border-b border-[var(--border-subtle)] bg-[var(--bg-secondary)]/30">
          <div 
            className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[500px] rounded-full pointer-events-none opacity-20 blur-3xl"
            style={{ background: "radial-gradient(circle, #476D9A 0%, transparent 70%)" }}
          />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-6">
            <motion.div 
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#5DC099]/30 bg-[#5DC099]/10 text-xs font-semibold text-[#5DC099] tracking-wider uppercase"
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>ABOUT OPASH SOFTWARE • SURAT HQ</span>
            </motion.div>

            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-[var(--text-main)] max-w-4xl mx-auto leading-tight"
            >
              Engineering Excellence Built For Enduring Market Dominance
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-lg sm:text-xl text-[var(--text-muted)] max-w-3xl mx-auto leading-relaxed"
            >
              At Opash Software, we&apos;re not just another IT company — we&apos;re a passionate family of over 50+ tech experts dedicated to turning digital dreams into reality. Based in Surat, Gujarat, we engineer enterprise-grade web, mobile, SaaS, and AI-driven platforms for clients across the US, Europe, Middle East, and Asia.
            </motion.p>

            <div className="pt-4 flex items-center justify-center gap-4 flex-wrap">
              <button
                type="button"
                onClick={() => setQuoteModalOpen(true)}
                className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-bold text-white bg-gradient-to-r from-[#476D9A] to-[#5DC099] hover:opacity-95 shadow-xl shadow-[#476D9A]/20 transition-all duration-200 transform hover:-translate-y-0.5"
              >
                <Sparkles className="w-4 h-4" />
                <span>Work With Us</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href="#timeline"
                className="inline-flex items-center gap-2 px-7 py-4 rounded-xl font-semibold border border-[var(--border-subtle)] bg-[var(--bg-elevated)] text-[var(--text-main)] hover:border-[#5DC099] transition-all"
              >
                <span>Discover Our Journey</span>
              </a>
            </div>

            {/* Stats Row */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 max-w-5xl mx-auto mt-16 pt-8 border-t border-[var(--border-subtle)]">
              {stats.map((s, idx) => (
                <div key={idx} className="rounded-2xl border border-[var(--border-subtle)] bg-[var(--bg-main)]/80 p-5 text-center shadow-sm">
                  <div className="text-3xl sm:text-4xl font-extrabold text-[#5DC099]">{s.value}</div>
                  <div className="text-xs sm:text-sm text-[var(--text-muted)] mt-1 font-medium">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Vision & Mission Cards */}
        <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="rounded-3xl border border-[var(--border-subtle)] bg-[var(--bg-secondary)]/50 p-8 sm:p-12 space-y-4 hover:border-[#5DC099]/40 transition-colors shadow-sm">
              <div className="w-12 h-12 rounded-2xl bg-[#476D9A]/20 text-[#476D9A] flex items-center justify-center">
                <Compass className="w-6 h-6" />
              </div>
              <div className="text-xs font-bold text-[#5DC099] uppercase tracking-wider">Our Vision</div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[var(--text-main)]">
                Empowering Ideas. Transforming Futures.
              </h2>
              <p className="text-[var(--text-muted)] leading-relaxed text-sm sm:text-base">
                At Opash Software, our vision is to empower innovators, startups, and enterprises by blending cutting-edge technology with bold ideas. We strive to be a catalyst for digital transformation, helping businesses create meaningful change in the world through impactful, scalable software solutions.
              </p>
            </div>

            <div className="rounded-3xl border border-[var(--border-subtle)] bg-[var(--bg-secondary)]/50 p-8 sm:p-12 space-y-4 hover:border-[#5DC099]/40 transition-colors shadow-sm">
              <div className="w-12 h-12 rounded-2xl bg-[#5DC099]/20 text-[#5DC099] flex items-center justify-center">
                <Target className="w-6 h-6" />
              </div>
              <div className="text-xs font-bold text-[#5DC099] uppercase tracking-wider">Our Mission</div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[var(--text-main)]">
                Delivering Innovation with Precision &amp; Passion.
              </h2>
              <p className="text-[var(--text-muted)] leading-relaxed text-sm sm:text-base">
                Our mission is to provide tailor-made, high-performance IT solutions that deliver measurable business value. We are committed to achieving client satisfaction through quality, transparency, and timely delivery, ensuring every project we undertake exceeds expectations and accelerates long-term growth.
              </p>
            </div>
          </div>
        </section>

        {/* Journey Timeline */}
        <section id="timeline" className="py-24 border-t border-[var(--border-subtle)] bg-[var(--bg-secondary)]/30">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16 space-y-3">
              <div className="text-xs font-bold text-[#5DC099] uppercase tracking-wider">The Opash Evolution</div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[var(--text-main)] tracking-tight">
                Our Journey Over The Years
              </h2>
              <p className="text-[var(--text-muted)] max-w-xl mx-auto">
                From our founding in Surat to partnering with brands across North America, Europe, and Asia.
              </p>
            </div>

            <div className="space-y-8 relative before:absolute before:inset-0 before:left-4 md:before:left-1/2 before:-translate-x-px before:h-full before:w-0.5 before:bg-[var(--border-subtle)]">
              {timeline.map((item, idx) => (
                <div key={idx} className="relative flex flex-col md:flex-row items-start md:items-center gap-6 md:gap-12 group">
                  
                  {/* Dot */}
                  <div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-[var(--bg-main)] border-2 border-[#5DC099] flex items-center justify-center shadow-lg group-hover:scale-125 transition-transform">
                    <div className="w-2.5 h-2.5 rounded-full bg-[#5DC099]" />
                  </div>

                  {/* Left or Right Content */}
                  <div className={`pl-12 md:pl-0 md:w-1/2 ${idx % 2 === 0 ? "md:text-right md:pr-12" : "md:ml-auto md:pl-12"}`}>
                    <div className="p-6 rounded-2xl border border-[var(--border-subtle)] bg-[var(--bg-main)] hover:border-[#5DC099]/40 transition-colors shadow-sm space-y-2">
                      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold bg-[#5DC099]/10 text-[#5DC099]">
                        <span>{item.year}</span>
                        <span>•</span>
                        <span>{item.badge}</span>
                      </div>
                      <h3 className="text-lg font-bold text-[var(--text-main)]">{item.title}</h3>
                      <p className="text-xs sm:text-sm text-[var(--text-muted)] leading-relaxed">{item.desc}</p>
                    </div>
                  </div>

                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Cultural Values */}
        <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <div className="text-xs font-bold text-[#5DC099] uppercase tracking-wider">Guiding Principles</div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[var(--text-main)] tracking-tight">
              Our Core Cultural Values
            </h2>
            <p className="text-[var(--text-muted)]">
              How we work, build trust, and maintain engineering excellence every day.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((val, idx) => {
              const Icon = val.icon;
              return (
                <div 
                  key={idx}
                  className="rounded-2xl border border-[var(--border-subtle)] bg-[var(--bg-secondary)]/50 p-8 hover:border-[#5DC099]/50 transition-colors shadow-sm space-y-3"
                >
                  <div className="w-10 h-10 rounded-xl bg-[#5DC099]/15 text-[#5DC099] flex items-center justify-center">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="font-bold text-lg text-[var(--text-main)]">{val.title}</h3>
                  <p className="text-sm text-[var(--text-muted)] leading-relaxed">{val.desc}</p>
                </div>
              );
            })}
          </div>
        </section>

        {/* Founder Section */}
        <FounderSection eyebrow="Executive Leadership" />

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
