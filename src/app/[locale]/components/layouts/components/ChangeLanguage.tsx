import { FlagCo, FlagUs } from '@/components/Icons'
import { Select, SelectContent, SelectTrigger } from '@/components/ui/Select'
import { useChangeLocale, useCurrentLocale, useScopedI18n } from '@/locale/client'
import { type ReactElement } from 'react'

export function ChangeLanguage() {
  const locale = useCurrentLocale()
  const scopedT = useScopedI18n("commons")
  const flagIcon: { [key in typeof locale]: ReactElement } = {
    en: <FlagUs className='w-8' />,
    es: <FlagCo className='w-8' />
  }

  const changeLocale = useChangeLocale({
    basePath: "/test"
  })

  return (
    <div>
      <Select>
        <SelectTrigger aria-label={scopedT("openLanguageMenu")} className='bg-background'>
          {flagIcon[locale]}
        </SelectTrigger>
        <SelectContent side="top" className='bg-background'>
          <span className='cursor-pointer' aria-label={scopedT("changeToEnglish")} onClick={() => changeLocale("en")}>
            <FlagUs className='w-8 py-1' />
          </span>
          <span className='cursor-pointer' aria-label={scopedT("changeToSpanish")} onClick={() => changeLocale("es")}>
            <FlagCo className='w-8 py-1' />
          </span>
        </SelectContent>
      </Select>
    </div>
  )
}
