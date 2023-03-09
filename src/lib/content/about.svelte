<script>
  import IconBack from "~icons/material-symbols/arrow-back-rounded";
  export let closeParent = () => {};
  export let about, display;
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<div id="about" class="about" bind:this={about} class:show={display === true}>
  <button class="icon" title="Retour" on:click={closeParent}>
    <IconBack />
  </button>
  <h3>Mentions légales</h3>
  <p>
    Ce site est la propriété d'Arsène Reymond (personne physique). Il est destiné à
    un usage privé et il n'entraine aucun revenu. Toute reproduction et/ou réutilisation
    des éléments, textes, parties de code ou autres types de contenu présent sur le site sans
    autorisation est interdite.
  </p>
  <h3>Données collectées</h3>
  <p>
    Le site sur lequel vous vous trouvez ne collecte aucune donnée à votre insu. L'utilisation du
    formulaire de contact envoie directement le contenu par mail à son destinataire. N'envoyez pas
    d'informations sensibles avec.
  </p>
  <h3>Cookies</h3>
  <p>
    Ce site n'émet ou n'utilise pas de cookie. Le stockage de session peut être utilisé pour le
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
  .icon {
    margin-left: 16px;
  }

  p svg {
    width: 16px;
    height: 16px;
    vertical-align: -2.5px;
  }

  .about {
    height: 100%;
    width: 352px;
    visibility: hidden;
    transform: translateX(-352px);
    position: fixed;
    z-index: 6;
    top: 0;
    left: 0;
    background-color: var(--bkg-color);
    transition: .4s;
    padding-right: 26px;
    overflow-y: auto;
    overflow-x: hidden;
  }

  .about::-webkit-scrollbar {
    margin-left: 3px;
    width: 15px;
    height: 12px;
    position: absolute;
  }

  .about::-webkit-scrollbar-thumb {
    background: #808080;
    border-radius: 55px;
    border: 6px solid var(--bkg-color);
  }
  .about::-webkit-scrollbar-thumb:hover {
    border: 4px solid var(--bkg-color);
    }

  .about p {
    padding: 10px 0 28px 52px;
  }

  .about h3 {
    font-size: 25px;
    padding: 8px 0 0 52px;
  }
</style>
