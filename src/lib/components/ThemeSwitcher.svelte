<script>
  import { onMount } from "svelte";
  export let ref;

  import IconContrast from "~icons/material-symbols/contrast-sharp"

  /**
   * Apply a given color theme
   * @param {string} themeName - classname to set on body
   * @param {string} navColor - meta 'theme-color' to set
   */
  function setTheme(themeName, navColor) {
    localStorage.setItem("theme", themeName);
    document.body.className = themeName;
    document.querySelector("meta[name=theme-color]").setAttribute("content", navColor);
  }

  /** Toggle between light and dark theme */
  function toggleTheme() {
    if (localStorage.getItem("theme") === "dark-mode") {
      setTheme("light-mode", "#4978c8");
    } else {
      setTheme("dark-mode", "#0D1728");
    }
  }

  // Immediately invoked function to set the theme on initial load
  onMount(() => {
    if (
      window.matchMedia("(prefers-color-scheme: dark)").matches ||
      localStorage.getItem("theme") === "dark-mode"
    ) {
      setTheme("dark-mode", "#0D1728");
    } else {
      setTheme("light-mode", "#4978c8");
    }
  });
</script>

<span
  class="dark-mode"
  on:click={toggleTheme}
  {ref}>
  <IconContrast/>
</span>


<style>
  span {
    font-size: .8em;
    position: relative;
    top:-3px!important
  }

  @media only screen and (max-width: 767px) {
    .dark-mode {
      display: none !important;
    }
  }
</style>
