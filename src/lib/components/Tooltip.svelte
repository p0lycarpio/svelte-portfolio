<script>
  export let text = false; // prevent blank tooltips
</script>

<span data-tooltip={text}>
  <slot />
</span>

<style lang="scss">
  [data-tooltip] {
    position: relative;
    z-index: 2;
  }
  [data-tooltip]:before,
  [data-tooltip]:after {
    visibility: hidden;
    opacity: 0;
    pointer-events: none;
    transition: opacity 0.4s ease-out;
    transform: translate(-50%, 5px);
  }
  [data-tooltip]:before {
    position: absolute;
    bottom: 100%;
    left: 50%;
    margin-bottom: 5px;
    padding: 8px;
    max-width: 13rem;
    border-radius: 0.375rem;
    background-color: var(--black-white);
    color: var(--white-black);
    content: attr(data-tooltip);
    text-align: center;
    font-size: 14px;
    font-weight: normal;
    line-height: 1.2;
    transition: opacity 0.4s ease-out;
  }
  [data-tooltip]:after {
    position: absolute;
    bottom: 100%;
    left: 50%;
    border-top: 5px solid var(--black-white);
    border-right: 5px solid transparent;
    border-left: 5px solid transparent;
    content: " ";
    font-size: 0;
    line-height: 0;
  }
  [data-tooltip]:hover:before,
  [data-tooltip]:hover:after {
    visibility: visible;
    opacity: 0.9;
    transform: translate(-50%, 0);
  }
  [data-tooltip="false"]:hover:before,
  [data-tooltip="false"]:hover:after {
    visibility: hidden;
    opacity: 0;
  }
</style>
