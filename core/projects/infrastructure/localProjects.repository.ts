import { type ProjectRepository } from '../domain/projectRepository'
import { Projects } from './data'

export const localProjects = (): ProjectRepository => ({
  getAll: async (lang) => {
    return Promise.resolve(Projects[lang])
  },
})
