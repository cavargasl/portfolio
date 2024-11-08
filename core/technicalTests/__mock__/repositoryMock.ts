import { type TechnicalTestRepository } from '@core/technicalTests/domain/technicalTestRepository'

import { mockTechnicalTests } from './data'

export const technicalTestRepositoryMock: TechnicalTestRepository = {
  getAll: jest.fn().mockResolvedValue(mockTechnicalTests),
}
