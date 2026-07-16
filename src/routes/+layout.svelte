<script>
  import { resolve } from "$app/paths";
  import { page } from "$app/state";
  import { locales, localizeHref, baseLocale } from "$lib/paraglide/runtime";

  import "uno.css";
  import "@fontsource-variable/ibm-plex-sans";
  import "@fontsource-variable/mulish";
  import "../lib/css/styles.scss";

  /**
   * @typedef {Object} Props
   * @property {import('svelte').Snippet} [children]
   */
  /** @type {Props} */
  let { children } = $props();

  const baseUrl = "https://polycarpio.fr";
</script>

<svelte:head>
  {#each locales as locale (locale)}
    <link
      rel="alternate"
      hreflang={locale}
      href={localizeHref(baseUrl + page.url.pathname, { locale })} />
  {/each}
  <link
    rel="alternate"
    hreflang="x-default"
    href={localizeHref(baseUrl + page.url.pathname, { baseLocale })} />
</svelte:head>

{@render children?.()}

<div style="display:none">
  {#each locales as locale (locale)}
    <a href={resolve(localizeHref(page.url.pathname, { locale }))}>{locale}</a>
  {/each}
</div>
