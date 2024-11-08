import { mockSortedSkills, mockTechnicalTests } from '@core/technicalTests/__mock__/data'
import { technicalTestRepositoryMock } from '@core/technicalTests/__mock__/repositoryMock'
import { type TechnicalTestRepository } from '@core/technicalTests/domain/technicalTestRepository'

import { technicalTestService } from '../technicalTestService'

describe('technicalTest Services', () => {
  let service: TechnicalTestRepository
  beforeEach(() => {
    service = technicalTestService(technicalTestRepositoryMock)
  })
  afterEach(() => {
    jest.clearAllMocks()
  })

  describe('getAll should', () => {
    it('return all technical tests', async () => {
      const result = await service.getAll({ lang: 'en' })
      expect(result).toHaveLength(mockTechnicalTests.length)
      expect(result).toEqual(expect.arrayContaining(mockTechnicalTests))
    })
    it('return sorted technical tests by order default ascending', async () => {
      const result = await service.getAll({ lang: 'en' })
      expect(technicalTestRepositoryMock.getAll).toHaveBeenCalledTimes(1)
      expect(technicalTestRepositoryMock.getAll).toHaveBeenCalledWith({ lang: 'en' })
      expect(result).toEqual([
        expect.objectContaining({ order: 1 }),
        expect.objectContaining({ order: 2 }),
        expect.objectContaining({ order: 3 }),
      ])
    })
    it('return sorted technical tests by order descending', async () => {
      const result = await service.getAll({ lang: 'en', order: 'desc' })
      expect(technicalTestRepositoryMock.getAll).toHaveBeenCalledTimes(1)
      expect(technicalTestRepositoryMock.getAll).toHaveBeenCalledWith({ lang: 'en', order: 'desc' })
      expect(result).toEqual([
        expect.objectContaining({ order: 3 }),
        expect.objectContaining({ order: 2 }),
        expect.objectContaining({ order: 1 }),
      ])
    })
    it('return technical tests with ordered skills', async () => {
      const result = await service.getAll({ lang: 'en', order: 'asc' })
      expect(result[0]).toEqual(expect.objectContaining({ order: 1 }))
      expect(result[0].skills).toBeDefined()
      for (const item of result) {
        const skillSorted = mockSortedSkills.find((t) => item.order === t.order)?.skills
        expect(item.skills).toEqual(skillSorted)
      }
    })
  })
})
