"use client";

import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Award,
  BriefcaseBusiness,
  Code2,
  Eye,
  ExternalLink,
  Link,
  Mail,
  MapPin,
  Moon,
  Phone,
  Sparkles,
  Sun,
  Terminal,
} from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { portfolio } from "@/data/portfolio";

const nav = ["About", "Experience", "Projects", "Certifications", "Skills", "Contact"];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0 },
};

function Section({
  id,
  eyebrow,
  title,
  children,
}: {
  id: string;
  eyebrow: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="mx-auto w-full max-w-7xl px-5 py-16 sm:px-8 lg:px-10">
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-120px" }}
        transition={{ duration: 0.55 }}
        className="mb-8"
      >
        <p className="font-mono text-xs uppercase tracking-[0.28em] text-cyan-500 dark:text-neon-cyan">
          {eyebrow}
        </p>
        <h2 className="mt-3 max-w-3xl text-3xl font-semibold tracking-normal text-slate-950 dark:text-white sm:text-4xl">
          {title}
        </h2>
      </motion.div>
      {children}
    </section>
  );
}

function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <button
        aria-label="Toggle theme"
        className="grid size-10 place-items-center rounded-full border border-slate-300/70 bg-white/70 text-slate-900 shadow-sm transition dark:border-white/15 dark:bg-white/10 dark:text-white"
      >
        <Moon size={18} />
      </button>
    );
  }

  const isDark = resolvedTheme !== "light";

  return (
    <button
      aria-label="Toggle theme"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="grid size-10 place-items-center rounded-full border border-slate-300/70 bg-white/70 text-slate-900 shadow-sm transition hover:border-cyan-400 hover:text-cyan-600 dark:border-white/15 dark:bg-white/10 dark:text-white dark:hover:border-neon-cyan dark:hover:text-neon-cyan"
    >
      {isDark ? <Sun size={18} /> : <Moon size={18} />}
    </button>
  );
}

function ProfileVisual() {
  const [hasImage, setHasImage] = useState(Boolean(portfolio.image));

  return (
    <div className="relative aspect-[4/5] overflow-hidden rounded-[1.5rem] border border-cyan-400/30 bg-slate-950">
      {portfolio.image && hasImage ? (
        <img
          src={portfolio.image}
          alt={portfolio.name}
          className="h-full w-full object-cover"
          onError={() => setHasImage(false)}
        />
      ) : (
        <div className="grid h-full place-items-center bg-[radial-gradient(circle_at_center,rgba(0,245,255,0.22),transparent_35%),linear-gradient(135deg,#07111f,#05070d_55%,#16091b)]">
          <div className="text-center">
            <p className="font-mono text-sm uppercase tracking-[0.36em] text-neon-lime">
              AI Systems
            </p>
            <p className="neon-text mt-5 text-8xl font-semibold text-white sm:text-9xl">
              AK
            </p>
            <p className="mt-5 text-sm uppercase tracking-[0.24em] text-slate-400">
              Software Developer
            </p>
          </div>
        </div>
      )}
      <div className="absolute inset-0 bg-gradient-to-t from-ink via-transparent to-transparent" />
      <div className="absolute bottom-5 left-5 right-5 rounded-2xl border border-white/15 bg-ink/70 p-4 text-white backdrop-blur">
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-neon-lime">{portfolio.role}</p>
        <p className="mt-2 flex items-center gap-2 text-sm text-slate-300">
          <MapPin size={15} />
          {portfolio.location}
        </p>
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <main className="overflow-hidden">
      <header className="fixed inset-x-0 top-0 z-50 border-b border-slate-900/10 bg-white/62 backdrop-blur-xl dark:border-white/10 dark:bg-ink/62">
        <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 sm:px-8 lg:px-10">
          <a href="#top" className="flex items-center gap-3 font-semibold">
            <span className="grid size-9 place-items-center rounded-full border border-cyan-400/60 bg-cyan-400/10 font-mono text-sm text-cyan-600 shadow-neon dark:text-neon-cyan">
              AK
            </span>
            <span className="hidden sm:block">{portfolio.name}</span>
          </a>
          <div className="hidden items-center gap-7 text-sm text-slate-600 dark:text-slate-300 md:flex">
            {nav.map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} className="transition hover:text-cyan-500 dark:hover:text-neon-cyan">
                {item}
              </a>
            ))}
          </div>
          <div className="flex items-center gap-3">
            <a
              href={portfolio.resume}
              target={portfolio.resume.startsWith("http") ? "_blank" : undefined}
              rel={portfolio.resume.startsWith("http") ? "noreferrer" : undefined}
              className="hidden items-center gap-2 rounded-full border border-cyan-400/60 px-4 py-2 text-sm font-medium text-cyan-700 transition hover:bg-cyan-400/10 dark:text-neon-cyan sm:flex"
            >
              <Eye size={16} />
              View Resume
            </a>
            <ThemeToggle />
          </div>
        </nav>
      </header>

      <section id="top" className="relative mx-auto grid min-h-screen w-full max-w-7xl items-center gap-10 px-5 pb-16 pt-28 sm:px-8 lg:grid-cols-[1.08fr_0.92fr] lg:px-10">
        <motion.div initial="hidden" animate="show" variants={fadeUp} transition={{ duration: 0.65 }}>
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-400/40 bg-cyan-400/10 px-4 py-2 font-mono text-xs uppercase tracking-[0.18em] text-cyan-700 dark:text-neon-cyan">
            <Sparkles size={15} />
            Available for impactful product teams
          </div>
          <h1 className="neon-text max-w-4xl text-5xl font-semibold leading-[1.02] tracking-normal text-slate-950 dark:text-white sm:text-6xl lg:text-7xl">
            {portfolio.name}
          </h1>
          <p className="mt-5 max-w-2xl text-2xl font-medium text-cyan-700 dark:text-neon-cyan sm:text-3xl">
            {portfolio.headline}
          </p>
          <p className="mt-6 max-w-2xl text-base leading-8 text-slate-600 dark:text-slate-300 sm:text-lg">
            {portfolio.intro}
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-full bg-slate-950 px-5 py-3 text-sm font-semibold text-white shadow-neon transition hover:-translate-y-0.5 hover:bg-cyan-500 dark:bg-neon-cyan dark:text-ink"
            >
              View Projects
              <ArrowUpRight size={17} />
            </a>
            <a
              href={`mailto:${portfolio.email}`}
              className="inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white/70 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:-translate-y-0.5 hover:border-cyan-400 dark:border-white/15 dark:bg-white/10 dark:text-white dark:hover:border-neon-cyan"
            >
              <Mail size={17} />
              Contact Me
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.94, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.75, delay: 0.1 }}
          className="relative"
        >
          <div className="neon-panel relative overflow-hidden rounded-[2rem] p-4">
            <div className="scanline pointer-events-none absolute left-0 top-10 h-px w-full" />
            <ProfileVisual />
          </div>
        </motion.div>
      </section>

      <section id="about" className="mx-auto w-full max-w-7xl px-5 pb-8 sm:px-8 lg:px-10">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {portfolio.metrics.map((metric, index) => (
            <motion.div
              key={metric.label}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: index * 0.06 }}
              className="neon-panel rounded-2xl p-5"
            >
              <p className="text-3xl font-semibold text-cyan-600 dark:text-neon-cyan">{metric.value}</p>
              <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">{metric.label}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <Section id="experience" eyebrow="Work Signal" title="Production experience across AI, automation, CRM, and backend platforms.">
        <div className="relative space-y-5 before:absolute before:left-4 before:top-4 before:h-[calc(100%-2rem)] before:w-px before:bg-cyan-400/35">
          {portfolio.experience.map((job, index) => (
            <motion.article
              key={job.company}
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="neon-panel relative ml-10 rounded-2xl p-6"
            >
              <span className="absolute -left-[2.85rem] top-7 grid size-8 place-items-center rounded-full border border-cyan-400 bg-ink text-neon-cyan shadow-neon">
                <BriefcaseBusiness size={15} />
              </span>
              <div className="flex flex-wrap items-start justify-between gap-3">
                <div>
                  <h3 className="text-xl font-semibold">{job.role}</h3>
                  <p className="mt-1 text-cyan-700 dark:text-neon-cyan">{job.company}</p>
                </div>
                <p className="rounded-full border border-slate-300/70 px-3 py-1 font-mono text-xs text-slate-600 dark:border-white/15 dark:text-slate-300">
                  {job.period}
                </p>
              </div>
              <ul className="mt-5 space-y-3 text-sm leading-7 text-slate-600 dark:text-slate-300">
                {job.points.map((point) => (
                  <li key={point} className="flex gap-3">
                    <span className="mt-3 size-1.5 shrink-0 rounded-full bg-neon-lime shadow-neon-lime" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </motion.article>
          ))}
        </div>
      </Section>

      <Section id="projects" eyebrow="Featured Builds" title="Projects written around outcomes, ownership, and system thinking.">
        <div className="grid gap-5 lg:grid-cols-3">
          {portfolio.projects.map((project, index) => (
            <motion.article
              key={project.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-90px" }}
              whileHover={{ y: -6 }}
              transition={{ duration: 0.45, delay: index * 0.08 }}
              className="neon-panel flex min-h-[430px] flex-col rounded-2xl p-6"
            >
              <div className="mb-6 flex items-center justify-between gap-3">
                <span className="rounded-full border border-pink-400/40 bg-pink-400/10 px-3 py-1 font-mono text-xs text-pink-600 dark:text-neon-pink">
                  {project.type}
                </span>
                <Terminal className="text-cyan-500 dark:text-neon-cyan" size={21} />
              </div>
              <h3 className="text-2xl font-semibold">{project.name}</h3>
              <p className="mt-4 text-sm leading-7 text-slate-600 dark:text-slate-300">{project.description}</p>
              <div className="mt-5 flex flex-wrap gap-2">
                {project.stack.map((item) => (
                  <span key={item} className="rounded-full bg-slate-900/5 px-3 py-1 text-xs text-slate-700 dark:bg-white/10 dark:text-slate-200">
                    {item}
                  </span>
                ))}
              </div>
              <ul className="mt-5 space-y-2 text-sm text-slate-600 dark:text-slate-300">
                {project.highlights.map((item) => (
                  <li key={item} className="flex gap-2">
                    <Code2 className="mt-0.5 shrink-0 text-cyan-500 dark:text-neon-cyan" size={15} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-auto flex gap-3 pt-6">
                <a href={project.live} className="inline-flex items-center gap-2 text-sm font-semibold text-cyan-700 dark:text-neon-cyan">
                  Live <ArrowUpRight size={15} />
                </a>
                <a href={project.code} className="inline-flex items-center gap-2 text-sm font-semibold text-slate-600 dark:text-slate-300">
                  Code <Code2 size={15} />
                </a>
              </div>
            </motion.article>
          ))}
        </div>
      </Section>

      <Section id="skills" eyebrow="Tech Stack" title="A practical stack for backend-heavy products and AI-enabled workflows.">
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {Object.entries(portfolio.skills).map(([group, skills], index) => (
            <motion.div
              key={group}
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: index * 0.05 }}
              className="neon-panel rounded-2xl p-6"
            >
              <h3 className="text-lg font-semibold text-cyan-700 dark:text-neon-cyan">{group}</h3>
              <div className="mt-5 flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <span key={skill} className="rounded-full border border-slate-300/70 px-3 py-1.5 text-sm text-slate-700 dark:border-white/15 dark:text-slate-200">
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </Section>

      <Section id="certifications" eyebrow="Verified Skills" title="Certifications and proof of knowledge from trusted providers.">
        <div className="grid gap-5 lg:grid-cols-2">
          {portfolio.certifications.map((certification, index) => (
            <motion.article
              key={certification.title}
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: index * 0.06 }}
              className="neon-panel rounded-2xl p-6"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="font-mono text-xs uppercase tracking-[0.18em] text-slate-500 dark:text-slate-400">{certification.issuer}</p>
                  <h3 className="mt-3 text-xl font-semibold">{certification.title}</h3>
                </div>
                <p className="rounded-full border border-slate-300/70 px-3 py-1 text-xs font-medium text-slate-600 dark:border-white/15 dark:text-slate-300">
                  {certification.date}
                </p>
              </div>
              <p className="mt-4 text-sm leading-7 text-slate-600 dark:text-slate-300">
                Verified certification evidence available via Google Drive.
              </p>
              {certification.certificate ? (
                <a
                  href={certification.certificate}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-6 inline-flex items-center gap-2 rounded-full border border-cyan-400/60 px-4 py-2 text-sm font-semibold text-cyan-700 transition hover:bg-cyan-400/10 dark:text-neon-cyan"
                >
                  <Eye size={16} />
                  View Certificate
                </a>
              ) : null}
            </motion.article>
          ))}
        </div>
      </Section>

      <Section id="contact" eyebrow="Next Step" title="Let’s build reliable products with smart automation and clean engineering.">
        <div className="grid gap-5 lg:grid-cols-[0.9fr_1.1fr]">
          <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} className="neon-panel rounded-2xl p-6">
            <div className="flex items-start gap-4">
              <div className="grid size-12 shrink-0 place-items-center rounded-full bg-cyan-400/10 text-cyan-600 dark:text-neon-cyan">
                <Award />
              </div>
              <div>
                <p className="font-mono text-xs uppercase tracking-[0.2em] text-slate-500 dark:text-slate-400">Award</p>
                <h3 className="mt-2 text-2xl font-semibold">{portfolio.award.title}</h3>
                <p className="mt-2 text-cyan-700 dark:text-neon-cyan">{portfolio.award.issuer}</p>
                <p className="mt-4 text-sm leading-7 text-slate-600 dark:text-slate-300">{portfolio.award.description}</p>
                {portfolio.award.certificate && portfolio.award.certificate !== "#" ? (
                  <a
                    href={portfolio.award.certificate}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-5 inline-flex items-center gap-2 rounded-full border border-cyan-400/60 px-4 py-2 text-sm font-semibold text-cyan-700 transition hover:bg-cyan-400/10 dark:text-neon-cyan"
                  >
                    <Eye size={16} />
                    View Certificate
                  </a>
                ) : null}
              </div>
            </div>
          </motion.div>

          <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} transition={{ delay: 0.08 }} className="neon-panel rounded-2xl p-6">
            <h3 className="text-2xl font-semibold">Contact</h3>
            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              <a href={`mailto:${portfolio.email}`} className="flex items-center gap-3 rounded-2xl border border-slate-300/70 p-4 transition hover:border-cyan-400 dark:border-white/15">
                <Mail className="text-cyan-600 dark:text-neon-cyan" size={19} />
                <span className="break-all text-sm">{portfolio.email}</span>
              </a>
              <a href={`tel:${portfolio.phone.replaceAll(" ", "")}`} className="flex items-center gap-3 rounded-2xl border border-slate-300/70 p-4 transition hover:border-cyan-400 dark:border-white/15">
                <Phone className="text-cyan-600 dark:text-neon-cyan" size={19} />
                <span className="text-sm">{portfolio.phone}</span>
              </a>
              {portfolio.socials.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-3 rounded-2xl border border-slate-300/70 p-4 transition hover:border-cyan-400 dark:border-white/15"
                >
                  {social.label === "LinkedIn" ? <Link className="text-cyan-600 dark:text-neon-cyan" size={19} /> : <ExternalLink className="text-cyan-600 dark:text-neon-cyan" size={19} />}
                  <span className="text-sm">{social.label}</span>
                </a>
              ))}
            </div>
          </motion.div>
        </div>
      </Section>
    </main>
  );
}
