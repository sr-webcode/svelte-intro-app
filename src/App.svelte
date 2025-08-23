<script lang="ts">
  import Header from './components/Header.svelte';
  import Sidebar from './components/Sidebar.svelte';
  import Navigation from './components/Navigation.svelte';
  import Footer from './components/Footer.svelte';
  import Main from './components/Main.svelte';
  // const sampleHtml = '<h2 style="color: tomato">interpolate shit</h2>';
  const header = 'My soda';
  const subHeader = 'poppin';
</script>

<Header {header} {subHeader} />
<Main>
  do this and that shit
</Main>

<!-- <Sidebar/>
<Navigation/>
<Footer/> -->
