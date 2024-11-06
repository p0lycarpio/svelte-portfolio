<script>
  import { t } from "$lib/translations";
  import IconSchool from "~icons/fa6-solid/graduation-cap";
  import IconWork from "~icons/fa6-solid/briefcase";

  let {
    type,
    from,
    to,
    title,
    description
  } = $props();
</script>

<div class="card">
  <div class="card-body">
    {#if type == "school"}
      <i class="icon" title={$t("career.studies")}> <IconSchool /> </i>
    {:else if type == "work"}
      <i class="icon" title={$t("career.work")}>
        <IconWork class="icon" style="font-size:1.6rem" />
      </i>
    {/if}
    <strong>{from} - {to}</strong>
    <h5 class="card-title">
      {#if title}{@render title()}{:else}Titre{/if}
    </h5>
    <p class="card-text">
      {#if description}{@render description()}{:else}Description{/if}
    </p>
  </div>
</div>

<style lang="scss">
  .card {
    background-color: var(--card-color);
  }

  .icon {
    color: var(--cardIcon);
    font-size: 1.8em;
    position: absolute;
    right: 20px;
    top: 12px;
  }

  .card-title {
    font-weight: 600;
    margin: 0.75em 0 !important;
  }

  .card-text {
    line-height: 1.4;
  }

  strong {
    font-size: small;
    font-weight: normal;
    color: var(--text-color);
  }
</style>
