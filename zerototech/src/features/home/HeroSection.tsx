import { ArrowDown, Sparkles } from "lucide-react";

/**
 * Sección Hero — primera impresión de ZeroToTech.
 *
 * Objetivo emocional: que el usuario sienta curiosidad y confianza.
 * Tono: conversacional, motivador, sin tecnicismos.
 *
 * El botón principal hace scroll suave hacia la sección del test
 * (identificada con id="discovery-test").
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
      className="relative flex min-h-[85vh] flex-col items-center justify-center px-4 text-center sm:px-6"
      aria-labelledby="hero-title"
    >
      {/* Decoración sutil de fondo */}
      <div
        className="pointer-events-none absolute inset-0 overflow-hidden"
        aria-hidden="true"
      >
        <div className="absolute -top-24 left-1/2 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-primary/5 blur-3xl" />
        <div className="absolute -bottom-32 right-0 h-[300px] w-[300px] rounded-full bg-secondary/10 blur-3xl" />
        <div className="absolute left-10 top-1/3 h-[200px] w-[200px] rounded-full bg-accent/10 blur-3xl" />
      </div>

      {/* Contenido principal */}
      <div className="relative z-10 mx-auto max-w-3xl">
        {/* Badge introductorio */}
        <div className="mb-6 inline-flex items-center gap-2 rounded-pill bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
          <Sparkles className="h-4 w-4" aria-hidden="true" />
          <span>Sin registro, sin compromiso</span>
        </div>

        {/* Título principal */}
        <h1
          id="hero-title"
          className="mb-6 font-display text-4xl font-extrabold leading-tight text-dark sm:text-5xl lg:text-6xl"
        >
          Perdele el miedo a la tecnología,{" "}
          <span className="bg-gradient-to-r from-primary to-violet bg-clip-text text-transparent">
            de cero a tu rol IT
          </span>
        </h1>

        {/* Subtítulo empático */}
        <p className="mx-auto mb-10 max-w-xl text-lg leading-relaxed text-dark-soft sm:text-xl">
          Descubrí qué área IT encaja con vos sin tecnicismos ni aburrimiento.
          Solo respuestas honestas y un camino claro para empezar.
        </p>

        {/* CTA principal */}
        <button
          onClick={handleScrollToTest}
          className="group inline-flex items-center gap-3 rounded-btn-lg bg-primary px-8 py-4 font-display text-base font-bold text-white shadow-soft transition-all duration-200 hover:-translate-y-0.5 hover:shadow-card-hover active:scale-[0.98] sm:text-lg"
          aria-label="Descubrí tu Perfil IT sin Registro — ir a la sección del test"
        >
          Descubrí tu Perfil IT sin Registro
          <ArrowDown
            className="h-5 w-5 transition-transform duration-200 group-hover:translate-y-0.5"
            aria-hidden="true"
          />
        </button>

        {/* Texto de refuerzo */}
        <p className="mt-5 text-sm text-dark-soft/70">
          Toma solo 3 minutos. No necesitás saber nada de tecnología.
        </p>
      </div>
    </section>
  );
}
