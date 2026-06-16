import type { APIRoute, GetStaticPaths } from 'astro'
import { getCollection } from 'astro:content'
import { getBlogSlug } from '#/i18n/utils'
import { buildPostMarkdown } from '#/utils/markdown'

export const getStaticPaths: GetStaticPaths = async () => {
  const posts = await getCollection('blog', p => p.data.lang === 'en')
  return posts.map(post => ({
    params: { slug: getBlogSlug(post.id) },
    props: { post }
  }))
}

export const GET: APIRoute = ({ props }) => {
  return new Response(buildPostMarkdown(props.post), {
    headers: { 'Content-Type': 'text/markdown; charset=utf-8' }
  })
}
