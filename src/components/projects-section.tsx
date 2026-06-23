"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, BookOpen, Car, ChevronLeft, ChevronRight, Code2, Pause, Play } from "lucide-react";
import { getExternalLinkProps, Section } from "@/components/portfolio-ui";
import { portfolio } from "@/data/portfolio";

export function ProjectsSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState(0); // 1 = forward, -1 = backward
  const [isPlaying, setIsPlaying] = useState(true);
  const [progress, setProgress] = useState(0);

  const projects = portfolio.projects;
  const duration = 6000; // 6 seconds per slide
  const tickTime = 100; // tick every 100ms
  const step = (tickTime / duration) * 100;

  // Handle auto-playing tick loop & reset timer when index changes
  useEffect(() => {
    if (!isPlaying) return;
    setProgress(0);
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          setDirection(1);
          setActiveIndex((idx) => (idx + 1) % projects.length);
          return 0;
        }
        return prev + step;
      });
    }, tickTime);
    return () => clearInterval(interval);
  }, [activeIndex, isPlaying, projects.length, step]);

  const handleNext = () => {
    setDirection(1);
    setActiveIndex((prev) => (prev + 1) % projects.length);
    setProgress(0);
  };

  const handlePrev = () => {
    setDirection(-1);
    setActiveIndex((prev) => (prev - 1 + projects.length) % projects.length);
    setProgress(0);
  };

  const handleSelect = (index: number) => {
    if (index === activeIndex) return;
    setDirection(index > activeIndex ? 1 : -1);
    setActiveIndex(index);
    setProgress(0);
  };

  const getProjectIcon = (name: string) => {
    const n = name.toLowerCase();
    if (n.includes("pronnel")) {
      return (
        <div
          className="size-14 rounded-2xl overflow-hidden border border-[var(--border)] bg-white p-2 shrink-0 flex items-center justify-center shadow-md transition-all duration-300 hover:border-[var(--accent)]"
        >
          <img src="/logos/pronnel-logo.png" alt="Pronnel Logo" className="object-contain h-full w-full" />
        </div>
      );
    }
    if (n.includes("netflix")) {
      return (
        <div
          className="size-14 rounded-2xl border border-[var(--border)] bg-[#141414] p-3 shrink-0 flex items-center justify-center shadow-md transition-all duration-300 hover:border-[var(--accent)]"
        >
          <svg viewBox="0 0 119 217" className="h-full object-contain" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 0h41v217H0z" fill="#E50914" />
            <path d="M78 0h41v217H78z" fill="#E50914" />
            <path d="M0 0l41 0l78 217l-41 0z" fill="#B81D24" />
          </svg>
        </div>
      );
    }
    if (n.includes("booklet")) {
      return (
        <div
          className="size-14 rounded-2xl border border-orange-500/20 bg-orange-500/5 text-orange-500 shrink-0 flex items-center justify-center shadow-md transition-all duration-300 hover:border-orange-500 hover:shadow-[0_0_12px_rgba(249,115,22,0.2)]"
        >
          <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="size-6">
            <path d="M12 21C12 21 6.5 17.5 3 17.5V4.5C6.5 4.5 12 8 12 8C12 8 17.5 4.5 21 4.5V17.5C17.5 17.5 12 21 12 21Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
            <path d="M12 8V21" stroke="currentColor" strokeWidth="2" />
            <path d="M6 10H9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            <path d="M6 13H9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            <path d="M15 10H18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            <path d="M15 13H18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
        </div>
      );
    }
    return (
      <div
        className="size-14 rounded-2xl overflow-hidden shrink-0 shadow-md transition-all duration-300 hover:scale-105"
      >
        <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" className="h-full w-full">
          {/* Red Rounded Square Background */}
          <rect x="0" y="0" width="100" height="100" rx="24" fill="url(#carRedGrad)" />
          <defs>
            <linearGradient id="carRedGrad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#e52d35" />
              <stop offset="100%" stopColor="#b3151a" />
            </linearGradient>
          </defs>

          {/* White Car Outline Profile */}
          <path
            d="M 18 62 
               C 18 53, 21 52, 26 52 
               L 30 52 
               C 33 52, 35 48, 37 44 
               L 42 34 
               C 44 30, 48 30, 52 30 
               L 62 30 
               C 66 30, 70 30, 72 34 
               L 77 44 
               C 79 48, 81 52, 84 52 
               L 88 52 
               C 93 52, 96 53, 96 62"
            stroke="white"
            strokeWidth="5"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
          />

          {/* Left Wheel */}
          <circle cx="36" cy="62" r="7.5" fill="none" stroke="white" strokeWidth="5" />
          {/* Right Wheel */}
          <circle cx="72" cy="62" r="7.5" fill="none" stroke="white" strokeWidth="5" />

          {/* Road / Speed Line Underneath (Aligned with wheels) */}
          <line x1="12" y1="74" x2="88" y2="74" stroke="white" strokeWidth="5" strokeLinecap="round" />
        </svg>
      </div>
    );
  };

  const getShortName = (name: string) => {
    const n = name.toLowerCase();
    if (n.includes("pronnel")) return "Pronnel";
    if (n.includes("netflix")) return "Netflix";
    if (n.includes("booklet")) return "Booklet";
    if (n.includes("car loans")) return "Car Loans";
    return name;
  };

  const currentProject = projects[activeIndex];

  // Framer Motion slide variants
  const slideVariants = {
    enter: (dir: number) => ({
      x: dir > 0 ? 50 : -50,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
      transition: {
        x: { type: "spring", stiffness: 320, damping: 30 },
        opacity: { duration: 0.25 },
      },
    },
    exit: (dir: number) => ({
      x: dir > 0 ? -50 : 50,
      opacity: 0,
      transition: {
        x: { type: "spring", stiffness: 320, damping: 30 },
        opacity: { duration: 0.25 },
      },
    }),
  };

  return (
    <Section id="projects" label="Projects" className="pb-6">
      <div
        className="relative w-full overflow-hidden"
        onMouseEnter={() => setIsPlaying(false)}
        onMouseLeave={() => setIsPlaying(true)}
      >
        {/* Slider View with transition direction */}
        <div className="relative min-h-[420px] lg:min-h-[250px] flex items-center">
          <AnimatePresence initial={false} custom={direction} mode="wait">
            <motion.div
              key={activeIndex}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              className="w-full grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start py-1"
            >
              {/* Left Column: Icon, title, type, action buttons */}
              <div className="lg:col-span-5 flex flex-col justify-between h-full space-y-6">
                <div>
                  <div className="mb-6 text-[var(--fg)]">
                    {getProjectIcon(currentProject.name)}
                  </div>

                  <div className="mb-2">
                    <span className="text-[10px] font-semibold tracking-wider uppercase text-[var(--fg-3)]">
                      {currentProject.type}
                    </span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-[var(--fg)] leading-snug">
                    {currentProject.name}
                  </h3>
                </div>

                <div className="flex flex-wrap items-center gap-3 pt-2">
                  <a
                    href={currentProject.live}
                    {...getExternalLinkProps(currentProject.live)}
                    className="btn btn-solid text-xs px-5 py-2.5 inline-flex items-center gap-1.5 font-semibold transition-all duration-300 active:scale-95 bg-[var(--accent)] text-white hover:opacity-90 shadow-[0_4px_14px_-4px_var(--accent-dim)]"
                  >
                    Live Demo <ArrowUpRight size={13} />
                  </a>
                  {currentProject.code !== "#" && (
                    <a
                      href={currentProject.code}
                      {...getExternalLinkProps(currentProject.code)}
                      className="btn btn-outline text-xs px-5 py-2.5 inline-flex items-center gap-1.5 font-medium transition-all duration-300 active:scale-95 hover:bg-[var(--surface)] border-[var(--border-2)] hover:border-[var(--accent)]"
                    >
                      Codebase <Code2 size={13} />
                    </a>
                  )}
                </div>
              </div>

              {/* Right Column: Description, key points, stack */}
              <div className="lg:col-span-7 space-y-6">
                <p className="text-sm text-[var(--fg-2)] leading-relaxed font-normal">
                  {currentProject.description}
                </p>

                <div className="space-y-3">
                  <h4 className="text-[10px] uppercase tracking-wider font-semibold text-[var(--fg-3)]">
                    Key Features & Implementations
                  </h4>
                  <ul className="space-y-3">
                    {currentProject.highlights.map((h, i) => (
                      <li key={i} className="flex items-start gap-3 text-xs sm:text-sm text-[var(--fg-2)] leading-relaxed">
                        <span
                          className="mt-2 size-1.5 shrink-0 rounded-full bg-[var(--accent)] shadow-[0_0_8px_var(--accent-dim)]"
                        />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="space-y-2.5 pt-2">
                  <h4 className="text-[10px] uppercase tracking-wider font-semibold text-[var(--fg-3)]">
                    Technology Stack
                  </h4>
                  <div className="flex flex-wrap gap-1.5">
                    {currentProject.stack.map((t) => (
                      <span
                        key={t}
                        className="pill text-[10px]"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Progress Navigation Dashboard */}
        <div className="mt-6 pt-5 border-t border-[var(--border)]/40 flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Progress Indicators */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 w-full md:max-w-3xl">
            {projects.map((proj, i) => {
              const isActive = i === activeIndex;
              const displayName = getShortName(proj.name);

              return (
                <button
                  key={proj.name}
                  onClick={() => handleSelect(i)}
                  className="text-left group relative py-2 transition-all cursor-pointer focus:outline-none"
                >
                  <div className="flex items-center justify-between text-[10px] font-semibold tracking-wider uppercase mb-1.5 transition-colors">
                    <span className={isActive ? "text-[var(--fg)]" : "text-[var(--fg-3)] group-hover:text-[var(--fg-2)]"}>
                      0{i + 1}
                    </span>
                    <span className={isActive ? "text-[var(--fg)]" : "text-[var(--fg-3)] group-hover:text-[var(--fg-2)]"}>
                      {displayName}
                    </span>
                  </div>

                  {/* Horizontal progress bar track */}
                  <div className="h-[3px] w-full rounded-full bg-[var(--border)] overflow-hidden">
                    <div
                      className={`h-full rounded-full bg-[var(--accent)] shadow-[0_0_6px_var(--accent-dim)] ${isActive ? "" : "transition-none"}`}
                      style={{
                        width: isActive ? `${progress}%` : "0%",
                        transition: isActive ? "width 100ms linear" : "none"
                      }}
                    />
                  </div>
                </button>
              );
            })}
          </div>

          {/* Navigation and Play/Pause Controls */}
          <div className="flex items-center gap-2.5 shrink-0 self-end md:self-center">
            <button
              onClick={handlePrev}
              className="p-2 rounded-full border border-[var(--border)] bg-[var(--surface)] text-[var(--fg-2)] hover:text-[var(--fg)] hover:border-[var(--border-2)] transition-all cursor-pointer hover:scale-105 active:scale-95"
              aria-label="Previous Project"
            >
              <ChevronLeft size={15} />
            </button>

            <button
              onClick={() => setIsPlaying(!isPlaying)}
              className="p-2 rounded-full border border-[var(--border)] bg-[var(--surface)] text-[var(--fg-2)] hover:text-[var(--fg)] hover:border-[var(--border-2)] transition-all cursor-pointer hover:scale-105 active:scale-95 flex items-center justify-center"
              aria-label={isPlaying ? "Pause Autoplay" : "Play Autoplay"}
            >
              {isPlaying ? <Pause size={15} /> : <Play size={15} fill="currentColor" />}
            </button>

            <button
              onClick={handleNext}
              className="p-2 rounded-full border border-[var(--border)] bg-[var(--surface)] text-[var(--fg-2)] hover:text-[var(--fg)] hover:border-[var(--border-2)] transition-all cursor-pointer hover:scale-105 active:scale-95"
              aria-label="Next Project"
            >
              <ChevronRight size={15} />
            </button>
          </div>
        </div>
      </div>
    </Section>
  );
}
