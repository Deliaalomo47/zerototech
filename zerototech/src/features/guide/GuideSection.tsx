import { useState, useMemo } from "react";
import type { ITCategory } from "@/features/discovery/types";
import { rolesData, glossaryData } from "./data";
import { AreaFilter, RoleCard, GlossaryTerm } from "./components";

/**
 * Guide section — v3.
 *
 * Notion/Linear-inspired: content-first, no decorative icons on headers,
 * tight grid, segmented tab filter, clean separation between subsections.
 */
export function GuideSection() {
  const [selectedArea, setSelectedArea] = useState<ITCategory | "all">("all");

  const filteredRoles = useMemo(() => {
    if (selectedArea === "all") return rolesData;
    return rolesData.filter((role) => role.category === selectedArea);
  }, [selectedArea]);

  const filteredTerms = useMemo(() => {
    if (selectedArea === "all") return glossaryData;
    return glossaryData.filter((term) => term.categories.includes(selectedArea));
  }, [selectedArea]);

  return (
    <section
      id="guide-section"
      className="mx-auto max-w-5xl px-5 py-18 sm:px-6"
      aria-label="Guía de roles y glosario"
    >
      {/* Header */}
      <div className="mb-8 animate-fade-up">
        <h2 className="font-display text-display-md text-neutral-900">
          Conocé el mundo IT
        </h2>
        <p className="mt-2 text-body-md text-neutral-500">
          Qué hace cada rol, qué herramientas usa y cómo hablan entre ellos.
        </p>
      </div>

      {/* Filter */}
      <div className="mb-10 animate-fade-up-1">
        <AreaFilter selected={selectedArea} onChange={setSelectedArea} />
      </div>

      {/* Roles */}
      <div className="mb-15">
        <h3 className="mb-5 text-body-sm font-semibold uppercase tracking-wider text-neutral-400">
          Roles
        </h3>
        {filteredRoles.length > 0 ? (
          <div className="grid gap-4 sm:grid-cols-2">
            {filteredRoles.map((role) => (
              <RoleCard key={role.id} role={role} />
            ))}
          </div>
        ) : (
          <p className="rounded-xl border border-neutral-200 p-8 text-center text-body-sm text-neutral-400">
            No hay roles para esta categoría.
          </p>
        )}
      </div>

      {/* Glossary */}
      <div>
        <h3 className="mb-2 text-body-sm font-semibold uppercase tracking-wider text-neutral-400">
          Glosario
        </h3>
        <p className="mb-5 text-body-sm text-neutral-400">
          Hacé clic en un término para ver su explicación.
        </p>
        {filteredTerms.length > 0 ? (
          <div className="flex flex-wrap gap-2">
            {filteredTerms.map((term) => (
              <GlossaryTerm key={term.id} term={term} />
            ))}
          </div>
        ) : (
          <p className="rounded-xl border border-neutral-200 p-8 text-center text-body-sm text-neutral-400">
            No hay términos para esta categoría.
          </p>
        )}
      </div>
    </section>
  );
}
