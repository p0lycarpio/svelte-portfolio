<script>
  import ExperienceCard from "components/ExperienceCard.svelte";
</script>

<section class="container-xl animate fadeInUp" id="parcours">
  <div class="row row-padded">
    <div class="col-md-3">
      <h2 class="section-heading">
        Parcours<span class="section-border" />
      </h2>
      <p class="section-subtitle">Experiences professionnelles et études</p>
    </div>
    <div class="col-md-9 col-md-push-1">
      <div class="row row-cols-md-2 mt-md-0 gx-4 mt-n2">
        <!-- Studies -->
        <div class="order-1 order-md-0">
          <ExperienceCard type="school" from="2022" to="aujourd'hui">
            <span slot="title">Master Informatique parcours Architecte logiciel</span>
            <span slot="description">Programmation, architecture des SI et gestion de projet.</span>
          </ExperienceCard>
        </div>
        <div class="order-2 order-md-1">
          <ExperienceCard type="school" from="2021" to="2022">
            <span slot="title"
              >LP Conception, développement et tests de logiciels – option développeur cloud</span>
            <span slot="description">Développement web, mobile, backend & cloud.</span>
          </ExperienceCard>
        </div>
        <div class="order-3 order-md-2">
          <ExperienceCard type="school" from="2019" to="2021">
            <span slot="title">DUT Métiers du multimédia et de l'internet</span>
            <span slot="description"
              >Intégration et développement web, communication digitale, graphisme et audiovisuel.</span>
          </ExperienceCard>
        </div>
        <!-- Work experiences -->
        <div class="order-0 order-md-0">
          <ExperienceCard type="work" from="2022" to="aujourd'hui">
            <span slot="title">Groupe Covéa</span>
            <span slot="description">Ingénieur DataMLOps, en alternance.</span>
          </ExperienceCard>
        </div>
        <div class="order-1 order-md-1">
          <ExperienceCard type="work" from="2021" to="2022">
            <span slot="title">CGI Niort</span>
            <span slot="description">Développeur de webservices, en alternance.</span>
          </ExperienceCard>
        </div>
        <div class="order-2 order-md-2">
          <ExperienceCard type="work" from="2020" to="2021">
            <span slot="title">SDIS 41</span>
            <span slot="description">Chargé de communication, en alternance.</span>
          </ExperienceCard>
        </div>
      </div>
    </div>
  </div>
</section>
