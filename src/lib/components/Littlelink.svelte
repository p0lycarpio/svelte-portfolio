<script>
  import { t } from "$lib/translations";

  /**
   * @typedef {Object} Props
   * @property {any} icon
   * @property {any} href
   * @property {any} background
   * @property {any} color
   * @property {boolean} [big]
   * @property {boolean} [twolines]
   * @property {boolean} [copy]
   * @property {import('svelte').Snippet} [children]
   */

  /** @type {Props} */
  let {
    icon,
    href,
    background,
    color,
    big = false,
    twolines = false,
    copy = false,
    children,
  } = $props();
  let message = $state(null);

  const copyToClipboard = (e) => {
    if (copy) {
      e.preventDefault();
      navigator.clipboard.writeText(href);
      message = $t("common.social.copied", { text: href });
    }
  };
</script>

<a
  href={copy ? "" : href}
  class={background == "#000" ? "button border" : "button"}
  class:biglink={big}
  class:twolines
  style="background-color: {background}; color: {color}"
  rel="noopener"
  data-sveltekit-replacestate
  onclick={copyToClipboard}>
  <svg class="icon" fill={color}>
    <use href="/social.svg#{icon}" />
  </svg>
  {#if message}
    {@html message}
  {:else}
    {@render children?.()}
  {/if}
</a>
<br />

<style lang="scss">
  .button {
    display: inline-block;
    text-decoration: none;
    height: 48px;
    text-align: center;
    vertical-align: middle;
    font-size: 18px;
    width: 100%;
    max-width: 324px;
    font-weight: 700;
    line-height: 20px;
    padding: 12px;
    letter-spacing: 0.1px;
    white-space: wrap;
    outline: none;
    border-radius: 8px;
    cursor: pointer;
    font-family: sans-serif !important;
    margin-bottom: 1rem;
  }

  .button:focus {
    border-color: #888;
    outline: #7ab8ff solid 3px;
  }

  .button:hover,
  .button:focus {
    color: #fff;
    filter: brightness(90%);
  }

  .biglink {
    width: 100%;
    max-width: 100%;
    font-family: unset !important;
    font-weight: 400;
    font-size: 16pt;
    text-align: left;
    padding-left: 2rem;
    height: 58px;
    box-shadow: 0 4px 4px var(--cardShadow);
    transition: all 0.25s;
    border-width: 2px !important;

    & .icon {
      width: 38px;
      height: 38px;
      margin-right: 4px;
    }
  }

  .icon {
    padding: 0px 8px 3.5px 0px;
    vertical-align: middle;
    width: 28px;
    height: 28px;
  }

  .border {
    border-width: 1px;
    border-color: var(--black-white) !important;
  }

  @media only screen and (min-width: 992px), (min-width: 576px) {
    .twolines {
      height: 132px;
      line-height: 7rem;
    }
  }

  @media only screen and (max-width: 576px) {
    .biglink {
      font-size: 14pt;
      font-weight: normal;
      line-height: 2.2rem;

      & .icon {
        width: 32px;
        height: 32px;
      }
    }
  }
</style>
