<script>
  import { t, locale } from "$lib/translations";
  import { onMount } from "svelte";

  import IconBack from "~icons/material-symbols/arrow-back-rounded";
  let { closeParent = () => {}, about = $bindable(), display } = $props();

  let url = "https://api.github.com/repos/p0lycarpio/svelte-portfolio/branches/main";
  let commitDate = $state();

  onMount(async () => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        commitDate = new Date(data.commit.commit.author.date);
      })
      .catch((error) => {
        console.log(error);
        return [];
      });
  });
</script>

<!-- svelte-ignore a11y_click_events_have_key_events -->
<div id="about" class="about" bind:this={about} class:show={display === true}>
  <button class="icon" title={$t("common.back")} onclick={closeParent}>
    <IconBack />
  </button>
  <h3>{$t("about.legals")}</h3>
  <p>{$t("about.legals.text")}</p>
  <h3>{$t("about.data")}</h3>
  <p>{$t("about.data.text")}</p>
  <h3>{$t("about.title")}</h3>
  <p>
    {$t("about.developedWith")}
    <svg>
      <use href="/icons.svg#svelte" />
    </svg>&nbsp;SvelteKit
    {$t("about.hostedOn")}
    <svg>
      <use href="/icons.svg#netlify" />
    </svg>&nbsp;Netlify.<br />
    {#if commitDate}
      <br />
      {$t("about.updated") + commitDate.toLocaleDateString(locale.get())}
    {/if}
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
