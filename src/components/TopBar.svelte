<script lang="ts">
  import {
    NavLi,
    NavUl,
    Navbar,
    NavBrand,
    NavHamburger,
  } from 'flowbite-svelte';
  import BrainOutlined from '@lucide/svelte/icons/brain';

  import { fade } from 'svelte/transition';
  import { goto } from '@mateothegreat/svelte5-router';
  import type { MouseEventHandler } from 'svelte/elements';
  import { ROUTE_PATHS, type RouteNavDetail } from '@/routes';

  const { currentPath } = $props<{ currentPath: string }>();

  const handleGoto: MouseEventHandler<HTMLAnchorElement> = (e) => {
    e.preventDefault();
    const current = e.currentTarget;
    const path = current.getAttribute('data-path');
    if (path) {
      goto(path);
    }
  };

  const isCurrentPathActive = (current: string, navPath: string): string => {
    return current === navPath ? 'bg-brand-primary text-white' : '';
  };

  const navBarPaths = ROUTE_PATHS.slice(0, 3);
  const HOME_PATH = navBarPaths[0].path;
</script>

{#snippet navItem({ label, path }: Omit<RouteNavDetail, 'id'>)}
  <NavLi href={path} data-path={path} onclick={handleGoto} class="p-0!">
    <div class={`p-2 rounded-lg ${isCurrentPathActive(currentPath, path)}`}>
      <p class="text-md font-medium">
        {label}
      </p>
    </div>
  </NavLi>
{/snippet}

<Navbar class="py-4.5 border-[#E5E8EB] border-b-1">
  <NavBrand
    href={HOME_PATH}
    data-path={HOME_PATH}
    onclick={handleGoto}
    class="flex space-x-2.5"
  >
    <BrainOutlined class="shrink-0 h-6 w-6" />
    <h1 class="text-xl font-bold">QuizTime</h1>
  </NavBrand>
  <NavHamburger />
  <NavUl
    transition={fade}
    transitionParams={{ duration: 200 }}
    classes={{ ul: 'p-0 md:space-x-[36px] max-md:p-4 max-md:space-y-2' }}
  >
    {#each navBarPaths as { label, path }}
      {@render navItem({
        label,
        path,
      })}
    {/each}
  </NavUl>
</Navbar>
