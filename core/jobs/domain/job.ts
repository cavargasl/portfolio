import { type SkillName } from '@core/skills/domain/skill'

export type Job = Readonly<{
  position: string
  title: string
  date: string
  descriptions: string[]
  skills: SkillName[]
  order: number
}>
