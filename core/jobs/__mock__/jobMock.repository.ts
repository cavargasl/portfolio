import { type Language } from '@core/locale/domain'
import { type Params } from '@core/shared/domain'

import { type JobRepository } from '../domain/jobRepository'
import { mockJobs } from './data'

export const jobsRepositoryMock: JobRepository = {
  getAll: jest.fn().mockImplementation((params: Params & { lang: Language }) => Promise.resolve(mockJobs[params.lang])),
}
