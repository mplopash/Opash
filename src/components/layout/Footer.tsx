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

export function Footer() {
  const [currentYear, setCurrentYear] = React.useState(2026);

  React.useEffect(() => {
    setCurrentYear(new Date().getFullYear());
  }, []);

  const services = [
    { name: "Custom Software Development", href: "/custom-software-development" },
    { name: "AI & Machine Learning Solutions", href: "/ai-ml-solutions" },
    { name: "Web Development & Cloud Platforms", href: "/web-development" },
    { name: "Mobile App Development (iOS & Android)", href: "/mobile-development" },
    { name: "SaaS Architecture & Multi-Tenancy", href: "/saas-development" },
    { name: "API Integration & Microservices", href: "/api-integration" },
    { name: "QA Automation & Performance Testing", href: "/qa-testing" },
    { name: "Hire Dedicated Tech Teams", href: "/hire-developers" },
  ];

  const companyLinks = [
    { name: "About Opash", href: "/company" },
    { name: "Case Studies & Work", href: "/portfolio" },
    { name: "Insights & Tech Blogs", href: "/blogs" },
    { name: "Careers (We're Hiring!)", href: "/career" },
    { name: "Project & Budget Estimator", href: "/get-a-quote" },
    { name: "Contact Engineering Leads", href: "/contact" },
    { name: "Privacy Policy", href: "/privacy-policy" },
    { name: "Terms & Conditions", href: "/terms-and-conditions" },
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
                <Link href={item.href} className="hover:text-[var(--primary-light)] transition-colors block">
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Company & Legal Column */}
        <div>
          <h4 className="text-xs font-bold uppercase tracking-wider text-[var(--text-main)] mb-4">
            Company &amp; Legal
          </h4>
          <ul className="space-y-2.5 text-xs text-[var(--text-muted)]">
            {companyLinks.map((item, idx) => (
              <li key={idx}>
                <Link href={item.href} className="hover:text-[var(--primary-light)] transition-colors block">
                  {item.name}
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
              href="/contact"
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-[var(--primary)] hover:underline"
            >
              Start Your Project Consultation
              <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </div>

      {/* Streamlined Enterprise Footer Bar */}
      <div className="border-t border-[var(--border-subtle)] bg-[var(--bg-main)]/80 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-[var(--text-muted)]">
          <div className="flex flex-wrap items-center gap-2 text-center md:text-left">
            <span>© {currentYear} Opash Software Private Limited. All rights reserved.</span>
            <span className="hidden sm:inline text-[var(--text-dim)]">•</span>
            <span className="hidden sm:inline">Surat HQ Campus, Gujarat, India</span>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-6">
            <Link href="/privacy-policy" className="hover:text-[var(--text-main)] transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms-and-conditions" className="hover:text-[var(--text-main)] transition-colors">
              Terms &amp; Conditions
            </Link>
            <Link href="/sitemap.xml" className="hover:text-[var(--text-main)] transition-colors">
              Sitemap
            </Link>
            <button
              type="button"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="text-[var(--primary)] hover:text-[var(--primary-light)] font-semibold transition-colors flex items-center gap-1"
            >
              Back to Top ↑
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
