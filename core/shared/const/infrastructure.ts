import { type Language } from '@core/locale/domain'

export const BASE_URL: Readonly<string> = process.env.NEXT_PUBLIC_APP_URL || 'http://127.0.0.1:3000'

export const DEFAULT_LANG: Readonly<Language> = 'es'

export const curriculum: Readonly<Record<Language, string>> = {
  es: 'https://docs.google.com/document/d/133KfHs1G306RxuvjEmJPeMPMSRfMdBTkepvFXAX7kNQ/export?format=pdf',
  en: 'https://docs.google.com/document/d/13_EYsoVvMolL7exOKe211OFI9IkHbV_jJlaPznWDqzY/export?format=pdf',
}
