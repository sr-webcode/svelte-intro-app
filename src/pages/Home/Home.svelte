<script>
  const imgSrc =
    'https://images.unsplash.com/photo-1463171515643-952cee54d42a?q=80&w=450&h=190&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';
    import { ArrowRight as IconArrowRight } from '@lucide/svelte';
</script>

<div
  class=""
>
  <header>
    <img src={imgSrc} class="w-full" alt="banner" />
  </header>
  <article class="space-y-4 p-4">
    <div>
      <h2 class="h6">Announcements</h2>
    </div>
    <p class="opacity-60">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam
      aspernatur provident eveniet eligendi cumque consequatur tempore sint nisi
      sapiente. Iste beatae laboriosam iure molestias cum expedita architecto
      itaque quae rem.
    </p>
  </article>
  <footer class="flex items-center justify-between gap-4 p-4">
    <small class="opacity-60">By Alex</small>
    <small class="opacity-60">On {new Date().toLocaleDateString()}</small>
  </footer>
</div>


<div class="flex items-center gap-4">
  <button type="button" class="btn-icon preset-filled" title="Go" aria-label="Go"><IconArrowRight size={18} /></button>
  <button type="button" class="btn bg-error-900">Button</button>
  <button type="button" class="btn preset-filled">
    <span>Button</span>
    <IconArrowRight size={18} />
  </button>
</div>