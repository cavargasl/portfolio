'use client'
import { I18nProviderClient } from '@/locale/client'
import es from '@/locale/messages/es'
import { type ReactNode } from 'react'

export function I18nProvider({ children, locale }: { children: ReactNode, locale: string }) {
  return <I18nProviderClient locale={locale} fallbackLocale={es}>{children}</I18nProviderClient>
}
