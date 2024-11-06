<script>
  import { t } from "$lib/translations";

  import Navbar from "components/Navbar.svelte";
  import Logo from "assets/logo.svelte";
  import Wavify from "components/Wavify.svelte";
  import MultiButton from "components/MultiButton.svelte";

  import webp from "assets/avatar.jpg?webp&w=200&srcset";
  import image from "assets/avatar.jpg?&w=200";

  let w = $state(), h = $state();
  let wave = {
    height: 10,
    amplitude: 20,
    speed: 0.2,
    bones: 4,
    color: "var(--bkg-color)",
  };
</script>

<header>
  <Navbar />
  <section class="hero-section">
    <div class="container-fluid text-center animate backInDown">
      <div class="hero-text">
        <div class="logo">
          <Logo />
        </div>
        <img src={image} srcset={webp} alt="Portrait" width="128" height="128" class="avatar" />
        <h1>{$t("common.title")}</h1>
      </div>
      <p>{@html $t("common.subtitle")}</p>
      <MultiButton />
    </div>
    <div
      bind:offsetWidth={w}
      bind:offsetHeight={h}
      class="animate slideInUp delay-2s"
      style="height: 50px;">
      <Wavify options={wave} parentWidth={w} parentHeight={h} />
    </div>
  </section>
</header>

<style lang="scss">
  .logo {
    max-width: 600px;
    display: block;
    z-index: 2;
    margin: 0 auto 30px auto;
    fill: var(--black-white);
    &:hover {
      animation: colorChange 12s infinite;
    }
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
    padding-top: 50px;
    & p {
      font-size: 20px;
      padding: 0 10%;
    }
    & :global(a) {
      color: var(--h-color);
      font-weight: 600;
    }
  }

  .hero-text {
    margin-bottom: 30px;
  }

  .avatar {
    border-radius: 50%;
    margin-bottom: 0px;
    transition: all 0.5s;
    box-shadow:
      0 2px 5px 0 rgba(0, 0, 0, 0.16),
      0 2px 10px 0 rgba(0, 0, 0, 0.12);
    user-select: none;
    &:hover {
      transform: scale(1.2);
      box-shadow: 0px 10px 40px 0px #778a93;
    }
  }
</style>
