<script>
  import { resolve } from "$app/paths";
  import { page } from "$app/state";
  import { locales, localizeHref } from "$lib/paraglide/runtime";
  
  import "uno.css";
  import "@fontsource-variable/ibm-plex-sans";
  import "../lib/css/styles.scss";

  /**
   * @typedef {Object} Props
   * @property {import('svelte').Snippet} [children]
   */
  /** @type {Props} */
  let { children } = $props();
</script>

{@render children?.()}

<div style="display:none">
  {#each locales as locale (locale)}
    <a href={resolve(localizeHref(page.url.pathname, { locale }))}>{locale}</a>
  {/each}
</div>
