<script>
  import { t } from "$lib/translations";
  import IconLink from "~icons/fa6-solid/link"
  import IconLinkedin from "~icons/fa6-brands/linkedin";
  import IconUp from "~icons/fa6-solid/chevron-up";

  export const prerender = true;

  let form, alert, contact;
  let isSubmitting = false;
  let getYear = new Date().getFullYear();

  const handleSubmit = () => {
    let formData = new FormData(form);
    isSubmitting = true;
    return fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams(formData).toString(),
    })
      .then(() => {
        alert = {
          class: "alert alert-success",
          message: $t("contact.messageSent"),
        };
        isSubmitting = false;
        form.reset();
      })
      .catch(() => {
        alert = {
          class: "alert alert-danger",
          message: $t("contact.messageError"),
        };
        isSubmitting = false;
      });
  };

  function goTop() {
    document.body.scrollIntoView();
  }

  function goBottom() {
    contact.scrollIntoView();
  }
</script>

<footer id="contact" bind:this={contact}>
  <div class="container d-flex justify-content-center footer">
    <div class="contact-form">
      <div class="h-contact d-flex flex-column flex-sm-row">
        <h1>{$t("contact.contactMe")}</h1>
        <div class="d-block social">
          <a
            href="https://linkedin.com/in/arsene-reymond"
            class="social-icon ms-3"
            title="LinkedIn"
            on:focus={goBottom}><IconLinkedin /></a>
          <a
            href="/contact"
            class="social-icon ms-3"
            title="Littlelink"
            data-sveltekit-reload><IconLink /></a>
        </div>
      </div>
      <form
        name="contact"
        id="contact"
        on:submit|preventDefault={handleSubmit}
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
          required />
        <div class="d-flex justify-content-center">
          {#if isSubmitting}
            <button class="btn btn-outline-light" disabled>
              <span
                class="spinner-border spinner-border-sm me-2"
                role="status"
                aria-hidden="true" />
              Vroum...
            </button>
          {:else}
            <button type="submit" class="btn btn-outline-light" name="submit" id="submit"
              >{$t("contact.send")}</button>
          {/if}
        </div>
      </form>
    </div>
  </div>
  <!-- svelte-ignore a11y-click-events-have-key-events -->
  <button
    id="back-to-top"
    on:click={goTop}
    class="btn btn-outline-light btn-md back-to-top d-none d-md-block"
    title={$t("contact.backToTop")}
    ><IconUp />
  </button>
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
    margin-bottom: 2em;
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
    margin-top: 12px;
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
    padding: 8px 16px;
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
