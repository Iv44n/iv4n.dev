// @ts-check

import mdx from '@astrojs/mdx'
import sitemap from '@astrojs/sitemap'
import tailwindcss from '@tailwindcss/vite'
import { defineConfig } from 'astro/config'

import vercel from '@astrojs/vercel';

// https://astro.build/config
export default defineConfig({
  site: 'https://iv4n.dev',
  integrations: [mdx(), sitemap()],

  vite: {
    plugins: [tailwindcss()]
  },

  server: {
    allowedHosts: true
  },

  i18n: {
    defaultLocale: 'es',
    locales: ['es', 'en'],
    routing: {
      prefixDefaultLocale: false,
      redirectToDefaultLocale: false
    }
  },

  adapter: vercel()
})