"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Code2 } from "lucide-react";
import { getExternalLinkProps, Section, staggerContainer, staggerItem } from "@/components/portfolio-ui";
import { portfolio } from "@/data/portfolio";

export function ProjectsSection() {
  return (
    <Section id="projects" label="Projects">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-60px" }}
        className="space-y-0 divide-y divide-[var(--border)]"
      >
        {portfolio.projects.map((project, i) => (
          <motion.div
            key={project.name}
            variants={staggerItem}
            className="group py-6 first:pt-0 last:pb-0"
          >
            <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
              {/* Left */}
              <div className="flex-1 min-w-0">
                <div className="flex flex-wrap items-center gap-2">
                  <h3 className="text-base font-semibold text-[var(--fg)] group-hover:text-[var(--accent)] transition-colors">
                    {project.name}
                  </h3>
                  <span className="pill text-[10px]">{project.type}</span>
                </div>
                <p className="mt-1.5 text-sm leading-6 text-[var(--fg-2)]">{project.description}</p>

                {/* Highlights */}
                <ul className="mt-2 space-y-1">
                  {project.highlights.map((h) => (
                    <li key={h} className="flex items-start gap-2 text-xs text-[var(--fg-3)]">
                      <span className="mt-1.5 size-1 shrink-0 rounded-full bg-[var(--border-2)]" />
                      {h}
                    </li>
                  ))}
                </ul>

                {/* Stack pills */}
                <div className="mt-3 flex flex-wrap gap-1.5">
                  {project.stack.map((t) => (
                    <span key={t} className="pill text-[10px]">{t}</span>
                  ))}
                </div>
              </div>

              {/* Links */}
              <div className="flex shrink-0 items-center gap-2 sm:flex-col sm:items-end">
                <a
                  href={project.live}
                  {...getExternalLinkProps(project.live)}
                  className="btn btn-outline text-[11px] py-1.5 px-3"
                >
                  Live <ArrowUpRight size={11} />
                </a>
                {project.code !== "#" && (
                  <a
                    href={project.code}
                    {...getExternalLinkProps(project.code)}
                    className="btn btn-outline text-[11px] py-1.5 px-3"
                  >
                    Code <Code2 size={11} />
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </Section>
  );
}
