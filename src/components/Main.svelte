<script lang="ts">
  let count: number = $state(0);
  const { children } = $props();
  let firstName: string = $state('');
  let secondName: string = $state('');
  const increment = () => (count += 1);
  const decrement = () => (count -= 1);
  const reset = () => (count = 0);
  const carNames: string[] = ['Toyota', 'Honda<', 'Ford', 'BMW', 'Tesla'];
  const movies: { title: string; year: number }[] = [
    { title: 'Inception', year: 2010 },
    { title: 'The Matrix', year: 1999 },
    { title: 'Interstellar', year: 2014 },
    { title: 'Parasite', year: 2019 },
    { title: 'The Godfather', year: 1972 },
  ];

  const fullName = $derived(`${firstName} ${secondName}`);
</script>

<main>
  <!-- <h4>{count}</h4>
    <button onclick={increment}>increment</button>
    <button onclick={decrement}>decrement</button>
    <button onclick={reset}>reset</button> -->
  <br />
  <h4>the name is: {fullName}</h4>
  <input type="text" placeholder="Enter First Name" bind:value={firstName} />
  <input type="text" placeholder="Enter Second Name" bind:value={secondName} />
  {@render children()}

  <!-- <ul>
    {#each carNames as carName}
          <li>{@html carName}</li>
    {/each}
  </ul>
   -->

  <ul>
    {#each movies as { title, year }}
      {#if title.toLowerCase().includes('the')}
        <li>Title: LOL ITS THE!!! {title} from year of {year}</li>
      {:else}
      <li>Title: {title} from year of {year}</li>
      {/if}
    {/each}
  </ul>
</main>
