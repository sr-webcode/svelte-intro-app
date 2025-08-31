<script>
  import TopBar from './TopBar.svelte';
  const { children } = $props();
</script>

<TopBar currentPath={window.location.pathname} />
<div class="container mx-auto">
  {@render children()}
</div>
