import { type Language } from '@core/locale/domain'
import { type Params } from '@core/shared/domain'

import { type TechnicalTest } from './technicalTest'

export type TechnicalTestRepository = {
  /**
   * Retrieves a list of technical tests based on the provided query parameters.
   *
   * @param {Params & { lang: Language }} params - An object that configures query parameters to filter
   * and sort the results. It includes the following properties:
   *   - `lang` - `@Required`. Filters the technical tests by language. Acceptable values are `'es'` or `'en'`.
   *   - `order` - `@default 'asc'`: Specifies the sorting order of the results. Can be `'asc'` or `'desc'`.
   *
   * @returns {Promise<TechnicalTest[]>} - A promise that resolves to an array of `TechnicalTest` objects.
   */
  getAll: (params: Params & { lang: Language }) => Promise<TechnicalTest[]>
}
