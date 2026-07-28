import type { Config } from "tailwindcss";

/**
 * ZeroToTech — Design System (Noxora Dark Space)
 *
 * Palette from the brand guide:
 * - #7FFFD0 Verde Aqua
 * - #FFD6A5 Durazno Cálido
 * - #2C1E4A Azul Oscuro
 * - #9C8CFF Violeta Radiante
 * - #1B1228 Fondo Profundo
 * - #151022 Tarjetas
 *
 * Dark space theme with subtle stars.
 * Typography: Cormorant Garamond (headings) + Inter (body).
 */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        // Core palette
        aqua: {
          DEFAULT: "#7FFFD0",
          muted: "#7FFFD0B3",
          glow: "rgba(127, 255, 208, 0.15)",
        },
        peach: {
          DEFAULT: "#FFD6A5",
          muted: "#FFD6A5B3",
          glow: "rgba(255, 214, 165, 0.15)",
        },
        violet: {
          DEFAULT: "#9C8CFF",
          muted: "#9C8CFFB3",
          glow: "rgba(156, 140, 255, 0.15)",
          radiante: "#9C8CFF",
        },
        pink: {
          DEFAULT: "#FF9ECD",
          muted: "#FF9ECDB3",
          glow: "rgba(255, 158, 205, 0.15)",
        },
        indigo: {
          DEFAULT: "#2C1E4A",
          deep: "#1B1228",
          card: "#151022",
          light: "#3D2E5C",
        },
        // Surfaces
        surface: {
          DEFAULT: "#151022",
          raised: "#1E1533",
          glass: "rgba(21, 16, 34, 0.8)",
        },
        background: "#1B1228",
        border: "rgba(156, 140, 255, 0.12)",
        "border-strong": "rgba(156, 140, 255, 0.25)",
        // Text
        text: {
          DEFAULT: "#E8E4F0",
          muted: "#9B93AD",
          faint: "#6B6380",
        },
      },
      fontFamily: {
        display: ["'Cormorant Garamond'", "Georgia", "serif"],
        body: ["'Inter'", "system-ui", "sans-serif"],
      },
      fontSize: {
        hero: ["4rem", { lineHeight: "1.05", letterSpacing: "-0.02em" }],
        "hero-sm": ["2.75rem", { lineHeight: "1.1", letterSpacing: "-0.02em" }],
        title: ["2rem", { lineHeight: "1.2", letterSpacing: "-0.01em" }],
        "title-sm": ["1.5rem", { lineHeight: "1.3" }],
        subtitle: ["1.25rem", { lineHeight: "1.5" }],
        body: ["1rem", { lineHeight: "1.7" }],
        small: ["0.875rem", { lineHeight: "1.6" }],
        caption: ["0.75rem", { lineHeight: "1.5", letterSpacing: "0.03em" }],
      },
      spacing: {
        18: "4.5rem",
        22: "5.5rem",
        26: "6.5rem",
      },
      borderRadius: {
        DEFAULT: "1rem",
        sm: "0.75rem",
        md: "1rem",
        lg: "1.25rem",
        xl: "1.5rem",
        "2xl": "2rem",
        full: "9999px",
      },
      boxShadow: {
        soft: "0 2px 12px rgba(156, 140, 255, 0.06)",
        card: "0 4px 24px rgba(0, 0, 0, 0.3), 0 0 0 1px rgba(156, 140, 255, 0.06)",
        hover: "0 8px 32px rgba(156, 140, 255, 0.1), 0 0 0 1px rgba(156, 140, 255, 0.12)",
        glow: "0 0 20px rgba(127, 255, 208, 0.15), 0 0 60px rgba(156, 140, 255, 0.08)",
        "glow-violet": "0 0 16px rgba(156, 140, 255, 0.2)",
        "glow-aqua": "0 0 16px rgba(127, 255, 208, 0.2)",
      },
      backgroundImage: {
        "gradient-brand": "linear-gradient(135deg, #7FFFD0 0%, #9C8CFF 50%, #FF9ECD 100%)",
        "gradient-brand-h": "linear-gradient(90deg, #7FFFD0 0%, #9C8CFF 50%, #FF9ECD 100%)",
        "gradient-surface": "linear-gradient(180deg, #1E1533 0%, #151022 100%)",
        "gradient-card": "linear-gradient(135deg, rgba(156,140,255,0.05) 0%, rgba(127,255,208,0.03) 100%)",
      },
      transitionTimingFunction: {
        elegant: "cubic-bezier(0.16, 1, 0.3, 1)",
      },
      keyframes: {
        "fade-up": {
          from: { opacity: "0", transform: "translateY(16px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        "fade-in": {
          from: { opacity: "0" },
          to: { opacity: "1" },
        },
        "scale-in": {
          from: { opacity: "0", transform: "scale(0.96)" },
          to: { opacity: "1", transform: "scale(1)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-6px)" },
        },
        "glow-pulse": {
          "0%, 100%": { opacity: "0.6" },
          "50%": { opacity: "1" },
        },
        "slide-right": {
          from: { transform: "translateX(-100%)" },
          to: { transform: "translateX(400%)" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.5s cubic-bezier(0.16, 1, 0.3, 1) both",
        "fade-up-1": "fade-up 0.5s cubic-bezier(0.16, 1, 0.3, 1) 0.1s both",
        "fade-up-2": "fade-up 0.5s cubic-bezier(0.16, 1, 0.3, 1) 0.2s both",
        "fade-up-3": "fade-up 0.5s cubic-bezier(0.16, 1, 0.3, 1) 0.3s both",
        "fade-up-4": "fade-up 0.5s cubic-bezier(0.16, 1, 0.3, 1) 0.4s both",
        "fade-in": "fade-in 0.4s ease-out both",
        "scale-in": "scale-in 0.3s cubic-bezier(0.16, 1, 0.3, 1) both",
        float: "float 5s ease-in-out infinite",
        "glow-pulse": "glow-pulse 3s ease-in-out infinite",
        "slide-right": "slide-right 2s ease-in-out infinite",
      },
    },
  },
  plugins: [],
} satisfies Config;
