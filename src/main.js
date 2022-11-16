import App from "./App.svelte";

var app = new App({
  target: document.querySelector("#app"),
});

[...document.querySelectorAll("img")].forEach((el) =>
  el.addEventListener("contextmenu", (e) => e.preventDefault())
);

export default app;
