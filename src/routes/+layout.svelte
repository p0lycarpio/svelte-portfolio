<script>
  import 'uno.css';
  import '@fontsource-variable/ibm-plex-sans';
  import "../lib/css/styles.scss"
  /**
   * @typedef {Object} Props
   * @property {import('svelte').Snippet} [children]
   */

  /** @type {Props} */
  let { children } = $props();
</script>

{@render children?.()}
