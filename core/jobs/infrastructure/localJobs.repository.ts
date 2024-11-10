import { type JobRepository } from '../domain/jobRepository'

export const localJobs = (): JobRepository => ({
  getAll: async () => Promise.resolve([]),
})
