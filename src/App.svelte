<script>
  import Header from "./content/header.svelte";
  import Bio from "./content/biographie.svelte";
  import Projects from "./content/projects.svelte";
  import Parcours from "./content/parcours.svelte";
  import Skills from "./content/competences.svelte";
  import Footer from "./content/footer.svelte";
  import "@fontsource/ibm-plex-sans/latin.css";
  import "./css/bootstrap.scss"
  import "./css/styles.scss"
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
