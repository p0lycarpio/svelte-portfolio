<script>
  import { t } from "$lib/translations";
  import IconSchool from "~icons/fa6-solid/graduation-cap";
  import IconWork from "~icons/fa6-solid/briefcase";

  let { type, from, to, title, subtitle, description } = $props();
</script>

<div class="card border border-neutral-300 rounded-lg shadow-md shadow-neutral-400/40 overflow-hidden">
  <div class="card-body p-4">
    {#if type == "school"}
      <i class="icon" title={$t("experiences.studies")} style="right:15px">
        <IconSchool />
      </i>
    {:else if type == "work"}
      <i class="icon" title={$t("experiences.work")}>
        <IconWork class="icon" />
      </i>
    {/if}

    <strong>{from} - {to ? to : $t("experiences.today")}</strong>
    <h3 class="card-title">{title}</h3>
    {#if subtitle}
      <h4 class="card-subtitle">{subtitle}</h4>
    {/if}
    <p class="card-text">{description}</p>
  </div>
</div>

<style lang="scss">
  .card {
    background-color: var(--card-color);
    display: block;
    position: relative;
    margin-top: 38px;
    transition: all 0.25s;

    &:hover {
      box-shadow: 0 4px 10px var(--cardHover);
      transform: translate(0, -3px);
    }
  }

  .icon {
    color: var(--cardIcon);
    font-size: 1.6em;
    position: absolute;
    right: 20px;
    top: 12px;
  }

  .card-title {
    font-size: 1.25rem;
    font-weight: 500;
    margin-top: 0.75em;
    margin-bottom: 0.5rem;
  }

  .card-subtitle {
    font-size: 1rem;
    font-weight: 400;
  }

  .card-text {
    line-height: 1.4;
    margin-top: 0.75em;
  }

  i {
    color: var(--cardIcon);
    font-size: 2em;
}

  strong {
    font-size: small;
    font-weight: normal;
    color: var(--text-color);
  }
</style>
