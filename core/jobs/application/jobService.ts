import { type Language } from '@core/locale/domain'

import { type JobRepository } from '../domain/jobRepository'

export const jobsServices = (repository: JobRepository): JobRepository => ({
  getAll: (lang: Language) => repository.getAll(lang),
})
