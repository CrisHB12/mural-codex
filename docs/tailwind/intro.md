---
sidebar_position: 1
title: Introducción a Tailwind CSS
description: Un framework CSS de primera utilidad para construir diseños personalizados rápidamente.
tags: [css, tailwind, frontend, diseño]
---

# Introducción a Tailwind CSS

**Tailwind CSS** es un framework CSS "utility-first" (prioridad a las utilidades). A diferencia de Bootstrap o Material UI, no te da componentes prefabricados (como botones o tarjetas). En su lugar, te da **clases de bajo nivel** que puedes combinar para construir cualquier diseño.

## 🎨 La Filosofía "Utility-First"

Tradicionalmente, escribes CSS así:

```css
/* style.css */
.chat-notification {
  display: flex;
  max-width: 24rem;
  margin: 0 auto;
  padding: 1.5rem;
  border-radius: 0.5rem;
  background-color: white;
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1);
}
```

Con Tailwind, aplicas clases directamente en tu HTML:

```html
<div class="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-lg flex items-center space-x-4">
  <!-- Contenido -->
</div>
```

### Ventajas

1.  **No inventas nombres de clases:** Adiós a sufrir pensando si llamarlo `.sidebar-wrapper` o `.main-sidebar-container`.
2.  **CSS deja de crecer:** Como reutilizas utilidades, tu archivo CSS final es muy pequeño y no crece linealmente con cada nueva funcionalidad.
3.  **Más seguro:** Al no haber cascada ni efectos globales inesperados, cambiar un estilo en un componente no rompe nada en otro lado.

## Conceptos Clave

### Diseño Responsivo
Tailwind usa prefijos para media queries.

```html
<!-- Ancho completo en móvil, 50% en pantallas medianas (md), 33% en grandes (lg) -->
<div class="w-full md:w-1/2 lg:w-1/3">...</div>
```

### Estados (Hover, Focus)
Usa prefijos para estados.

```html
<!-- Fondo azul, pero azul oscuro al pasar el mouse -->
<button class="bg-blue-500 hover:bg-blue-700">Enviar</button>
```

### Modo Oscuro
Usa el prefijo `dark:`.

```html
<div class="bg-white dark:bg-gray-800">
  <h1 class="text-gray-900 dark:text-white">Hola</h1>
</div>
```
