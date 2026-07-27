import type { Config } from "tailwindcss";

/**
 * ZeroToTech — Design System (Noxora Holographic)
 *
 * Identidad: Holográfica, elegante, futurista, cercana.
 * El índigo es PROTAGONISTA, no secundario.
 * Los fondos están VIVOS — nunca planos.
 * Cada sombra tiene intención. Cada animación tiene propósito.
 */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        // --- Protagonistas ---
        indigo: {
          DEFAULT: "#2C1E4A",
          deep: "#1A1030",
          light: "#3D2E5C",
          muted: "#6B5A8A",
          faint: "#F3F0F8",
          glow: "rgba(44, 30, 74, 0.6)",
        },
        mint: {
          DEFAULT: "#7FFFD0",
          light: "#E5FFF5",
          muted: "#B3FFE3",
          glow: "rgba(127, 255, 208, 0.3)",
        },
        peach: {
          DEFAULT: "#FFD6A5",
          light: "#FFF4E8",
          muted: "#FFE5C4",
          glow: "rgba(255, 214, 165, 0.3)",
        },
        lavender: {
          DEFAULT: "#9CBCFF",
          light: "#EDF2FF",
          muted: "#C4D7FF",
          glow: "rgba(156, 188, 255, 0.3)",
        },
        // --- Superficies (NO blanco puro) ---
        surface: {
          DEFAULT: "#FDFCFF",
          raised: "rgba(255, 255, 255, 0.7)",
          glass: "rgba(255, 255, 255, 0.5)",
        },
        background: "#F8F6FC",
        border: "rgba(44, 30, 74, 0.08)",
        "border-strong": "rgba(44, 30, 74, 0.15)",
        muted: "#7E6F9A",
      },
      fontFamily: {
        display: ["'Baloo 2'", "system-ui", "sans-serif"],
        body: ["'Plus Jakarta Sans'", "system-ui", "sans-serif"],
      },
      fontSize: {
        hero: ["4rem", { lineHeight: "1.05", letterSpacing: "-0.035em" }],
        "hero-sm": ["2.75rem", { lineHeight: "1.1", letterSpacing: "-0.03em" }],
        title: ["2rem", { lineHeight: "1.2", letterSpacing: "-0.02em" }],
        "title-sm": ["1.5rem", { lineHeight: "1.3", letterSpacing: "-0.015em" }],
        subtitle: ["1.25rem", { lineHeight: "1.5" }],
        body: ["1rem", { lineHeight: "1.7" }],
        small: ["0.875rem", { lineHeight: "1.6" }],
        caption: ["0.75rem", { lineHeight: "1.5", letterSpacing: "0.02em" }],
      },
      spacing: {
        18: "4.5rem",
        22: "5.5rem",
        26: "6.5rem",
        30: "7.5rem",
      },
      borderRadius: {
        DEFAULT: "0.875rem",
        sm: "0.625rem",
        md: "0.875rem",
        lg: "1.125rem",
        xl: "1.5rem",
        "2xl": "2rem",
        "3xl": "2.5rem",
        full: "9999px",
      },
      boxShadow: {
        // Indigo-tinted shadows for depth with personality
        soft: "0 2px 12px rgba(44, 30, 74, 0.06)",
        card: "0 4px 24px rgba(44, 30, 74, 0.07), 0 1px 4px rgba(44, 30, 74, 0.04)",
        hover: "0 12px 40px rgba(44, 30, 74, 0.1), 0 4px 12px rgba(44, 30, 74, 0.05)",
        elevated: "0 20px 60px rgba(44, 30, 74, 0.12), 0 8px 20px rgba(44, 30, 74, 0.06)",
        // Glow effects
        "glow-mint": "0 0 20px rgba(127, 255, 208, 0.25), 0 0 60px rgba(127, 255, 208, 0.1)",
        "glow-peach": "0 0 20px rgba(255, 214, 165, 0.25), 0 0 60px rgba(255, 214, 165, 0.1)",
        "glow-lavender": "0 0 20px rgba(156, 188, 255, 0.25), 0 0 60px rgba(156, 188, 255, 0.1)",
        "glow-indigo": "0 0 20px rgba(44, 30, 74, 0.15), 0 0 60px rgba(44, 30, 74, 0.08)",
        // Glass inner
        "inner-glass": "inset 0 1px 0 rgba(255, 255, 255, 0.5)",
      },
      backdropBlur: {
        xs: "2px",
        glass: "16px",
      },
      backgroundImage: {
        // Holographic gradient halos
        "halo-mint": "radial-gradient(ellipse at center, rgba(127, 255, 208, 0.15) 0%, transparent 70%)",
        "halo-peach": "radial-gradient(ellipse at center, rgba(255, 214, 165, 0.12) 0%, transparent 70%)",
        "halo-lavender": "radial-gradient(ellipse at center, rgba(156, 188, 255, 0.12) 0%, transparent 70%)",
        "halo-indigo": "radial-gradient(ellipse at center, rgba(44, 30, 74, 0.04) 0%, transparent 70%)",
        // Page gradients (alive backgrounds)
        "gradient-page": "linear-gradient(180deg, #F8F6FC 0%, #F2EEFA 30%, #F8F6FC 60%, #FDFCFF 100%)",
        "gradient-hero": "radial-gradient(ellipse 90% 60% at 50% 20%, rgba(156, 188, 255, 0.12) 0%, transparent 50%), radial-gradient(ellipse 70% 50% at 70% 80%, rgba(127, 255, 208, 0.08) 0%, transparent 50%), radial-gradient(ellipse 50% 40% at 20% 60%, rgba(255, 214, 165, 0.06) 0%, transparent 50%)",
        // Card gradients
        "gradient-glass": "linear-gradient(135deg, rgba(255,255,255,0.8) 0%, rgba(253,252,255,0.4) 100%)",
        "gradient-indigo": "linear-gradient(135deg, #2C1E4A 0%, #3D2E5C 100%)",
        "gradient-route": "linear-gradient(135deg, #FFD6A5 0%, #7FFFD0 50%, #9CBCFF 100%)",
      },
      transitionTimingFunction: {
        elegant: "cubic-bezier(0.16, 1, 0.3, 1)",
        bounce: "cubic-bezier(0.34, 1.56, 0.64, 1)",
      },
      keyframes: {
        "fade-up": {
          from: { opacity: "0", transform: "translateY(20px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        "fade-in": {
          from: { opacity: "0" },
          to: { opacity: "1" },
        },
        "scale-in": {
          from: { opacity: "0", transform: "scale(0.95)" },
          to: { opacity: "1", transform: "scale(1)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-8px)" },
        },
        "float-slow": {
          "0%, 100%": { transform: "translateY(0) rotate(0deg)" },
          "50%": { transform: "translateY(-12px) rotate(1deg)" },
        },
        "glow-pulse": {
          "0%, 100%": { opacity: "0.6" },
          "50%": { opacity: "1" },
        },
        "slide-right": {
          from: { transform: "translateX(-100%)" },
          to: { transform: "translateX(400%)" },
        },
        "gradient-shift": {
          "0%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
          "100%": { backgroundPosition: "0% 50%" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.6s cubic-bezier(0.16, 1, 0.3, 1) both",
        "fade-up-1": "fade-up 0.6s cubic-bezier(0.16, 1, 0.3, 1) 0.1s both",
        "fade-up-2": "fade-up 0.6s cubic-bezier(0.16, 1, 0.3, 1) 0.2s both",
        "fade-up-3": "fade-up 0.6s cubic-bezier(0.16, 1, 0.3, 1) 0.3s both",
        "fade-up-4": "fade-up 0.6s cubic-bezier(0.16, 1, 0.3, 1) 0.4s both",
        "fade-in": "fade-in 0.4s ease-out both",
        "scale-in": "scale-in 0.4s cubic-bezier(0.16, 1, 0.3, 1) both",
        float: "float 4s ease-in-out infinite",
        "float-slow": "float-slow 6s ease-in-out infinite",
        "glow-pulse": "glow-pulse 3s ease-in-out infinite",
        "slide-right": "slide-right 2s ease-in-out infinite",
        "gradient-shift": "gradient-shift 8s ease infinite",
      },
    },
  },
  plugins: [],
} satisfies Config;
