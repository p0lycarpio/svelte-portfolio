<script>
  import { t, locale } from "$lib/translations";
  import ExperienceCard from "components/ExperienceCard.svelte";

  import experiences_fr from "content/experiences.fr.json";
  import experiences_en from "content/experiences.en.json";


  let experiences = $state(experiences_fr);
  
  locale.subscribe(() => {
    experiences = locale.get() === "fr" ? experiences_fr : experiences_en;
  });
  
</script>

<section class="container-xl animate fadeInUp" id="parcours">
  <div class="row row-padded">
    <div class="col-md-3">
      <h2 class="section-heading">
        {$t("experiences.title")}
        <span class="section-border"></span>
      </h2>
      <p class="section-subtitle">{$t("experiences.subtitle")}</p>
    </div>

    <div class="col-md-9 col-md-push-1">
      <div class="row row-cols-md-2 mt-md-0 gx-4 mt-n2">
      {#each experiences as exp}
        <div class={exp.classes}>
          <ExperienceCard
            type={exp.type}
            from={exp.from}
            to={exp.to}
            title={exp.title}
            subtitle={exp.subtitle}
            description={exp.description} />
        </div>
      {/each}
      </div>
    </div>
  </div>
</section>
