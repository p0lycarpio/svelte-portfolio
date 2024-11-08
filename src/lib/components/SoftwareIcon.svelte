<script>
  let {
    element = $bindable(),
    title,
    color = undefined,
    shadow = $bindable(undefined),
    svgid = undefined,
    children,
  } = $props();

  function setShadow() {
    if (color && !shadow) {
      shadow = color;
    }
    element.style.setProperty("filter", "drop-shadow(0px 4px 10px" + shadow + ")");
  }

  function removeShadow() {
    element.style.removeProperty("filter");
  }
</script>

<div class="d-flex flex-wrap align-items-center soft">
  <!-- svelte-ignore missing_declaration -->
  <!-- svelte-ignore a11y_mouse_events_have_key_events -->
  {#if svgid}
    <svg onmouseover={setShadow} onmouseout={removeShadow} bind:this={element}>
      <title>{title}</title>
      <use href="/icons.svg{svgid}" />
    </svg>
  {:else}
    <span
      style="color:{color}"
      {title}
      onmouseover={setShadow}
      onmouseout={removeShadow}
      bind:this={element}>
      {@render children?.()}
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
