import type { APIRoute } from 'astro'
import { getCollection, type CollectionEntry } from 'astro:content'
import type { Locale } from '#/i18n/config'
import { getBlogSlug } from '#/i18n/utils'
import { buildPostMarkdown } from '#/utils/markdown'

/**
 * Static paths for a locale's blog posts. Shared by the `[...slug].astro` page
 * and the `[...slug].md.ts` raw-markdown route, in both `blog/` and `en/blog/`.
 */
export async function getBlogStaticPaths(lang: Locale) {
  const posts = await getCollection('blog', p => p.data.lang === lang)
  return posts.map(post => ({
    params: { slug: getBlogSlug(post.id) },
    props: { post }
  }))
}

/** Serves a post's raw Markdown source (the `.md` companion route). */
export const markdownRoute: APIRoute = ({ props }) => {
  const { post } = props as { post: CollectionEntry<'blog'> }
  return new Response(buildPostMarkdown(post), {
    headers: { 'Content-Type': 'text/markdown; charset=utf-8' }
  })
}
