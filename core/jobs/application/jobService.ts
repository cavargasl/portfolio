import { sortArray } from '@core/shared/utils/sortArray'
import { sortSkills } from '@core/skills/domain/sortSkills'

import { type JobRepository } from '../domain/jobRepository'

export const jobsServices = (repository: JobRepository): JobRepository => ({
  getAll: async (params) => {
    const jobs = await repository.getAll(params)
    const sortedJobs = sortArray(jobs, 'order', params.order ?? 'desc')
    return sortedJobs.map((job) => ({ ...job, skills: sortSkills(job.skills) }))
  },
})
