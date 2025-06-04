<script>
  import { t } from "$lib/translations";
  import { page } from "$app/stores";
  import Wavify from "components/Wavify.svelte";

  let w = $state();
  let h = $state();
  let wave = {
    height: 20,
    amplitude: 40,
    speed: 0.2,
    bones: 2,
    color: "var(--hero-sect)",
  };
</script>

<div bind:offsetWidth={w} bind:offsetHeight={h}>
  <div class="container mx-auto">
    <div class="column text-center animate bounceIn">
      <h1 class="mx-auto">{$page.status}</h1>
      <h2 class="text-4xl">{$page.error.message}</h2>
      <p>{$t("common.error.occurred")}</p>
      <a class="text-blue-600" href="/">{$t("common.error.back")}</a>
    </div>
  </div>
  <div class="animate fadeIn">
    <Wavify options={wave} parentWidth={w} parentHeight={200} />
  </div>
</div>

{#if $page.error}
  <style>
    body {
      background-color: var(--bkg-color);
      font-family: "IBM Plex Sans Variable", sans-serif !important;
      overflow: hidden;
    }
    .container {
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      height: 90vh;
    }

    h1 {
      font-weight: 700;
      font-size: 12em;
      font-variant-numeric: slashed-zero;
      width: fit-content;
      background: url(https://media.giphy.com/media/26BRvIYDe4ILO60Ni/giphy-downsized-large.gif);
      background-color: var(--text-color);
      background-clip: text;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }

    p {
      color: var(--text-color);
      line-height: 3.4;
    }

    p,
    a {
      font-size: 1.2em;
    }
  </style>
{/if}
