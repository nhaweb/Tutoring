import type { MetadataRoute } from 'next'
import { siteUrl } from '@/config/site'
import { news, tutors } from '@/data/content'

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date()
  const staticPaths = ['', '/chinh-sach-bao-mat', '/dieu-khoan', '/tuyen-dung-gia-su']

  return [
    ...staticPaths.map((path) => ({
      url: `${siteUrl()}${path || '/'}`,
      lastModified,
      changeFrequency: 'weekly' as const,
      priority: path === '' ? 1 : 0.6,
    })),
    ...tutors.map((tutor) => ({
      url: `${siteUrl()}/gia-su/${tutor.slug}`,
      lastModified,
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    })),
    ...news.map((article) => ({
      url: `${siteUrl()}/tin-tuc/${article.slug}`,
      lastModified,
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    })),
  ]
}
