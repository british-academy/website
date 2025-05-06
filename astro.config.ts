import { resolve } from "node:path"
import { defineConfig } from "astro/config"
import { defaultLocale } from "./src/content/translations"

import mdx from "@astrojs/mdx"
import sitemap from "@astrojs/sitemap"
import tailwind from "@astrojs/tailwind"

export default defineConfig({
  site: "https://british.academy",

  i18n: {
    defaultLocale,
    locales: ["en", "fr", "ar"],
    fallback: { fr: "en", ar: "fr" },
    routing: {
      prefixDefaultLocale: true,
      fallbackType: "rewrite",
    },
  },

  integrations: [mdx(), sitemap(), tailwind()],

  vite: {
    resolve: {
      alias: {
        "~": resolve(import.meta.dirname, "./src"),
      },
    },
  },
})
