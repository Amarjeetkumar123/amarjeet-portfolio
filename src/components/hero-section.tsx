"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Download, MapPin } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { getExternalLinkProps, HeroTechRow, ProfilePhoto, SocialIcon, staggerContainer, staggerItem } from "@/components/portfolio-ui";
import { portfolio } from "@/data/portfolio";

/* ─── Typed text ─────────────────────────────────────────────────────────────── */
function useTyped(words: string[], speed = 80, pause = 2200) {
  const [text, setText]       = useState("");
  const [wIdx, setWIdx]       = useState(0);
  const [cIdx, setCIdx]       = useState(0);
  const [del, setDel]         = useState(false);
  const t = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);

  useEffect(() => {
    const word = words[wIdx];
    t.current = setTimeout(() => {
      if (!del && cIdx < word.length) {
        setText(word.slice(0, cIdx + 1)); setCIdx((c) => c + 1);
      } else if (!del && cIdx === word.length) {
        setTimeout(() => setDel(true), pause);
      } else if (del && cIdx > 0) {
        setText(word.slice(0, cIdx - 1)); setCIdx((c) => c - 1);
      } else {
        setDel(false); setWIdx((i) => (i + 1) % words.length);
      }
    }, del ? speed / 2 : speed);
    return () => clearTimeout(t.current);
  }, [cIdx, del, wIdx, words, speed, pause]);

  return text;
}

const roles = ["Software Engineer", "Backend Developer", "Full-Stack Developer", "Software Developer"];

export function HeroSection() {
  const role = useTyped(roles);

  const handleScrollToProjects = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const el = document.getElementById("projects");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
      window.history.pushState(null, "", "#projects");
    }
  };

  return (
    <section
      id="about"
      className="mx-auto w-full max-w-7xl px-5 pb-12 pt-28 sm:px-8 lg:px-10"
    >
      <motion.div
        initial="hidden"
        animate="show"
        variants={staggerContainer}
        className="flex flex-col gap-5"
      >
        {/* Top row: photo + name + status */}
        <motion.div variants={staggerItem} className="flex items-center gap-5">
          <ProfilePhoto size={96} />
          <div className="space-y-1">
            <div className="flex flex-wrap items-center gap-2">
              <h1 className="text-xl font-bold text-[var(--fg)]">{portfolio.name}</h1>
              {/* Available badge */}
              <span className="flex items-center gap-1.5 rounded-full border border-[var(--border)] bg-[var(--surface)] px-2 py-0.5 text-[10px] text-[var(--fg-3)]">
                <span className="ping-dot relative flex size-1.5">
                  <span className="absolute inline-flex size-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                  <span className="inline-flex size-1.5 rounded-full bg-emerald-400" />
                </span>
                Open to work
              </span>
            </div>
            <p className="flex items-center gap-1.5 text-xs text-[var(--fg-3)]">
              <MapPin size={11} />
              {portfolio.location}
            </p>
          </div>
        </motion.div>

        {/* Headline */}
        <motion.div variants={staggerItem}>
          <h2 className="text-xl font-semibold tracking-tight text-[var(--fg)] sm:text-2xl md:text-3xl lg:text-4xl lg:whitespace-nowrap">
            {portfolio.headline}
          </h2>
          <div className="mt-3.5 max-w-5xl space-y-3 text-[15px] leading-7 text-[var(--fg-2)]">
            {portfolio.intro.split("\n\n").map((para, i) => (
              <p key={i}>{para}</p>
            ))}
          </div>
        </motion.div>

        {/* Typed role */}
        <motion.p variants={staggerItem} className="font-mono text-sm text-[var(--fg-3)]">
          <span style={{ color: "var(--accent)" }}>~/</span> {role}
          <span className="cursor" />
        </motion.p>

        {/* Tech row */}
        <motion.div variants={staggerItem}>
          <HeroTechRow />
        </motion.div>

        {/* CTAs */}
        <motion.div variants={staggerItem} className="flex flex-wrap items-center gap-2">
          <a
            href="#projects"
            onClick={handleScrollToProjects}
            className="btn btn-solid"
          >
            View Projects <ArrowUpRight size={13} />
          </a>
          <a href={portfolio.resume} {...getExternalLinkProps(portfolio.resume)} className="btn btn-outline">
            <Download size={13} /> Resume
          </a>
          <a href={`mailto:${portfolio.email}`} className="btn btn-outline">
            {portfolio.email}
          </a>
        </motion.div>

        {/* Socials row */}
        <motion.div variants={staggerItem} className="flex items-center gap-4">
          {portfolio.socials.map((s) => (
            <a
              key={s.label}
              href={s.href}
              {...getExternalLinkProps(s.href)}
              aria-label={s.label}
              className="text-[var(--fg-3)] transition-colors hover:text-[var(--fg)]"
            >
              <SocialIcon label={s.label} size={16} />
            </a>
          ))}
          <span className="h-3.5 w-px bg-[var(--border)]" aria-hidden />
          <span className="text-xs text-[var(--fg-3)]">{portfolio.role}</span>
        </motion.div>

        {/* Metrics strip */}
        <motion.div
          variants={staggerItem}
          className="grid grid-cols-2 gap-px overflow-hidden rounded-xl border border-[var(--border)] sm:grid-cols-4"
        >
          {portfolio.metrics.map((m) => (
            <div key={m.label} className="bg-[var(--surface)] px-4 py-4 text-center backdrop-blur-sm">
              <p className="text-xl font-bold tracking-tight text-[var(--fg)]">{m.value}</p>
              <p className="mt-0.5 text-[10px] uppercase tracking-wide text-[var(--fg-3)]">{m.label}</p>
            </div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
