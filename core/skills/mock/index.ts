import { type SkillName, skillNameOrdered } from '../domain/skill'

export const skillsFake: SkillName[] = ['CSS', 'Clerk', 'TypeScript', 'Git']
export const skillsFakeOrdered: SkillName[] = skillsFake.sort((a, b) => skillNameOrdered.indexOf(a) - skillNameOrdered.indexOf(b))
