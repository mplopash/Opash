"use client";

import React, { useState } from "react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Badge } from "@/components/ui/Badge";
import { 
  Award, 
  Flame, 
  Clock, 
  MessageSquare, 
  ShieldCheck, 
  RefreshCw, 
  Sparkles,
  GitBranch,
  CheckCircle2,
  XCircle,
  HelpCircle
} from "lucide-react";
import { SpotlightCard } from "@/components/common/SpotlightCard";
import { soundEffects } from "@/lib/soundEffects";

export function WhyChooseUsSection() {
  const [activeTab, setActiveTab] = useState<"pillars" | "comparison">("pillars");

  const reasons = [
    {
      title: "Upwork Top-Rated Agency",
      desc: "Recognized as an elite software agency with a 100% Job Success Score and dozens of 5-star verified enterprise reviews.",
      icon: <Award className="w-5 h-5 text-[var(--primary)]" />,
      colSpan: "lg:col-span-2",
      badge: "ELITE STATUS",
      highlight: "100% Client Success Record",
    },
    {
      title: "Agile 2-Week Sprints",
      desc: "Zero black-box engineering. You see live staging demos every two weeks with clear backlog tracking.",
      icon: <Flame className="w-5 h-5 text-[var(--accent)]" />,
      colSpan: "lg:col-span-1",
      badge: "VELOCITY",
      highlight: "Continuous Staging Demos",
    },
    {
      title: "Transparent Collaboration",
      desc: "Direct access to our senior architects via private Slack channels, Jira boards, and weekly video standups.",
      icon: <MessageSquare className="w-5 h-5 text-[var(--primary)]" />,
      colSpan: "lg:col-span-1",
      badge: "COMMUNICATION",
      highlight: "Direct Slack Access",
    },
    {
      title: "24/7 Global Timezone Alignment",
      desc: "Our distributed delivery schedules ensure seamless 4-6 hour communication overlap with USA (EST/PST), UK (GMT), UAE (GST), and Australia (AEST).",
      icon: <Clock className="w-5 h-5 text-[var(--primary)]" />,
      colSpan: "lg:col-span-2",
      badge: "GLOBAL SYNC",
      highlight: "USA, UK & UAE Overlap",
    },
    {
      title: "Rock-Solid NDA & Code Ownership",
      desc: "You retain 100% intellectual property rights, source code ownership, and patentable work from day one.",
      icon: <ShieldCheck className="w-5 h-5 text-[var(--accent)]" />,
      colSpan: "lg:col-span-1",
      badge: "SECURITY",
      highlight: "100% IP Ownership",
    },
    {
      title: "Complimentary Post-Launch Warranty",
      desc: "Every custom build includes 60 days of bug-fixing warranty and performance monitoring post-launch to ensure a silky-smooth rollout.",
      icon: <RefreshCw className="w-5 h-5 text-[var(--primary)]" />,
      colSpan: "lg:col-span-2",
      badge: "GUARANTEE",
      highlight: "60-Day Full Warranty",
    },
  ];

  const comparisonData = [
    {
      dimension: "Code & IP Ownership",
      opash: "100% assigned immediately on sprint delivery",
      freelancer: "Vague, risk of reused repos or disputes",
      agency: "Often holds code hostage till final settlement",
      inHouse: "Full ownership, but 3-4 months recruitment time",
    },
    {
      dimension: "Developer Experience Level",
      opash: "Strictly Senior Architects & Mid-Senior Engineers",
      freelancer: "Unverified claims, high variance in quality",
      agency: "Bait & switch with junior offshore subcontractors",
      inHouse: "Senior engineers, but costly equity & severance risk",
    },
    {
      dimension: "Communication & Overlap",
      opash: "Dedicated private Slack + 4-6hr USA/UK/UAE overlap",
      freelancer: "Async ghosting risk & timezone mismatches",
      agency: "Filtered through non-technical account managers",
      inHouse: "Instant local alignment",
    },
    {
      dimension: "Velocity & Sprint Cadence",
      opash: "Two-week predictable releases with live staging URLs",
      freelancer: "Unpredictable milestones & scope creep",
      agency: "Bureaucratic change orders for every small tweak",
      inHouse: "Dependent on internal team bandwidth & meetings",
    },
    {
      dimension: "Post-Launch Warranty",
      opash: "60 days zero-cost bug-fixing guarantee",
      freelancer: "Disappears after final invoice payment",
      agency: "Expensive ongoing monthly retainer required",
      inHouse: "Internal team maintains at fixed monthly payroll",
    },
  ];

  return (
    <section id="why-us" className="py-14 sm:py-20 relative bg-[var(--bg-main)] transition-colors duration-300">
      <div id="about" className="absolute -top-20 left-0" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="07 // Institutional Guarantees"
          title="The Reliability of an Enterprise Partner,"
          highlight="The Speed of a Startup"
          description="We combine engineering rigor, open communication, and high emotional investment into every software product we deliver."
        />

        {/* View Switcher: Core Pillars vs Market Comparison Matrix */}
        <div className="flex items-center justify-center gap-2 mb-12">
          <div className="flex items-center p-1 rounded-xl bg-[var(--bg-card)] border border-[var(--border-subtle)] shadow-sm">
            <button
              onClick={() => {
                soundEffects.hover();
                setActiveTab("pillars");
              }}
              className={`px-4 py-2 rounded-lg text-xs sm:text-sm font-semibold tracking-wide transition-all cursor-pointer outline-none focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--primary)] ${
                activeTab === "pillars"
                  ? "bg-[var(--primary)] text-white shadow-md shadow-[var(--brand-glow)]"
                  : "text-[var(--text-muted)] hover:text-[var(--text-main)]"
              }`}
            >
              Core Architectural Pillars
            </button>
            <button
              onClick={() => {
                soundEffects.hover();
                setActiveTab("comparison");
              }}
              className={`px-4 py-2 rounded-lg text-xs sm:text-sm font-semibold tracking-wide transition-all cursor-pointer outline-none focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--primary)] ${
                activeTab === "comparison"
                  ? "bg-[var(--primary)] text-white shadow-md shadow-[var(--brand-glow)]"
                  : "text-[var(--text-muted)] hover:text-[var(--text-main)]"
              }`}
            >
              Market Comparison Matrix
            </button>
          </div>
        </div>

        {activeTab === "pillars" ? (
          /* Bento Grid with 3D Spotlight Cards */
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 outline-none border-0 ring-0">
            {reasons.map((item, idx) => (
              <SpotlightCard
                key={idx}
                className={`${item.colSpan} p-8 rounded-3xl glass-panel border border-[var(--border-strong)] flex flex-col justify-between group hover-card-elevate relative overflow-hidden transition-all duration-300 shadow-md`}
              >
                {/* Accent Top Corner Sheen on Hover */}
                <span className="absolute top-0 right-0 w-24 h-1 bg-gradient-to-l from-[var(--accent)] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="p-3 rounded-2xl bg-[var(--bg-main)] border border-[var(--border-subtle)] group-hover:scale-110 group-hover:rotate-3 group-hover:border-[#476D9A]/40 group-hover:bg-[var(--primary)]/10 transition-all duration-300">
                      {item.icon}
                    </div>
                    <Badge variant="glass" size="sm">
                      {item.badge}
                    </Badge>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-bold text-[var(--text-main)] mb-3 group-hover:text-[var(--primary-light)] transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-sm text-[var(--text-muted)] leading-relaxed mb-6 font-normal">
                    {item.desc}
                  </p>
                </div>

                <div className="pt-4 border-t border-[var(--border-subtle)] flex items-center justify-between text-xs">
                  <span className="flex items-center gap-1.5 text-emerald-500 font-semibold">
                    <CheckCircle2 className="w-4 h-4" />
                    {item.highlight}
                  </span>
                  <span className="text-[var(--text-dim)] font-mono font-bold">0{idx + 1}</span>
                </div>
              </SpotlightCard>
            ))}
          </div>
        ) : (
          /* Interactive Comparison Matrix */
          <div className="max-w-5xl mx-auto overflow-x-auto rounded-3xl glass-panel border border-[var(--border-strong)] p-6 sm:p-8 shadow-2xl outline-none ring-0">
            <table className="w-full text-left border-collapse text-xs sm:text-sm">
              <thead>
                <tr className="border-b border-[var(--border-strong)] text-[var(--text-dim)] font-mono uppercase text-xs">
                  <th className="py-4 px-3">Criteria</th>
                  <th className="py-4 px-4 text-[var(--primary-light)] font-bold bg-[var(--primary)]/10 rounded-t-xl">
                    Opash Software
                  </th>
                  <th className="py-4 px-3">Freelancers</th>
                  <th className="py-4 px-3">Traditional Agency</th>
                  <th className="py-4 px-3">In-House Team</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[var(--border-subtle)]">
                {comparisonData.map((row, rIdx) => (
                  <tr key={rIdx} className="hover:bg-[var(--bg-card)]/50 transition-colors">
                    <td className="py-4 px-3 font-bold text-[var(--text-main)] whitespace-nowrap">
                      {row.dimension}
                    </td>
                    <td className="py-4 px-4 font-semibold text-emerald-500 bg-[var(--primary)]/5">
                      <div className="flex items-start gap-1.5">
                        <CheckCircle2 className="w-4 h-4 shrink-0 text-emerald-500 mt-0.5" />
                        <span>{row.opash}</span>
                      </div>
                    </td>
                    <td className="py-4 px-3 text-[var(--text-muted)]">
                      <div className="flex items-start gap-1.5">
                        <XCircle className="w-4 h-4 shrink-0 text-rose-500 mt-0.5" />
                        <span>{row.freelancer}</span>
                      </div>
                    </td>
                    <td className="py-4 px-3 text-[var(--text-muted)]">
                      <div className="flex items-start gap-1.5">
                        <XCircle className="w-4 h-4 shrink-0 text-rose-500 mt-0.5" />
                        <span>{row.agency}</span>
                      </div>
                    </td>
                    <td className="py-4 px-3 text-[var(--text-muted)]">
                      <div className="flex items-start gap-1.5">
                        <HelpCircle className="w-4 h-4 shrink-0 text-amber-500 mt-0.5" />
                        <span>{row.inHouse}</span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </section>
  );
}
