export type Job = Readonly<{
  position: string
  title: string
  date: string
  descriptions: string[]
  skills: SkillName[]
  order: number
}>

export const skillNameOrdered = [
  // Fundamentos
  'TypeScript',
  'JavaScript',

  // Frameworks y bibliotecas esenciales
  'React.js',
  'Next.js',
  'React Native',

  // Estructura y estilos
  'HTML',
  'CSS',
  'Tailwind CSS',
  'Styled Components',

  // UI Libraries
  'Material UI',
  'Chakra UI',
  'Radix',
  'Ant Design',

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

  // APIs y manejo de datos
  'Axios',
  'Zustand',
  'React Query',
  'Redux',

  // Git y control de versiones
  'Git',
  'GitHub',
  'GitLab',

  // Testing
  'Vitest',
  'Jest',
  'React Testing Library',
  'Cypress',

  // Autenticación y seguridad
  'Auth0',
  'Clerk',
  'Keycloak',

  // Gestión de proyectos
  'Jira Software',
  'Slack',
  'SCRUM',

  // Herramientas CSS avanzadas
  'SASS',
  'Tailwind-merge',
  'clsx',

  // Herramientas de validación y formularios
  'React Hook Form',
  'Zod',
  'Class Validator',

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
  'Prettier',
  'ESLint',
] as const

export type SkillName = (typeof skillNameOrdered)[number]
