---
sidebar_position: 5
title: Hooks Avanzados y Patrones
description: Context, Reducers y Custom Hooks para aplicaciones complejas.
tags: [react, context, hooks, patrones]
---

# Hooks Avanzados y Patrones

Cuando tu aplicación crece, necesitas herramientas más potentes para manejar la lógica y el estado global.

## `useContext`: Estado Global

El Contexto provee una forma de pasar datos a través del árbol de componentes sin tener que pasar props manualmente en cada nivel (Prop Drilling).

### 1. Crear el Contexto

```tsx title="src/context/ThemeContext.tsx"
import { createContext, useContext, useState, ReactNode } from 'react';

// Definir el tipo del contexto
interface ThemeContextType {
  theme: 'light' | 'dark';
  toggleTheme: () => void;
}

// Crear el contexto
const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

// Crear el Provider
export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');

  const toggleTheme = () => {
    setTheme(prev => prev === 'light' ? 'dark' : 'light');
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

// Hook personalizado para usarlo fácilmente
export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) throw new Error('useTheme debe usarse dentro de ThemeProvider');
  return context;
};
```

### 2. Usar el Contexto

```tsx title="src/App.tsx"
import { ThemeProvider, useTheme } from './context/ThemeContext';

const BotonTema = () => {
  const { theme, toggleTheme } = useTheme();
  return (
    <button onClick={toggleTheme}>
      Tema actual: {theme}
    </button>
  );
};

export default function App() {
  return (
    <ThemeProvider>
      <BotonTema />
    </ThemeProvider>
  );
}
```

## `useReducer`: Lógica de Estado Compleja

Similar a Redux, `useReducer` es preferible a `useState` cuando tienes una lógica de estado compleja que involucra múltiples sub-valores o cuando el próximo estado depende del anterior.

```tsx
type Estado = { contador: number };
type Accion = { type: 'incrementar' } | { type: 'decrementar' };

function reducer(state: Estado, action: Accion): Estado {
  switch (action.type) {
    case 'incrementar':
      return { contador: state.contador + 1 };
    case 'decrementar':
      return { contador: state.contador - 1 };
    default:
      return state;
  }
}

function ContadorComplejo() {
  const [state, dispatch] = useReducer(reducer, { contador: 0 });

  return (
    <>
      Total: {state.contador}
      <button onClick={() => dispatch({ type: 'decrementar' })}>-</button>
      <button onClick={() => dispatch({ type: 'incrementar' })}>+</button>
    </>
  );
}
```

## Custom Hooks (Ganchos Personalizados)

Si tienes lógica que se repite en varios componentes, extráela a tu propio Hook. Un Hook personalizado es una función de JS cuyo nombre empieza con "use" y puede llamar a otros Hooks.

**Ejemplo: `useFetch`**

```tsx title="src/hooks/useFetch.ts"
import { useState, useEffect } from 'react';

export function useFetch<T>(url: string) {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setLoading(true);
    fetch(url)
      .then(res => res.json())
      .then(data => setData(data))
      .catch(err => setError(err.message))
      .finally(() => setLoading(false));
  }, [url]);

  return { data, loading, error };
}
```

**Uso:**

```tsx
const { data, loading } = useFetch<Usuario[]>('/api/users');
```
