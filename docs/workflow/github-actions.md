---
sidebar_position: 1
title: GitHub Actions (CI/CD)
description: Automatización de pruebas y despliegues con GitHub Actions.
tags: [github, ci, cd, actions]
---

# GitHub Actions

Usamos GitHub Actions para automatizar nuestros flujos de trabajo (CI/CD).

## Flujo Estándar

En la mayoría de nuestros repositorios, encontrarás una carpeta `.github/workflows` con al menos estos archivos:

### 1. `ci.yml` (Integración Continua)
Se ejecuta en cada Pull Request.
*   Instala dependencias (usando Bun).
*   Ejecuta el linter (`bun run lint`).
*   Ejecuta los tests (`bun run test`).
*   Verifica que el proyecto construya (`bun run build`).

Si este workflow falla, **el PR no se puede fusionar**.

**Ejemplo:**
```yaml
name: CI
on: [push, pull_request]

jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: oven-sh/setup-bun@v1
      
      - run: bun install
      - run: bun run test
      - run: bun run build
```

### 2. `deploy.yml` (Despliegue Continuo)
Se ejecuta solo cuando se fusiona código en la rama `main`.
*   Construye el proyecto.
*   Despliega los archivos a la infraestructura (AWS S3, Vercel, o GitHub Pages).

## Secretos

Nunca confirmes contraseñas o claves API en el código.
1.  Ve a `Settings > Secrets and variables > Actions` en el repositorio.
2.  Crea un "New repository secret" (ej: `AWS_ACCESS_KEY`).
3.  Úsalo en tu workflow como `${{ secrets.AWS_ACCESS_KEY }}`.

## Protecciones de Rama

La rama `main` siempre está protegida:
*   Requiere PR antes de merge.
*   Requiere aprobación de al menos 1 revisor.
*   Requiere que los checks de CI pasen (luz verde).
