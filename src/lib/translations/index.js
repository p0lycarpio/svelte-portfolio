import i18n from "sveltekit-i18n";

/** @type {import('sveltekit-i18n').Config} */
const config = {
  loaders: [
    {
      locale: "en",
      key: "common",
      loader: async () => (await import("./en/common.json")).default,
    },
    {
      locale: "en",
      key: "about",
      loader: async () => (await import("./en/about.json")).default,
    },
    {
      locale: "en",
      key: "biography",
      loader: async () => (await import("./en/biography.json")).default,
    },
    {
      locale: "en",
      key: "career",
      loader: async () => (await import("./en/career.json")).default,
    },
    {
      locale: "en",
      key: "contact",
      loader: async () => (await import("./en/contact.json")).default,
    },
    {
      locale: "en",
      key: "skills",
      loader: async () => (await import("./en/skills.json")).default,
    },
    {
      locale: "fr",
      key: "common",
      loader: async () => (await import("./fr/common.json")).default,
    },
    {
      locale: "fr",
      key: "about",
      loader: async () => (await import("./fr/about.json")).default,
    },
    {
      locale: "fr",
      key: "biography",
      loader: async () => (await import("./fr/biography.json")).default,
    },
    {
      locale: "fr",
      key: "career",
      loader: async () => (await import("./fr/career.json")).default,
    },
    {
      locale: "fr",
      key: "contact",
      loader: async () => (await import("./fr/contact.json")).default,
    },
    {
      locale: "fr",
      key: "skills",
      loader: async () => (await import("./fr/skills.json")).default,
    },
  ],
};

export const { t, locale, locales, loading, loadTranslations } = new i18n(config);
