"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, GraduationCap, Mail, Phone } from "lucide-react";
import { getExternalLinkProps, Section, SocialIcon, staggerContainer, staggerItem } from "@/components/portfolio-ui";
import { portfolio } from "@/data/portfolio";

export function ContactSection() {
  return (
    <Section id="contact" label="Contact">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-60px" }}
        className="space-y-8"
      >
        {/* Short pitch */}
        <motion.div variants={staggerItem}>
          <p className="text-sm leading-7 text-[var(--fg-2)]">
            I&apos;m open to backend, full-stack, and AI-focused roles. I bring strong product ownership, reliable backend engineering, and practical AI integration. Let&apos;s build something great.
          </p>
          <div className="mt-4 flex flex-wrap gap-2">
            <a href={`mailto:${portfolio.email}`} className="btn btn-solid">
              <Mail size={13} /> Send Email
            </a>
            <a href={portfolio.resume} {...getExternalLinkProps(portfolio.resume)} className="btn btn-outline">
              Resume <ArrowUpRight size={13} />
            </a>
          </div>
        </motion.div>

        {/* Links grid */}
        <motion.div variants={staggerItem} className="grid gap-px overflow-hidden rounded-xl border border-[var(--border)] sm:grid-cols-2">
          {[
            { icon: <Mail size={13} />, label: "Email", value: portfolio.email, href: `mailto:${portfolio.email}` },
            { icon: <Phone size={13} />, label: "Phone", value: portfolio.phone, href: `tel:${portfolio.phone.replaceAll(" ", "")}` },
            ...portfolio.socials.map((s) => ({
              icon: <SocialIcon label={s.label} size={13} />,
              label: s.label,
              value: s.href.replace("https://", ""),
              href: s.href,
            })),
          ].map((item) => (
            <a
              key={item.label}
              href={item.href}
              {...(item.href.startsWith("http") ? { target: "_blank", rel: "noreferrer" } : {})}
              className="flex items-center gap-3 bg-[var(--surface)] px-4 py-3.5 text-xs text-[var(--fg-2)] transition-colors hover:bg-[var(--bg-2)] hover:text-[var(--fg)]"
            >
              <span className="text-[var(--fg-3)]">{item.icon}</span>
              <span className="truncate">{item.value}</span>
            </a>
          ))}
        </motion.div>

        {/* Education */}
        <motion.div variants={staggerItem} className="flex items-start gap-3 rounded-xl border border-[var(--border)] bg-[var(--surface)] p-4">
          <GraduationCap size={16} className="mt-0.5 shrink-0 text-[var(--fg-3)]" />
          <div>
            <p className="text-xs font-semibold text-[var(--fg)]">{portfolio.education.degree}</p>
            <p className="mt-0.5 text-[11px] text-[var(--fg-3)]">{portfolio.education.school}</p>
            <p className="mt-0.5 font-mono text-[11px] text-[var(--fg-3)]">
              {portfolio.education.period} · {portfolio.education.score}
            </p>
          </div>
        </motion.div>
      </motion.div>
    </Section>
  );
}
