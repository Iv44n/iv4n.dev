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

export function useTranslatedPath(lang: keyof typeof ui) {
  return function translatePath(path: string, l: string = lang) {
    const pathName = path.startsWith('/') ? path : `/${path}`
    return !showDefaultLang && l === defaultLang ? pathName : `/${l}${pathName}`
  }
}

export function getLocalizedPath(lang: keyof typeof ui, path: string): string {
  const pathName = path.startsWith('/') ? path : `/${path}`
  return !showDefaultLang && lang === defaultLang
    ? pathName
    : `/${lang}${pathName}`
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
  return Object.keys(ui).map(lang => {
    return {
      lang,
      href: getLocalizedPath(lang as keyof typeof ui, route)
    }
  })
}
