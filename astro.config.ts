import { resolve } from "node:path"
import { defineConfig } from "astro/config"
import { defaultLocale, locales } from "./src/content/translations"

import sitemap from "@astrojs/sitemap"
import tailwind from "@astrojs/tailwind"

export default defineConfig({
  site: "https://british.academy",

  i18n: {
    defaultLocale,
    locales,
    fallback: { fr: "en", ar: "fr" },
    routing: {
      prefixDefaultLocale: true,
      fallbackType: "rewrite",
    },
  },

  integrations: [sitemap(), tailwind()],

  vite: {
    resolve: {
      alias: {
        "~": resolve(import.meta.dirname, "./src"),
      },
    },
  },
})
