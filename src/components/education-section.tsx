"use client";

import { motion } from "framer-motion";
import { Award, BookOpen, GraduationCap } from "lucide-react";
import { Section, staggerContainer, staggerItem } from "@/components/portfolio-ui";
import { portfolio } from "@/data/portfolio";

export function EducationSection() {
  const getIcon = (degree: string) => {
    const d = degree.toLowerCase();
    if (d.includes("b.voc") || d.includes("degree")) {
      return <GraduationCap className="text-[var(--accent)] size-6" />;
    }
    if (d.includes("12th") || d.includes("pcm")) {
      return <BookOpen className="text-[var(--accent)] size-6" />;
    }
    return <Award className="text-[var(--accent)] size-6" />;
  };

  return (
    <Section id="education" label="Education">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-60px" }}
        className="grid grid-cols-1 md:grid-cols-3 gap-6"
      >
        {portfolio.education.map((edu) => (
          <motion.div
            key={edu.degree}
            variants={staggerItem}
            className="group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[var(--accent)] hover:shadow-[0_0_24px_var(--accent-dim)]"
          >
            {/* Top decorative glass gradient */}
            <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-[var(--accent)] to-transparent opacity-[0.03] rounded-bl-full pointer-events-none transition-opacity duration-300 group-hover:opacity-[0.08]" />

            <div>
              {/* Header Icon + Date */}
              <div className="flex items-center justify-between mb-5">
                <div className="p-2.5 rounded-xl bg-[var(--accent-dim)] border border-[var(--accent)]/10 transition-transform duration-300 group-hover:scale-110">
                  {getIcon(edu.degree)}
                </div>
                <span className="font-mono text-xs font-semibold text-[var(--fg-3)] px-3 py-1 rounded-full border border-[var(--border)] bg-[var(--bg-2)] transition-colors duration-300 group-hover:border-[var(--accent)]/30 group-hover:text-[var(--accent)]">
                  {edu.period}
                </span>
              </div>

              {/* Degree Title & Institution */}
              <h3 className="text-lg font-bold text-[var(--fg)] tracking-tight leading-snug">
                {edu.degree}
              </h3>
              <p className="mt-1 text-sm text-[var(--fg-2)] font-medium">
                {edu.school}
              </p>

              {/* Description */}
              <p className="mt-4 text-xs text-[var(--fg-3)] leading-relaxed">
                {edu.details}
              </p>
            </div>

            {/* Score/Stream bottom badge */}
            <div className="mt-6 pt-4 border-t border-[var(--border)]/40 flex items-center justify-between">
              <span className="text-[10px] uppercase tracking-wider font-semibold text-[var(--fg-3)]">
                Grade / Focus
              </span>
              <span className="px-2.5 py-0.5 rounded-md border border-[var(--accent)]/20 bg-[var(--accent-dim)] text-[var(--accent)] text-[10px] font-semibold tracking-wide">
                {edu.score}
              </span>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </Section>
  );
}
