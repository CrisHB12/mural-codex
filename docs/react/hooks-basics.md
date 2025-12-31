---
sidebar_position: 4
title: Hooks Básicos
description: Gestión de estado y efectos secundarios con Hooks.
tags: [react, hooks, useState, useEffect]
---

# Hooks Básicos

Los **Hooks** son funciones que te permiten "engancharte" al estado y al ciclo de vida de React desde componentes funcionales.

## `useState`: Estado Local

`useState` permite que un componente "recuerde" información.

```tsx
import { useState } from 'react';

function Contador() {
  // [valorActual, funcionParaActualizar] = useState(valorInicial)
  const [cuenta, setCuenta] = useState(0);

  return (
    <div>
      <p>Has hecho click {cuenta} veces</p>
      <button onClick={() => setCuenta(cuenta + 1)}>
        Aumentar
      </button>
    </div>
  );
}
```

:::warning Regla de los Hooks
Nunca llames Hooks dentro de bucles, condiciones o funciones anidadas. Siempre úsalos en el nivel superior de tu función React.
:::

## `useEffect`: Efectos Secundarios

`useEffect` te permite realizar operaciones fuera del flujo de renderizado, como:
*   Peticiones a APIs (Fetch).
*   Suscripciones a eventos.
*   Manipulación directa del DOM.

Recibe dos argumentos:
1.  La función a ejecutar.
2.  Un array de dependencias.

### Casos de Uso Comunes

#### 1. Ejecutar solo al montar (componentDidMount)
Array de dependencias vacío `[]`.

```tsx
useEffect(() => {
  console.log('Compomente montado. Hola!');
  
  // Función de limpieza (opcional) - se ejecuta al desmontar
  return () => console.log('Adiós!');
}, []);
```

#### 2. Ejecutar cuando cambia una variable
Pon la variable en el array.

```tsx
useEffect(() => {
  console.log(`La cuenta cambió a: ${cuenta}`);
}, [cuenta]);
```

#### 3. Fetch de Datos

```tsx
interface Usuario {
  id: number;
  name: string;
}

function ListaUsuarios() {
  const [usuarios, setUsuarios] = useState<Usuario[]>([]);

  useEffect(() => {
    async function fetchUsuarios() {
      const response = await fetch('https://api.example.com/users');
      const data = await response.json();
      setUsuarios(data);
    }

    fetchUsuarios();
  }, []); // [] = Solo 1 vez al cargar

  return (
    <ul>
      {usuarios.map(u => <li key={u.id}>{u.name}</li>)}
    </ul>
  );
}
```
