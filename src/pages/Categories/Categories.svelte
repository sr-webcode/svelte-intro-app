<script lang="ts">
  import PageWrapper from '@/components/PageWrapper.svelte';
  import { createQuery } from '@tanstack/svelte-query';
  import { Spinner } from 'flowbite-svelte';
  import { type Category, fetchCategories } from './service';
  import { CATEGORY_IMAGES, type CategoryImage } from './constant';

  const query = createQuery({
    queryKey: ['categories'],
    queryFn: () => fetchCategories(),
  });

  const getCategoryImage = (id: number): CategoryImage['image'] => {
    const categoryImage = CATEGORY_IMAGES.find(
      (category) => category.id === id
    )?.image;
    if (categoryImage) {
      return categoryImage;
    }
    return CATEGORY_IMAGES[0].image;
  };
</script>

{#snippet categoryTile({ id, name }: Category)}
  <div
    class="w-full max-w-[176px] flex flex-col space-y-2 items-center cursor-pointer group"
  >
    <svelte:component
      this={getCategoryImage(id)}
      class="size-20 group-hover:stroke-brand-primary"
    />
    <h4 class="font-medium text-center group-hover:text-brand-primary">
      {name}
    </h4>
  </div>
{/snippet}

<PageWrapper>
  <h1 class="text-3xl font-bold mb-12">Pick Quiz Category</h1>
  {#if $query.isLoading}
    <Spinner class="fill-brand-primary" />
  {:else if $query.isError}
    <div>Error loading data</div>
  {:else if $query.isSuccess}
    <div class="flex flex-wrap space-x-4 space-y-8">
      {#each $query.data.trivia_categories as category}
        {@render categoryTile(category)}
      {/each}
    </div>
  {/if}
</PageWrapper>
