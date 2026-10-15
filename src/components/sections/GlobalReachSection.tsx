"use client";

import React, { useState } from "react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Globe2, MapPin, Sparkles, Activity, ShieldCheck } from "lucide-react";
import { soundEffects } from "@/lib/soundEffects";

interface GlobalHub {
  id: string;
  country: string;
  flag: string;
  role: string;
  city: string;
  projects: string;
  latency: string;
  coords: { x: number; y: number }; // Relative SVG coordinates (viewBox 0 0 1000 480)
}

const hubs: GlobalHub[] = [
  { 
    id: "in", 
    country: "India (HQ)", 
    flag: "🇮🇳", 
    role: "R&D & Engineering Hub", 
    city: "Surat & Nationwide", 
    projects: "50+ Devs", 
    latency: "< 5ms Core", 
    coords: { x: 670, y: 245 } 
  },
  { 
    id: "us", 
    country: "United States", 
    flag: "🇺🇸", 
    role: "Enterprise Client Partnerships", 
    city: "New York, California, Texas", 
    projects: "25+ Deployments", 
    latency: "118ms Edge", 
    coords: { x: 250, y: 175 } 
  },
  { 
    id: "uk", 
    country: "United Kingdom", 
    flag: "🇬🇧", 
    role: "European Delivery Base", 
    city: "London & Ecosystems", 
    projects: "15+ Deployments", 
    latency: "86ms Edge", 
    coords: { x: 480, y: 145 } 
  },
  { 
    id: "ae", 
    country: "United Arab Emirates", 
    flag: "🇦🇪", 
    role: "MENA FinTech Engagements", 
    city: "Dubai & Abu Dhabi", 
    projects: "10+ Projects", 
    latency: "28ms Edge", 
    coords: { x: 590, y: 220 } 
  },
  { 
    id: "ca", 
    country: "Canada", 
    flag: "🇨🇦", 
    role: "Scaleup & HealthTech Hub", 
    city: "Toronto & Vancouver", 
    projects: "12+ Projects", 
    latency: "125ms Edge", 
    coords: { x: 225, y: 140 } 
  },
  { 
    id: "au", 
    country: "Australia", 
    flag: "🇦🇺", 
    role: "Oceania Business Solutions", 
    city: "Sydney & Melbourne", 
    projects: "8+ Projects", 
    latency: "135ms Edge", 
    coords: { x: 880, y: 380 } 
  },
  { 
    id: "eu", 
    country: "Europe", 
    flag: "🇪🇺", 
    role: "Regulated InsureTech & SaaS", 
    city: "Frankfurt, Amsterdam, Paris", 
    projects: "14+ Projects", 
    latency: "92ms Edge", 
    coords: { x: 515, y: 155 } 
  },
  { 
    id: "br", 
    country: "Brazil", 
    flag: "🇧🇷", 
    role: "LATAM E-Commerce & Web", 
    city: "São Paulo & Rio", 
    projects: "6+ Projects", 
    latency: "185ms Edge", 
    coords: { x: 345, y: 360 } 
  },
];

export function GlobalReachSection() {
  const [activeHubId, setActiveHubId] = useState<string | null>("in");

  const hq = hubs[0]; // Surat HQ
  const activeHub = hubs.find((h) => h.id === activeHubId) || hq;

  // Generate SVG curve from HQ to target
  const getCurvePath = (start: { x: number; y: number }, end: { x: number; y: number }) => {
    const midX = (start.x + end.x) / 2;
    const midY = Math.min(start.y, end.y) - 45 - Math.abs(start.x - end.x) * 0.12;
    return `M ${start.x} ${start.y} Q ${midX} ${midY} ${end.x} ${end.y}`;
  };

  return (
    <section className="py-24 relative bg-[var(--bg-secondary)] border-y border-[var(--border-subtle)] overflow-hidden transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          eyebrow="03 // Global Reach & Delivery Mesh"
          title="Delivering Software Worldwide Across"
          highlight="8 Key Global Markets"
          description="Opash Software collaborates seamlessly across international timezones with founders, venture-backed startups, and enterprise product directors."
        />

        {/* Interactive Global Network Map Visualizer */}
        <div className="relative mb-12 rounded-3xl p-6 sm:p-8 glass-panel border border-[var(--border-strong)] shadow-2xl overflow-hidden bg-[var(--bg-card)]/80">
          {/* Subtle Ambient Radial Glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[#1d4ed8]/10 rounded-full blur-[100px] pointer-events-none" />

          {/* Telemetry Header */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-4 mb-4 border-b border-[var(--border-subtle)]">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#10b981] animate-ping" />
              <span className="text-xs font-mono text-[var(--text-dim)] uppercase tracking-wider">
                LIVE TRAJECTORY // SURAT HQ ACTIVE BEACON
              </span>
            </div>
            <div className="flex items-center gap-3 text-xs font-mono">
              <span className="px-2.5 py-1 rounded-full bg-[var(--bg-main)] border border-[var(--border-subtle)] text-[var(--text-main)] flex items-center gap-1.5 font-bold">
                <Globe2 className="w-3.5 h-3.5 text-[#3b82f6]" />
                Target: {activeHub.country} ({activeHub.latency})
              </span>
            </div>
          </div>

          {/* SVG Map Canvas */}
          <div className="relative w-full aspect-[2/1] sm:aspect-[2.3/1] max-h-[380px]">
            <svg
              viewBox="0 0 1000 480"
              className="w-full h-full select-none"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Subtle World Map Grid Dots */}
              <defs>
                <pattern id="grid-dots" x="0" y="0" width="24" height="24" patternUnits="userSpaceOnUse">
                  <circle cx="2" cy="2" r="1" fill="currentColor" className="text-[var(--border-strong)] opacity-35" />
                </pattern>
                <linearGradient id="beamGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#1d4ed8" stopOpacity="0.8" />
                  <stop offset="70%" stopColor="#3b82f6" stopOpacity="1" />
                  <stop offset="100%" stopColor="#10b981" stopOpacity="0.9" />
                </linearGradient>
              </defs>

              <rect width="1000" height="480" fill="url(#grid-dots)" />

              {/* Connecting Flight/Data Arcs */}
              {hubs.slice(1).map((hub) => {
                const pathData = getCurvePath(hq.coords, hub.coords);
                const isSelected = activeHubId === hub.id;
                return (
                  <g key={hub.id}>
                    {/* Base subtle guide path */}
                    <path
                      d={pathData}
                      stroke="currentColor"
                      strokeWidth={isSelected ? "2" : "1"}
                      className={`transition-all duration-300 ${
                        isSelected ? "text-[#3b82f6] opacity-90" : "text-[var(--border-strong)] opacity-35"
                      }`}
                    />
                    {/* Flowing animated pulse dashes */}
                    <path
                      d={pathData}
                      stroke="url(#beamGradient)"
                      strokeWidth={isSelected ? "2.5" : "1.5"}
                      strokeDasharray="6,8"
                      className="animate-flow-dash"
                      strokeOpacity={isSelected ? 1 : 0.6}
                    />
                  </g>
                );
              })}

              {/* Hub Nodes */}
              {hubs.map((hub) => {
                const isHQ = hub.id === "in";
                const isSelected = activeHubId === hub.id;
                return (
                  <g
                    key={hub.id}
                    className="cursor-pointer group"
                    onClick={() => {
                      soundEffects.click();
                      setActiveHubId(hub.id);
                    }}
                    onMouseEnter={() => {
                      soundEffects.hover();
                      setActiveHubId(hub.id);
                    }}
                  >
                    {/* Outer pulse wave */}
                    <circle
                      cx={hub.coords.x}
                      cy={hub.coords.y}
                      r={isHQ ? 16 : isSelected ? 12 : 8}
                      fill={isHQ ? "rgba(16, 185, 129, 0.2)" : "rgba(29, 78, 216, 0.2)"}
                      className={isHQ || isSelected ? "animate-ping" : ""}
                    />
                    {/* Intermediate ring */}
                    <circle
                      cx={hub.coords.x}
                      cy={hub.coords.y}
                      r={isHQ ? 8 : isSelected ? 6 : 4}
                      fill={isHQ ? "#10b981" : isSelected ? "#3b82f6" : "#64748b"}
                      stroke="#ffffff"
                      strokeWidth="1.5"
                    />
                    {/* City label on SVG */}
                    <text
                      x={hub.coords.x}
                      y={hub.coords.y + (isHQ ? 20 : 16)}
                      textAnchor="middle"
                      className={`text-[11px] font-mono font-bold tracking-tight select-none transition-all duration-200 ${
                        isHQ
                          ? "fill-[#10b981]"
                          : isSelected
                          ? "fill-[#3b82f6]"
                          : "fill-[var(--text-dim)]"
                      }`}
                    >
                      {hub.city.split(",")[0].split(" ")[0]}
                    </text>
                  </g>
                );
              })}
            </svg>
          </div>
        </div>

        {/* 8 Global Market Interactive Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {hubs.map((hub) => {
            const isSelected = activeHubId === hub.id;
            return (
              <Card
                key={hub.id}
                onClick={() => {
                  soundEffects.click();
                  setActiveHubId(hub.id);
                }}
                onMouseEnter={() => {
                  soundEffects.hover();
                  setActiveHubId(hub.id);
                }}
                className={`p-5 flex flex-col justify-between group cursor-pointer transition-all duration-300 relative overflow-hidden ${
                  isSelected
                    ? "border-[#1d4ed8] bg-[var(--primary)]/5 shadow-xl shadow-blue-600/10 -translate-y-1"
                    : "hover:border-[var(--primary)]/60 hover:-translate-y-0.5"
                }`}
              >
                {/* Active Hub Minimal Green Sheen */}
                {isSelected && (
                  <span className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-[#1d4ed8] via-[#3b82f6] to-[#10b981]" />
                )}

                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-3xl p-1">{hub.flag}</span>
                    <Badge variant={isSelected ? "solid" : "glass"} size="sm">
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

                <div className="mt-4 pt-3 border-t border-[var(--border-subtle)] text-[11px] text-[var(--text-muted)] flex items-center justify-between">
                  <span className="flex items-center gap-1 text-[var(--accent)] font-semibold">
                    <Activity className="w-3.5 h-3.5" />
                    {hub.latency}
                  </span>
                  <span className="text-[10px] text-[var(--text-dim)] font-mono">{hub.role.split(" ")[0]}</span>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
