"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { QuoteModal } from "@/components/sections/QuoteModal";
import { blogPosts, BlogPost } from "@/data/blogsData";
import { Sparkles, ArrowRight, Clock, Calendar, User, Tag } from "lucide-react";

export default function BlogsPage() {
  const [quoteModalOpen, setQuoteModalOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const categories = [
    "All",
    "Full-Stack Architecture",
    "SaaS Engineering",
    "AI & Innovation",
    "Business & Strategy",
  ];

  const filteredPosts = selectedCategory === "All"
    ? blogPosts
    : blogPosts.filter((b) => b.category === selectedCategory);

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
              <span>ENGINEERING KNOWLEDGE HUB</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-[var(--text-main)] max-w-4xl mx-auto leading-tight">
              Architectural Insights From Production Systems
            </h1>

            <p className="text-lg sm:text-xl text-[var(--text-muted)] max-w-3xl mx-auto leading-relaxed">
              From modern microservices and AI/RAG agent patterns to high-throughput cloud automation — we share what&apos;s next in enterprise software engineering.
            </p>

            {/* Category Filter Pills */}
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

        {/* Blog Posts Grid */}
        <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {filteredPosts.map((post, idx) => (
              <motion.article
                key={post.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                className="group rounded-3xl border border-[var(--border-subtle)] bg-[var(--bg-secondary)]/50 p-8 sm:p-10 hover:border-[#5DC099]/40 transition-all duration-300 shadow-sm hover:shadow-xl flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between gap-4 text-xs">
                    <span className="font-bold text-[#5DC099] uppercase tracking-wider">
                      {post.category}
                    </span>
                    <span className="flex items-center gap-1 text-[var(--text-muted)] font-medium">
                      <Clock className="w-3.5 h-3.5" />
                      {post.readTime}
                    </span>
                  </div>

                  <Link href={`/blogs/${post.slug}`} className="block group-hover:text-[#5DC099] transition-colors">
                    <h2 className="text-2xl sm:text-3xl font-extrabold text-[var(--text-main)] leading-snug">
                      {post.title}
                    </h2>
                  </Link>

                  <p className="text-sm sm:text-base text-[var(--text-muted)] leading-relaxed">
                    {post.excerpt}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 pt-2">
                    {post.tags.map((tag, tIdx) => (
                      <span
                        key={tIdx}
                        className="px-2.5 py-1 rounded-md text-xs font-mono bg-[var(--bg-main)] border border-[var(--border-subtle)] text-[var(--text-dim)]"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Author Footer & Read More Link */}
                <div className="pt-8 mt-6 border-t border-[var(--border-subtle)] flex items-center justify-between flex-wrap gap-4">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-full bg-gradient-to-br from-[#476D9A] to-[#5DC099] flex items-center justify-center text-white text-xs font-bold shadow-sm">
                      {post.author.avatar}
                    </div>
                    <div>
                      <div className="text-xs font-bold text-[var(--text-main)]">{post.author.name}</div>
                      <div className="text-[11px] text-[var(--text-muted)]">{post.date}</div>
                    </div>
                  </div>

                  <Link
                    href={`/blogs/${post.slug}`}
                    className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-[#5DC099] group-hover:translate-x-1 transition-transform"
                  >
                    <span>Read Article</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </motion.article>
            ))}
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
