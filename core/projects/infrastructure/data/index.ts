import { type Language } from '@core/locale/domain'

import { type Project } from '@core/projects/domain/project'
import { siteConfig } from '@core/shared/const/siteConfig'

const esProjects: Project[] = [
  {
    title: 'Portafolio',
    description:
      'Portafolio web personal, donde puedes encontrar información sobre mí, mis habilidades, mi experiencia laboral y mis proyectos.',
    webSite: siteConfig.url,
    skills: [
      'TypeScript',
      'Next.js',
      'Astro',
      'Tailwind CSS',
      'GitHub',
      'Radix',
      'clsx',
      'Class Validator',
      'Hexagonal Architecture',
      'Clean Code',
      'ESLint',
      'Prettier',
      'Husky',
      'lint-staged',
      'Jest',
    ],
    image: '/images/og.webp',
    github: ['https://github.com/cavargasl/portfolio'],
  },
  {
    title: 'E-Commerce · Copiservys',
    description:
      'Plataforma online de venta de impresoras, accesorios, respuestos y suministros, además ofrece servicio técnico a domicilio. Enlazado con una base de datos de productos en excel y vendido en WhatsApp.',
    webSite: 'https://www.copiservys.com/',
    github: ['https://github.com/cavargasl/copiservys'],
    skills: ['TypeScript', 'Git', 'GitHub', 'Next.js', 'Tailwind CSS', 'Shadcn/ui', 'Redux', 'Hexagonal Architecture'],
    image: '/images/copiservys.webp',
  },
  {
    title: 'Hackathon · Periferia',
    description:
      'Aplicación de ReactJs y NestJs, mediante solicitudes HTTP al backend se puede detectar patrones de más de cuatro letras iguales en una matriz de NxN en diferentes direcciones (oblicua, horizontal o vertical) para recibir la respuesta, Además, registra los intentos consultados y calcula su promedio, brindando una solución completa y eficiente con las mejores practicas. En El front se muestran los intentos consultados (satisfactorios y fallido) y un promedio, gracias a la lógica implementada en backend.',
    image: '/images/hackathon.webp',
    github: ['https://github.com/cavargasl/hackathon-periferia-front', 'https://github.com/cavargasl/hackathon-periferia-back'],
    skills: ['TypeScript', 'React.js', 'Nest.js', 'Chakra UI', 'Git', 'GitHub', 'Axios', 'MySQL', 'Type ORM', 'Class Validator'],
  },
  {
    title: 'Comercio electrónico · Amar',
    description:
      'Sitio web de comercio electrónico, donde se pueden comprar productos de belleza y cuidado personal. Se implementa un carrito de compras para proceder a pagar por WhatsApp desplegado en Vercel.',
    image: '/images/amar.webp',
    webSite: 'http://amar-shop.vercel.app/',
    github: ['https://github.com/cavargasl/eCommerce-Amar'],
    skills: ['TypeScript', 'Next.js', 'Git', 'GitHub', 'Chakra UI', 'Axios', 'Redux'],
  },
  {
    title: 'Curso de backend con NodeJS',
    description:
      'Proyecto backend construido en NodeJS, donde se implementa una API REST con Express, se conecta a una base de datos MongoDB con mongoose, implementando Typescript y buenas practicas',
    github: ['https://github.com/cavargasl/course-node'],
    skills: ['TypeScript', 'Node.js', 'Git', 'GitHub', 'ESLint', 'Express.js'],
  },
]
const tempEnProjects = [
  {
    title: 'Portfolio',
    description: 'Personal web portfolio, where you can find information about me, my skills, my work experience and my projects.',
  },
  {
    title: 'E-Commerce · Copiservys',
    description:
      'Online sales platform for printers, accessories, repairs and supplies, also offers technical service at home. Linked to an excel database of products and sold on WhatsApp.',
  },
  {
    title: 'Hackathon frontend · Periferia',
    description:
      'A ReactJs and NestJs application that, through HTTP requests to the backend, can detect patterns of more than four identical letters in an NxN matrix in different directions (diagonal, horizontal, or vertical) to receive the response. Additionally, it logs the queried attempts and calculates their average, providing a complete and efficient solution following best practices. On the front end, queried attempts (successful and unsuccessful) and an average are displayed, thanks to the logic implemented in the backend.',
  },
  {
    title: 'E-Commerce · Amar',
    description:
      'E-commerce website, where beauty and personal care products can be purchased. A shopping cart is implemented to proceed with payment through WhatsApp, deployed on Vercel.',
  },
  {
    title: 'Backend course with NodeJS',
    description:
      'Backend project built in NodeJS, where a REST API is implemented with Express, connected to a MongoDB database using mongoose, implementing Typescript and best practices.',
  },
]

const enProjects: Project[] = esProjects.map((project, idx) => ({
  ...project,
  title: tempEnProjects[idx].title,
  description: tempEnProjects[idx].description,
}))

export const Projects: Record<Language, Project[]> = {
  es: esProjects,
  en: enProjects,
}
