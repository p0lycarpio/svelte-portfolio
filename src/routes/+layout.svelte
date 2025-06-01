<script>
  import 'uno.css';
  import "@fontsource/ibm-plex-sans/latin.css";
  /**
   * @typedef {Object} Props
   * @property {import('svelte').Snippet} [children]
   */

  /** @type {Props} */
  let { children } = $props();
</script>

{@render children?.()}

<style lang="scss">
  :global {
    @import "../lib/css/styles.scss";
  }
</style>
