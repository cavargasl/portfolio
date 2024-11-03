import { technicalTestUseCases } from '@core/technicalTests/application/technicalTestUseCases'

import { mockSortedSkills, mockTechnicalTests } from '../mock/data'
import { technicalTestRepositoryMock } from '../mock/repositoryMock'

describe('technicalTestUseCases', () => {
  it('should return technical tests', async () => {
    const result = await technicalTestUseCases(technicalTestRepositoryMock).getAll({ lang: 'en' })
    expect(result).toEqual(expect.arrayContaining(mockTechnicalTests))
  })
  it('should return sorted technical tests by order default ascending', async () => {
    const result = await technicalTestUseCases(technicalTestRepositoryMock).getAll({ lang: 'en' })

    expect(result).toEqual([
      expect.objectContaining({ order: 1 }),
      expect.objectContaining({ order: 2 }),
      expect.objectContaining({ order: 3 }),
    ])
  })
  it('should return sorted technical tests by order descending', async () => {
    const result = await technicalTestUseCases(technicalTestRepositoryMock).getAll({ lang: 'en', order: 'desc' })

    expect(result).toEqual([
      expect.objectContaining({ order: 3 }),
      expect.objectContaining({ order: 2 }),
      expect.objectContaining({ order: 1 }),
    ])
  })
  it('should return technical tests with ordered skills', async () => {
    const result = await technicalTestUseCases(technicalTestRepositoryMock).getAll({ lang: 'en', order: 'asc' })
    expect(result[0]).toEqual(expect.objectContaining({ order: 1 }))
    expect(result[0].skills).toBeDefined()
    for (const item of result) {
      const skillSorted = mockSortedSkills.find((t) => item.order === t.order)?.skills
      expect(item.skills).toEqual(skillSorted)
    }
  })
})
