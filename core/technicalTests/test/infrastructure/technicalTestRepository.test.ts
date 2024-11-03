import { type Http } from '@core/client/domain/http'
import { ENDPOINTS } from '@core/shared/const/infrastructure'
import { technicalTestRepository } from '@core/technicalTests/infrastructure/repository'

import { mockTechnicalTests } from '../mock/data'

describe('technicalTestRepository', () => {
  let client: Http
  let repository: ReturnType<typeof technicalTestRepository>

  beforeEach(() => {
    client = {
      get: jest.fn().mockResolvedValue(mockTechnicalTests),
      delete: jest.fn(),
      post: jest.fn(),
      put: jest.fn(),
    }
    repository = technicalTestRepository(client)
  })

  it('should call getAll with correct params for English and descending order', async () => {
    await repository.getAll({ lang: 'en', order: 'desc' })
    expect(client.get).toHaveBeenCalledTimes(1)
    expect(client.get).toHaveBeenCalledWith(ENDPOINTS.TECHNICAL_TESTS, { lang: 'en', order: 'desc' })
  })

  it('should call getAll with correct params for Spanish and default order', async () => {
    await repository.getAll({ lang: 'es' })
    expect(client.get).toHaveBeenCalledTimes(1)
    expect(client.get).toHaveBeenCalledWith(ENDPOINTS.TECHNICAL_TESTS, { lang: 'es' })
  })

  it('should call getAll with correct params for English and default order', async () => {
    const result = await repository.getAll({ lang: 'en' })
    expect(client.get).toHaveBeenCalledTimes(1)
    expect(client.get).toHaveBeenCalledWith(ENDPOINTS.TECHNICAL_TESTS, { lang: 'en' })
    expect(result).toBeDefined()
    expect(result).toEqual(mockTechnicalTests)
  })
})
