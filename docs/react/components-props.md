---
sidebar_position: 3
title: Componentes y Props
description: Los bloques de construcción fundamentales de React.
tags: [react, frontend, componentes, props]
---

# Componentes y Props

En React, todo es un componente. Aprender a diseñarlos y comunicar datos entre ellos es la habilidad más importante.

## Componentes Funcionales

Modern React usa **Funciones** para definir componentes.

```tsx title="src/components/Boton.tsx"
import React from 'react';

// Props tipadas con TypeScript interface
interface BotonProps {
  texto: string;
  onClick: () => void;
  color?: 'azul' | 'rojo'; // Opcional
}

export const Boton = ({ texto, onClick, color = 'azul' }: BotonProps) => {
  return (
    <button 
      className={`btn-${color}`} 
      onClick={onClick}
    >
      {texto}
    </button>
  );
};
```

### Uso del Componente

```tsx title="src/App.tsx"
import { Boton } from './components/Boton';

function App() {
  const manejarClick = () => alert('¡Click!');

  return (
    <div>
      <h1>Mi App</h1>
      <Boton texto="Guardar" onClick={manejarClick} />
      <Boton texto="Borrar" onClick={manejarClick} color="rojo" />
    </div>
  );
}
```

## Props Especials: `children`

A veces quieres que un componente envuelva a otros componentes, como un contenedor o un Layout. Para esto se usa la prop `children`.

```tsx title="src/components/Card.tsx"
import { ReactNode } from 'react';

interface CardProps {
  children: ReactNode;
  titulo: string;
}

export const Card = ({ children, titulo }: CardProps) => {
  return (
    <div className="card">
      <div className="card-header">
        <h3>{titulo}</h3>
      </div>
      <div className="card-body">
        {children}
      </div>
    </div>
  );
};
```

**Uso:**

```tsx
<Card titulo="Usuario">
  <p>Nombre: Juan</p>
  <p>Email: juan@example.com</p>
</Card>
```

## Renderizado Condicional

En React, usas JavaScript estándar para mostrar u ocultar elementos.

### Operador Ternario

```tsx
{estaLogueado ? <Perfil /> : <LoginBoton />}
```

### Operador Lógico && (Short-circuit)

Si la condición es verdadera, renderiza el elemento. Si es falsa, no renderiza nada.

```tsx
{mensajesNoLeidos.length > 0 && (
  <h2>Tienes mensajes nuevos</h2>
)}
```
