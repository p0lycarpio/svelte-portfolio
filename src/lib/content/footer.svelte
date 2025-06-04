<script>
  import { preventDefault } from "svelte/legacy";

  import { t } from "$lib/translations";
  import IconLink from "~icons/fa6-solid/link";
  import IconUp from "~icons/fa6-solid/chevron-up";

  export const prerender = true;

  let form = $state();
  let alert = $state();
  let contact = $state();
  let isSubmitting = $state(false);
  let getYear = new Date().getFullYear();

  const handleSubmit = async () => {
    let formData = new FormData(form);
    isSubmitting = true;
    try {
      await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(formData).toString(),
      });
      alert = {
        class: "alert animate bounceIn text-green-800 bg-green-100",
        message: $t("contact.messageSent"),
      };
      isSubmitting = false;
      form.reset();
    } catch {
      alert = {
        class: "alert animate bounceIn text-red-800 bg-red-100",
        message: $t("contact.messageError"),
      };
      isSubmitting = false;
    }
  };
</script>

<footer id="contact" bind:this={contact}>
  <div class="flex justify-center footer">
    <div class="contact-form">
      <div class="h-contact flex flex-column flex-sm-row">
        <h1>{$t("contact.contactMe")}</h1>
        <div class="block social">
          <a href="/contact" class="social-icon ms-3" title="Littlelink"
            ><IconLink /></a>
        </div>
      </div>
      <form
        name="contact"
        id="contact"
        onsubmit={preventDefault(handleSubmit)}
        bind:this={form}
        netlify-honeypot="bot-field"
        data-netlify="true">
        <input type="hidden" name="form-name" value="contact" />
        <input type="hidden" name="bot-field" />
        {#if alert}
          <div class={alert.class} role="alert">{alert.message}</div>
        {:else}
          <p class="status-form"></p>
        {/if}
        <label for="email">{$t("contact.yourEmail")}</label>
        <input
          type="email"
          maxlength="64"
          name="email"
          placeholder={$t("contact.yourEmail")}
          id="email"
          value=""
          autocomplete="email"
          required />
        <label for="message">{$t("contact.yourMessage")}</label>
        <textarea
          name="message"
          placeholder={$t("contact.yourMessage")}
          id="message"
          cols="55"
          rows="4"
          required></textarea>
        <div class="flex justify-center">
          {#if isSubmitting}
            <button class="btn border border-neutral-300 text-neutral-300 bg-transparent cursor-not-allowed" disabled>
              <svg class="mr-3 size-5 animate-spin" viewBox="0 0 24 24">
                <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Vroum...
            </button>
          {:else}
            <button type="submit"
              class="inline-flex items-center justify-center px-4 py-2 text-base font-medium leading-tight rounded-md transition-colors duration-200
              border border-white text-white bg-transparent hover:bg-white hover:text-neutral-900 cursor-pointer"
              name="submit" id="submit"
              >{$t("contact.send")}</button>
          {/if}
        </div>
      </form>
    </div>
  </div>
  <!-- svelte-ignore a11y_click_events_have_key_events -->
  <!-- svelte-ignore a11y_invalid_attribute -->
  <a
    id="back-to-top"
    href="#"
    class="btn btn-outline-light back-to-top hidden md:block cursor-pointer"
    title={$t("contact.backToTop")}
    ><IconUp />
  </a>
  <div class="copyright">
    <span title="Arsène Reymond">
      <strong style="color:#fff">
        {getYear} Arsène Reymond
      </strong>
    </span>
  </div>
</footer>

<style>
  footer,
  .footer {
    background: #0c0c0c;
  }

  footer {
    padding: 20px 0;
    position: relative;
    z-index: 0;
    height: 70vh;
  }

  .h-contact {
    margin-bottom: 4em;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }

  .h-contact h1,
  .h-contact a {
    color: #fff;
  }

  .social {
    margin-top: 26px;
  }

  .social-icon {
    font-size: 1.8rem;
    height: 32px;
    text-decoration: none;
  }

  .social-icon:hover,
  .social-icon:focus,
  .social-icon:active {
    color: var(--blue) !important;
    background-color: transparent !important;
  }

  .contact-form {
    position: fixed;
    top: 36%;
    z-index: 1;
    width: 610px;
    margin-bottom: 5em;
  }

  form {
    display: flex;
    flex-direction: column;
    width: 100%;
  }

  input {
    height: 57px;
    padding-left: 16px;
  }

  input,
  textarea {
    font-size: var(--bs-body-font-size);
    border: none;
    outline: 0;
    border-radius: 6px;
    margin-bottom: 14px;
    background-color: #d2d5e2;
    min-height: 30px;
  }

  textarea {
    padding: 16px;
    margin-bottom: 24px;
  }

  label {
    display: none;
  }

  input:focus,
  textarea:focus {
    box-shadow: 0 0 0 0.2rem var(--blue);
  }

  .copyright {
    padding: 15px;
    font-size: 12px;
    color: #fff;
    background-color: #000;
    line-height: normal;
    position: fixed;
    text-align: center;
    bottom: 0;
    width: 100%;
    z-index: 1;
  }

  .back-to-top {
    position: fixed;
    bottom: 90px;
    right: 25px;
    z-index: 15;
    border: 0;
  }

  .alert {
    margin-bottom: 1em;
    padding: 1em;
    border-radius: var(--radius-md)
  }

  @media only screen and (max-height: 722px) {
    footer {
      height: 90vh;
    }
    .contact-form {
      top: 18%;
    }
  }

  @media only screen and (max-height: 560px), (max-width: 575px) {
    .contact-form,
    footer {
      position: relative;
    }

    footer {
      padding-bottom: 0;
      top: 0;
    }

    .contact-form {
      width: 80%;
    }

    .h-contact {
      flex-direction: column;
      text-align: center;
      margin-bottom: 0;
    }

    .status-form,
    .alert {
      margin-top: 2em;
      text-align: center;
    }
  }

  @media only screen and (max-width: 767px) {
    .contact-form {
      width: 80%;
    }
  }

  @media only screen and (min-height: 1000px) {
    footer {
      height: 50vh;
    }
    .contact-form {
      top: 55%;
    }
  }
</style>
