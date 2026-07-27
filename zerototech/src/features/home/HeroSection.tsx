import { ArrowDown } from "lucide-react";

/**
 * Hero — v3.
 *
 * Vercel/Framer-inspired: massive headline with tight tracking,
 * minimal copy, intentional whitespace. Dot pattern background
 * that anchors the section without being distracting.
 * One clear CTA. No badge clutter.
 */
export function HeroSection() {
  const handleScrollToTest = () => {
    const el = document.getElementById("discovery-test");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      className="relative flex min-h-[88vh] flex-col items-center justify-center px-5 text-center"
      aria-labelledby="hero-title"
    >
      {/* Dot grid background */}
      <div
        className="pointer-events-none absolute inset-0 bg-dot-pattern bg-dot-sm opacity-40"
        aria-hidden="true"
      />
      {/* Radial gradient overlay */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-hero" aria-hidden="true" />
      <div className="pointer-events-none absolute inset-0 bg-gradient-warm" aria-hidden="true" />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-[52rem]">
        {/* Headline */}
        <h1
          id="hero-title"
          className="mb-6 animate-fade-up font-display text-display-lg text-neutral-900 sm:text-display-xl"
        >
          Perdele el miedo a la tecnología,{" "}
          <span className="text-gradient">de cero a tu rol IT</span>
        </h1>

        {/* Subtitle — tight, one sentence */}
        <p className="mx-auto mb-10 max-w-lg animate-fade-up-1 text-body-lg text-neutral-500">
          Descubrí qué área IT encaja con vos. Sin tecnicismos, sin registro, en 3 minutos.
        </p>

        {/* CTA */}
        <div className="animate-fade-up-2">
          <button
            onClick={handleScrollToTest}
            className="group inline-flex items-center gap-2.5 rounded-xl bg-neutral-900 px-6 py-3.5 text-body-sm font-semibold text-white shadow-lg transition-all duration-200 ease-out-expo hover:bg-neutral-800 hover:shadow-xl active:scale-[0.98]"
            aria-label="Descubrí tu Perfil IT — ir al test"
          >
            Empezar ahora
            <ArrowDown
              className="h-4 w-4 transition-transform duration-200 group-hover:translate-y-0.5"
              aria-hidden="true"
            />
          </button>
        </div>

        {/* Reinforcement — minimal */}
        <p className="mt-6 animate-fade-up-3 text-caption text-neutral-400">
          Gratuito y sin cuenta. Solo curiosidad.
        </p>
      </div>
    </section>
  );
}
