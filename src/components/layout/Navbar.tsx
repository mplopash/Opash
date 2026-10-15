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
    window.addEventListener("scroll", handleScroll);
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

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? "bg-white/90 dark:bg-[#070b14]/90 backdrop-blur-xl border-b border-slate-200/80 dark:border-slate-800 shadow-md shadow-slate-900/5 py-3"
            : "bg-transparent py-4 sm:py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Opash Logo */}
          <Link 
            href="/" 
            onClick={() => setActiveTab(0)}
            className="flex items-center gap-3 group shrink-0"
          >
            <Image
              src="/logos/opash-logo-dark.png"
              alt="Opash Software"
              width={170}
              height={40}
              priority
              className="h-8 sm:h-9 w-auto object-contain hidden dark:block transition-transform duration-200 group-hover:scale-102"
            />
            <Image
              src="/logos/opash-logo-light.png"
              alt="Opash Software"
              width={170}
              height={40}
              priority
              className="h-8 sm:h-9 w-auto object-contain block dark:hidden transition-transform duration-200 group-hover:scale-102"
            />
          </Link>

          {/* Desktop SlideTabs Navigation */}
          <nav 
            className="hidden lg:flex items-center relative"
            onMouseLeave={() => {
              resetPillToActive();
            }}
          >
            <div 
              ref={navContainerRef}
              className="relative flex items-center p-1 rounded-full bg-slate-100/70 dark:bg-slate-900/60 border border-slate-200/80 dark:border-slate-800/80 backdrop-blur-md"
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
                className="absolute top-1 bottom-1 rounded-full bg-white dark:bg-[#131f38] shadow-sm border border-slate-200/90 dark:border-slate-700/80 pointer-events-none"
              />

              {navItems.map((item, idx) => {
                const isSelected = activeTab === idx;

                if (item.hasDropdown) {
                  return (
                    <div
                      key={item.id}
                      className="relative"
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
                        className={`relative z-10 flex items-center gap-1.5 px-4 py-2 rounded-full text-sm font-semibold transition-colors duration-200 cursor-pointer ${
                          isSelected
                            ? "text-[#1d4ed8] dark:text-[#3b82f6] font-bold"
                            : "text-slate-700 dark:text-slate-200 hover:text-[#1d4ed8] dark:hover:text-[#3b82f6]"
                        }`}
                      >
                        <span>{item.name}</span>
                        <ChevronDown 
                          className={`w-3.5 h-3.5 transition-transform duration-200 ${
                            servicesDropdown ? "rotate-180 text-[#1d4ed8] dark:text-[#3b82f6]" : "opacity-70"
                          }`} 
                        />
                      </button>

                      {/* Dropdown Menu (Styled exactly as in the reference image) */}
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
                              className="p-5 rounded-[26px] bg-white dark:bg-[#0c1324] border-2 border-blue-400 dark:border-blue-500 shadow-2xl shadow-blue-500/20 backdrop-blur-2xl overflow-hidden"
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
                                    className="group flex items-center justify-between px-3.5 py-2 rounded-xl text-[14.5px] font-medium text-slate-800 dark:text-slate-200 hover:text-[#1d4ed8] dark:hover:text-[#3b82f6] hover:bg-blue-50/70 dark:hover:bg-blue-950/40 hover:translate-x-1.5 transition-all duration-200 cursor-pointer"
                                  >
                                    <span>{serviceName}</span>
                                    <ArrowRight className="w-3.5 h-3.5 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200 text-[#1d4ed8] dark:text-[#3b82f6]" />
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
                    className={`relative z-10 block px-4 py-2 rounded-full text-sm font-semibold transition-colors duration-200 ${
                      isSelected
                        ? "text-[#1d4ed8] dark:text-[#3b82f6] font-bold"
                        : "text-slate-700 dark:text-slate-200 hover:text-[#1d4ed8] dark:hover:text-[#3b82f6]"
                    }`}
                  >
                    {item.name}
                  </Link>
                );
              })}
            </div>
          </nav>

          {/* Action CTAs */}
          <div className="hidden sm:flex items-center gap-3">
            <Link
              href="#estimator"
              className="px-3 py-1.5 rounded-full text-xs font-semibold text-slate-700 dark:text-slate-200 bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 hover:border-[#1d4ed8]/50 hover:bg-blue-50 dark:hover:bg-slate-800 transition-all duration-200 flex items-center gap-1.5 shadow-sm"
            >
              <Sparkles className="w-3.5 h-3.5 text-[#10b981]" />
              <span>Estimator</span>
            </Link>

            <a
              href="tel:+919537222266"
              className="group flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold text-slate-600 dark:text-slate-300 hover:text-[#1d4ed8] dark:hover:text-[#3b82f6] transition-all duration-200"
            >
              <PhoneCall className="w-3.5 h-3.5 text-[#10b981] group-hover:scale-110 transition-transform" />
              <span>+91 95372-22266</span>
            </a>

            {/* Light / Dark Mode Toggle */}
            <button
              onClick={() => {
                soundEffects.click();
                setMode(mode === "light" ? "dark" : "light");
              }}
              className="p-2.5 rounded-full border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 hover:border-blue-500/50 hover:scale-105 text-slate-800 dark:text-slate-200 transition-all duration-200 cursor-pointer shadow-sm"
              title={`Switch to ${mode === "light" ? "Dark" : "Light"} Mode`}
              aria-label="Toggle theme mode"
            >
              {mode === "light" ? (
                <Moon className="w-4 h-4 text-blue-600" />
              ) : (
                <Sun className="w-4 h-4 text-amber-400" />
              )}
            </button>

            {/* 21st.dev Interactive Hover Button */}
            <InteractiveHoverButton
              onClick={() => onOpenQuoteModal()}
              text="Get a Quote"
              className="text-xs font-bold shadow-md shadow-blue-700/20"
            />
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="flex items-center lg:hidden">
            <button
              onClick={() => {
                soundEffects.click();
                setMobileMenuOpen(!mobileMenuOpen);
              }}
              className="p-2 rounded-xl text-slate-700 dark:text-slate-200 hover:text-slate-900 bg-slate-100 dark:bg-slate-800"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
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
            className="fixed inset-0 z-50 lg:hidden flex flex-col bg-white dark:bg-[#070b14]"
          >
            <div className="flex items-center justify-between p-5 border-b border-slate-200 dark:border-slate-800">
              <Link href="/" className="flex items-center gap-2" onClick={() => setMobileMenuOpen(false)}>
                <Image
                  src="/logos/opash-logo-dark.png"
                  alt="Opash Software"
                  width={150}
                  height={36}
                  className="h-7 w-auto object-contain hidden dark:block"
                />
                <Image
                  src="/logos/opash-logo-light.png"
                  alt="Opash Software"
                  width={150}
                  height={36}
                  className="h-7 w-auto object-contain block dark:hidden"
                />
              </Link>
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="p-2 rounded-lg text-slate-500 hover:text-slate-900 dark:hover:text-white"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto p-6 space-y-4">
              <Link
                href="#"
                onClick={() => setMobileMenuOpen(false)}
                className="block py-2 text-lg font-bold text-slate-900 dark:text-white"
              >
                Home
              </Link>

              {/* Mobile Services Accordion */}
              <div>
                <button
                  onClick={() => setServicesDropdown(!servicesDropdown)}
                  className="flex items-center justify-between w-full py-2 text-lg font-bold text-slate-900 dark:text-white"
                >
                  <span>Services</span>
                  <ChevronDown className={`w-4 h-4 transition-transform ${servicesDropdown ? "rotate-180" : ""}`} />
                </button>
                {servicesDropdown && (
                  <div className="pl-4 py-2 space-y-2 border-l-2 border-blue-500/40 mt-1">
                    {serviceDropdownItems.map((svc, i) => (
                      <Link
                        key={i}
                        href="#services"
                        onClick={() => {
                          setMobileMenuOpen(false);
                          onOpenQuoteModal(svc);
                        }}
                        className="block py-1.5 text-sm text-slate-600 dark:text-slate-300 hover:text-blue-600 font-medium"
                      >
                        {svc}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              <Link
                href="#about"
                onClick={() => setMobileMenuOpen(false)}
                className="block py-2 text-lg font-bold text-slate-900 dark:text-white"
              >
                Company
              </Link>
              <Link
                href="#blogs"
                onClick={() => setMobileMenuOpen(false)}
                className="block py-2 text-lg font-bold text-slate-900 dark:text-white"
              >
                Blogs
              </Link>
              <Link
                href="#why-us"
                onClick={() => setMobileMenuOpen(false)}
                className="block py-2 text-lg font-bold text-slate-900 dark:text-white"
              >
                Career
              </Link>
              <Link
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="block py-2 text-lg font-bold text-slate-900 dark:text-white"
              >
                Contact Us
              </Link>
            </div>

            <div className="p-6 border-t border-slate-200 dark:border-slate-800 space-y-3">
              <InteractiveHoverButton
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenQuoteModal();
                }}
                text="Get a Quote"
                className="w-full justify-center"
              />
              <a
                href="tel:+919537222266"
                className="block text-center text-sm font-semibold text-slate-600 dark:text-slate-400 py-2"
              >
                Direct Line: +91 95372-22266
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
