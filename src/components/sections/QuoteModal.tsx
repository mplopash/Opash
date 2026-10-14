"use client";

import React, { useState, useEffect } from "react";
import { Modal } from "@/components/ui/Modal";
import { Button } from "@/components/ui/Button";
import { Send, CheckCircle2, ShieldCheck, Sparkles } from "lucide-react";

interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialService?: string;
  estimateDetails?: {
    platform: string;
    stage: string;
    timeline: string;
    addons: string[];
    approxCost: string;
    duration: string;
  } | null;
}

export function QuoteModal({
  isOpen,
  onClose,
  initialService = "Custom Software Development",
  estimateDetails,
}: QuoteModalProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    service: initialService,
    timeline: "Standard (2-3 Months)",
    budget: "$15,000 - $30,000",
    description: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (initialService) {
      setFormData((prev) => ({ ...prev, service: initialService }));
    }
    if (estimateDetails) {
      setFormData((prev) => ({
        ...prev,
        service: estimateDetails.platform,
        timeline: estimateDetails.timeline,
        budget: estimateDetails.approxCost,
        description: `Estimate Summary:
- Stage: ${estimateDetails.stage}
- Duration: ${estimateDetails.duration}
- Add-ons: ${estimateDetails.addons.join(", ") || "None"}`,
      }));
    }
  }, [initialService, estimateDetails]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 1200);
  };

  const handleResetAndClose = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={handleResetAndClose}
      title="Request a Free Project Scope & Quote"
      subtitle="Fill in your project details below and our lead engineer will prepare an architectural evaluation."
      maxWidth="lg"
    >
      {submitted ? (
        <div className="py-8 text-center space-y-4">
          <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 flex items-center justify-center mx-auto">
            <CheckCircle2 className="w-8 h-8" />
          </div>
          <h3 className="text-2xl font-bold text-[var(--text-main)]">
            Quote Request Received!
          </h3>
          <p className="text-sm text-[var(--text-muted)] max-w-md mx-auto">
            Thank you, <span className="font-semibold text-[var(--text-main)]">{formData.name}</span>! We have assigned your request to our engineering leadership team. We will review your specifications and contact you at{" "}
            <span className="text-[var(--primary-light)] font-semibold">{formData.email}</span> within 4 hours.
          </p>
          <div className="pt-4">
            <Button variant="primary" size="md" onClick={handleResetAndClose}>
              Done & Return to Site
            </Button>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          {estimateDetails && (
            <div className="p-4 rounded-2xl bg-[var(--primary)]/10 border border-[var(--primary)]/30 text-xs text-[var(--text-main)] space-y-1">
              <div className="font-bold flex items-center gap-1.5 text-[var(--primary-light)]">
                <Sparkles className="w-4 h-4" />
                Attached Pre-Calculation Matrix
              </div>
              <div className="flex flex-wrap gap-x-4 text-[var(--text-muted)]">
                <span>Platform: <b className="text-[var(--text-main)]">{estimateDetails.platform}</b></span>
                <span>Estimate: <b className="text-[var(--accent)]">{estimateDetails.approxCost}</b></span>
                <span>Duration: <b className="text-[var(--text-main)]">{estimateDetails.duration}</b></span>
              </div>
            </div>
          )}

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-[var(--text-muted)] uppercase tracking-wider mb-1.5">
                Full Name *
              </label>
              <input
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder="Sarah Connor"
                className="w-full px-4 py-2.5 rounded-xl bg-[var(--bg-card)] border border-[var(--border-strong)] text-sm text-[var(--text-main)] focus:outline-none focus:border-[var(--primary)]"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-[var(--text-muted)] uppercase tracking-wider mb-1.5">
                Work Email *
              </label>
              <input
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                placeholder="sarah@enterprise.com"
                className="w-full px-4 py-2.5 rounded-xl bg-[var(--bg-card)] border border-[var(--border-strong)] text-sm text-[var(--text-main)] focus:outline-none focus:border-[var(--primary)]"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-[var(--text-muted)] uppercase tracking-wider mb-1.5">
                Phone Number / WhatsApp
              </label>
              <input
                type="tel"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                placeholder="+1 555-0192"
                className="w-full px-4 py-2.5 rounded-xl bg-[var(--bg-card)] border border-[var(--border-strong)] text-sm text-[var(--text-main)] focus:outline-none focus:border-[var(--primary)]"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-[var(--text-muted)] uppercase tracking-wider mb-1.5">
                Company / Organization
              </label>
              <input
                type="text"
                value={formData.company}
                onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                placeholder="TechCorp Global"
                className="w-full px-4 py-2.5 rounded-xl bg-[var(--bg-card)] border border-[var(--border-strong)] text-sm text-[var(--text-main)] focus:outline-none focus:border-[var(--primary)]"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-[var(--text-muted)] uppercase tracking-wider mb-1.5">
                Service Focus
              </label>
              <select
                value={formData.service}
                onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                className="w-full px-4 py-2.5 rounded-xl bg-[var(--bg-card)] border border-[var(--border-strong)] text-sm text-[var(--text-main)] focus:outline-none focus:border-[var(--primary)]"
              >
                <option value="Custom Software Development">Custom Software Development</option>
                <option value="AI & Machine Learning Solutions">AI & Machine Learning Solutions</option>
                <option value="Web & Next.js SaaS">Web & Next.js SaaS</option>
                <option value="Mobile App (iOS & Android)">Mobile App (iOS & Android)</option>
                <option value="Hire Dedicated Developers">Hire Dedicated Developers</option>
                <option value="API Integration & Microservices">API Integration & Microservices</option>
                <option value="QA & Performance Testing">QA & Performance Testing</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-semibold text-[var(--text-muted)] uppercase tracking-wider mb-1.5">
                Estimated Timeline
              </label>
              <select
                value={formData.timeline}
                onChange={(e) => setFormData({ ...formData, timeline: e.target.value })}
                className="w-full px-4 py-2.5 rounded-xl bg-[var(--bg-card)] border border-[var(--border-strong)] text-sm text-[var(--text-main)] focus:outline-none focus:border-[var(--primary)]"
              >
                <option value="Rush (4-6 Weeks)">Rush (4-6 Weeks)</option>
                <option value="Standard (2-3 Months)">Standard (2-3 Months)</option>
                <option value="Enterprise (3-6 Months)">Enterprise (3-6 Months)</option>
                <option value="Ongoing Team Augmentation">Ongoing Team Augmentation</option>
              </select>
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold text-[var(--text-muted)] uppercase tracking-wider mb-1.5">
              Project Summary & Technical Requirements
            </label>
            <textarea
              rows={3}
              value={formData.description}
              onChange={(e) => setFormData({ ...formData, description: e.target.value })}
              placeholder="Outline your application goals, target audience, and any legacy systems we should integrate with..."
              className="w-full px-4 py-2.5 rounded-xl bg-[var(--bg-card)] border border-[var(--border-strong)] text-sm text-[var(--text-main)] focus:outline-none focus:border-[var(--primary)] resize-none"
            />
          </div>

          <div className="pt-2 flex items-center justify-between gap-4">
            <div className="flex items-center gap-1.5 text-xs text-[var(--text-dim)]">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>100% Confidential NDA</span>
            </div>
            <Button
              type="submit"
              variant="gradient"
              size="md"
              isLoading={isSubmitting}
              rightIcon={<Send className="w-4 h-4" />}
            >
              Submit Quote Request
            </Button>
          </div>
        </form>
      )}
    </Modal>
  );
}
