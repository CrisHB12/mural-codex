---
sidebar_position: 2
title: Guía de Creación de Contenido
---

# Guía Interna: Cómo Generar Documentación

Esta guía está dirigida a los colaboradores del proyecto **Mural Codex**. Aquí se detallan los estándares y pasos necesarios para crear, estructurar y publicar nueva documentación en este repositorio.

## 1. Flujo de Trabajo Rápido

1.  **Crea un archivo** en la carpeta `docs/` (o una subcarpeta apropiada).
2.  **Nombra el archivo** usando `kebab-case` (ejemplo: `mi-nueva-guia.md`).
3.  **Añade el Front Matter** al inicio del archivo.
4.  **Escribe el contenido** en Markdown/MDX.
5.  **Previsualiza** ejecutando `bun start`.

## 2. Estándares de Archivo

### Ubicación

-   Si es una guía general sobre una tecnología, crea una carpeta nueva en `docs/` (ej: `docs/docker/`).
-   Si es una guía suelta, colócala en la carpeta más relevante existente o en la raíz de `docs/` si es muy general.
-   Para mantener el orden, usa un archivo `_category_.json` en carpetas nuevas (ver [Guía de Docusaurus](./docusaurus/writing-docs.md)).

### Nombres de Archivo

Utiliza siempre minúsculas y guiones para separar palabras.
*   ✅ `arquitectura-de-software.md`
*   ❌ `ArquitecturaDeSoftware.md`
*   ❌ `arquitectura de software.md`

## 3. Plantilla Base

Copia y pega este bloque al crear un nuevo archivo para asegurar consistencia:

```markdown
---
sidebar_position: 1
title: Título de la Guía
description: Una breve descripción de lo que cubre esta guía (para SEO y metadatos).
tags: [etiqueta1, etiqueta2]
---

# Título de la Guía

Breve introducción sobre qué trata este documento y a quién va dirigido.

## Prerrequisitos

*   Cosa 1
*   Cosa 2

## Contenido Principal

Explica el concepto o paso a paso aquí.

:::info Nota Importante
Usa admonitions para resaltar información clave.
:::

## Referencias

*   [Enlace a documentación oficial](https://ejemplo.com)
```

## 4. Guía de Estilo

### Idioma
*   El idioma principal de la documentación es **Español**.
*   Usa un tono técnico pero accesible. Evita jerga innecesaria.
*   Mantén los anglicismos técnicos si son el estándar de la industria (ej: "Deploy", "Build", "Commit"), pero prefiere términos en español si son claros ("Despliegue", "Compilación").

### Estructura
*   Usa solo un H1 (`#`) por página.
*   Usa H2 (`##`) para las secciones principales.
*   Usa H3 (`###`) para subsecciones.

### Código
Utiliza bloques de código con el lenguaje especificado para el resaltado de sintaxis:

````markdown
```typescript title="src/ejemplo.ts"
console.log('Hola');
```
````

## 5. Verificación

Antes de enviar tus cambios (Pull Request), asegúrate de:

1.  Que el sitio compila sin errores: `bun run build`.
2.  Que no hay enlaces rotos (Docusaurus suele avisar de esto en el build).
3.  Que las imágenes se cargan correctamente.
