import { isTextInLanguage } from '@core/shared/utils/testHelpers'
import { type TechnicalTestRepository } from '@core/technicalTests/domain/technicalTestRepository'

import { localTechnicalTest } from '../localTechnicalTest.repository'

describe('localTechnicalTest.repository integration test', () => {
  let repository: TechnicalTestRepository
  beforeEach(() => {
    repository = localTechnicalTest()
  })
  describe('getAll should', () => {
    it('return all technical tests in English', async () => {
      const result = await repository.getAll({ lang: 'en' })
      expect(result).toBeDefined()
      expect(result.length).toBeGreaterThanOrEqual(1)
      result.forEach((test) => {
        expect(isTextInLanguage(test.description, 'en')).toBe(true)
      })
    })
    it('return all technical tests in Spanish', async () => {
      const result = await repository.getAll({ lang: 'es' })
      expect(result).toBeDefined()
      expect(result.length).toBeGreaterThanOrEqual(1)
      result.forEach((test) => {
        expect(isTextInLanguage(test.description, 'es')).toBe(true)
      })
    })
  })
})
