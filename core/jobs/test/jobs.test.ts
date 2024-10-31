import { type Language } from '@core/locale/domain'

import { jobsServices } from '../application/jobService'
import { sortJobs } from '../domain/jobSort'
import { httpFakeJobs } from '../infrastructure/instances/httpFakeJobs'
import { jobRepository } from '../infrastructure/jobRepository'
import { JobEnFakeDisordered, JobEnFakeOrdered, JobsFake } from '../mock'

describe('jobs', () => {
  describe('test all domain functions', () => {
    it('should sortJobs', () => {
      const sortedJobs = sortJobs(JobEnFakeDisordered)
      expect(sortedJobs).toBeDefined()
      expect(sortedJobs.length).toEqual(JobEnFakeOrdered.length)
      expect(sortedJobs[0].order).toEqual(3)
      expect(sortedJobs[1].order).toEqual(2)
      expect(sortedJobs[2].order).toEqual(1)
      const sortedJobsAsc = sortJobs(JobEnFakeDisordered, 'asc')
      expect(sortedJobsAsc[0].order).toEqual(1)
      expect(sortedJobsAsc[1].order).toEqual(2)
      expect(sortedJobsAsc[2].order).toEqual(3)
    })
  })
  describe('Jobs services getAll', () => {
    it('should return all jobs', async () => {
      const languages = ['en', 'es'] satisfies Language[]
      for (const lang of languages) {
        const jobs = await jobsServices(jobRepository(httpFakeJobs)).getAll(lang)
        expect(jobs).toBeDefined()
        expect(jobs.length).toEqual(JobsFake[lang].length)
        expect(jobs[0].skills).toBeDefined()
        expect(jobs[0].skills.length).toEqual(JobsFake[lang][0].skills.length)
      }
    })
    it('should return all jobs ordered descending', async () => {
      const jobs = await jobsServices(jobRepository(httpFakeJobs)).getAll('en')
      expect(jobs).toBeDefined()
      expect(jobs[0].order).toEqual(JobEnFakeOrdered.find((job) => job.order === 3)?.order)
    })
    it('should return all jobs ordered ascending', async () => {
      const jobs = await jobsServices(jobRepository(httpFakeJobs)).getAll('en', 'asc')
      expect(jobs).toBeDefined()
      expect(jobs[0].order).toEqual(JobEnFakeOrdered.find((job) => job.order === 1)?.order)
    })
    it('should return jobs with ordered skills', async () => {
      const jobs = await jobsServices(jobRepository(httpFakeJobs)).getAll('en', 'desc')
      expect(jobs[0].skills).toBeDefined()
      expect(jobs[0].skills).toEqual(JobEnFakeOrdered.find((job) => job.order === 3)?.skills)
    })
  })
})
