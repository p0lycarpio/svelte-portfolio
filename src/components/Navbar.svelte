<script>
  import { slide } from 'svelte/transition';
  
  import Theme from "./ThemeSwitcher.svelte";
  import Terms from "../content/misc/terms.svelte";
  import Logo from "../assets/logo.svelte";

  let y, wx;
  let overlay, sidebar;
  let sidebarLinks = [
    { href: "#", text: "Home" },
    { href: "#bio", text: "Biographie" },
    { href: "#projects", text: "Portfolio" },
    { href: "#parcours", text: "Parcours" },
    { href: "#compétences", text: "Compétences" },
    { href: "#contact", text: "Contact" },
  ];

  function overlaySwitch(e) {
    if (e == 1) {
      overlay.style.display = "block";
    } else {
      overlay.style.removeProperty("display");
    }
  }

  function openNav(x) {
    if (x == "menu") {
      sidebar.style.width = "250px";
    }
    if (x == "terms") {
      terms.style.width = "332px";
    }
    overlaySwitch(1);
  }

  function closeNav(y, z) {
    if (y == "menu") {
      sidebar.style.width = "0";
      overlaySwitch(0);
    }
    if (y || z == "terms") {
      terms.style.width = "0";
    }
  }

  function closeDelay() {
    console.log("click");
    setTimeout(() => {
      closeNav("menu");
    }, 500);
  }
</script>

<svelte:window bind:scrollY={y} bind:innerWidth={wx} on:resize={() => {if (wx <768 && overlay.style.display) closeNav("menu")}}  />

{#if (y > 500) | (wx > 768)}
  <nav class="d-flex align-items-center justify-content-between" id="navbar-top" transition:slide>
    <!-- Sidebars -->
    <div id="sidenav" class="sidenav" bind:this={sidebar}>
      <span class="close-x" title="Fermer" on:click={() => closeNav("menu")}>
        <svg viewBox="0 0 40 40" width="100%" height="34px">
          <path d="M 6,6 L 30,30 M 30,6 L 6,30" /></svg>
      </span>
      <ul id="sidebar-links">
        {#each sidebarLinks as { href, text }}
          <li on:click={closeDelay}><a {href}>{text}</a></li>
        {/each}
        <li class="about-link" on:click={() => openNav("terms")}>Mentions légales</li>
      </ul>
    </div>

    <Terms ref="termsBtn" closeParent={() => closeNav("terms")} />

    <!-- End sidebars -->
    <!-- Navbar elements -->
    <div class="d-flex navbar-buttons">
      <span title="Menu" class="btn-menu">
        <svg
          on:click={() => openNav("menu")}
          viewBox="0 0 100 80"
          style="max-width:28px;cursor:pointer">
          <rect width="100" height="12" rx="8" />
          <rect y="30" width="100" height="12" rx="8" />
          <rect y="60" width="100" height="12" rx="8" />
        </svg>
      </span>
      <Theme ref="dark-mode" />
    </div>
    <div class="logo">
      <Logo />
    </div>
    <div style="width:68px;" />
    <!-- End navbar elements -->
  </nav>
{/if}

<div
  id="overlay"
  class="menu-overlay"
  on:click={() => closeNav("menu", "terms")}
  bind:this={overlay} />

<style lang="scss">
  @mixin sideHeadlinks {
    padding: 8px 8px 8px 52px;
    text-decoration: none;
    font-size: 25px;
    font-weight: 450;
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
    margin-left: 60px;
    color: var(--text-color);
  }

  .btn-menu {
    /* padding: 20px; */
    padding-left: 20px;
    border-bottom-right-radius: 20px;
    height: 60px;
    width: 68px;
    display: inherit;
    margin-top: 2.4px;
  }


  .btn-menu > *,
  :global([ref="dark-mode"]),
  .close-x {
    fill: var(--black-white);
    color: var(--black-white);
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
    transition: all .5s ease-out;
  }

  .close-x {
    margin-left: 20px;
    cursor: pointer;
  }

  .close-x svg,
  :global([ref="termsBtn"]) {
    max-width: 34px;
    z-index: 10;
  }

  .close-x path,
  :global([ref="termsBtn"]) {
    stroke: var(--black-white);
    fill: var(--black-white);
    stroke-linecap: round;
    stroke-width: 4;
  }

  nav {
    width: 100%;
    line-height: 60px;
    position: relative;
    /* padding-left: 20px; */
    height: 0;
    top: 30px;
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
      // border-bottom: 1px solid #afafaf;
      width: 100%;
      box-shadow: 0 4px 4px var(--cardShadow);
    }
    nav {
      height: 61px;
      color: #666;
      position: fixed;
      // top: -65px;
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
