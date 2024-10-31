import { arabicToLatinMap } from "~/content/translations"

type CharKey = keyof typeof arabicToLatinMap

export function canonicalUrl(url: string | URL) {
  const path = url.toString()
  const hasQueryParams = path.includes("?")
  return path.replace(/\/?$/, hasQueryParams ? "" : "/")
}

export function slugify(input?: string) {
  if (!input) return ""

  return (
    input
      .trim()
      .toLowerCase()
      // Normalize Arabic characters
      .replace(/[أإآ]/g, "ا")
      .replace(/[ى]/g, "ي")
      .replace(/[ة]/g, "ه")
      // Remove diacritics (tashkeel) from Arabic text
      .replace(/[\u064B-\u065F]/g, "")
      // Transliterate Arabic characters to Latin (optional)
      .replace(
        /[\u0621-\u063A\u0641-\u064A]/g,
        (char) => (char in arabicToLatinMap && arabicToLatinMap[char as CharKey]) || char
      )
      // Replace spaces and special characters with hyphens
      .replace(/[\s\W-]+/g, "-")
      // Remove hyphens from start and end
      .replace(/^-+|-+$/g, "")
      // Limit slug length (optional)
      .slice(0, 100)
  )
}

export function titleCase(input?: string) {
  if (!input) return ""
  const arr = input.toLowerCase().split(" ")
  for (let i = 0; i < arr.length; i++) {
    arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1)
  }
  return arr.join(" ")
}
