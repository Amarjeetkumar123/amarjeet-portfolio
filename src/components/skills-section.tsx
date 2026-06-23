"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { 
  FaJs, FaPython, FaReact, FaHtml5, FaNodeJs, FaAws, FaDocker, FaSync, FaGitAlt, FaTerminal, FaExchangeAlt, FaDatabase
} from "react-icons/fa";
import { 
  SiTypescript, SiNextdotjs, SiRedux, SiTailwindcss, SiExpress, SiJsonwebtokens, SiGraphql, SiMongodb, SiOpenai, SiPostgresql, SiMysql, SiRedis, SiNginx, SiJest
} from "react-icons/si";
import { Brain, Sparkles, Cpu } from "lucide-react";
import { Section, staggerContainer, staggerItem } from "@/components/portfolio-ui";
import { portfolio } from "@/data/portfolio";

// Map each skill name to its official brand color and brand icon
const skillMeta: Record<string, { icon: React.ReactNode; color: string }> = {
  "JavaScript":   { icon: <FaJs size={12} />, color: "#F7DF1E" },
  "TypeScript":   { icon: <SiTypescript size={11} />, color: "#3178C6" },
  "Python":       { icon: <FaPython size={12} />, color: "#3776AB" },
  "SQL":          { icon: <FaDatabase size={11} />, color: "#00758F" },
  "React.js":     { icon: <FaReact size={12} />, color: "#61DAFB" },
  "Next.js":      { icon: <SiNextdotjs size={11} />, color: "#888888" }, // neutral grey
  "Redux":        { icon: <SiRedux size={11} />, color: "#764ABC" },
  "Tailwind CSS": { icon: <SiTailwindcss size={11} />, color: "#06B6D4" },
  "HTML/CSS":     { icon: <FaHtml5 size={12} />, color: "#E34F26" },
  "Node.js":      { icon: <FaNodeJs size={12} />, color: "#539E43" },
  "Express.js":   { icon: <SiExpress size={11} />, color: "#828282" },
  "REST APIs":    { icon: <FaTerminal size={11} />, color: "#009688" },
  "WebSockets":   { icon: <FaExchangeAlt size={11} />, color: "#F43F5E" },
  "JWT":          { icon: <SiJsonwebtokens size={11} />, color: "#D63AFF" },
  "GraphQL":      { icon: <SiGraphql size={11} />, color: "#E10098" },
  "LangChain":    { icon: <Brain size={12} />, color: "#EC4899" },
  "RAG":          { icon: <Brain size={12} />, color: "#8B5CF6" },
  "Prompt Engineering": { icon: <Sparkles size={11} />, color: "#10B981" },
  "Vector Databases": { icon: <FaDatabase size={11} />, color: "#F59E0B" },
  "LLM Agents":   { icon: <Cpu size={11} />, color: "#EF4444" },
  "OpenAI API":   { icon: <SiOpenai size={11} />, color: "#74AA9C" },
  "MongoDB":      { icon: <SiMongodb size={11} />, color: "#47A248" },
  "PostgreSQL":   { icon: <SiPostgresql size={11} />, color: "#4169E1" },
  "MySQL":        { icon: <SiMysql size={11} />, color: "#4479A1" },
  "Redis":        { icon: <SiRedis size={11} />, color: "#DC382D" },
  "AWS (EC2, S3, Lambda)": { icon: <FaAws size={12} />, color: "#FF9900" },
  "Docker":       { icon: <FaDocker size={12} />, color: "#2496ED" },
  "CI/CD":        { icon: <FaSync size={11} />, color: "#10B981" },
  "Git":          { icon: <FaGitAlt size={12} />, color: "#F05032" },
  "Nginx":        { icon: <SiNginx size={11} />, color: "#009639" },
  "Jest":         { icon: <SiJest size={11} />, color: "#C21325" },
};

export function SkillsSection() {
  const [activeGroup, setActiveGroup] = useState("All");
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

  // Extract dynamically the groups and flat skills items
  const groups = ["All", ...portfolio.skills.map((g) => g.group)];

  const allSkills = portfolio.skills.flatMap((group) =>
    group.items.map((item) => ({
      name: item,
      group: group.group,
    }))
  );

  return (
    <Section id="skills" label="Skills">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-60px" }}
        className="space-y-6"
      >
        {/* Category Filters */}
        <motion.div variants={staggerItem} className="flex flex-wrap gap-1.5">
          {groups.map((group) => {
            const isActive = activeGroup === group;
            return (
              <button
                key={group}
                onClick={() => setActiveGroup(group)}
                className="px-3.5 py-1.5 rounded-full text-xs font-medium border transition-all duration-200"
                style={{
                  background: isActive ? "var(--accent-dim)" : "var(--surface)",
                  color: isActive ? "var(--accent)" : "var(--fg-3)",
                  borderColor: isActive ? "var(--accent)" : "var(--border)",
                }}
              >
                {group}
              </button>
            );
          })}
        </motion.div>

        {/* Skills Wall */}
        <motion.div 
          variants={staggerItem} 
          className="flex flex-wrap gap-2 pt-2"
        >
          {allSkills.map((skill) => {
            const meta = skillMeta[skill.name] || { icon: <FaDatabase size={11} />, color: "#888888" };
            const isDimmed = activeGroup !== "All" && skill.group !== activeGroup;
            const isHovered = hoveredSkill === skill.name;

            return (
              <div
                key={skill.name}
                onMouseEnter={() => setHoveredSkill(skill.name)}
                onMouseLeave={() => setHoveredSkill(null)}
                className={`skill-pill pill cursor-default ${isDimmed ? "dimmed" : ""}`}
                style={{
                  // Default state is neutral and matches light/dark themes
                  // Hover state lights up text, border, and glow using the brand color
                  color: isHovered ? meta.color : "var(--fg-2)",
                  borderColor: isHovered ? `${meta.color}35` : "var(--border)",
                  boxShadow: isHovered ? `0 0 14px ${meta.color}25` : undefined,
                  background: "var(--surface)",
                }}
              >
                <span 
                  className="transition-colors duration-200"
                  style={{ color: isHovered ? meta.color : "var(--fg-3)" }}
                >
                  {meta.icon}
                </span>
                <span>{skill.name}</span>
              </div>
            );
          })}
        </motion.div>

        {/* Extra stat row */}
        <motion.div variants={staggerItem} className="divider" />
        <motion.div 
          variants={staggerItem} 
          className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-[var(--fg-3)]"
        >
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
