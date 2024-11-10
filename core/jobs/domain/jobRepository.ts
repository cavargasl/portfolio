import { type Language } from '@core/locale/domain'
import { type Params } from '@core/shared/domain'

import { type Job } from './job'

export type JobRepository = {
  getAll: (params: Params & { lang: Language }) => Promise<Job[]>
}
