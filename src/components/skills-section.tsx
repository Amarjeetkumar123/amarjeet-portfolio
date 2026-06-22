"use client";

import { motion } from "framer-motion";
import { Section, staggerContainer, staggerItem } from "@/components/portfolio-ui";
import { portfolio } from "@/data/portfolio";

export function SkillsSection() {
  return (
    <Section id="skills" label="Skills">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-60px" }}
        className="space-y-6"
      >
        {portfolio.skills.map((group) => (
          <motion.div
            key={group.group}
            variants={staggerItem}
            className="flex flex-col gap-2 sm:flex-row sm:gap-0"
          >
            {/* Category label */}
            <div className="w-32 shrink-0 pt-0.5">
              <p className="text-[11px] font-medium text-[var(--fg-3)]">{group.group}</p>
            </div>

            {/* Tag cloud */}
            <div className="flex flex-wrap gap-1.5">
              {group.items.map((skill) => (
                <span key={skill} className="pill">{skill}</span>
              ))}
            </div>
          </motion.div>
        ))}

        {/* Extra stat row */}
        <motion.div variants={staggerItem} className="divider" />
        <motion.div variants={staggerItem} className="flex flex-wrap items-center gap-x-6 gap-y-2 text-xs text-[var(--fg-3)]">
          <span>
            <span className="font-semibold text-[var(--fg)]">1000+</span> DSA problems solved
          </span>
          {portfolio.focusAreas.map((a) => (
            <span key={a} className="flex items-center gap-1.5">
              <span className="size-1 rounded-full bg-[var(--border-2)]" />
              {a}
            </span>
          ))}
        </motion.div>
      </motion.div>
    </Section>
  );
}
