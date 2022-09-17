<script>
  import Theme from "./ThemeSwitcher.svelte";
  import Terms from "../content/misc/terms.svelte";

  let overlay;
  let sidebar;
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

<nav class="d-flex align-items-center justify-content-between" id="navbar-top">
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
  <svg
    xmlns="http://www.w3.org/2000/svg"
    alt="Arsène Reymond"
    style="max-height:34px;"
    viewBox="0 0 738.7 102"
    ><defs /><g data-name="Calque 2"
      ><g data-name="arsene reymond"
        ><path
          d="M11.55 73.69a22 22 0 01-8.4-8.4A25 25 0 010 52.54a27.46 27.46 0 012.75-12.6 20.09 20.09 0 017.85-8.4 23.24 23.24 0 0112-3 20 20 0 017.5 1.4 21.39 21.39 0 015.9 3.45 18.67 18.67 0 011.55 1.5 1 1 0 001.73-.64l.09-3.53a1 1 0 011-1h8.33a1 1 0 011 1v43.9a1 1 0 01-1 1h-8.22a1 1 0 01-1-1l-.1-3.92a1 1 0 00-1.75-.62 18.43 18.43 0 01-4.53 3.76 18.93 18.93 0 01-10.1 2.8 23 23 0 01-11.45-2.95zm22.85-10a14.08 14.08 0 003.9-10.35v-.7a16.23 16.23 0 00-1.8-7.7 13.49 13.49 0 00-4.9-5.3 12.82 12.82 0 00-6.8-1.9q-6.4 0-9.9 4.15a16.13 16.13 0 00-3.5 10.75q0 6.7 3.45 10.85t10 4.15a12.94 12.94 0 009.55-3.95zM64.9 29.74h8.8a1 1 0 011 1v3.69a1 1 0 001.82.58 15.13 15.13 0 013.38-3.67 13 13 0 018.2-2.8 16 16 0 013.52.3 1 1 0 01.77 1.16l-1.22 8.86a1 1 0 01-1.17.85 14.51 14.51 0 00-2.9-.23 13.55 13.55 0 00-8.55 3q-3.85 3-3.85 9.6v22.6a1 1 0 01-1 1h-8.8a1 1 0 01-1-1V30.74a1 1 0 011-1zM106 75.39a23.51 23.51 0 01-6.64-2.45 1 1 0 01-.39-1.25l2.81-6.64a1 1 0 011.47-.44 23.38 23.38 0 0012.7 3.53q7.69 0 7.7-4.5a3.57 3.57 0 00-1.6-3.1 28.49 28.49 0 00-5.7-2.6l-3.8-1.4a29.21 29.21 0 01-9.5-5.75 11.65 11.65 0 01-3.5-8.85 11.45 11.45 0 015-9.85q5-3.54 13.25-3.55a36.19 36.19 0 018 .9 21.16 21.16 0 015.2 1.82 1 1 0 01.45 1.3l-3 6.61a1 1 0 01-1.44.43 13.66 13.66 0 00-3.24-1.51 20.11 20.11 0 00-6.35-1c-4.74 0-7.1 1.44-7.1 4.3a4.09 4.09 0 001.9 3.65 29.5 29.5 0 006.2 2.75c.26.07 1.3.44 3.1 1.1q6.39 2.51 9.5 5.7a11.34 11.34 0 013.1 8.2q0 6.81-5.15 10.3t-13 3.5a41.78 41.78 0 01-9.97-1.2zM153.3 73.39a19.85 19.85 0 01-8.1-8.7 27.27 27.27 0 01-2.6-11.95 25.92 25.92 0 013.05-12.8 21.08 21.08 0 018.45-8.45 25.08 25.08 0 0112.2-2.95q10.59 0 15.75 5.85t5.15 16.45c0 1.52-.07 3.08-.22 4.69a1 1 0 01-1 .91h-30.85a1 1 0 00-1 1.24q1.18 5.15 4.1 7.56 3.24 2.7 9.05 2.7a32.07 32.07 0 007.9-.8 25.91 25.91 0 004.82-1.71 1 1 0 011.37.49l2.53 5.92a1 1 0 01-.4 1.25 27.89 27.89 0 01-6 2.35 39.17 39.17 0 01-10.4 1.2q-8.3 0-13.8-3.25zm-1.87-65.18l4.91-7.75a1 1 0 011.37-.31l21.75 13.26a1 1 0 01.29 1.44L176 20.09a1 1 0 01-1.23.32L151.84 9.65a1 1 0 01-.41-1.44zm24.26 40.73a1 1 0 001-1q-.12-5.41-2.69-7.75-2.81-2.55-8-2.55-9.93 0-11.9 10.09a1 1 0 001 1.21zM199.5 29.74h8.61a1 1 0 011 1v3.87a1 1 0 001.78.59 16.82 16.82 0 014.26-3.95 17 17 0 019.6-2.7q7.09 0 10.9 2.95a14.45 14.45 0 015.1 8.25 60.17 60.17 0 011.3 13.8v21.1a1 1 0 01-1 1h-8.8a1 1 0 01-1-1V53.84q0-8.7-1.7-12.55c-1.14-2.56-3.47-3.85-7-3.85a11.87 11.87 0 00-6.1 1.85 14.73 14.73 0 00-5.15 5.35 15.92 15.92 0 00-2 8.2v21.8a1 1 0 01-1 1h-8.8a1 1 0 01-1-1v-43.9a1 1 0 011-1zM264 73.39a19.85 19.85 0 01-8.1-8.7 27.27 27.27 0 01-2.6-11.95 25.92 25.92 0 013.05-12.8 21.08 21.08 0 018.45-8.45 25.08 25.08 0 0112.2-2.95q10.59 0 15.75 5.85t5.15 16.45c0 1.52-.07 3.08-.21 4.69a1 1 0 01-1 .91h-30.86a1 1 0 00-1 1.24q1.18 5.15 4.1 7.56 3.24 2.7 9.05 2.7a32.07 32.07 0 007.9-.8 25.91 25.91 0 004.75-1.71 1 1 0 011.37.49l2.53 5.92a1 1 0 01-.4 1.25 27.89 27.89 0 01-6 2.35 39.17 39.17 0 01-10.4 1.2q-8.23 0-13.73-3.25zm22.39-24.45a1 1 0 001-1q-.12-5.41-2.69-7.75-2.81-2.55-8-2.55-9.93 0-11.9 10.09a1 1 0 001 1.21z" /><g
          data-name="regular"
          ><path
            d="M350.2 30.9h8.8a1 1 0 011 1v3.69a1 1 0 001.82.57 14.9 14.9 0 013.38-3.66 13 13 0 018.2-2.8 16.14 16.14 0 013.53.3 1 1 0 01.76 1.11L376.47 40a1 1 0 01-1.17.84 14.64 14.64 0 00-2.9-.22 13.59 13.59 0 00-8.55 3q-3.86 3-3.85 9.6V75.8a1 1 0 01-1 1h-8.8a1 1 0 01-1-1V31.9a1 1 0 011-1zM393.4 74.55a20 20 0 01-8.1-8.7 27.47 27.47 0 01-2.6-11.95 26 26 0 013.05-12.8 21 21 0 018.45-8.45 25 25 0 0112.2-2.95q10.61 0 15.75 5.85T427.3 52q0 2.27-.21 4.68a1 1 0 01-1 .92h-30.86a1 1 0 00-1 1.23q1.19 5.14 4.1 7.57c2.17 1.8 5.18 2.7 9 2.7a32.57 32.57 0 007.9-.8 25.66 25.66 0 004.75-1.72 1 1 0 011.37.49L424 73a1 1 0 01-.41 1.25 27.66 27.66 0 01-6.05 2.36 39.12 39.12 0 01-10.4 1.2q-8.24-.01-13.74-3.26zm22.4-24.45a1 1 0 001-1c-.09-3.6-1-6.19-2.7-7.74-1.87-1.7-4.53-2.55-8-2.55q-9.92 0-11.9 10.08a1 1 0 001 1.22zM451.65 77.82l-18.3-45.55a1 1 0 01.93-1.37h10a1 1 0 011 .68l9.52 28.52 1.25 4a1 1 0 001.91 0l1.24-4 10.07-28.54a1 1 0 01.94-.66h9.62a1 1 0 01.93 1.36l-27.41 69.1a1 1 0 01-.93.64h-9a1 1 0 01-.92-1.39l9.16-22a1 1 0 00-.01-.79zM489.3 30.9h8.8a1 1 0 011 1v3.68a1 1 0 001.78.62 14.94 14.94 0 014.67-4.1 19.47 19.47 0 019.75-2.4q11 .09 14.39 6.79a1 1 0 001.72.15A16.05 16.05 0 01537 32a19.7 19.7 0 019.3-2.3q7.2 0 10.9 2.75a13.32 13.32 0 014.95 7.8 58.73 58.73 0 011.25 13.55v22a1 1 0 01-1 1h-8.9a1 1 0 01-1-1V53.7q0-8.1-1.65-11.6c-1.1-2.34-3.22-3.5-6.35-3.5q-6.3 0-9.55 4.25T531.7 54v21.8a1 1 0 01-1 1h-8.8a1 1 0 01-1-1V52.1a56.15 56.15 0 00-.4-7.9 6.38 6.38 0 00-2.2-4.1q-1.8-1.5-5.8-1.5a11.33 11.33 0 00-6.5 2.1 15.26 15.26 0 00-4.9 5.65 16.19 16.19 0 00-1.9 7.65v21.8a1 1 0 01-1 1h-8.9a1 1 0 01-1-1V31.9a1 1 0 011-1zM586 74.6a22.27 22.27 0 01-8.5-8.7 25.08 25.08 0 01-3-12.2 25.13 25.13 0 013-12.1 21.75 21.75 0 018.45-8.7 26.7 26.7 0 0125.35 0 22 22 0 018.4 8.7 25.25 25.25 0 013 12.1 25.08 25.08 0 01-3 12.2 22.42 22.42 0 01-8.45 8.7 26.31 26.31 0 01-25.15 0zm22-9.9a17.08 17.08 0 003.35-10.8A16.82 16.82 0 00607.8 43a11.61 11.61 0 00-9.5-4.45 11 11 0 00-9.15 4.4 17.28 17.28 0 00-3.45 11 16 16 0 003.7 10.75 11.89 11.89 0 009.5 4.3 11 11 0 009.15-4.3zM635.1 30.9h8.61a1 1 0 011 1v3.87a1 1 0 001.78.59 16.79 16.79 0 014.26-3.94 17 17 0 019.6-2.7q7.1 0 10.9 2.95a14.38 14.38 0 015.1 8.25 60.05 60.05 0 011.3 13.8V75.8a1 1 0 01-1 1h-8.8a1 1 0 01-1-1V55q0-8.7-1.7-12.55t-7-3.85a11.78 11.78 0 00-6.1 1.85A14.57 14.57 0 00647 45.8a15.87 15.87 0 00-2.1 8.2v21.8a1 1 0 01-1 1h-8.8a1 1 0 01-1-1V31.9a1 1 0 011-1zM700.45 74.85a22.14 22.14 0 01-8.4-8.4 25.06 25.06 0 01-3.15-12.75q0-10.9 6.1-17.45t16.5-6.55a20.39 20.39 0 0110.6 2.85 17.94 17.94 0 014.51 3.67 1 1 0 001.74-.72l-.25-3.87V4.3a1 1 0 011-1h8.6a1 1 0 011 1v71.5a1 1 0 01-1 1h-8.33a1 1 0 01-1-1l-.09-3.92a1 1 0 00-1.76-.62 18.21 18.21 0 01-4.52 3.79 19 19 0 01-10.1 2.75 23 23 0 01-11.45-2.95zm22.85-10.1a14.12 14.12 0 003.9-10.35v-.7a16.17 16.17 0 00-1.8-7.7 13.43 13.43 0 00-4.9-5.3 12.76 12.76 0 00-6.8-1.9q-6.41 0-9.9 4.15t-3.5 10.75q0 6.69 3.45 10.85t10 4.15a13 13 0 009.55-3.95z" /></g
        ></g
      ></g
    ></svg>
  <!-- <img src="site/img/logo.svg" "> -->
  <div style="width: 60px;" />
  <!-- End navbar elements -->
</nav>

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

  .sidenav a,
  h3 {
    @include sideHeadlinks;
  }

  .sidenav a:hover {
    color: white;
    background-color: #40424a;
  }

  .sidenav .closebtn {
    position: absolute;
    top: 0;
    right: 25px;
    font-size: 36px;
    margin-left: 50px;
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
  }

  .clone .btn-menu {
    background: var(--hero-sect);
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
    transition: all 1s ease-out;
  }

  .opened {
    display: block;
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
    position: relative;
    width: 100%;
    line-height: 60px;
    /* padding-left: 20px; */
    height: 0;
    top: 30px;
  }

  nav > svg {
    display: none;
  }

  nav.clone {
    height: 61px;
    color: #666;
    position: fixed;
    top: -65px;
    left: 0;
    right: 0;
    z-index: 4;
    transition: 0.4s top cubic-bezier(0.3, 0.73, 0.3, 0.74);
    width: fit-content;
  }

  nav.clone > img,
  nav.clone .dark-mode {
    display: none;
  }
  body.down nav.clone {
    top: 0;
  }
</style>
