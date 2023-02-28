<script>
  export let type;
  export let from
  export let to;
</script>

<div class="card">
  <div class="card-body">
    {#if type == "school"}
      <i
        class="fas fa-2x fa-graduation-cap"
        title="Études"
        style="height:32px;width:32px;position:absolute;right:20px;top:10px" />
    {:else if type == "work"}
      <i
        class="fas fa-2x fa-briefcase"
        title="Expérience professionnelle"
        style="position:absolute;right:16px;top:10px;" />
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

  .card-body i {
    color: var(--cardIcon);
    font-size: 2em;
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