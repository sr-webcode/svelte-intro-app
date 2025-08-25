<script lang="ts">
  import './App.css';
  import { QueryClient, QueryClientProvider } from '@tanstack/svelte-query';
  import {
    route,
    Router,
    Query,
    type RouteConfig,
  } from '@mateothegreat/svelte5-router';
  import { Navigation } from '@skeletonlabs/skeleton-svelte';
  import { HouseIcon, Lamp, Package } from '@lucide/svelte';

  const client = new QueryClient();
  const routes: RouteConfig[] = [
    {
      component: async () => import('@/pages/Home/Home.svelte'),
    },
    {
      path: 'about',
      component: async () => import('@/pages/About/About.svelte'),
    },
    { path: 'blog', component: async () => import('@/pages/Blog/Blog.svelte') },
  ];

  const query = new Query();
</script>

<QueryClientProvider {client}>
  <div
    class="card max-w-100 bg-primary-contrast-50 grid grid-cols-3 gap-5 m-5 p-2"
  >
    <Navigation.Tile id="0" label="Button" onclick={() => query.goto('/')}>
      <HouseIcon />
    </Navigation.Tile>
    <Navigation.Tile id="0" label="About" onclick={() => query.goto('/about')}>
      <Lamp />
    </Navigation.Tile>
    <Navigation.Tile label="Blog" onclick={() => query.goto('/blog')}>
      <Package />
    </Navigation.Tile>
  </div>

  <div class="p-5">
    <Router {routes} />
  </div>
</QueryClientProvider>
