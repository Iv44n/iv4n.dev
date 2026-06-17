import type { GetStaticPaths } from 'astro'
import { getBlogStaticPaths, markdownRoute } from '#/utils/blog'

export const getStaticPaths: GetStaticPaths = () => getBlogStaticPaths('es')

export const GET = markdownRoute
