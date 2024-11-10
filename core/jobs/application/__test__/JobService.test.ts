import { mockJobs, skillsJobsOrdered } from '@core/jobs/__mock__/data'
import { jobsRepositoryMock } from '@core/jobs/__mock__/jobMock.repository'
import { type JobRepository } from '@core/jobs/domain/jobRepository'

import { jobsServices } from '../jobService'

describe('Jobs services', () => {
  let service: JobRepository

  beforeEach(() => {
    service = jobsServices(jobsRepositoryMock)
  })
  afterEach(() => {
    jest.clearAllMocks()
  })

  describe('getAll should', () => {
    it('return all jobs', async () => {
      const jobs = await service.getAll({ lang: 'en' })
      expect(jobs).toBeDefined()
      expect(jobs.length).toEqual(mockJobs.en.length)
      jobs.forEach((job, index) => {
        const findJob = mockJobs.en.find((j) => j.order === job.order)
        if (!findJob) throw new Error('Job not found, verify mockJobs data')
        expect(job).toEqual(
          expect.objectContaining({
            ...mockJobs.en[index],
            skills: expect.arrayContaining(findJob.skills),
          })
        )
      })
    })
    it('return ordered jobs by default order descending', async () => {
      const jobs = await service.getAll({ lang: 'en' })
      expect(jobsRepositoryMock.getAll).toHaveBeenCalledTimes(1)
      expect(jobsRepositoryMock.getAll).toHaveBeenCalledWith({ lang: 'en' })
      expect(jobs[0]).toEqual(expect.objectContaining({ order: 3 }))
      expect(jobs[1]).toEqual(expect.objectContaining({ order: 2 }))
      expect(jobs[2]).toEqual(expect.objectContaining({ order: 1 }))
    })
    it('return ordered jobs by order ascending', async () => {
      const jobs = await service.getAll({ lang: 'es', order: 'asc' })
      expect(jobsRepositoryMock.getAll).toHaveBeenCalledTimes(1)
      expect(jobsRepositoryMock.getAll).toHaveBeenCalledWith({ lang: 'es', order: 'asc' })
      expect(jobs[0]).toEqual(expect.objectContaining({ order: 1 }))
      expect(jobs[1]).toEqual(expect.objectContaining({ order: 2 }))
      expect(jobs[2]).toEqual(expect.objectContaining({ order: 3 }))
    })
    it('return ordered jobs by order descending', async () => {
      const jobs = await service.getAll({ lang: 'en', order: 'desc' })
      expect(jobsRepositoryMock.getAll).toHaveBeenCalledWith({ lang: 'en', order: 'desc' })
      expect(jobs[0]).toEqual(expect.objectContaining({ order: 3 }))
    })
    it('return jobs with ordered skills', async () => {
      const jobs = await service.getAll({ lang: 'en' })
      jobs.forEach((job) => {
        expect(job.skills).toEqual(skillsJobsOrdered[job.order])
      })
    })
  })
})
