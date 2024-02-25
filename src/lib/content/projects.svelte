<script>
  import { t, locale } from "$lib/translations";
  import ProjectCard from "components/ProjectCard.svelte";

  import projects_en from "content/projects.en.json";
  import projects_fr from "content/projects.fr.json";

  let allprojects = [];
  let projects = [];
  let filtered = false;
  let current = "all";
  let domains = [];
  let visible_projects = [];

  locale.subscribe(() => {
    domains = [];
    projects = [];
    allprojects = locale.get() === "fr" ? projects_fr : projects_en;
    projects = allprojects.filter((prj) => prj.active == true);

    // Retrieve all possible domains
    projects.forEach((element) => {
      if (domains.indexOf(element.domain) === -1 && element.domain != undefined)
        domains.push(element.domain);
    });
    showall();
  });

  function showmore() {
    visible_projects = visible_projects.concat(projects.slice(more, more + 4));
    more += 4;
  }

  function showall() {
    filtered = false;
    visible_projects = projects;
    current = "all";
  }

  function filter(domain) {
    showall();
    visible_projects = visible_projects.filter((value) => value.domain == domain);
    filtered = true;
    current = domain;
  }
</script>

<section class="container-xl animate fadeInUp" id="projects">
  <div class="row row-padded">
    <div class="col-md-3">
      <h2 class="section-heading">
        {$t("common.portfolio")}
        <span class="section-border" />
      </h2>
      <p class="section-subtitle">{$t("common.portfolio.subtitle")}</p>
      <div id="filtres" class="d-none d-md-block">
        <div class="filters button-group">
          <button class:selected={current === "all"} on:click={showall}>{$t("common.all")}</button
          ><br />
          {#each domains as domain}
            <button class:selected={current === domain} on:click={() => filter(domain)}>
              {domain.charAt(0).toUpperCase() + domain.slice(1)}</button
            ><br />
          {/each}
        </div>
      </div>
    </div>

    <div class="col-md-9 col-md-push-1">
      <div class="row elements mt-md-0 mt-n2">
        {#each visible_projects as project}
          <ProjectCard {project} />
        {/each}
      </div>
      {#if visible_projects.length < projects.length && !filtered}
        <div class="row justify-content-center" id="see-more-block">
          <div class="col-6 col-md-5">
            <div class="card d-grid text-center">
              <button type="button" on:click={showmore} class="btn text-nowrap py-2" id="see-more"
                >{$t("common.seemore")}</button>
            </div>
          </div>
        </div>
      {/if}
    </div>
  </div>
</section>

<style lang="scss">
  #see-more {
    color: var(--black-white);
    &:active {
      background-color: var(--h-color) !important;
      color: var(--white-black) !important;
      border: 0px !important;
    }
  }
  .card:active {
    border: 2px var(--h-color) !important;
  }
</style>
