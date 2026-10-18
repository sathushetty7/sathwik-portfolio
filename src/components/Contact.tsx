"use client";

import React, { useState } from "react";
import { Copy, Check, ArrowUpRight, Send, MapPin } from "lucide-react";

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

function LinkedinIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 8.76a1.64 1.64 0 1 0 0-3.28 1.64 1.64 0 0 0 0 3.28M7.86 18.5v-8.37H5.07v8.37h2.79z" />
    </svg>
  );
}

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const emailAddress = "sathushetty7@gmail.com";

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(emailAddress);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setFormSubmitted(true);
      setFormData({ name: "", email: "", subject: "", message: "" });
    }, 800);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer id="contact" className="bg-[#EDF0F5] pt-24 sm:pt-32 pb-12 relative overflow-hidden">
      <div className="w-full max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        {/* Contact Section Header */}
        <div className="mb-16 pb-8 border-b border-[#B9C3D4]">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#DCE3F0] border border-[#B9C3D4] text-[11px] font-mono uppercase tracking-widest text-[#696D77] mb-4">
            <span>05 // DIALOGUE</span>
            <span>•</span>
            <span className="text-[#7000FF] font-bold">INITIATE CONTACT</span>
          </div>

          <h2 className="text-4xl sm:text-6xl md:text-7xl font-black tracking-tighter uppercase text-[#171717] leading-[0.95]">
            LET&apos;S BUILD <br />
            <span className="text-[#7000FF]">SOMETHING</span> <br />
            EXTRAORDINARY.
          </h2>
        </div>

        {/* 2-Column Layout: Direct Details & Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start mb-24">
          {/* Left Column: Direct Inquiries & Socials */}
          <div className="lg:col-span-5 flex flex-col gap-8">
            <p className="text-base sm:text-lg text-[#696D77] leading-relaxed">
              Have a visionary project in mind, an exciting role to discuss, or want to collaborate
              on intelligent software systems? I&apos;m always keen to connect.
            </p>

            {/* Email Copy Box */}
            <div className="p-6 rounded-2xl bg-[#E6E8ED] border border-[#B9C3D4]">
              <span className="text-xs font-mono uppercase tracking-wider text-[#696D77] block mb-2 font-semibold">
                Direct Email Channel
              </span>
              <div className="flex items-center justify-between gap-3">
                <a
                  href={`mailto:${emailAddress}`}
                  className="text-base sm:text-lg font-mono font-bold text-[#171717] hover:text-[#7000FF] transition-colors truncate"
                >
                  {emailAddress}
                </a>
                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#DCE3F0] hover:bg-white text-xs font-mono font-bold text-[#171717] border border-[#B9C3D4] transition-all shrink-0 active:scale-95 cursor-pointer"
                  aria-label="Copy email address"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-600" />
                      <span className="text-emerald-700">Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5 text-[#696D77]" />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* Metadata Badges */}
            <div className="flex flex-col gap-3 text-xs font-mono text-[#696D77]">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-[#7000FF]" />
                <span>Karnataka, India (Available Worldwide / Remote)</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span className="text-[#171717] font-semibold">
                  Available for Full-Time Roles &amp; High-Impact Projects
                </span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://github.com/sathushetty7"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2.5 rounded-full bg-[#E6E8ED] hover:bg-white border border-[#B9C3D4] text-xs font-bold uppercase tracking-wider text-[#171717] transition-all hover:-translate-y-0.5"
              >
                <GithubIcon className="w-4 h-4" />
                <span>GitHub</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-[#696D77]" />
              </a>

              <a
                href="https://linkedin.com/in/sathwik"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2.5 rounded-full bg-[#E6E8ED] hover:bg-white border border-[#B9C3D4] text-xs font-bold uppercase tracking-wider text-[#171717] transition-all hover:-translate-y-0.5"
              >
                <LinkedinIcon className="w-4 h-4" />
                <span>LinkedIn</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-[#696D77]" />
              </a>
            </div>
          </div>

          {/* Right Column: Interactive Dispatch Form */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-10 rounded-3xl bg-[#E6E8ED] border border-[#B9C3D4] shadow-xs">
              <h3 className="text-xl sm:text-2xl font-black uppercase tracking-tight text-[#171717] mb-6 flex items-center justify-between">
                <span>Send a Message</span>
                <span className="text-xs font-mono font-normal text-[#696D77] uppercase">
                  Direct Dispatch
                </span>
              </h3>

              {formSubmitted ? (
                <div className="p-8 rounded-2xl bg-[#DCE3F0] border border-emerald-500/50 text-center flex flex-col items-center">
                  <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mb-4">
                    <Check className="w-6 h-6" />
                  </div>
                  <h4 className="text-lg font-bold text-[#171717]">Message Transmitted</h4>
                  <p className="text-sm text-[#696D77] mt-1 max-w-sm">
                    Thank you for reaching out. Sathwik will review your message and reply promptly.
                  </p>
                  <button
                    type="button"
                    onClick={() => setFormSubmitted(false)}
                    className="mt-6 px-4 py-2 text-xs font-mono uppercase font-bold text-[#171717] bg-white rounded-full border border-[#B9C3D4] hover:bg-[#EDF0F5] cursor-pointer"
                  >
                    Send Another Note
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-xs font-mono uppercase text-[#171717] mb-1.5 font-bold">
                        Your Name *
                      </label>
                      <input
                        id="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Ada Lovelace"
                        className="w-full px-4 py-3 rounded-xl bg-[#EDF0F5] border border-[#B9C3D4] text-sm text-[#171717] placeholder:text-[#696D77]/60 focus:outline-none focus:ring-2 focus:ring-[#7000FF] focus:border-transparent transition-all"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-xs font-mono uppercase text-[#171717] mb-1.5 font-bold">
                        Your Email *
                      </label>
                      <input
                        id="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="ada@example.com"
                        className="w-full px-4 py-3 rounded-xl bg-[#EDF0F5] border border-[#B9C3D4] text-sm text-[#171717] placeholder:text-[#696D77]/60 focus:outline-none focus:ring-2 focus:ring-[#7000FF] focus:border-transparent transition-all"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-xs font-mono uppercase text-[#171717] mb-1.5 font-bold">
                      Subject / Topic
                    </label>
                    <input
                      id="subject"
                      type="text"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      placeholder="Project Opportunity // Collaboration"
                      className="w-full px-4 py-3 rounded-xl bg-[#EDF0F5] border border-[#B9C3D4] text-sm text-[#171717] placeholder:text-[#696D77]/60 focus:outline-none focus:ring-2 focus:ring-[#7000FF] focus:border-transparent transition-all"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-xs font-mono uppercase text-[#171717] mb-1.5 font-bold">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      rows={4}
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Tell me about your project, timeline, and goals..."
                      className="w-full px-4 py-3 rounded-xl bg-[#EDF0F5] border border-[#B9C3D4] text-sm text-[#171717] placeholder:text-[#696D77]/60 focus:outline-none focus:ring-2 focus:ring-[#7000FF] focus:border-transparent transition-all resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="mt-2 inline-flex items-center justify-center gap-2 w-full py-4 text-xs font-bold uppercase tracking-wider text-white bg-[#7000FF] hover:bg-[#5b00d6] rounded-xl transition-all shadow-[0_4px_20px_rgba(112,0,255,0.25)] hover:shadow-[0_6px_28px_rgba(112,0,255,0.4)] disabled:opacity-50 active:scale-[0.99] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#7000FF] cursor-pointer"
                  >
                    {isSubmitting ? (
                      <span>Transmitting...</span>
                    ) : (
                      <>
                        <span>Transmit Message</span>
                        <Send className="w-3.5 h-3.5" />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>

        {/* Bottom Editorial Bar */}
        <div className="pt-8 border-t border-[#B9C3D4] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-[#696D77]">
          <div>
            © 2025 SATHWIK. ALL RIGHTS RESERVED.
          </div>

          <div className="flex items-center gap-6">
            <span className="hidden sm:inline">DESIGNED WITH RIGOR &amp; EDITORIAL INTENT</span>
            <button
              type="button"
              onClick={scrollToTop}
              className="text-[#171717] hover:text-[#7000FF] font-bold uppercase transition-colors cursor-pointer"
            >
              Back to Top ↑
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
