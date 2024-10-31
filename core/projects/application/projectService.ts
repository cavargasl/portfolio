import { type Language } from '@core/locale/domain'

import { type ProjectRepository } from '../domain/projectRepository'

export const projectsServices = (repository: ProjectRepository): ProjectRepository => ({
  getAll: (lang: Language) => repository.getAll(lang),
})
