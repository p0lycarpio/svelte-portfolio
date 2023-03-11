<script>
  import { scale } from "svelte/transition";
  export let project;
</script>

<div class="col-lg-6 {project.domain}" transition:scale>
  <project
    style="background-color:{project.background}; color:{project.text}"
    class={project.layout}>
    <div class="project-media">
      {#if project.shot.endsWith("mp4")}
        <video loop autoplay muted poster={project.shot.slice(0, -3) + "png"}>
          <source src={project.shot} type="video/mp4" />
        </video>
      {:else}
        <img src={project.shot} alt={project.subtitle} loading="lazy" />
      {/if}
    </div>
    <div class="project_info">
      <h3 style="color:{project.accent};">
        {@html project.type}
      </h3>
      <h1>{project.title}</h1>
      <h2>{project.subtitle}</h2>
      <p>{@html project.para}</p>
      <p class="lien">{@html project.links}</p>
    </div>
  </project>
</div>
