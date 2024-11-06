<script>
  import { t } from "$lib/translations";
  import ExperienceCard from "components/ExperienceCard.svelte";
</script>

<section class="container-xl animate fadeInUp" id="parcours">
  <div class="row row-padded">
    <div class="col-md-3">
      <h2 class="section-heading">
        {$t("career.title")}
        <span class="section-border"></span>
      </h2>
      <p class="section-subtitle">{$t("career.subtitle")}</p>
    </div>
    <div class="col-md-9 col-md-push-1">
      <div class="row row-cols-md-2 mt-md-0 gx-4 mt-n2">
        <!-- Studies -->
        <div class="order-1 order-md-0">
          <ExperienceCard type="school" from="2022" to={$t("career.today")}>
            {#snippet title()}
                        <span >{$t("career.master")}</span>
                      {/snippet}
            {#snippet description()}
                        <span >{$t("career.master.description")}</span>
                      {/snippet}
          </ExperienceCard>
        </div>
        <div class="order-2 order-md-1">
          <ExperienceCard type="school" from="2021" to="2022">
            {#snippet title()}
                        <span >{$t("career.bachelor")}</span>
                      {/snippet}
            {#snippet description()}
                        <span >{$t("career.bachelor.description")}</span>
                      {/snippet}
          </ExperienceCard>
        </div>
        <div class="order-3 order-md-2">
          <ExperienceCard type="school" from="2019" to="2021">
            {#snippet title()}
                        <span >{$t("career.technical")}</span>
                      {/snippet}
            {#snippet description()}
                        <span >{$t("career.technical.description")}</span>
                      {/snippet}
          </ExperienceCard>
        </div>
        <!-- Work experiences -->
        <div class="order-0 order-md-0">
          <ExperienceCard type="work" from="2022" to={$t("career.today")}>
            {#snippet title()}
                        <span >{$t("career.covea")}</span>
                      {/snippet}
            {#snippet description()}
                        <span >{$t("career.covea.description")}</span>
                      {/snippet}
          </ExperienceCard>
        </div>
        <div class="order-1 order-md-1">
          <ExperienceCard type="work" from="2021" to="2022">
            {#snippet title()}
                        <span >{$t("career.cgi")}</span>
                      {/snippet}
            {#snippet description()}
                        <span >{$t("career.cgi.description")}</span>
                      {/snippet}
          </ExperienceCard>
        </div>
        <div class="order-2 order-md-2">
          <ExperienceCard type="work" from="2020" to="2021">
            {#snippet title()}
                        <span >{$t("career.sdis")}</span>
                      {/snippet}
            {#snippet description()}
                        <span >{$t("career.sdis.description")}</span>
                      {/snippet}
          </ExperienceCard>
        </div>
      </div>
    </div>
  </div>
</section>
