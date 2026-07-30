<script>
  import { m } from "$lib/paraglide/messages.js";
  import { ParaglideMessage } from "@inlang/paraglide-js-svelte";

  const born = new Date(2001, 1, 22);
  const today = new Date();

  let age = $state(today.getFullYear() - born.getFullYear());
  let month = today.getMonth() - born.getMonth();
  if (month < 0 || (month === 0 && today.getDate() < born.getDate())) {
    age -= 1;
  }
</script>

<section id="bio" class="max-w-[1320px] mx-auto py-4xl fade-in-up-alt">
  <div class="px-3 grid grid-cols-1 md:grid-cols-8 gap-x-6">
    <div class="col-span-1 md:col-span-2">
      <h2 class="section-heading">
        {m.biography()}<span class="section-border"></span>
      </h2>
      <p class="section-subtitle">{m.biography_subtitle()}</p>
    </div>
    <div class="col-span-1 md:col-span-3 md:mt-6">
      <p>{m.intro({ age })}</p>
      <p>
        <ParaglideMessage message={m.para1}>
          {#snippet abbr({ children, options })}
            <abbr title={options.title}>{@render children?.()}</abbr>
          {/snippet}
        </ParaglideMessage>
      </p>
    </div>
    <div class="col-span-1 md:col-span-3 md:mt-6">
      <p>{m.para2()}</p>
    </div>
  </div>
</section>

<style>
  p {
    margin-bottom: 1rem;
  }
</style>
