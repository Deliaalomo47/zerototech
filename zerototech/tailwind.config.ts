import type { Config } from "tailwindcss";

/**
 * ZeroToTech — Design System v2 (Visual Redesign)
 *
 * Filosofía: Cada pixel debe transmitir cercanía, confianza y calidez.
 * Este config eleva la experiencia visual con:
 * - Sombras tintadas (no grises genéricas)
 * - Gradientes más expresivos y orgánicos
 * - Animaciones escalonadas para ritmo narrativo
 * - Espaciado generoso para respirar
 * - Bordes más suaves y orgánicos
 */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#3C82F6",
          light: "#EBF2FF",
          dark: "#1E40AF",
          50: "#F0F6FF",
        },
        secondary: {
          DEFAULT: "#7FFFD0",
          light: "#E8FFF6",
          dark: "#059669",
        },
        accent: {
          DEFAULT: "#FFD6A5",
          light: "#FFF5E8",
          dark: "#D97706",
        },
        dark: {
          DEFAULT: "#1A1136",
          soft: "#6B6384",
          muted: "#9490A8",
        },
        background: "#FAFBFE",
        surface: "#FFFFFF",
        success: "#34D399",
        warning: "#FBBF24",
        // Warm neutral for subtle layering
        warm: {
          50: "#FEFCFB",
          100: "#FDF8F5",
          200: "#F8F0EB",
        },
        // Canvas layers for depth
        canvas: {
          DEFAULT: "#FAFBFE",
          soft: "#F5F3FA",
          deep: "#EEEAF5",
        },
        // Vibrant route palette
        violet: {
          DEFAULT: "#8B5CF6",
          light: "#EDE9FE",
        },
        coral: {
          DEFAULT: "#F97066",
          light: "#FEE4E2",
        },
        teal: {
          DEFAULT: "#2DD4BF",
          light: "#CCFBF1",
        },
      },
      fontFamily: {
        display: ["'Baloo 2'", "system-ui", "sans-serif"],
        body: ["'Plus Jakarta Sans'", "system-ui", "sans-serif"],
      },
      fontSize: {
        // More expressive type scale
        "hero": ["3.5rem", { lineHeight: "1.1", letterSpacing: "-0.02em" }],
        "hero-sm": ["2.5rem", { lineHeight: "1.15", letterSpacing: "-0.02em" }],
        "section": ["2rem", { lineHeight: "1.2", letterSpacing: "-0.01em" }],
      },
      borderRadius: {
        btn: "0.875rem",
        "btn-lg": "1.125rem",
        card: "1.5rem",
        "card-lg": "2rem",
        xl: "1.25rem",
        "2xl": "1.75rem",
        "3xl": "2rem",
        pill: "999px",
      },
      boxShadow: {
        // Tinted shadows for depth with personality
        soft: "0 4px 24px -6px rgba(60, 130, 246, 0.12), 0 2px 8px -2px rgba(26, 17, 54, 0.06)",
        card: "0 2px 16px -4px rgba(26, 17, 54, 0.06), 0 1px 4px -1px rgba(26, 17, 54, 0.04)",
        "card-hover": "0 20px 48px -12px rgba(60, 130, 246, 0.15), 0 8px 24px -8px rgba(26, 17, 54, 0.08)",
        glow: "0 0 0 4px rgba(60, 130, 246, 0.1), 0 8px 32px -8px rgba(60, 130, 246, 0.2)",
        "glow-success": "0 0 0 4px rgba(52, 211, 153, 0.1), 0 8px 32px -8px rgba(52, 211, 153, 0.2)",
        "inner-soft": "inset 0 2px 8px -2px rgba(26, 17, 54, 0.06)",
        elevated: "0 24px 64px -16px rgba(26, 17, 54, 0.12), 0 8px 24px -8px rgba(60, 130, 246, 0.08)",
      },
      backgroundImage: {
        // Richer, more organic gradients
        "hero-glow": "radial-gradient(ellipse 80% 60% at 50% -20%, rgba(60, 130, 246, 0.08) 0%, transparent 70%)",
        "hero-warm": "radial-gradient(ellipse 60% 50% at 80% 80%, rgba(255, 214, 165, 0.06) 0%, transparent 60%)",
        "surface-shine": "linear-gradient(135deg, rgba(255,255,255,0.9) 0%, rgba(250,251,254,0.6) 100%)",
        "card-shine": "linear-gradient(135deg, rgba(255,255,255,1) 0%, rgba(250,251,254,0.8) 100%)",
        route: "linear-gradient(135deg, #8B5CF6 0%, #3C82F6 50%, #2DD4BF 100%)",
        "route-warm": "linear-gradient(135deg, #F97066 0%, #FBBF24 100%)",
        "route-cool": "linear-gradient(135deg, #3C82F6 0%, #2DD4BF 100%)",
        "section-divider": "linear-gradient(90deg, transparent, rgba(60, 130, 246, 0.1), transparent)",
      },
      spacing: {
        18: "4.5rem",
        22: "5.5rem",
        26: "6.5rem",
        30: "7.5rem",
      },
      transitionDuration: {
        DEFAULT: "200ms",
        300: "300ms",
        400: "400ms",
      },
      transitionTimingFunction: {
        "out-expo": "cubic-bezier(0.19, 1, 0.22, 1)",
        spring: "cubic-bezier(0.34, 1.56, 0.64, 1)",
      },
      keyframes: {
        fadeInUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideLoader: {
          "0%": { transform: "translateX(-100%)" },
          "50%": { transform: "translateX(100%)" },
          "100%": { transform: "translateX(300%)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-8px)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
        scaleIn: {
          "0%": { opacity: "0", transform: "scale(0.92)" },
          "100%": { opacity: "1", transform: "scale(1)" },
        },
        pulseGlow: {
          "0%, 100%": { boxShadow: "0 0 0 0 rgba(60, 130, 246, 0.2)" },
          "50%": { boxShadow: "0 0 0 12px rgba(60, 130, 246, 0)" },
        },
        progressFill: {
          "0%": { width: "0%" },
          "100%": { width: "var(--progress-width)" },
        },
      },
      animation: {
        fadeInUp: "fadeInUp 0.5s cubic-bezier(0.19, 1, 0.22, 1) both",
        "fadeInUp-delay-1": "fadeInUp 0.5s cubic-bezier(0.19, 1, 0.22, 1) 0.1s both",
        "fadeInUp-delay-2": "fadeInUp 0.5s cubic-bezier(0.19, 1, 0.22, 1) 0.2s both",
        "fadeInUp-delay-3": "fadeInUp 0.5s cubic-bezier(0.19, 1, 0.22, 1) 0.3s both",
        fadeIn: "fadeIn 0.4s ease-out both",
        slideLoader: "slideLoader 2s cubic-bezier(0.4, 0, 0.2, 1) infinite",
        float: "float 4s ease-in-out infinite",
        shimmer: "shimmer 2.5s linear infinite",
        scaleIn: "scaleIn 0.4s cubic-bezier(0.19, 1, 0.22, 1) both",
        pulseGlow: "pulseGlow 2.5s ease-in-out infinite",
      },
    },
  },
  plugins: [],
} satisfies Config;
