"use client";

import React, { useState } from "react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Globe2, MapPin, Sparkles, Activity, ShieldCheck, Compass, Radio, ArrowRight, Zap, RefreshCw, Eye } from "lucide-react";
import { soundEffects } from "@/lib/soundEffects";
import { BorderBeam } from "@/components/common/BorderBeam";
import { GlobeAnalytics, AnalyticsMarker, AnalyticsArc } from "@/components/ui/cobe-globe-analytics";
import { useTheme } from "@/context/ThemeContext";

interface GlobalHub {
  id: string;
  country: string;
  flag: string;
  role: string;
  city: string;
  projects: string;
  latency: string;
  coords: { x: number; y: number }; // Relative SVG coordinates (viewBox 0 0 1000 480)
  geo: [number, number]; // [lat, lng]
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
    coords: { x: 670, y: 245 },
    geo: [21.17, 72.83]
  },
  { 
    id: "us", 
    country: "United States", 
    flag: "🇺🇸", 
    role: "Enterprise Client Partnerships", 
    city: "New York, California, Texas", 
    projects: "25+ Deployments", 
    latency: "118ms Edge", 
    coords: { x: 250, y: 175 },
    geo: [40.71, -74.01]
  },
  { 
    id: "uk", 
    country: "United Kingdom", 
    flag: "🇬🇧", 
    role: "European Delivery Base", 
    city: "London & Ecosystems", 
    projects: "15+ Deployments", 
    latency: "86ms Edge", 
    coords: { x: 480, y: 145 },
    geo: [51.51, -0.13]
  },
  { 
    id: "ae", 
    country: "United Arab Emirates", 
    flag: "🇦🇪", 
    role: "MENA FinTech Engagements", 
    city: "Dubai & Abu Dhabi", 
    projects: "10+ Projects", 
    latency: "28ms Edge", 
    coords: { x: 590, y: 220 },
    geo: [25.20, 55.27]
  },
  { 
    id: "ca", 
    country: "Canada", 
    flag: "🇨🇦", 
    role: "Scaleup & HealthTech Hub", 
    city: "Toronto & Vancouver", 
    projects: "12+ Projects", 
    latency: "125ms Edge", 
    coords: { x: 225, y: 140 },
    geo: [43.65, -79.38]
  },
  { 
    id: "au", 
    country: "Australia", 
    flag: "🇦🇺", 
    role: "Oceania Business Solutions", 
    city: "Sydney & Melbourne", 
    projects: "8+ Projects", 
    latency: "135ms Edge", 
    coords: { x: 880, y: 380 },
    geo: [-33.87, 151.21]
  },
  { 
    id: "eu", 
    country: "Europe", 
    flag: "🇪🇺", 
    role: "Regulated InsureTech & SaaS", 
    city: "Frankfurt, Amsterdam, Paris", 
    projects: "14+ Projects", 
    latency: "92ms Edge", 
    coords: { x: 515, y: 155 },
    geo: [50.11, 8.68]
  },
  { 
    id: "br", 
    country: "Brazil", 
    flag: "🇧🇷", 
    role: "LATAM E-Commerce & Web", 
    city: "São Paulo & Rio", 
    projects: "6+ Projects", 
    latency: "185ms Edge", 
    coords: { x: 345, y: 360 },
    geo: [-23.55, -46.63]
  },
];

export function GlobalReachSection() {
  const [activeHubId, setActiveHubId] = useState<string>("us");
  const [viewMode, setViewMode] = useState<"3d" | "2d">("3d");
  const { mode } = useTheme();

  const isDark = mode === "dark" || mode === "midnight";
  const hq = hubs[0]; // Surat HQ
  const activeHub = hubs.find((h) => h.id === activeHubId) || hubs[1];

  // SVG curve helper
  const getCurvePath = (start: { x: number; y: number }, end: { x: number; y: number }) => {
    const midX = (start.x + end.x) / 2;
    const midY = Math.min(start.y, end.y) - 45 - Math.abs(start.x - end.x) * 0.12;
    return `M ${start.x} ${start.y} Q ${midX} ${midY} ${end.x} ${end.y}`;
  };

  // Convert hubs to Globe markers
  const globeMarkers: AnalyticsMarker[] = hubs.map((h, i) => ({
    id: `vis-${h.id}`,
    location: h.geo,
    visitors: h.id === "in" ? 1450 : 250 + i * 85,
    trend: h.id === "in" ? 24 : (i % 2 === 0 ? 12 : -5),
    label: h.id === "in" ? "Surat HQ" : h.country.split(" ")[0],
  }));

  // Direct arcs from Surat HQ to other nodes
  const globeArcs: AnalyticsArc[] = hubs.slice(1).map((h) => ({
    from: hq.geo,
    to: h.geo,
  }));

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
          {/* 21st.dev Border Beam Perimeter Accent */}
          <BorderBeam size={320} duration={14} colorFrom="#1d4ed8" colorTo="#10b981" />

          {/* Subtle Ambient Radial Glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[#1d4ed8]/10 rounded-full blur-[100px] pointer-events-none" />

          {/* Telemetry Header */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-4 mb-6 border-b border-[var(--border-subtle)] relative z-20">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#10b981] animate-ping" />
              <span className="text-xs font-mono text-[var(--text-dim)] uppercase tracking-wider">
                LIVE TRAJECTORY // SURAT HQ ACTIVE BEACON
              </span>
            </div>

            <div className="flex flex-wrap items-center gap-2 sm:gap-3 text-xs font-mono">
              {/* Target Hub readout */}
              <span className="px-3 py-1.5 rounded-full bg-[var(--bg-main)] border border-[var(--border-subtle)] text-[var(--text-main)] flex items-center gap-1.5 font-bold shadow-sm">
                <Globe2 className="w-3.5 h-3.5 text-[#3b82f6]" />
                Target: {activeHub.country} ({activeHub.latency})
              </span>

              {/* View Switcher: 3D Globe / 2D Mesh */}
              <div className="flex items-center p-0.5 rounded-full bg-[var(--bg-main)] border border-[var(--border-subtle)]">
                <button
                  type="button"
                  onClick={() => {
                    soundEffects.click();
                    setViewMode("3d");
                  }}
                  className={`px-3 py-1 text-[11px] font-semibold rounded-full transition-all duration-200 flex items-center gap-1.5 ${
                    viewMode === "3d"
                      ? "bg-[#1d4ed8] text-white shadow-sm"
                      : "text-[var(--text-dim)] hover:text-[var(--text-main)]"
                  }`}
                >
                  <Compass className="w-3 h-3" />
                  3D Globe
                </button>
                <button
                  type="button"
                  onClick={() => {
                    soundEffects.click();
                    setViewMode("2d");
                  }}
                  className={`px-3 py-1 text-[11px] font-semibold rounded-full transition-all duration-200 flex items-center gap-1.5 ${
                    viewMode === "2d"
                      ? "bg-[#1d4ed8] text-white shadow-sm"
                      : "text-[var(--text-dim)] hover:text-[var(--text-main)]"
                  }`}
                >
                  <Eye className="w-3 h-3" />
                  2D Mesh
                </button>
              </div>
            </div>
          </div>

          {/* Main Visualizer Container */}
          {viewMode === "3d" ? (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center py-2 relative z-10">
              {/* Left/Center: 3D Cobe Globe */}
              <div className="lg:col-span-7 flex flex-col items-center justify-center">
                <div className="w-full max-w-[420px] aspect-square relative">
                  <GlobeAnalytics
                    speed={0.0025}
                    dark={isDark ? 1 : 0}
                    markers={globeMarkers}
                    arcs={globeArcs}
                    activeLocation={activeHub.geo}
                    className="w-full h-full"
                  />
                  {/* Subtle interaction tip */}
                  <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 text-center pointer-events-none whitespace-nowrap">
                    <span className="text-[10px] font-mono text-[var(--text-dim)] bg-[var(--bg-main)]/90 backdrop-blur-md px-3 py-1 rounded-full border border-[var(--border-subtle)] shadow-sm">
                      Drag globe to rotate • Hover markers to inspect traffic
                    </span>
                  </div>
                </div>
              </div>

              {/* Right: Live Trajectory Telemetry Console */}
              <div className="lg:col-span-5 flex flex-col gap-4">
                <div className="p-5 rounded-2xl bg-[var(--bg-main)]/70 border border-[var(--border-subtle)] backdrop-blur-md shadow-sm">
                  <div className="flex items-center justify-between pb-3 border-b border-[var(--border-subtle)] text-xs font-mono">
                    <span className="text-[var(--text-dim)] flex items-center gap-1.5">
                      <Radio className="w-3.5 h-3.5 text-[#10b981] animate-pulse" />
                      ACTIVE ROUTE TELEMETRY
                    </span>
                    <span className="text-[#10b981] font-bold">ONLINE</span>
                  </div>

                  <div className="mt-4 space-y-3">
                    <div className="flex items-center justify-between text-xs">
                      <span className="text-[var(--text-dim)]">Origin:</span>
                      <span className="font-bold text-[var(--text-main)] font-mono">
                        Surat HQ [21.17° N, 72.83° E]
                      </span>
                    </div>

                    <div className="flex items-center justify-between text-xs">
                      <span className="text-[var(--text-dim)]">Destination:</span>
                      <span className="font-bold text-[#3b82f6] font-mono flex items-center gap-1">
                        {activeHub.flag} {activeHub.country}
                      </span>
                    </div>

                    <div className="flex items-center justify-between text-xs">
                      <span className="text-[var(--text-dim)]">Regional Focus:</span>
                      <span className="font-semibold text-[var(--text-main)] text-right">
                        {activeHub.city}
                      </span>
                    </div>

                    <div className="flex items-center justify-between text-xs">
                      <span className="text-[var(--text-dim)]">Round-trip Latency:</span>
                      <span className="font-bold text-[#10b981] font-mono flex items-center gap-1">
                        <Activity className="w-3.5 h-3.5" />
                        {activeHub.latency}
                      </span>
                    </div>

                    <div className="flex items-center justify-between text-xs">
                      <span className="text-[var(--text-dim)]">Dedicated Bandwidth:</span>
                      <span className="font-mono text-[var(--text-main)]">
                        {activeHub.projects}
                      </span>
                    </div>
                  </div>

                  {/* Packet Tracer Indicator */}
                  <div className="mt-4 pt-3 border-t border-[var(--border-subtle)]">
                    <div className="text-[11px] font-mono text-[var(--text-dim)] flex items-center gap-1.5 mb-2">
                      <Zap className="w-3 h-3 text-[#3b82f6]" />
                      Mesh Protocol: TLS 1.3 • WireGuard Mesh
                    </div>
                    <div className="w-full bg-[var(--bg-secondary)] h-1.5 rounded-full overflow-hidden">
                      <div className="h-full bg-gradient-to-r from-[#1d4ed8] via-[#3b82f6] to-[#10b981] w-full animate-flow-dash" />
                    </div>
                  </div>
                </div>

                {/* Quick Switch Pills */}
                <div className="p-3.5 rounded-2xl bg-[var(--bg-main)]/50 border border-[var(--border-subtle)]">
                  <span className="text-[10px] font-mono uppercase text-[var(--text-dim)] tracking-wider block mb-2">
                    Quick Market Focus:
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {hubs.map((h) => (
                      <button
                        key={h.id}
                        type="button"
                        onClick={() => {
                          soundEffects.click();
                          setActiveHubId(h.id);
                        }}
                        className={`px-2.5 py-1 text-xs rounded-lg font-medium transition-all duration-200 flex items-center gap-1 ${
                          activeHubId === h.id
                            ? "bg-[#1d4ed8] text-white shadow-sm font-semibold"
                            : "bg-[var(--bg-secondary)] text-[var(--text-muted)] hover:text-[var(--text-main)] hover:bg-[var(--primary)]/10"
                        }`}
                      >
                        <span>{h.flag}</span>
                        <span>{h.id === "in" ? "India" : h.country.split(" ")[0]}</span>
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ) : (
            /* 2D SVG Map Canvas */
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
                      <path
                        d={pathData}
                        stroke="currentColor"
                        strokeWidth={isSelected ? "2" : "1"}
                        className={`transition-all duration-300 ${
                          isSelected ? "text-[#3b82f6] opacity-90" : "text-[var(--border-strong)] opacity-35"
                        }`}
                      />
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
                      <circle
                        cx={hub.coords.x}
                        cy={hub.coords.y}
                        r={isHQ ? 16 : isSelected ? 12 : 8}
                        fill={isHQ ? "rgba(16, 185, 129, 0.2)" : "rgba(29, 78, 216, 0.2)"}
                        className={isHQ || isSelected ? "animate-ping" : ""}
                      />
                      <circle
                        cx={hub.coords.x}
                        cy={hub.coords.y}
                        r={isHQ ? 8 : isSelected ? 6 : 4}
                        fill={isHQ ? "#10b981" : isSelected ? "#3b82f6" : "#64748b"}
                        stroke="#ffffff"
                        strokeWidth="1.5"
                      />
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
          )}
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
                    <Badge variant={isSelected ? "primary" : "glass"} size="sm">
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
