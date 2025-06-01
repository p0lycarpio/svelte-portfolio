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

<section id="bio" class="max-w-[1320px] mx-auto py-5xl animate fadeInUp">
  <div class="px-3 grid grid-cols-1 md:grid-cols-8 gap-x-6">
    <div class="col-span-1 md:col-span-2">
      <h2 class="section-heading">
        {$t("biography.title")}<span class="section-border"></span>
      </h2>
      <p class="section-subtitle">{$t("biography.subtitle")}</p>
    </div>
      {#key hydrated}
          <div class="col-span-1 md:col-span-3 md:mt-6">
            <p>{@html $t("biography.intro", { age })}</p>
            <p>{@html $t("biography.para1")}</p>
          </div>
          <div class="col-span-1 md:col-span-3 md:mt-6">
            <p>{@html $t("biography.para2")}</p>
          </div>
      {/key}
  </div>
</section>

<style>
  p {
    margin-bottom: 1rem;
  }
</style>