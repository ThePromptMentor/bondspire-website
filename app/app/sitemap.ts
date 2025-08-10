
import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://wearebondspire.com'
  
  // Static pages
  const staticPages = [
    '',
    '/about',
    '/what-we-do',
    '/what-we-do/financial-inequality',
    '/what-we-do/information-integrity', 
    '/what-we-do/community-resilience',
    '/what-we-do/political-transparency',
    '/what-we-do/educational-access',
    '/products',
    '/resources',
    '/resources/blog',
    '/resources/research',
    '/resources/success-stories',
    '/resources/faq',
    '/community',
    '/contact',
    '/privacy',
    '/terms',
    '/accessibility'
  ]

  return staticPages.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === '' ? 'weekly' : 'monthly' as const,
    priority: route === '' ? 1 : route.includes('/what-we-do') || route.includes('/products') ? 0.8 : 0.6,
  }))
}
