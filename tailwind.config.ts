import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./index.html",
    "./src/**/*.{ts,tsx}",
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "1rem",
      screens: {
        "2xl": "1280px",
      },
    },
    extend: {
      colors: {
        /* Political Brand Colors */
        primary: "var(--color-primary)",       // Kesariya
        secondary: "var(--color-secondary)",   // Governance Blue

        /* Text */
        text: "var(--color-text)",
        muted: "var(--color-text-muted)",

        /* Backgrounds */
        bg: "var(--color-bg)",
        "bg-soft": "var(--color-bg-soft)",

        /* Borders */
        border: "var(--color-border)",
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        hindi: ["Hind", "Noto Sans Devanagari", "sans-serif"],
      },
      boxShadow: {
        soft: "0 4px 20px rgba(0, 0, 0, 0.06)",
        navbar: "0 2px 12px rgba(0, 0, 0, 0.08)",
      },
      transitionTimingFunction: {
        smooth: "cubic-bezier(0.4, 0, 0.2, 1)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};

export default config;
