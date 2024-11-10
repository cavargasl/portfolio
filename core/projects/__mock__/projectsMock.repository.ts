import { type Language } from '@core/locale/domain'

import { type ProjectRepository } from '../domain/projectRepository'
import { mockProjects } from './data'

export const projectsRepositoryMock: ProjectRepository = {
  getAll: jest.fn().mockImplementation((lang: Language) => Promise.resolve(mockProjects[lang])),
}
