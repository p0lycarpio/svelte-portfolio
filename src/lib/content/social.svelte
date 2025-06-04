<script>
  import { t } from "$lib/translations";
  import Littlelink from "components/Littlelink.svelte";
</script>

<section class="max-w-[1320px] mx-auto py-5xl animate fadeInUp" id="social">
  <div class="px-3 grid grid-cols-1 sm:grid-cols-8 gap-x-6">
    <div class="col-span-full md:col-span-2 row-span-full">
      <h2 class="section-heading">
        {$t("common.social.title")}
        <span class="section-border"></span>
      </h2>
      <p class="section-subtitle">{$t("common.social.subtitle")}</p>
    </div>

    <div class="col-span-1 sm:col-span-4 md:col-span-3 sm:mt-6">
      <Littlelink
        icon="github"
        href="https://github.com/p0lycarpio"
        color="#fff"
        big="true"
        twolines="true"
        background="#000">GitHub</Littlelink>
      <Littlelink
        icon="discord"
        href="polycarpio"
        color="#fff"
        big="true"
        copy="true"
        background="#5865f2">Discord</Littlelink>
    </div>
    
    <div class="col-span-1 sm:col-span-4 md:col-span-3 sm:mt-6">
      <Littlelink
        icon="linkedin"
        href="https://linkedin.com/in/arsene-reymond"
        color="#fff"
        big="true"
        background="#2867b2">LinkedIn</Littlelink>
      <Littlelink
        icon="spotify"
        href="https://open.spotify.com/user/arsene_72"
        color="#fff"
        big="true"
        background="#1db954">Spotify</Littlelink>
      <Littlelink
        icon="letterboxd"
        href="https://boxd.it/84LRn"
        color="#fff"
        background="#2c3440"
        big="true">Letterboxd</Littlelink>
    </div>
  </div>
</section>
