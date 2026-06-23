"use client";

import { motion } from "framer-motion";
import { MapPin } from "lucide-react";
import { Section, staggerContainer, staggerItem } from "@/components/portfolio-ui";
import { portfolio } from "@/data/portfolio";

const jobMeta: Record<string, { logo: string; tech: string[] }> = {
  "Profunnel Technologies Pvt. Ltd.": {
    logo: "/logos/pronnel-logo.png",
    tech: ["Node.js", "Python", "LangChain", "RAG", "Vector Databases", "WebSockets"],
  },
  "Athmin Technologies Pvt. Ltd.": {
    logo: "/logos/athmin_logo.jpeg",
    tech: ["React.js", "Node.js", "Express.js", "MongoDB", "WebSockets", "REST APIs"],
  },
};

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
        {portfolio.experience.map((job, i) => {
          const meta = jobMeta[job.company];

          return (
            <motion.div
              key={job.company}
              variants={staggerItem}
              className="group relative flex gap-5 pb-10 last:pb-0"
            >
              {/* Timeline line + dot */}
              <div className="flex flex-col items-center">
                <span className={`pulse-node ${i === 0 ? "active" : ""}`} />
                {i < portfolio.experience.length - 1 && (
                  <div className="mt-2 flex-1 w-px bg-gradient-to-b from-[var(--accent)] to-[var(--border)]" />
                )}
              </div>

              {/* Content */}
              <div className="flex-1 min-w-0 pb-2">
                {/* Header with Logo */}
                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-x-4 gap-y-2">
                  <div className="flex items-start gap-3">
                    {meta && (
                      <img
                        src={meta.logo}
                        alt={job.company}
                        className="size-10 rounded-lg object-cover border border-[var(--border)] shadow-sm bg-[var(--surface)] mt-0.5 flex-shrink-0"
                      />
                    )}
                    <div>
                      <div className="flex flex-wrap items-center gap-x-2 gap-y-0.5">
                        <h3 className="text-base font-semibold text-[var(--fg)]">{job.role}</h3>
                        {i === 0 && (
                          <span className="pill pill-accent text-[9px] font-semibold">Current</span>
                        )}
                      </div>
                      <p className="mt-0.5 text-sm text-[var(--fg-2)] font-medium">{job.company}</p>
                    </div>
                  </div>
                  
                  <div className="text-left sm:text-right flex flex-row sm:flex-col items-center sm:items-end gap-x-2 gap-y-1 font-mono text-xs text-[var(--fg-3)] pl-13 sm:pl-0">
                    <span className="px-2 py-0.5 rounded-full border border-[var(--border)] bg-[var(--surface)] text-[var(--fg-2)] font-medium whitespace-nowrap">
                      {job.period}
                    </span>
                    <span className="flex items-center gap-1 mt-0.5">
                      <MapPin size={11} /> {job.location}
                    </span>
                  </div>
                </div>

                {/* Bullet points */}
                <ul className="mt-4 space-y-2 pl-13 sm:pl-13 lg:pl-13">
                  {job.points.map((pt) => (
                    <li key={pt} className="flex items-start gap-2.5 text-sm leading-6 text-[var(--fg-2)]">
                      <span className="mt-2.5 size-1 shrink-0 rounded-full bg-[var(--border-2)]" />
                      {pt}
                    </li>
                  ))}
                </ul>

                {/* Tech stack pills */}
                {meta && (
                  <div className="mt-4 flex flex-wrap gap-1.5 pl-13 sm:pl-13 lg:pl-13">
                    {meta.tech.map((t) => (
                      <span key={t} className="pill text-[10px]">
                        {t}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </motion.div>
          );
        })}
      </motion.div>
    </Section>
  );
}
