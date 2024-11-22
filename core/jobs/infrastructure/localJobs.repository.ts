import { type JobRepository } from '../domain/jobRepository'
import { jobsAdapter } from './adapter/jobs.adapter'
import { Jobs } from './data'
import { type JobDTO } from './dto'

export const localJobs = (): JobRepository => ({
  getAll: async (params) => {
    // simulates a fetch from a remote API with DTO data
    const jobsDTO = Jobs[params.lang] as JobDTO[]
    return jobsAdapter(jobsDTO)
  },
})
