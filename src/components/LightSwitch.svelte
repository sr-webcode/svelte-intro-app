<script lang="ts">
  import { Sun, Moon } from '@lucide/svelte';
  import { Switch } from '@skeletonlabs/skeleton-svelte';

  let isDark = $state(false);

  $effect(() => {
    const mode = localStorage.getItem('mode') || 'light';
    isDark = mode === 'dark';
  });

  const onCheckedChange = (event: { checked: boolean }) => {
    const mode = event.checked ? 'dark' : 'light';
    document.documentElement.setAttribute('data-mode', mode);
    localStorage.setItem('mode', mode);
    isDark = event.checked;
  };

  const bertinglabra = $derived(
    `berting mode is: ${isDark ? 'dark' : 'light'}`
  );

</script>

<div>{bertinglabra}</div>
<div class="flex justify-end px-5 py-2">
  <Switch checked={isDark} {onCheckedChange}>
    {#if isDark}
      <Moon />
    {:else}
      <Sun />
    {/if}
  </Switch>
</div>
