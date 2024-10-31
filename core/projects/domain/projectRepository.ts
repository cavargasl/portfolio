import { type Language } from '@core/locale/domain'

import { type Project } from './project'

export type ProjectRepository = {
  getAll: (lang: Language) => Promise<Project[]>
}
