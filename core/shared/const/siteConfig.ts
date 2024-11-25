const BASE_URL: Readonly<string> = process.env.NEXT_PUBLIC_APP_URL || process.env.PUBLIC_APP_URL || 'http://127.0.0.1:3000'

export const siteConfig = {
  name: 'Camilo Vargas | Frontend Developer',
  siteName: 'Portfolio web',
  description:
    'Portafolio web reestructurado con arquitectura hexagonal (ports and adapters), siguiendo principios de Clean Code y Domain-Driven Design (DDD). Este proyecto incorpora buenas prácticas para garantizar un código limpio, organizado y escalable. Ideal para desarrolladores interesados en aprender y aplicar conceptos avanzados de desarrollo frontend.',
  url: BASE_URL,
  ogImage: `${BASE_URL}/images/og.webp`,
  links: {
    twitter: 'https://twitter.com/cavargasl',
    github: 'https://github.com/cavargasl',
    LinkedIn: 'https://www.linkedin.com/in/cavargasl/',
  },
}
