"use client";

import { motion } from "framer-motion";
import { Eye } from "lucide-react";
import { Section, staggerContainer, staggerItem } from "@/components/portfolio-ui";
import { portfolio } from "@/data/portfolio";

export function CertificationsSection() {
  return (
    <Section id="certifications" label="Certifications & Awards">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-60px" }}
        className="space-y-0"
      >
        {/* Featured Award */}
        <motion.div variants={staggerItem} className="mb-6 rounded-xl border border-[var(--border)] bg-[var(--surface)] p-5">
          <div className="flex items-start justify-between gap-4">
            <div>
              <p className="section-label mb-1">Featured Award</p>
              <h3 className="text-base font-semibold text-[var(--fg)]">{portfolio.award.title}</h3>
              <p className="mt-0.5 text-sm text-[var(--fg-2)]">{portfolio.award.issuer} · {portfolio.award.area}</p>
              <p className="mt-2 text-sm leading-6 text-[var(--fg-3)]">{portfolio.award.description}</p>
            </div>
            {portfolio.award.certificate && portfolio.award.certificate !== "#" && (
              <a
                href={portfolio.award.certificate}
                target="_blank"
                rel="noreferrer"
                className="btn btn-outline shrink-0 text-[11px] py-1.5 px-3"
              >
                <Eye size={12} /> View
              </a>
            )}
          </div>
        </motion.div>

        {/* Certifications list */}
        <div className="divide-y divide-[var(--border)]">
          {portfolio.certifications.map((cert) => (
            <motion.div
              key={cert.title}
              variants={staggerItem}
              className="flex items-center justify-between gap-4 py-3.5"
            >
              <div className="min-w-0">
                <p className="truncate text-sm font-medium text-[var(--fg)]">{cert.title}</p>
                <p className="mt-0.5 text-xs text-[var(--fg-3)]">
                  {cert.issuer} · {cert.area} · {cert.date}
                </p>
              </div>
              {cert.certificate && (
                <a
                  href={cert.certificate}
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-outline shrink-0 text-[11px] py-1 px-2.5"
                >
                  <Eye size={11} /> View
                </a>
              )}
            </motion.div>
          ))}
        </div>
      </motion.div>
    </Section>
  );
}
