import { MainLayout } from "@/layouts/MainLayout";

/**
 * Punto de entrada visual de ZeroToTech.
 *
 * A propósito no incluye todavía ninguna sección (ni test, ni login,
 * ni contenido de ejemplo). La estructura queda lista para que las
 * próximas secciones (home, discovery, results, etc.) se agreguen
 * como features independientes en `src/features`, sin tocar esta capa.
 */
function App() {
  return <MainLayout />;
}

export default App;
