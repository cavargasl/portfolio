import { type Language } from '@core/locale/domain'
import { type Order } from '@core/shared/domain'

import { type Job } from './job'

export type JobRepository = {
  getAll: (lang: Language, order?: Order) => Promise<Job[]>
}
