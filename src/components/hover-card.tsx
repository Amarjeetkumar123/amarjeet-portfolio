"use client";

import { motion } from "framer-motion";

type HoverCardProps = {
  children: React.ReactNode;
  className?: string;
  delay?: number;
};

export function HoverCard({ children, className = "", delay = 0 }: HoverCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      whileHover={{ y: -7, scale: 1.01 }}
      transition={{ duration: 0.42, delay }}
      className={`neon-panel hover-card ${className}`}
    >
      {children}
    </motion.div>
  );
}
