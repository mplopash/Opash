"use client";

import React, { useState } from "react";
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
  CheckCircle,
  Sparkles,
  Layers
} from "lucide-react";
import { SpotlightCard } from "@/components/common/SpotlightCard";
import { soundEffects } from "@/lib/soundEffects";

interface ServicesSectionProps {
  onSelectService: (serviceName: string) => void;
}

export function ServicesSection({ onSelectService }: ServicesSectionProps) {
  const [activeCategory, setActiveCategory] = useState<"all" | "engineering" | "ai_cloud" | "teams">("all");
  const [expandedService, setExpandedService] = useState<string | null>(null);

  const services = [
    {
      id: "custom-software",
      category: "engineering",
      title: "Custom Software Development",
      description:
        "We build scalable, mission-critical custom software tailored to your specific business workflows. From legacy modernization to bespoke enterprise portals, our agile delivery ensures rapid time-to-market.",
      icon: <Code className="w-5 h-5 text-[var(--primary)]" />,
      features: [
        "Tailored Enterprise ERP & CRM Portals",
        "Microservices Architecture & Event Streaming",
        "Automated CI/CD & Cloud Infrastructure",
        "High-Security Role-Based Access Controls",
      ],
      technologies: ["Node.js", "Python", "Go", ".NET", "PostgreSQL"],
      sla: "Sprint Zero in 5 Days // 99.9% Uptime",
    },
    {
      id: "web-dev",
      category: "engineering",
      title: "Web Development & Next-Gen Apps",
      description:
        "Modern, responsive, ultra-fast websites and web applications built with Next.js, React, and TypeScript. Optimized for SEO, user experience, and frictionless conversions.",
      icon: <Globe className="w-5 h-5 text-[var(--primary)]" />,
      features: [
        "Server-Side Rendering (SSR) & Static Edge Delivery",
        "State-of-the-Art Design Systems & Tailwind CSS",
        "Headless CMS & E-Commerce Implementations",
        "Top Core Web Vitals & 99+ Lighthouse Scores",
      ],
      technologies: ["Next.js 16", "React 19", "Tailwind CSS", "TypeScript"],
      sla: "Lighthouse 95+ Guarantee // Sub-second LCP",
    },
    {
      id: "mobile-dev",
      category: "engineering",
      title: "Mobile App Development",
      description:
        "Design and engineering of high-performing mobile applications for iOS and Android. We craft immersive native and cross-platform apps with fluid gestures and offline-first data sync.",
      icon: <Smartphone className="w-5 h-5 text-[var(--primary)]" />,
      features: [
        "Cross-Platform Flutter & React Native Apps",
        "Native Swift (iOS) & Kotlin (Android) Solutions",
        "Real-Time Push Notifications & In-App Payments",
        "App Store & Google Play Launch Optimization",
      ],
      technologies: ["Flutter", "React Native", "Swift", "Kotlin", "Firebase"],
      sla: "App Store Approval Assistance // 60fps Native Feel",
    },
    {
      id: "ai-ml",
      category: "ai_cloud",
      title: "AI & Machine Learning Solutions",
      description:
        "Harness the power of Artificial Intelligence to automate complex workflows, extract actionable insights, and build personalized agentic experiences.",
      icon: <Bot className="w-5 h-5 text-[var(--accent)]" />,
      features: [
        "Generative AI & LLM Integration (OpenAI, Gemini)",
        "Retrieval-Augmented Generation (RAG) & Vector DBs",
        "Intelligent Process & Document Automation",
        "Predictive Modeling & Custom Neural Classifiers",
      ],
      technologies: ["Python", "LangChain", "PyTorch", "Pinecone", "Gemini API"],
      sla: "Private Zero-Retention VPC // Custom Embeddings",
    },
    {
      id: "saas-dev",
      category: "ai_cloud",
      title: "SaaS Development & Multi-Tenancy",
      description:
        "Architecting multi-tenant Software-as-a-Service platforms engineered for global scale, zero downtime, automated billing, and rock-solid data isolation.",
      icon: <Cloud className="w-5 h-5 text-[var(--primary)]" />,
      features: [
        "Multi-Tenant Database Partitioning",
        "Stripe, LemonSqueezy & Paddle Billing Engines",
        "Tenant Onboarding & User Administration",
        "SOC2 & GDPR Compliance Foundations",
      ],
      technologies: ["AWS", "Docker", "Kubernetes", "Redis", "Terraform"],
      sla: "Zero-Downtime Blue/Green Deployments",
    },
    {
      id: "api-microservices",
      category: "engineering",
      title: "API Integration & Microservices",
      description:
        "Seamlessly connect disparate third-party systems and decouple legacy monoliths into lightweight, independently deployable microservices.",
      icon: <Network className="w-5 h-5 text-[var(--accent)]" />,
      features: [
        "RESTful & GraphQL API Design and Documentation",
        "Payment Gateway, ERP & Logistics Integrations",
        "Message Queues (Kafka, RabbitMQ, BullMQ)",
        "API Rate Limiting & Enterprise Security Tokens",
      ],
      technologies: ["GraphQL", "REST", "Kafka", "Kong", "Postman"],
      sla: "15,000+ Requests/sec Throughput",
    },
    {
      id: "qa-testing",
      category: "engineering",
      title: "QA & Automated Testing",
      description:
        "Rigorous automated testing protocols that catch regressions before production. Ensuring flawless user experiences across all devices, browsers, and traffic spikes.",
      icon: <CheckCheck className="w-5 h-5 text-[var(--primary)]" />,
      features: [
        "End-to-End Test Automation (Playwright, Cypress)",
        "API Performance & Load Testing (k6, JMeter)",
        "Cross-Browser & Cross-Device Compatibility",
        "Vulnerability & Security Penetration Checks",
      ],
      technologies: ["Playwright", "Jest", "Cypress", "k6", "Selenium"],
      sla: "100% Critical Flow Coverage",
    },
    {
      id: "hire-developers",
      category: "teams",
      title: "Hire Dedicated Developers",
      description:
        "Scale your software engineering bandwidth on-demand with our thoroughly vetted senior developers. Seamlessly integrated into your daily standups and sprint boards.",
      icon: <UserCheck className="w-5 h-5 text-[var(--primary)]" />,
      features: [
        "Timezone-Aligned Dedicated Full-Time Developers",
        "Flexible Engagement (Hourly, Monthly, or Milestone)",
        "Immediate Onboarding Within 48-72 Hours",
        "Zero Recruitment Fees or Infrastructure Hassles",
      ],
      technologies: ["Full-Stack", "Frontend", "Backend", "Mobile", "DevOps"],
      sla: "48-Hour Talent Matching Guarantee",
    },
  ];

  const filteredServices = services.filter((s) => {
    if (activeCategory === "all") return true;
    return s.category === activeCategory;
  });

  return (
    <section id="services" className="py-14 sm:py-20 relative bg-[var(--bg-secondary)] transition-colors duration-300 cv-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="03 // Core Capabilities"
          title="Engineering Solutions Tailored for"
          highlight="Maximum Velocity"
          description="We create highly responsive applications with remarkable aesthetics that deliver a spectrum of result-oriented digital experiences."
        />

        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {[
            { id: "all", label: "All Capabilities (8)" },
            { id: "engineering", label: "Core Software & Web" },
            { id: "ai_cloud", label: "AI & SaaS Cloud" },
            { id: "teams", label: "Dedicated Tech Teams" },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => {
                soundEffects.hover();
                setActiveCategory(tab.id as typeof activeCategory);
              }}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                activeCategory === tab.id
                  ? "bg-[var(--primary)] text-white shadow-md shadow-[var(--brand-glow)]"
                  : "bg-[var(--bg-card)] text-[var(--text-muted)] hover:text-[var(--text-main)] border border-[var(--border-subtle)]"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Service Cards Grid with 3D Spotlight */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredServices.map((service) => {
            const isExpanded = expandedService === service.id;
            return (
              <SpotlightCard
                key={service.id}
                data-cursor="INSPECT"
                className="hover-card-elevate glass-panel p-6 sm:p-7 rounded-3xl border border-[var(--border-strong)] flex flex-col justify-between transition-all duration-300 group relative overflow-hidden"
              >
                {/* Minimal Green Accent Top Sheen on Hover */}
                <span className="absolute top-0 right-0 w-24 h-1 bg-gradient-to-l from-[#10b981] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="p-3 rounded-2xl bg-[var(--bg-main)] border border-[var(--border-subtle)] group-hover:scale-110 group-hover:rotate-3 group-hover:border-[#1d4ed8]/40 group-hover:bg-[var(--primary)]/10 transition-all duration-300">
                      {service.icon}
                    </div>
                    <Badge variant="glass" size="sm">
                      {service.category.replace("_", " & ").toUpperCase()}
                    </Badge>
                  </div>

                  <h3 className="text-xl font-bold text-[var(--text-main)] group-hover:text-[var(--primary-light)] transition-colors mb-2">
                    {service.title}
                  </h3>

                  <p className="text-sm text-[var(--text-muted)] leading-relaxed mb-5">
                    {service.description}
                  </p>

                  {/* Features list */}
                  <div className="space-y-2 mb-6">
                    {service.features.map((feat, fIdx) => (
                      <div key={fIdx} className="flex items-start gap-2 text-xs text-[var(--text-main)] font-medium">
                        <CheckCircle className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>

                  {/* SLA Pill */}
                  <div className="mb-5 p-2 rounded-xl bg-[var(--bg-main)] border border-[var(--border-subtle)] flex items-center justify-between text-[11px] font-mono text-[var(--text-dim)]">
                    <span className="flex items-center gap-1.5 text-[var(--accent)] font-semibold">
                      <Sparkles className="w-3 h-3" />
                      SLA Guarantee:
                    </span>
                    <span>{service.sla}</span>
                  </div>
                </div>

                {/* Technologies & CTAs */}
                <div className="pt-4 border-t border-[var(--border-subtle)] space-y-4">
                  <div className="flex flex-wrap gap-1.5">
                    {service.technologies.map((t, tIdx) => (
                      <span
                        key={tIdx}
                        className="px-2.5 py-1 rounded-md bg-[var(--bg-main)] text-[11px] text-[var(--text-muted)] font-mono border border-[var(--border-subtle)] font-medium"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  <Button
                    variant="outline"
                    size="sm"
                    className="w-full justify-between group-hover:bg-[var(--primary)] group-hover:text-white group-hover:border-[var(--primary)] transition-all font-semibold"
                    onClick={() => {
                      soundEffects.click();
                      onSelectService(service.title);
                    }}
                    rightIcon={<ArrowRight className="w-4 h-4" />}
                  >
                    Consult on this Service
                  </Button>
                </div>
              </SpotlightCard>
            );
          })}
        </div>
      </div>
    </section>
  );
}
