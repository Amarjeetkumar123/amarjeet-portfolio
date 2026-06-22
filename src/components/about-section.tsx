"use client";

import { motion } from "framer-motion";
import { staggerContainer, staggerItem } from "@/components/portfolio-ui";
import { portfolio } from "@/data/portfolio";

export function AboutSection() {
  return (
    <section id="about" className="mx-auto w-full max-w-6xl px-5 pb-10 pt-2 sm:px-8 lg:px-10">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-60px" }}
        className="grid grid-cols-2 gap-px overflow-hidden rounded-xl border border-[var(--border)] sm:grid-cols-4"
      >
        {portfolio.metrics.map((m, i) => (
          <motion.div
            key={m.label}
            variants={staggerItem}
            className="bg-[var(--surface)] px-4 py-5 backdrop-blur-sm"
          >
            <p className="text-lg font-bold tracking-tight text-[var(--fg)]">{m.value}</p>
            <p className="mt-0.5 text-[10px] uppercase tracking-wide text-[var(--fg-3)]">{m.label}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
