import { useState, useMemo } from "react";
import { BookOpen, Users } from "lucide-react";
import type { ITCategory } from "@/features/discovery/types";
import { rolesData, glossaryData } from "./data";
import { AreaFilter, RoleCard, GlossaryTerm } from "./components";

/**
 * Sección 4 completa: Guía de Roles + Glosario / Traductor de Jerga.
 *
 * Incluye:
 * - Filtro por áreas IT (pills)
 * - Tarjetas "Un día en la vida de..." filtradas por categoría
 * - Glosario con términos explicados al hover/clic
 *
 * Responsive: grid de 1 col en mobile, 2 cols en desktop.
 * Animaciones: fadeInUp en cada tarjeta y término.
 */
export function GuideSection() {
  const [selectedArea, setSelectedArea] = useState<ITCategory | "all">("all");

  // Filtra roles por categoría seleccionada
  const filteredRoles = useMemo(() => {
    if (selectedArea === "all") return rolesData;
    return rolesData.filter((role) => role.category === selectedArea);
  }, [selectedArea]);

  // Filtra términos del glosario por categoría seleccionada
  const filteredTerms = useMemo(() => {
    if (selectedArea === "all") return glossaryData;
    return glossaryData.filter((term) =>
      term.categories.includes(selectedArea)
    );
  }, [selectedArea]);

  return (
    <section
      id="guide-section"
      className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8"
      aria-label="Guía de roles y glosario IT"
    >
      {/* Header de sección */}
      <div className="mb-10 text-center">
        <h2 className="mb-3 font-display text-3xl font-extrabold text-dark sm:text-4xl">
          Conocé el mundo IT por dentro
        </h2>
        <p className="mx-auto max-w-2xl text-lg text-dark-soft">
          Descubrí qué hace cada rol en la vida real y aprendé la jerga sin
          morir en el intento.
        </p>
      </div>

      {/* Filtro por áreas */}
      <div className="mb-10 flex justify-center">
        <AreaFilter selected={selectedArea} onChange={setSelectedArea} />
      </div>

      {/* --- Roles: "Un día en la vida de..." --- */}
      <div className="mb-16">
        <div className="mb-6 flex items-center gap-2">
          <Users className="h-5 w-5 text-primary" aria-hidden="true" />
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
          <p className="text-center text-dark-soft">
            No hay roles para esta categoría aún.
          </p>
        )}
      </div>

      {/* --- Glosario / Traductor de Jerga --- */}
      <div>
        <div className="mb-6 flex items-center gap-2">
          <BookOpen className="h-5 w-5 text-primary" aria-hidden="true" />
          <h3 className="font-display text-xl font-bold text-dark sm:text-2xl">
            Traductor de Jerga IT
          </h3>
        </div>
        <p className="mb-6 text-sm text-dark-soft">
          Hacé clic o pasá el mouse sobre un término para ver su explicación en
          palabras simples.
        </p>

        {filteredTerms.length > 0 ? (
          <div className="flex flex-wrap gap-3">
            {filteredTerms.map((term) => (
              <GlossaryTerm key={term.id} term={term} />
            ))}
          </div>
        ) : (
          <p className="text-center text-dark-soft">
            No hay términos para esta categoría aún.
          </p>
        )}
      </div>
    </section>
  );
}
