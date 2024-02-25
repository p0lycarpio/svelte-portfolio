<script>
  import Header from "content/header.svelte";
  import Bio from "content/biography.svelte";
  import Parcours from "content/career.svelte";
  import Skills from "content/skills.svelte";
  import Social from "content/social.svelte";
  import Footer from "content/footer.svelte";
</script>

<svelte:head>
  <title>Arsène Reymond</title>
  <meta name="author" content="Arsène Reymond" />
  <meta
    name="description"
    content="Portfolio et CV d'Arsène Reymond : développement web, infographie, montage vidéo et mise en page." />
  <meta name="theme-color" />
</svelte:head>

<div class="home">
  <Header />
  <main>
    <Bio />
    <Parcours />
    <Skills />
    <Social />
  </main>
</div>
<Footer />
