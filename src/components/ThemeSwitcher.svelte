<script>
	import { onMount } from 'svelte';
  export let ref

// function to set a given theme/color-scheme
function setTheme(themeName, navColor) {
    localStorage.setItem('theme', themeName);
    document.body.className = themeName;
    document.querySelector("meta[name=theme-color]").setAttribute("content", navColor);

}
// function to toggle between light and dark theme
function toggleTheme() {
   if (localStorage.getItem('theme') === 'dark-mode'){
       setTheme('light-mode', '#4978c8');
   } else {
       setTheme('dark-mode', "#0D1728");
   }
}
// Immediately invoked function to set the theme on initial load
onMount(() => {
   if (window.matchMedia("(prefers-color-scheme: dark)").matches || localStorage.getItem('theme') === 'dark-mode') {
       setTheme('dark-mode', "#0D1728");
         console.log('dark init')
   } else {
       setTheme('light-mode', '#4978c8');
       console.log('light init')
   }
})

</script>

<svg
  aria-hidden="true"
  width="24"
  alt="D"
  title="Thème sombre"
  style="cursor:pointer"
  focusable="false"
  data-prefix="fas"
  data-icon="adjust"
  class="dark-mode svg-inline--fa fa-adjust fa-w-16"
  role="img"
  xmlns="http://www.w3.org/2000/svg"
  viewBox="0 0 512 512"
  on:click={toggleTheme}
  {ref} >
  <path
    d="M8 256c0 136.966 111.033 248 248 248s248-111.034 248-248S392.966 8 256 8 8 119.033 8 256zm248 184V72c101.705 0 184 82.311 184 184 0 101.705-82.311 184-184 184z" />
</svg>
