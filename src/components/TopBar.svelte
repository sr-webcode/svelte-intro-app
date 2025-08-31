<script lang="ts">
  import {
    NavLi,
    NavUl,
    Navbar,
    NavBrand,
    NavHamburger,
  } from 'flowbite-svelte';

  import { fade } from 'svelte/transition';
  import { goto } from '@mateothegreat/svelte5-router';
  import type { MouseEventHandler } from 'svelte/elements';

  const { currentPath } = $props<{ currentPath: string }>();

  type NavItem = {
    label: string;
    path: string;
  };

  const ROUTE_PATHS: NavItem[] = [
    {
      label: 'Home',
      path: '/',
    },
    {
      label: 'Categories',
      path: '/categories',
    },
    {
      label: 'About',
      path: '/about',
    },
  ];

  const handleGoto: MouseEventHandler<HTMLAnchorElement> = (e) => {
    e.preventDefault();
    const current = e.currentTarget;
    const path = current.getAttribute('data-path');
    if (path) {
      goto(path);
    }
  };

  const isCurrentPathActive = (current: string, navPath: string): string => {
    return current === navPath ? 'bg-active-link text-white' : '';
  };
</script>

{#snippet navItem({ label, path }: NavItem)}
  <NavLi href={path} data-path={path} onclick={handleGoto} class="p-0!">
    <div class={`p-2 rounded-lg ${isCurrentPathActive(currentPath, path)}`}>
      <p class="text-md font-medium">
        {label}
      </p>
    </div>
  </NavLi>
{/snippet}

<Navbar class="py-4.5 border-[#E5E8EB] border-b-1">
  <NavBrand href="/">
    <h1 class="text-xl font-bold">QuizTime</h1>
  </NavBrand>
  <NavHamburger />
  <NavUl
    transition={fade}
    transitionParams={{ duration: 200 }}
    ulClass="p-0 md:space-x-[36px] max-md:p-4 max-md:space-y-2"
  >
    {#each ROUTE_PATHS as { label, path }}
      {@render navItem({
        label,
        path,
      })}
    {/each}
  </NavUl>
</Navbar>
