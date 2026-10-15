"use client";

import React, { useState, useMemo } from "react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Globe2, Activity, Radio, Zap } from "lucide-react";
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
  geo: [number, number]; // [latitude, longitude]
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
    geo: [-23.55, -46.63]
  },
];

export function GlobalReachSection() {
  // Default to null (show ALL 8 markets and all radiating trajectories from Opash India)
  const [activeHubId, setActiveHubId] = useState<string | null>(null);
  const { mode } = useTheme();

  const isDark = mode === "dark" || mode === "midnight";
  const hq = hubs[0]; // Surat HQ
  const activeHub = hubs.find((h) => h.id === activeHubId) || null;

  // Dynamic markers: Default show ALL 8 hubs; when selected, show Surat HQ + clicked country!
  const globeMarkers: AnalyticsMarker[] = useMemo(() => {
    if (!activeHubId || !activeHub) {
      // Default: Show all 8 hubs across the globe
      return hubs.map((h) => ({
        id: `vis-${h.id}`,
        location: h.geo,
        visitors: h.id === "in" ? 1557 : (parseInt(h.projects.replace(/\D/g, "")) * 35 || 650),
        trend: h.id === "in" ? 24 : 15,
        label: h.id === "in" ? "Surat HQ" : h.country.split(" ")[0].toUpperCase(),
      }));
    }

    const isIndiaHQ = activeHub.id === "in";
    if (isIndiaHQ) {
      return [
        {
          id: "vis-in",
          location: hq.geo,
          visitors: 1557,
          trend: 24,
          label: "Surat HQ",
        },
      ];
    }

    return [
      {
        id: "vis-in",
        location: hq.geo,
        visitors: 1557,
        trend: 19,
        label: "Surat HQ",
      },
      {
        id: `vis-${activeHub.id}`,
        location: activeHub.geo,
        visitors: parseInt(activeHub.projects.replace(/\D/g, "")) * 35 || 650,
        trend: 12,
        label: activeHub.country.split(" ")[0].toUpperCase(),
      },
    ];
  }, [activeHubId, activeHub, hq.geo]);

  // Dynamic arcs: Default show trajectories from Surat HQ to ALL countries!
  // When selected, ONLY draw the trajectory from Surat HQ to that selected country!
  const globeArcs: AnalyticsArc[] = useMemo(() => {
    if (!activeHubId || !activeHub) {
      // Default: All trajectories radiating from Opash India HQ
      return hubs
        .filter((h) => h.id !== "in")
        .map((h) => ({
          from: hq.geo,
          to: h.geo,
        }));
    }

    if (activeHub.id === "in") return [];

    return [
      {
        from: hq.geo,
        to: activeHub.geo,
      },
    ];
  }, [activeHubId, activeHub, hq.geo]);

  return (
    <section className="py-14 sm:py-20 relative bg-[var(--bg-secondary)] overflow-hidden transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          eyebrow="06 // Global Delivery & Infrastructure Mesh"
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
                {activeHub ? `LIVE TRAJECTORY // SURAT HQ -> ${activeHub.country.toUpperCase()}` : "LIVE TRAJECTORY // SURAT HQ ACTIVE BEACON (ALL ROUTES)"}
              </span>
            </div>

            <div className="flex items-center gap-2.5 text-xs font-mono">
              {activeHub && (
                <button
                  onClick={() => {
                    soundEffects.click();
                    setActiveHubId(null);
                  }}
                  className="px-2.5 py-1 rounded-full bg-[var(--primary)]/10 text-[var(--primary-light)] hover:bg-[var(--primary)]/20 border border-[var(--primary)]/30 font-semibold cursor-pointer transition-colors"
                >
                  Reset to All
                </button>
              )}
              <span className="px-3.5 py-1.5 rounded-full bg-[var(--bg-main)] border border-[var(--border-subtle)] text-[var(--text-main)] flex items-center gap-1.5 font-bold shadow-sm whitespace-nowrap">
                <Globe2 className="w-3.5 h-3.5 text-[#3b82f6]" />
                {activeHub ? `Target: ${activeHub.country} (${activeHub.latency})` : "Target: Worldwide Mesh (All 8 Markets)"}
              </span>
            </div>
          </div>

          {/* 3D Cobe Globe Visualizer Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center py-2 relative z-10">
            {/* 3D Cobe Globe */}
            <div className="lg:col-span-7 flex flex-col items-center justify-center">
              <div className="w-full max-w-[420px] aspect-square relative">
                <GlobeAnalytics
                  speed={0.0025}
                  dark={isDark ? 1 : 0}
                  markers={globeMarkers}
                  arcs={globeArcs}
                  activeLocation={activeHub ? activeHub.geo : hq.geo}
                  className="w-full h-full"
                />
                {/* Subtle interaction tip */}
                <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 text-center pointer-events-none whitespace-nowrap">
                  <span className="text-[10px] font-mono text-[var(--text-dim)] bg-[var(--bg-main)]/90 backdrop-blur-md px-3 py-1 rounded-full border border-[var(--border-subtle)] shadow-sm">
                    Drag globe to rotate • Click market cards below to isolate route
                  </span>
                </div>
              </div>
            </div>

            {/* Live Trajectory Telemetry Console */}
            <div className="lg:col-span-5 flex flex-col gap-4">
              <div className="p-5 sm:p-6 rounded-2xl bg-[var(--bg-main)]/80 border border-[var(--border-subtle)] backdrop-blur-md shadow-sm">
                <div className="flex items-center justify-between pb-3.5 border-b border-[var(--border-subtle)] text-xs font-mono">
                  <span className="text-[var(--text-dim)] flex items-center gap-1.5">
                    <Radio className="w-3.5 h-3.5 text-[#10b981] animate-pulse" />
                    ACTIVE ROUTE TELEMETRY
                  </span>
                  <span className="text-[#10b981] font-bold">ONLINE</span>
                </div>

                <div className="mt-4 space-y-3.5">
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-[var(--text-dim)] font-medium">Origin:</span>
                    <span className="font-bold text-[var(--text-main)] font-mono">
                      Surat HQ [21.17° N, 72.83° E]
                    </span>
                  </div>

                  <div className="flex items-center justify-between text-xs">
                    <span className="text-[var(--text-dim)] font-medium">Destination:</span>
                    <span className="font-bold text-[#3b82f6] font-mono flex items-center gap-1">
                      {activeHub ? `${activeHub.flag} ${activeHub.country}` : "🌐 Worldwide (8 Active Hubs)"}
                    </span>
                  </div>

                  <div className="flex items-center justify-between text-xs">
                    <span className="text-[var(--text-dim)] font-medium">Regional Coverage:</span>
                    <span className="font-semibold text-[var(--text-main)] text-right">
                      {activeHub ? activeHub.city : "North America, Europe, MENA, APAC, LATAM"}
                    </span>
                  </div>

                  <div className="flex items-center justify-between text-xs">
                    <span className="text-[var(--text-dim)] font-medium">Round-trip Latency:</span>
                    <span className="font-bold text-[#10b981] font-mono flex items-center gap-1">
                      <Activity className="w-3.5 h-3.5" />
                      {activeHub ? activeHub.latency : "< 5ms Core to Edge"}
                    </span>
                  </div>

                  <div className="flex items-center justify-between text-xs">
                    <span className="text-[var(--text-dim)] font-medium">Dedicated Capacity:</span>
                    <span className="font-mono text-[var(--text-main)] font-semibold">
                      {activeHub ? activeHub.projects : "50+ Devs Active"}
                    </span>
                  </div>
                </div>

                {/* Packet Tracer Indicator */}
                <div className="mt-5 pt-4 border-t border-[var(--border-subtle)]">
                  <div className="text-[11px] font-mono text-[var(--text-dim)] flex items-center justify-between mb-2">
                    <span className="flex items-center gap-1.5">
                      <Zap className="w-3 h-3 text-[#3b82f6]" />
                      Mesh Protocol: TLS 1.3
                    </span>
                    <span className="text-[#10b981] font-semibold text-[10px]">WireGuard Encrypted</span>
                  </div>
                  <div className="w-full bg-[var(--bg-secondary)] h-1.5 rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-[#1d4ed8] via-[#3b82f6] to-[#10b981] w-full animate-flow-dash" />
                  </div>
                </div>
              </div>
            </div>
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
                  setActiveHubId((prev) => (prev === hub.id ? null : hub.id));
                }}
                onMouseEnter={() => {
                  soundEffects.hover();
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
