import { type Http } from '@core/client/domain/http'

import { type JobRepository } from '../domain/jobRepository'
import { sortJobs } from '../domain/jobSort'
import { sortSkills } from '../domain/sortSkills'
import { type JobDTO } from './dto'

export const jobRepository = (client: Http): JobRepository => ({
  getAll: async (lang) => {
    const jobs = await client.get<JobDTO[]>('/jobs', { lang })
    return sortJobs(
      jobs.map(({ indexOrder, ...job }) => ({
        ...job,
        skills: sortSkills(job.skills),
        order: indexOrder,
      }))
    )
  },
})
