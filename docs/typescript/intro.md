---
sidebar_position: 1
title: Guía Completa de TypeScript
description: Desde la instalación hasta conceptos fundamentales.
tags: [typescript, introducción, guía]
---

# Guía Completa de TypeScript

TypeScript es JavaScript con sintaxis para tipos. Es un superconjunto tipado de JavaScript que se compila a JavaScript plano.

## ¿Por qué TypeScript?

JavaScript es un lenguaje de tipado débil y dinámico. Esto significa que puedes asignar un número a una variable y luego asignarle un string sin errores... hasta que el código se ejecuta.

TypeScript añade **tipado estático**. Los errores se atrapan mientras escribes el código (tiempo de compilación), no cuando el usuario lo usa (tiempo de ejecución).

### Ventajas Clave
1.  **Detección temprana de errores:** `Uncaught TypeError: Cannot read property 'x' of undefined` desaparece casi por completo.
2.  **Autocompletado inteligente:** El IDE sabe exactamente qué propiedades tiene un objeto.
3.  **Refactorización segura:** Cambiar el nombre de una función actualiza todas sus referencias automáticamente.

## Tipos Básicos

### Primitivos
Los mismos que en JS.

```typescript
const nombre: string = "Cris";
const edad: number = 25;
const esDesarrollador: boolean = true;
```

### Arrays
Hay dos sintaxis comunes.

```typescript
const numeros: number[] = [1, 2, 3];
const nombres: Array<string> = ["Ana", "Beto"];
```

### Tuplas
Arrays con longitud y tipos fijos. Útil para coordenadas o pares clave-valor.

```typescript
// [string, number]
let usuario: [string, number] = ["admin", 1]; 
```

### Enums
Para definir un conjunto de constantes con nombre.

```typescript
enum Rol {
  Admin = 'ADMIN',
  User = 'USER',
  Guest = 'GUEST'
}

const miRol: Rol = Rol.Admin;
```

### Any, Unknown y Void

*   **any:** Desactiva el chequeo de tipos. **EVITARLO**.
*   **unknown:** Como `any`, pero seguro. No puedes usarlo hasta que verifiques qué es (Type Guard).
*   **void:** Ausencia de retorno en una función.

```typescript
function log(mensaje: string): void {
  console.log(mensaje);
}
```

## Funciones

Puedes tipar argumentos y retornos.

```typescript
function sumar(a: number, b: number): number {
  return a + b;
}

// Argumentos opcionales (?)
function saludar(nombre: string, saludo?: string) {
  return `${saludo || 'Hola'} ${nombre}`;
}
```

## Objetos e Interfaces

Para describir la forma de un objeto.

```typescript
interface Producto {
  id: number;
  nombre: string;
  precio: number;
  descripcion?: string; // Opcional
  readonly sku: string; // Solo lectura
}

const laptop: Producto = {
  id: 1,
  nombre: "MacBook",
  precio: 2000,
  sku: "MAC-2024"
};

// laptop.sku = "OTRO"; // Error: es readonly
```
