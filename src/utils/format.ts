export function canonicalUrl(url: string | URL) {
  const path = url.toString()
  const hasQueryParams = path.includes("?")
  return path.replace(/\/?$/, hasQueryParams ? "" : "/")
}
