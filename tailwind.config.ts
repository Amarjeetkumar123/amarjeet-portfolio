import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/data/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "#05070d",
        neon: {
          cyan: "#00f5ff",
          lime: "#b6ff5c",
          pink: "#ff4ecd",
          violet: "#8b5cf6",
        },
      },
      boxShadow: {
        neon: "0 0 24px rgba(0, 245, 255, 0.35)",
        "neon-lime": "0 0 24px rgba(182, 255, 92, 0.28)",
      },
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
        mono: ["JetBrains Mono", "SFMono-Regular", "ui-monospace", "monospace"],
      },
    },
  },
  plugins: [],
};

export default config;
