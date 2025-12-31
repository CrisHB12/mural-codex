---
sidebar_position: 3
title: Clases y POO
description: Programación Orientada a Objetos en TypeScript.
tags: [typescript, oop, clases]
---

# Clases y POO en TypeScript

TypeScript añade modificadores de acceso y características robustas a las clases de JavaScript, haciéndolas sentir muy familiares para desarrolladores de C# o Java.

## Conceptos Básicos

```typescript
class Animal {
  // Propiedades públicas por defecto
  nombre: string;

  constructor(nombre: string) {
    this.nombre = nombre;
  }

  mover(distancia: number = 0) {
    console.log(`${this.nombre} se movió ${distancia}m.`);
  }
}
```

## Modificadores de Acceso

Controlan quién puede ver o modificar las propiedades.

1.  **public** (default): Accesible desde cualquier lugar.
2.  **private**: Solo accesible dentro de la propia clase. Ni siquiera las subclases pueden verla.
3.  **protected**: Accesible dentro de la clase y sus subclases (herencia).

```typescript
class Persona {
  public nombre: string;
  private claveSecreta: string;
  protected edad: number;

  constructor(nombre: string, clave: string, edad: number) {
    this.nombre = nombre;
    this.claveSecreta = clave;
    this.edad = edad;
  }
}

class Empleado extends Persona {
  mostrarEdad() {
    return this.edad; // OK: es protected
  }
  
  /*
  mostrarClave() {
    return this.claveSecreta; // ERROR: es private
  }
  */
}

const p = new Persona("Ana", "123", 30);
// p.claveSecreta; // ERROR
// p.edad; // ERROR
console.log(p.nombre); // OK
```

## Propiedades de Parámetro (Sintaxis Corta)

TypeScript permite declarar y asignar propiedades directamente en el constructor, ahorrando mucho código repetitivo.

```typescript
class Coche {
  // El uso de 'private' o 'public' aquí crea la propiedad automáticamente
  constructor(
    public marca: string,
    private motor: string
  ) {}
}

const miCoche = new Coche("Toyota", "V8");
console.log(miCoche.marca); // "Toyota"
```

## Interfaces vs Clases

Una clase puede **implementar** una interfaz para asegurar que cumple un contrato.

```typescript
interface Enciende {
  encender(): void;
  apagar(): void;
}

class Lampara implements Enciende {
  encender() {
    console.log("Luz encendida");
  }
  apagar() {
    console.log("Luz apagada");
  }
}
```

## Clases Abstractas

Clases que no pueden instanciarse directamente y sirven como base.

```typescript
abstract class Figura {
  abstract calcularArea(): number; // Debe implementarse
  
  imprimirArea() {
    console.log("El área es " + this.calcularArea());
  }
}

class Circulo extends Figura {
  constructor(public radio: number) { super(); }
  
  calcularArea(): number {
    return Math.PI * this.radio ** 2;
  }
}
```
