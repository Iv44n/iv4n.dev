import { getCollection } from 'astro:content'
import { defaultLang, showDefaultLang, ui } from '#/i18n/ui'

export function getLangFromUrl(url: URL) {
  const [, lang] = url.pathname.split('/')
  if (lang in ui) return lang as keyof typeof ui
  return defaultLang
}

export function getRouteFromUrl(url: URL): string {
  const pathname = new URL(url).pathname
  const parts = pathname.split('/')

  if (parts.length > 1 && parts[1] in ui) {
    const route = parts.slice(2).join('/')
    return route ? `/${route}` : '/'
  }

  return pathname
}

export function useTranslations(lang: keyof typeof ui) {
  return function t(key: keyof (typeof ui)[typeof defaultLang]) {
    return ui[lang][key] || ui[defaultLang][key]
  }
}

function buildLocalizedPath(lang: string, path: string): string {
  const pathName = path.startsWith('/') ? path : `/${path}`
  return !showDefaultLang && lang === defaultLang ? pathName : `/${lang}${pathName}`
}

export function useTranslatedPath(lang: keyof typeof ui) {
  return (path: string, l: string = lang) => buildLocalizedPath(l, path)
}

export function getLocalizedPath(lang: keyof typeof ui, path: string): string {
  return buildLocalizedPath(lang, path)
}

export function getBlogSlug(id: string): string {
  const withoutExt = id.replace(/\.[^/.]+$/, '')
  return withoutExt.replace(/^(es|en)\//, '')
}

export async function getPostsByLocale(lang: keyof typeof ui) {
  const posts = await getCollection('blog')
  return posts
    .filter(post => post.data.lang === lang)
    .sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf())
}

export function getAlternateLinks(url: URL) {
  const route = getRouteFromUrl(url)
  const links = Object.keys(ui).map(lang => ({
    lang,
    href: getLocalizedPath(lang as keyof typeof ui, route)
  }))
  // x-default points search engines at the default-locale version.
  links.push({ lang: 'x-default', href: getLocalizedPath(defaultLang, route) })
  return links
}
