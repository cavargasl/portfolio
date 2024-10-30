import { type Language } from '@core/locale/domain'

import { type Http } from '@core/client/domain/http'
import { JobsFake } from '@core/jobs/mock'

type Params = Partial<{
  lang: Language
}>

export const httpFakeJobs: Http = {
  get: async <T>(_url: string, params?: Params) => {
    const lang = params?.lang ?? 'es'
    return (await JobsFake[lang]) as T
  },
  delete: <T>() => Promise.reject('method delete of httpFakeJobs is not configured') as Promise<T>,
  post: <T>() => Promise.reject('method post of httpFakeJobs is not configured') as Promise<T>,
  put: <T>() => Promise.reject('method put of httpFakeJobs is not configured') as Promise<T>,
}
