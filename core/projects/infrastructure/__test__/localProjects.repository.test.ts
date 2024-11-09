import { type ProjectRepository } from '@core/projects/domain/projectRepository'
import { isTextInLanguage } from '@core/shared/utils/testHelpers'

import { localProjects } from '../localProjects.repository'

describe('localProjects.repository integration test', () => {
  let repository: ProjectRepository
  beforeEach(() => {
    repository = localProjects()
  })
  describe('getAll should', () => {
    it('return all projects in English', async () => {
      const result = await repository.getAll('en')
      expect(result).toBeDefined()
      expect(result.length).toBeGreaterThanOrEqual(1)
      result.forEach((test) => {
        expect(isTextInLanguage(test.description, 'en')).toBe(true)
      })
    })
    it('return all projects in Spanish', async () => {
      const result = await repository.getAll('es')
      expect(result).toBeDefined()
      expect(result.length).toBeGreaterThanOrEqual(1)
      result.forEach((test) => {
        expect(isTextInLanguage(test.description, 'es')).toBe(true)
      })
    })
  })
})
