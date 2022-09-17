<script>
  let getYear = new Date().getFullYear();
</script>

<!-- Footer section START -->
<footer id="contact">
  <div class="container d-flex justify-content-center footer">
    <div class="contact-form">
      <div class="h-contact d-flex flex-column flex-sm-row">
        <h1>Me contacter</h1>
        <div class="d-block social">
          <a href="mailto:arsene.reymond@free.fr" class="social-icon mr-3" title="e-mail"
            ><i class="fas fa-envelope" /></a>
          <a href="linkedin.com" class="social-icon ml-3" title="LinkedIn"
            ><i class="fab fa-linkedin" /></a>
        </div>
      </div>
      <form id="contact" name="contact" netlify>
        <p class="status-form">
          <a href="mailto:arsene.reymond@free.fr" style="color:#fff; background:transparent"
            >arsene.reymond@free.fr</a>
        </p>
        <label for="email">E-mail</label>
        <input
          type="email"
          maxlength="64"
          name="email"
          placeholder="Votre e-mail"
          id="email"
          value="" />
        <label for="message">Message</label>
        <textarea
          name="message"
          placeholder="Saisissez votre message"
          id="message"
          cols="55"
          rows="4" />
        <div class="d-flex justify-content-center">
          <button type="submit" class="btn btn-outline-light" name="submit" id="submit"
            >Envoyer</button>
        </div>
      </form>
    </div>
  </div>
  <a
    id="back-to-top"
    href="#top"
    class="btn btn-outline-light btn-lg back-to-top d-none d-md-block"
    title="Retour en haut"><i class="fa-chevron-up" /></a>
</footer>
<div class="copyright">
  <span title="Arsène Reymond"
    >Copyright &copy; {getYear} Tous droits réservés | Arsène Reymond</span>
</div>

<!-- Footer section END -->
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
  }

  .social-icon:hover,
  .social-icon,
  .social-icon:active {
    color: #4978c8;
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
    box-shadow: 0 0 0 0.2rem #0056b3;
  }

  .copyright {
    padding: 15px;
    font-size: 12px;
    color: #fff;
    background-color: #000000;
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
</style>
