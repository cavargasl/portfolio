import { type SkillName, skillNameOrdered } from './skill'

export function sortSkills(skills: SkillName[]): SkillName[] {
  return skills.sort((a, b) => skillNameOrdered.indexOf(a) - skillNameOrdered.indexOf(b))
}
