import { type Language } from '@core/locale/domain'

export const BASE_URL: Readonly<string> = process.env.NEXT_PUBLIC_APP_URL || 'http://127.0.0.1:3000'

export const DEFAULT_LANG: Readonly<Language> = 'es'
