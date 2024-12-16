import type { SkillName } from '@core/skills/domain/skill'
import {
  Angular,
  AntDesign,
  Atlassian,
  Auth0,
  Axios,
  CSS,
  ChakraUI,
  Clerk,
  Cypress,
  Drizzle,
  ESLint,
  Express,
  Figma,
  Firebase,
  Git,
  GitHub,
  GitLab,
  GraphQl,
  Html,
  JavaScript,
  Jest,
  Jira,
  MUI,
  MongoDB,
  MySQL,
  Nest,
  Next,
  Node,
  Postman,
  Prettier,
  Prisma,
  Radix,
  React,
  ReactHookForm,
  ReactQuery,
  ReactTesting,
  Redux,
  Sass,
  Slack,
  StyledComponent,
  TRPC,
  Tailwind,
  TypeScript,
  VSCode,
  Vitest,
  Zod,
  Astro,
  Ionic
} from '@icons/brand'

interface SkillsObject {
  title: string
  colSpan?: string
  justifyCenter?: string
  items: {
    title: SkillName
    icon: React.FC
  }[]
}

export const skillsList: SkillsObject[] = [
  {
    title: 'Languages',
    colSpan: 'sm:col-span-2',
    justifyCenter: 'justify-center',
    items: [
      {
        title: 'JavaScript',
        icon: JavaScript,
      },
      {
        title: 'TypeScript',
        icon: TypeScript,
      },
      {
        title: 'HTML',
        icon: Html,
      },
      {
        title: 'CSS',
        icon: CSS,
      },
    ],
  },
  {
    title: 'Frontend',
    colSpan: 'sm:col-span-2',
    items: [
      {
        title: 'Next.js',
        icon: Next,
      },
      {
        title: 'React.js',
        icon: React,
      },
      {
        title: 'Astro',
        icon: Astro,
      },
      {
        title: 'Ionic',
        icon: Ionic,
      },
      {
        title: 'Angular',
        icon: Angular,
      },
      {
        title: 'Tailwind CSS',
        icon: Tailwind,
      },
      {
        title: 'SASS',
        icon: Sass,
      },
      {
        title: 'Styled Components',
        icon: StyledComponent,
      },
      {
        title: 'Material UI',
        icon: MUI,
      },
      {
        title: 'Chakra UI',
        icon: ChakraUI,
      },
      {
        title: 'Radix',
        icon: Radix,
      },
      {
        title: 'Ant Design',
        icon: AntDesign,
      },
    ],
  },
  {
    title: 'Backend',
    items: [
      {
        title: 'Node.js',
        icon: Node,
      },
      {
        title: 'Express.js',
        icon: Express,
      },
      {
        title: 'Nest.js',
        icon: Nest,
      },
    ],
  },
  {
    title: 'ORM',
    items: [
      {
        title: 'tRPC',
        icon: TRPC,
      },
      {
        title: 'Drizzle ORM',
        icon: Drizzle,
      },
      {
        title: 'Prisma',
        icon: Prisma,
      },
    ],
  },
  {
    title: 'Database & Cache',
    colSpan: 'sm:col-span-2',
    items: [
      {
        title: 'Firebase',
        icon: Firebase,
      },
      {
        title: 'MongoDB',
        icon: MongoDB,
      },
      {
        title: 'MySQL',
        icon: MySQL,
      },
      {
        title: 'React Query',
        icon: ReactQuery,
      },
      {
        title: 'Redux',
        icon: Redux,
      },
      {
        title: 'Axios',
        icon: Axios,
      },
      {
        title: 'GraphQL',
        icon: GraphQl,
      },
    ],
  },
  {
    title: 'Version Control',
    items: [
      {
        title: 'Git',
        icon: Git,
      },
      {
        title: 'GitHub',
        icon: GitHub,
      },
      {
        title: 'GitLab',
        icon: GitLab,
      },
    ],
  },
  {
    title: 'Testing',
    items: [
      {
        title: 'Vitest',
        icon: Vitest,
      },
      {
        title: 'Jest',
        icon: Jest,
      },
      {
        title: 'React Testing Library',
        icon: ReactTesting,
      },
      {
        title: 'Cypress',
        icon: Cypress,
      },
    ],
  },
  {
    title: 'Others',
    colSpan: 'sm:col-span-2',
    items: [
      {
        title: 'Clerk',
        icon: Clerk,
      },
      {
        title: 'Zod',
        icon: Zod,
      },
      {
        title: 'React Hook Form',
        icon: ReactHookForm,
      },
      {
        title: 'ESLint',
        icon: ESLint,
      },
      {
        title: 'Auth0',
        icon: Auth0,
      },
      {
        title: 'Prettier',
        icon: Prettier,
      },
      {
        title: 'Postman',
        icon: Postman,
      },
      {
        title: 'Visual Studio Code',
        icon: VSCode,
      },
      {
        title: 'Jira Software',
        icon: Jira,
      },
      {
        title: 'Atlassian',
        icon: Atlassian,
      },
      {
        title: 'Slack',
        icon: Slack,
      },
      {
        title: 'Figma',
        icon: Figma,
      },
    ],
  },
]