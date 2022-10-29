<script>
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

    setTimeout(() => {
      let selector = ".col-lg-6." + domain;
      let elements = root.querySelectorAll("project");

      let selections = [...elements].filter((element) => !element.closest(selector));
      for (var x = 0; x < selections.length; x++) {
        selections[x].parentNode.style.display = "none";
      }
    }, 1);
    return (current = domain);
  }
</script>

<section class="container-xl anmCSS fadeInUp" id="projects" bind:this={root}>
  <div class="row row-padded">
    <div class="col-md-3">
      <h2 class="fh5co-section-heading">
        Portfolio<span class="fh5co-border" />
      </h2>
      <p class="info">Mes projets</p>
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
      <div id="wrapper" style="width: 100%;">
        <div class="row elements mt-cpN mt-md-0">
          <!-- elements -->

          {#each filterItems(projectsData, more) as project}
            {#if project.active == true}
              <div class="col-lg-6 {project.domain}">
                <project
                  style="background-color:{project.background}; color:{project.text}"
                  class={project.layout}>
                  <slider shot={project.shot} color={project.text} />
                  <div class="project_info">
                    <h3 style="color:{project.accent};">
                      {@html project.type}
                    </h3>
                    <h1>{project.title}</h1>
                    <h2>{project.subtitle}</h2>
                    <p>{@html project.para}</p>
                    {@html project.links}
                  </div>
                </project>
              </div>
            {/if}
          {/each}
        </div>

        <div class="row justify-content-center" id="see-more-block">
          <div class="col-6 col-md-5">
            <div class="card">
              <div class="d-grid text-center">
                <button
                  type="button"
                  on:click={showmore}
                  class="btn text-nowrap py-2"
                  id="see-more">Voir plus</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

