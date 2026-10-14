"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { 
  Menu, 
  X, 
  ChevronDown, 
  Sparkles, 
  PhoneCall, 
  ArrowUpRight,
  Code2,
  Cpu,
  Smartphone,
  Globe2,
  Users2,
  Sun,
  Moon
} from "lucide-react";
import { useTheme } from "@/context/ThemeContext";

interface NavbarProps {
  onOpenQuoteModal: () => void;
}

export function Navbar({ onOpenQuoteModal }: NavbarProps) {
  const { mode, setMode } = useTheme();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdown, setServicesDropdown] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const serviceLinks = [
    { name: "Custom Software Development", href: "#services", icon: <Code2 className="w-4 h-4" /> },
    { name: "AI & Machine Learning Solutions", href: "#services", icon: <Cpu className="w-4 h-4" /> },
    { name: "Web & Enterprise SaaS", href: "#services", icon: <Globe2 className="w-4 h-4" /> },
    { name: "Mobile App Development", href: "#services", icon: <Smartphone className="w-4 h-4" /> },
    { name: "Hire Dedicated Developers", href: "#hire", icon: <Users2 className="w-4 h-4" /> },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? "bg-[var(--bg-main)]/85 backdrop-blur-xl border-b border-[var(--border-subtle)] shadow-lg shadow-black/10 py-3"
            : "bg-transparent py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-tr from-[var(--primary)] to-[var(--accent)] text-white shadow-md shadow-[var(--brand-glow)] group-hover:scale-105 transition-transform">
              <span className="font-extrabold text-xl tracking-tighter">O</span>
              <div className="absolute inset-0 rounded-xl ring-2 ring-white/20" />
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold tracking-tight text-[var(--text-main)] group-hover:text-[var(--primary-light)] transition-colors">
                Opash<span className="text-[var(--accent)]">.</span>
              </span>
              <span className="text-[10px] uppercase tracking-widest text-[var(--text-dim)] font-medium -mt-1">
                Software
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            <Link
              href="#about"
              className="px-3 py-2 rounded-lg text-sm font-medium text-[var(--text-muted)] hover:text-[var(--text-main)] hover:bg-[var(--border-subtle)] transition-colors"
            >
              Company
            </Link>

            {/* Services Mega Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setServicesDropdown(true)}
              onMouseLeave={() => setServicesDropdown(false)}
            >
              <button
                className="flex items-center gap-1.5 px-3 py-2 rounded-lg text-sm font-medium text-[var(--text-muted)] hover:text-[var(--text-main)] hover:bg-[var(--border-subtle)] transition-colors cursor-pointer"
              >
                Services
                <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${servicesDropdown ? "rotate-180" : ""}`} />
              </button>

              {servicesDropdown && (
                <div className="absolute top-full left-0 w-72 p-2 rounded-2xl bg-[var(--bg-card)] border border-[var(--border-strong)] shadow-2xl backdrop-blur-2xl animate-in fade-in slide-in-from-top-2 duration-150">
                  <div className="text-[11px] font-semibold uppercase tracking-wider text-[var(--text-dim)] px-3 py-1.5">
                    Core Capabilities
                  </div>
                  {serviceLinks.map((item, idx) => (
                    <Link
                      key={idx}
                      href={item.href}
                      onClick={() => setServicesDropdown(false)}
                      className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-xs font-medium text-[var(--text-muted)] hover:text-[var(--text-main)] hover:bg-[var(--primary)]/10 hover:border-l-2 hover:border-l-[var(--primary)] transition-all"
                    >
                      <span className="p-1.5 rounded-lg bg-[var(--primary)]/10 text-[var(--primary)]">
                        {item.icon}
                      </span>
                      <span>{item.name}</span>
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link
              href="#industries"
              className="px-3 py-2 rounded-lg text-sm font-medium text-[var(--text-muted)] hover:text-[var(--text-main)] hover:bg-[var(--border-subtle)] transition-colors"
            >
              Industries
            </Link>
            <Link
              href="#tech-stack"
              className="px-3 py-2 rounded-lg text-sm font-medium text-[var(--text-muted)] hover:text-[var(--text-main)] hover:bg-[var(--border-subtle)] transition-colors"
            >
              Technologies
            </Link>
            <Link
              href="#testimonials"
              className="px-3 py-2 rounded-lg text-sm font-medium text-[var(--text-muted)] hover:text-[var(--text-main)] hover:bg-[var(--border-subtle)] transition-colors"
            >
              Clients
            </Link>
            <Link
              href="#estimator"
              className="px-3 py-2 rounded-lg text-sm font-medium text-[var(--text-muted)] hover:text-[var(--text-main)] hover:bg-[var(--border-subtle)] transition-colors flex items-center gap-1.5"
            >
              <Sparkles className="w-3.5 h-3.5 text-[var(--accent)]" />
              Cost Estimator
            </Link>
          </nav>

          {/* Action CTAs */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href="tel:+919537222266"
              className="flex items-center gap-2 px-3 py-2 rounded-xl text-xs font-semibold text-[var(--text-muted)] hover:text-[var(--text-main)] transition-colors"
            >
              <PhoneCall className="w-3.5 h-3.5 text-[var(--accent)]" />
              <span>+91 95372-22266</span>
            </a>
            <button
              onClick={() => setMode(mode === "light" ? "dark" : "light")}
              className="p-2.5 rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-card)] hover:bg-[var(--border-subtle)] text-[var(--text-main)] transition-colors cursor-pointer"
              title={`Switch to ${mode === "light" ? "Dark" : "Light"} Mode`}
              aria-label="Toggle theme mode"
            >
              {mode === "light" ? (
                <Moon className="w-4 h-4 text-blue-600" />
              ) : (
                <Sun className="w-4 h-4 text-amber-400" />
              )}
            </button>
            <Button
              variant="gradient"
              size="md"
              onClick={onOpenQuoteModal}
              rightIcon={<ArrowUpRight className="w-4 h-4" />}
            >
              Get a Quote
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center sm:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl text-[var(--text-muted)] hover:text-[var(--text-main)] bg-[var(--border-subtle)]"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Slide-over Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 lg:hidden flex flex-col bg-[var(--bg-main)] animate-in fade-in duration-200">
          <div className="flex items-center justify-between p-5 border-b border-[var(--border-subtle)]">
            <Link href="/" className="flex items-center gap-2" onClick={() => setMobileMenuOpen(false)}>
              <div className="w-8 h-8 rounded-lg bg-[var(--primary)] text-white font-bold flex items-center justify-center">
                O
              </div>
              <span className="font-bold text-lg text-[var(--text-main)]">Opash Software</span>
            </Link>
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="p-2 rounded-lg text-[var(--text-muted)] hover:text-[var(--text-main)]"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          <div className="flex-1 overflow-y-auto p-6 space-y-4">
            <Link
              href="#about"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-base font-semibold text-[var(--text-main)]"
            >
              About Company
            </Link>
            <Link
              href="#services"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-base font-semibold text-[var(--text-main)]"
            >
              Software Services
            </Link>
            <Link
              href="#industries"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-base font-semibold text-[var(--text-main)]"
            >
              Industries
            </Link>
            <Link
              href="#tech-stack"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-base font-semibold text-[var(--text-main)]"
            >
              Technologies
            </Link>
            <Link
              href="#testimonials"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-base font-semibold text-[var(--text-main)]"
            >
              Client Stories
            </Link>
            <Link
              href="#estimator"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-base font-semibold text-[var(--text-main)]"
            >
              Project Cost Estimator
            </Link>
            <Link
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-base font-semibold text-[var(--text-main)]"
            >
              Contact Us
            </Link>
          </div>

          <div className="p-6 border-t border-[var(--border-subtle)] space-y-3">
            <Button
              variant="gradient"
              size="lg"
              className="w-full"
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenQuoteModal();
              }}
            >
              Get a Quote
            </Button>
            <a
              href="tel:+919537222266"
              className="block text-center text-sm font-medium text-[var(--text-muted)] py-2"
            >
              Direct Line: +91 95372-22266
            </a>
          </div>
        </div>
      )}
    </>
  );
}
