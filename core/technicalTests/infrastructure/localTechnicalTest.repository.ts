import { DEFAULT_LANG } from '@core/shared/const/infrastructure'

import { type TechnicalTestRepository } from '../domain/technicalTestRepository'
import { TechnicalTests } from './data'

export const localTechnicalTest = (): TechnicalTestRepository => ({
  getAll: async (params) => {
    const lang = params?.lang ?? DEFAULT_LANG
    return Promise.resolve(TechnicalTests[lang])
  },
})
