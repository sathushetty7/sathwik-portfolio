"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ArrowDown, ArrowUpRight, Terminal, Code2, Cpu } from "lucide-react";

export default function Hero() {
  const [imageError, setImageError] = useState(false);

  return (
    <section
      id="home"
      className="relative min-h-screen pt-28 pb-20 md:pt-36 md:pb-28 flex items-center bg-[#DCE3F0] bg-tech-grid overflow-hidden border-b border-[#B9C3D4]"
    >
      {/* Giant Faded Background Words behind the hero */}
      <div
        aria-hidden="true"
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 select-none pointer-events-none w-full text-center overflow-hidden z-0 flex flex-col items-center justify-center"
      >
        <span className="text-[13vw] font-black uppercase tracking-tighter text-[#171717] opacity-[0.035] leading-[0.85] block whitespace-nowrap">
          SOFTWARE
        </span>
        <span className="text-[13vw] font-black uppercase tracking-tighter text-[#171717] opacity-[0.035] leading-[0.85] block whitespace-nowrap">
          DEVELOPMENT
        </span>
      </div>

      {/* Decorative Technical Grid Markers */}
      <div className="absolute top-8 left-8 text-[11px] font-mono tracking-widest text-[#696D77] hidden lg:block select-none opacity-60">
        + LOC: 12.91° N, 74.85° E // PORTFOLIO: BUILD_2025
      </div>
      <div className="absolute top-8 right-8 text-[11px] font-mono tracking-widest text-[#696D77] hidden lg:block select-none opacity-60">
        SYS.01 // STATUS: OPERATIONAL [ACTIVE]
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Bold Editorial Typography & Actions */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            {/* Technical Sub-headline / Kicker */}
            <div className="inline-flex items-center gap-2.5 px-3 py-1.5 rounded-full bg-[#EDF0F5] border border-[#B9C3D4] w-fit mb-6 shadow-xs">
              <span className="w-2 h-2 rounded-full bg-[#7000FF] animate-ping" />
              <span className="text-[11px] font-mono font-bold tracking-wider uppercase text-[#171717]">
                Software Engineer &amp; Creative Developer
              </span>
            </div>

            {/* Oversized Heavy Editorial Headline */}
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-[6rem] font-black tracking-tighter text-[#171717] uppercase leading-[0.92] mb-6">
              SATHWIK <br />
              <span className="text-[#7000FF] drop-shadow-sm">SHETTY.</span>
            </h1>

            {/* Editorial Lead Description */}
            <p className="text-base sm:text-lg md:text-xl text-[#696D77] max-w-2xl leading-relaxed mb-8 font-normal">
              I design and develop high-performance web systems, full-stack architectures,
              and AI-driven applications with relentless attention to speed, scalability, and craftsmanship.
            </p>

            {/* Call to Action Group */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href="#work"
                className="group relative inline-flex items-center justify-center gap-2 px-7 py-3.5 text-sm font-bold uppercase tracking-wider text-white bg-[#7000FF] hover:bg-[#5b00d6] rounded-full transition-all duration-200 shadow-[0_8px_25px_rgba(112,0,255,0.3)] hover:shadow-[0_12px_32px_rgba(112,0,255,0.45)] hover:-translate-y-0.5 active:translate-y-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#7000FF]"
              >
                <span>View Selected Work</span>
                <ArrowDown className="w-4 h-4 transition-transform group-hover:translate-y-0.5" />
              </a>

              <a
                href="#about"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-bold uppercase tracking-wider text-[#171717] bg-[#EDF0F5] hover:bg-[#E6E8ED] border border-[#B9C3D4] rounded-full transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#171717]"
              >
                <span>About Sathwik</span>
                <ArrowUpRight className="w-4 h-4 text-[#696D77]" />
              </a>
            </div>

            {/* Technical Quick Spec Metrics */}
            <div className="grid grid-cols-3 gap-4 mt-12 pt-8 border-t border-[#B9C3D4]/80">
              <div>
                <span className="block text-2xl sm:text-3xl font-black tracking-tight text-[#171717]">
                  03+
                </span>
                <span className="text-[11px] font-mono uppercase text-[#696D77] tracking-wider">
                  Years Building
                </span>
              </div>
              <div>
                <span className="block text-2xl sm:text-3xl font-black tracking-tight text-[#171717]">
                  15+
                </span>
                <span className="text-[11px] font-mono uppercase text-[#696D77] tracking-wider">
                  Shipped Projects
                </span>
              </div>
              <div>
                <span className="block text-2xl sm:text-3xl font-black tracking-tight text-[#7000FF]">
                  100%
                </span>
                <span className="text-[11px] font-mono uppercase text-[#696D77] tracking-wider">
                  Precision &amp; Quality
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Grayscale Portrait / Creative Visual Card */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-md sm:max-w-lg lg:max-w-none">
              {/* Architectural Frame Layer */}
              <div className="relative p-2 sm:p-3 rounded-3xl bg-[#EDF0F5] border border-[#B9C3D4] shadow-[0_20px_50px_rgba(23,23,23,0.06)] overflow-hidden">
                {/* Technical Card Header */}
                <div className="flex items-center justify-between px-3 py-2 border-b border-[#B9C3D4] mb-3 text-xs font-mono text-[#696D77]">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#B9C3D4]" />
                    <span className="w-2.5 h-2.5 rounded-full bg-[#B9C3D4]" />
                    <span className="w-2.5 h-2.5 rounded-full bg-[#B9C3D4]" />
                  </div>
                  <span className="tracking-widest uppercase font-semibold">
                    PROFILE // SATHWIK.DEV
                  </span>
                </div>

                {/* Main Media Showcase (Portrait) */}
                <div className="relative aspect-[4/5] sm:aspect-[3/4] w-full rounded-2xl bg-[#E6E8ED] border border-[#B9C3D4] overflow-hidden flex flex-col items-center justify-center group shadow-inner">
                  {/* Subtle technical background grid behind portrait */}
                  <div className="absolute inset-0 bg-tech-grid-fine opacity-40 pointer-events-none" />

                  <Image
                    src="/images/sathwik-portrait.png"
                    alt="Sathwik — Software Developer & Engineer"
                    fill
                    priority
                    sizes="(max-width: 768px) 100vw, 500px"
                    className="object-cover object-top hover:scale-105 transition-transform duration-700 ease-out"
                  />

                  {/* Subtle vignette at the bottom */}
                  <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-[#171717]/25 to-transparent pointer-events-none" />

                  {/* Floating Status Pill */}
                  <div className="absolute bottom-4 left-4 right-4 z-20 flex items-center justify-between p-3 rounded-xl glass-nav shadow-lg">
                    <div className="flex items-center gap-2">
                      <span className="relative flex h-2.5 w-2.5">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#7000FF] opacity-75" />
                        <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#7000FF]" />
                      </span>
                      <span className="text-xs font-bold uppercase tracking-wider text-[#171717]">
                        Open For Opportunities
                      </span>
                    </div>
                    <span className="text-[10px] font-mono uppercase text-[#696D77]">
                      2025-2026
                    </span>
                  </div>
                </div>

                {/* Technical Details Strip */}
                <div className="mt-3 pt-2 px-1 flex items-center justify-between text-[11px] font-mono text-[#696D77]">
                  <span className="flex items-center gap-1">
                    <Code2 className="w-3.5 h-3.5 text-[#171717]" />
                    TypeScript &amp; Python
                  </span>
                  <span className="flex items-center gap-1">
                    <Cpu className="w-3.5 h-3.5 text-[#7000FF]" />
                    Systems &amp; AI
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
