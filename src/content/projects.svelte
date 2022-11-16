<script>
  import ProjectCard from "../components/ProjectCard.svelte";
  import projectsData from "../data/projects.json";

  const filterItems = (i, d) => i.slice(0, d);
  let root;
  let more = 4;
  let current = "all";

  function showmore() {
    more = more + 4;

    if (more >= projectsData.length) {
      root.querySelector("#see-more-block").style.display = "none";
    }
    Object.fromEntries(Object.entries(projects).slice(0, more));
  }

  function showall() {
    current = "all";
    more = projectsData.length;
    root.querySelector("#see-more-block").style.display = "none";

    let elements = root.querySelectorAll("project");

    let all = [...elements];
    for (var x = 0; x < all.length; x++) {
      all[x].parentNode.style.display = "block";
    }
  }

  function filter(domain) {
    current == domain;
    showall();

    let selector = ".col-lg-6." + domain;
    let elements = root.querySelectorAll("project");

    let selections = [...elements].filter((element) => !element.closest(selector));
    for (var x = 0; x < selections.length; x++) {
      selections[x].parentNode.style.display = "none";
    }

    return (current = domain);
  }
</script>

<section class="container-xl animate fadeInUp" id="projects" bind:this={root}>
  <div class="row row-padded">
    <div class="col-md-3">
      <h2 class="section-heading">
        Portfolio<span class="section-border" />
      </h2>
      <p class="section-subtitle">Mes projets</p>
      <div id="filtres" class="d-none d-md-block">
        <div class="filters button-group">
          <button class:selected={current === "all"} on:click={showall}>Tout</button><br />
          <button class:selected={current === "web"} on:click={() => filter("web")}
            >Développement</button
          ><br />
          <button class:selected={current === "video"} on:click={() => filter("video")}
            >Audiovisuel</button
          ><br />
          <button class:selected={current === "graphisme"} on:click={() => filter("graphisme")}
            >Graphisme</button
          ><br />
        </div>
      </div>
    </div>

    <div class="col-md-9 col-md-push-1">
      <div class="row elements mt-md-0 mt-n2">
        {#each filterItems(projectsData, more) as project}
          {#if project.active == true}
            <ProjectCard {project} />
          {/if}
        {/each}
      </div>
      <div class="row justify-content-center" id="see-more-block">
        <div class="col-6 col-md-5">
          <div class="card d-grid text-center">
            <button type="button" on:click={showmore} class="btn text-nowrap py-2" id="see-more"
              >Voir plus</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<style lang="scss">
  #see-more {
    color: var(--black-white);
    &:active {
      background-color: var(--h-color) !important;
      color: var(--white-black) !important;
      border: 0px!important;
    }
  }
  .card:active {
    border: 2px var(--h-color) !important;
  }
</style>
