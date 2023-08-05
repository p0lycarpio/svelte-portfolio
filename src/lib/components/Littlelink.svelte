<script>
  export let icon, href, background, color;
</script>

<a
  {href}
  class={background == "#000" ? "button border" : "button"}
  style="background-color: {background}; color: {color}"
  rel="noopener"
  data-sveltekit-replacestate>
  <svg class="icon" fill={color}>
    <use href="/social.svg#{icon}" />
  </svg>
  <slot />
</a>
<br />

<style>
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

  .icon {
    padding: 0px 8px 3.5px 0px;
    vertical-align: middle;
    width: 28px;
    height: 28px;
  }

  .border {
    outline: 1px solid #fff;
  }
</style>
