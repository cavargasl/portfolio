import { type Job } from '@core/jobs/domain/job'

import { type JobDTO } from '../dto'

export function jobsAdapter(jobDTO: JobDTO[]): Job[] {
  return jobDTO.map((jobDTO) => ({
    ...jobDTO,
    order: jobDTO.indexOrder,
  }))
}
