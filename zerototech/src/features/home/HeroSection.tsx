import { ArrowDown, Sparkles, Heart } from "lucide-react";

/**
 * Hero Section — el momento emocional más importante.
 *
 * Rediseño v2:
 * - Gradientes de fondo más cálidos y orgánicos (no círculos planos)
 * - Animación escalonada para ritmo narrativo
 * - Mayor contraste tipográfico (hero font size)
 * - Botón con efecto glow pulsante que invita a la acción
 * - Más espacio para respirar
 * - Detalles humanos: corazón, mensaje personal
 */
export function HeroSection() {
  const handleScrollToTest = () => {
    const testSection = document.getElementById("discovery-test");
    if (testSection) {
      testSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      className="relative flex min-h-[90vh] flex-col items-center justify-center overflow-hidden px-5 text-center sm:px-8"
      aria-labelledby="hero-title"
    >
      {/* --- Fondo atmosférico --- */}
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        {/* Glow superior principal */}
        <div className="absolute inset-0 bg-hero-glow" />
        {/* Calidez inferior derecha */}
        <div className="absolute inset-0 bg-hero-warm" />
        {/* Orb flotante decorativo */}
        <div className="absolute left-[10%] top-[20%] h-72 w-72 rounded-full bg-violet/5 blur-[100px] animate-float" />
        <div className="absolute right-[15%] bottom-[25%] h-56 w-56 rounded-full bg-secondary/8 blur-[80px] animate-float [animation-delay:2s]" />
      </div>

      {/* --- Contenido principal --- */}
      <div className="relative z-10 mx-auto max-w-3xl">
        {/* Badge introductorio */}
        <div className="mb-8 inline-flex animate-fadeInUp items-center gap-2 rounded-pill border border-primary/15 bg-surface/80 px-5 py-2.5 shadow-card backdrop-blur-sm">
          <Sparkles className="h-4 w-4 text-primary" aria-hidden="true" />
          <span className="text-sm font-semibold text-dark">
            Sin registro, sin compromiso, sin miedo
          </span>
        </div>

        {/* Título principal — tipografía hero */}
        <h1
          id="hero-title"
          className="mb-7 animate-fadeInUp-delay-1 font-display text-hero-sm font-extrabold text-dark sm:text-hero"
        >
          Perdele el miedo a la tecnología,{" "}
          <span className="text-gradient">
            de cero a tu rol IT
          </span>
        </h1>

        {/* Subtítulo empático — con más calidez */}
        <p className="mx-auto mb-12 max-w-xl animate-fadeInUp-delay-2 text-lg leading-relaxed text-dark-soft sm:text-xl">
          Descubrí qué área IT encaja con vos sin tecnicismos ni aburrimiento.
          Solo respuestas honestas y un camino claro para empezar.
        </p>

        {/* CTA principal con efecto glow */}
        <div className="animate-fadeInUp-delay-3">
          <button
            onClick={handleScrollToTest}
            className="group relative inline-flex items-center gap-3 rounded-btn-lg bg-primary px-9 py-4.5 font-display text-base font-bold text-white shadow-soft transition-all duration-300 ease-out-expo hover:-translate-y-1 hover:shadow-glow active:scale-[0.97] sm:text-lg"
            aria-label="Descubrí tu Perfil IT sin Registro — ir a la sección del test"
          >
            {/* Glow ring detrás del botón */}
            <span className="absolute inset-0 rounded-btn-lg bg-primary/20 blur-xl transition-opacity duration-300 group-hover:opacity-100 opacity-0" aria-hidden="true" />
            <span className="relative flex items-center gap-3">
              Descubrí tu Perfil IT
              <ArrowDown
                className="h-5 w-5 transition-transform duration-300 group-hover:translate-y-1"
                aria-hidden="true"
              />
            </span>
          </button>
        </div>

        {/* Texto de refuerzo humanizado */}
        <p className="mt-7 flex animate-fadeInUp-delay-3 items-center justify-center gap-1.5 text-sm text-dark-muted">
          <Heart className="h-3.5 w-3.5 text-coral" aria-hidden="true" />
          <span>Solo 3 minutos. No necesitás saber nada de tecnología.</span>
        </p>
      </div>
    </section>
  );
}
