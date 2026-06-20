<script>
  import { getLocale } from "$lib/paraglide/runtime.js"
  import { m } from "$lib/paraglide/messages.js";
  import ExperienceCard from "components/ExperienceCard.svelte";

  import experiences_fr from "content/experiences.fr.json";
  import experiences_en from "content/experiences.en.json";

  let experiences = getLocale() === "fr" ? experiences_fr : experiences_en;
</script>

<section class="max-w-[1320px] mx-auto py-5xl fade-in-up-alt" id="experiences">
  <div class="px-3 grid grid-cols-1 md:grid-cols-8 md:grid-rows-3 gap-x-6">
    <div class="col-span-1 md:col-span-2 row-span-full -mb-6">
      <h2 class="section-heading">
        {m.experience()}
        <span class="section-border"></span>
      </h2>
      <p class="section-subtitle">{m.experience_subtitle()}</p>
    </div>

    {#each experiences as exp}
      <div class="col-span-1 md:col-span-3 {exp.order} ">
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
</section>
