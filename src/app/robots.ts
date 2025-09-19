import type { MetadataRoute } from 'next'
import { WEBSITE_URL } from '@/constants/urls'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ''
    },
    sitemap: `${WEBSITE_URL}/sitemap.xml`
  }
}
