import { ArrowDown, Sparkles, Star } from "lucide-react";

/**
 * Hero — Noxora Holographic.
 *
 * Emotional. "Yo también puedo."
 * Floating orbs, depth, gradient text, premium CTA.
 * Not a landing page. An invitation.
 */
export function HeroSection() {
  const handleScroll = () => {
    document.getElementById("discovery-test")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      className="relative flex min-h-[90vh] flex-col items-center justify-center overflow-hidden px-6 text-center"
      aria-labelledby="hero-title"
    >
      {/* --- Holographic background orbs --- */}
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div className="orb top-[10%] left-[15%] h-[400px] w-[400px] bg-lavender-glow animate-float-slow" />
        <div className="orb top-[30%] right-[10%] h-[300px] w-[300px] bg-mint-glow animate-float" />
        <div className="orb bottom-[15%] left-[40%] h-[350px] w-[350px] bg-peach-glow animate-float-slow [animation-delay:2s]" />
      </div>

      {/* --- Floating decorative cards --- */}
      <div className="pointer-events-none absolute inset-0 hidden lg:block" aria-hidden="true">
        {/* Left floating card */}
        <div className="absolute top-[25%] left-[5%] glass-card px-4 py-3 animate-float-slow opacity-60">
          <div className="flex items-center gap-2">
            <Star className="h-4 w-4 text-peach" />
            <span className="text-caption text-indigo-muted">+25 XP</span>
          </div>
        </div>
        {/* Right floating card */}
        <div className="absolute top-[40%] right-[8%] glass-card px-4 py-3 animate-float opacity-50 [animation-delay:1s]">
          <div className="flex items-center gap-2">
            <Sparkles className="h-4 w-4 text-lavender" />
            <span className="text-caption text-indigo-muted">Tu camino</span>
          </div>
        </div>
      </div>

      {/* --- Content --- */}
      <div className="relative z-10 mx-auto max-w-3xl">
        {/* Badge */}
        <div className="mb-8 inline-flex animate-fade-up items-center gap-2 rounded-full border border-border bg-surface-raised px-5 py-2.5 shadow-soft backdrop-blur-xs">
          <Sparkles className="h-4 w-4 text-mint" aria-hidden="true" />
          <span className="text-small font-medium text-indigo">
            Sin registro. Sin miedo. Solo vos.
          </span>
        </div>

        {/* Headline — emotional */}
        <h1
          id="hero-title"
          className="mb-7 animate-fade-up-1 font-display text-hero-sm font-extrabold text-indigo sm:text-hero"
        >
          Tu lugar en tecnología
          <br />
          <span className="bg-gradient-route bg-clip-text text-transparent bg-[length:200%_200%] animate-gradient-shift">
            ya existe
          </span>
        </h1>

        {/* Subtitle — empathic, not selling */}
        <p className="mx-auto mb-12 max-w-lg animate-fade-up-2 text-subtitle text-muted leading-relaxed">
          No necesitás saber todo hoy.
          Solo necesitás dar el primer paso.
          Nosotros te acompañamos.
        </p>

        {/* CTA — premium button */}
        <div className="animate-fade-up-3">
          <button
            onClick={handleScroll}
            className="group relative inline-flex items-center gap-3 rounded-2xl bg-gradient-indigo px-9 py-5 font-body text-body font-semibold text-white shadow-elevated transition-all duration-300 ease-elegant hover:-translate-y-1 hover:shadow-[0_24px_60px_rgba(44,30,74,0.18)] active:scale-[0.97]"
            aria-label="Empezar el test de descubrimiento"
          >
            {/* Glow behind button */}
            <span className="absolute inset-0 rounded-2xl bg-mint/10 blur-xl opacity-0 transition-opacity duration-300 group-hover:opacity-100" aria-hidden="true" />
            <span className="relative flex items-center gap-3">
              Descubrí tu camino IT
              <ArrowDown className="h-5 w-5 transition-transform duration-300 group-hover:translate-y-1" aria-hidden="true" />
            </span>
          </button>
        </div>

        {/* Reinforcement */}
        <p className="mt-8 animate-fade-up-4 text-small text-muted/70">
          3 minutos. Cero tecnicismos. 100% para vos.
        </p>
      </div>
    </section>
  );
}
