import { getI18N } from '@/i18n'
import { changeLocale } from '@/i18n/utils'
import { cn } from '@/lib/utils'
import type { Language } from '@core/locale/domain'
import { useMemo } from 'react'
import { Button, buttonVariants } from './ui/Button'
import { Select, SelectContent, SelectTrigger } from './ui/Select'

interface Props {
  locale: string
}
export function ChangeLanguage({locale}: Props) {
  const i18n = useMemo(() => getI18N({currentLocale: locale}), [])

  function toggleLang(lang: Language) {
    const currentLocale = document.documentElement.lang
    if (currentLocale === lang) return
    document.documentElement.lang = lang
    window.location.href = changeLocale(lang)
  }

  return (
    <Select>
      <SelectTrigger aria-label={i18n.commons.openLanguageMenu} className={cn(buttonVariants({ variant: 'ghost' }), 'w-fit font-semibold')}>
        {locale === 'es' ? i18n.commons.Spanish : i18n.commons.English}
      </SelectTrigger>
      <SelectContent side='top' className='bg-background p-0'>
        <Button variant='ghost' aria-label={i18n.commons.changeToEnglish} onClick={() => toggleLang("en")} disabled={locale === 'en'}>
          {i18n.commons.English}
        </Button>
        <Button variant='ghost' aria-label={i18n.commons.changeToSpanish} onClick={() => toggleLang("es")} disabled={locale === 'es'}>
          {i18n.commons.Spanish}
        </Button>
      </SelectContent>
    </Select>
  )
}
