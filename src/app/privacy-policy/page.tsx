"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { QuoteModal } from "@/components/sections/QuoteModal";
import { ArrowLeft, Lock } from "lucide-react";

export default function PrivacyPolicyPage() {
  const [quoteModalOpen, setQuoteModalOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col bg-[var(--bg-main)] text-[var(--text-main)] font-sans">
      <Navbar onOpenQuoteModal={() => setQuoteModalOpen(true)} />

      <main className="flex-1 pt-36 pb-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-[#5DC099] hover:underline"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Return to Home</span>
          </Link>

          <div className="space-y-3">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold bg-[#5DC099]/10 text-[#5DC099] border border-[#5DC099]/20 uppercase tracking-wider">
              <Lock className="w-3.5 h-3.5" />
              <span>Legal &amp; Compliance</span>
            </span>
            <h1 className="text-4xl sm:text-5xl font-black text-[var(--text-main)] tracking-tight">
              Privacy Policy
            </h1>
          </div>

          <div className="rounded-3xl border border-[var(--border-subtle)] bg-[var(--bg-secondary)]/50 p-8 sm:p-12 space-y-8 text-sm sm:text-base text-[var(--text-muted)] leading-relaxed shadow-sm">
            <p>
              Last Updated: January 2026. At <strong className="text-[var(--text-main)]">Opash Software</strong> (accessible from https://www.opashsoftware.com), one of our main priorities is the privacy of our visitors and clients. This Privacy Policy document describes the types of information collected and how we use and safeguard it.
            </p>

            <div className="space-y-3">
              <h2 className="text-xl font-bold text-[var(--text-main)]">1. Information We Collect</h2>
              <p>
                We collect information that you voluntarily provide to us when expressing an interest in obtaining information about our custom software development, web development, mobile apps, SaaS, or AI services, including:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Name, email address, phone number, and company name.</li>
                <li>Project requirements, architectural specifications, and estimated budget ranges.</li>
                <li>Job applications, resumes, and portfolios submitted through our careers portal.</li>
              </ul>
            </div>

            <div className="space-y-3">
              <h2 className="text-xl font-bold text-[var(--text-main)]">2. How We Use Your Information</h2>
              <p>We use the collected information solely to:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Prepare and deliver technical project estimations, architectural roadmaps, and quotes.</li>
                <li>Communicate regarding ongoing development sprints, demos, and support.</li>
                <li>Protect against unauthorized access and maintain strict client NDA confidentiality.</li>
                <li>Evaluate career applications for open engineering positions.</li>
              </ul>
            </div>

            <div className="space-y-3">
              <h2 className="text-xl font-bold text-[var(--text-main)]">3. Intellectual Property &amp; Confidentiality</h2>
              <p>
                We understand the sensitive nature of custom software systems. Opash Software enforces strict Non-Disclosure Agreements (NDAs). We never sell, rent, or disclose proprietary client concepts, database models, or codebase assets to any third party.
              </p>
            </div>

            <div className="space-y-3 pt-4 border-t border-[var(--border-subtle)]">
              <h2 className="text-xl font-bold text-[var(--text-main)]">4. Contact Us</h2>
              <p>
                If you have additional questions or require more information about our Privacy Policy, contact us at:
                <br />
                <strong className="text-[var(--text-main)]">Email:</strong> hiren@opashsoftware.com
                <br />
                <strong className="text-[var(--text-main)]">Address:</strong> 129, The Galleria Shopping Hub, Nr. Sanjeev Kumar Auditorium, Opp. 3Seventy Kitchen Restaurant, Pal, Adajan, Surat - 395009, Gujarat, India
                <br />
                <strong className="text-[var(--text-main)]">Phone:</strong> +91 95372-22266
              </p>
            </div>
          </div>
        </div>
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
