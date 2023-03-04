<script>
  export let element;
  export let title;
  export let color = undefined;
  export let shadow = undefined;
  export let svgid = undefined;

  function setShadow() {
    if(color && !shadow) {shadow = color}
    element.style.setProperty("filter", "drop-shadow(0px 4px 10px" + shadow + ")");
  }

  function removeShadow() {
    element.style.removeProperty("filter");
  }
</script>

<div class="d-flex flex-wrap align-items-center soft">
  <!-- svelte-ignore missing-declaration -->
  <!-- svelte-ignore a11y-mouse-events-have-key-events -->
  {#if svgid}
    <svg on:mouseover={setShadow} on:mouseout={removeShadow} bind:this={element}>
      <title>{title}</title>
      <use href="/icons.svg{svgid}" />
    </svg>
  {:else}
    <span
      style="color:{color}"
      {title}
      on:mouseover={setShadow}
      on:mouseout={removeShadow}
      bind:this={element}>
      <slot />
    </span>
  {/if}
</div>

<style>
  svg {
    width: 50px;
    height: 50px;
    width: 50px;
    margin-right: 2em;
    margin-bottom: 2em;
    transition: all 0.5s !important;
  }

  span {
    font-size: 24px;
    font-weight: 600;
    margin: 0 1em 0.6em 0em;
    cursor: default;
    transition: all 0.5s !important;
  }

  svg:hover,
  span:hover {
    transform: scale(1.1);
  }
</style>
