---
sidebar_position: 6
title: Data Fetching (TanStack Query)
description: Gestión de estado asíncrono en React de forma profesional.
tags: [react, query, api, axios]
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Data Fetching con TanStack Query

Aunque `useEffect` funciona, manejar estados de carga, errores, caché y revalidación manualmente es difícil y propenso a errores.

Para cualquier aplicación seria, usamos **[TanStack Query](https://tanstack.com/query/latest)** (anteriormente React Query).

## ¿Por qué?

*   **Caché Automático:** No vuelve a pedir datos si ya los tiene y están frescos.
*   **Revalidación:** Actualiza los datos cuando vuelves a la ventana (focus).
*   **Estados Simplificados:** Te da `isLoading`, `isError`, `data` listos para usar.

## Instalación

```bash
bun add @tanstack/react-query
```

## Configuración

Envuelve tu aplicación en el `QueryClientProvider` (normalmente en `main.tsx`).

```tsx title="src/main.tsx"
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'

// Crear el cliente
const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <App />
    </QueryClientProvider>
  </React.StrictMode>,
)
```

## Uso Básico (`useQuery`)

El hook `useQuery` se usa para **leer** datos (GET).

```tsx title="src/components/ListaUsuarios.tsx"
import { useQuery } from '@tanstack/react-query';

// Función fetcher (puede estar en otro archivo)
const fetchUsers = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  if (!res.ok) throw new Error('Error en la red');
  return res.json();
};

export function ListaUsuarios() {
  const { isPending, error, data } = useQuery({
    queryKey: ['users'], // Clave única para caché
    queryFn: fetchUsers,
  });

  if (isPending) return <div>Cargando...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <ul>
      {data.map((user: any) => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  );
}
```

## Mutaciones (`useMutation`)

El hook `useMutation` se usa para **crear/actualizar/borrar** datos (POST, PUT, DELETE).

```tsx
import { useMutation, useQueryClient } from '@tanstack/react-query';

export function NuevoUsuario() {
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: (newUser: { name: string }) => {
      // Simulación de POST
      return fetch('https://jsonplaceholder.typicode.com/users', {
        method: 'POST',
        body: JSON.stringify(newUser),
      });
    },
    onSuccess: () => {
      // Invalidar la caché para refrescar la lista
      queryClient.invalidateQueries({ queryKey: ['users'] });
      alert('¡Usuario creado!');
    },
  });

  return (
    <button 
      onClick={() => mutation.mutate({ name: 'Nuevo Usuario' })}
      disabled={mutation.isPending}
    >
      {mutation.isPending ? 'Creando...' : 'Crear Usuario'}
    </button>
  );
}
```
