"use client";

import React, { useState, useEffect } from "react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { 
  Mail, 
  Phone, 
  MapPin, 
  MessageCircle, 
  Send, 
  CheckCircle2, 
  ShieldCheck, 
  Clock,
  Sparkles,
  Globe,
  Radio
} from "lucide-react";
import { SpotlightCard } from "@/components/common/SpotlightCard";
import { soundEffects } from "@/lib/soundEffects";

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "Custom Software Development",
    budget: "$10,000 - $25,000",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [activeTimezone, setActiveTimezone] = useState("Surat (IST)");
  const [currentTimes, setCurrentTimes] = useState<Record<string, string>>({});

  useEffect(() => {
    const updateTimes = () => {
      const now = new Date();
      setCurrentTimes({
        "Surat (IST)": now.toLocaleTimeString("en-US", { timeZone: "Asia/Kolkata", hour: "2-digit", minute: "2-digit" }),
        "New York (EST)": now.toLocaleTimeString("en-US", { timeZone: "America/New_York", hour: "2-digit", minute: "2-digit" }),
        "London (GMT)": now.toLocaleTimeString("en-US", { timeZone: "Europe/London", hour: "2-digit", minute: "2-digit" }),
        "Dubai (GST)": now.toLocaleTimeString("en-US", { timeZone: "Asia/Dubai", hour: "2-digit", minute: "2-digit" }),
      });
    };
    updateTimes();
    const interval = setInterval(updateTimes, 10000);
    return () => clearInterval(interval);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    soundEffects.click();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      soundEffects.success();
    }, 1000);
  };

  const budgetOptions = [
    "< $10,000",
    "$10,000 - $25,000",
    "$25,000 - $50,000",
    "$50,000+",
  ];

  return (
    <section id="contact" className="py-14 sm:py-20 relative bg-[var(--bg-main)] transition-colors duration-300 cv-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="15 // Engineering Consultation & Inquiries"
          title="Let’s Turn Your Vision Into"
          highlight="Production-Grade Reality"
          description="Speak directly with our senior technical leads in India, USA, and UK. We will respond within 4 business hours with an initial architectural roadmap."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start max-w-6xl mx-auto">
          {/* Company Contact Coordinates with 3D Spotlight */}
          <div className="lg:col-span-5 space-y-6">
            <SpotlightCard className="p-8 rounded-3xl glass-panel border border-[var(--border-strong)] space-y-6 shadow-2xl">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-ping" />
                  <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-emerald-500">
                    Surat Engineering Hub Online
                  </span>
                </div>
                <h3 className="text-xl font-bold text-[var(--text-main)]">
                  Opash Software Headquarters
                </h3>
                <p className="text-xs text-[var(--text-muted)] mt-1">
                  Surat, Gujarat, India · Global Remote Engineering Delivery
                </p>
              </div>

              {/* Live Global Timezone Strip */}
              <div className="p-4 rounded-2xl bg-[var(--bg-main)]/80 border border-[var(--border-subtle)] space-y-3">
                <div className="flex items-center justify-between text-[11px] font-mono text-[var(--text-dim)] uppercase tracking-wider">
                  <span className="flex items-center gap-1.5 text-[var(--accent)] font-semibold">
                    <Globe className="w-3.5 h-3.5" />
                    Global Office Times
                  </span>
                  <span className="text-emerald-500 font-bold">24/7 Coverage</span>
                </div>
                <div className="grid grid-cols-2 gap-2 text-xs">
                  {Object.entries(currentTimes).map(([city, time]) => (
                    <div
                      key={city}
                      onClick={() => {
                        soundEffects.hover();
                        setActiveTimezone(city);
                      }}
                      className={`p-2 rounded-xl border transition-all cursor-pointer ${
                        activeTimezone === city
                          ? "border-[var(--primary)] bg-[var(--primary)]/10 text-[var(--text-main)] font-semibold"
                          : "border-[var(--border-subtle)] text-[var(--text-muted)] hover:text-[var(--text-main)]"
                      }`}
                    >
                      <div className="text-[10px] text-[var(--text-dim)] truncate">{city}</div>
                      <div className="font-mono font-bold text-sm text-[var(--text-main)]">{time}</div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-4 pt-2">
                {/* Address */}
                <div className="flex items-start gap-3.5">
                  <div className="p-2.5 rounded-xl bg-[var(--primary)]/15 text-[var(--primary)] border border-[var(--primary)]/30 shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-semibold text-[var(--text-dim)] uppercase tracking-wider">
                      Global Tech Center
                    </div>
                    <div className="text-sm font-medium text-[var(--text-main)] mt-0.5 leading-relaxed">
                      129, The Galleria Shopping Hub, Nr. Sanjeev Kumar Auditorium, Opp. 3Seventy Kitchen Restaurant, Pal, Adajan, Surat - 395009, Gujarat, India
                    </div>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start gap-3.5">
                  <div className="p-2.5 rounded-xl bg-[var(--accent)]/15 text-[var(--accent)] border border-[var(--accent)]/30 shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-semibold text-[var(--text-dim)] uppercase tracking-wider">
                      Direct Hotline
                    </div>
                    <a
                      href="tel:+919537222266"
                      onClick={() => soundEffects.click()}
                      className="text-sm font-bold text-[var(--text-main)] hover:text-[var(--primary)] transition-colors mt-0.5 block"
                    >
                      +91 95372-22266
                    </a>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-3.5">
                  <div className="p-2.5 rounded-xl bg-purple-500/15 text-purple-400 border border-purple-500/30 shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-semibold text-[var(--text-dim)] uppercase tracking-wider">
                      Official Inquiries
                    </div>
                    <a
                      href="mailto:hiren@opashsoftware.com"
                      onClick={() => soundEffects.click()}
                      className="text-sm font-bold text-[var(--text-main)] hover:text-[var(--primary)] transition-colors mt-0.5 block"
                    >
                      hiren@opashsoftware.com
                    </a>
                  </div>
                </div>

                {/* WhatsApp */}
                <div className="flex items-start gap-3.5">
                  <div className="p-2.5 rounded-xl bg-emerald-500/15 text-emerald-500 border border-emerald-500/30 shrink-0">
                    <MessageCircle className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-semibold text-[var(--text-dim)] uppercase tracking-wider">
                      WhatsApp Instant Chat
                    </div>
                    <a
                      href="https://wa.me/919537222266"
                      target="_blank"
                      rel="noreferrer"
                      onClick={() => soundEffects.click()}
                      className="text-sm font-bold text-emerald-500 hover:underline mt-0.5 block"
                    >
                      Chat on WhatsApp (+91 95372-22266)
                    </a>
                  </div>
                </div>
              </div>

              {/* Guarantees */}
              <div className="pt-6 border-t border-[var(--border-subtle)] space-y-2.5 text-xs text-[var(--text-muted)] font-medium">
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-emerald-500 shrink-0" />
                  <span>Guaranteed response within 4 hours</span>
                </div>
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-[var(--primary-light)] shrink-0" />
                  <span>Standard Mutual Non-Disclosure Agreement (NDA)</span>
                </div>
              </div>
            </SpotlightCard>
          </div>

          {/* Interactive Form with 3D Spotlight */}
          <div className="lg:col-span-7">
            <SpotlightCard className="p-8 sm:p-10 rounded-3xl glass-panel border border-[var(--border-strong)] relative shadow-2xl">
              {submitted ? (
                <div className="py-12 text-center space-y-4 animate-in fade-in zoom-in-95">
                  <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-500 border border-emerald-500/30 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-[var(--text-main)]">
                    Inquiry Received Successfully!
                  </h3>
                  <p className="text-sm text-[var(--text-muted)] max-w-md mx-auto">
                    Thank you, <span className="text-[var(--text-main)] font-semibold">{formData.name}</span>. Our lead software architect will review your project requirements and email you at{" "}
                    <span className="text-[var(--primary-light)] font-semibold">{formData.email}</span> within 4 business hours.
                  </p>
                  <Button
                    variant="outline"
                    size="md"
                    onClick={() => {
                      soundEffects.click();
                      setSubmitted(false);
                      setFormData({
                        name: "",
                        email: "",
                        phone: "",
                        service: "Custom Software Development",
                        budget: "$10,000 - $25,000",
                        message: "",
                      });
                    }}
                  >
                    Send Another Inquiry
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-[var(--text-muted)] uppercase tracking-wider mb-2">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. John Doe"
                        className="w-full px-4 py-3 rounded-xl bg-[var(--bg-main)] border border-[var(--border-strong)] text-sm text-[var(--text-main)] placeholder-[var(--text-dim)] focus:outline-none focus:border-[var(--primary)] transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-[var(--text-muted)] uppercase tracking-wider mb-2">
                        Work Email *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="john@company.com"
                        className="w-full px-4 py-3 rounded-xl bg-[var(--bg-main)] border border-[var(--border-strong)] text-sm text-[var(--text-main)] placeholder-[var(--text-dim)] focus:outline-none focus:border-[var(--primary)] transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-[var(--text-muted)] uppercase tracking-wider mb-2">
                        Phone / WhatsApp
                      </label>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+1 (555) 000-0000"
                        className="w-full px-4 py-3 rounded-xl bg-[var(--bg-main)] border border-[var(--border-strong)] text-sm text-[var(--text-main)] placeholder-[var(--text-dim)] focus:outline-none focus:border-[var(--primary)] transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-[var(--text-muted)] uppercase tracking-wider mb-2">
                        Service Interest
                      </label>
                      <select
                        value={formData.service}
                        onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-[var(--bg-main)] border border-[var(--border-strong)] text-sm text-[var(--text-main)] focus:outline-none focus:border-[var(--primary)] transition-colors cursor-pointer"
                      >
                        <option value="Custom Software Development">Custom Software Development</option>
                        <option value="AI & Machine Learning Solutions">AI & Machine Learning Solutions</option>
                        <option value="Web Development & Next-Gen Apps">Web Development & Next-Gen Apps</option>
                        <option value="Mobile App Development (iOS & Android)">Mobile App Development (iOS & Android)</option>
                        <option value="SaaS Architecture & Cloud Scaling">SaaS Architecture & Cloud Scaling</option>
                        <option value="Hire Dedicated Senior Developers">Hire Dedicated Senior Developers</option>
                      </select>
                    </div>
                  </div>

                  {/* Budget Selector */}
                  <div>
                    <label className="block text-xs font-semibold text-[var(--text-muted)] uppercase tracking-wider mb-2">
                      Estimated Project Budget
                    </label>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                      {budgetOptions.map((opt) => (
                        <button
                          key={opt}
                          type="button"
                          onClick={() => {
                            soundEffects.hover();
                            setFormData({ ...formData, budget: opt });
                          }}
                          className={`py-2 px-3 rounded-xl text-xs font-semibold border transition-all cursor-pointer ${
                            formData.budget === opt
                              ? "border-[var(--primary)] bg-[var(--primary)] text-white shadow-sm"
                              : "border-[var(--border-subtle)] bg-[var(--bg-main)] text-[var(--text-muted)] hover:text-[var(--text-main)]"
                          }`}
                        >
                          {opt}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-xs font-semibold text-[var(--text-muted)] uppercase tracking-wider mb-2">
                      Project Goals & Architectural Scope *
                    </label>
                    <textarea
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Briefly describe what you're building, target launch timeline, or key technical challenges..."
                      className="w-full px-4 py-3 rounded-xl bg-[var(--bg-main)] border border-[var(--border-strong)] text-sm text-[var(--text-main)] placeholder-[var(--text-dim)] focus:outline-none focus:border-[var(--primary)] transition-colors resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <Button
                    type="submit"
                    variant="gradient"
                    size="lg"
                    disabled={isSubmitting}
                    className="w-full justify-center text-sm font-bold shadow-lg"
                    rightIcon={<Send className="w-4 h-4" />}
                  >
                    {isSubmitting ? "Dispatching Architectural Brief..." : "Submit Project Scope (NDA Protected)"}
                  </Button>
                </form>
              )}
            </SpotlightCard>
          </div>
        </div>
      </div>
    </section>
  );
}
