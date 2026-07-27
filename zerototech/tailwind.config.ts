import type { Config } from "tailwindcss";

/**
 * ZeroToTech — Design System v3
 *
 * Inspiración: la precisión de Linear, la calidez de Notion,
 * la tipografía de Vercel, el movimiento de Framer, la accesibilidad de Arc.
 * Pero con identidad propia: cálida, cercana, motivadora.
 *
 * Principios:
 * - Menos es más. Cada sombra, cada color tiene propósito.
 * - El espacio vacío es un elemento de diseño.
 * - La animación comunica estado, no decora.
 * - El contraste guía el ojo, no grita.
 */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        // Core palette — restrained, intentional
        primary: {
          DEFAULT: "#3C82F6",
          subtle: "#EFF6FF",
          muted: "#93C5FD",
          strong: "#1D4ED8",
        },
        secondary: {
          DEFAULT: "#34D399",
          subtle: "#ECFDF5",
          muted: "#6EE7B7",
        },
        accent: {
          DEFAULT: "#F59E0B",
          subtle: "#FFFBEB",
          muted: "#FCD34D",
        },
        // Neutrals — warm-tinted, not gray
        neutral: {
          0: "#FFFFFF",
          50: "#FAFBFD",
          100: "#F4F5F7",
          200: "#E8EAF0",
          300: "#D1D5DE",
          400: "#9CA3B4",
          500: "#6B7280",
          600: "#4B5563",
          700: "#374151",
          800: "#1F2937",
          900: "#111827",
          950: "#0A0E17",
        },
        // Semantic
        success: "#10B981",
        warning: "#F59E0B",
        danger: "#EF4444",
        // Brand
        violet: { DEFAULT: "#8B5CF6", subtle: "#F5F3FF" },
        coral: { DEFAULT: "#F97066", subtle: "#FFF1F0" },
        teal: { DEFAULT: "#14B8A6", subtle: "#F0FDFA" },
        // Surfaces
        surface: "#FFFFFF",
        background: "#FAFBFD",
        "surface-raised": "#FFFFFF",
        "surface-overlay": "rgba(255, 255, 255, 0.8)",
      },
      fontFamily: {
        display: ["'Baloo 2'", "system-ui", "sans-serif"],
        body: ["'Plus Jakarta Sans'", "system-ui", "sans-serif"],
        mono: ["'JetBrains Mono'", "monospace"],
      },
      fontSize: {
        "display-xl": ["3.75rem", { lineHeight: "1.05", letterSpacing: "-0.035em", fontWeight: "800" }],
        "display-lg": ["3rem", { lineHeight: "1.08", letterSpacing: "-0.03em", fontWeight: "800" }],
        "display-md": ["2.25rem", { lineHeight: "1.15", letterSpacing: "-0.025em", fontWeight: "700" }],
        "display-sm": ["1.75rem", { lineHeight: "1.2", letterSpacing: "-0.02em", fontWeight: "700" }],
        "body-lg": ["1.125rem", { lineHeight: "1.65" }],
        "body-md": ["1rem", { lineHeight: "1.6" }],
        "body-sm": ["0.875rem", { lineHeight: "1.55" }],
        "caption": ["0.75rem", { lineHeight: "1.5", letterSpacing: "0.02em" }],
      },
      borderRadius: {
        sm: "0.5rem",
        md: "0.75rem",
        lg: "1rem",
        xl: "1.25rem",
        "2xl": "1.5rem",
        "3xl": "2rem",
        full: "9999px",
      },
      boxShadow: {
        // Linear-inspired: very subtle, layered
        xs: "0 1px 2px rgba(0, 0, 0, 0.04)",
        sm: "0 2px 4px rgba(0, 0, 0, 0.04), 0 1px 2px rgba(0, 0, 0, 0.02)",
        md: "0 4px 12px rgba(0, 0, 0, 0.05), 0 2px 4px rgba(0, 0, 0, 0.02)",
        lg: "0 8px 24px rgba(0, 0, 0, 0.06), 0 4px 8px rgba(0, 0, 0, 0.03)",
        xl: "0 16px 48px rgba(0, 0, 0, 0.08), 0 8px 16px rgba(0, 0, 0, 0.04)",
        // Glow effects — brand-tinted
        "glow-primary": "0 0 0 1px rgba(60, 130, 246, 0.1), 0 4px 16px rgba(60, 130, 246, 0.12)",
        "glow-success": "0 0 0 1px rgba(16, 185, 129, 0.1), 0 4px 16px rgba(16, 185, 129, 0.12)",
        "glow-accent": "0 0 0 1px rgba(245, 158, 11, 0.1), 0 4px 16px rgba(245, 158, 11, 0.12)",
        // Ring
        ring: "0 0 0 3px rgba(60, 130, 246, 0.15)",
      },
      backgroundImage: {
        // Subtle gradients
        "gradient-radial": "radial-gradient(ellipse at center, var(--tw-gradient-stops))",
        "gradient-hero": "radial-gradient(ellipse 80% 50% at 50% -10%, rgba(60, 130, 246, 0.06) 0%, transparent 60%)",
        "gradient-warm": "radial-gradient(ellipse 60% 40% at 80% 100%, rgba(245, 158, 11, 0.04) 0%, transparent 50%)",
        "gradient-surface": "linear-gradient(180deg, #FAFBFD 0%, #F4F5F7 100%)",
        "gradient-brand": "linear-gradient(135deg, #8B5CF6 0%, #3C82F6 50%, #14B8A6 100%)",
        "gradient-warm-brand": "linear-gradient(135deg, #F97066 0%, #F59E0B 100%)",
        // Dot grid pattern (Framer-like)
        "dot-pattern": "radial-gradient(circle, rgba(0,0,0,0.06) 1px, transparent 1px)",
      },
      backgroundSize: {
        "dot-sm": "24px 24px",
      },
      spacing: {
        4.5: "1.125rem",
        13: "3.25rem",
        15: "3.75rem",
        18: "4.5rem",
        22: "5.5rem",
      },
      transitionTimingFunction: {
        "out-expo": "cubic-bezier(0.16, 1, 0.3, 1)",
        spring: "cubic-bezier(0.34, 1.56, 0.64, 1)",
      },
      keyframes: {
        "fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(12px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "scale-in": {
          "0%": { opacity: "0", transform: "scale(0.95)" },
          "100%": { opacity: "1", transform: "scale(1)" },
        },
        "slide-loader": {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(400%)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-6px)" },
        },
        "pulse-soft": {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.6" },
        },
      },
      animation: {
        "fade-in": "fade-in 0.3s ease-out both",
        "fade-up": "fade-up 0.4s cubic-bezier(0.16, 1, 0.3, 1) both",
        "fade-up-1": "fade-up 0.4s cubic-bezier(0.16, 1, 0.3, 1) 0.08s both",
        "fade-up-2": "fade-up 0.4s cubic-bezier(0.16, 1, 0.3, 1) 0.16s both",
        "fade-up-3": "fade-up 0.4s cubic-bezier(0.16, 1, 0.3, 1) 0.24s both",
        "fade-up-4": "fade-up 0.4s cubic-bezier(0.16, 1, 0.3, 1) 0.32s both",
        "scale-in": "scale-in 0.3s cubic-bezier(0.16, 1, 0.3, 1) both",
        "slide-loader": "slide-loader 1.8s cubic-bezier(0.4, 0, 0.2, 1) infinite",
        float: "float 5s ease-in-out infinite",
        "pulse-soft": "pulse-soft 2.5s ease-in-out infinite",
      },
    },
  },
  plugins: [],
} satisfies Config;
