<script lang="ts">
  import { QueryClient, QueryClientProvider } from '@tanstack/svelte-query';
  import {
    route,
    Router,
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
    { path: 'blog', component: async () => import('@/pages/Blog/Blog.svelte') },
  ];
</script>

<QueryClientProvider {client}>
  <nav>
    <a href="/" use:route>Home</a>
    <a href="/about" use:route>About</a>
    <a href="/blog" use:route>Blog</a>
  </nav>
  <Router {routes} />
</QueryClientProvider>
