'use server'
import type { Locale } from '@/config/i18n-config';

const dictionaries = {
  en: () => import('./dictionaries/en.json').then((module) => module.default),
  es: () => import('./dictionaries/es.json').then((module) => module.default),
}

export const getDictionary = (locale: Locale) => dictionaries[locale]()

type Unpromising<T> = T extends Promise<infer U> ? U : T;
export type Dictionary = Unpromising<ReturnType<typeof getDictionary>>;