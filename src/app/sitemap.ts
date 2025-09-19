import type { MetadataRoute } from 'next'
import { WEBSITE_URL } from '@/constants/urls'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: `${WEBSITE_URL}/`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1
    }
  ]
}
