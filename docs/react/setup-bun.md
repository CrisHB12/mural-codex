---
sidebar_position: 2
title: Setup con Bun y Vite
description: Creando una aplicación React moderna y ultra rápida.
tags: [react, bun, vite, setup]
---

# Configuración de React con Bun y Vite

La forma antigua de crear apps de React (`create-react-app`) es lenta y obsoleta. Hoy en día, el estándar es usar **Vite**, y combinado con **Bun**, la experiencia es instantánea.

## 🚀 Creación del Proyecto

Abre tu terminal y ejecuta:

```bash
bun create vite mi-app-react --template react-ts
```

Este comando:
1.  Usa `bun create` para generar el proyecto.
2.  Usa la plantilla `react-ts` (React + TypeScript).
3.  Crea la carpeta `mi-app-react`.

### Entrando al proyecto

```bash
cd mi-app-react
bun install
bun run dev
```

¡Listo! Tu servidor de desarrollo debería estar corriendo en milisegundos.

## 📂 Estructura de Archivos

```text
mi-app-react/
├── index.html          # Punto de entrada HTML
├── package.json        # Dependencias y scripts
├── public/             # Archivos estáticos públicos
├── src/
│   ├── App.tsx         # Componente raíz
│   ├── App.css         # Estilos globales de App
│   ├── main.tsx        # Punto de montaje de React en el DOM
│   └── assets/         # Imágenes y fuentes importables
├── tsconfig.json       # Configuración de TypeScript
└── vite.config.ts      # Configuración de Vite
```

## 🛠 Scripts Disponibles

Gracias a Bun, estos scripts se ejecutan súper rápido:

| Comando | Descripción |
| :--- | :--- |
| `bun run dev` | Inicia el servidor de desarrollo con Hot Module Replacement (HMR). |
| `bun run build` | Compila la aplicación para producción en la carpeta `dist`. |
| `bun run preview` | Sirve localmente la versión de producción para probarla. |

## ¿Por qué Vite + Bun?

*   **Vite:** Usa ES Modules nativos en el navegador durante el desarrollo, lo que significa que no hay "bundling" mientras programas (arranque instantáneo).
*   **Bun:** Acelera la instalación de dependencias y la ejecución de los scripts de Node.
