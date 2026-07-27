import { ArrowDown } from "lucide-react";

/**
 * Hero — Noxora final.
 *
 * Emotional. Generous whitespace. "Yo también puedo."
 * No patterns, no noise. Just space and confidence.
 */
export function HeroSection() {
  const handleScroll = () => {
    document.getElementById("discovery-test")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      className="flex min-h-[85vh] flex-col items-center justify-center px-6 text-center"
      aria-labelledby="hero-title"
    >
      <div className="mx-auto max-w-2xl">
        {/* Headline */}
        <h1
          id="hero-title"
          className="mb-6 animate-fade-up font-display text-hero-sm font-extrabold text-indigo sm:text-hero"
        >
          Tu lugar en tecnología{" "}
          <span className="text-blue">ya existe</span>
        </h1>

        {/* Subtitle */}
        <p className="mx-auto mb-12 max-w-md animate-fade-up-1 text-subtitle text-muted">
          Descubrí qué área IT encaja con vos. Sin tecnicismos, sin registro, en 3 minutos.
        </p>

        {/* CTA */}
        <div className="animate-fade-up-2">
          <button
            onClick={handleScroll}
            className="group inline-flex items-center gap-3 rounded-xl bg-indigo px-8 py-4 font-body text-body font-semibold text-white shadow-card transition-all duration-300 ease-elegant hover:-translate-y-0.5 hover:shadow-hover active:scale-[0.98]"
          >
            Empezar mi camino
            <ArrowDown className="h-4 w-4 transition-transform duration-300 group-hover:translate-y-0.5" aria-hidden="true" />
          </button>
        </div>

        {/* Reinforcement */}
        <p className="mt-8 animate-fade-up-3 text-small text-muted/70">
          Gratuito. Sin cuenta. Solo curiosidad.
        </p>
      </div>
    </section>
  );
}
