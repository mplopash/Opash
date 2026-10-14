"use client";

import React from "react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Globe2, MapPin, Clock3, Users } from "lucide-react";

export function GlobalReachSection() {
  const hubs = [
    { country: "India (HQ)", flag: "🇮🇳", role: "R&D & Engineering Hub", city: "Surat & Remote Nationwide", projects: "50+ Devs" },
    { country: "United States", flag: "🇺🇸", role: "Enterprise Client Partnerships", city: "New York, California, Texas", projects: "25+ Deployments" },
    { country: "United Kingdom", flag: "🇬🇧", role: "European Delivery Base", city: "London & Tech Ecosystems", projects: "15+ Deployments" },
    { country: "United Arab Emirates", flag: "🇦🇪", role: "MENA FinTech Engagements", city: "Dubai & Abu Dhabi", projects: "10+ Projects" },
    { country: "Canada", flag: "🇨🇦", role: "Scaleup & HealthTech Hub", city: "Toronto & Vancouver", projects: "12+ Projects" },
    { country: "Australia", flag: "🇦🇺", role: "Oceania Business Solutions", city: "Sydney & Melbourne", projects: "8+ Projects" },
    { country: "Europe", flag: "🇪🇺", role: "Regulated InsureTech & SaaS", city: "Germany, Netherlands, France", projects: "14+ Projects" },
    { country: "Brazil", flag: "🇧🇷", role: "LATAM E-Commerce & Web", city: "São Paulo & Rio de Janeiro", projects: "6+ Projects" },
  ];

  return (
    <section className="py-20 relative bg-[var(--bg-secondary)] border-y border-[var(--border-subtle)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Global Reach"
          title="Delivering Software Worldwide Across"
          highlight="8 Key Global Markets"
          description="Opash Software collaborates seamlessly across international timezones with founders, venture-backed startups, and enterprise product directors."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {hubs.map((hub, idx) => (
            <Card
              key={idx}
              className="p-5 flex flex-col justify-between group hover:border-[var(--primary)] transition-all"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-3xl p-1">{hub.flag}</span>
                  <Badge variant="glass" size="sm">
                    {hub.projects}
                  </Badge>
                </div>

                <h4 className="text-base font-bold text-[var(--text-main)] group-hover:text-[var(--primary-light)] transition-colors">
                  {hub.country}
                </h4>

                <p className="text-xs text-[var(--text-dim)] font-medium mt-0.5">
                  {hub.city}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-[var(--border-subtle)] text-[11px] text-[var(--text-muted)] flex items-center gap-1.5">
                <Globe2 className="w-3.5 h-3.5 text-[var(--accent)] shrink-0" />
                <span>{hub.role}</span>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
