<script>
  import { onMount } from "svelte";
  import { slide, fade } from "svelte/transition";

  import Theme from "./ThemeSwitcher.svelte";
  import About from "content/about.svelte";
  import Logo from "assets/logo.svelte";

  import IconClose from "~icons/material-symbols/close-rounded";
  import IconMenu from "~icons/material-symbols/menu-rounded";

  let y, wx, transition;
  let overlay, sidebar;
  let sidebarLinks = [
    { href: "#", text: "Home" },
    { href: "#bio", text: "Biographie" },
    { href: "#projects", text: "Portfolio" },
    { href: "#parcours", text: "Parcours" },
    { href: "#compétences", text: "Compétences" },
    { href: "#contact", text: "Contact" },
  ];

  onMount(() => {
    setTransition();
  });

  function setTransition() {
    transition = wx > 768 ? fade : slide;
  }

  function overlaySwitch(e) {
    if (e == 1) {
      overlay.style.display = "block";
    } else {
      overlay.style.removeProperty("display");
    }
  }

  function openNav(x) {
    if (x == "menu") {
      sidebar.style.width = "270px";
    }
    if (x == "about") {
      about.style.width = "352px";
      about.style.paddingRight = "32px";
    }
    overlaySwitch(1);
  }

  function closeNav(y, z) {
    if (y == "menu") {
      sidebar.style.width = "0";
      overlaySwitch(0);
    }
    if (y || z == "about") {
      about.style.width = "0";
      about.style.paddingRight = "0";
    }
  }

  function closeDelay() {
    console.log("click");
    setTimeout(() => {
      closeNav("menu");
    }, 500);
  }
</script>

<svelte:window
  bind:scrollY={y}
  bind:innerWidth={wx}
  on:resize={() => {
    if (wx < 768 && overlay.style.display) {
      closeNav("menu");
    }
    setTransition();
  }} />

{#if (y > 500) | (wx > 768)}
  <nav
    class="d-flex align-items-center justify-content-between"
    id="navbar-top"
    transition:transition>
    <!-- Sidebars -->
    <div id="sidenav" class="sidenav" bind:this={sidebar}>
      <button title="Fermer" on:click={() => closeNav("menu")}>
        <IconClose />
      </button>
      <ul id="sidebar-links">
        {#each sidebarLinks as { href, text }}
          <!-- svelte-ignore a11y-click-events-have-key-events -->
          <li on:click={closeDelay}><a {href}>{text}</a></li>
        {/each}
        <!-- svelte-ignore a11y-click-events-have-key-events -->
        <!-- svelte-ignore a11y-missing-attribute -->
        <li class="about-link" on:click={() => openNav("about")}><a>À propos</a></li>
      </ul>
    </div>

    <About ref="aboutBtn" closeParent={() => closeNav("about")} />

    <!-- End sidebars -->
    <!-- Navbar elements -->
    <div class="d-flex navbar-buttons">
      <button title="Menu" on:click={() => openNav("menu")}>
        <IconMenu />
      </button>
      <button>
        <Theme ref="dark-mode" />
      </button>
    </div>
    <div class="logo">
      <Logo />
    </div>
    <div style="width:40px;" />
    <!-- End navbar elements -->
  </nav>
{/if}

<!-- svelte-ignore a11y-click-events-have-key-events -->
<div
  id="overlay"
  class="menu-overlay"
  on:click={() => closeNav("menu", "about")}
  bind:this={overlay} />

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

  .sidenav {
    height: 100%;
    width: 0;
    position: fixed;
    z-index: 5;
    top: 0;
    left: 0;
    background-color: var(--bkg-color);
    overflow-x: hidden;
    transition: 0.5s;
  }

  .sidenav li,
  ul {
    list-style: none;
    padding: 0;
  }

  .sidenav a {
    @include sideHeadlinks;
  }

  .sidenav a:hover {
    color: white;
    background-color: #40424a;
  }

  .about-link {
    position: absolute;
    bottom: 0;
    cursor: pointer;
    width: 100%;
    color: var(--text-color);
  }

  button {
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
    display: none;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    height: 120vh;
    background-color: #00000080;
    z-index: 3;
    transition: all 0.5s ease-out;
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

  @media only screen and (max-width: 767px) {
    nav {
      background-color: var(--hero-sect);
      color: #666;
      width: 100%;
      box-shadow: 0 4px 4px var(--cardShadow);
    }
    nav {
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
  }
</style>
