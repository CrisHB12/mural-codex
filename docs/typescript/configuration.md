---
sidebar_position: 2
title: Configuración (tsconfig)
description: Cómo configurar el compilador de TypeScript correctamente.
tags: [typescript, config, tsconfig]
---

# Configuración de TypeScript (`tsconfig.json`)

El archivo `tsconfig.json` es la raíz de cualquier proyecto TypeScript. Define qué archivos compilar y cómo hacerlo.

## Configuración Recomendada (Strict)

Esta es la configuración base que recomendamos para todos los proyectos nuevos (Node o React).

```json title="tsconfig.json"
{
  "compilerOptions": {
    /* Base Options */
    "target": "ES2020",             // Versión de JS a generar
    "module": "ESNext",             // Sistema de módulos (import/export)
    "moduleResolution": "bundler",  // Para usar con Vite/Bun
    "lib": ["DOM", "DOM.Iterable", "ESNext"], // Librerías globales disponibles
    "skipLibCheck": true,           // Salta chequeo de tipos en node_modules (más rápido)

    /* Strict Type-Checking Options */
    "strict": true,                 // Activa todas las reglas estrictas
    "noImplicitAny": true,          // Error si no hay tipo inferido
    "strictNullChecks": true,       // null/undefined no son subtipos de todo
    "strictFunctionTypes": true,
    "noImplicitThis": true,

    /* Additional Checks */
    "noUnusedLocals": true,         // Error si declaras variable y no la usas
    "noUnusedParameters": true,     // Error si declaras argumento y no lo usas
    "noFallthroughCasesInSwitch": true,

    /* Module Resolution Options */
    "baseUrl": ".",
    "paths": {
      "@/*": ["./src/*"]            // Alias para imports limpios
    },
    "resolveJsonModule": true,      // Importar archivos .json
    "isolatedModules": true,        // Requerido para Vite/Bun
    "esModuleInterop": true,        // Compatibilidad con CommonJS
    "forceConsistentCasingInFileNames": true
  },
  "include": ["src"],
  "exclude": ["node_modules", "dist"]
}
```

## Explicación de Opciones Clave

### `strict: true`
Este es el interruptor maestro. Activa una familia de comprobaciones de tipos que garantizan la mayor seguridad.
*   Sin `strict`, TS se comporta un poco como JS, permitiendo muchos valores `null` o `any` implícitos.
*   Con `strict`, te obliga a manejar los casos de error.

### `target: ES2020`
Controla qué tan moderno es el JavaScript generado.
*   Si apuntas a navegadores muy viejos (IE11), usa `ES5`.
*   Para navegadores modernos o Node.js recientes, `ES2020` o `ESNext` produce código más limpio y eficiente (usando async/await nativo, etc.).

### `paths` (Alias)
Permite importar archivos usando rutas absolutas desde la raíz del proyecto en lugar de pesadillas relativas.

*   ❌ `import { Button } from '../../../components/Button'`
*   ✅ `import { Button } from '@/components/Button'`

Recuerda que si usas `paths` en TS, también debes configurarlo en tu empaquetador (Vite/Webpack).
