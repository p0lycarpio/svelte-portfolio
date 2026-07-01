<script>
  import { m } from "$lib/paraglide/messages.js";
  import Header from "content/header.svelte";
  import Bio from "content/biography.svelte";
  import Experiences from "content/experiences.svelte";
  import Skills from "content/skills.svelte";
  import Social from "content/social.svelte";
  import Footer from "content/footer.svelte";
</script>

<svelte:head>
  <title>{m.meta_title()}</title>
  <meta name="description" content={m.meta_description()} />
</svelte:head>

<div class="home">
  <Header />
  <main>
    <Bio />
    <Experiences />
    <Skills />
    <Social />
  </main>
</div>
<Footer />
