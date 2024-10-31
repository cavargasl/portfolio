import { type Language } from '@core/locale/domain'

import { projectsServices } from '../application/projectService'
import { httpFakeProjects } from '../infrastructure/instances/httpFakeProjects'
import { projectRepository } from '../infrastructure/projectRepository'
import { ProjectsFake, enSkillsProjectsFakeOrdered } from '../mock'

describe('Projects', () => {
  describe('Projects services getAll', () => {
    it('should return all projects', async () => {
      const languages = ['en', 'es'] satisfies Language[]
      for (const lang of languages) {
        const projects = await projectsServices(projectRepository(httpFakeProjects)).getAll(lang)
        expect(projects).toBeDefined()
        expect(projects).toEqual(ProjectsFake[lang])
      }
    })
    it('should return ordered skills', async () => {
      const projects = await projectsServices(projectRepository(httpFakeProjects)).getAll('en')
      expect(projects[0].skills).toBeDefined()
      expect(projects[0].skills).toEqual(enSkillsProjectsFakeOrdered)
    })
  })
})
