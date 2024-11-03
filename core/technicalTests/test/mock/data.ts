import { skillNameOrdered } from '@core/skills/domain/skill'
import { type TechnicalTest } from '@core/technicalTests/domain/models'

export const mockTechnicalTests: TechnicalTest[] = [
  {
    title: 'Technical test 1',
    testTime: '60 mins',
    enterprise: 'Company A',
    description: 'description 1',
    github: ['https://github-test.com'],
    skills: [skillNameOrdered[8], skillNameOrdered[3], skillNameOrdered[7]],
    order: 1,
  },
  {
    title: 'Technical test 2',
    testTime: '25 mins',
    enterprise: 'Company C',
    description: 'description 3',
    github: ['https://github-test.com'],
    skills: [skillNameOrdered[1], skillNameOrdered[2], skillNameOrdered[5]],
    order: 3,
  },
  {
    title: 'Technical test 2',
    testTime: '45 mins',
    enterprise: 'Company B',
    description: 'description 2',
    github: ['https://github-test.com'],
    skills: [skillNameOrdered[10], skillNameOrdered[11], skillNameOrdered[5]],
    order: 2,
  },
]
export const mockSortedSkills = [
  {
    skills: [skillNameOrdered[5], skillNameOrdered[10], skillNameOrdered[11]],
    order: 2,
  },
  {
    skills: [skillNameOrdered[3], skillNameOrdered[7], skillNameOrdered[8]],
    order: 1,
  },
  {
    skills: [skillNameOrdered[1], skillNameOrdered[2], skillNameOrdered[5]],
    order: 3,
  },
]
