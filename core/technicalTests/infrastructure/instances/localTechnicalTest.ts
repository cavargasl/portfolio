import { type Params } from '@core/shared/domain'

import { type Http } from '@core/client/domain/http'
import { DEFAULT_LANG } from '@core/shared/const/infrastructure'

import { TechnicalTests } from '../data'

export const localTechnicalTest: Http = {
  get: async <T>(_url: string, params?: Params) => {
    const lang = params?.lang ?? DEFAULT_LANG
    return (await TechnicalTests[lang]) as T
  },
  delete: <T>() => Promise.reject('method delete of localTechnicalTest is not configured') as Promise<T>,
  post: <T>() => Promise.reject('method post of localTechnicalTest is not configured') as Promise<T>,
  put: <T>() => Promise.reject('method put of localTechnicalTest is not configured') as Promise<T>,
}
