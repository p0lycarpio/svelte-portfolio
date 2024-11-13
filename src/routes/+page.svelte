<script>
  import { t } from "$lib/translations";
  import Header from "content/header.svelte";
  import Bio from "content/biography.svelte";
  import Experiences from "content/experiences.svelte";
  import Skills from "content/skills.svelte";
  import Social from "content/social.svelte";
  import Footer from "content/footer.svelte";
</script>

<svelte:head>
  <meta name="author" content="Arsène Reymond" />
  <meta name="description" content={$t("common.subtitle")} />
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
