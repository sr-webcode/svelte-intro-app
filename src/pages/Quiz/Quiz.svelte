<script lang="ts">
  import PageWrapper from '@/components/PageWrapper.svelte';
  import { fetchQuestionsRandom } from './services';
  import { createQuery } from '@tanstack/svelte-query';

  const query = createQuery({
    queryKey: ['quiz'],
    queryFn: () => fetchQuestionsRandom(),
  });

  $: isLoading = $query.isLoading;
</script>

<PageWrapper>{isLoading ? 'yes' : 'no'}</PageWrapper>
