import { type TechnicalTestRepository } from '@core/technicalTests/domain/repository'

import { mockTechnicalTests } from './data'

export const technicalTestRepositoryMock: TechnicalTestRepository = {
  getAll: jest.fn().mockResolvedValue(mockTechnicalTests),
}
