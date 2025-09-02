<script lang="ts">
  import PageWrapper from '@/components/PageWrapper.svelte';
  type AboutDetail = {
    title: string;
    description: string;
  };

  const ABOUT_DETAIL_LIST: AboutDetail[] = [
    {
      title: 'Our Mission',
      description:
        'Our mission is to provide an engaging and educational platform for users to test their knowledge across various subjects. We aim to make learning fun and accessible for everyone, fostering a community of curious minds.',
    },
    {
      title: 'Who We Are',
      description:
        'We are a team of passionate educators and developers dedicated to creating innovative learning tools. Our goal is to empower individuals to learn and grow through interactive quizzes and challenges.',
    },
    {
      title: 'Contact Us',
      description:
        "If you have any questions or feedback, please reach out to us at support@quizapp.com. We'd love to hear from you!",
    },
  ];
</script>

{#snippet displayAboutDetail(detail: AboutDetail)}
  <h2 class="font-bold text-lg">
    {detail.title}
  </h2>
  <p>
    {detail.description}
  </p>
{/snippet}

<PageWrapper>
  <h1 class="text-3xl font-bold mb-12">About Us</h1>
  <div class="flex flex-col space-y-4">
    {#each ABOUT_DETAIL_LIST as detail}
      <div class="flex flex-col space-y-2">
        {@render displayAboutDetail(detail)}
      </div>
    {/each}
  </div>
</PageWrapper>
