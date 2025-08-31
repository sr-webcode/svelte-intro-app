<script>
  import TopBar from './TopBar.svelte';
  const { children } = $props();
</script>

<TopBar currentPath={window.location.pathname} />
<div class="container mx-auto mt-10 w-full px-2">
  <div class="max-w-[960px] mx-auto">
    {@render children()}
  </div>
</div>
