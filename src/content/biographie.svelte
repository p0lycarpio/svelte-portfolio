<script>
  const nais = new Date(2001, 2, 22);

  let biographie;
  let age;

  let diff = Date.now() - nais.getTime();
  let date = new Date(diff);
  age = Math.abs(date.getUTCFullYear() - 1970);
</script>

<section class="container-xl animate fadeInUp" id="bio" bind:this={biographie}>
  <div class="row row-padded">
    <div class="col-md-3">
      <h2 class="section-heading">
        Biographie<span class="section-border" />
      </h2>
      <p class=section-subtitle>À propos de moi</p>
    </div>
    <div class="col-md-9 col-md-push-1 mt-md-4">
      <div class="row md-n5">
        <div class="col-md-6 ">
          <p>
            Enchanté, moi c’est Arsène ! Je suis un étudiant, âgé de {age}
            ans, passionné par l’informatique et les nouvelles technologies. J’écoute beaucoup de musique
            et j’aime aussi le cinéma. Je pratique hebdomadairement comme sport la natation.
          </p>
          <p>
            Titulaire d'un bac technologique STI2D, j'ai décidé après ma terminale de m'orienter
            vers une formation polyvalente à savoir MMI. Ce diplôme universitaire technologique
            possède comme cœur de métiers la communication, l'infographie, l'audiovisuel,
            l'intégration web et la gestion d'entreprise.
          </p>
        </div>
        <div class="col-md-6 ">
          <p>
            J'ai choisi de réaliser ma seconde année de DUT en apprentissage au service
            communication du SDIS du Loir-et-Cher. Cette expérience professionnelle et ma seconde
            année à l’IUT m’ont permis de découvrir les domaines qui m’intéressent et ceux vers
            lesquels je souhaite m'orienter. C’est la raison pour laquelle j’ai décidé d’intégrer en
            septembre 2021 la licence professionnelle développeur cloud à Niort. Je suis désormais
            en apprentissage chez CGI Niort.
          </p>
        </div>
      </div>
    </div>
  </div>
</section>
