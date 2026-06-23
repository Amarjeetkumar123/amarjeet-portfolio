"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, FileText, Mail, Phone } from "lucide-react";
import { getExternalLinkProps, Section, SocialIcon, staggerContainer, staggerItem } from "@/components/portfolio-ui";
import { portfolio } from "@/data/portfolio";

export function ContactSection() {
  const [copiedText, setCopiedText] = useState<string | null>(null);

  const handleCopy = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    setCopiedText(label);
    setTimeout(() => setCopiedText(null), 2000);
  };

  return (
    <Section id="contact" label="Contact">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-60px" }}
        className="grid grid-cols-1 lg:grid-cols-3 gap-8 w-full"
      >
        {/* Column 1: Availability & Pitch */}
        <motion.div variants={staggerItem} className="flex flex-col items-start text-left space-y-4 lg:pr-6 justify-center">
          {/* Pulsing Availability Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-emerald-500/20 bg-emerald-500/5 text-emerald-400 text-xs font-semibold select-none">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            Available to work
          </div>

          <div className="space-y-3">
            <h3 className="text-2xl sm:text-3xl font-bold text-[var(--fg)] tracking-tight">
              Let&apos;s build something next-gen.
            </h3>
            <p className="text-sm leading-relaxed text-[var(--fg-2)]">
              Software Engineer specialized in building robust Backend systems, with Full-Stack capabilities, practical AI agent integration, and hands-on Cloud experience. Let&apos;s connect!
            </p>
          </div>
        </motion.div>

        {/* Column 2: Copy-to-Clipboard & Direct Links Action Cards */}
        <motion.div variants={staggerItem} className="flex flex-col gap-4 justify-center">
          {/* Email Card */}
          <div className="group relative flex items-center justify-between gap-4 w-full p-4 rounded-xl border border-[var(--border)] bg-[var(--surface)] transition-all duration-300 hover:border-[var(--accent)] hover:bg-[var(--bg-2)] hover:shadow-[0_0_12px_var(--accent-dim)]">
            <button
              onClick={() => handleCopy(portfolio.email, "email")}
              className="flex items-center gap-3 min-w-0 flex-1 text-left cursor-pointer focus:outline-none"
            >
              <div className="p-2.5 rounded-lg bg-[var(--accent-dim)] text-[var(--accent)] transition-transform duration-300 group-hover:scale-105">
                <Mail size={16} />
              </div>
              <div className="min-w-0">
                <p className="text-[9px] uppercase tracking-wider font-bold text-[var(--fg-3)]">Email Address</p>
                <p className="text-sm font-semibold text-[var(--fg)] mt-0.5 truncate">{portfolio.email}</p>
              </div>
            </button>
            <div className="flex items-center gap-2 shrink-0">
              <button
                onClick={() => handleCopy(portfolio.email, "email")}
                className="text-[10px] font-semibold text-[var(--accent)] bg-[var(--accent-dim)] px-2.5 py-1 rounded border border-[var(--accent)]/15 hover:bg-[var(--accent)] hover:text-white transition-colors cursor-pointer"
                title="Copy to clipboard"
              >
                {copiedText === "email" ? "Copied! ✓" : "Copy"}
              </button>
              <a
                href={`mailto:${portfolio.email}`}
                className="p-1.5 rounded-md border border-[var(--border)] text-[var(--fg-3)] hover:text-[var(--accent)] hover:border-[var(--accent)] transition-all"
                title="Open Mail Client"
              >
                <ArrowUpRight size={14} />
              </a>
            </div>
          </div>

          {/* Phone Card */}
          <div className="group relative flex items-center justify-between gap-4 w-full p-4 rounded-xl border border-[var(--border)] bg-[var(--surface)] transition-all duration-300 hover:border-[var(--accent)] hover:bg-[var(--bg-2)] hover:shadow-[0_0_12px_var(--accent-dim)]">
            <button
              onClick={() => handleCopy(portfolio.phone, "phone")}
              className="flex items-center gap-3 min-w-0 flex-1 text-left cursor-pointer focus:outline-none"
            >
              <div className="p-2.5 rounded-lg bg-[var(--accent-dim)] text-[var(--accent)] transition-transform duration-300 group-hover:scale-105">
                <Phone size={16} />
              </div>
              <div className="min-w-0">
                <p className="text-[9px] uppercase tracking-wider font-bold text-[var(--fg-3)]">Phone Number</p>
                <p className="text-sm font-semibold text-[var(--fg)] mt-0.5 truncate">{portfolio.phone}</p>
              </div>
            </button>
            <div className="flex items-center gap-2 shrink-0">
              <button
                onClick={() => handleCopy(portfolio.phone, "phone")}
                className="text-[10px] font-semibold text-[var(--accent)] bg-[var(--accent-dim)] px-2.5 py-1 rounded border border-[var(--accent)]/15 hover:bg-[var(--accent)] hover:text-white transition-colors cursor-pointer"
                title="Copy to clipboard"
              >
                {copiedText === "phone" ? "Copied! ✓" : "Copy"}
              </button>
              <a
                href={`tel:${portfolio.phone.replaceAll(" ", "")}`}
                className="p-1.5 rounded-md border border-[var(--border)] text-[var(--fg-3)] hover:text-[var(--accent)] hover:border-[var(--accent)] transition-all"
                title="Call Now"
              >
                <ArrowUpRight size={14} />
              </a>
            </div>
          </div>
        </motion.div>

        {/* Column 3: Social & Resume Links */}
        <motion.div variants={staggerItem} className="flex flex-col gap-4">
          <div className="p-4 rounded-xl border border-[var(--border)] bg-[var(--surface)] flex flex-col justify-between h-full space-y-4">
            <div className="flex items-center gap-2 text-[10px] uppercase tracking-wider font-bold text-[var(--fg-3)]">
              <FileText size={12} className="text-[var(--accent)]" /> Professional Profiles
            </div>

            <div className="flex flex-col gap-2">
              {portfolio.socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-between group/link text-xs text-[var(--fg-2)] hover:text-[var(--accent)] transition-colors py-1.5 border-b border-[var(--border)]/40 last:border-0"
                >
                  <div className="flex items-center gap-2">
                    <SocialIcon label={s.label} size={14} />
                    <span className="font-semibold">{s.label}</span>
                  </div>
                  <span className="font-mono text-[10px] text-[var(--fg-3)] group-hover/link:text-[var(--accent)] transition-colors truncate max-w-[150px]">
                    {s.href.replace("https://", "").replace("www.", "")} ↗
                  </span>
                </a>
              ))}
            </div>

            <a
              href={portfolio.resume}
              {...getExternalLinkProps(portfolio.resume)}
              className="btn btn-solid w-full justify-center text-xs font-semibold"
            >
              View Resume <ArrowUpRight size={13} />
            </a>
          </div>
        </motion.div>
      </motion.div>
    </Section>
  );
}
