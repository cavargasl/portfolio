import { type Project } from '@core/projects/domain/project'

export type TechnicalTest = Project & {
  testTime: string
  enterprise: string
  order: number
  urlDescription?: string
}
