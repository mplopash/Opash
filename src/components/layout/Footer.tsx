"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { 
  Mail, 
  Phone, 
  MapPin, 
  ArrowUpRight, 
  ShieldCheck, 
  Award, 
  CheckCircle2, 
  Heart
} from "lucide-react";
import HalftoneWordmarkFooter from "@/components/ui/halftone-wordmark-footer";

export function Footer() {
  const [currentYear, setCurrentYear] = React.useState(2026);

  React.useEffect(() => {
    setCurrentYear(new Date().getFullYear());
  }, []);

  const services = [
    "Custom Software Development",
    "AI & Machine Learning Solutions",
    "Web Development & Cloud Platforms",
    "Mobile App Development (iOS & Android)",
    "SaaS Architecture & Multi-Tenancy",
    "API Integration & Microservices",
    "QA Automation & Performance Testing",
    "Hire Dedicated Tech Teams",
  ];

  const industries = [
    "InsureTech & Insurance",
    "Fintech & Digital Banking",
    "E-Commerce & Retail",
    "Healthcare & Telemedicine",
    "Real Estate & PropTech",
    "EdTech & E-Learning",
    "Industrial Tech & IoT",
    "NGOs & Social Impact",
  ];

  const globalPresence = [
    { country: "India (HQ)", city: "Surat, Gujarat" },
    { country: "United States", city: "Client Partnerships" },
    { country: "United Kingdom", city: "Delivery Hub" },
    { country: "United Arab Emirates", city: "MENA Region" },
    { country: "Canada & Australia", city: "Enterprise Engagements" },
  ];

  return (
    <footer className="border-t border-[var(--border-subtle)] bg-[var(--bg-secondary)] relative overflow-hidden text-sm">
      {/* Ambient background glow */}
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[var(--primary)]/5 rounded-full blur-3xl pointer-events-none" />

      {/* Top Banner: Global Delivery & Accreditations */}
      <div className="border-b border-[var(--border-subtle)] py-6 bg-[var(--bg-main)]/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
              <Award className="w-5 h-5" />
            </div>
            <div>
              <div className="font-semibold text-[var(--text-main)] text-sm">
                Upwork Top-Rated & Verified Agency
              </div>
              <div className="text-xs text-[var(--text-muted)]">
                100% Job Success Score · 70+ Completed Global Projects
              </div>
            </div>
          </div>

          <div className="flex items-center gap-6 text-xs text-[var(--text-muted)]">
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-[var(--primary)]" />
              Agile Scrum Delivery
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-[var(--primary)]" />
              24/7 Timezone Alignment
            </span>
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="w-3.5 h-3.5 text-[var(--accent)]" />
              Strict NDA & IP Protection
            </span>
          </div>
        </div>
      </div>

      {/* Main Footer Links */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
        {/* Brand & Address Column */}
        <div className="lg:col-span-2 space-y-5">
          <Link href="/" className="inline-block group">
            <Image
              src="/logos/opash-logo-dark.png"
              alt="Opash Software"
              width={200}
              height={48}
              className="h-10 w-auto object-contain hidden dark:block transition-transform duration-200 group-hover:scale-102"
            />
            <Image
              src="/logos/opash-logo-light.png"
              alt="Opash Software"
              width={200}
              height={48}
              className="h-10 w-auto object-contain block dark:hidden transition-transform duration-200 group-hover:scale-102"
            />
          </Link>

          <p className="text-[var(--text-muted)] leading-relaxed text-sm max-w-md">
            As a premier custom software development and AI engineering partner, Opash Software empowers startups, scaleups, and enterprises across the globe with scalable digital infrastructure and high-velocity engineering.
          </p>

          <div className="space-y-3 pt-2">
            <div className="flex items-start gap-3 text-xs text-[var(--text-muted)]">
              <MapPin className="w-4 h-4 text-[var(--primary)] shrink-0 mt-0.5" />
              <span>
                129, The Galleria Shopping Hub, Nr. Sanjeev Kumar Auditorium, Opp. 3Seventy Kitchen Restaurant, Pal, Adajan, Surat - 395009, Gujarat, India
              </span>
            </div>
            <div className="flex items-center gap-3 text-xs text-[var(--text-muted)]">
              <Phone className="w-4 h-4 text-[var(--accent)] shrink-0" />
              <a href="tel:+919537222266" className="hover:text-[var(--text-main)] transition-colors">
                +91 95372-22266
              </a>
            </div>
            <div className="flex items-center gap-3 text-xs text-[var(--text-muted)]">
              <Mail className="w-4 h-4 text-[var(--primary)] shrink-0" />
              <a href="mailto:hiren@opashsoftware.com" className="hover:text-[var(--text-main)] transition-colors">
                hiren@opashsoftware.com
              </a>
            </div>
          </div>
        </div>

        {/* Services Column */}
        <div>
          <h4 className="text-xs font-bold uppercase tracking-wider text-[var(--text-main)] mb-4">
            Services
          </h4>
          <ul className="space-y-2.5 text-xs text-[var(--text-muted)]">
            {services.map((item, idx) => (
              <li key={idx}>
                <Link href="#services" className="hover:text-[var(--primary-light)] transition-colors block">
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Industries Column */}
        <div>
          <h4 className="text-xs font-bold uppercase tracking-wider text-[var(--text-main)] mb-4">
            Industries
          </h4>
          <ul className="space-y-2.5 text-xs text-[var(--text-muted)]">
            {industries.map((item, idx) => (
              <li key={idx}>
                <Link href="#industries" className="hover:text-[var(--primary-light)] transition-colors block">
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Global Footprint & Contact */}
        <div>
          <h4 className="text-xs font-bold uppercase tracking-wider text-[var(--text-main)] mb-4">
            Global Footprint
          </h4>
          <ul className="space-y-2.5 text-xs text-[var(--text-muted)]">
            {globalPresence.map((loc, idx) => (
              <li key={idx} className="flex flex-col">
                <span className="font-medium text-[var(--text-main)]">{loc.country}</span>
                <span className="text-[11px] text-[var(--text-dim)]">{loc.city}</span>
              </li>
            ))}
          </ul>

          <div className="mt-6 pt-4 border-t border-[var(--border-subtle)]">
            <Link
              href="#contact"
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-[var(--primary)] hover:underline"
            >
              Start Your Project Consultation
              <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </div>

      {/* Halftone Interactive Wordmark Footer (Opash) */}
      <HalftoneWordmarkFooter
        wordmark="opash"
        label="Opash Software"
        meta={`©${currentYear} · Surat HQ Campus / Global Delivery`}
        palette={{ ink: "#476d9a", warm: "#5ec098" }}
        height="480px"
      />
    </footer>
  );
}
