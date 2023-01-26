<script>
  import Header from "./content/header.svelte";
  import Bio from "./content/biography.svelte";
  import Projects from "./content/projects.svelte";
  import Parcours from "./content/career.svelte";
  import Skills from "./content/skills.svelte";
  import Footer from "./content/footer.svelte";
  import "@fontsource/ibm-plex-sans/latin.css";
  import "./css/bootstrap.scss"
</script>

<div class="home">
  <Header />
  <main>
    <Bio />
    <Projects />
    <Parcours />
    <Skills />
  </main>
</div>
<Footer />

<style lang="scss">
  :global {
    @import "css/styles.scss";
  }
</style>