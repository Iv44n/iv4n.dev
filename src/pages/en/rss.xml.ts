import type { APIContext } from 'astro'
import { generateRSS } from '#/utils/rss'

export async function GET(context: APIContext) {
  return generateRSS(context, { locale: 'en' })
}
