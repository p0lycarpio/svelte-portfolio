<script>
  import { t } from "$lib/translations";
  import IconFile from "~icons/ic/outline-insert-drive-file";
  import IconGithub from "~icons/simple-icons/github";

  let cv = $state();
  let link = $state();
</script>

  <div class="multi-button text-center">
    <a
      class="cv rounded-none rounded-l-md"
      href={$t("common.cv.link")}
      rel="preload"
      onmouseover={() => {
        cv = true;
      }}
      onfocus={() => {
        cv = true;
      }}
      onblur={() => {
        cv = true;
      }}
      onmouseout={() => {
        cv = false;
      }}>
      {#if cv == true}
        <i class="icon">
          <IconFile height="1.1em" />
        </i>
      {/if}
      {$t("common.cv")}
    </a>
    <a
      class="rounded-none rounded-r-md"
      href="https://github.com/p0lycarpio"
      rel="preload"
      target="_blank"
      onmouseover={() => {
        link = true;
      }}
      onfocus={() => {
        link = true;
      }}
      onblur={() => {
        link = true;
      }}
      onmouseout={() => {
        link = false;
      }}>
      {#if link == true}
        <i class="icon" style="margin-right: 4px;">
          <IconGithub />
        </i>
      {/if}
      GitHub
    </a>
  </div>

<style lang="scss">
  :root {
    --border-size: 0.125rem;
    --duration: 350ms;
    --ease: cubic-bezier(0.215, 0.61, 0.355, 1);
    --font-family: monospace;
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
    font-size: 1rem;
    transition: flex-grow var(--duration) var(--ease);
    font-weight: normal;
  }

  .multi-button :first-child {
    border-right-style: none;
  }


  .multi-button a:hover,
  .multi-button a:focus {
    flex-grow: 4;
    height: 40px;
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

  .icon {
    pointer-events: none;
    vertical-align: top;
    position: relative;
    top: -1.6px;
  }
</style>
