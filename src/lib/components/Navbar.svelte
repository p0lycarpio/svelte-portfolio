<script>
  import { slide, fade } from "svelte/transition";
  import { t, locale } from "$lib/translations";

  import About from "content/about.svelte";
  import Logo from "assets/logo.svelte";

  import IconClose from "~icons/material-symbols/close-rounded";
  import IconMenu from "~icons/material-symbols/menu-rounded";
  import IconTranslate from "~icons/material-symbols/translate";

  let y = $state();
  let wx = $state();
  let animate = $derived(wx > 768 ? fade: slide)

  let sidebar = $state();
  let menuOpen = $state(false);
  let aboutOpen = $state(false);
  let sidebarLinks = $state([]);

  locale.subscribe(() => {
    sidebarLinks = [
      { href: "#", text: "Home" },
      { href: "#bio", text: $t("biography.title") },
      { href: "#parcours", text: $t("experiences.title") },
      { href: "#compétences", text: $t("skills.title") },
      { href: "#contact", text: $t("contact.title") },
    ];
  });

  function close() {
    menuOpen = false;
    aboutOpen = false;
  }

  function switchLocale() {
    locale.set(locale.get() === "fr" ? "en" : "fr");
  }
</script>

<svelte:window
  bind:scrollY={y}
  bind:innerWidth={wx}
  onkeydown={(e) => {
    if (e.key == "Escape" && menuOpen | aboutOpen) {
      close();
    }
  }}
  onresize={() => {
    if (wx < 768) {
      close();
    }
  }} />

<!-- svelte-ignore a11y_click_events_have_key_events -->
<!-- svelte-ignore a11y_no_noninteractive_tabindex -->
<!-- svelte-ignore a11y_missing_attribute -->

{#if (y > 500) | (wx > 768)}
  <nav
    class="d-flex align-items-center justify-content-between"
    id="navbar-top"
    transition:animate>
    <!-- Navbar elements -->
    <div class="d-flex navbar-buttons">
      <button
        title="Menu"
        class="icon menu"
        onclick={() => {
          menuOpen = true;
        }}>
        <IconMenu />
      </button>
      <button class="icon locale" onclick={switchLocale} title={$t("common.opLocale")}>
        <IconTranslate style="font-size:.8em" />
      </button>
    </div>
    <div class="logo">
      <Logo />
    </div>
    <div style="width:40px;"></div>
    <!-- End navbar elements -->

    <!-- Sidebars -->
    <div id="sidenav" class="sidenav" class:show={menuOpen === true} bind:this={sidebar}>
      <button title={$t("common.close")} class="icon" onclick={close}>
        <IconClose />
      </button>
      <button class="icon locale" onclick={switchLocale} title={$t("common.opLocale")}>
        <IconTranslate style="font-size:.8em" />
      </button>
      <ul id="sidebar-links">
        {#each sidebarLinks as { href, text }}
          <!-- svelte-ignore a11y_no_noninteractive_element_interactions -->
          <li onclick={close}><a {href}>{text}</a></li>
        {/each}
        <!-- svelte-ignore a11y_no_noninteractive_element_interactions -->
        <li
          class="about-link"
          onclick={() => {
            aboutOpen = true;
          }}>
          <a
            role="button"
            onkeypress={(e) => {
              e.key == "Enter" ? (aboutOpen = true) : null;
            }}
            tabindex="0">{$t("about.title")}</a>
        </li>
      </ul>
    </div>
    <About
      display={aboutOpen}
      closeParent={() => {
        aboutOpen = false;
      }} />
  </nav>

  {#if menuOpen}
    <div
      role="presentation"
      id="overlay"
      class="menu-overlay"
      onclick={close}
      transition:fade|global={{ duration: 300 }}>
    </div>
  {/if}
{/if}

<style lang="scss">
  @mixin sideHeadlinks {
    padding: 8px 8px 8px 52px;
    text-decoration: none;
    font-size: 25px;
    font-weight: 500;
    font-family: "IBM Plex Sans";
    color: var(--black-white);
    display: block;
    transition: 0.3s;
  }

  :global(.show) {
    transform: translateX(0px) !important;
    visibility: visible !important;
  }

  .sidenav {
    height: 100%;
    width: 270px;
    transform: translateX(-270px);
    position: fixed;
    z-index: 5;
    top: 0;
    left: 0;
    background-color: var(--bkg-color);
    overflow-x: hidden;
    visibility: hidden;
    transition: 0.4s;
  }

  .sidenav li,
  ul {
    list-style: none;
    padding: 0;
  }

  .sidenav a {
    @include sideHeadlinks;
    &:hover {
      color: white;
      background-color: #40424a;
    }
  }

  .sidenav .locale {
    display: none;
  }

  .about-link {
    position: absolute;
    bottom: 0;
    cursor: pointer;
    width: 100%;
    color: var(--text-color);
  }

  :global(button.icon) {
    background: unset;
    border: unset;
    line-height: normal;
    padding: 0;
    margin-left: 14px;
    font-size: 2em;
    color: var(--black-white);
    cursor: pointer;
  }

  .menu-overlay {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    height: 100vh;
    background-color: #00000080;
    z-index: 3;
  }

  nav {
    width: 100%;
    line-height: 60px;
    position: relative;
    height: 0;
    top: 26px;
    color: #666;
    z-index: 4;
  }

  .logo {
    display: none;
  }

  .locale {
    margin-top: -3px;
  }

  @media only screen and (max-width: 767px) {
    nav {
      background-color: var(--hero-sect);
      box-shadow: 0 4px 4px var(--cardShadow);
      height: 61px;
      color: #666;
      position: fixed;
      left: 0;
      right: 0;
      z-index: 4;
      top: 0;
    }

    .logo {
      max-width: 246px;
      display: block;
      padding: 0;
      width: 100%;
      z-index: 2;
      fill: var(--black-white);
    }

    .menu {
      position: relative;
      top: -3px;
    }

    .locale {
      display: none !important;
    }

    .sidenav .locale {
      display: inline-block !important;
    }
  }
</style>
