"use client";

import React, { useState, useEffect } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";

interface NavItem {
  name: string;
  href: string;
}

const navItems: NavItem[] = [
  { name: "Home", href: "#home" },
  { name: "Work", href: "#work" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
];

export default function Navbar() {
  const [activeSection, setActiveSection] = useState<string>("home");
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);
  const [scrolled, setScrolled] = useState<boolean>(false);

  // Track scroll position to enhance navbar style
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // IntersectionObserver for active section tracking
  useEffect(() => {
    const sectionIds = ["home", "work", "about", "skills", "contact"];
    const observerOptions = {
      root: null,
      rootMargin: "-25% 0px -65% 0px",
      threshold: 0,
    };

    const observerCallback: IntersectionObserverCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    sectionIds.forEach((id) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  // Handle escape key to close mobile menu
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [mobileMenuOpen]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [mobileMenuOpen]);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const targetId = href.replace("#", "");
    const element = document.getElementById(targetId);
    if (element) {
      const navOffset = 90;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex justify-center px-4 sm:px-6 py-4 pointer-events-none">
      <nav
        aria-label="Main Navigation"
        className={`pointer-events-auto w-full max-w-5xl rounded-full transition-all duration-300 px-4 sm:px-6 py-2.5 flex items-center justify-between glass-nav ${
          scrolled ? "shadow-[0_8px_32px_rgba(23,23,23,0.08)] py-2" : ""
        }`}
      >
        {/* Brand Mark */}
        <a
          href="#home"
          onClick={(e) => scrollToSection(e, "#home")}
          aria-label="Sathwik Portfolio Home"
          className="flex items-center gap-1.5 text-xl font-black tracking-tighter text-[#171717] hover:opacity-80 transition-opacity focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#7000FF] rounded-lg px-1"
        >
          <span>S</span>
          <span className="w-2 h-2 rounded-full bg-[#7000FF] inline-block mb-1 animate-pulse" />
        </a>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex items-center gap-1.5 p-1 rounded-full bg-[#DCE3F0]/60 border border-[#B9C3D4]/50">
          {navItems.map((item) => {
            const isActive = activeSection === item.href.replace("#", "");
            return (
              <a
                key={item.name}
                href={item.href}
                onClick={(e) => scrollToSection(e, item.href)}
                className={`px-4 py-1.5 text-xs font-semibold tracking-wide uppercase transition-all duration-200 rounded-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#7000FF] ${
                  isActive
                    ? "bg-[#171717] text-white shadow-sm"
                    : "text-[#696D77] hover:text-[#171717] hover:bg-[#EDF0F5]/80"
                }`}
              >
                {item.name}
              </a>
            );
          })}
        </div>

        {/* CTA Button Desktop */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href="#contact"
            onClick={(e) => scrollToSection(e, "#contact")}
            className="group relative inline-flex items-center justify-center gap-1.5 px-5 py-2 text-xs font-bold uppercase tracking-wider text-white bg-[#7000FF] hover:bg-[#5b00d6] rounded-full transition-all duration-200 shadow-[0_4px_16px_rgba(112,0,255,0.25)] hover:shadow-[0_6px_24px_rgba(112,0,255,0.4)] active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#7000FF] focus-visible:ring-offset-2"
          >
            <span>Get in touch</span>
            <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          type="button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-expanded={mobileMenuOpen}
          aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
          className="md:hidden flex items-center justify-center w-9 h-9 rounded-full bg-[#EDF0F5] border border-[#B9C3D4] text-[#171717] hover:bg-[#E6E8ED] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#7000FF]"
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </nav>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-black/30 backdrop-blur-sm md:hidden pointer-events-auto">
          <div className="absolute top-20 left-4 right-4 bg-[#EDF0F5] border border-[#B9C3D4] rounded-2xl p-6 shadow-2xl flex flex-col gap-4 animate-in fade-in slide-in-from-top-4 duration-200">
            <div className="flex items-center justify-between pb-3 border-b border-[#B9C3D4]">
              <span className="text-xs font-mono font-bold tracking-widest text-[#696D77] uppercase">
                {"// Navigation"}
              </span>
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="text-[#696D77] hover:text-[#171717] p-1"
                aria-label="Close menu"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="flex flex-col gap-2">
              {navItems.map((item) => {
                const isActive = activeSection === item.href.replace("#", "");
                return (
                  <a
                    key={item.name}
                    href={item.href}
                    onClick={(e) => scrollToSection(e, item.href)}
                    className={`px-4 py-3 text-sm font-bold tracking-wide uppercase rounded-xl transition-colors ${
                      isActive
                        ? "bg-[#171717] text-white"
                        : "text-[#171717] hover:bg-[#DCE3F0]"
                    }`}
                  >
                    {item.name}
                  </a>
                );
              })}
              <a
                href="#contact"
                onClick={(e) => scrollToSection(e, "#contact")}
                className="mt-2 flex items-center justify-center gap-2 w-full py-3 text-sm font-bold uppercase tracking-wider text-white bg-[#7000FF] hover:bg-[#5b00d6] rounded-xl transition-all shadow-md"
              >
                <span>Get in touch</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>

            <div className="pt-3 border-t border-[#B9C3D4] flex items-center justify-between text-xs text-[#696D77] font-mono">
              <span>SATHWIK // 2025-2026</span>
              <span className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                Available
              </span>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
