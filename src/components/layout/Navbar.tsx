"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { InteractiveHoverButton } from "@/components/ui/interactive-hover-button";
import { 
  Menu, 
  X, 
  ChevronDown, 
  Sparkles, 
  PhoneCall, 
  Sun, 
  Moon,
  ArrowRight
} from "lucide-react";
import { useTheme } from "@/context/ThemeContext";
import { soundEffects } from "@/lib/soundEffects";

interface NavbarProps {
  onOpenQuoteModal: (service?: string) => void;
}

interface NavItem {
  id: string;
  name: string;
  href: string;
  hasDropdown?: boolean;
}

const navItems: NavItem[] = [
  { id: "home", name: "Home", href: "#" },
  { id: "services", name: "Services", href: "#services", hasDropdown: true },
  { id: "company", name: "Company", href: "#about" },
  { id: "blogs", name: "Blogs", href: "#blogs" },
  { id: "career", name: "Career", href: "#why-us" },
  { id: "contact", name: "Contact Us", href: "#contact" },
];

const serviceDropdownItems = [
  "Custom Software Development",
  "Web Development",
  "Mobile App Development",
  "AI & ML Solutions",
  "SaaS Development",
  "API Integration & Microservices",
  "QA / Testing",
  "Hire Dedicated Developers",
];

interface TabPosition {
  left: number;
  width: number;
  opacity: number;
}

export function Navbar({ onOpenQuoteModal }: NavbarProps) {
  const { mode, setMode } = useTheme();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdown, setServicesDropdown] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [activeTab, setActiveTab] = useState(0);

  // SlideTabs Pill cursor state
  const [pillPosition, setPillPosition] = useState<TabPosition>({
    left: 0,
    width: 0,
    opacity: 0,
  });

  const tabsRef = useRef<(HTMLAnchorElement | HTMLButtonElement | null)[]>([]);
  const navContainerRef = useRef<HTMLDivElement | null>(null);

  const setPillForElement = (el: HTMLElement | null) => {
    if (!el || !navContainerRef.current) return;
    const containerRect = navContainerRef.current.getBoundingClientRect();
    const elRect = el.getBoundingClientRect();
    setPillPosition({
      left: elRect.left - containerRect.left,
      width: elRect.width,
      opacity: 1,
    });
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Update pill position when active tab changes or on mount
  useEffect(() => {
    const currentTabEl = tabsRef.current[activeTab];
    if (currentTabEl) {
      setPillForElement(currentTabEl);
    }
  }, [activeTab]);

  const resetPillToActive = () => {
    const currentTabEl = tabsRef.current[activeTab];
    if (currentTabEl) {
      setPillForElement(currentTabEl);
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      resetPillToActive();
    }, 50);
    return () => clearTimeout(timer);
  }, [isScrolled]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-[padding] duration-300 pointer-events-none flex justify-center ${
          isScrolled ? "pt-2.5 sm:pt-3" : "pt-4 sm:pt-5"
        }`}
      >
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className={`w-full rounded-full transition-[background-color,border-color,box-shadow,backdrop-filter,padding] duration-300 flex items-center justify-between pointer-events-auto border ${
              isScrolled
                ? "px-4 sm:px-6 py-2 sm:py-2.5 bg-white/65 dark:bg-[#070b14]/70 backdrop-blur-2xl backdrop-saturate-180 border-white/80 dark:border-white/10 shadow-[0_8px_32px_0_rgba(71,109,154,0.08),inset_0_1px_1px_0_rgba(255,255,255,0.9)] dark:shadow-[0_8px_32px_0_rgba(0,0,0,0.5),inset_0_1px_1px_0_rgba(255,255,255,0.08)]"
                : "px-0 sm:px-1 py-1.5 bg-transparent border-transparent shadow-none"
            }`}
          >
            {/* Opash Logo */}
            <Link 
              href="/" 
              onClick={() => setActiveTab(0)}
              className="flex items-center gap-3 group shrink-0"
            >
            <Image
              src="/logos/opash-logo-dark.png"
              alt="Opash Software"
              width={160}
              height={38}
              priority
              className="h-7 sm:h-8 w-auto object-contain hidden dark:block transition-transform duration-200 group-hover:scale-102"
            />
            <Image
              src="/logos/opash-logo-light.png"
              alt="Opash Software"
              width={160}
              height={38}
              priority
              className="h-7 sm:h-8 w-auto object-contain block dark:hidden transition-transform duration-200 group-hover:scale-102"
            />
          </Link>

          {/* Desktop SlideTabs Navigation (Strict single-line, no wrap) */}
          <nav 
            className="hidden lg:flex items-center relative shrink-0"
            onMouseLeave={() => {
              resetPillToActive();
            }}
          >
            <div 
              ref={navContainerRef}
              className="relative flex items-center p-1 rounded-full bg-slate-200/45 dark:bg-white/[0.05] border border-white/60 dark:border-white/10 backdrop-blur-xl flex-nowrap shadow-inner"
            >
              {/* Sliding Pill Cursor */}
              <motion.div
                animate={{
                  left: pillPosition.left,
                  width: pillPosition.width,
                  opacity: pillPosition.opacity,
                }}
                transition={{
                  type: "spring",
                  stiffness: 450,
                  damping: 32,
                }}
                className="absolute top-1 bottom-1 rounded-full bg-white/85 dark:bg-[#131f38]/90 shadow-sm border border-white/90 dark:border-white/15 pointer-events-none"
              />

              {navItems.map((item, idx) => {
                const isSelected = activeTab === idx;

                if (item.hasDropdown) {
                  return (
                    <div
                      key={item.id}
                      className="relative shrink-0"
                      onMouseEnter={() => {
                        setServicesDropdown(true);
                        setPillForElement(tabsRef.current[idx]);
                      }}
                      onMouseLeave={() => setServicesDropdown(false)}
                    >
                      <button
                        ref={(el) => {
                          tabsRef.current[idx] = el;
                        }}
                        onClick={() => {
                          soundEffects.click();
                          setActiveTab(idx);
                          setServicesDropdown(!servicesDropdown);
                        }}
                        onMouseEnter={(e) => {
                          soundEffects.hover();
                          setPillForElement(e.currentTarget);
                          setServicesDropdown(true);
                        }}
                        className={`relative z-10 flex items-center gap-1.5 px-3.5 py-1.5 sm:px-4 sm:py-2 rounded-full text-sm font-semibold transition-colors duration-200 cursor-pointer whitespace-nowrap shrink-0 ${
                          isSelected
                            ? "text-[#476D9A] dark:text-[#61BE99] font-bold"
                            : "text-slate-700 dark:text-slate-200 hover:text-[#476D9A] dark:hover:text-[#61BE99]"
                        }`}
                      >
                        <span className="whitespace-nowrap">{item.name}</span>
                        <ChevronDown 
                          className={`w-3.5 h-3.5 transition-transform duration-200 shrink-0 ${
                            servicesDropdown ? "rotate-180 text-[#476D9A] dark:text-[#61BE99]" : "opacity-70"
                          }`} 
                        />
                      </button>

                      {/* Dropdown Menu */}
                      <AnimatePresence>
                        {servicesDropdown && (
                          <div 
                            className="absolute top-full left-0 pt-2 w-80 z-50"
                            onMouseEnter={() => setServicesDropdown(true)}
                            onMouseLeave={() => setServicesDropdown(false)}
                          >
                            <motion.div
                              initial={{ opacity: 0, y: 8, scale: 0.98 }}
                              animate={{ opacity: 1, y: 0, scale: 1 }}
                              exit={{ opacity: 0, y: 6, scale: 0.98 }}
                              transition={{ duration: 0.16, ease: "easeOut" }}
                              className="p-5 rounded-[26px] bg-white dark:bg-[#0c1324] border-2 border-[#476D9A]/40 dark:border-[#61BE99]/40 shadow-2xl shadow-[#476D9A]/20 backdrop-blur-2xl overflow-hidden"
                            >
                              <div className="space-y-1">
                                {serviceDropdownItems.map((serviceName, sIdx) => (
                                  <Link
                                    key={sIdx}
                                    href="#services"
                                    onClick={() => {
                                      soundEffects.click();
                                      setServicesDropdown(false);
                                      setActiveTab(idx);
                                      onOpenQuoteModal(serviceName);
                                    }}
                                    className="group flex items-center justify-between px-3.5 py-2 rounded-xl text-[14px] font-medium text-slate-800 dark:text-slate-200 hover:text-[#476D9A] dark:hover:text-[#61BE99] hover:bg-[#476D9A]/10 transition-all duration-200 cursor-pointer"
                                  >
                                    <span className="whitespace-nowrap">{serviceName}</span>
                                    <ArrowRight className="w-3.5 h-3.5 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200 text-[#476D9A] dark:text-[#61BE99] shrink-0" />
                                  </Link>
                                ))}
                              </div>
                            </motion.div>
                          </div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                }

                return (
                  <Link
                    key={item.id}
                    href={item.href}
                    ref={(el) => {
                      tabsRef.current[idx] = el;
                    }}
                    onClick={() => {
                      soundEffects.click();
                      setActiveTab(idx);
                    }}
                    onMouseEnter={(e) => {
                      soundEffects.hover();
                      setPillForElement(e.currentTarget);
                      setServicesDropdown(false);
                    }}
                    className={`relative z-10 block px-3.5 py-1.5 sm:px-4 sm:py-2 rounded-full text-sm font-semibold transition-colors duration-200 whitespace-nowrap shrink-0 ${
                      isSelected
                        ? "text-[#476D9A] dark:text-[#61BE99] font-bold"
                        : "text-slate-700 dark:text-slate-200 hover:text-[#476D9A] dark:hover:text-[#61BE99]"
                    }`}
                  >
                    <span className="whitespace-nowrap">{item.name}</span>
                  </Link>
                );
              })}
            </div>
          </nav>

          {/* Action CTAs (Strict Single Line - No Vertical Wrap) */}
          <div className="flex items-center gap-2 sm:gap-3 shrink-0 flex-nowrap">
            {/* Light / Dark Mode Toggle */}
            <button
              onClick={() => {
                soundEffects.click();
                setMode(mode === "light" ? "dark" : "light");
              }}
              className="p-2 sm:p-2.5 rounded-full border border-white/80 dark:border-white/10 bg-white/70 dark:bg-white/[0.08] backdrop-blur-xl hover:border-[#476D9A]/50 hover:scale-105 text-slate-800 dark:text-slate-200 transition-all duration-200 cursor-pointer shadow-sm shrink-0"
              title={`Switch to ${mode === "light" ? "Dark" : "Light"} Mode`}
              aria-label="Toggle theme mode"
            >
              {mode === "light" ? (
                <Moon className="w-4 h-4 text-[#476D9A] shrink-0" />
              ) : (
                <Sun className="w-4 h-4 text-amber-400 shrink-0" />
              )}
            </button>

            {/* 21st.dev Interactive Hover Button */}
            <div className="hidden sm:block shrink-0">
              <InteractiveHoverButton
                onClick={() => onOpenQuoteModal()}
                text="Get a Quote"
                className="text-xs font-bold shadow-md shadow-[#476D9A]/20 whitespace-nowrap shrink-0"
              />
            </div>

            {/* Mobile Menu Toggle Button */}
            <div className="flex items-center lg:hidden shrink-0">
              <button
                onClick={() => {
                  soundEffects.click();
                  setMobileMenuOpen(!mobileMenuOpen);
                }}
                className="p-2 rounded-full text-slate-700 dark:text-slate-200 hover:text-slate-900 bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700"
                aria-label="Toggle navigation menu"
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
          </div>
        </div>
      </header>

      {/* Mobile Slide-over Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "spring", stiffness: 350, damping: 30 }}
            className="fixed inset-0 z-50 lg:hidden flex flex-col bg-white dark:bg-[#070b14] overflow-y-auto"
          >
            {/* Mobile Header Bar */}
            <div className="flex items-center justify-between p-5 border-b border-slate-200 dark:border-slate-800 shrink-0">
              <Link href="/" className="flex items-center gap-2" onClick={() => setMobileMenuOpen(false)}>
                <Image
                  src="/logos/opash-logo-dark.png"
                  alt="Opash Software"
                  width={140}
                  height={32}
                  className="h-7 w-auto object-contain hidden dark:block"
                />
                <Image
                  src="/logos/opash-logo-light.png"
                  alt="Opash Software"
                  width={140}
                  height={32}
                  className="h-7 w-auto object-contain block dark:hidden"
                />
              </Link>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => {
                    soundEffects.click();
                    setMode(mode === "light" ? "dark" : "light");
                  }}
                  className="p-2 rounded-full border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900"
                  aria-label="Toggle theme"
                >
                  {mode === "light" ? <Moon className="w-4 h-4 text-blue-600" /> : <Sun className="w-4 h-4 text-amber-400" />}
                </button>
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-2 rounded-full text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>
            </div>

            {/* Mobile Navigation List */}
            <div className="flex-1 p-6 space-y-4">
              {navItems.map((item, idx) => {
                if (item.hasDropdown) {
                  return (
                    <div key={item.id} className="border-b border-slate-100 dark:border-slate-800/80 pb-3">
                      <button
                        onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                        className="w-full flex items-center justify-between py-2 text-lg font-bold text-slate-800 dark:text-slate-100"
                      >
                        <span>{item.name}</span>
                        <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${mobileServicesOpen ? "rotate-180 text-blue-600" : ""}`} />
                      </button>
                      <AnimatePresence>
                        {mobileServicesOpen && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            className="overflow-hidden pl-4 mt-2 space-y-2 border-l-2 border-blue-500/30"
                          >
                            {serviceDropdownItems.map((svc, sIdx) => (
                              <Link
                                key={sIdx}
                                href="#services"
                                onClick={() => {
                                  setMobileMenuOpen(false);
                                  onOpenQuoteModal(svc);
                                }}
                                className="block py-1.5 text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400"
                              >
                                {svc}
                              </Link>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                }

                return (
                  <Link
                    key={item.id}
                    href={item.href}
                    onClick={() => {
                      setActiveTab(idx);
                      setMobileMenuOpen(false);
                    }}
                    className="block py-2 text-lg font-bold text-slate-800 dark:text-slate-100 border-b border-slate-100 dark:border-slate-800/80"
                  >
                    {item.name}
                  </Link>
                );
              })}
            </div>

            {/* Mobile Footer CTA */}
            <div className="p-6 border-t border-slate-200 dark:border-slate-800 shrink-0">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenQuoteModal();
                }}
                className="w-full py-3.5 rounded-full bg-gradient-to-r from-[#476D9A] to-[#61BE99] text-white font-bold text-sm shadow-lg shadow-[#476D9A]/20"
              >
                Get a Quote
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
