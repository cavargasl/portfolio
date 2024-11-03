import { technicalTestUseCases } from '@core/technicalTests/application/technicalTestUseCases'
import { technicalTestRepository } from '@core/technicalTests/infrastructure/repository'

import { mockSortedSkills, mockTechnicalTests } from './mock/data'
import { httpFakeTechnicalTest } from './mock/httpFakeTechnicalTest'

describe('all integration of technicalTests', () => {
  describe('getAll', () => {
    it('should run all integration of technicalTests.getAll', async () => {
      const result = await technicalTestUseCases(technicalTestRepository(httpFakeTechnicalTest)).getAll({ lang: 'en' })
      expect(result).toBeDefined()
      expect(result).toEqual(expect.arrayContaining(mockTechnicalTests))
    })
    it('should run all integration of technicalTests.getAll with default order', async () => {
      const result = await technicalTestUseCases(technicalTestRepository(httpFakeTechnicalTest)).getAll({ lang: 'es' })
      expect(result).toBeDefined()
      expect(result).toEqual([
        expect.objectContaining({ order: 1 }),
        expect.objectContaining({ order: 2 }),
        expect.objectContaining({ order: 3 }),
      ])
    })
    it('should run all integration of technicalTests.getAll with descending order', async () => {
      const result = await technicalTestUseCases(technicalTestRepository(httpFakeTechnicalTest)).getAll({ lang: 'en', order: 'desc' })
      expect(result).toBeDefined()
      expect(result).toEqual([
        expect.objectContaining({ order: 3 }),
        expect.objectContaining({ order: 2 }),
        expect.objectContaining({ order: 1 }),
      ])
    })
    it('should run all integration of technicalTests.getAll with skills ordered', async () => {
      const result = await technicalTestUseCases(technicalTestRepository(httpFakeTechnicalTest)).getAll({ lang: 'es', order: 'asc' })
      expect(result[0]).toEqual(expect.objectContaining({ order: 1 }))
      expect(result[0].skills).toBeDefined()
      for (const item of result) {
        const skillSorted = mockSortedSkills.find((t) => item.order === t.order)?.skills
        expect(item.skills).toEqual(skillSorted)
      }
    })
  })
})
