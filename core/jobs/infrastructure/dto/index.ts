import { type SkillName } from '@core/skills/domain/skill'

export type JobDTO = Readonly<{
  position: string
  title: string
  date: string
  descriptions: string[]
  skills: SkillName[]
  indexOrder: number
}>
