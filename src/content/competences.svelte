<script>
  import Soft from "../components/SoftwareIcon.svelte";
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
      <h5>Développement web & programmation</h5>
      <div class="d-flex flex-wrap align-items-center mb-4 soft animate bounceInLeft">
        <Soft color="#E54C21" title="HTML5">&lt;/html&gt;</Soft>
        <Soft color="#0070BA" title="CSS3 & Sass">.css</Soft>
        <Soft color="#F7E018" title="JavaScript">js</Soft>
        <Soft color="#777BB3" title="PHP">&lt;?&thinsp;php</Soft>
        <Soft color="var(--black-white)" title="Bases de données MySQL et requêtes SQL"
          >SQL</Soft>
      </div>

      <h5>Frameworks & librairies</h5>
      <div class="d-flex flex-wrap align-items-center soft animate bounceInLeft">
        <Soft color="#77838f" title="WordPress" svgid="#wordpress" />
      </div>

      <h5>Outils et environnements</h5>
      <div class="d-flex flex-wrap align-items-center soft animate bounceInLeft">
        <Soft color="#70db4f" title="Node.js" svgid="#nodejs" />
        <Soft color="#e6592e" title="Git" svgid="#git" />
        <Soft color="#F5C021" title="Référencement & SEO" svgid="#googleanalytics" />
        <Soft color="#F5C021" title="Systèmes Linux" svgid="#linux" />
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
