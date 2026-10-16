"use client";

import React from "react";
import Link from "next/link";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { ArrowUpRight, Calendar, Clock, BookOpen, ArrowRight } from "lucide-react";
import { blogPosts } from "@/data/blogsData";

export function BlogInsightsSection() {
  const displayPosts = blogPosts.slice(0, 3);

  return (
    <section id="blogs" className="py-14 sm:py-20 relative bg-[var(--bg-secondary)] cv-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <SectionHeading
            eyebrow="14 // Engineering Insights"
            title="From Emerging Trends to"
            highlight="Enterprise Transformations"
            description="Read our latest engineering articles, architectural post-mortems, and technology blueprints."
          />

          <Link
            href="/blogs"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-main)] text-xs font-bold text-[var(--text-main)] hover:border-[var(--primary)] hover:text-[var(--primary)] transition-all self-start md:self-auto shadow-xs group"
          >
            <span>View All Engineering Insights</span>
            <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {displayPosts.map((post) => (
            <Link key={post.slug} href={`/blogs/${post.slug}`} className="flex">
              <Card
                className="p-6 flex flex-col justify-between w-full group hover:border-[var(--primary)] hover:shadow-lg transition-all cursor-pointer"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <Badge variant="glass" size="sm">
                      {post.category}
                    </Badge>
                    <div className="flex items-center gap-1.5 text-xs text-[var(--text-dim)] font-mono">
                      <Clock className="w-3.5 h-3.5" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>

                  <h3 className="text-lg font-bold text-[var(--text-main)] group-hover:text-[var(--primary-light)] transition-colors leading-snug mb-3">
                    {post.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-[var(--text-muted)] leading-relaxed mb-6 line-clamp-3">
                    {post.excerpt}
                  </p>
                </div>

                <div className="pt-4 border-t border-[var(--border-subtle)] flex items-center justify-between text-xs">
                  <span className="flex items-center gap-1.5 text-[var(--text-dim)] font-mono">
                    <Calendar className="w-3.5 h-3.5" />
                    {post.date}
                  </span>

                  <span className="flex items-center gap-1 font-semibold text-[var(--primary)] group-hover:underline">
                    Read Article
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
