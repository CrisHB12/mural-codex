---
sidebar_position: 2
title: Instalación y Uso
description: Inicializando shadcn/ui en tu proyecto y añadiendo componentes.
tags: [setup, cli, componentes]
---

# Instalación de shadcn/ui

Una vez que tienes [React instalado](../react/setup-bun) y [Tailwind configurado](../tailwind/installation), estás listo para añadir shadcn/ui.

## 1. Inicialización

Ejecuta el comando `init` para configurar la estructura base:

```bash
bun x shadcn-ui@latest init
```

El CLI te hará varias preguntas. Aquí tienes una configuración recomendada estándar:

```text
Which style would you like to use? › Default
Which color would you like to use as base color? › Slate
Do you want to use CSS variables for colors? › yes
Where is your global CSS file? › src/index.css
Are you using a custom tailwind prefix eg. tw-? (Leave blank if not) ›
Where is your tailwind.config.js located? › tailwind.config.js
Configure the import alias for components: › @/components
Configure the import alias for utils: › @/lib/utils
Are you using React Server Components? › no
Write configuration to components.json. Proceed? › yes
```

### Configuración de Alias (@)
Si usas alias como `@/components`, asegúrate de que tu `tsconfig.json` y `vite.config.ts` los entiendan.

En `vite.config.ts`:

```ts
import path from "path"
import react from "@vitejs/plugin-react"
import { defineConfig } from "vite"

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
})
```

## 2. Añadiendo Componentes

Ahora viene la magia. En lugar de instalar toda la librería, añades solo lo que necesitas.

### Ejemplo: Añadir un Botón

```bash
bun x shadcn-ui@latest add button
```

Esto creará un archivo en `src/components/ui/button.tsx`. Ahora puedes usarlo:

```tsx
import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <div>
      <Button variant="destructive">Click me</Button>
    </div>
  )
}
```

### Ejemplo: Añadir un Acordeón

```bash
bun x shadcn-ui@latest add accordion
```

## Estructura Recomendada

El CLI organiza tus componentes así:

```text
src/
├── components/
│   ├── ui/           # Componentes de shadcn (Button, Input, Sheet)
│   │   ├── button.tsx
│   │   └── input.tsx
│   └── mi-componente.tsx  # Tus propios componentes que usan los de UI
├── lib/
│   └── utils.ts      # Utilidad `cn` para mezclar clases de Tailwind
```

:::info Utilidad `cn`
En `lib/utils.ts` encontrarás una función `cn` (classname). Es vital para combinar clases de Tailwind de forma condicional y segura, usando `clsx` y `tailwind-merge`.
:::
