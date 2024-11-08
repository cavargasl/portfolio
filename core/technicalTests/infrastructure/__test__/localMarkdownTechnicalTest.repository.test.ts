import { isTextInLanguage } from '@core/shared/utils/testHelpers'
import { type TechnicalTestRepository } from '@core/technicalTests/domain/technicalTestRepository'

import { localMarkdownTechnicalTest } from '../localMarkdownTechnicalTest.repository'
import { getDirectoryPath } from '../utils/getDirectoryPath'

jest.mock('../utils/getDirectoryPath', () => ({
  getDirectoryPath: jest.fn(),
}))

describe('localMarkdownTechnicalTest.repository integration test', () => {
  let repository: TechnicalTestRepository
  beforeEach(() => {
    ;(getDirectoryPath as jest.Mock).mockReturnValue('./core/technicalTests/infrastructure/data/markdown')
    repository = localMarkdownTechnicalTest()
  })
  describe('getAll should', () => {
    it('return all technical tests in English', async () => {
      const result = await repository.getAll({ lang: 'en' })
      expect(result).toBeDefined()
      expect(result.length).toBeGreaterThanOrEqual(1)
      result.forEach((test) => {
        expect(isTextInLanguage(test.description, 'en', test.isMarkdown)).toBe(true)
      })
    })
    it('return all technical tests in Spanish', async () => {
      const result = await repository.getAll({ lang: 'es' })
      expect(result).toBeDefined()
      expect(result.length).toBeGreaterThanOrEqual(1)
      result.forEach((test) => {
        expect(isTextInLanguage(test.description, 'es', test.isMarkdown)).toBe(true)
      })
    })
  })
})
