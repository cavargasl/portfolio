import { type Language } from '@core/locale/domain'

import { type Http } from '@core/client/domain/http'
import { ProjectsFake } from '@core/projects/mock'

type Params = Partial<{
  lang: Language
}>

export const httpFakeProjects: Http = {
  get: async <T>(_url: string, params?: Params) => {
    const lang = params?.lang ?? 'es'
    return (await ProjectsFake[lang]) as T
  },
  delete: <T>() => Promise.reject('method delete of httpFakeProjects is not configured') as Promise<T>,
  post: <T>() => Promise.reject('method post of httpFakeProjects is not configured') as Promise<T>,
  put: <T>() => Promise.reject('method put of httpFakeProjects is not configured') as Promise<T>,
}
