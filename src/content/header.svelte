<script>
  import Navbar from "../components/Navbar.svelte";
  import Banner from "../components/BannerTop.svelte";
  import { createEventDispatcher } from "svelte";
  import { onMount } from "svelte";
  import Logo from "../assets/logo.svelte";
  import wavify from "../components/wavify";

  const dispatch = createEventDispatcher();
  let wave;

  function forward(event) {
    dispatch("message", event.detail);
  }
  onMount(() => {
    wavify(wave, {
      height: 10,
      bones: 4,
      amplitude: 20,
      color: "var(--bkg-color)",
      speed: 0.2,
    });
  });
</script>

<header>
  {#if 1 === 2}
    <Banner on:message={forward} />
  {/if}

  <Navbar />

  <!-- Presentation section START -->
  <section class="hero-section">
    <div class="container-fluid text-center anmCSS backInDown">
      <div class="hero-text">
        <div class="logo">
          <Logo />
        </div>
        <img src="site/img/avatar.jpg" alt="Portrait" width="100" class="avatar" />
        <h1>Développement et informatique</h1>
      </div>

      <p>
        Étudiant en licence professionnelle <a
          href="https://www.iut-larochelle.fr/formations/departement-informatique/licence-professionnelle-developpeur-cloud/"
          target="_blank"
          data-toggle="tooltip"
          title=""
          data-original-title="Conception, Développement et Tests de Logiciels"
          >CDTL option développeur cloud</a>
        et en alternance chez
        <a href="https://cgi.com/fr" target="_blank">CGI</a> à Niort.
      </p>

      <div class="multi-container">
        <div class="multi-button btn-group">
          <a class="btn cv" href="content/res/doc/CV.pdf">CV</a>
          <!-- <a class="btn portfolio" href="content/res/doc/Portfolio.pdf">Portfolio</a> -->
          <a class="btn portfolio" href="#projects">Portfolio</a>
        </div>
      </div>
    </div>
    <svg width="100%" height="100%" version="1.1" xmlns="http://www.w3.org/2000/svg" class="wave">
      <path bind:this={wave} />
    </svg>
  </section>
  <!-- Presentation section END -->
</header>

<style>
  .logo {
    max-width: 600px;
    display: block;
    z-index: 2;
    margin: 0 auto 30px auto;
    fill: var(--black-white);
  }

  .logo:hover {
    animation: colorChange 12s infinite;
  }

  @keyframes colorChange {
    0% {
      fill: #4978c8;
    }
    25% {
      fill: #168a06;
    }
    50% {
      fill: #ffee00;
    }
    75% {
      fill: #ff0000;
    }
    100% {
      fill: #4978c8;
    }
  }

  .hero-section {
    background: var(--hero-sect);
  }

  .hero-section p {
    font-size: 20px;
    padding: 0 10%;
  }

  .hero-section p a {
    color: var(--h-color);
    font-weight: 600;
  }

  .hero-text {
    margin-bottom: 30px;
  }

  .wave {
    margin-bottom: -100px;
  }

  .hero-section {
    padding-top: 50px;
  }

  .avatar {
    border-radius: 50%;
    margin-bottom: 0px;
    transition: all 0.5s;
    box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.16), 0 2px 10px 0 rgba(0, 0, 0, 0.12);
    user-select: none;
  }

  .avatar:hover {
    transform: scale(1.4);
    box-shadow: 0px 10px 40px 0px #778a93;
  }

  /* ----------------------
  Double button
-------------------------*/

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
    width: 24%;
    margin: 0 auto;
    margin-bottom: 60px;
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
  }

  .multi-button a:hover:before,
  .multi-button a:focus:before {
    font-family: "fa-pro-used";
    margin-right: 8px;
  }

  .multi-button a.cv:hover:before {
    content: "\e904";
  }

  /* .multi-button a.portfolio:hover:before {
  content: "\e906";
} */

  .multi-button a.portfolio:hover:before {
    content: "\e908";
  }

  .multi-button:hover a:focus:not(:hover) {
    flex-grow: 1;
    color: black;
    background-color: white;
  }

  .multi-button a:active {
    transform: translateY(var(--border-size));
  }

  a:focus,
  a:hover {
    text-decoration: none;
    outline: 0;
  }
</style>
