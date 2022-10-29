<script>
  import Header from "./content/header.svelte";
  import Bio from "./content/biographie.svelte";
  import Projects from "./content/projects.svelte";
  import Parcours from "./content/parcours.svelte";
  import Skills from "./content/competences.svelte";
  import Footer from "./content/footer.svelte";
  import "@ibm/plex/scss/ibm-plex.scss"
  import "./css/bootstrap.scss";

</script>

<svelte:head>
  <link
    rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.compat.min.css" />

    <link rel="stylesheet" href="css/common.css" />
    <link rel="stylesheet" href="css/general.css" />
    <link rel="stylesheet" href="css/responsive.css" />
  <link rel="stylesheet" href="css/projects.css" />
</svelte:head>

<div class="home" id="#">
  <Header />
  <main id="fh5co-main">
    <Bio />
    <Projects />
    <Parcours />
    <Skills />
  </main>
</div>
<Footer />

<style lang="scss">
  :global {
    @import "css/sections.scss";
  }
  .home {
    background: var(--hero-sect);
  }
</style>
