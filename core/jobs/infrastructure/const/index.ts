import { type Language } from '@core/locale/domain'

import { type JobDTO } from '../dto'

const esJobs: JobDTO[] = [
  {
    position: 'Frontend Developer',
    title: 'DexFreight · Contrato de prácticas',
    date: 'ene. 2021 - jun. 2021 · 6 meses',
    descriptions: [
      'Desarrollo de nuevas funcionalidades en una aplicación React Native.',
      'Optimización de gestión de estado en React Native mediante la migración de Redux a hooks nativos de React, reduciendo el uso de estados globales innecesarios.',
      'Ajustes de estilos y corrección de bugs en una aplicación web desarrollada con Angular, utilizando SASS para optimizar y estandarizar los estilos.',
    ],
    skills: ['SASS', 'TypeScript', 'Redux', 'SCRUM', 'Git', 'Jira Software', 'React Native', 'Angular'],
    indexOrder: 1,
  },
  {
    position: 'Fullstack Developer',
    title: 'Proyecto de grado · Jornada completa',
    date: 'jul. 2021 - abr. 2022 · 10 meses',
    descriptions: [
      'DESARROLLO DE UN APLICATIVO WEB PARA LA EVALUACIÓN DE PROPUESTAS E INFORMES FINALES DE MODALIDADES DE GRADO EN LA UNIVERSIDAD SAN BUENAVENTURA CARTAGENA.',
      'Identificar los requerimientos funcionales y no funcionales con los que debe contar la aplicación Web para gestionar el proceso de evaluación, aplicando SCRUM.',
      'Diseñar la aplicación, utilizando Figma y las bases de UX / UI para hacerla intuitiva y cómoda para su uso.',
      'Implementar la base de datos haciendo uso de los servicios de Firebase.',
      'Desarrollar el frontend con React JS',
    ],
    skills: ['Firebase', 'GitHub', 'Redux', 'React.js', 'SCRUM', 'Git', 'JavaScript'],
    indexOrder: 2,
  },
  {
    position: 'Frontend Developer',
    title: 'CloudAPPi · Jornada completa',
    date: 'abr. 2022 - ene. 2023 · 10 meses',
    descriptions: [
      'Crear aplicación web encargada de procesos de selección de profesionales de la tecnología.',
      'Manejo de usuario utilizando la tecnología de Keycloack framework.',
      'Consumo de REST API con React Query y Axios al backend de Django implementando adapters.',
      'Diseños de Figma convertidos a código mediante el concepto pixel perfect.',
      'Migración de proyecto de React a Next 12 para optimizar el SEO.',
      'Teletrabajo mediante la metodología SCRUM.',
    ],
    skills: ['Keycloak', 'TypeScript', 'Next.js', 'Chakra UI', 'Redux', 'React.js', 'SCRUM', 'Git', 'GitLab'],
    indexOrder: 3,
  },
  {
    position: 'Fullstack Developer',
    title: 'Big Safe · Profesional independiente',
    date: 'jul. 2023 · 1 mes',
    descriptions: [
      'E - Commerce de ventas de servicios de impresión en Next 13 con sus nuevas funcionalidades.',
      'Componentes reutilizable hechos con Tailwind, CVA y clsx frameworks.',
      'Manejo de usuarios con Clerk framework.',
      'Estado global con Redux toolkit para carrito de compra.',
      'Implementación de Firebase Database y Firebase Storage.',
    ],
    skills: ['Clerk', 'TypeScript', 'Next.js', 'Tailwind CSS', 'Redux', 'Firebase', 'Git', 'GitHub', 'Radix'],
    indexOrder: 4,
  },
  {
    position: 'Frontend Developer',
    title: 'CS3 Comercializadora de Software, Servicios y Suministros S.A.S · Jornada completa',
    date: 'nov. 2023 - feb. 2024 · 4 meses',
    descriptions: [
      'Implementación de buenas prácticas basado en los principios SOLID en proyecto de Next.js donde se redujo el tiempo de implementar nuevas funcionalidades en un 30%.',
      'Implementación en el proyecto de ESLint y Prettier, para mantener sincronía entre los desarrolladores que conlleva a una mejor legibilidad de código y fácil entendimiento.',
      'Consumo de servicios brindados por backend mediante GraphQL y Codegen.',
      'Refactorización de componentes para facilitar el uso y la escalabilidad. Utilizando Tailwind CSS, Tailwind Merge y Class Variant Authority.',
    ],
    skills: ['Zustand', 'TypeScript', 'Next.js', 'Tailwind CSS', 'Git', 'Atlassian', 'GraphQL'],
    indexOrder: 5,
  },
]
const enJobs: JobDTO[] = [
  {
    position: 'Frontend Developer',
    title: 'DexFreight · Internship contract',
    date: 'jan. 2021 - jun. 2021 · 6 months',
    descriptions: [
      'Developed new features in a React Native application.',
      'Optimized state management in React Native by migrating from Redux to native React hooks, reducing unnecessary global states.',
      'Style adjustments and bug fixes in a web application built with Angular, utilizing SASS to enhance and standardize styles.',
    ],
    skills: ['SASS', 'TypeScript', 'Redux', 'SCRUM', 'Git', 'Jira Software', 'React Native', 'Angular'],
    indexOrder: 1,
  },
  {
    position: 'Fullstack Developer',
    title: 'Degree project · Full time',
    date: 'jul. 2021 - apr. 2022 · 10 months',
    descriptions: [
      'DEVELOPMENT OF A WEB APPLICATION FOR THE EVALUATION OF PROPOSALS AND FINAL REPORTS OF DEGREE MODALITIES AT THE SAN BUENAVENTURA CARTAGENA UNIVERSITY.',
      'Identify the functional and non-functional requirements that the Web application must have to manage the evaluation process, applying SCRUM.',
      'Design the application, using Figma and the UX / UI bases to make it intuitive and comfortable for use.',
      'Implement the database using Firebase services.',
      'Develop the frontend with React JS',
    ],
    skills: ['Firebase', 'GitHub', 'Redux', 'React.js', 'SCRUM', 'Git', 'JavaScript'],
    indexOrder: 2,
  },
  {
    position: 'Frontend Developer',
    title: 'CloudAPPi · Full time',
    date: 'apr. 2022 - jan. 2023 · 10 months',
    descriptions: [
      'Create web application in charge of selection processes of technology professionals.',
      'User management using the Keycloack framework.',
      'Consumption of REST API with React Query and Axios to the Django backend implementing adapters.',
      'Figma designs converted to code using the pixel perfect concept.',
      'Migration of React project to Next 12 to optimize SEO.',
      'Teleworking using the SCRUM methodology.',
    ],
    skills: ['Keycloak', 'TypeScript', 'Next.js', 'Chakra UI', 'Redux', 'React.js', 'SCRUM', 'Git', 'GitLab'],
    indexOrder: 3,
  },
  {
    position: 'Fullstack Developer',
    title: 'Big Safe · Freelance',
    date: 'jul. 2023 · 1 month',
    descriptions: [
      'E - Commerce of sales of printing services in Next 13 with its new functionalities.',
      'Reusable components made with Tailwind, CVA and clsx frameworks.',
      'User management with Clerk framework.',
      'Global state with Redux toolkit for shopping cart.',
      'Implementation of Firebase Database and Firebase Storage.',
    ],
    skills: ['Clerk', 'TypeScript', 'Next.js', 'Tailwind CSS', 'Redux', 'Firebase', 'Git', 'GitHub', 'Radix'],
    indexOrder: 4,
  },

  {
    position: 'Frontend Developer',
    title: 'CS3 Comercializadora de Software, Servicios y Suministros S.A.S · Full time',
    date: 'nov. 2023 - feb. 2024 · 4 months',
    descriptions: [
      'Implementation of best practices based on SOLID principles in a Next.js project, resulting in a 30% reduction in the time needed to implement new features.',
      'Implementation of ESLint and Prettier in the project to maintain synchronization among developers, leading to better code readability and easier understanding.',
      'Consumption of services provided by the backend using GraphQL and Codegen.',
      'Refactoring of components to facilitate usability and scalability using Tailwind CSS, Tailwind Merge, and Class Variant Authority.',
    ],
    skills: ['Zustand', 'TypeScript', 'Next.js', 'Tailwind CSS', 'Git', 'Atlassian', 'GraphQL'],
    indexOrder: 5,
  },
]

export const Jobs: Record<Language, JobDTO[]> = {
  es: esJobs,
  en: enJobs,
}
