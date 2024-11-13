<script>
  import { onMount } from "svelte";
  import { t } from "$lib/translations";

  import Navbar from "components/Navbar.svelte";
  import Wavify from "components/Wavify.svelte";
  import MultiButton from "components/MultiButton.svelte";

  import webp from "assets/avatar.jpg?webp&w=200&srcset";
  import image from "assets/avatar.jpg?&w=200";

  let w = $state();
  let h = $state();
  let wave = {
    height: 10,
    amplitude: 20,
    speed: 0.2,
    bones: 4,
    color: "var(--bkg-color)",
  };
  let hydrated = $state(false);

  onMount(() => {
    hydrated = true;
  });
</script>

<header>
  <Navbar />
  <section class="hero-section">
    <div class="container-fluid text-center animate backInDown">
      <div class="hero-text">
        <img src={image} srcset={webp} alt="Portrait" width="128" height="128" class="avatar" />
        <h1>Arsène Reymond</h1>
      </div>
      {#key hydrated}
        <p>{@html $t("common.subtitle")}</p>
      {/key}
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

  .hero-section {
    background: var(--hero-sect);
    padding-top: 48px;
    & p {
      font-size: 22px;
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
