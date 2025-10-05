export default function robots() {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/private/', '/admin/', '/api/'],
      },
    ],
    sitemap: 'https://mibebi.com/sitemap.xml',
  }
}