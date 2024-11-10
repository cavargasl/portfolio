import { type Language } from '@core/locale/domain'

import { type SkillName, skillNameOrdered } from '@core/skills/domain/skill'

import { type Job } from '../domain/job'

const skillsJobsFake: Record<string, SkillName[]> = {
  '1': [skillNameOrdered[13], skillNameOrdered[2], skillNameOrdered[0]],
  '2': [skillNameOrdered[1], skillNameOrdered[2], skillNameOrdered[5]],
  '3': [skillNameOrdered[10], skillNameOrdered[11], skillNameOrdered[5]],
}

const enJobsFake: Job[] = [
  {
    position: 'Desarrollador Frontend',
    title: 'Desarrollo Web',
    date: '2023-05-12',
    descriptions: [
      'Desarrollé aplicaciones web responsivas utilizando React y TypeScript.',
      'Colaboré con el equipo de backend para integrar APIs RESTful.',
      'Implementé principios de diseño para una mejor experiencia de usuario.',
    ],
    skills: skillsJobsFake['3'],
    order: 3,
  },
  {
    position: 'Desarrollador Full Stack',
    title: 'Desarrollo Web Full Stack',
    date: '2021-06-15',
    descriptions: [
      'Construí aplicaciones web completas con React y Node.js.',
      'Optimicé el rendimiento tanto en frontend como en backend.',
      'Colaboré con equipos para asegurar el éxito del proyecto.',
    ],
    skills: skillsJobsFake['1'],
    order: 1,
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
    skills: skillsJobsFake['2'],
    order: 2,
  },
]

const tempEsJobsFake: Omit<Job, 'date' | 'skills'>[] = [
  {
    position: 'Full Stack Developer',
    title: 'Full Stack Web Development',
    descriptions: [
      'Built end-to-end web applications with React and Node.js.',
      'Optimized performance for both frontend and backend.',
      'Collaborated across teams to ensure project success.',
    ],
    order: 1,
  },
  {
    position: 'Frontend Developer',
    title: 'Web Development',
    descriptions: [
      'Developed responsive web applications using React and TypeScript.',
      'Collaborated with backend team to integrate RESTful APIs.',
      'Implemented design principles for a better user experience.',
    ],
    order: 3,
  },
  {
    position: 'Backend Developer',
    title: 'API Development',
    descriptions: [
      'Designed and implemented RESTful APIs using Node.js.',
      'Integrated database solutions for efficient data handling.',
      'Ensured API security and scalability.',
    ],
    order: 2,
  },
]

const esJobsFake: Job[] = enJobsFake.map((job) => ({
  ...job,
  position: tempEsJobsFake.find((tempJob) => tempJob.order === job.order)?.position || job.position,
  title: tempEsJobsFake.find((tempJob) => tempJob.order === job.order)?.title || job.title,
  descriptions: tempEsJobsFake.find((tempJob) => tempJob.order === job.order)?.descriptions || job.descriptions,
}))

export const mockJobs: Record<Language, Job[]> = {
  en: enJobsFake,
  es: esJobsFake,
}
export const skillsJobsOrdered: Record<string, SkillName[]> = {
  '1': [skillNameOrdered[0], skillNameOrdered[2], skillNameOrdered[13]],
  '2': [skillNameOrdered[1], skillNameOrdered[2], skillNameOrdered[5]],
  '3': [skillNameOrdered[5], skillNameOrdered[10], skillNameOrdered[11]],
}
