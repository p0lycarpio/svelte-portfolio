<script>
  import { createEventDispatcher } from "svelte";
  import { slide } from "svelte/transition";

  const dispatch = createEventDispatcher();

  function sayHello() {
    dispatch("message", {
      text: "Hello!",
    });
  }

  let open = true;
  const toggle = () => (open = !open);
</script>

{#if open}
  <div
    transition:slide
    class="alert alert-danger alert-dismissible message justify-content-between align-items-center"
    role="alert"
    id="message-top">
    <div class="message-content">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="28"
        height="28"
        fill="#c4302b"
        class="bi bi-youtube mr-3"
        viewBox="0 0 16 16">
        <path
          d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.007 2.007 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.007 2.007 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31.4 31.4 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.007 2.007 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A99.788 99.788 0 0 1 7.858 2h.193zM6.4 5.209v4.818l4.157-2.408L6.4 5.209z" />
      </svg>
      Découvrez mon dernier projet audiovisuel !
      <a href="https://youtu.be/Y9Cx22X59AM" target="blank" class="alert-link"
        >Vidéo publicitaire « Blois Eats »</a>
    </div>
    <div class="message_btns">
      <a
        class="btn"
        style="background-color:#c4302b;color:white;"
        href="https://youtu.be/Y9Cx22X59AM"
        target="blank">Regarder</a>
      <button type="button" class="btn btn-outline-dark" on:click={toggle} aria-label="Close"
        >Fermer</button>
    </div>
    <button type="button" class="close" on:click={toggle} aria-label="Close" id="xclose-msg">
      <span aria-hidden="true">&times;</span>
    </button>
  </div>
{/if}

<style>
  .message {
    margin-bottom: 0;
    padding-right: 1em;
    display: flex;
    border-radius: 0px 0px 6px 6px;
    font-size: 18px;
    position: relative;
    top: 0;
    z-index: 100;
  }

  .message a,
  .message button {
    border-radius: 16px;
  }

  .message a:hover {
    background-color: unset;
  }

  #xclose-msg {
    display: none;
  }

  @media (max-width: 892px) {
    .message {
      font-size: 13px;
    }
    .message svg {
      display: none;
    }
    .message-content {
      width: 90%;
    }
    .message_btns {
      display: none;
    }
    #xclose-msg {
      display: block;
      top: -5px;
    }
  }
</style>
