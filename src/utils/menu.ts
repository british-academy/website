import type { CollectionEntry } from "astro:content"
import { type AstroLocale, defaultLocale } from "~/utils/i18n"
import { canonicalUrl } from "~/utils/format"

export type Node = {
  slug: string
  name: string
  isCurrent: boolean
  children: Node[]
}

function insertPage(pathname: string, tree: Node, page: CollectionEntry<"pages">) {
  const parts = page.slug.split("/")
  let currentNode = tree

  for (let i = 1; i < parts.length; i++) {
    const part = parts[i]
    let childNode = currentNode.children?.find((child) => child.slug.endsWith(part))

    if (!childNode) {
      childNode = pageToNode(pathname, page)
      currentNode.children.push(childNode)
    }

    currentNode = childNode
  }
}

function pageToNode(pathname: string, page: CollectionEntry<"pages">) {
  const canonical = canonicalUrl(page.slug.startsWith("/") ? page.slug : `/${page.slug}`)
  return { slug: canonical, name: page.data.name, isCurrent: pathname === canonical, children: [] }
}

export function buildMenu(locale: AstroLocale = defaultLocale, pathname: string, pages: CollectionEntry<"pages">[]) {
  const rootPage = pages.find((page) => page.slug === locale)
  if (!rootPage) {
    throw "Can not find a root page"
  }

  const root = pageToNode(pathname, rootPage)
  pages.forEach((page) => {
    if (page.slug !== locale) {
      insertPage(pathname, root, page)
    }
  })

  return root
}
