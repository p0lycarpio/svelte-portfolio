<script>
  const born = new Date(2001, 1, 22);
  const today = new Date()
  
  let biographie;
  
  let age = today.getFullYear() - born.getFullYear();
  let month = today.getMonth() - born.getMonth();
  if (month < 0 || (month === 0 && today.getDate() < born.getDate())) {
      age = age - 1;
  }
</script>

<section class="container-xl animate fadeInUp" id="bio" bind:this={biographie}>
  <div class="row row-padded">
    <div class="col-md-3">
      <h2 class="section-heading">
        Biographie<span class="section-border" />
      </h2>
      <p class="section-subtitle">À propos de moi</p>
    </div>
    <div class="col-md-9 col-md-push-1 mt-md-4">
      <div class="row md-n5">
        <div class="col-md-6 ">
          <p>
            Enchanté, moi c'est Arsène ! Étudiant de {age} ans, je suis passionné par l'informatique
            et les nouvelles technologies. J'écoute beaucoup de musique et j'aime aussi le cinéma. Je
            pratique hebdomadairement la natation.
          </p>
          <p>
            Après un DUT métiers du multimédia et de l'internet, j'ai décidé de poursuivre les
            études dans l'informatique en intégrant en septembre 2021 la licence professionnelle
            développeur cloud à Niort. Cette année réalisée en alternance chez CGI, entreprise de
            services numériques, fût ma seconde année d'alternance (après avoir travaillé au SDIS 41
            pendant mon DUT). Cela m'a permis de découvrir la couche d'échanges d'un SI en y
            développement des webservices avec un <abbr title="Enterprise Service Bus">ESB</abbr>.
          </p>
        </div>
        <div class="col-md-6 ">
          <p>
            À la suite de cette expérience et après l'obtention de mon bac+3, j'ai été admis en
            septembre 2022 dans le master informatique architecte logiciel, dispensé par
            l'université de la Rochelle. Je suis actuellement alternant chez Covéa en tant que
            DataMLOps, dans l'équipe DataScience.
          </p>
        </div>
      </div>
    </div>
  </div>
</section>
