---
sidebar_position: 2
title: Instalación en React
description: Configurando Tailwind CSS en un proyecto Vite + React.
tags: [tailwind, react, vite, setup]
---

# Instalación de Tailwind en React (con Vite)

Sigue estos pasos para integrar Tailwind CSS en tu proyecto de React recién creado con Vite.

## 1. Instalación de Dependencias

Ejecuta el siguiente comando para instalar Tailwind y sus compañeros (PostCSS y Autoprefixer):

```bash
bun add -D tailwindcss postcss autoprefixer
```

## 2. Inicialización

Genera los archivos de configuración `tailwind.config.js` y `postcss.config.js`:

```bash
bun x tailwindcss init -p
```

## 3. Configuración de Rutas

Abre `tailwind.config.js` y configura la propiedad `content`. Esto le dice a Tailwind en qué archivos buscar tus clases para generar solo el CSS necesario (Tree Shaking).

```javascript title="tailwind.config.js"
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

## 4. Directivas CSS

Abe tu archivo CSS principal (normalmente `src/index.css` o `src/App.css`) y reemplaza todo su contenido por las directivas de Tailwind:

```css title="src/index.css"
@tailwind base;
@tailwind components;
@tailwind utilities;
```

## 5. ¡Listo para Usar!

Reinicia tu servidor de desarrollo (`bun run dev`) y empieza a usar clases en tus componentes:

```tsx
export default function App() {
  return (
    <h1 className="text-3xl font-bold underline text-blue-600">
      ¡Hola Tailwind!
    </h1>
  )
}
```

:::tip Extensión de VS Code
Instala la extensión oficial **"Tailwind CSS IntelliSense"** en VS Code para tener autocompletado de clases y previsualización de colores. Es indispensable.
:::
