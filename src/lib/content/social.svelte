<script>
  import { t } from "$lib/translations";
  import Littlelink from "components/Littlelink.svelte";
</script>

<section class="container-xl animate fadeInUp" id="social">
  <div class="row row-padded">
    <div class="col-md-3">
      <h2 class="section-heading">
        {$t("common.social.title")}
        <span class="section-border" />
      </h2>
      <p class="section-subtitle">{$t("common.social.subtitle")}</p>
    </div>

    <div class="col-md-9 col-md-push-1">
      <div class="row mt-md-5">
      <div class="col-sm-6">
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
      <div class="col-sm-6">
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
          big="true"
          >Letterboxd</Littlelink>
        </div>
      </div>
    </div>
  </div>
</section>

