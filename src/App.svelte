<script lang="ts">
  import './App.css';
  import { QueryClient, QueryClientProvider } from '@tanstack/svelte-query';
  import {
    Router,
    Query,
    type RouteConfig,
  } from '@mateothegreat/svelte5-router';

  const client = new QueryClient();
  const routes: RouteConfig[] = [
    {
      component: async () => import('@/pages/Home/Home.svelte'),
    },
    {
      path: 'about',
      component: async () => import('@/pages/About/About.svelte'),
    },
    {
      path: 'categories',
      component: async () => import('@/pages/Categories/Categories.svelte'),
    },
  ];

  const query = new Query();
</script>

<QueryClientProvider {client}>
  <Router {routes} />
</QueryClientProvider>
