
import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: [
        '/api/',
        '/admin/',
        '/_next/',
        '/private/',
        '/.well-known/',
        '/tmp/'
      ],
    },
    sitemap: 'https://wearebondspire.com/sitemap.xml',
    host: 'https://wearebondspire.com'
  }
}
