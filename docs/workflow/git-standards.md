---
sidebar_position: 1
title: Estándares de Git
description: Cómo nombrar commits, ramas y mantener limpio el historial.
tags: [git, workflow, conventional-commits]
---

# Estándares de Git y Commits

Para mantener un historial limpio y comprensible, seguimos estrictamente el estándar de **Conventional Commits**.

## 📝 Formato del Commit

Cada mensaje de commit debe tener la siguiente estructura:

```text
<tipo>(<alcance>): <descripción corta>

[cuerpo opcional]

[pie opcional]
```

### Tipos Permitidos

| Tipo | Descripción | Ejemplo |
| :--- | :--- | :--- |
| **feat** | Una nueva funcionalidad (Feature). | `feat(auth): agregar login con google` |
| **fix** | Corrección de un error (Bug fix). | `fix(nav): reparar enlace roto en móvil` |
| **docs** | Cambios solo en documentación. | `docs(readme): actualizar instrucciones de instalación` |
| **style** | Cambios de formato (espacios, comas) que no afectan el código. | `style(home): formatear con prettier` |
| **refactor** | Cambio de código que no arregla bugs ni añade features. | `refactor(api): simplificar lógica de usuarios` |
| **test** | Añadir o corregir tests. | `test(auth): añadir tests unitarios al login` |
| **chore** | Tareas de mantenimiento, build, dependencias. | `chore(deps): actualizar react a v18.3` |

### Reglas Importantes

1.  **Imperativo:** Usa "agregar" en lugar de "agregado" o "agrega". Como si le dieras una orden a Git.
2.  **Minúsculas:** El título debe estar todo en minúsculas.
3.  **Sin punto final:** No pongas un punto al final de la línea del título.

## 🌿 Estrategia de Ramas (Branches)

Usamos una estrategia simplificada basada en **Trunk Based Development** para iteraciones rápidas, o **Git Flow Light**.

### Ramas Principales

*   `main`: Producción. Código estable. **NUNCA** se hace push directo aquí.
*   `develop` (Opcional): Integración antes de producción.

### Ramas de Tareas

Crea una rama por cada ticket o tarea que realices. Usa el siguiente formato:

`tipo/descripción-corta`

*   `feat/pantalla-login`
*   `fix/error-api-500`
*   `docs/actualizar-guia-bun`

### Flujo Típico

1.  Asegúrate de estar actualizado: `git checkout main && git pull`.
2.  Crea tu rama: `git checkout -b feat/nueva-cosa`.
3.  Haz cambios y commits siguiendo el estándar.
4.  Sube tu rama: `git push -u origin feat/nueva-cosa`.
5.  Abre un Pull Request hacia `main`.
