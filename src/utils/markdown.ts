import type { CollectionEntry } from 'astro:content'

export function buildPostMarkdown(post: CollectionEntry<'blog'>): string {
  const { title, description } = post.data
  const body = (post.body ?? '').trim()

  return `# ${title}\n\n> ${description}\n\n${body}\n`
}
