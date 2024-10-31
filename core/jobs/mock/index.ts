import { type Language } from '@core/locale/domain'

import { skillNameOrdered } from '@core/skills/domain/skill'

import { type Job } from '../domain/job'
import { type JobDTO } from '../infrastructure/dto'

const esJobs: JobDTO[] = [
  {
    position: 'Desarrollador Frontend',
    title: 'Desarrollo Web',
    date: '2023-05-12',
    descriptions: [
      'Desarrollé aplicaciones web responsivas utilizando React y TypeScript.',
      'Colaboré con el equipo de backend para integrar APIs RESTful.',
      'Implementé principios de diseño para una mejor experiencia de usuario.',
    ],
    skills: ['JavaScript', 'React.js', 'CSS'],
    indexOrder: 1,
  },
  {
    position: 'Desarrollador Full Stack',
    title: 'Desarrollo Web Full Stack',
    date: '2021-06-15',
    descriptions: [
      'Construí aplicaciones web completas con React y Node.js.',
      'Optimizé el rendimiento tanto en frontend como en backend.',
      'Colaboré con equipos para asegurar el éxito del proyecto.',
    ],
    skills: ['React.js', 'Node.js', 'TypeScript'],
    indexOrder: 3,
  },
  {
    position: 'Desarrollador Backend',
    title: 'Desarrollo de API',
    date: '2022-10-08',
    descriptions: [
      'Diseñé e implementé APIs RESTful utilizando Node.js.',
      'Integré soluciones de bases de datos para un manejo eficiente de datos.',
      'Aseguré la seguridad y escalabilidad de las APIs.',
    ],
    skills: ['Node.js', 'JavaScript', 'TypeScript'],
    indexOrder: 2,
  },
]

const enJobs: JobDTO[] = [
  {
    position: 'Full Stack Developer',
    title: 'Full Stack Web Development',
    date: '2021-06-15',
    descriptions: [
      'Built end-to-end web applications with React and Node.js.',
      'Optimized performance for both frontend and backend.',
      'Collaborated across teams to ensure project success.',
    ],
    skills: [skillNameOrdered[13], skillNameOrdered[2], skillNameOrdered[0]],
    indexOrder: 3,
  },
  {
    position: 'Frontend Developer',
    title: 'Web Development',
    date: '2023-05-12',
    descriptions: [
      'Developed responsive web applications using React and TypeScript.',
      'Collaborated with backend team to integrate RESTful APIs.',
      'Implemented design principles for a better user experience.',
    ],
    skills: ['JavaScript', 'React.js', 'CSS'],
    indexOrder: 1,
  },
  {
    position: 'Backend Developer',
    title: 'API Development',
    date: '2022-10-08',
    descriptions: [
      'Designed and implemented RESTful APIs using Node.js.',
      'Integrated database solutions for efficient data handling.',
      'Ensured API security and scalability.',
    ],
    skills: ['Node.js', 'JavaScript', 'TypeScript'],
    indexOrder: 2,
  },
]

export const JobsFake: Record<Language, JobDTO[]> = {
  es: esJobs,
  en: enJobs,
}

export const JobEnFakeDisordered: Job[] = [
  {
    position: 'Full Stack Developer',
    title: 'Full Stack Web Development',
    date: '2021-06-15',
    descriptions: [
      'Built end-to-end web applications with React and Node.js.',
      'Optimized performance for both frontend and backend.',
      'Collaborated across teams to ensure project success.',
    ],
    skills: ['React.js', 'Node.js', 'TypeScript'],
    order: 3,
  },
  {
    position: 'Frontend Developer',
    title: 'Web Development',
    date: '2023-05-12',
    descriptions: [
      'Developed responsive web applications using React and TypeScript.',
      'Collaborated with backend team to integrate RESTful APIs.',
      'Implemented design principles for a better user experience.',
    ],
    skills: ['JavaScript', 'React.js', 'CSS'],
    order: 1,
  },
  {
    position: 'Backend Developer',
    title: 'API Development',
    date: '2022-10-08',
    descriptions: [
      'Designed and implemented RESTful APIs using Node.js.',
      'Integrated database solutions for efficient data handling.',
      'Ensured API security and scalability.',
    ],
    skills: ['Node.js', 'JavaScript', 'TypeScript'],
    order: 2,
  },
]
export const JobEnFakeOrdered: Job[] = [
  {
    position: 'Full Stack Developer',
    title: 'Full Stack Web Development',
    date: '2021-06-15',
    descriptions: [
      'Built end-to-end web applications with React and Node.js.',
      'Optimized performance for both frontend and backend.',
      'Collaborated across teams to ensure project success.',
    ],
    skills: [skillNameOrdered[0], skillNameOrdered[2], skillNameOrdered[13]],
    order: 3,
  },
  {
    position: 'Backend Developer',
    title: 'API Development',
    date: '2022-10-08',
    descriptions: [
      'Designed and implemented RESTful APIs using Node.js.',
      'Integrated database solutions for efficient data handling.',
      'Ensured API security and scalability.',
    ],
    skills: ['TypeScript', 'JavaScript', 'Node.js'],
    order: 2,
  },
  {
    position: 'Frontend Developer',
    title: 'Web Development',
    date: '2023-05-12',
    descriptions: [
      'Developed responsive web applications using React and TypeScript.',
      'Collaborated with backend team to integrate RESTful APIs.',
      'Implemented design principles for a better user experience.',
    ],
    skills: ['JavaScript', 'React.js', 'CSS'],
    order: 1,
  },
]
