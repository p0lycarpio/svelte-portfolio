<section class="container-xl anmCSS fadeInUp" id="compétences">
  <div class="row row-padded">
    <div class="col-md-3">
      <h2 class="fh5co-section-heading ">
        Compétences<span class="fh5co-border" />
      </h2>
      <p class="info">Logiciels et langages maitrisés</p>
    </div>
    <div class="col-md-9 col-md-push-1 mt-md-4">
      <h5>Développement web & programmation</h5>
      <div class="align-items-center mt-3 mb-4 soft anmCSS bounceInLeft">
        <span style="color:#E54C21" title="HTML5">&lt;/html&gt;</span>
        <span style="color:#0070BA" title="CSS3 & Sass">.css</span>
        <span style="color:#F7E018" title="JavaScript">js</span>
        <span style="color:#777BB3" title="PHP">&lt;?&thinsp;php</span>
        <span style="color: var(--black-white)" title="Bases de données MySQL et requêtes SQL"
          >SQL</span>
      </div>
      <h5>Frameworks & librairies</h5>

      <div class="align-items-center mt-3 mb-4 soft anmCSS bounceInLeft">
        <svg>
          <title>CMS WordPress</title>
          <use href="/icons.svg#wordpress" /></svg>
      </div>

      <h5>Outils et environnements</h5>
      <div class="align-items-center mt-3 mb-4 soft anmCSS bounceInLeft">
        <svg>
          <title>Node.js</title>
          <use href="/icons.svg#nodejs" /></svg>
        <svg>
          <title>Git</title>
          <use href="/icons.svg#git" /></svg>
        <svg>
          <title>Référencement & SEO</title>
          <use href="/icons.svg#googleanalytics" /></svg>
        <svg>
          <title>Systèmes Linux</title>
          <use href="/icons.svg#linux" /></svg>
      </div>
      <h5>Création multimédia</h5>
      <div class="align-items-center mt-3 mb-4 soft anmCSS bounceInLeft">
        <svg>
          <title>Adobe Photoshop</title>
          <use href="/icons.svg#ps" /></svg>
        <svg>
          <title>Adobe Illustrator</title>
          <use href="/icons.svg#ai" /></svg>
        <svg>
          <title>Adobe InDesign</title>
          <use href="/icons.svg#id" /></svg>
        <svg>
          <title>Adobe Premiere Pro</title>
          <use href="/icons.svg#pr" /></svg>
        <svg>
          <title>Adobe After Effects</title>
          <use href="/icons.svg#ae" /></svg>
      </div>
    </div>
  </div>
</section>

<style lang="scss">
  #compétences span {
    font-size: 24px;
    font-weight: bold;
  }

  #compétences svg {
    width: 50px;
  }

  .soft svg {
    height: 50px;
    width: 50px;
    margin: 1em;
    transition: all 0.5s;
  }

  .soft span svg:first-child {
    margin-left: 0 !important;
  }

  .soft span {
    margin: 0.25em 1em;
    cursor: default;
    transition: all 0.5s;
  }

  .soft svg:hover,
  .soft span:hover {
    transform: scale(1.1);
  }
</style>
