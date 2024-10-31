import { defaultLocale, direction as d, languages as l, translations as ui } from "~/content/translations"
export { defaultLocale, l as languages }

type Locale = keyof typeof ui
type TranslationKey = keyof (typeof ui)[typeof defaultLocale]
export type AstroLocale = string | undefined

export function direction(locale: AstroLocale = defaultLocale) {
  if (locale in ui) {
    return d[locale as Locale]
  }
  return d[defaultLocale]
}

export function language(locale: AstroLocale = defaultLocale) {
  if (locale in l) {
    return l[locale as Locale]
  }
  return l[defaultLocale]
}

export function t(locale: AstroLocale = defaultLocale, key: TranslationKey) {
  return ui[locale as Locale][key] || ui[defaultLocale][key]
}

export function title(locale: AstroLocale = defaultLocale) {
  if (direction(locale) === "rtl") {
    return t(locale, "logo.text").split(" ").reverse().join(" ")
  }
  return t(locale, "logo.text")
}

export function logo(locale: AstroLocale = defaultLocale, part: "first" | "last") {
  const parts = t(locale, "logo.text").split(" ")
  if (part === "first") return parts[0]
  return parts[1]
}
