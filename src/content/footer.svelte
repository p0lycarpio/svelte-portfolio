<script>
  import { onMount } from "svelte";

  let getYear = new Date().getFullYear();
  let url = "https://api.github.com/repos/p0lycarpio/portfolio/commits?&page=1&per_page=1";
  let commitDate;

  onMount(async () => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        commitDate = new Date(data[0].commit.author.date);
      })
      .catch((error) => {
        console.log(error);
        return [];
      });
  });

  function goTop() {
    document.body.scrollIntoView();
  }
</script>

<footer id="contact">
  <div class="container d-flex justify-content-center footer animate fadeIn">
    <div class="contact-form">
      <div class="h-contact d-flex flex-column flex-sm-row">
        <h1>Me contacter</h1>
        <div class="d-block social">
          <a href="mailto:***REMOVED***" class="social-icon me-3" title="e-mail"
            ><i class="fas fa-envelope" /></a>
          <a href="linkedin.com" class="social-icon ms-3" title="LinkedIn"
            ><i class="fab fa-linkedin" /></a>
        </div>
      </div>
      <form id="contact" name="contact" method="POST" netlify>
        <p class="status-form">
          <a href="mailto:***REMOVED***" style="color:#fff; background:transparent"
            >***REMOVED***</a>
        </p>
        <label for="email">E-mail</label>
        <input
          type="email"
          maxlength="64"
          name="email"
          placeholder="Votre e-mail"
          id="email"
          value=""
          required />
        <label for="message">Message</label>
        <textarea
          name="message"
          placeholder="Saisissez votre message"
          id="message"
          cols="55"
          rows="4"
          required />
        <div class="d-flex justify-content-center">
          <button type="submit" class="btn btn-outline-light" name="submit" id="submit"
            >Envoyer</button>
        </div>
      </form>
    </div>
  </div>
  <!-- svelte-ignore a11y-click-events-have-key-events -->
  <button
    id="back-to-top"
    on:click={goTop}
    class="btn btn-outline-light btn-lg back-to-top d-none d-md-block"
    title="Retour en haut"
    ><i class="fa-chevron-up" />
  </button>
  <div class="copyright animate fadeInUp">
    <span title="Arsène Reymond">
      {#if commitDate}
        Mis à jour le {commitDate.toLocaleDateString("fr")}<br />
      {/if}
      {getYear}, Tous droits réservés | Arsène Reymond</span>
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
    margin-top: 28px;
  }

  .social-icon {
    font-size: 2.2rem;
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
    top: 30%;
    z-index: 1;
    width: 610px;
    margin-bottom: 3em;
  }

  form {
    display: flex;
    flex-direction: column;
    width: 100%;
  }

  input {
    height: 46px;
    padding-left: 14px;
  }

  input,
  textarea {
    font-size: 18px;
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
    z-index: 0;
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
    input,
    textarea {
      font-size: 14px;
    }
    .status-form {
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
      top: 52%;
    }
  }
</style>
