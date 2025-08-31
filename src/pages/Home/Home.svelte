<script>
  import { Button } from 'flowbite-svelte';
  import { goto } from '@mateothegreat/svelte5-router';
  import PageWrapper from '@/components/PageWrapper.svelte';
  import { getRoutePath, CATEGORY_PATH_ID } from '@/routes';

  const handleRedirectCategories = () => {
    goto(getRoutePath(CATEGORY_PATH_ID));
  };
</script>

<PageWrapper>
  <div class="flex flex-col items-center space-y-4">
    <h1 class="text-3xl font-bold">Welcome to QuizTime</h1>
    <p>
      Test your knowledge with our engaging quizzes. Choose from a variety of
      topics and challenge yourself.
    </p>
    <div class="flex flex-col w-full max-w-[448px] space-y-2">
      <Button class="bg-brand-primary hover:bg-blue-500" size="lg"
        >Start Random Quiz</Button
      >
      <Button
        class="bg-brand-secondary hover:bg-gray-200 text-foreground-primary"
        size="lg"
        onclick={handleRedirectCategories}
        >Choose Categories
      </Button>
    </div>
  </div>
</PageWrapper>
