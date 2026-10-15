"use client";

import React from "react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { ArrowUpRight, Calendar, Clock, BookOpen } from "lucide-react";

export function BlogInsightsSection() {
  const articles = [
    {
      title: "Mastering Modern Full-Stack: Next.js 15, Turbopack, and Distributed Microservices",
      excerpt:
        "A comprehensive architectural guide to decoupling enterprise monolithic systems into high-throughput edge nodes and serverless microservices.",
      date: "May 23, 2025",
      readTime: "7 min read",
      category: "Architecture",
      tag: "Next.js & Cloud",
    },
    {
      title: "Building Multi-Tenant SaaS: Data Isolation, Partitioning & Billing Engines",
      excerpt:
        "A deep architectural dive into multi-tenant database models, schema-per-tenant vs row-level security, and zero-downtime database migrations.",
      date: "May 19, 2025",
      readTime: "9 min read",
      category: "SaaS Engineering",
      tag: "Cloud Scale",
    },
    {
      title: "Applied Generative AI: From LLM Wrappers to Production Multi-Agent Systems",
      excerpt:
        "How cutting-edge enterprises are implementing vector retrieval (RAG), tool calling, and fine-tuned models to automate mission-critical back-office workflows.",
      date: "May 18, 2025",
      readTime: "6 min read",
      category: "Artificial Intelligence",
      tag: "GenAI & Agents",
    },
  ];

  return (
    <section id="blogs" className="py-14 sm:py-20 relative bg-[var(--bg-secondary)] cv-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="13 // Engineering Insights"
          title="From Emerging Trends to"
          highlight="Enterprise Transformations"
          description="Read our latest engineering articles, architectural post-mortems, and technology blueprints."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {articles.map((post, idx) => (
            <Card
              key={idx}
              className="p-6 flex flex-col justify-between group hover:border-[var(--primary)] transition-all cursor-pointer"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <Badge variant="glass" size="sm">
                    {post.category}
                  </Badge>
                  <div className="flex items-center gap-1.5 text-xs text-[var(--text-dim)]">
                    <Clock className="w-3.5 h-3.5" />
                    <span>{post.readTime}</span>
                  </div>
                </div>

                <h3 className="text-lg font-bold text-[var(--text-main)] group-hover:text-[var(--primary-light)] transition-colors leading-snug mb-3">
                  {post.title}
                </h3>

                <p className="text-xs sm:text-sm text-[var(--text-muted)] leading-relaxed mb-6">
                  {post.excerpt}
                </p>
              </div>

              <div className="pt-4 border-t border-[var(--border-subtle)] flex items-center justify-between text-xs">
                <span className="flex items-center gap-1.5 text-[var(--text-dim)]">
                  <Calendar className="w-3.5 h-3.5" />
                  {post.date}
                </span>

                <span className="flex items-center gap-1 font-semibold text-[var(--primary)] group-hover:underline">
                  Read Article
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
