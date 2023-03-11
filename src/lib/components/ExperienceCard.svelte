<script>
  import IconSchool from "~icons/fa6-solid/graduation-cap";
  import IconWork from "~icons/fa6-solid/briefcase";

  export let type;
  export let from;
  export let to;
</script>

<div class="card">
  <div class="card-body">
    {#if type == "school"}
      <i class="icon" title="Études"> <IconSchool /> </i>
    {:else if type == "work"}
      <i class="icon" title="Expérience professionnelle">
        <IconWork class="icon" style="font-size:1.6rem" />
      </i>
    {/if}
    <strong>{from} - {to}</strong>
    <h5 class="card-title">
      <slot name="title">Titre</slot>
    </h5>
    <p class="card-text">
      <slot name="description">Description</slot>
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
  }
</style>
