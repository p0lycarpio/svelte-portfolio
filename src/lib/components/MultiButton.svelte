<script>
  import IconFile from "~icons/ic/outline-insert-drive-file";
  import IconDown from "~icons/ic/outline-arrow-downward";

  let cv, portfolio;
</script>

<div class="multi-container">
  <div class="multi-button btn-group">
    <a
      class="btn cv"
      href="https://drive.google.com/file/d/1Z6GXtVXBCFkmz_KlSO15WfnnPrvhV7GK/view?usp=sharing"
      rel="preload"
      on:mouseover={() => {cv = true}}
      on:focus={() => {cv = true}}
      on:blur={() => {cv = true}}
      on:mouseout={() => {cv = false}}>
      {#if cv == true}
        <i class="icon">
          <IconFile />
        </i>
      {/if}
      CV
    </a>
    <a
      class="btn portfolio"
      href="#projects"
      on:mouseover={() => {portfolio = true}}
      on:focus={() => {portfolio = true}}
      on:blur={() => {portfolio = true}}
      on:mouseout={() => {portfolio = false}}>
      {#if portfolio == true}
        <i class="icon">
          <IconDown />
        </i>
      {/if}
      Portfolio</a>
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
  }

  .multi-button :first-child {
    border-right-style: none;
  }

  .dark-mode .multi-button :first-child {
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
    vertical-align: text-bottom;
  }
</style>
