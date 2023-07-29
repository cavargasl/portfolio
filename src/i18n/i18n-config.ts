export type Locale = 'en' | 'es'
export type DefaultLocale = 'es'

export const i18n: {
  defaultLocale: DefaultLocale
  locales: Locale[]
} = {
  defaultLocale: 'es',
  locales: ['en', 'es'],
}