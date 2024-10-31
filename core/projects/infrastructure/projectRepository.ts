import { type Http } from '@core/client/domain/http'
import { sortSkills } from '@core/skills/domain/sortSkills'

import { type Project } from '../domain/project'
import { type ProjectRepository } from '../domain/projectRepository'

export const projectRepository = (client: Http): ProjectRepository => ({
  getAll: async (lang) => {
    const projects = await client.get<Project[]>('/projects', { lang })
    return projects.map((project) => ({
      ...project,
      skills: sortSkills(project.skills),
    }))
  },
})
