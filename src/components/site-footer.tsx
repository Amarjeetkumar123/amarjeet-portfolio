"use client";

import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";
import { portfolio } from "@/data/portfolio";

export function SiteFooter() {
  const [timeStr, setTimeStr] = useState<string>("");

  useEffect(() => {
    const updateTime = () => {
      const datePart = new Date().toLocaleDateString("en-US", {
        timeZone: "Asia/Kolkata",
        year: "numeric",
        month: "short",
        day: "numeric"
      });
      const timePart = new Date().toLocaleTimeString("en-US", {
        timeZone: "Asia/Kolkata",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: true
      });
      setTimeStr(`${datePart}, ${timePart}`);
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const handleScrollToTop = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
    window.history.pushState(null, "", "#");
  };

  return (
    <footer className="mx-auto w-full max-w-6xl px-5 py-5 sm:px-8 lg:px-10 mt-12 border-t border-[var(--border)]/40 text-xs text-[var(--fg-3)]">
      <div className="flex flex-col md:flex-row items-center justify-between gap-4">
        {/* Left: Copyright */}
        <div className="flex flex-wrap items-center justify-center md:justify-start gap-2 text-center md:text-left">
          <span>© {new Date().getFullYear()} {portfolio.name}</span>
        </div>

        {/* Center: Live local clock with Date, Time, and Seconds (text-xs, no pill, no bold) */}
        {timeStr && (
          <div className="flex items-center gap-2 text-xs font-mono text-[var(--fg-2)] select-none">
            <span className="relative flex h-1.5 w-1.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-500"></span>
            </span>
            <span>{timeStr}</span>
          </div>
        )}

        {/* Right: Top Button (Colored Capsule Pill) */}
        <button
          onClick={handleScrollToTop}
          className="group flex items-center gap-1.5 px-3 py-1 rounded-full border border-[var(--accent)]/20 bg-[var(--accent-dim)] text-[var(--accent)] hover:bg-[var(--accent)] hover:text-white transition-all duration-300 cursor-pointer select-none shrink-0"
        >
          <span>Top</span>
          <ArrowUp size={12} className="transition-transform group-hover:-translate-y-0.5" />
        </button>
      </div>
    </footer>
  );
}
