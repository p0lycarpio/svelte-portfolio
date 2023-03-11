<script>
  import { onMount } from "svelte";
  import { slide, fade } from "svelte/transition";

  import Theme from "./ThemeSwitcher.svelte";
  import About from "content/about.svelte";
  import Logo from "assets/logo.svelte";

  import IconClose from "~icons/material-symbols/close-rounded";
  import IconMenu from "~icons/material-symbols/menu-rounded";

  let y, wx, transition;
  let sidebar;
  let menuOpen,
    aboutOpen = false;
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

  function close() {
    menuOpen = false;
    aboutOpen = false;
  }
</script>

<svelte:window
  bind:scrollY={y}
  bind:innerWidth={wx}
  on:keydown={(e) => {
    if (e.key == "Escape" && menuOpen | aboutOpen) {
      close();
    }
  }}
  on:resize={() => {
    if (wx < 768) {
      close();
    }
    setTransition();
  }} />

<!-- svelte-ignore a11y-click-events-have-key-events -->
<!-- svelte-ignore a11y-no-noninteractive-tabindex -->
<!-- svelte-ignore a11y-missing-attribute -->

{#if (y > 500) | (wx > 768)}
  <nav
    class="d-flex align-items-center justify-content-between"
    id="navbar-top"
    transition:transition>
    <!-- Navbar elements -->
    <div class="d-flex navbar-buttons">
      <button
        title="Menu"
        class="icon menu"
        on:click={() => {
          menuOpen = true;
        }}>
        <IconMenu />
      </button>
      <button class="icon">
        <Theme/>
      </button>
    </div>
    <div class="logo">
      <Logo />
    </div>
    <div style="width:40px;" />
    <!-- End navbar elements -->

    <!-- Sidebars -->
    <div id="sidenav" class="sidenav" class:show={menuOpen === true} bind:this={sidebar}>
      <button title="Fermer" class="icon" on:click={close}>
        <IconClose />
      </button>
      <ul id="sidebar-links">
        {#each sidebarLinks as { href, text }}
          <li on:click={close}><a {href}>{text}</a></li>
        {/each}
        <li
          class="about-link"
          on:click={() => {
            aboutOpen = true;
          }}>
          <a
            on:keypress={(e) => {
              e.key == "Enter" ? (aboutOpen = true) : null;
            }}
            tabindex="0">À propos</a>
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
    <div id="overlay" class="menu-overlay" on:click={close} transition:fade={{ duration: 300 }} />
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
  }
</style>
