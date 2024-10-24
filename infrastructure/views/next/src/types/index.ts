export type IdsNav = 'aboutMe' | 'projects' | 'experience' | 'education' | 'skills' | 'contact' | 'technicalTest'
interface NavItem {
  id: IdsNav
  title: string
  href?: string
  disabled?: boolean
  external?: boolean
}

export type SidebarNavItem = NavItem

export type SkillName =
  | 'JavaScript'
  | 'TypeScript'
  | 'Next.js'
  | 'React.js'
  | 'HTML'
  | 'CSS'
  | 'Tailwind CSS'
  | 'Styled Components'
  | 'Material UI'
  | 'Chakra UI'
  | 'Radix'
  | 'Node.js'
  | 'Express.js'
  | 'Nest.js'
  | 'tRPC'
  | 'Drizzle ORM'
  | 'Prisma'
  | 'Firebase'
  | 'MongoDB'
  | 'MySQL'
  | 'React Query'
  | 'Redux'
  | 'Axios'
  | 'Git'
  | 'GitHub'
  | 'GitLab'
  | 'Vitest'
  | 'Jest'
  | 'React Testing Library'
  | 'Cypress'
  | 'Clerk'
  | 'Figma'
  | 'Postman'
  | 'Visual Studio Code'
  | 'Jira Software'
  | 'Slack'
  | 'Keycloak'
  | 'SCRUM'
  | 'SASS'
  | 'React Native'
  | 'Zod'
  | 'React Hook Form'
  | 'Type ORM'
  | 'Class Validator'
  | 'ESLint'
  | 'Prettier'
  | 'Tailwind-merge'
  | 'clsx'
  | 'Auth0'
  | 'Ant Design'
  | 'Atlassian'
  | 'React Router Dom'
  | 'GraphQL'
  | 'Zustand'

export type Cards = {
  title: string
  description: React.ReactNode
  webSite?: string
  github: Array<string>
  skills: Array<SkillName>
}
