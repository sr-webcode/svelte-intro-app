<script lang="ts">
  import { QueryClient, QueryClientProvider } from '@tanstack/svelte-query';
  import Effects from './components/Effects.svelte';
  const client = new QueryClient();
</script>

<QueryClientProvider {client}>
  <Effects/>
</QueryClientProvider>
