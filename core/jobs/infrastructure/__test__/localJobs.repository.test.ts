import { type JobRepository } from '@core/jobs/domain/jobRepository'
import { isTextInLanguage } from '@core/shared/utils/testHelpers'

import { localJobs } from '../localJobs.repository'

describe('localJobs.repository integration test', () => {
  let repository: JobRepository
  beforeEach(() => {
    repository = localJobs()
  })
  describe('getAll should', () => {
    it('return all jobs in English', async () => {
      const result = await repository.getAll({ lang: 'en' })
      expect(result).toBeDefined()
      expect(result.length).toBeGreaterThanOrEqual(1)
      result.forEach((job) => {
        expect(job.skills.length).toBeGreaterThanOrEqual(1)
        const joinDescriptions = job.descriptions.join(' ')
        expect(isTextInLanguage(joinDescriptions, 'en')).toBe(true)
      })
    })
    it('return all jobs in Spanish', async () => {
      const result = await repository.getAll({ lang: 'es' })
      expect(result).toBeDefined()
      expect(result.length).toBeGreaterThanOrEqual(1)
      result.forEach((job) => {
        expect(job.skills.length).toBeGreaterThanOrEqual(1)
        const joinDescriptions = job.descriptions.join(' ')
        expect(isTextInLanguage(joinDescriptions, 'es')).toBe(true)
      })
    })
  })
})
