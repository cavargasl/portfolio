import { type Language } from '@core/locale/domain'

import { sortSkills } from '@core/skills/domain/sortSkills'

import { type ProjectRepository } from '../domain/projectRepository'

export const projectsServices = (repository: ProjectRepository): ProjectRepository => ({
  getAll: async (lang: Language) => {
    const projects = await repository.getAll(lang)
    const sortedSkills = projects.map((test) => ({ ...test, skills: sortSkills(test.skills) }))
    return sortedSkills
  },
})
