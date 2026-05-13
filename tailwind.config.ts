import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./data/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        noogym: {
          black: "#05070A",
          panel: "#070B0F",
          line: "rgba(255,255,255,0.10)",
          lime: "#B6FF00",
          limeSoft: "#8FD900",
          muted: "#9AA4AF",
        },
      },
      boxShadow: {
        glow: "0 0 32px rgba(182, 255, 0, 0.22)",
        panel: "0 24px 80px rgba(0, 0, 0, 0.45)",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "Inter", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
