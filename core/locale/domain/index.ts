export type Language = 'en' | 'es'

export enum Languages {
  ENGLISH = 'en',
  SPANISH = 'es',
}

export const LANGUAGES = Object.values(Languages)
export const DEFAULT_LANG: Readonly<Language> = 'es'
