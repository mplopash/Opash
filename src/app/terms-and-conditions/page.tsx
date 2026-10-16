"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { QuoteModal } from "@/components/sections/QuoteModal";
import { ArrowLeft, Scale } from "lucide-react";

export default function TermsAndConditionsPage() {
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
              <Scale className="w-3.5 h-3.5" />
              <span>Terms of Service</span>
            </span>
            <h1 className="text-4xl sm:text-5xl font-black text-[var(--text-main)] tracking-tight">
              Terms &amp; Conditions
            </h1>
          </div>

          <div className="rounded-3xl border border-[var(--border-subtle)] bg-[var(--bg-secondary)]/50 p-8 sm:p-12 space-y-8 text-sm sm:text-base text-[var(--text-muted)] leading-relaxed shadow-sm">
            <p>
              Welcome to <strong className="text-[var(--text-main)]">Opash Software</strong>. By accessing our website or engaging our software engineering services, you agree to comply with and be bound by the following terms and conditions.
            </p>

            <div className="space-y-3">
              <h2 className="text-xl font-bold text-[var(--text-main)]">1. Scope of Engagement</h2>
              <p>
                Opash Software provides custom software engineering, web application development, mobile app development, AI/ML integrations, and dedicated talent augmentation services. All specific project scopes, timelines, deliverables, and payment milestones are governed by Master Services Agreements (MSA) and Statements of Work (SOW) executed between Opash Software and the client.
              </p>
            </div>

            <div className="space-y-3">
              <h2 className="text-xl font-bold text-[var(--text-main)]">2. Intellectual Property Rights</h2>
              <p>
                Unless otherwise agreed in a customized SOW, upon receipt of full milestone payments, all bespoke code, architecture documentation, design files, and intellectual property developed exclusively for the client shall belong 100% to the client.
              </p>
            </div>

            <div className="space-y-3">
              <h2 className="text-xl font-bold text-[var(--text-main)]">3. Warranty &amp; Defect Remediation</h2>
              <p>
                Opash Software provides a standard 30-day post-launch warranty period during which any defects or bugs not conforming to the agreed specification will be remediated at zero additional cost.
              </p>
            </div>

            <div className="space-y-3">
              <h2 className="text-xl font-bold text-[var(--text-main)]">4. Governing Law</h2>
              <p>
                These terms shall be governed by and construed in accordance with the laws of India, with jurisdiction in Surat, Gujarat, without regard to conflict of law principles.
              </p>
            </div>

            <div className="space-y-3 pt-4 border-t border-[var(--border-subtle)]">
              <h2 className="text-xl font-bold text-[var(--text-main)]">5. Inquiries</h2>
              <p>
                For legal inquiries regarding terms or service agreements:
                <br />
                <strong className="text-[var(--text-main)]">Email:</strong> hiren@opashsoftware.com
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
