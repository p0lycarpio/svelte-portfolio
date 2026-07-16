<script>
  import { m } from "$lib/paraglide/messages.js";
  import { ParaglideMessage } from "@inlang/paraglide-js-svelte";

  import Navbar from "components/Navbar.svelte";
  import Wavify from "components/Wavify.svelte";
  import MultiButton from "components/MultiButton.svelte";

  import image from "assets/avatar.jpg?w=200&format=webp";
  import srcset from "assets/avatar.jpg?w=200;400&format=webp&as=srcset";

  let w = $state();
  let h = $state();
  let wave = {
    height: 10,
    amplitude: 20,
    speed: 0.2,
    bones: 4,
    color: "var(--bkg-color)",
  };
</script>

<header>
  <Navbar />
  <section class="hero-section">
    <div class="animate-(back-in-down ease) px-3">
      <div class="flex items-center flex-col">
        <img
          src={image}
          srcset={srcset}
          sizes="200px"
          width="128"
          height="128"
          class="avatar"
          fetchpriority="high"
          alt="Portrait" />
        <h1 class="text-center mb-8">Arsène Reymond</h1>
        <p class="text-center mb-6">
          <ParaglideMessage message={m.subtitle}>
            {#snippet link({ children, options })}
              <a href={options.to} target="_blank" rel="noopener noreferrer"
                >{@render children?.()}</a>
            {/snippet}
          </ParaglideMessage>
        </p>
      </div>
      <MultiButton />
    </div>
    <div
      bind:offsetWidth={w}
      bind:offsetHeight={h}
      class="animate-(slide-in-up delay-1s fill-both ease)"
      style="height: 50px;">
      <Wavify options={wave} parentWidth={w} parentHeight={h} />
    </div>
  </section>
</header>

<style lang="scss">
  .hero-section {
    background: var(--hero-sect);
    padding-top: 48px;
    & p {
      font-size: 24px;
      padding: 0 10%;
      font-family: var(--font-heading);
    }
    & :global(a) {
      color: var(--h-color);
      font-weight: 600;
    }
  }

  .avatar {
    border-radius: 50%;
    margin-bottom: 0px;
    transition: all 0.5s;
    box-shadow:
      0 2px 5px 0 rgba(0, 0, 0, 0.16),
      0 2px 10px 0 rgba(0, 0, 0, 0.12);
    user-select: none;
    &:hover {
      transform: scale(1.2);
      box-shadow: 0px 10px 40px 0px #778a93;
    }
  }
</style>
