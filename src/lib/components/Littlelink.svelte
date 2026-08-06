<script>
  import { m } from "$lib/paraglide/messages.js";
  import { ParaglideMessage } from "@inlang/paraglide-js-svelte";

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
    twolines = false,
    copy = false,
    children,
  } = $props();
  let copied = $state(false);

  const copyToClipboard = (e) => {
    if (copy) {
      e.preventDefault();
      navigator.clipboard.writeText(href);
      copied = true;
    }
  };
</script>

<a
  href={copy ? "" : href}
  class={background == "#000" ? "button border" : "button"}
  class:twolines={twolines}
  style="background-color: {background}; color: {color}"
  rel="noopener"
  data-sveltekit-replacestate
  onclick={copyToClipboard}>
  <svg class="icon" fill={color}>
    <use href="/icons.svg#{icon}" />
  </svg>
  {#if copied}
    <ParaglideMessage message={m.text_copied} inputs={{ text: href }}>
      {#snippet strong({ children })}
        <strong>{@render children?.()}</strong>
      {/snippet}
    </ParaglideMessage>
  {:else}
    {@render children?.()}
  {/if}
</a>

<style lang="scss">
  .button {
    font-weight: 700;
    font-size: 16pt;
    display: flex;
    gap: 1.2rem;
    padding-left: 2rem;
    height: 58px;
    box-shadow: 0 4px 4px var(--cardShadow);
    transition: all 0.25s;
    align-items: center;
    text-decoration: none;
    border-radius: 8px;
    cursor: pointer;
    margin-bottom: 1rem;

    &:hover {
      box-shadow: 0 4px 10px var(--cardHover);
      transform: translate(0, -3px);
    }

    &:focus {
      outline: #7ab8ff solid 3px;
    }
  }

  .icon {
    vertical-align: middle;
    width: 28px;
    height: 28px;
  }

  .border {
    border-width: 2px;
    border-color: var(--black-white);

    &:focus {
      border: 0;
    }
  }

  @media only screen and (min-width: 40rem) {
    .twolines {
      height: 132px;
    }
  }

  @media only screen and (max-width: 40rem) {
    .button {
      font-size: 14pt;
      padding-left: 1.4rem;
    }
  }
</style>
