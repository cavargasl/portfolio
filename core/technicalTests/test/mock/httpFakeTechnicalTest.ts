import { type Http } from '@core/client/domain/http'

import { mockTechnicalTests } from './data'

export const httpFakeTechnicalTest: Http = {
  get: async <T>() => {
    return (await mockTechnicalTests) as T
  },
  delete: <T>() => Promise.reject('method delete of httpFakeTechnicalTest is not configured') as Promise<T>,
  post: <T>() => Promise.reject('method post of httpFakeTechnicalTest is not configured') as Promise<T>,
  put: <T>() => Promise.reject('method put of httpFakeTechnicalTest is not configured') as Promise<T>,
}
