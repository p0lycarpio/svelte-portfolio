<script>
  import Soft from "components/SoftwareIcon.svelte";
</script>

<section class="container-xl animate fadeIn" id="compétences">
  <div class="row row-padded">
    <div class="col-md-3">
      <h2 class="section-heading">
        Compétences<span class="section-border" />
      </h2>
      <p class="section-subtitle">Logiciels et langages maitrisés</p>
    </div>
    <div class="col-md-9 col-md-push-1 mt-md-4">
      <h5>Développement & programmation</h5>
      <div class="d-flex flex-wrap align-items-center mb-4 soft animate bounceInLeft">
        <Soft color="#F7E018" title="JavaScript">js</Soft>
        <Soft color="#4584b6" title="Python">.py</Soft>
        <Soft color="#00add8" title="Golang">go()</Soft>
        <Soft color="#ea2d2e" title="Java">.java</Soft>
        <Soft color="#777BB3" title="PHP">&lt;?&thinsp;php</Soft>
        <Soft color="var(--black-white)" title="Bases de données et systèmes SQL"
          >SQL</Soft>
      </div>

      <h5>Outils et environnements</h5>
      <div class="d-flex flex-wrap align-items-center soft animate bounceInLeft">
        <Soft color="#0078D4" title="Microsoft Azure" svgid="#azure" />
        <Soft color="#1488c6" title="Docker" svgid="#docker" />
        <Soft color="#e6592e" title="Git" svgid="#git" />
        <Soft color="#F5C021" title="Systèmes Linux" svgid="#linux" />
        <Soft color="#70db4f" title="Node.js" svgid="#nodejs" />
      </div>

      <h5>Frameworks web & librairies</h5>
      <div class="d-flex flex-wrap align-items-center soft animate bounceInLeft">
        <Soft color="#61dafb" title="React" svgid="#react" />
        <Soft color="#764abc" title="Redux" svgid="#redux" />
        <Soft color="#4fc08d" title="Vue" svgid="#vuejs" />
        <Soft color="#21759b" title="WordPress" svgid="#wordpress" />
      </div>



      <h5>Création multimédia</h5>
      <div class="d-flex flex-wrap align-items-center soft animate bounceInLeft">
        <Soft color="#31A8FF" title="Adobe Photoshop" svgid="#ps" />
        <Soft color="#FF9A00" title="Adobe Illustrator" svgid="#ai" />
        <Soft color="#FF3366" title="Adobe InDesign" svgid="#id" />
        <Soft color="#9999FF" title="Adobe Premiere Pro" svgid="#pr" />
        <Soft color="#9999FF" title="Adobe After Effects" svgid="#ae" />
      </div>
    </div>
  </div>
</section>

<style>
  h5 {
    margin-bottom: 1.4em;
  }

  .soft:first-child {
    margin-left: 0;
  }
</style>
