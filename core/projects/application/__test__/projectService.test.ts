import { type Language } from '@core/locale/domain'

import { enMockSkillsProjectsOrdered, mockProjects } from '@core/projects/__mock__/data'
import { projectsRepositoryMock } from '@core/projects/__mock__/projectsMock.repository'
import { type ProjectRepository } from '@core/projects/domain/projectRepository'

import { projectsServices } from '../projectService'

describe('Projects services', () => {
  let service: ProjectRepository

  beforeEach(() => {
    service = projectsServices(projectsRepositoryMock)
  })
  afterEach(() => {
    jest.clearAllMocks()
  })

  describe('getAll should', () => {
    it('return all projects', async () => {
      const languages = ['en', 'es'] satisfies Language[]
      for (const lang of languages) {
        const projects = await service.getAll(lang)
        expect(projects).toBeDefined()
        expect(projects.length).toEqual(mockProjects[lang].length)
        projects.forEach((project, index) => {
          expect(project).toEqual(
            expect.objectContaining({
              ...mockProjects[lang][index],
              skills: expect.arrayContaining(mockProjects[lang][index].skills),
            })
          )
        })
      }
    })
    it('return ordered skills', async () => {
      const projects = await service.getAll('en')
      const skills = projects[0].skills
      expect(skills).toBeDefined()
      expect(skills).toEqual(enMockSkillsProjectsOrdered)
    })
  })
})
