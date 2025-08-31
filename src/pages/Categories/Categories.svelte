<script lang="ts" module>
  import PageWrapper from '@/components/PageWrapper.svelte';
  const categoryList = new Array(8).fill(null);
</script>

{#snippet categoryTile()}
  <div class="max-w-[176px] flex flex-col space-y-2">
    <img src="https://placehold.co/176x176" alt="" />
    <h4 class="font-medium">Category</h4>
  </div>
{/snippet}

<PageWrapper>
  <h1 class="text-3xl font-bold mb-5">Pick Quiz Category</h1>
  <div class="flex flex-wrap space-x-2 space-y-8">
    {#each categoryList as category}
      {@render categoryTile()}
    {/each}
  </div>
</PageWrapper>
