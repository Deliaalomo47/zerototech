import type { Config } from "tailwindcss";

/**
 * ZeroToTech — Design System (Noxora-inspired)
 *
 * Paleta:
 * - Índigo profundo (#2C1E4A) — textos, header, footer, profundidad
 * - Azul confianza (#3C82F6) — links, acciones secundarias
 * - Verde menta (#7FFFD0) — progreso, éxito, elementos positivos
 * - Durazno pastel (#FFD6A5) — logros, calidez, detalles
 * - Blanco (#FFFFFF) — superficies, mucho aire
 *
 * Principios:
 * - Mucho blanco. Mucho aire. Mucho espacio.
 * - Sombras sutiles, nunca agresivas.
 * - Bordes suaves, padding generoso.
 * - Animaciones elegantes, nunca exageradas.
 */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        indigo: {
          DEFAULT: "#2C1E4A",
          light: "#3D2E5C",
          muted: "#6B5A8A",
          faint: "#F5F3F8",
        },
        blue: {
          DEFAULT: "#3C82F6",
          light: "#EBF2FF",
          muted: "#93BBFD",
        },
        mint: {
          DEFAULT: "#7FFFD0",
          light: "#E8FFF6",
          muted: "#B8FFE5",
          dark: "#2A9D7C",
        },
        peach: {
          DEFAULT: "#FFD6A5",
          light: "#FFF4E8",
          muted: "#FFE5C4",
          dark: "#C48A3F",
        },
        surface: "#FFFFFF",
        background: "#FEFEFE",
        border: "#F0ECF3",
        muted: "#8E829E",
      },
      fontFamily: {
        display: ["'Baloo 2'", "system-ui", "sans-serif"],
        body: ["'Plus Jakarta Sans'", "system-ui", "sans-serif"],
      },
      fontSize: {
        hero: ["3.5rem", { lineHeight: "1.08", letterSpacing: "-0.03em" }],
        "hero-sm": ["2.5rem", { lineHeight: "1.12", letterSpacing: "-0.025em" }],
        title: ["1.875rem", { lineHeight: "1.2", letterSpacing: "-0.02em" }],
        subtitle: ["1.25rem", { lineHeight: "1.5" }],
        body: ["1rem", { lineHeight: "1.65" }],
        small: ["0.875rem", { lineHeight: "1.55" }],
        caption: ["0.75rem", { lineHeight: "1.5", letterSpacing: "0.01em" }],
      },
      spacing: {
        18: "4.5rem",
        22: "5.5rem",
        26: "6.5rem",
        30: "7.5rem",
        36: "9rem",
      },
      borderRadius: {
        DEFAULT: "0.75rem",
        sm: "0.5rem",
        md: "0.75rem",
        lg: "1rem",
        xl: "1.25rem",
        "2xl": "1.5rem",
        full: "9999px",
      },
      boxShadow: {
        soft: "0 2px 8px rgba(44, 30, 74, 0.04)",
        card: "0 4px 16px rgba(44, 30, 74, 0.05), 0 1px 4px rgba(44, 30, 74, 0.03)",
        hover: "0 8px 32px rgba(44, 30, 74, 0.08), 0 2px 8px rgba(44, 30, 74, 0.04)",
        elevated: "0 16px 48px rgba(44, 30, 74, 0.1), 0 4px 12px rgba(44, 30, 74, 0.04)",
        glow: "0 0 0 3px rgba(127, 255, 208, 0.2)",
        "glow-indigo": "0 0 0 3px rgba(44, 30, 74, 0.08)",
      },
      transitionTimingFunction: {
        elegant: "cubic-bezier(0.16, 1, 0.3, 1)",
      },
      transitionDuration: {
        DEFAULT: "200ms",
        300: "300ms",
        400: "400ms",
      },
      keyframes: {
        "fade-in": {
          from: { opacity: "0" },
          to: { opacity: "1" },
        },
        "fade-up": {
          from: { opacity: "0", transform: "translateY(16px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        "scale-in": {
          from: { opacity: "0", transform: "scale(0.96)" },
          to: { opacity: "1", transform: "scale(1)" },
        },
        "slide-right": {
          from: { transform: "translateX(-100%)" },
          to: { transform: "translateX(400%)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-6px)" },
        },
      },
      animation: {
        "fade-in": "fade-in 0.4s ease-out both",
        "fade-up": "fade-up 0.5s cubic-bezier(0.16, 1, 0.3, 1) both",
        "fade-up-1": "fade-up 0.5s cubic-bezier(0.16, 1, 0.3, 1) 0.1s both",
        "fade-up-2": "fade-up 0.5s cubic-bezier(0.16, 1, 0.3, 1) 0.2s both",
        "fade-up-3": "fade-up 0.5s cubic-bezier(0.16, 1, 0.3, 1) 0.3s both",
        "scale-in": "scale-in 0.3s cubic-bezier(0.16, 1, 0.3, 1) both",
        "slide-right": "slide-right 2s ease-in-out infinite",
        float: "float 5s ease-in-out infinite",
      },
    },
  },
  plugins: [],
} satisfies Config;
