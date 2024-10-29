import { type SkillName } from '@core/jobs/domain/job'

export type JobDTO = Readonly<{
  position: string
  title: string
  date: string
  descriptions: string[]
  skills: SkillName[]
  indexOrder: number
}>
