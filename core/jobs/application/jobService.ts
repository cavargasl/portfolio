import { type Language } from '@core/locale/domain'
import { type Order } from '@core/shared/domain'

import { type JobRepository } from '../domain/jobRepository'

export const jobsServices = (repository: JobRepository): JobRepository => ({
  getAll: (lang: Language, order?: Order) => repository.getAll(lang, order),
})
