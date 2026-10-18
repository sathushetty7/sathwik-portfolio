"use client";

import React, { useState } from "react";
import { skillGroups } from "@/data/skills";
import { Code, Cpu, Wrench, Layers } from "lucide-react";

export default function Skills() {
  const [activeFilter, setActiveFilter] = useState<string>("ALL");

  const filteredGroups =
    activeFilter === "ALL"
      ? skillGroups
      : skillGroups.filter((g) => g.title.toLowerCase().includes(activeFilter.toLowerCase()));

  const getIcon = (title: string) => {
    switch (title.toUpperCase()) {
      case "DEVELOPMENT":
        return <Code className="w-4 h-4" />;
      case "PROGRAMMING":
        return <Layers className="w-4 h-4" />;
      case "DATA & AI":
        return <Cpu className="w-4 h-4" />;
      case "TOOLS":
      default:
        return <Wrench className="w-4 h-4" />;
    }
  };

  return (
    <section
      id="skills"
      className="py-24 sm:py-32 bg-[#DCE3F0] bg-tech-grid relative border-b border-[#B9C3D4]"
    >
      <div className="w-full max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-8 border-b border-[#B9C3D4]">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EDF0F5] border border-[#B9C3D4] text-[11px] font-mono uppercase tracking-widest text-[#696D77] mb-4">
              <span>04 // CAPABILITIES</span>
              <span>•</span>
              <span className="text-[#7000FF] font-bold">TECHNICAL MATRIX</span>
            </div>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tighter uppercase text-[#171717] leading-tight">
              SKILLS &amp; <br className="sm:hidden" />
              <span className="text-[#7000FF]">COMPETENCIES</span>.
            </h2>
          </div>
          <p className="mt-4 md:mt-0 text-sm sm:text-base font-normal text-[#696D77] max-w-md">
            Proficiencies across full-stack systems engineering, core languages, machine learning pipelines, and creative developer tools.
          </p>
        </div>

        {/* Filter Pills Bar */}
        <div className="flex flex-wrap items-center gap-2 mb-12">
          {["ALL", "DEVELOPMENT", "PROGRAMMING", "DATA & AI", "TOOLS"].map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-4 py-1.5 text-xs font-mono font-bold uppercase tracking-wider rounded-full border transition-all duration-200 ${
                activeFilter === filter
                  ? "bg-[#171717] text-white border-[#171717] shadow-sm"
                  : "bg-[#EDF0F5] text-[#696D77] border-[#B9C3D4] hover:text-[#171717] hover:bg-[#E6E8ED]"
              }`}
            >
              {filter === "ALL" ? "All Domains" : filter}
            </button>
          ))}
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {filteredGroups.map((group) => (
            <div
              key={group.number}
              className="p-6 sm:p-8 rounded-3xl bg-[#EDF0F5] border border-[#B9C3D4] shadow-[0_8px_30px_rgba(23,23,23,0.03)] hover:shadow-[0_12px_40px_rgba(23,23,23,0.06)] transition-all duration-300"
            >
              {/* Category Header */}
              <div className="flex items-center justify-between pb-4 mb-4 border-b border-[#B9C3D4]">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-xl bg-[#DCE3F0] flex items-center justify-center text-[#7000FF]">
                    {getIcon(group.title)}
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-black uppercase tracking-tight text-[#171717]">
                      {group.title}
                    </h3>
                  </div>
                </div>
                <span className="text-[10px] font-mono font-bold text-[#696D77] px-2.5 py-0.5 rounded bg-[#DCE3F0] border border-[#B9C3D4]">
                  SYS.{group.number}
                </span>
              </div>

              {/* Group Description */}
              <p className="text-xs sm:text-sm text-[#696D77] mb-6 font-normal">
                {group.description}
              </p>

              {/* Skills Tags Matrix */}
              <div className="flex flex-wrap gap-2.5">
                {group.skills.map((skillName) => (
                  <span
                    key={skillName}
                    className="px-3.5 py-2 rounded-xl text-xs font-mono font-semibold bg-[#E6E8ED] text-[#171717] border border-[#B9C3D4] hover:border-[#7000FF] hover:bg-white transition-all shadow-2xs"
                  >
                    {skillName}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
