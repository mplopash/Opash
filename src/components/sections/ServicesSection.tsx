"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { 
  Code, 
  Globe, 
  Smartphone, 
  Bot, 
  Cloud, 
  Network, 
  CheckCheck, 
  UserCheck,
  ArrowRight,
  ArrowLeft,
  CheckCircle,
  Sparkles,
  SlidersHorizontal,
  LayoutGrid,
  ChevronRight,
  Hand
} from "lucide-react";
import { SpotlightCard } from "@/components/common/SpotlightCard";
import { soundEffects } from "@/lib/soundEffects";
import { useTheme } from "@/context/ThemeContext";

interface ServicesSectionProps {
  onSelectService: (serviceName: string) => void;
}

export function ServicesSection({ onSelectService }: ServicesSectionProps) {
  const { mode } = useTheme();
  const isLight = mode === "light";

  const [activeCategory, setActiveCategory] = useState<"all" | "engineering" | "ai_cloud" | "teams">("all");
  const [viewMode, setViewMode] = useState<"slider" | "studio">("slider");
  const [selectedIndex, setSelectedIndex] = useState(0);

  const services = [
    {
      id: "custom-software",
      num: "01",
      category: "engineering",
      categoryLabel: "Core Software & Web",
      title: "Custom Software Development",
      shortDesc: "Scalable, mission-critical bespoke software engineered for high-concurrency enterprise workflows.",
      description:
        "We build scalable, mission-critical custom software tailored to your specific business workflows. From legacy modernization to bespoke enterprise portals, our agile delivery ensures rapid time-to-market.",
      icon: <Code className="w-5 h-5 text-[#476D9A]" />,
      features: [
        "Tailored Enterprise ERP & CRM Portals",
        "Microservices Architecture & Event Streaming",
        "Automated CI/CD & Cloud Infrastructure",
        "High-Security Role-Based Access Controls",
      ],
      technologies: ["Node.js", "Python", "Go", ".NET", "PostgreSQL"],
      sla: "Sprint Zero in 5 Days // 99.9% Uptime",
      badge: "High Velocity",
    },
    {
      id: "web-dev",
      num: "02",
      category: "engineering",
      categoryLabel: "Core Software & Web",
      title: "Web Development & Next-Gen Apps",
      shortDesc: "Sub-second Core Web Vitals, dynamic tokenized theming, and edge-rendered layouts built with Next.js 16.",
      description:
        "Modern, responsive, ultra-fast websites and web applications built with Next.js, React, and TypeScript. Optimized for SEO, user experience, and frictionless conversions.",
      icon: <Globe className="w-5 h-5 text-[#476D9A]" />,
      features: [
        "Server-Side Rendering (SSR) & Static Edge Delivery",
        "State-of-the-Art Design Systems & Tailwind CSS",
        "Headless CMS & E-Commerce Implementations",
        "Top Core Web Vitals & 99+ Lighthouse Scores",
      ],
      technologies: ["Next.js 16", "React 19", "Tailwind CSS", "TypeScript"],
      sla: "Lighthouse 95+ Guarantee // Sub-second LCP",
      badge: "99.8% Speed Index",
    },
    {
      id: "mobile-dev",
      num: "03",
      category: "engineering",
      categoryLabel: "Core Software & Web",
      title: "Mobile App Development",
      shortDesc: "Fluid physical interfaces with offline-first synchronization and 60 FPS native feel across iOS and Android.",
      description:
        "Design and engineering of high-performing mobile applications for iOS and Android. We craft immersive native and cross-platform apps with fluid gestures and offline-first data sync.",
      icon: <Smartphone className="w-5 h-5 text-[#476D9A]" />,
      features: [
        "Cross-Platform Flutter & React Native Apps",
        "Native Swift (iOS) & Kotlin (Android) Solutions",
        "Real-Time Push Notifications & In-App Payments",
        "App Store & Google Play Launch Optimization",
      ],
      technologies: ["Flutter", "React Native", "Swift", "Kotlin", "Firebase"],
      sla: "App Store Approval Guarantee // 60fps Native Feel",
      badge: "60 FPS Native",
    },
    {
      id: "ai-ml",
      num: "04",
      category: "ai_cloud",
      categoryLabel: "AI & SaaS Cloud",
      title: "AI & Machine Learning Solutions",
      shortDesc: "Agentic reasoning meshes, custom vector RAG pipelines, and private fine-tuned LLM automations.",
      description:
        "Harness the power of Artificial Intelligence to automate complex workflows, extract actionable insights, and build personalized agentic experiences.",
      icon: <Bot className="w-5 h-5 text-[#61BE99]" />,
      features: [
        "Generative AI & LLM Integration (OpenAI, Gemini)",
        "Retrieval-Augmented Generation (RAG) & Vector DBs",
        "Intelligent Process & Document Automation",
        "Predictive Modeling & Custom Neural Classifiers",
      ],
      technologies: ["Python", "LangChain", "PyTorch", "Pinecone", "Gemini API"],
      sla: "Private Zero-Retention VPC // Custom Embeddings",
      badge: "Vector RAG + LLMs",
    },
    {
      id: "saas-dev",
      num: "05",
      category: "ai_cloud",
      categoryLabel: "AI & SaaS Cloud",
      title: "SaaS Development & Multi-Tenancy",
      shortDesc: "Multi-tenant cloud platforms engineered for global scale, zero downtime, and automated recurring billing.",
      description:
        "Architecting multi-tenant Software-as-a-Service platforms engineered for global scale, zero downtime, automated billing, and rock-solid data isolation.",
      icon: <Cloud className="w-5 h-5 text-[#476D9A]" />,
      features: [
        "Multi-Tenant Database Partitioning",
        "Stripe, LemonSqueezy & Paddle Billing Engines",
        "Tenant Onboarding & User Administration",
        "SOC2 & GDPR Compliance Foundations",
      ],
      technologies: ["AWS", "Docker", "Kubernetes", "Redis", "Terraform"],
      sla: "Zero-Downtime Blue/Green Deployments",
      badge: "Global Multi-Tenant",
    },
    {
      id: "api-microservices",
      num: "06",
      category: "engineering",
      categoryLabel: "Core Software & Web",
      title: "API Integration & Microservices",
      shortDesc: "Decouple legacy monoliths into lightweight, independently deployable event-driven microservices.",
      description:
        "Seamlessly connect disparate third-party systems and decouple legacy monoliths into lightweight, independently deployable microservices.",
      icon: <Network className="w-5 h-5 text-[#61BE99]" />,
      features: [
        "RESTful & GraphQL API Design and Documentation",
        "Payment Gateway, ERP & Logistics Integrations",
        "Message Queues (Kafka, RabbitMQ, BullMQ)",
        "API Rate Limiting & Enterprise Security Tokens",
      ],
      technologies: ["GraphQL", "REST", "Kafka", "Kong", "Postman"],
      sla: "15,000+ Requests/sec Throughput",
      badge: "15k req/sec",
    },
    {
      id: "qa-testing",
      num: "07",
      category: "engineering",
      categoryLabel: "Core Software & Web",
      title: "QA & Automated Testing",
      shortDesc: "End-to-end automated testing pipelines that eliminate regressions before production deployments.",
      description:
        "Rigorous automated testing protocols that catch regressions before production. Ensuring flawless user experiences across all devices, browsers, and traffic spikes.",
      icon: <CheckCheck className="w-5 h-5 text-[#476D9A]" />,
      features: [
        "End-to-End Test Automation (Playwright, Cypress)",
        "API Performance & Load Testing (k6, JMeter)",
        "Cross-Browser & Cross-Device Compatibility",
        "Vulnerability & Security Penetration Checks",
      ],
      technologies: ["Playwright", "Jest", "Cypress", "k6", "Selenium"],
      sla: "100% Critical User Flow Coverage",
      badge: "Zero Regression",
    },
    {
      id: "hire-developers",
      num: "08",
      category: "teams",
      categoryLabel: "Dedicated Tech Teams",
      title: "Hire Dedicated Developers",
      shortDesc: "Vetted senior engineers seamlessly integrated into your sprint boards and daily standups in 48 hours.",
      description:
        "Scale your software engineering bandwidth on-demand with our thoroughly vetted senior developers. Seamlessly integrated into your daily standups and sprint boards.",
      icon: <UserCheck className="w-5 h-5 text-[#476D9A]" />,
      features: [
        "Timezone-Aligned Dedicated Full-Time Developers",
        "Flexible Engagement (Hourly, Monthly, or Milestone)",
        "Immediate Onboarding Within 48-72 Hours",
        "Zero Recruitment Fees or Infrastructure Hassles",
      ],
      technologies: ["Full-Stack", "Frontend", "Backend", "Mobile", "DevOps"],
      sla: "48-Hour Talent Matching Guarantee",
      badge: "Vetted Senior Talent",
    },
  ];

  const filteredServices = services.filter((s) => {
    if (activeCategory === "all") return true;
    return s.category === activeCategory;
  });

  // Keep selected index within filtered range on category switch
  useEffect(() => {
    setSelectedIndex(0);
  }, [activeCategory]);

  const canScrollLeft = selectedIndex > 0;
  const canScrollRight = selectedIndex < filteredServices.length - 1;

  const scrollPrev = () => {
    if (canScrollLeft) {
      soundEffects.click();
      setSelectedIndex((prev) => prev - 1);
    }
  };

  const scrollNext = () => {
    if (canScrollRight) {
      soundEffects.click();
      setSelectedIndex((prev) => prev + 1);
    }
  };

  // Keyboard navigation listener (← and → arrow keys)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (viewMode !== "slider") return;
      if (e.key === "ArrowLeft") {
        scrollPrev();
      } else if (e.key === "ArrowRight") {
        scrollNext();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedIndex, filteredServices.length, viewMode]);

  const selectedService = filteredServices[selectedIndex] || filteredServices[0];

  return (
    <section id="services" className="py-14 sm:py-20 relative bg-[var(--bg-secondary)] transition-colors duration-300 overflow-hidden font-sans">
      {/* Background ambient radial glow in #476D9A and #61BE99 */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[600px] h-[350px] bg-[radial-gradient(ellipse_at_center,rgba(71,109,154,0.12)_0%,transparent_70%)] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[450px] h-[300px] bg-[radial-gradient(circle_at_center,rgba(97,190,153,0.1)_0%,transparent_70%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8 sm:mb-10">
          <div>
            <SectionHeading
              eyebrow="03 // Core Capabilities"
              title="Engineering Solutions Tailored for"
              highlight="Maximum Velocity"
              description="High-velocity software engineering, autonomous AI workflows, and cloud architecture built for enterprise scale."
              align="left"
            />
          </div>

          {/* View Mode Switcher */}
          <div className="flex items-center gap-2 self-start md:self-end">
            <div className="p-1 rounded-2xl bg-white/70 dark:bg-[#070b14]/70 border border-slate-200 dark:border-white/10 backdrop-blur-xl shadow-sm flex items-center gap-1">
              <button
                onClick={() => {
                  soundEffects.click();
                  setViewMode("slider");
                }}
                className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                  viewMode === "slider"
                    ? "bg-[#476D9A] text-white shadow-md shadow-[#476D9A]/25"
                    : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
                }`}
                aria-label="3D Coverflow View"
              >
                <SlidersHorizontal className="w-3.5 h-3.5" />
                <span>3D Kinetic Slider</span>
              </button>

              <button
                onClick={() => {
                  soundEffects.click();
                  setViewMode("studio");
                }}
                className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                  viewMode === "studio"
                    ? "bg-[#61BE99] text-white shadow-md shadow-[#61BE99]/25"
                    : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
                }`}
                aria-label="Studio Blueprint View"
              >
                <LayoutGrid className="w-3.5 h-3.5" />
                <span>Studio Blueprint</span>
              </button>
            </div>
          </div>
        </div>

        {/* Filter Navigation Bar & Live Track Counter */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-6 mb-8 border-b border-slate-200 dark:border-white/10">
          {/* Category Tabs */}
          <div className="flex flex-wrap items-center gap-2">
            {[
              { id: "all", label: "All Capabilities (8)" },
              { id: "engineering", label: "Core Software & Web" },
              { id: "ai_cloud", label: "AI & SaaS Cloud" },
              { id: "teams", label: "Dedicated Tech Teams" },
            ].map((tab) => {
              const isSelected = activeCategory === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => {
                    soundEffects.hover();
                    setActiveCategory(tab.id as typeof activeCategory);
                  }}
                  className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                    isSelected
                      ? "bg-[#476D9A] text-white shadow-md shadow-[#476D9A]/20"
                      : "bg-white/70 dark:bg-white/[0.04] text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white border border-slate-200/80 dark:border-white/10"
                  }`}
                >
                  {tab.label}
                </button>
              );
            })}
          </div>

          {/* Slider Prev / Next Controls & Swipe Tip */}
          {viewMode === "slider" && (
            <div className="flex items-center gap-4 self-end sm:self-center">
              <span className="hidden sm:flex items-center gap-1.5 text-[11px] font-mono text-slate-400">
                <Hand className="w-3.5 h-3.5 text-[#61BE99]" />
                DRAG OR SWIPE TO BROWSE
              </span>

              {/* Exact Index Counter */}
              <div className="text-xs font-mono tracking-widest text-slate-500 dark:text-slate-400 flex items-center gap-1.5 bg-slate-100 dark:bg-white/[0.05] px-2.5 py-1.5 rounded-lg border border-slate-200 dark:border-white/10">
                <span className="text-[#61BE99] font-bold">
                  {String(selectedIndex + 1).padStart(2, "0")}
                </span>
                <span>/</span>
                <span>{String(filteredServices.length).padStart(2, "0")}</span>
              </div>

              {/* Prev Button */}
              <button
                onClick={scrollPrev}
                disabled={!canScrollLeft}
                className={`p-2.5 rounded-xl border border-slate-200 dark:border-white/10 backdrop-blur-md transition-all cursor-pointer ${
                  canScrollLeft
                    ? "bg-white dark:bg-white/[0.06] text-slate-800 dark:text-white hover:border-[#476D9A] hover:bg-[#476D9A]/10 active:scale-95"
                    : "opacity-40 cursor-not-allowed bg-slate-100 dark:bg-white/[0.02] text-slate-400"
                }`}
                aria-label="Previous card"
              >
                <ArrowLeft className="w-4 h-4" />
              </button>

              {/* Next Button */}
              <button
                onClick={scrollNext}
                disabled={!canScrollRight}
                className={`p-2.5 rounded-xl border border-slate-200 dark:border-white/10 backdrop-blur-md transition-all cursor-pointer ${
                  canScrollRight
                    ? "bg-white dark:bg-white/[0.06] text-slate-800 dark:text-white hover:border-[#61BE99] hover:bg-[#61BE99]/10 active:scale-95"
                    : "opacity-40 cursor-not-allowed bg-slate-100 dark:bg-white/[0.02] text-slate-400"
                }`}
                aria-label="Next card"
              >
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          )}
        </div>

        {/* ========================================================
            VIEW MODE 1: 3D KINETIC COVERFLOW SLIDER (With interactive swipe)
            ======================================================== */}
        {viewMode === "slider" ? (
          <div className="relative flex flex-col items-center">
            {/* 3D Perspective Stage */}
            <div className="w-full relative h-[530px] sm:h-[550px] flex items-center justify-center overflow-hidden [perspective:1400px]">
              <motion.div
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={0.25}
                onDragEnd={(_, info) => {
                  const swipeThreshold = 45;
                  if (info.offset.x < -swipeThreshold || info.velocity.x < -350) {
                    scrollNext();
                  } else if (info.offset.x > swipeThreshold || info.velocity.x > 350) {
                    scrollPrev();
                  }
                }}
                className="w-full h-full relative flex items-center justify-center cursor-grab active:cursor-grabbing select-none"
              >
                {filteredServices.map((service, idx) => {
                  const offset = idx - selectedIndex;
                  const isCenter = offset === 0;

                  // Render center card and adjacent cards (hide faraway cards for peak performance)
                  if (Math.abs(offset) > 2) return null;

                  return (
                    <motion.div
                      key={service.id}
                      animate={{
                        x: `${offset * 105}%`,
                        scale: isCenter ? 1 : 0.88,
                        rotateY: offset * -14,
                        opacity: isCenter ? 1 : 0.45,
                        zIndex: 20 - Math.abs(offset),
                        filter: isCenter ? "blur(0px)" : "blur(1px)",
                      }}
                      transition={{
                        type: "spring",
                        stiffness: 320,
                        damping: 32,
                        mass: 0.8,
                      }}
                      onClick={() => {
                        if (!isCenter) {
                          soundEffects.click();
                          setSelectedIndex(idx);
                        }
                      }}
                      className="absolute w-[92vw] sm:w-[420px] max-w-[440px] h-[510px] top-1/2 -translate-y-1/2 will-change-transform"
                    >
                      <SpotlightCard
                        className={`w-full h-full rounded-[30px] p-6 sm:p-8 flex flex-col justify-between transition-all duration-300 border backdrop-blur-2xl relative overflow-hidden group ${
                          isCenter
                            ? "border-[#476D9A]/70 dark:border-[#61BE99]/60 shadow-2xl shadow-[#476D9A]/15 dark:shadow-black/60 bg-white dark:bg-[#090e1c]/95"
                            : "border-slate-200/90 dark:border-white/10 bg-white/80 dark:bg-[#070b14]/80 hover:border-[#476D9A]/50"
                        }`}
                      >
                        {/* Top Accent Glint */}
                        <span className={`absolute top-0 right-0 w-36 h-1 bg-gradient-to-l from-[#61BE99] to-transparent transition-opacity duration-300 pointer-events-none ${
                          isCenter ? "opacity-100" : "opacity-0"
                        }`} />

                        <div>
                          {/* Top Metadata Row */}
                          <div className="flex items-center justify-between mb-4">
                            <div className="flex items-center gap-3">
                              <div className="p-3 rounded-2xl bg-slate-100 dark:bg-white/[0.06] border border-slate-200/80 dark:border-white/10 group-hover:scale-105 transition-transform duration-300">
                                {service.icon}
                              </div>
                              <span className="text-xs font-mono font-bold tracking-widest text-[#476D9A] dark:text-[#5784b8]">
                                CAPABILITY // {service.num}
                              </span>
                            </div>

                            <Badge variant="glass" size="sm">
                              {service.badge}
                            </Badge>
                          </div>

                          {/* Title */}
                          <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white group-hover:text-[#476D9A] dark:group-hover:text-[#61BE99] transition-colors mb-2.5">
                            {service.title}
                          </h3>

                          {/* Short Description */}
                          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-5">
                            {service.shortDesc}
                          </p>

                          {/* Key Features List */}
                          <div className="space-y-2.5 mb-5">
                            {service.features.map((feat, fIdx) => (
                              <div key={fIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 dark:text-slate-300 font-medium">
                                <CheckCircle className="w-4 h-4 text-[#61BE99] shrink-0 mt-0.5" />
                                <span className="line-clamp-1">{feat}</span>
                              </div>
                            ))}
                          </div>

                          {/* SLA Guarantee Box */}
                          <div className="mb-5 p-2.5 rounded-xl bg-slate-100/90 dark:bg-white/[0.04] border border-slate-200/80 dark:border-white/10 flex items-center justify-between text-xs font-mono">
                            <span className="flex items-center gap-1.5 text-[#61BE99] font-bold">
                              <Sparkles className="w-3.5 h-3.5" />
                              SLA:
                            </span>
                            <span className="text-slate-600 dark:text-slate-400 font-medium truncate max-w-[240px]">
                              {service.sla}
                            </span>
                          </div>
                        </div>

                        {/* Bottom Technologies & Direct CTA */}
                        <div className="pt-4 border-t border-slate-200 dark:border-white/10 space-y-4">
                          <div className="flex flex-wrap gap-1.5">
                            {service.technologies.map((tech, tIdx) => (
                              <span
                                key={tIdx}
                                className="px-2.5 py-1 rounded-md bg-slate-100 dark:bg-white/[0.05] text-[11px] text-slate-600 dark:text-slate-300 font-mono border border-slate-200 dark:border-white/10"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>

                          <Button
                            variant="primary"
                            size="sm"
                            className="w-full justify-between bg-[#476D9A] hover:bg-[#38587d] text-white font-bold cursor-pointer shadow-md shadow-[#476D9A]/20"
                            onClick={(e) => {
                              e.stopPropagation();
                              soundEffects.click();
                              onSelectService(service.title);
                            }}
                            rightIcon={<ArrowRight className="w-4 h-4" />}
                          >
                            Consult on this Service
                          </Button>
                        </div>
                      </SpotlightCard>
                    </motion.div>
                  );
                })}
              </motion.div>
            </div>

            {/* Clickable Bullet Pagination Track (Exact, Zero Math Drift) */}
            <div className="flex items-center justify-center gap-2.5 mt-6">
              {filteredServices.map((_, dotIdx) => {
                const isSelected = selectedIndex === dotIdx;
                return (
                  <button
                    key={dotIdx}
                    onClick={() => {
                      soundEffects.click();
                      setSelectedIndex(dotIdx);
                    }}
                    className={`h-2 transition-all duration-300 rounded-full cursor-pointer ${
                      isSelected
                        ? "w-8 bg-gradient-to-r from-[#476D9A] to-[#61BE99] shadow-[0_0_10px_rgba(97,190,153,0.6)]"
                        : "w-2 bg-slate-300 dark:bg-white/20 hover:bg-slate-400 dark:hover:bg-white/40"
                    }`}
                    aria-label={`Go to slide ${dotIdx + 1}`}
                  />
                );
              })}
            </div>
          </div>
        ) : (
          /* ========================================================
             VIEW MODE 2: STUDIO BLUEPRINT (Split-screen master detail)
             ======================================================== */
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
            {/* Left Column: Capability List Selector */}
            <div className="lg:col-span-5 flex flex-col gap-2.5 p-3 rounded-3xl bg-white/60 dark:bg-[#070b14]/70 border border-slate-200 dark:border-white/10 backdrop-blur-2xl">
              {filteredServices.map((service, sIdx) => {
                const isActive = selectedIndex === sIdx;
                return (
                  <button
                    key={service.id}
                    onClick={() => {
                      soundEffects.click();
                      setSelectedIndex(sIdx);
                    }}
                    className={`w-full p-3.5 rounded-2xl flex items-center justify-between text-left transition-all cursor-pointer border ${
                      isActive
                        ? "bg-[#476D9A] text-white border-[#476D9A] shadow-lg shadow-[#476D9A]/20"
                        : "bg-white/40 dark:bg-white/[0.02] text-slate-700 dark:text-slate-300 border-transparent hover:border-slate-200 dark:hover:border-white/10 hover:bg-white dark:hover:bg-white/[0.05]"
                    }`}
                  >
                    <div className="flex items-center gap-3 min-w-0">
                      <div className={`p-2 rounded-xl border ${
                        isActive
                          ? "bg-white/20 border-white/30 text-white"
                          : "bg-slate-100 dark:bg-white/[0.06] border-slate-200 dark:border-white/10 text-[#476D9A]"
                      }`}>
                        {service.icon}
                      </div>

                      <div className="truncate">
                        <div className="text-xs font-mono tracking-wider opacity-80">
                          {service.num} • {service.categoryLabel}
                        </div>
                        <div className="text-sm font-bold truncate">
                          {service.title}
                        </div>
                      </div>
                    </div>

                    <ChevronRight className={`w-4 h-4 shrink-0 transition-transform ${
                      isActive ? "translate-x-1 text-white" : "opacity-40"
                    }`} />
                  </button>
                );
              })}
            </div>

            {/* Right Column: Active Architecture Console */}
            <div className="lg:col-span-7">
              <AnimatePresence mode="wait">
                <motion.div
                  key={selectedService.id}
                  initial={{ opacity: 0, y: 12, scale: 0.99 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -12, scale: 0.99 }}
                  transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                  className="rounded-3xl p-6 sm:p-8 bg-white/95 dark:bg-[#080d19]/90 border border-slate-200 dark:border-white/10 backdrop-blur-2xl shadow-xl flex flex-col justify-between h-full relative overflow-hidden"
                >
                  <span className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#476D9A] via-[#5784b8] to-[#61BE99]" />

                  <div>
                    <div className="flex flex-wrap items-center justify-between gap-3 pb-5 mb-5 border-b border-slate-200 dark:border-white/10">
                      <span className="text-xs font-mono font-bold tracking-widest text-[#61BE99] uppercase">
                        STUDIO SPECIFICATION // {selectedService.num}
                      </span>
                      <Badge variant="glass" size="sm">
                        {selectedService.badge}
                      </Badge>
                    </div>

                    <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white leading-tight mb-3">
                      {selectedService.title}
                    </h3>

                    <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
                      {selectedService.description}
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
                      {selectedService.features.map((feat, fIdx) => (
                        <div
                          key={fIdx}
                          className="p-3 rounded-2xl bg-slate-50 dark:bg-white/[0.03] border border-slate-200/80 dark:border-white/10 flex items-start gap-2.5"
                        >
                          <CheckCircle className="w-4 h-4 text-[#61BE99] shrink-0 mt-0.5" />
                          <span className="text-xs sm:text-sm font-semibold text-slate-800 dark:text-slate-200">
                            {feat}
                          </span>
                        </div>
                      ))}
                    </div>

                    <div className="p-3.5 rounded-2xl bg-[#476D9A]/10 border border-[#476D9A]/20 flex items-center justify-between mb-6 text-xs font-mono">
                      <span className="flex items-center gap-2 text-[#476D9A] dark:text-[#5784b8] font-bold">
                        <Sparkles className="w-4 h-4 text-[#61BE99]" />
                        SLA COMMITMENT:
                      </span>
                      <span className="text-slate-900 dark:text-white font-bold">
                        {selectedService.sla}
                      </span>
                    </div>
                  </div>

                  <div className="pt-5 border-t border-slate-200 dark:border-white/10 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
                    <div className="flex flex-wrap gap-2">
                      {selectedService.technologies.map((tech, tIdx) => (
                        <span
                          key={tIdx}
                          className="px-3 py-1 rounded-lg bg-slate-100 dark:bg-white/[0.05] text-xs font-mono text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-white/10 font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <Button
                      variant="primary"
                      size="md"
                      className="bg-[#476D9A] hover:bg-[#38587d] text-white font-bold px-6 shrink-0 cursor-pointer shadow-md shadow-[#476D9A]/25"
                      onClick={() => {
                        soundEffects.click();
                        onSelectService(selectedService.title);
                      }}
                      rightIcon={<ArrowRight className="w-4 h-4" />}
                    >
                      Consult on this Service
                    </Button>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
