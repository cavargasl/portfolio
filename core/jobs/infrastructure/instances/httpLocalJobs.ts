import { type Language } from '@core/locale/domain'

import { type Http } from '@core/client/domain/http'
import { Jobs } from '@core/jobs/infrastructure/const'

type Params = Partial<{
  lang: Language
}>

export const httpLocalJobs: Http = {
  get: async <T>(_url: string, params?: Params) => {
    const lang = params?.lang ?? 'es'
    return (await Jobs[lang]) as T
  },
  delete: <T>() => Promise.reject('method delete of httpLocalJobs is not configured') as Promise<T>,
  post: <T>() => Promise.reject('method post of httpLocalJobs is not configured') as Promise<T>,
  put: <T>() => Promise.reject('method put of httpLocalJobs is not configured') as Promise<T>,
}
