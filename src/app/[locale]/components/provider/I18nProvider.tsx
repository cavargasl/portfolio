'use client'
import { I18nProviderClient } from '@/locale/client'
import es from '@/locale/messages/es'
import { type ReactElement } from 'react'

export default function I18nProvider({ children, locale }: { children: ReactElement, locale: string }) {
  return <I18nProviderClient locale={locale} fallbackLocale={es}>{children}</I18nProviderClient>
}
