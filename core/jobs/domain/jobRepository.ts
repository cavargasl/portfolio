import { type Language } from '@core/locale/domain'

import { type Job } from './job'

export type JobRepository = {
  getAll: (lang: Language) => Promise<Job[]>
}
