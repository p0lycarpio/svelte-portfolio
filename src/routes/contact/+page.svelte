<script>
  import Littlelink from "../../lib/components/Littlelink.svelte";

  import webp from "assets/avatar.jpg?webp&w=200&srcset";
  import image from "assets/avatar.jpg?&w=200";
</script>

<div class="container">
  <div class="column text-center my-5">
    <img src={image} srcset={webp} alt="Portrait" width="128" height="128" class="avatar" />
    <h1>Arsène Reymond</h1>
    <p>
      Passionné par l'informatique, la musique et le cinéma.<br />
      Étudiant à mes heures perdues et DataOps en alternance chez
      <a href="https://www.covea.eu/fr" target="_blank" rel="noopener">Covéa</a>.
    </p>

    <Littlelink
      icon="linkedin"
      href="https://linkedin.com/in/arsene-reymond"
      color="#fff"
      background="#2867b2">LinkedIn</Littlelink>

    <Littlelink
      icon="discord"
      href="https://discordapp.com/users/562663442159239173"
      color="#fff"
      background="#5865f2">Discord</Littlelink>
    
    <Littlelink
      icon="github"
      href="https://github.com/p0lycarpio"
      color="#fff"
      background="#000">GitHub</Littlelink>

    <Littlelink
      icon="twitter"
      href="https://twitter.com/arsenermd"
      color="#fff"
      background="#1da1f2">Twitter</Littlelink>

    <Littlelink
      icon="spotify"
      href="https://open.spotify.com/user/arsene_72"
      color="#191414"
      background="#1db954">Spotify</Littlelink>

    <Littlelink
      icon="lastfm"
      href="https://last.fm/user/arsene_72"
      color="#fff"
      background="#d51007">Last.fm</Littlelink>

    <Littlelink
      icon="tvtime"
      href="https://www.tvtime.com/fr/user/7992316/profile"
      color="#333"
      background="#ffd400">TV Time</Littlelink>

    <Littlelink
      icon="paypal"
      href="https://paypal.me/arsenermd"
      color="#fff"
      background="#00457c">PayPal</Littlelink>
    <br>

    <Littlelink
      icon="message"
      href="/#contact"
      color="#fff"
      background="#2457f5">Envoyer un message</Littlelink>
    <br>
  </div>
</div>

<style lang="scss">
  h1 { 
    font-size: 48px;
    line-height: 96px;
    font-weight: 800;
  }

  p {
    font-size: 1.2rem;
    margin-bottom: 3rem;
    line-height: 1.5;
  }

  a {
    color: #2457f5;
    &:hover {
      color: #083bda;
    }
    &:focus {
      outline: #7ab8ff solid 2px;
      border-radius: 2px;
    }
  }

  .avatar {
    border-radius: 50%;
    width: 128px;
    height: 128px;
    transition: all 0.5s;
    box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.16), 0 2px 10px 0 rgba(0, 0, 0, 0.12);
    user-select: none;
    &:hover {
      transform: scale(1.2);
      box-shadow: 0px 10px 40px 0px #778a93;
    }
  }
</style>
