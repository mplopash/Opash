"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Mail, Sparkles, ShieldCheck, Award } from "lucide-react";

interface FounderSectionProps {
  eyebrow?: string;
}

export function FounderSection({ eyebrow = "Executive Leadership" }: FounderSectionProps = {}) {
  const badges = [
    "Tech Strategist",
    "Startup Mentor",
    "Full-Stack Architect",
    "AI Evangelist",
  ];

  return (
    <section id="leadership" className="py-16 sm:py-20 relative overflow-hidden bg-[var(--bg-secondary)]/50 border-y border-[var(--border-subtle)] transition-colors duration-300">
      {/* Subtle ambient glow matching Opash palette */}
      <div 
        className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 rounded-full pointer-events-none opacity-20 blur-3xl"
        style={{ background: "radial-gradient(circle, #476D9A 0%, transparent 70%)" }}
      />
      <div 
        className="absolute bottom-10 right-1/4 w-80 h-80 rounded-full pointer-events-none opacity-15 blur-3xl"
        style={{ background: "radial-gradient(circle, #5DC099 0%, transparent 70%)" }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="relative rounded-[36px] border border-white/60 dark:border-white/10 bg-white/40 dark:bg-[var(--bg-card)]/60 backdrop-blur-2xl p-8 sm:p-12 lg:p-16 shadow-[0_20px_60px_-15px_rgba(71,109,154,0.1)] dark:shadow-[0_25px_60px_rgba(0,0,0,0.4)]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Content Column */}
            <motion.div 
              className="lg:col-span-7 space-y-6"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#5DC099]/30 bg-[#5DC099]/10 text-xs font-bold tracking-wide uppercase text-[#5DC099]">
                <Sparkles className="w-3.5 h-3.5" />
                <span>{eyebrow}</span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[var(--text-main)] leading-[1.15]">
                Meet Our Founder &amp; CEO
              </h2>

              <div className="text-lg font-semibold text-[#5DC099]">
                Hiren Danecha <span className="text-[var(--text-muted)] font-normal">— 10+ Years in Full-Stack Architecture &amp; Product Strategy</span>
              </div>

              <blockquote className="border-l-4 border-[#5DC099] pl-4 sm:pl-6 py-1 italic text-lg sm:text-xl text-[var(--text-main)] font-medium leading-relaxed">
                &ldquo;We don&apos;t just write code — we build resilient digital foundations and long-term partnerships powered by innovation, engineering rigor, and mutual growth.&rdquo;
              </blockquote>

              <p className="text-[var(--text-muted)] text-base sm:text-lg leading-relaxed">
                With a decade of experience in software architecture, distributed systems, and product engineering, Hiren founded Opash Software to help ambitious startups, SMEs, and Fortune 500 partners transform complex ideas into market-defining digital products. Under his leadership, Opash has delivered 75+ global projects with a 96% client retention rate.
              </p>

              {/* Badges */}
              <div className="flex flex-wrap gap-2.5 pt-2">
                {badges.map((badge, idx) => (
                  <span
                    key={idx}
                    className="px-3.5 py-1.5 rounded-full text-xs font-semibold bg-white/70 dark:bg-slate-800/60 backdrop-blur-md border border-slate-200/50 dark:border-white/10 text-[var(--text-main)] shadow-xs"
                  >
                    {badge}
                  </span>
                ))}
              </div>

              {/* CTAs */}
              <div className="flex items-center gap-4 flex-wrap pt-4">
                <a
                  href="mailto:hiren@opashsoftware.com"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-bold text-white bg-gradient-to-r from-[#476D9A] to-[#5DC099] hover:opacity-95 shadow-lg shadow-[#476D9A]/20 transition-all duration-200 transform hover:-translate-y-0.5 active:translate-y-0"
                >
                  <Mail className="w-4 h-4" />
                  <span>Connect with Hiren</span>
                  <ArrowRight className="w-4 h-4 ml-1" />
                </a>

                <a
                  href="https://in.linkedin.com/company/opash-software"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-semibold border border-slate-200/60 dark:border-white/10 bg-white/70 dark:bg-slate-800/60 backdrop-blur-md text-[var(--text-main)] hover:border-[#5DC099] transition-all duration-200 shadow-xs"
                >
                  <svg className="w-4 h-4 fill-[#0a66c2]" viewBox="0 0 24 24">
                    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
                  </svg>
                  <span>LinkedIn Profile</span>
                </a>
              </div>
            </motion.div>

            {/* Right Card Column - Refined Frosted Glass Pedestal */}
            <motion.div 
              className="lg:col-span-5 flex flex-col items-center"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <div className="w-full max-w-sm rounded-[32px] p-8 sm:p-9 flex flex-col items-center text-center relative overflow-hidden group transition-all duration-300 bg-white/80 dark:bg-[#080e1e]/80 backdrop-blur-2xl border border-white/60 dark:border-white/10 shadow-[0_20px_60px_-15px_rgba(71,109,154,0.18)] dark:shadow-[0_25px_60px_-15px_rgba(0,0,0,0.6)]">
                
                {/* Luminous Specular Sheen Glow at top */}
                <div className="pointer-events-none absolute -top-12 left-1/2 -translate-x-1/2 w-48 h-24 bg-[radial-gradient(ellipse_at_center,rgba(97,190,153,0.25)_0%,transparent_70%)] rounded-full blur-xl" />
                
                {/* Decorative corner glow */}
                <div className="absolute top-0 right-0 w-28 h-28 bg-[#5DC099]/15 rounded-full blur-2xl pointer-events-none group-hover:scale-125 transition-transform duration-500" />
                <div className="absolute bottom-0 left-0 w-28 h-28 bg-[#476D9A]/15 rounded-full blur-2xl pointer-events-none group-hover:scale-125 transition-transform duration-500" />

                {/* Executive Portrait Pedestal with Dynamic Ambient Glow & Effects */}
                <div className="relative mb-6 group/avatar">
                  {/* Pulsing ambient backlight */}
                  <div className="absolute -inset-2 rounded-3xl bg-gradient-to-r from-[#476D9A] to-[#5DC099] opacity-30 blur-xl group-hover/avatar:opacity-60 transition-opacity duration-500 animate-pulse pointer-events-none" />

                  {/* Dual-tone gradient ring border */}
                  <div className="relative p-[3px] rounded-3xl bg-gradient-to-br from-[#476D9A] via-[#5DC099] to-[#476D9A] shadow-2xl transition-transform duration-500 group-hover/avatar:scale-[1.02]">
                    <div className="relative w-40 h-40 sm:w-44 sm:h-44 rounded-[21px] overflow-hidden bg-[#070b14]">
                      <Image
                        src="/images/team/hiren-executive.webp"
                        alt="Hiren Danecha - Founder & CEO of Opash Software"
                        width={200}
                        height={200}
                        priority
                        className="w-full h-full object-cover object-top transition-transform duration-700 ease-out group-hover/avatar:scale-105 filter contrast-105"
                      />

                      {/* Subtle ambient lighting vignette overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-[#040711]/70 via-transparent to-transparent pointer-events-none" />

                      {/* Interactive shine sweep on hover */}
                      <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent -translate-x-full group-hover/avatar:translate-x-full transition-transform duration-1000 ease-in-out pointer-events-none" />
                    </div>
                  </div>

                  {/* Verified Executive Badge */}
                  <div className="absolute -bottom-2.5 -right-2.5 flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#060913]/90 dark:bg-[#0b1222]/95 border border-[#5DC099]/60 text-white shadow-lg backdrop-blur-md">
                    <ShieldCheck className="w-3.5 h-3.5 text-[#5DC099]" />
                    <span className="text-[10px] font-mono font-bold tracking-wider text-[#5DC099]">FOUNDER</span>
                  </div>
                </div>

                <h3 className="text-2xl font-bold text-[var(--text-main)]">
                  Hiren Danecha
                </h3>
                <p className="text-sm font-semibold text-[#5DC099] mt-1">
                  Founder &amp; CEO
                </p>
                <p className="text-xs text-[var(--text-muted)] mt-1 flex items-center gap-1.5 justify-center">
                  <span>Opash Software</span>
                  <span>•</span>
                  <span>Surat, India</span>
                </p>

                {/* Trust stats glass capsules */}
                <div className="grid grid-cols-2 gap-3 w-full mt-6 pt-5 border-t border-slate-200/50 dark:border-white/10">
                  <div className="text-center p-2.5 rounded-2xl bg-slate-100/70 dark:bg-slate-800/40 backdrop-blur-md border border-slate-200/40 dark:border-white/5">
                    <div className="text-xl font-black text-[var(--text-main)]">75+</div>
                    <div className="text-[10px] text-[var(--text-muted)] uppercase tracking-wider font-bold mt-0.5">Projects</div>
                  </div>
                  <div className="text-center p-2.5 rounded-2xl bg-slate-100/70 dark:bg-slate-800/40 backdrop-blur-md border border-slate-200/40 dark:border-white/5">
                    <div className="text-xl font-black text-[#5DC099]">96%</div>
                    <div className="text-[10px] text-[var(--text-muted)] uppercase tracking-wider font-bold mt-0.5">Retention</div>
                  </div>
                </div>

                {/* Direct email glass capsule */}
                <div className="mt-5 p-3.5 w-full rounded-2xl bg-slate-100/70 dark:bg-slate-800/40 backdrop-blur-md border border-slate-200/40 dark:border-white/5 text-xs text-[var(--text-muted)] transition-all hover:border-[#5DC099]/50 shadow-xs">
                  <span className="text-[10px] uppercase tracking-wider font-bold text-[var(--text-muted)]">Direct Engineering Line:</span>
                  <div className="font-extrabold text-[var(--text-main)] text-sm mt-1 select-all hover:text-[#5DC099] transition-colors">
                    hiren@opashsoftware.com
                  </div>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
}
