# ZeroToTech

De cero a tu camino en tecnología. Una experiencia visual y gamificada
para ayudar a personas sin experiencia tech a descubrir qué área de IT
puede gustarles.

Este repo contiene únicamente la **estructura inicial** del proyecto:
sin quiz/test, sin login y sin backend todavía. La idea es que cada
una de esas piezas se sume después como su propia feature, sin tener
que reordenar nada de lo que ya existe.

## Empezar

```bash
npm install
npm run dev
```

Esto levanta el proyecto en `http://localhost:5173`. Vas a ver una
página en blanco: es lo esperado en esta etapa, la estructura está
lista pero todavía no tiene contenido.

## Stack

- **Vite + React + TypeScript**
- **Tailwind CSS** para estilos, con la paleta e identidad de marca
  ya cargadas como tokens (ver `tailwind.config.ts`)
- Sin librería de routing todavía — se suma cuando exista más de una
  pantalla real que navegar.

## Estructura

```
src/
  app/
    providers/     Providers de contexto globales (theme, router, etc.)
  assets/           Imágenes y recursos de marca (logo, etc.)
  components/
    ui/             Componentes reutilizables sin lógica de negocio
                     (Button, Container, ...)
  config/           Configuración y constantes de marca/sitio
  features/         Una carpeta por sección funcional del producto
    home/           Pantalla de bienvenida (pendiente)
    discovery/       Experiencia gamificada de descubrimiento (pendiente)
    results/         Pantalla de resultado (pendiente)
  hooks/            Hooks compartidos entre features
  layouts/          Estructura de página compartida (MainLayout)
  styles/           CSS global y tokens
  types/            Tipos compartidos entre features
  utils/            Funciones utilitarias (ej. cn para clases)
```

### Cómo agregar una sección nueva

1. Crear la carpeta en `src/features/<nombre>`.
2. Construir el contenido de esa pantalla ahí adentro, usando los
   componentes de `components/ui` y envolviendo el contenido en
   `<Container>`.
3. Renderizarla desde `App.tsx` (por ahora sin router; cuando haya
   más de una pantalla, se agrega `react-router` recién en ese
   momento).

No hace falta tocar `layouts/`, `components/ui/` ni la configuración
de Tailwind para sumar una feature nueva — para eso están.

## Identidad visual

- **Tipografía display:** Baloo 2 (títulos, botones) — redondeada y
  cercana, en línea con los nodos circulares del logo.
- **Tipografía de texto:** Plus Jakarta Sans — moderna y muy legible.
- **Paleta:** basada en el recorrido de colores del logo, de coral a
  violeta (`coral`, `pink`, `violet`, `teal`, `blue` en
  `tailwind.config.ts`), sobre un fondo cálido (`canvas`), nunca
  blanco puro ni gris corporativo.
- **Tema:** claro únicamente por ahora.

## Lo que este proyecto todavía no incluye (a propósito)

- Test / quiz de descubrimiento
- Login o autenticación
- Backend o persistencia de datos
- Contenido o datos ficticios de ejemplo
