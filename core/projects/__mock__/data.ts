import { type Language } from '@core/locale/domain'

import { skillNameOrdered } from '@core/skills/domain/skill'

import { type Project } from '../domain/project'

const enProjectsFake: Project[] = [
  {
    title: 'Weather Dashboard',
    description: 'A real-time weather dashboard with location-based forecasts, historical data, and a clean, responsive UI.',
    webSite: 'https://weather-dashboard.example.com',
    github: ['https://github.com/fakeuser/weather-dashboard'],
    skills: [skillNameOrdered[2], skillNameOrdered[0], skillNameOrdered[15], skillNameOrdered[7]],
    image: 'https://example.com/images/weather-dashboard.png',
  },
  {
    title: 'Task Manager Pro',
    description: 'A full-featured task management tool to boost productivity, with team collaboration and analytics.',
    github: ['https://github.com/fakeuser/task-manager-pro'],
    skills: ['Next.js', 'Node.js', 'GraphQL', 'CSS', 'TypeScript'],
  },
]

const esProjectsFake: Project[] = [
  {
    title: 'Panel de Clima',
    description:
      'Un panel de clima en tiempo real con pronósticos basados en ubicación, datos históricos y una interfaz limpia y adaptable.',
    webSite: 'https://weather-dashboard.example.com',
    github: ['https://github.com/fakeuser/weather-dashboard'],
    skills: ['React.js', 'TypeScript', 'Tailwind CSS', 'Axios'],
    image: 'https://example.com/images/weather-dashboard.png',
  },
  {
    title: 'Gestor de Tareas Pro',
    description: 'Una herramienta completa de gestión de tareas para aumentar la productividad, con colaboración en equipo y análisis.',
    github: ['https://github.com/fakeuser/task-manager-pro'],
    skills: ['Node.js', 'GraphQL', 'CSS', 'Next.js', 'Jest'],
  },
]
export const mockProjects: Record<Language, Project[]> = {
  en: enProjectsFake,
  es: esProjectsFake,
}
export const enMockSkillsProjectsOrdered = [skillNameOrdered[0], skillNameOrdered[2], skillNameOrdered[7], skillNameOrdered[15]]
