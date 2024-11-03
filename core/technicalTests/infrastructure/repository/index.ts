import { type Http } from '@core/client/domain/http'
import { ENDPOINTS } from '@core/shared/const/infrastructure'
import { type TechnicalTest } from '@core/technicalTests/domain/models'
import { type TechnicalTestRepository } from '@core/technicalTests/domain/repository'

export const technicalTestRepository = (client: Http): TechnicalTestRepository => ({
  getAll: async (params) => {
    const response = await client.get<TechnicalTest[]>(ENDPOINTS.TECHNICAL_TESTS, params)
    return response
  },
})
