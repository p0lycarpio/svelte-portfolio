import { browser } from "$app/environment";
import { loadTranslations } from "$lib/translations";

/** @type {import('@sveltejs/kit').Load} */
export const load = async () => {
  async function detectLocale() {
    if (browser) {
      return navigator.language.split("-")[0];
    }
    return "fr";
  }

  await loadTranslations(await detectLocale());

  return {};
};
