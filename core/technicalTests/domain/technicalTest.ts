import { type Project } from '@core/projects/domain/project'

export type MetaDescription = {
  title: string
  url: string
}
export type TechnicalTest = Project & {
  testTime: string
  enterprise: string
  order: number
  metaDescription?: MetaDescription
  isMarkdown?: boolean
}
