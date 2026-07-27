import type { Config } from "tailwindcss";

/**
 * Paleta ZeroToTech
 * Basada en el recorrido de colores del logo: del coral cálido (el punto de partida)
 * al violeta (la meta). Cada color representa una "parada" del camino.
 */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        // Fondo cálido y neutro, nunca blanco puro ni corporativo.
        canvas: {
          DEFAULT: "#FBFAF7",
          soft: "#F5F2FC",
        },
        ink: {
          DEFAULT: "#2B2440", // texto principal, violeta muy oscuro (no negro puro)
          soft: "#5B5470",
        },
        // Colores "parada del camino", en el orden en que aparecen en el logo.
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
        // Display: redondeada y amigable, como los nodos circulares del logo.
        display: ["'Baloo 2'", "system-ui", "sans-serif"],
        // Texto: moderna, neutra y muy legible.
        body: ["'Plus Jakarta Sans'", "system-ui", "sans-serif"],
      },
      borderRadius: {
        xl: "1.25rem",
        "2xl": "1.75rem",
        pill: "999px",
      },
      boxShadow: {
        soft: "0 8px 30px -12px rgba(43, 36, 64, 0.18)",
      },
      backgroundImage: {
        // El gradiente "de camino" del logo: coral -> rosa -> violeta.
        route: "linear-gradient(90deg, #F4A26E 0%, #EA5FA0 45%, #9B5DE0 100%)",
        "route-cool": "linear-gradient(90deg, #3FBFA8 0%, #5B8DEF 100%)",
      },
    },
  },
  plugins: [],
} satisfies Config;
