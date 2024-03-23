<script>
  import { page } from "$app/stores";
  import Wavify from "components/Wavify.svelte";

  let w, h;
  let wave = {
    height: 20,
    amplitude: 40,
    speed: 0.2,
    bones: 2,
    color: "var(--hero-sect)",
  };
</script>

<div bind:offsetWidth={w} bind:offsetHeight={h}>
  <div class="container">
    <div class="column text-center animate bounceIn">
      <h1 class="mx-auto">{$page.status}</h1>
      <h2>{$page.error.message}</h2>
      <p>Il semble qu'une erreur se soit produite...</p>
      <a href="/">Retour sur le site</a>
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
      font-family: "IBM Plex Sans", sans-serif !important;
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
    }

    p,
    a {
      font-size: 1.2em;
    }
  </style>
{/if}
