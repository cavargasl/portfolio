const BASE_URL: Readonly<string> = process.env.NEXT_PUBLIC_APP_URL || process.env.PUBLIC_APP_URL || 'http://127.0.0.1:3000'

export const siteConfig = {
  name: 'Camilo Vargas | Frontend Developer',
  description: 'Personal web portfolio, where you can find information about me, my skills, my work experience, and my projects.',
  url: BASE_URL,
  ogImage: `${BASE_URL}/images/og.png`,
  links: {
    twitter: 'https://twitter.com/cavargasl',
    github: 'https://github.com/cavargasl',
    LinkedIn: 'https://www.linkedin.com/in/cavargasl/',
  },
}
