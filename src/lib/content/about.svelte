<script>
  let about;
  export let ref;
  export let closeParent = () => {};
</script>

<div id="about" class="about" bind:this={about}>
  <!-- svelte-ignore a11y-click-events-have-key-events -->
  <span {ref} title="Retour" on:click={closeParent}>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1000 1000"
      height="30"
      alt="Retour"
      class="back"
      ><path
        {ref}
        d="M947 549.2H53c-25 0-45.4-20.3-45.4-45.4v-7.6c0-25 20.3-45.4 45.4-45.4h894c25 0 45.4 20.3 45.4 45.4v7.6c0 25.1-20.3 45.4-45.4 45.4z" /><path
        d="M383.7 901.6L15.3 533.3c-17.7-17.7-17.7-46.4 0-64.1l5.4-5.4c17.7-17.7 46.4-17.7 64.1 0l368.4 368.4c17.7 17.7 17.7 46.4 0 64.1l-5.4 5.4c-17.7 17.6-46.4 17.6-64.1-.1z" /><path
        d="M453.2 167.9L84.9 536.3c-17.7 17.7-46.4 17.7-64.1 0l-5.4-5.4c-17.7-17.7-17.7-46.4 0-64.1L383.7 98.4c17.7-17.7 46.4-17.7 64.1 0l5.4 5.4c17.7 17.7 17.7 46.4 0 64.1z" /></svg
    ></span>
  <h3>Mentions légales</h3>
  <p>
    Ce site est l'entière propriété d'Arsène Reymond (personne physique). Ce dernier est destiné à
    un usage entièrement privé et il n'entraine aucun revenu. Toute reproduction et/ou réutilisation
    des éléments, textes, parties de code ou autres types de contenu présent sur le site sans
    autorisation est interdite.
  </p>
  <h3>Données collectées</h3>
  <p>
    Le site sur lequel vous vous trouvez ne collecte aucune donnée à votre insu. L'utilisation du
    formulaire de contact envoie directement le contenu par mail à son destinataire. N'envoyez pas
    d'informations confidentielles ou sensibles avec ce système.
  </p>
  <h3>Cookies</h3>
  <p>
    Ce site n'émet ou n'utilise pas de cookie. Le stockage de session est cependant utilisé pour le
    stockage des paramètres de navigation, comme le choix du thème.
  </p>
  <p>
    Développé avec
    <svg>
      <use href="/icons.svg#svelte" />
    </svg>&nbsp;Svelte et hébergé sur
    <svg>
      <use href="/icons.svg#netlify" />
    </svg>&nbsp;Netlify.
  </p>
  <p>
    <a href="https://github.com/p0lycarpio/svelte-portfolio_Arsene">
      <svg>
        <use href="/icons.svg#github" />
      </svg> Code source</a>
  </p>
</div>

<style lang="scss">
  .back {
    margin-left: 22px;
    cursor: pointer;
    height: auto;
    width: auto;
  }

  p svg {
    width: 16px;
    height: 16px;
    vertical-align: -2.5px;
  }

  .about {
    height: 100%;
    width: 0;
    position: fixed;
    z-index: 6;
    top: 0;
    left: 0;
    background-color: var(--bkg-color);
    overflow-x: hidden;
    transition: .5s;
  }

  .about::-webkit-scrollbar {
    width: 18px;
    height: 12px;
    padding: 2px 2px;
  }

  .about::-webkit-scrollbar-thumb {
    background: #808080;
    border-radius: 55px;
    border: 6px solid var(--bkg-color);
  }

  .about p,
  .about h3 {
    padding: 20px 8px 8px 52px;
  }
</style>
