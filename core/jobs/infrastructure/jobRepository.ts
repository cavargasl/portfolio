import { type Http } from '@core/client/domain/http'

import { type JobRepository } from '../domain/jobRepository'
import { sortSkills } from '../domain/sortSkills'
import { type JobDTO } from './dto'

export const jobRepository = (client: Http): JobRepository => ({
  getAll: async (lang) => {
    const jobs = await client.get<JobDTO[]>('/jobs', { lang })
    const jobsSorted = jobs.sort((a, b) => b.indexOrder - a.indexOrder)
    return jobsSorted.map((job) => ({
      ...job,
      skills: sortSkills(job.skills),
      order: job.indexOrder,
    }))
  },
})