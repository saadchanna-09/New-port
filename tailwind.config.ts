import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        void: "#050608",
        surface: "#0A0D10",
        edge: "rgba(0,210,255,0.14)",
        signal: {
          violet: "#00D2FF",
          cyan: "#00D2FF",
          crimson: "#FF3B4E",
          gold: "#E8B356",
        },
        ink: {
          DEFAULT: "#EAF6FB",
          dim: "#8FA3AC",
          faint: "#4C5A61",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "sans-serif"],
        body: ["var(--font-body)", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      backgroundImage: {
        "grid-fade":
          "linear-gradient(to bottom, rgba(5,6,8,0) 0%, #050608 90%)",
        "signal-gradient":
          "linear-gradient(120deg, #00D2FF 0%, #7CE8FF 100%)",
        "hud-gradient":
          "linear-gradient(120deg, #00D2FF 0%, #E8B356 100%)",
      },
      boxShadow: {
        glow: "0 0 60px -12px rgba(0,210,255,0.5)",
        "glow-cyan": "0 0 60px -14px rgba(0,210,255,0.4)",
        "glow-crimson": "0 0 40px -10px rgba(255,59,78,0.5)",
      },
      keyframes: {
        "pulse-slow": {
          "0%, 100%": { opacity: "0.35" },
          "50%": { opacity: "0.7" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
        scan: {
          "0%": { transform: "translateY(-100%)" },
          "100%": { transform: "translateY(100%)" },
        },
        flicker: {
          "0%, 100%": { opacity: "1" },
          "42%": { opacity: "1" },
          "43%": { opacity: "0.4" },
          "44%": { opacity: "1" },
          "88%": { opacity: "1" },
          "89%": { opacity: "0.5" },
          "90%": { opacity: "1" },
        },
      },
      animation: {
        "pulse-slow": "pulse-slow 6s ease-in-out infinite",
        float: "float 7s ease-in-out infinite",
        scan: "scan 4s linear infinite",
        flicker: "flicker 6s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
