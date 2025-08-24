<script lang="ts">
  import { createQuery } from '@tanstack/svelte-query';
  import axios from 'axios';

  type Result = {
    title: string;
    body: string;
  };

  const fetchSampleService = async (): Promise<Result[]> => {
    try {
      const request = axios.get('https://jsonplaceholder.typicode.com/posts');
      const data: Result[] = (await request).data;
      return data;
    } catch (error) {
      console.log(error);
      return [];
    }
  };

  const query = createQuery({
    queryKey: ['posts'],
    queryFn: () => fetchSampleService(),
  });
</script>

{#snippet ResultItem(item: Result, isLastItem: boolean)}
  <li>
    <h4>{item.title}</h4>
    <h5>{item.title}</h5>
    {#if !isLastItem}
      <hr />
    {/if}
  </li>
{/snippet}

<section>
  {#if $query.isLoading}
    <div>loading...</div>
  {:else if $query.isError}
    <div>Error loading data</div>
  {:else if $query.isSuccess}
    <ul>
      {#each $query.data as result, index}
        {@render ResultItem(result, $query.data.length - 1 === index)}
      {/each}
    </ul>
  {/if}
</section>
