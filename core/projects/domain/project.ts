import { type SkillName } from '@core/skills/domain/skill'

export type Project = {
  title: string
  description: string
  webSite?: string
  github: Array<string>
  skills: Array<SkillName>
  image?: string
}
