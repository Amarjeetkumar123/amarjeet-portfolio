"use client";

import type { ReactNode } from "react";
import { motion, AnimatePresence, type Variants } from "framer-motion";
import { ExternalLink, Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { FaGithub, FaLinkedinIn, FaNodeJs, FaPython, FaReact, FaDocker, FaAws } from "react-icons/fa";
import { SiLeetcode, SiNextdotjs, SiMongodb, SiExpress } from "react-icons/si";
import { Brain } from "lucide-react";
import { portfolio } from "@/data/portfolio";

/* ─── Nav Items ──────────────────────────────────────────────────────────────── */
export const navItems = ["About", "Experience", "Projects", "Skills", "Certifications", "Education", "Contact"];

/* ─── Variants ───────────────────────────────────────────────────────────────── */
export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 14 },
  show:   { opacity: 1, y: 0  },
};

export const staggerContainer: Variants = {
  hidden: {},
  show:   { transition: { staggerChildren: 0.07, delayChildren: 0.05 } },
};

export const staggerItem: Variants = {
  hidden: { opacity: 0, y: 12 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] } },
};

/* ─── Helpers ────────────────────────────────────────────────────────────────── */
export function getExternalLinkProps(href: string) {
  const ext = href.startsWith("http");
  return { target: ext ? "_blank" : undefined, rel: ext ? "noreferrer" : undefined };
}

/* ─── Section wrapper ────────────────────────────────────────────────────────── */
export function Section({
  id,
  label,
  children,
  className = "",
}: {
  id: string;
  label: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <section id={id} className={`mx-auto w-full max-w-6xl px-5 pt-14 pb-14 sm:px-8 lg:px-10 ${className}`}>
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.45 }}
      >
        <p className="section-label mb-6">{label}</p>
        {children}
      </motion.div>
    </section>
  );
}

/* ─── Theme Toggle ───────────────────────────────────────────────────────────── */
export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => { setMounted(true); }, []);

  if (!mounted) return (
    <button className="grid size-8 place-items-center rounded-lg text-[var(--fg-3)]">
      <Moon size={15} />
    </button>
  );

  const isDark = resolvedTheme !== "light";
  return (
    <motion.button
      whileTap={{ scale: 0.88 }}
      aria-label="Toggle theme"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="grid size-8 place-items-center rounded-lg text-[var(--fg-3)] transition-colors hover:text-[var(--fg)]"
    >
      <motion.span
        key={isDark ? "sun" : "moon"}
        initial={{ rotate: -20, opacity: 0 }}
        animate={{ rotate: 0, opacity: 1 }}
        transition={{ duration: 0.25 }}
      >
        {isDark ? <Sun size={15} /> : <Moon size={15} />}
      </motion.span>
    </motion.button>
  );
}

/* ─── Profile Photo ──────────────────────────────────────────────────────────── */
export function ProfilePhoto({ size = 88 }: { size?: number }) {
  const [ok, setOk] = useState(Boolean(portfolio.image));
  const [zoomed, setZoomed] = useState(false);

  return (
    <>
      <div
        onClick={() => { if (portfolio.image && ok) setZoomed(true); }}
        className={`relative shrink-0 overflow-hidden rounded-full border border-[var(--border-2)] ${portfolio.image && ok ? "cursor-zoom-in transition-transform hover:scale-105" : ""}`}
        style={{ width: size, height: size }}
      >
        {portfolio.image && ok ? (
          <img
            src={portfolio.image}
            alt={portfolio.name}
            className="h-full w-full object-cover"
            onError={() => setOk(false)}
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center bg-[var(--surface)] font-semibold text-[var(--fg-3)]">
            AK
          </div>
        )}
      </div>

      <AnimatePresence>
        {zoomed && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setZoomed(false)}
            className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-black/85 p-4 backdrop-blur-md cursor-zoom-out"
          >
            <motion.div
              initial={{ scale: 0.95, y: 10 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 10 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              className="relative max-w-[90vw] max-h-[90vh] flex flex-col items-center gap-3"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={portfolio.image}
                alt={portfolio.name}
                className="max-w-full max-h-[80vh] rounded-2xl border border-white/10 shadow-2xl object-contain bg-[#121212]"
              />
              <p className="text-[11px] font-mono text-white/50">Click anywhere to close</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

/* ─── Floating tech badges for hero ─────────────────────────────────────────── */
export function HeroTechRow() {
  const techs = [
    { icon: <FaNodeJs size={13} />, label: "Node.js",  color: "#539E43" },
    { icon: <SiExpress size={13} />, label: "Express",  color: "#828282" },
    { icon: <FaReact  size={13} />, label: "React",    color: "#61DAFB" },
    { icon: <SiMongodb size={13} />, label: "MongoDB", color: "#47A248" },
    { icon: <Brain size={13} />, label: "AI & LLMs", color: "#EC4899" },
    { icon: <FaPython size={13} />, label: "Python",   color: "#3776AB" },
    { icon: <FaAws size={13} />, label: "AWS",      color: "#FF9900" },
  ];
  return (
    <div className="flex flex-wrap items-center gap-2">
      {techs.map((t) => (
        <span
          key={t.label}
          className="pill"
          style={{ color: t.color, borderColor: `${t.color}28` }}
        >
          {t.icon} {t.label}
        </span>
      ))}
    </div>
  );
}

/* ─── Social Icon ────────────────────────────────────────────────────────────── */
export function SocialIcon({ label, size = 16, className = "" }: { label: string; size?: number; className?: string }) {
  const map: Record<string, ReactNode> = {
    LinkedIn: <FaLinkedinIn size={size} className={className} />,
    GitHub:   <FaGithub    size={size} className={className} />,
    LeetCode: <SiLeetcode  size={size} className={className} />,
  };
  return <>{map[label] ?? <ExternalLink size={size} className={className} />}</>;
}

/* ─── Sticky Socials (left side) ─────────────────────────────────────────────── */
export function StickySocials() {
  return (
    <aside className="fixed left-4 top-1/2 z-40 hidden -translate-y-1/2 flex-col items-center gap-3 xl:flex">
      <div className="h-12 w-px bg-[var(--border)]" aria-hidden />
      {portfolio.socials.map((s) => (
        <motion.a
          key={s.label}
          href={s.href}
          {...getExternalLinkProps(s.href)}
          aria-label={s.label}
          whileHover={{ scale: 1.15 }}
          whileTap={{ scale: 0.9 }}
          className="text-[var(--fg-3)] transition-colors hover:text-[var(--fg)]"
        >
          <SocialIcon label={s.label} size={15} />
        </motion.a>
      ))}
      <div className="h-12 w-px bg-[var(--border)]" aria-hidden />
    </aside>
  );
}
