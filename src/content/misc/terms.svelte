<script>
  let terms;
  export let ref;
  export let closeParent = () => {};
</script>

<div id="terms" class="terms" bind:this={terms}>
  <span {ref} title="Retour" on:click={closeParent}>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 1000" height="30" alt="Retour"
      ><path
        {ref}
        d="M947 549.2H53c-25 0-45.4-20.3-45.4-45.4v-7.6c0-25 20.3-45.4 45.4-45.4h894c25 0 45.4 20.3 45.4 45.4v7.6c0 25.1-20.3 45.4-45.4 45.4z" /><path
        d="M383.7 901.6L15.3 533.3c-17.7-17.7-17.7-46.4 0-64.1l5.4-5.4c17.7-17.7 46.4-17.7 64.1 0l368.4 368.4c17.7 17.7 17.7 46.4 0 64.1l-5.4 5.4c-17.7 17.6-46.4 17.6-64.1-.1z" /><path
        d="M453.2 167.9L84.9 536.3c-17.7 17.7-46.4 17.7-64.1 0l-5.4-5.4c-17.7-17.7-17.7-46.4 0-64.1L383.7 98.4c17.7-17.7 46.4-17.7 64.1 0l5.4 5.4c17.7 17.7 17.7 46.4 0 64.1z" /></svg
    ></span>
  <h3>Mentions légales</h3>
  <p>
    Le site arsene.reymond.free.fr est l’entière propriété d’Arsène Reymond (personne physique). Ce
    site est destiné à un usage entièrement privé, il n’entraine aucun revenu. Toute reproduction
    et/ou réutilisation des œuvres, textes, parties de code ou autres types de contenu présent sur
    le site est strictement interdite. Une infraction de ce type peut être sanctionnée par la loi.
  </p>
  <h3>Données collectées</h3>
  <p>
    Le site sur lequel vous vous trouvez ne collecte aucune donnée à votre insu. L’utilisation du
    formulaire de contact envoie directement le contenu par mail à son destinataire. N’envoyez pas
    d’informations confidentielles ou sensibles avec ce système.
  </p>
  <h3>Cookies</h3>
  <p>
    Plusieurs cookies peuvent être présents sur ce site. Ils peuvent être présents à des fins
    statistiques, de sécurité, ou encore de personnalisation de l’expérience utilisateur. Les
    cookies peuvent être émis par Google Analytics (GA), Free (Pages persos) ou
    arsene.reymond.free.fr.
  </p>
  <p>Handcrafted with ☕ by Arsène</p>
</div>

<style lang="scss">
  svg {
    margin-left: 22px;
    cursor: pointer;
  }

  .terms {
    height: 100%;
    width: 0;
    position: fixed;
    z-index: 6;
    top: 0;
    left: 0;
    background-color: var(--bkg-color);
    overflow-x: hidden;
    transition: 0.5s;
  }

  .terms::-webkit-scrollbar {
    width: 18px;
    height: 12px;
    padding: 2px 2px;
  }

  .terms::-webkit-scrollbar-thumb {
    background: #808080;
    border-radius: 55px;
    border: 6px solid var(--bkg-color);
  }

  .terms p,
  .terms h3 {
    padding: 20px 8px 8px 52px;
  }
</style>
