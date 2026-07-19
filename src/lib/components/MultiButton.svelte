<script>
  import { m } from "$lib/paraglide/messages.js";
  import { localizeHref } from "$lib/paraglide/runtime.js";
  import IconFile from "~icons/ic/outline-insert-drive-file";
  import IconGithub from "~icons/simple-icons/github";

  let cv = $state(false);
  let link = $state(false);
</script>

<div class="multi-button text-center">
  <a
    class="cv rounded-none rounded-l-md"
    class:active={cv}
    href={localizeHref("CV_Arsène_Reymond.pdf")}
    data-sveltekit-reload
    onmouseenter={() => (cv = true)}
    onmouseleave={() => (cv = false)}
    onfocus={() => (cv = true)}
    onblur={() => (cv = false)}>
    <i class="icon-wrapper">
      <IconFile />
    </i>
    {m.cv()}
  </a>

  <a
    class="rounded-none rounded-r-md"
    class:active={link}
    href="https://github.com/p0lycarpio"
    target="_blank"
    onmouseenter={() => (link = true)}
    onmouseleave={() => (link = false)}
    onfocus={() => (link = true)}
    onblur={() => (link = false)}>
    <i class="icon-wrapper gh">
      <IconGithub />
    </i>
    GitHub
  </a>
</div>

<style lang="scss">
  :root {
    --border-size: 0.125rem;
    --duration: 350ms;
    --ease: cubic-bezier(0.215, 0.61, 0.355, 1);
    --shadow: rgba(0, 0, 0, 0.1);
    --space: 1rem;
  }

  .multi-button {
    display: flex;
    margin: 0 auto;
    margin-bottom: 60px;
    max-width: 500px;
  }

  .multi-button > a {
    flex: 1 1;
    cursor: pointer;
    position: relative;
    padding: 6px 10px;
    border: var(--border-size) solid var(--black-white);
    color: var(--black-white);
    background-color: var(--bkg-color);
    font-size: var(--body-size);
    font-weight: normal;

    display: inline-flex;
    align-items: center;
    justify-content: center;

    transition:
      flex-grow var(--duration) var(--ease),
      background-color var(--duration) var(--ease),
      color var(--duration) var(--ease);
  }

  .multi-button :first-child {
    border-right-style: none;
  }

  .multi-button a:hover,
  .multi-button a:focus,
  .multi-button a.active {
    flex-grow: 4;
    color: white;
    outline: none;
    text-shadow: none;
    background-color: black;
    text-decoration: none;
  }

  .multi-button:hover a:focus:not(:global(:hover)) {
    flex-grow: 1;
    color: black;
    background-color: white;
  }

  .icon-wrapper {
    display: inline-flex;
    align-items: center;
    pointer-events: none;

    max-width: 0;
    opacity: 0;
    margin-right: 0;
    overflow: hidden;

    transition:
      max-width var(--duration) var(--ease),
      margin-right var(--duration) var(--ease),
      opacity var(--duration) var(--ease);
  }

  .multi-button a:hover .icon-wrapper,
  .multi-button a:focus .icon-wrapper,
  .multi-button a.active .icon-wrapper {
    max-width: 24px;
    opacity: 1;
    margin-right: 8px;

    &.gh {
      margin-right: 10px;
    }
  }
</style>
