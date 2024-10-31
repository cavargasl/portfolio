import { type Language } from '@core/locale/domain'

import { type Http } from '@core/client/domain/http'

import { Projects } from '../const'

type Params = Partial<{
  lang: Language
}>

export const httpLocalProjects: Http = {
  get: async <T>(_url: string, params?: Params) => {
    const lang = params?.lang ?? 'es'
    return (await Projects[lang]) as T
  },
  delete: <T>() => Promise.reject('method delete of httpLocalProjects is not configured') as Promise<T>,
  post: <T>() => Promise.reject('method post of httpLocalProjects is not configured') as Promise<T>,
  put: <T>() => Promise.reject('method put of httpLocalProjects is not configured') as Promise<T>,
}
