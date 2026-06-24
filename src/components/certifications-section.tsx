"use client";

import { motion } from "framer-motion";
import { Trophy } from "lucide-react";
import { Section, staggerContainer, staggerItem } from "@/components/portfolio-ui";
import { portfolio } from "@/data/portfolio";

interface Achievement {
  isAward: boolean;
  title: string;
  issuer: string;
  area: string;
  date: string;
  description?: string;
  certificate?: string;
  logo?: string;
}

export function CertificationsSection() {
  // Combine award and certifications into a single list
  const achievements: Achievement[] = [
    {
      isAward: true,
      title: portfolio.award.title,
      issuer: portfolio.award.issuer,
      area: portfolio.award.area,
      date: "Featured",
      description: portfolio.award.description,
      certificate: portfolio.award.certificate,
      logo: portfolio.award.logo,
    },
    ...portfolio.certifications.map((c) => ({
      isAward: false,
      title: c.title,
      issuer: c.issuer,
      area: c.area,
      date: c.date,
      certificate: c.certificate,
      logo: c.logo,
    })),
  ];

  // Split achievements into two columns to balance the left and right sides of the page
  const mid = Math.ceil(achievements.length / 2);
  const leftCol = achievements.slice(0, mid);
  const rightCol = achievements.slice(mid);

  const renderTimelineItem = (ach: typeof achievements[0], i: number, arr: typeof achievements) => (
    <motion.div
      key={ach.title}
      variants={staggerItem}
      className="group relative flex gap-5 pb-8 last:pb-0"
    >
      {/* Left Timeline: Gradient Line + Logo/Trophy Nodes */}
      <div className="flex flex-col items-center">
        {ach.logo ? (
          <span className="timeline-logo-node">
            <img
              src={ach.logo}
              alt={ach.issuer}
              className="h-full w-full object-contain p-1 bg-white"
            />
          </span>
        ) : ach.isAward ? (
          <span className="timeline-trophy-node">
            <Trophy size={16} />
          </span>
        ) : (
          <span className="timeline-logo-node">
            <div className="h-full w-full bg-[var(--surface)]" />
          </span>
        )}
        {i < arr.length - 1 && (
          <div className="mt-2.5 flex-1 w-px bg-gradient-to-b from-[var(--accent)] to-[var(--border)]" />
        )}
      </div>

      {/* Right Content */}
      <div className="flex-1 min-w-0 pb-1">
        {/* Title line */}
        <div className="flex flex-wrap items-center gap-x-2 gap-y-0.5">
          {ach.isAward && (
            <span className="text-[9px] font-bold text-[var(--accent)] tracking-wider uppercase bg-[var(--accent-dim)] px-1.5 py-0.5 rounded select-none">
              Featured Award
            </span>
          )}
          <h3 className={`font-semibold text-[var(--fg)] ${ach.isAward ? "text-base" : "text-sm"}`}>
            {ach.title}
          </h3>
        </div>

        {/* Subtitle / Metadata details */}
        <div className="mt-1.5 flex flex-wrap items-center gap-x-2 gap-y-1 text-xs">
          <span className="text-[var(--fg-2)] font-medium">
            {ach.issuer}
          </span>
          <span className="text-[var(--border-2)]">·</span>
          <span className="px-2 py-0.5 rounded-full border border-[var(--border)] bg-[var(--surface)] text-[var(--fg-3)] text-[10px] font-medium">
            {ach.area}
          </span>
          <span className="px-2 py-0.5 rounded-full border border-[var(--accent)] bg-[var(--accent-dim)] text-[var(--accent)] text-[10px] font-semibold">
            {ach.date}
          </span>
        </div>

        {/* Award Description (if exists) */}
        {ach.description && (
          <p className="mt-2 text-xs text-[var(--fg-3)] leading-5 max-w-3xl">
            {ach.description}
          </p>
        )}

        {/* Credential Action Link */}
        {ach.certificate && ach.certificate !== "#" && (
          <a
            href={ach.certificate}
            target="_blank"
            rel="noreferrer"
            className="text-xs text-[var(--accent)] hover:underline font-semibold inline-flex items-center gap-0.5 mt-2"
          >
            View Credential ↗
          </a>
        )}
      </div>
    </motion.div>
  );

  return (
    <Section id="certifications" label="Certifications & Awards">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-60px" }}
        className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8 md:gap-y-0"
      >
        {/* Left Column Timeline */}
        <div className="flex flex-col">
          {leftCol.map((ach, idx) => renderTimelineItem(ach, idx, leftCol))}
        </div>

        {/* Right Column Timeline */}
        <div className="flex flex-col">
          {rightCol.map((ach, idx) => renderTimelineItem(ach, idx, rightCol))}
        </div>
      </motion.div>
    </Section>
  );
}
