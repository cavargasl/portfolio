import { type SkillName, skillNameOrdered } from './skill'

export function sortSkills(skills: SkillName[]): SkillName[] {
  const uniqueSkills = Array.from(new Set(skills))
  return uniqueSkills.sort((a, b) => skillNameOrdered.indexOf(a) - skillNameOrdered.indexOf(b))
}
