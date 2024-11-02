import { type Language } from '@core/locale/domain'

export type Order = 'asc' | 'desc'

export type Params = Partial<{ lang: Language }>
