import { type Job, skillNameOrdered } from './job'

export function sortSkills(skills: Job['skills']): Job['skills'] {
  return skills.sort((a, b) => skillNameOrdered.indexOf(a) - skillNameOrdered.indexOf(b))
}
