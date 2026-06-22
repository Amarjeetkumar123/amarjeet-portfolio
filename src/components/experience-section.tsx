"use client";

import { motion } from "framer-motion";
import { MapPin } from "lucide-react";
import { Section, staggerContainer, staggerItem } from "@/components/portfolio-ui";
import { portfolio } from "@/data/portfolio";

export function ExperienceSection() {
  return (
    <Section id="experience" label="Experience">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-60px" }}
        className="space-y-0"
      >
        {portfolio.experience.map((job, i) => (
          <motion.div
            key={job.company}
            variants={staggerItem}
            className="group relative flex gap-5 pb-10 last:pb-0"
          >
            {/* Timeline line + dot */}
            <div className="flex flex-col items-center">
              <span className={`timeline-dot mt-1 ${i === 0 ? "active" : ""}`} />
              {i < portfolio.experience.length - 1 && (
                <div className="mt-2 flex-1 w-px bg-[var(--border)]" />
              )}
            </div>

            {/* Content */}
            <div className="flex-1 min-w-0 pb-2">
              {/* Header */}
              <div className="flex flex-wrap items-start justify-between gap-x-4 gap-y-1">
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="text-sm font-semibold text-[var(--fg)]">{job.role}</h3>
                    {i === 0 && (
                      <span className="pill pill-accent text-[10px]">Current</span>
                    )}
                  </div>
                  <p className="mt-0.5 text-xs text-[var(--fg-2)]">{job.company}</p>
                </div>
                <div className="text-right">
                  <p className="font-mono text-[11px] text-[var(--fg-3)]">{job.period}</p>
                  <p className="mt-0.5 flex items-center justify-end gap-1 font-mono text-[11px] text-[var(--fg-3)]">
                    <MapPin size={10} /> {job.location}
                  </p>
                </div>
              </div>

              {/* Bullet points */}
              <ul className="mt-3 space-y-2">
                {job.points.map((pt) => (
                  <li key={pt} className="flex items-start gap-2.5 text-xs leading-6 text-[var(--fg-2)]">
                    <span className="mt-2 size-1 shrink-0 rounded-full bg-[var(--border-2)]" />
                    {pt}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </Section>
  );
}
