"use client";

import { motion } from "framer-motion";
import { Eye, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { getExternalLinkProps, navItems, ThemeToggle } from "@/components/portfolio-ui";
import { portfolio } from "@/data/portfolio";

export function SiteHeader() {
  const [open, setOpen]           = useState(false);
  const [scrolled, setScrolled]   = useState(false);
  const [active, setActive]       = useState("");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) setActive(e.target.id); }),
      { rootMargin: "-40% 0px -55% 0px" }
    );
    navItems.forEach((n) => { const el = document.getElementById(n.toLowerCase()); if (el) obs.observe(el); });
    return () => obs.disconnect();
  }, []);

  return (
    <header
      className="fixed inset-x-0 top-0 z-50 transition-all duration-300"
      style={{
        background: scrolled ? "var(--nav-bg)" : "transparent",
        backdropFilter: scrolled ? "blur(16px)" : "none",
        WebkitBackdropFilter: scrolled ? "blur(16px)" : "none",
        borderBottom: scrolled ? "1px solid var(--border)" : "1px solid transparent",
      }}
    >
      <div className="mx-auto flex h-14 max-w-6xl items-center justify-between px-5 sm:px-8 lg:px-10">
        {/* Logo */}
        <a href="#top" className="flex items-center gap-2.5 font-semibold text-sm text-[var(--fg)]">
          <span
            className="grid size-7 place-items-center rounded-md text-[11px] font-bold"
            style={{ background: "var(--accent-dim)", color: "var(--accent)" }}
          >
            AK
          </span>
          <span className="hidden sm:block">{portfolio.name}</span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-1 md:flex">
          {navItems.map((item) => {
            const isActive = active === item.toLowerCase();
            return (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="nav-link relative px-3 py-1.5 rounded-md transition-colors hover:bg-[var(--surface)] hover:text-[var(--fg)]"
                style={{ color: isActive ? "var(--fg)" : undefined }}
              >
                {item}
                {isActive && (
                  <motion.span
                    layoutId="nav-indicator"
                    className="absolute inset-0 rounded-md bg-[var(--surface)]"
                    style={{ zIndex: -1 }}
                    transition={{ type: "spring", bounce: 0.15, duration: 0.4 }}
                  />
                )}
              </a>
            );
          })}
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-2">
          <a
            href={portfolio.resume}
            {...getExternalLinkProps(portfolio.resume)}
            className="btn btn-outline hidden sm:inline-flex text-xs"
          >
            <Eye size={13} /> Resume
          </a>
          <ThemeToggle />
          <button
            aria-label="Menu"
            onClick={() => setOpen((o) => !o)}
            className="grid size-8 place-items-center rounded-lg text-[var(--fg-3)] hover:text-[var(--fg)] md:hidden"
          >
            {open ? <X size={16} /> : <Menu size={16} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <motion.div
          initial={{ opacity: 0, y: -6 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.2 }}
          className="border-t border-[var(--border)] bg-[var(--nav-bg)] px-5 py-3 backdrop-blur-xl md:hidden"
        >
          <div className="mx-auto max-w-6xl space-y-0.5">
            {navItems.map((item, i) => (
              <motion.a
                key={item}
                href={`#${item.toLowerCase()}`}
                initial={{ opacity: 0, x: -8 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.04 }}
                onClick={() => setOpen(false)}
                className="block rounded-md px-3 py-2 text-sm text-[var(--fg-2)] hover:bg-[var(--surface)] hover:text-[var(--fg)]"
              >
                {item}
              </motion.a>
            ))}
            <a
              href={portfolio.resume}
              {...getExternalLinkProps(portfolio.resume)}
              className="btn btn-solid mt-2 w-full justify-center"
            >
              View Resume
            </a>
          </div>
        </motion.div>
      )}
    </header>
  );
}
