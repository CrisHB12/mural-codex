---
sidebar_position: 2
title: Pull Requests (PR)
description: Guía para abrir y revisar Pull Requests efectivos.
tags: [git, pr, colaboración]
---

# Pull Requests (PR)

Los Pull Requests son el corazón de nuestra colaboración. No son solo para verificar código, sino para compartir conocimiento.

## Antes de abrir un PR

1.  **Self-Review:** Revisa tu propio código. No uses el PR para encontrar errores obvios que podrías haber visto tú mismo.
2.  **Tests:** Asegúrate de que `bun run test` y el build `bun run build` pasen localmente.
3.  **Limpia:** Elimina `console.log` olvidados o código comentado innecesario.

## Estructura del PR

Tu PR debe tener una descripción clara. Usa esta plantilla mental:

### 🎯 Qué hace este PR
Explica brevemente qué cambios incluye.
*   "Añade el componente de Botón."
*   "Corrige el bug que impedía hacer logout."

### 📸 Screenshots (Opcional)
Si es un cambio visual, una imagen vale más que mil palabras. Adjunta una captura o un GIF.

### 🧪 Cómo probarlo
Pasos para que el revisor verifique tus cambios.
1.  "Ve a la ruta /login."
2.  "Intenta ingresar sin contraseña."
3.  "Verifica que aparece el error."

## Guía para Revisores (Reviewers)

Cuando revises el código de un compañero:

*   **Sé amable:** Critica el código, nunca a la persona.
*   **Pregunta, no ordenes:** En lugar de "Cambia esto", di "¿Consideraste usar X aquí?".
*   **Bloquea solo si es necesario:**
    *   🔴 *Request Changes*: Si hay bugs críticos o problemas de arquitectura graves.
    *   🟡 *Comment*: Si tienes dudas o sugerencias menores (nits).
    *   🟢 *Approve*: Si el código es seguro para ir a producción, aunque tenga detalles menores de estilo.
