'use server'

import type { Locale } from './i18n-config';

const dictionaries = {
  en: () => import('./messages/en.json').then((module) => module.default),
  es: () => import('./messages/es.json').then((module) => module.default),
}

export const getDictionary = (locale: Locale) => dictionaries[locale]()

type Unpromising<T> = T extends Promise<infer U> ? U : T;
export type Dictionary = Unpromising<ReturnType<typeof getDictionary>>;