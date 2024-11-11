<script>
  import { onMount } from "svelte";
  import { t } from "$lib/translations";

  const born = new Date(2001, 1, 22);
  const today = new Date();

  let hydrated = $state(false);

  let age = $state(today.getFullYear() - born.getFullYear());
  let month = today.getMonth() - born.getMonth();
  if (month < 0 || (month === 0 && today.getDate() < born.getDate())) {
    age -= 1;
  }

  onMount(() => {
    hydrated = true;
  });
</script>

<section id="bio" class="container-xl animate fadeInUp">
  <div class="row row-padded">
    <div class="col-md-3">
      <h2 class="section-heading">
        {$t("biography.title")}<span class="section-border"></span>
      </h2>
      <p class="section-subtitle">{$t("biography.subtitle")}</p>
    </div>
    <div class="col-md-9 col-md-push-1 mt-md-4">
      {#key hydrated}
        <div class="row md-n5">
          <div class="col-md-6">
            <p>{@html $t("biography.intro", { age })}</p>
            <p>{@html $t("biography.para1")}</p>
          </div>
          <div class="col-md-6">
            <p>{@html $t("biography.para2")}</p>
          </div>
        </div>
      {/key}
    </div>
  </div>
</section>
