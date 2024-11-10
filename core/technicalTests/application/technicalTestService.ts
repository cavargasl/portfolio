import { sortArray } from '@core/shared/utils/sortArray'
import { sortSkills } from '@core/skills/domain/sortSkills'

import { type TechnicalTest } from '../domain/technicalTest'
import { type TechnicalTestRepository } from '../domain/technicalTestRepository'

export const technicalTestService = (repository: TechnicalTestRepository): TechnicalTestRepository => ({
  getAll: async (params) => {
    const tests = await repository.getAll(params)
    const sortedTests = sortArray<TechnicalTest>(tests, 'order', params.order)
    const sortedSkills = sortedTests.map((test) => ({ ...test, skills: sortSkills(test.skills) }))
    return sortedSkills
  },
})
