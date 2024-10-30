import { type Job } from './job'

export function sortJobs(jobs: Job[], order: 'asc' | 'desc' = 'desc'): Job[] {
  return jobs.sort((a, b) => (order === 'asc' ? a.order - b.order : b.order - a.order))
}
