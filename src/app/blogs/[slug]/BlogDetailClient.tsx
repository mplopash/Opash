"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { QuoteModal } from "@/components/sections/QuoteModal";
import { BlogPost } from "@/data/blogsData";
import { 
  ArrowLeft, 
  Clock, 
  Sparkles, 
} from "lucide-react";

interface BlogDetailClientProps {
  post: BlogPost;
}

export function BlogDetailClient({ post }: BlogDetailClientProps) {
  const [quoteModalOpen, setQuoteModalOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col bg-[var(--bg-main)] text-[var(--text-main)] selection:bg-[var(--primary)] selection:text-white font-sans">
      <Navbar onOpenQuoteModal={() => setQuoteModalOpen(true)} />

      <main className="flex-1">
        {/* Article Header */}
        <section className="relative pt-36 pb-16 overflow-hidden border-b border-[var(--border-subtle)] bg-[var(--bg-secondary)]/30">
          <div 
            className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[500px] rounded-full pointer-events-none opacity-20 blur-3xl"
            style={{ background: "radial-gradient(circle, #476D9A 0%, transparent 70%)" }}
          />

          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-6">
            <Link
              href="/blogs"
              className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-[var(--text-muted)] hover:text-[#5DC099] transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to All Articles</span>
            </Link>

            <div className="flex items-center gap-3 text-xs">
              <span className="font-bold text-[#5DC099] uppercase tracking-wider px-3 py-1 rounded-full bg-[#5DC099]/10 border border-[#5DC099]/20">
                {post.category}
              </span>
              <span className="flex items-center gap-1 text-[var(--text-muted)]">
                <Clock className="w-3.5 h-3.5" />
                {post.readTime}
              </span>
              <span className="text-[var(--text-dim)]">•</span>
              <span className="text-[var(--text-muted)]">{post.date}</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[var(--text-main)] leading-tight tracking-tight">
              {post.title}
            </h1>

            {/* Author Profile */}
            <div className="flex items-center gap-3.5 pt-4">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#476D9A] to-[#5DC099] flex items-center justify-center text-white text-sm font-bold shadow-md">
                {post.author.avatar}
              </div>
              <div>
                <div className="text-sm font-bold text-[var(--text-main)]">{post.author.name}</div>
                <div className="text-xs text-[var(--text-muted)]">{post.author.role}</div>
              </div>
            </div>
          </div>
        </section>

        {/* Article Body */}
        <article className="py-16 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          {/* Excerpt Lead */}
          <div className="p-6 sm:p-8 rounded-2xl bg-[var(--bg-secondary)] border-l-4 border-[#5DC099] text-base sm:text-lg font-medium italic text-[var(--text-main)] leading-relaxed shadow-sm">
            &ldquo;{post.excerpt}&rdquo;
          </div>

          {/* Structured Content Sections */}
          <div className="space-y-8">
            {post.content.map((sec, idx) => (
              <div key={idx} className="space-y-4">
                {sec.heading && (
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-[var(--text-main)] tracking-tight pt-4">
                    {sec.heading}
                  </h2>
                )}
                {sec.paragraphs.map((p, pIdx) => (
                  <p key={pIdx} className="text-base sm:text-lg text-[var(--text-muted)] leading-relaxed">
                    {p}
                  </p>
                ))}
              </div>
            ))}
          </div>

          {/* Tags */}
          <div className="pt-8 border-t border-[var(--border-subtle)] space-y-3">
            <div className="text-xs font-bold text-[var(--text-muted)] uppercase tracking-wider">
              Topics &amp; Technologies
            </div>
            <div className="flex flex-wrap gap-2">
              {post.tags.map((t, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1.5 rounded-lg text-xs font-mono bg-[var(--bg-secondary)] border border-[var(--border-subtle)] text-[#5DC099]"
                >
                  #{t}
                </span>
              ))}
            </div>
          </div>

          {/* Share & Consultation Box */}
          <div className="rounded-3xl border border-[var(--border-subtle)] bg-gradient-to-br from-[#476D9A]/10 via-[var(--bg-secondary)] to-[#5DC099]/10 p-8 sm:p-10 space-y-4 text-center">
            <h3 className="text-xl sm:text-2xl font-bold text-[var(--text-main)]">
              Discuss This Architecture With Our Tech Leads
            </h3>
            <p className="text-sm text-[var(--text-muted)] max-w-md mx-auto">
              Want to implement this in your next enterprise product? We offer direct technical feasibility consultations.
            </p>
            <button
              type="button"
              onClick={() => setQuoteModalOpen(true)}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-white bg-gradient-to-r from-[#476D9A] to-[#5DC099] shadow-md hover:opacity-95 transition-all cursor-pointer"
            >
              <Sparkles className="w-4 h-4" />
              <span>Consult With Our Architects</span>
            </button>
          </div>
        </article>

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
