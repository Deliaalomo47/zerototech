import type { Config } from "tailwindcss";

/**
 * ZeroToTech — Design System
 *
 * Paleta oficial (v1) basada en la guía de marca:
 * - Primary: Azul confianza (#3C82F6)
 * - Secondary: Menta (#7FFFD0) para progreso y elementos positivos
 * - Accent: Peach (#FFD6A5) para logros e insignias
 * - Dark: Índigo oscuro (#2C1E4A) para texto, header y footer
 * - Background: Fondo claro (#F8FAFC)
 * - Surface: Blanco (#FFFFFF) para tarjetas y modales
 * - Success: Verde (#3ECF8E) para acciones completadas
 * - Warning: Dorado (#F4B942) para XP y recompensas
 */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        // --- Paleta oficial del Design System ---
        primary: {
          DEFAULT: "#3C82F6",
          light: "#DBEAFE",
          dark: "#1E40AF",
        },
        secondary: {
          DEFAULT: "#7FFFD0",
          light: "#CCFFF0",
          dark: "#059669",
        },
        accent: {
          DEFAULT: "#FFD6A5",
          light: "#FFF0DB",
          dark: "#D97706",
        },
        dark: {
          DEFAULT: "#2C1E4A",
          soft: "#5B5470",
        },
        background: "#F8FAFC",
        surface: "#FFFFFF",
        success: "#3ECF8E",
        warning: "#F4B942",

        // --- Paleta secundaria (ruta visual del logo) ---
        canvas: {
          DEFAULT: "#F8FAFC",
          soft: "#F5F2FC",
        },
        ink: {
          DEFAULT: "#2C1E4A",
          soft: "#5B5470",
        },
        coral: {
          DEFAULT: "#F4A26E",
          light: "#FBD3AE",
        },
        pink: {
          DEFAULT: "#EA5FA0",
          light: "#F7B8D6",
        },
        violet: {
          DEFAULT: "#9B5DE0",
          light: "#D6BFF5",
        },
        teal: {
          DEFAULT: "#3FBFA8",
          light: "#B7EAE0",
        },
        blue: {
          DEFAULT: "#5B8DEF",
          light: "#C3D6FB",
        },
      },
      fontFamily: {
        display: ["'Baloo 2'", "system-ui", "sans-serif"],
        body: ["'Plus Jakarta Sans'", "system-ui", "sans-serif"],
      },
      borderRadius: {
        btn: "1rem", // 16px — botones
        "btn-lg": "1.25rem", // 20px — botones grandes
        card: "1.25rem", // 20px — tarjetas
        xl: "1.25rem",
        "2xl": "1.75rem",
        pill: "999px",
      },
      boxShadow: {
        soft: "0 8px 30px -12px rgba(43, 36, 64, 0.18)",
        card: "0 4px 20px -8px rgba(43, 36, 64, 0.10)",
        "card-hover": "0 12px 36px -12px rgba(43, 36, 64, 0.20)",
      },
      backgroundImage: {
        route: "linear-gradient(90deg, #F4A26E 0%, #EA5FA0 45%, #9B5DE0 100%)",
        "route-cool": "linear-gradient(90deg, #3FBFA8 0%, #5B8DEF 100%)",
      },
      transitionDuration: {
        DEFAULT: "200ms",
      },
      keyframes: {
        fadeInUp: {
          "0%": { opacity: "0", transform: "translateY(16px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        slideLoader: {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(300%)" },
        },
      },
      animation: {
        fadeInUp: "fadeInUp 0.4s ease-out both",
        slideLoader: "slideLoader 1.5s ease-in-out infinite",
      },
    },
  },
  plugins: [],
} satisfies Config;
