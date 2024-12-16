export const skillNameOrdered = [
  // Fundamentos
  'TypeScript',
  'JavaScript',

  // Frameworks y bibliotecas esenciales
  'React.js',
  'Next.js',
  'Astro',
  'Ionic',
  'React Native',
  'Angular',

  // Estructura y estilos
  'HTML',
  'CSS',
  'Tailwind CSS',
  'Shadcn/ui',
  'Styled Components',

  // UI Libraries
  'Material UI',
  'Chakra UI',
  'Radix',
  'Ant Design',

  // APIs y manejo de datos
  'Axios',
  'Zustand',
  'React Query',
  'Redux',

  // Testing
  'Vitest',
  'Jest',
  'React Testing Library',
  'Cypress',

  // Calidad de  código y arquitectura
  'Hexagonal Architecture',
  'Clean Code',
  'ESLint',
  'Prettier',
  'Husky',
  'lint-staged',

  // Herramientas CSS avanzadas
  'SASS',
  'Tailwind-merge',
  'clsx',

  // Herramientas de validación y formularios
  'React Hook Form',
  'Zod',
  'Class Validator',

  // Backend y full-stack
  'Node.js',
  'Firebase',
  'Express.js',
  'Nest.js',
  'tRPC',

  // ORMs y bases de datos
  'Prisma',
  'Drizzle ORM',
  'MongoDB',
  'MySQL',

  // Git y control de versiones
  'Git',
  'GitHub',
  'GitLab',

  // Autenticación y seguridad
  'Auth0',
  'Clerk',
  'Keycloak',

  // Gestión de proyectos
  'Jira Software',
  'Slack',
  'SCRUM',

  // Herramientas de desarrollo y diseño
  'Visual Studio Code',
  'Figma',
  'Postman',

  // Otras herramientas y tecnologías
  'Type ORM',
  'GraphQL',
  'React Router Dom',

  // Otros
  'Atlassian',
] as const

export type SkillName = (typeof skillNameOrdered)[number]
