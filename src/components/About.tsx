"use client";

import React from "react";
import { Compass, GraduationCap, Laptop, Sparkles, Terminal } from "lucide-react";

export default function About() {
  const principles = [
    {
      title: "Performance First",
      desc: "Sub-second load times, efficient data structures, and zero extraneous dependencies.",
      icon: Terminal,
    },
    {
      title: "Architectural Rigor",
      desc: "Thoughtful schema modeling, maintainable boundaries, and strict type safety.",
      icon: Laptop,
    },
    {
      title: "Editorial Craft",
      desc: "Interfaces inspired by publication design—bold typography, fine grids, and visual calm.",
      icon: Sparkles,
    },
    {
      title: "Continuous Curiosity",
      desc: "Relentless exploration across distributed cloud architectures and generative AI models.",
      icon: Compass,
    },
  ];

  return (
    <section
      id="about"
      className="py-24 sm:py-32 bg-[#EDF0F5] border-b border-[#B9C3D4] relative overflow-hidden"
    >
      <div className="w-full max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-8 border-b border-[#B9C3D4]">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#DCE3F0] border border-[#B9C3D4] text-[11px] font-mono uppercase tracking-widest text-[#696D77] mb-4">
              <span>03 // PERSPECTIVE</span>
              <span>•</span>
              <span className="text-[#7000FF] font-bold">ABOUT SATHWIK</span>
            </div>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tighter uppercase text-[#171717] leading-tight">
              ENGINEERING <br className="sm:hidden" />
              <span className="text-[#7000FF]">PURPOSE</span> &amp; CRAFT.
            </h2>
          </div>
          <p className="mt-4 md:mt-0 text-sm sm:text-base font-normal text-[#696D77] max-w-md">
            Bridging rigorous computer science principles with high-fidelity creative execution to create software that resonates.
          </p>
        </div>

        {/* Editorial Pull Quote */}
        <div className="mb-16 p-8 sm:p-12 rounded-3xl bg-[#E6E8ED] border border-[#B9C3D4] relative">
          <div className="text-[11px] font-mono uppercase tracking-widest text-[#7000FF] font-bold mb-4">
            {"// PHILOSOPHY & APPROACH"}
          </div>
          <blockquote className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-[#171717] leading-snug">
            “I believe the most enduring digital products emerge where engineering rigor meets typographic discipline and aesthetic empathy.”
          </blockquote>
          <div className="mt-6 flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-[#171717] text-white flex items-center justify-center text-xs font-black">
              S
            </div>
            <div>
              <div className="text-xs font-bold uppercase tracking-wider text-[#171717]">
                Sathwik
              </div>
              <div className="text-[11px] font-mono text-[#696D77]">
                Computer Science &amp; Systems Developer
              </div>
            </div>
          </div>
        </div>

        {/* 2-Column Editorial Grid: Bio & Experience */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-16">
          {/* Left Column: Narrative Biography */}
          <div className="lg:col-span-7 flex flex-col gap-6 text-[#171717]">
            <h3 className="text-xl sm:text-2xl font-black uppercase tracking-tight text-[#171717]">
              Background &amp; Ambition
            </h3>
            <p className="text-base sm:text-lg text-[#696D77] leading-relaxed">
              I am a computer science student and software engineer deeply immersed in full-stack web
              ecosystems, telemetry systems, and machine learning pipelines. Whether architecting
              sub-second database interactions or sculpting responsive user interfaces, I focus on
              clean code and architectural stability.
            </p>
            <p className="text-base sm:text-lg text-[#696D77] leading-relaxed">
              My engineering philosophy revolves around clarity: minimizing complexity, optimizing
              render cycles, and designing intuitive user interactions that feel both effortless and
              authoritative.
            </p>

            {/* Academic Credentials Card */}
            <div className="mt-4 p-6 rounded-2xl bg-[#DCE3F0] border border-[#B9C3D4] flex items-start gap-4">
              <div className="p-3 rounded-xl bg-white border border-[#B9C3D4] text-[#7000FF] shrink-0">
                <GraduationCap className="w-6 h-6" />
              </div>
              <div>
                <span className="text-[11px] font-mono uppercase tracking-wider text-[#696D77] font-semibold">
                  Academic Foundation
                </span>
                <h4 className="text-base sm:text-lg font-bold text-[#171717] mt-0.5">
                  B.Tech in Computer Science and Engineering
                </h4>
                <p className="text-xs sm:text-sm text-[#696D77] mt-1">
                  Focusing on Algorithms, Distributed Systems, Database Management, and Artificial Intelligence.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Core Architectural Principles */}
          <div className="lg:col-span-5 flex flex-col gap-4">
            <h3 className="text-xl sm:text-2xl font-black uppercase tracking-tight text-[#171717] mb-2">
              Engineering Pillars
            </h3>
            <div className="flex flex-col gap-3">
              {principles.map((item, idx) => {
                const IconComponent = item.icon;
                return (
                  <div
                    key={item.title}
                    className="p-5 rounded-2xl bg-[#E6E8ED] border border-[#B9C3D4] hover:bg-white/80 transition-colors duration-200"
                  >
                    <div className="flex items-center gap-3 mb-1.5">
                      <div className="w-7 h-7 rounded-lg bg-[#DCE3F0] flex items-center justify-center text-[#7000FF]">
                        <IconComponent className="w-4 h-4" />
                      </div>
                      <span className="text-xs font-mono font-bold text-[#696D77]">
                        0{idx + 1}
                      </span>
                      <h4 className="text-sm font-bold uppercase tracking-wider text-[#171717]">
                        {item.title}
                      </h4>
                    </div>
                    <p className="text-xs sm:text-sm text-[#696D77] pl-10">
                      {item.desc}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
