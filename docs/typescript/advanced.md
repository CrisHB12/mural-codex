---
sidebar_position: 4
title: Genéricos a Fondo
description: Creando componentes reutilizables y flexibles.
tags: [typescript, genericos, avanzado]
---

# Genéricos a Fondo

Los genéricos son la piedra angular de las librerías reutilizables. Permiten definir funciones, clases o interfaces que trabajan con **cualquier tipo**, pero manteniendo la seguridad de tipos.

## El Problema

Imagina una función que devuelve el primer elemento de un array.

```typescript
function primerElemento(arr: any[]): any {
  return arr[0];
}
```

Aquí perdemos el tipado. Si paso un array de números, TS no sabe que el retorno es un número.

## La Solución

```typescript
function primerElemento<T>(arr: T[]): T | undefined {
  return arr[0];
}

const numeros = [1, 2, 3];
const n = primerElemento(numeros); // n es 'number'

const strings = ["a", "b"];
const s = primerElemento(strings); // s es 'string'
```

La `T` es una variable de tipo. Captura el tipo que pasas (ej: `number`) y lo usa para el retorno.

## Restricciones (Constraints)

A veces quieres que el genérico sea flexible, pero no tanto. Puedes restringir `T` para que tenga ciertas propiedades.

```typescript
interface ConLongitud {
  length: number;
}

function imprimirLongitud<T extends ConLongitud>(input: T): void {
  console.log(input.length);
}

imprimirLongitud("hola"); // OK (string tiene length)
imprimirLongitud([1, 2]); // OK (array tiene length)
// imprimirLongitud(100); // ERROR (number no tiene length)
```

## Genéricos en Interfaces

Muy útil para respuestas de API.

```typescript
interface APIResponse<Data, Error = string> {
  data: Data;
  error: Error | null;
  success: boolean;
}

interface User { name: string }

const response: APIResponse<User> = {
  data: { name: "Juan" },
  error: null,
  success: true
};
```

## Utility Types Avanzados

### `Record<K, T>`
Crea un objeto con claves de tipo `K` y valores de tipo `T`. Ideal para mapas/diccionarios.

```typescript
type Roles = 'admin' | 'user' | 'guest';

const permisos: Record<Roles, number> = {
  admin: 100,
  user: 50,
  guest: 10
};
```

### `ReturnType<T>`
Obtiene el tipo de retorno de una función.

```typescript
function crearUsuario() {
  return { id: 1, nombre: "Test" };
}

type Usuario = ReturnType<typeof crearUsuario>; 
// { id: number, nombre: string }
```
