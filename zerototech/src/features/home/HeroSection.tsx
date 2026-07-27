import { ArrowDown, Sparkles } from "lucide-react";

/**
 * Hero — Noxora Holographic.
 * New messaging: discovery journey, not a test.
 */
export function HeroSection() {
  const handleScroll = () => {
    document.getElementById("descubri")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="inicio"
      className="relative flex min-h-[90vh] flex-col items-center justify-center overflow-hidden px-6 text-center"
      aria-labelledby="hero-title"
    >
      {/* Holographic orbs */}
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div className="orb top-[10%] left-[15%] h-[400px] w-[400px] bg-lavender-glow animate-float-slow" />
        <div className="orb top-[30%] right-[10%] h-[300px] w-[300px] bg-mint-glow animate-float" />
        <div className="orb bottom-[15%] left-[40%] h-[350px] w-[350px] bg-peach-glow animate-float-slow [animation-delay:2s]" />
      </div>

      <div className="relative z-10 mx-auto max-w-3xl">
        {/* Badge */}
        <div className="mb-8 inline-flex animate-fade-up items-center gap-2 rounded-full border border-border bg-surface-raised px-5 py-2.5 shadow-soft backdrop-blur-xs">
          <Sparkles className="h-4 w-4 text-mint" aria-hidden="true" />
          <span className="text-small font-medium text-indigo">
            Tu viaje en tecnología empieza acá
          </span>
        </div>

        {/* Headline */}
        <h1
          id="hero-title"
          className="mb-7 animate-fade-up-1 font-display text-hero-sm font-extrabold text-indigo sm:text-hero"
        >
          No necesitás saber tecnología para empezar.
          <br />
          <span className="bg-gradient-route bg-clip-text text-transparent bg-[length:200%_200%] animate-gradient-shift">
            Solo necesitás curiosidad.
          </span>
        </h1>

        {/* Subtitle */}
        <p className="mx-auto mb-12 max-w-lg animate-fade-up-2 text-subtitle text-muted leading-relaxed">
          ZeroToTech te acompaña a descubrir tu lugar en el mundo IT.
          Explorá roles, empresas, comunidades y construí tu propio camino.
        </p>

        {/* CTA */}
        <div className="animate-fade-up-3">
          <button
            onClick={handleScroll}
            className="group relative inline-flex items-center gap-3 rounded-2xl bg-gradient-indigo px-9 py-5 font-body text-body font-semibold text-white shadow-elevated transition-all duration-300 ease-elegant hover:-translate-y-1 hover:shadow-[0_24px_60px_rgba(44,30,74,0.18)] active:scale-[0.97]"
          >
            <span className="absolute inset-0 rounded-2xl bg-mint/10 blur-xl opacity-0 transition-opacity duration-300 group-hover:opacity-100" aria-hidden="true" />
            <span className="relative flex items-center gap-3">
              Comenzar mi recorrido
              <ArrowDown className="h-5 w-5 transition-transform duration-300 group-hover:translate-y-1" aria-hidden="true" />
            </span>
          </button>
        </div>

        <p className="mt-8 animate-fade-up-4 text-small text-muted/70">
          Sin registro. Sin evaluación. A tu ritmo.
        </p>
      </div>
    </section>
  );
}
