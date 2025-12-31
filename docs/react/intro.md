---
sidebar_position: 1
title: Introducción a React
description: Conceptos fundamentales de la biblioteca UI más popular.
tags: [react, frontend, javascript, ui]
---

# Introducción a React

**React** es una biblioteca de JavaScript para construir interfaces de usuario. Es declarativa, eficiente y flexible.

## ⚛ Conceptos Centrales

### 1. Componentes
React te permite dividir la interfaz de usuario en piezas independientes y reutilizables llamadas **componentes**. Piensa en ellos como funciones de JavaScript que devuelven elementos HTML (a través de JSX).

```jsx
function Bienvenida(props) {
  return <h1>Hola, {props.nombre}</h1>;
}
```

### 2. JSX (JavaScript XML)
JSX es una extensión de sintaxis para JavaScript. Permite escribir estructuras similares a HTML dentro de JavaScript.

```jsx
const elemento = <div className="clase">Hola Mundo</div>;
```

### 3. Virtual DOM
React crea una representación ligera del DOM en memoria (Virtual DOM). Cuando el estado de un componente cambia:
1.  React actualiza el Virtual DOM.
2.  Compara la versión nueva con la anterior (Diffing).
3.  Calcula la manera más eficiente de actualizar el DOM real del navegador.

### 4. Flujo de Datos Unidireccional
En React, los datos fluyen hacia abajo, de padres a hijos a través de las **props**.

*   **Props (Propiedades):** Datos inmutables que se pasan de un componente padre a uno hijo.
*   **State (Estado):** Datos mutables gestionados dentro del propio componente.

## ¿Por qué React?

*   **Ecosistema Inmenso:** Hay una librería para casi todo (Enrutamiento, Formularios, Estado global).
*   **Reutilización:** Escribe una vez, usa en muchas partes.
*   **Comunidad:** Millones de desarrolladores y soporte de Meta (Facebook).
