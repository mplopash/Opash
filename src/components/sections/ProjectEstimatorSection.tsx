"use client";

import React, { useState } from "react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { 
  Calculator, 
  Sparkles, 
  Check, 
  ArrowRight, 
  Clock, 
  Users, 
  Layers, 
  CheckCircle2,
  CalendarCheck,
  ShieldCheck,
  Zap
} from "lucide-react";
import { SpotlightCard } from "@/components/common/SpotlightCard";
import { BorderBeam } from "@/components/common/BorderBeam";
import { soundEffects } from "@/lib/soundEffects";

interface ProjectEstimatorSectionProps {
  onEstimateSubmit: (details: {
    platform: string;
    stage: string;
    timeline: string;
    addons: string[];
    approxCost: string;
    duration: string;
  }) => void;
}

export function ProjectEstimatorSection({ onEstimateSubmit }: ProjectEstimatorSectionProps) {
  const [platform, setPlatform] = useState<string>("Web & Next.js SaaS");
  const [stage, setStage] = useState<string>("Prototype / Design Ready");
  const [timeline, setTimeline] = useState<string>("8-12 Weeks (Standard)");
  const [selectedAddons, setSelectedAddons] = useState<string[]>([
    "Authentication & Role-Based Permissions",
    "Stripe / Payment Gateway",
  ]);

  const platforms = [
    { name: "Web & Next.js SaaS", baseWeeks: 8, baseCost: 7500 },
    { name: "Mobile App (iOS & Android)", baseWeeks: 10, baseCost: 9500 },
    { name: "Custom Enterprise Software", baseWeeks: 12, baseCost: 12000 },
    { name: "AI Agent & Automation Platform", baseWeeks: 6, baseCost: 6500 },
    { name: "Dedicated Full-Time Dev Team", baseWeeks: 4, baseCost: 4500 },
  ];

  const stages = [
    { name: "Fresh Idea & Wireframing", mult: 1.15 },
    { name: "Prototype / Design Ready", mult: 1.0 },
    { name: "Refactor / Expand Existing App", mult: 1.1 },
    { name: "Team Scale-Up / Augmentation", mult: 0.95 },
  ];

  const timelines = [
    { name: "Rush (4-6 Weeks)", mult: 1.25 },
    { name: "8-12 Weeks (Standard)", mult: 1.0 },
    { name: "3-5 Months (Phased Enterprise)", mult: 1.1 },
  ];

  const addonsList = [
    { id: "auth", name: "Authentication & Role-Based Permissions", addWeeks: 1, cost: 900 },
    { id: "payments", name: "Stripe / Payment Gateway", addWeeks: 1, cost: 1100 },
    { id: "ai", name: "Custom AI & LLM Embeddings / RAG", addWeeks: 2, cost: 2200 },
    { id: "chat", name: "Real-Time Notifications & WebSockets", addWeeks: 1, cost: 950 },
    { id: "cms", name: "Headless Content Management (CMS)", addWeeks: 1, cost: 800 },
    { id: "security", name: "SOC-2 / HIPAA Compliance Hardening", addWeeks: 2, cost: 1800 },
  ];

  const toggleAddon = (name: string) => {
    soundEffects.hover();
    setSelectedAddons((prev) =>
      prev.includes(name) ? prev.filter((item) => item !== name) : [...prev, name]
    );
  };

  // Calculate dynamic outputs
  const currentPlatform = platforms.find((p) => p.name === platform) || platforms[0];
  const currentStage = stages.find((s) => s.name === stage) || stages[1];
  const currentTimeline = timelines.find((t) => t.name === timeline) || timelines[1];

  const addonWeeks = selectedAddons.reduce((sum, name) => {
    const found = addonsList.find((a) => a.name === name);
    return sum + (found?.addWeeks || 0);
  }, 0);

  const addonCost = selectedAddons.reduce((sum, name) => {
    const found = addonsList.find((a) => a.name === name);
    return sum + (found?.cost || 0);
  }, 0);

  const totalWeeks = Math.round((currentPlatform.baseWeeks + addonWeeks) * currentStage.mult);
  const totalCost = Math.round(
    (currentPlatform.baseCost + addonCost) * currentStage.mult * currentTimeline.mult
  );

  const formattedCost = `$${(totalCost * 0.9).toLocaleString()} - $${(totalCost * 1.15).toLocaleString()}`;
  const formattedDuration = `${totalWeeks} - ${totalWeeks + 2} Weeks`;

  const handleSubmit = () => {
    soundEffects.success();
    onEstimateSubmit({
      platform,
      stage,
      timeline,
      addons: selectedAddons,
      approxCost: formattedCost,
      duration: formattedDuration,
    });
  };

  return (
    <section id="estimator" className="py-24 relative bg-[var(--bg-main)] transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="06 // Interactive Budget Calculator"
          title="Estimate Your Project Scope"
          highlight="in Under 60 Seconds"
          description="Transparent, honest pricing based on our 70+ delivered software systems. Real-time engineering breakdown with zero hidden surprises."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Controls Column */}
          <div className="lg:col-span-7 space-y-8">
            {/* Step 1: Platform */}
            <div className="space-y-3">
              <label className="text-xs font-bold uppercase tracking-wider text-[var(--text-dim)] flex items-center gap-2">
                <span className="w-5 h-5 rounded-full bg-[var(--primary)] text-white text-[11px] font-bold flex items-center justify-center">
                  1
                </span>
                Target Platform / Application Type
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {platforms.map((p) => (
                  <button
                    key={p.name}
                    onClick={() => {
                      soundEffects.hover();
                      setPlatform(p.name);
                    }}
                    className={`p-3.5 rounded-2xl border text-left text-xs font-semibold transition-all cursor-pointer ${
                      platform === p.name
                        ? "border-[var(--primary)] bg-[var(--primary)]/10 text-[var(--text-main)] shadow-sm font-bold ring-1 ring-[var(--primary)]/30"
                        : "border-[var(--border-subtle)] bg-[var(--bg-card)] text-[var(--text-muted)] hover:text-[var(--text-main)] hover:bg-[var(--border-subtle)]"
                    }`}
                  >
                    <div className="font-bold text-sm text-[var(--text-main)]">{p.name}</div>
                    <div className="text-[11px] text-[var(--text-dim)] mt-0.5">
                      Base Sprint: ~{p.baseWeeks} weeks
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Step 2: Stage */}
            <div className="space-y-3">
              <label className="text-xs font-bold uppercase tracking-wider text-[var(--text-dim)] flex items-center gap-2">
                <span className="w-5 h-5 rounded-full bg-[var(--primary)] text-white text-[11px] font-bold flex items-center justify-center">
                  2
                </span>
                Current Development Stage
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {stages.map((s) => (
                  <button
                    key={s.name}
                    onClick={() => {
                      soundEffects.hover();
                      setStage(s.name);
                    }}
                    className={`p-3 rounded-xl border text-left text-xs font-medium transition-all cursor-pointer ${
                      stage === s.name
                        ? "border-[var(--primary)] bg-[var(--primary)]/10 text-[var(--text-main)] font-bold ring-1 ring-[var(--primary)]/30"
                        : "border-[var(--border-subtle)] bg-[var(--bg-card)] text-[var(--text-muted)] hover:bg-[var(--border-subtle)]"
                    }`}
                  >
                    {s.name}
                  </button>
                ))}
              </div>
            </div>

            {/* Step 3: Add-on Capabilities */}
            <div className="space-y-3">
              <label className="text-xs font-bold uppercase tracking-wider text-[var(--text-dim)] flex items-center gap-2">
                <span className="w-5 h-5 rounded-full bg-[var(--primary)] text-white text-[11px] font-bold flex items-center justify-center">
                  3
                </span>
                Key Functional Modules & Integrations
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {addonsList.map((addon) => {
                  const isChecked = selectedAddons.includes(addon.name);
                  return (
                    <button
                      key={addon.id}
                      onClick={() => toggleAddon(addon.name)}
                      className={`flex items-start gap-2.5 p-3 rounded-xl border text-left text-xs transition-all cursor-pointer ${
                        isChecked
                          ? "border-[var(--accent)] bg-[var(--accent)]/10 text-[var(--text-main)] font-semibold ring-1 ring-[var(--accent)]/30"
                          : "border-[var(--border-subtle)] bg-[var(--bg-card)] text-[var(--text-muted)] hover:bg-[var(--border-subtle)]"
                      }`}
                    >
                      <div
                        className={`w-4 h-4 rounded mt-0.5 flex items-center justify-center border shrink-0 ${
                          isChecked
                            ? "bg-[var(--accent)] border-[var(--accent)] text-white"
                            : "border-[var(--border-strong)] bg-transparent"
                        }`}
                      >
                        {isChecked && <Check className="w-3 h-3" />}
                      </div>
                      <div>
                        <div className="font-medium text-[var(--text-main)]">{addon.name}</div>
                        <div className="text-[10px] text-[var(--text-dim)]">+~{addon.addWeeks} sprint week</div>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Real-time Summary Card with 3D Spotlight */}
          <div className="lg:col-span-5 sticky top-24">
            <SpotlightCard className="p-6 sm:p-8 rounded-3xl glass-panel border border-[var(--border-strong)] shadow-2xl relative overflow-hidden">
              <BorderBeam size={260} duration={14} colorFrom="#3b82f6" colorTo="#10b981" />
              <div className="flex items-center justify-between pb-4 border-b border-[var(--border-subtle)]">
                <div className="flex items-center gap-2">
                  <Calculator className="w-5 h-5 text-[var(--primary)]" />
                  <span className="font-bold text-base text-[var(--text-main)]">
                    Project Estimate Matrix
                  </span>
                </div>
                <Badge variant="glass" size="sm">
                  LIVE CALCULATION
                </Badge>
              </div>

              {/* Price & Duration Output */}
              <div className="py-6 space-y-4">
                <div className="p-4 rounded-2xl bg-[var(--bg-main)]/90 border border-[var(--border-subtle)]">
                  <div className="text-xs text-[var(--text-dim)] uppercase tracking-wider font-semibold">
                    Estimated Investment Range
                  </div>
                  <div className="text-3xl sm:text-4xl font-extrabold text-[var(--text-main)] mt-1 tracking-tight">
                    <span className="gradient-text">{formattedCost}</span>
                  </div>
                  <div className="text-[11px] text-[var(--text-dim)] mt-1">
                    Fixed-bid or agile sprint milestones available
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div className="p-3.5 rounded-xl bg-[var(--bg-main)]/70 border border-[var(--border-subtle)]">
                    <div className="flex items-center gap-1.5 text-xs text-[var(--text-dim)] font-medium">
                      <Clock className="w-3.5 h-3.5 text-[var(--accent)]" />
                      Duration
                    </div>
                    <div className="text-sm font-bold text-[var(--text-main)] mt-1">
                      {formattedDuration}
                    </div>
                  </div>
                  <div className="p-3.5 rounded-xl bg-[var(--bg-main)]/70 border border-[var(--border-subtle)]">
                    <div className="flex items-center gap-1.5 text-xs text-[var(--text-dim)] font-medium">
                      <Users className="w-3.5 h-3.5 text-emerald-500" />
                      Team Allocation
                    </div>
                    <div className="text-sm font-bold text-[var(--text-main)] mt-1">
                      2-4 Engineers + PM
                    </div>
                  </div>
                </div>

                <div className="space-y-2 pt-2 text-xs text-[var(--text-muted)] font-medium">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                    <span>Includes Complete UI/UX Wireframing & Design System</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                    <span>Strict NDA & 100% IP/Code Ownership on Handover</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                    <span>60 Days Free Post-Launch Bug Warranty & Support</span>
                  </div>
                </div>
              </div>

              {/* Action Button */}
              <Button
                variant="gradient"
                size="lg"
                className="w-full justify-center text-sm font-bold shadow-lg"
                onClick={handleSubmit}
                rightIcon={<ArrowRight className="w-4 h-4" />}
              >
                Confirm Scope & Book Technical Call
              </Button>
            </SpotlightCard>
          </div>
        </div>
      </div>
    </section>
  );
}
