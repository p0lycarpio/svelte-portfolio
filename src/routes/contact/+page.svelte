<script>
  import { onMount } from "svelte";
  import { t } from "$lib/translations";
  import Littlelink from "$lib/components/Littlelink.svelte";

  import webp from "assets/avatar.jpg?webp&w=200&srcset";
  import image from "assets/avatar.jpg?&w=200";

  let hydrated = $state(false);

  onMount(() => {
    hydrated = true;
  });
</script>

<div class="container mx-auto">
  <div class="text-center my-12 pb-12">
    <img src={image} srcset={webp} alt="Portrait" width="128" height="128" class="avatar inline" />
    <h1>Arsène Reymond</h1>
    {#key hydrated}
      <p>{@html $t("contact.description")}</p>
    {/key}
    
    <Littlelink
      icon="linkedin"
      href="https://linkedin.com/in/arsene-reymond"
      color="#fff"
      background="#2867b2">LinkedIn</Littlelink>

    <Littlelink icon="discord" href="polycarpio" color="#fff" copy="true" background="#5865f2"
      >Discord</Littlelink>

    <Littlelink icon="github" href="https://github.com/p0lycarpio" color="#fff" background="#000"
      >GitHub</Littlelink>

    <Littlelink
      icon="twitter"
      href="https://twitter.com/arsenermd"
      color="#fff"
      background="#1da1f2">Twitter</Littlelink>

    <Littlelink
      icon="spotify"
      href="https://open.spotify.com/user/arsene_72"
      color="#191414"
      background="#1db954">Spotify</Littlelink>

    <Littlelink
      icon="lastfm"
      href="https://last.fm/user/arsene_72"
      color="#fff"
      background="#d51007">Last.fm</Littlelink>

    <Littlelink icon="letterboxd" href="https://boxd.it/84LRn" color="#fff" background="#2c3440"
      >Letterboxd</Littlelink>

    <Littlelink
      icon="tvtime"
      href="https://www.tvtime.com/fr/user/7992316/profile"
      color="#333"
      background="#ffd400">TV Time</Littlelink>

    <Littlelink icon="paypal" href="https://paypal.me/arsenermd" color="#fff" background="#00457c"
      >PayPal</Littlelink>
    <br />

    <Littlelink icon="message" href="/#contact" color="#fff" background="#2457f5"
      >{$t("contact.sendMessage")}</Littlelink>
    <br />
  </div>
</div>

<style lang="scss">
  p {
    font-size: 1.2rem;
    margin-top: 1.4rem;
    margin-bottom: 3rem;
    line-height: 1.5;
  }

  .avatar {
    border-radius: 50%;
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
