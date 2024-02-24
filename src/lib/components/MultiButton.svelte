<script>
  import { t } from '$lib/translations';
  import IconFile from "~icons/ic/outline-insert-drive-file";
  import IconDown from "~icons/ic/outline-arrow-downward";

  let cv, portfolio;
</script>

<div class="multi-container">
  <div class="multi-button btn-group">
    <a
      class="btn cv"
      href="https://drive.google.com/file/d/1Gxeb5wL5Ixz8YyB4fMhrON5h-deWKeGP/view"
      rel="preload"
      on:mouseover={() => {
        cv = true;
      }}
      on:focus={() => {
        cv = true;
      }}
      on:blur={() => {
        cv = true;
      }}
      on:mouseout={() => {
        cv = false;
      }}>
      {#if cv == true}
        <i class="icon">
          <IconFile height="1.1em"/>
        </i>
      {/if}
      {$t("common.cv")}
    </a>
    <a
      class="btn portfolio"
      href="#projects"
      on:mouseover={() => {
        portfolio = true;
      }}
      on:focus={() => {
        portfolio = true;
      }}
      on:blur={() => {
        portfolio = true;
      }}
      on:mouseout={() => {
        portfolio = false;
      }}>
      {#if portfolio == true}
        <i class="icon">
          <IconDown />
        </i>
      {/if}
      {$t("common.portfolio")}
    </a>
  </div>
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

  .multi-button a {
    flex-basis: 0 !important;
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

  .dark-mode .multi-button :first-child:not(.icon) {
    border-right: solid 2px;
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

  .multi-button:hover a:focus:not(:hover) {
    flex-grow: 1;
    color: black;
    background-color: white;
  }

  .icon {
    pointer-events: none;
    vertical-align: top;
  }
</style>
