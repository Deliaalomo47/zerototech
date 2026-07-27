import { useState, useMemo } from "react";
import { BookOpen, Users, Compass } from "lucide-react";
import type { ITCategory } from "@/features/discovery/types";
import { rolesData, glossaryData } from "./data";
import { AreaFilter, RoleCard, GlossaryTerm } from "./components";

/**
 * Sección 4: Guía de Roles + Glosario — rediseño v2.
 *
 * - Header de sección con ícono decorativo y gradiente
 * - Subtítulos de subsección más elegantes
 * - Más espacio entre bloques
 * - Mejor ritmo visual con animaciones
 */
export function GuideSection() {
  const [selectedArea, setSelectedArea] = useState<ITCategory | "all">("all");

  const filteredRoles = useMemo(() => {
    if (selectedArea === "all") return rolesData;
    return rolesData.filter((role) => role.category === selectedArea);
  }, [selectedArea]);

  const filteredTerms = useMemo(() => {
    if (selectedArea === "all") return glossaryData;
    return glossaryData.filter((term) =>
      term.categories.includes(selectedArea)
    );
  }, [selectedArea]);

  return (
    <section
      id="guide-section"
      className="mx-auto max-w-6xl px-5 py-20 sm:px-8 lg:px-10"
      aria-label="Guía de roles y glosario IT"
    >
      {/* Section header */}
      <div className="mb-12 text-center animate-fadeInUp">
        <div className="mb-5 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-route shadow-soft">
          <Compass className="h-7 w-7 text-white" aria-hidden="true" />
        </div>
        <h2 className="mb-3 font-display text-section font-bold text-dark">
          Conocé el mundo IT por dentro
        </h2>
        <p className="mx-auto max-w-xl text-lg text-dark-soft">
          Descubrí qué hace cada rol en la vida real y aprendé la jerga sin
          morir en el intento.
        </p>
      </div>

      {/* Filtro */}
      <div className="mb-12 animate-fadeInUp-delay-1">
        <AreaFilter selected={selectedArea} onChange={setSelectedArea} />
      </div>

      {/* --- Roles --- */}
      <div className="mb-18">
        <div className="mb-8 flex items-center gap-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary/10">
            <Users className="h-5 w-5 text-primary" aria-hidden="true" />
          </div>
          <h3 className="font-display text-xl font-bold text-dark sm:text-2xl">
            Un día en la vida de...
          </h3>
        </div>

        {filteredRoles.length > 0 ? (
          <div className="grid gap-6 sm:grid-cols-2">
            {filteredRoles.map((role) => (
              <RoleCard key={role.id} role={role} />
            ))}
          </div>
        ) : (
          <div className="rounded-card bg-canvas-soft p-10 text-center">
            <p className="text-dark-muted">No hay roles para esta categoría aún.</p>
          </div>
        )}
      </div>

      {/* --- Glosario --- */}
      <div>
        <div className="mb-6 flex items-center gap-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-violet-light">
            <BookOpen className="h-5 w-5 text-violet" aria-hidden="true" />
          </div>
          <div>
            <h3 className="font-display text-xl font-bold text-dark sm:text-2xl">
              Traductor de Jerga IT
            </h3>
            <p className="text-sm text-dark-muted">
              Tocá o pasá el mouse sobre un término para ver su explicación.
            </p>
          </div>
        </div>

        {filteredTerms.length > 0 ? (
          <div className="flex flex-wrap gap-2.5">
            {filteredTerms.map((term) => (
              <GlossaryTerm key={term.id} term={term} />
            ))}
          </div>
        ) : (
          <div className="rounded-card bg-canvas-soft p-10 text-center">
            <p className="text-dark-muted">No hay términos para esta categoría aún.</p>
          </div>
        )}
      </div>
    </section>
  );
}
