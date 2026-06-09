import type { APIContext } from 'astro'
import rss from '@astrojs/rss'
import { SITE } from '#/config/site'
import { getPostsByLocale, getBlogSlug, getLocalizedPath } from '#/i18n/utils'

export async function generateRSS(
  context: APIContext,
  options: { locale: 'es' | 'en' }
) {
  const { locale } = options
  const posts = await getPostsByLocale(locale)

  return rss({
    title: `${SITE.title} - ${locale === 'es' ? 'Blog' : 'Writing'}`,
    description: SITE.description,
    site: context.site ?? '',
    items: posts.map(post => {
      const slug = getBlogSlug(post.id)
      return {
        ...post.data,
        link: getLocalizedPath(locale, `/blog/${slug}/`)
      }
    })
  })
}
