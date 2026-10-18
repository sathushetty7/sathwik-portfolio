"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ArrowUpRight, Layers, Activity, Eye } from "lucide-react";
import { projects, Project } from "@/data/projects";

function GithubIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path
        fillRule="evenodd"
        d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
        clipRule="evenodd"
      />
    </svg>
  );
}

function ProjectVisualCanvas({ project }: { project: Project }) {
  const [imgError, setImgError] = useState(false);

  return (
    <div className="relative w-full aspect-[16/10] sm:aspect-[16/9] rounded-2xl bg-[#E6E8ED] border border-[#B9C3D4] overflow-hidden group">
      {!imgError ? (
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          onError={() => setImgError(true)}
        />
      ) : (
        /* Bespoke Editorial Graphic Canvas for Project */
        <div className="w-full h-full p-6 sm:p-8 flex flex-col justify-between bg-gradient-to-br from-[#EDF0F5] to-[#DCE3F0] relative overflow-hidden select-none">
          <div className="absolute inset-0 bg-tech-grid-fine opacity-50 pointer-events-none" />

          {/* Top Canvas Bar */}
          <div className="relative z-10 flex items-center justify-between">
            <span className="text-[11px] font-mono uppercase font-bold tracking-widest text-[#696D77]">
              {project.category}
            </span>
            <div className="flex items-center gap-2">
              <span className="px-2.5 py-1 rounded-full text-[10px] font-mono font-bold bg-[#DCE3F0] text-[#171717] border border-[#B9C3D4]">
                RELEASE {project.year}
              </span>
            </div>
          </div>

          {/* Project Bespoke Art & Diagram */}
          <div className="relative z-10 my-auto flex flex-col items-center justify-center text-center py-4">
            <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-[#171717] text-white flex items-center justify-center shadow-xl mb-4 group-hover:scale-110 transition-transform duration-300">
              {project.id === "coastal-kits" && <Layers className="w-8 h-8 text-[#3B82F6]" />}
              {project.id === "astroview" && <Eye className="w-8 h-8 text-[#8B5CF6]" />}
              {project.id === "datapulse" && <Activity className="w-8 h-8 text-[#10B981]" />}
            </div>
            <h4 className="text-xl sm:text-2xl font-black uppercase tracking-tight text-[#171717]">
              {project.title}
            </h4>
            <p className="text-xs sm:text-sm font-mono text-[#696D77] max-w-sm mt-1 line-clamp-1">
              {project.tagline}
            </p>
          </div>

          {/* Bottom Telemetry Strip */}
          <div className="relative z-10 flex items-center justify-between pt-3 border-t border-[#B9C3D4]/80 text-[10px] font-mono text-[#696D77]">
            <span className="truncate max-w-[60%]">METRICS: {project.metrics}</span>
            <span className="text-[#7000FF] font-bold uppercase flex items-center gap-1">
              Live Preview <ArrowUpRight className="w-3 h-3" />
            </span>
          </div>
        </div>
      )}

      {/* Hover Overlay Hint */}
      <div className="absolute inset-0 bg-[#171717]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
    </div>
  );
}

export default function Projects() {
  return (
    <section
      id="work"
      className="py-24 sm:py-32 bg-[#DCE3F0] bg-tech-grid relative border-b border-[#B9C3D4]"
    >
      <div className="w-full max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 sm:mb-20 pb-8 border-b border-[#B9C3D4]">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EDF0F5] border border-[#B9C3D4] text-[11px] font-mono uppercase tracking-widest text-[#696D77] mb-4">
              <span>02 // ARCHIVE</span>
              <span>•</span>
              <span className="text-[#7000FF] font-bold">SELECTED WORKS</span>
            </div>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tighter uppercase text-[#171717] leading-tight">
              CRAFTED <br className="sm:hidden" />
              <span className="text-[#7000FF]">PROJECTS</span> &amp; SYSTEMS.
            </h2>
          </div>
          <p className="mt-4 md:mt-0 text-sm sm:text-base font-normal text-[#696D77] max-w-md">
            A curated index of production applications, interactive visualizations, and distributed systems
            engineered for performance, precision, and human delight.
          </p>
        </div>

        {/* Project Cards Stack */}
        <div className="flex flex-col gap-16 sm:gap-20">
          {projects.map((project, index) => {
            const isEven = index % 2 === 0;
            return (
              <article
                key={project.id}
                className="relative rounded-3xl bg-[#EDF0F5] border border-[#B9C3D4] p-6 sm:p-8 lg:p-10 shadow-[0_12px_40px_rgba(23,23,23,0.04)] hover:shadow-[0_20px_50px_rgba(23,23,23,0.08)] transition-all duration-300"
              >
                <div
                  className={`grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center ${
                    isEven ? "" : "lg:flex-row-reverse"
                  }`}
                >
                  <div className={`lg:col-span-6 ${isEven ? "lg:order-2" : "lg:order-1"}`}>
                    <a
                      href={project.liveUrl || project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#7000FF] rounded-2xl"
                      aria-label={`Open ${project.title} live website`}
                    >
                      <ProjectVisualCanvas project={project} />
                    </a>
                  </div>

                  {/* Narrative Info Side (6 cols on desktop) */}
                  <div className={`lg:col-span-6 flex flex-col justify-center ${isEven ? "lg:order-1" : "lg:order-2"}`}>
                    {/* Index & Year Kicker */}
                    <div className="flex items-center gap-3 mb-3 text-xs font-mono text-[#696D77]">
                      <span className="px-2.5 py-0.5 rounded-full bg-[#DCE3F0] text-[#171717] font-bold border border-[#B9C3D4]">
                        {(index + 1).toString().padStart(2, "0")}
                      </span>
                      <span className="uppercase tracking-widest">{project.category}</span>
                      <span>•</span>
                      <span>{project.year}</span>
                    </div>

                    {/* Project Title */}
                    <h3 className="text-2xl sm:text-3xl md:text-4xl font-black uppercase tracking-tight text-[#171717] mb-2">
                      {project.title}
                    </h3>

                    {/* Tagline */}
                    <h4 className="text-sm sm:text-base font-mono text-[#7000FF] font-bold mb-4">
                      {project.tagline}
                    </h4>

                    {/* Detailed Paragraph */}
                    <p className="text-sm sm:text-base text-[#696D77] leading-relaxed mb-6 font-normal">
                      {project.description}
                    </p>

                    {/* Key Metrics Pill */}
                    {project.metrics && (
                      <div className="mb-6 p-3 rounded-xl bg-[#E6E8ED] border border-[#B9C3D4] text-xs font-mono text-[#171717] flex items-center gap-2">
                        <Activity className="w-4 h-4 text-[#7000FF] shrink-0" />
                        <span className="truncate">{project.metrics}</span>
                      </div>
                    )}

                    {/* Tech Stack Pills */}
                    <div className="flex flex-wrap gap-2 mb-8">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1 rounded-full text-xs font-mono bg-[#DCE3F0] text-[#171717] border border-[#B9C3D4]"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Links & CTAs */}
                    <div className="flex flex-wrap items-center gap-3 pt-2">
                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-white bg-[#171717] hover:bg-neutral-800 rounded-full transition-all shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#171717]"
                        >
                          <GithubIcon className="w-3.5 h-3.5" />
                          <span>Source Code</span>
                        </a>
                      )}

                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-white bg-[#7000FF] hover:bg-[#5b00d6] rounded-full transition-all shadow-[0_4px_16px_rgba(112,0,255,0.25)] hover:shadow-[0_6px_20px_rgba(112,0,255,0.4)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#7000FF]"
                        >
                          <span>Explore Project</span>
                          <ArrowUpRight className="w-3.5 h-3.5" />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
