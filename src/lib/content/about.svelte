<script>
  import { m } from "$lib/paraglide/messages.js";

  import IconBack from "~icons/material-symbols/arrow-back-rounded";
  let { closeParent = () => {}, about = $bindable(), display } = $props();

  // eslint-disable-next-line no-undef
  const buildDate = __BUILD_DATE__;
</script>

<div id="about" class="about" bind:this={about} class:show={display === true}>
  <button class="icon" title={m.back()} onclick={closeParent}>
    <IconBack />
  </button>
  <h3>{m.legals()}</h3>
  <p>{m.legals_text()}</p>
  <h3>{m.collected_data()}</h3>
  <p>{m.collected_data_text()}</p>
  <h3>{m.about()}</h3>
  <p>
    {m.developed_with()}
    <svg>
      <use href="/icons.svg#svelte" />
    </svg>&nbsp;SvelteKit
    {m.hosted_on()}
    <svg>
      <use href="/icons.svg#netlify" />
    </svg>&nbsp;Netlify.<br />
    <br />
    {m.updated_on({date: new Date(buildDate).toLocaleDateString()})}
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
    transition: 0.4s;
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
    padding: 16px 0 28px 52px;
  }

  .about h3 {
    font-size: 25px;
    padding: 8px 0 0 52px;
  }
</style>
