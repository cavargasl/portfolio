import { Icons } from '@/components/Icons'
import { Select, SelectContent, SelectTrigger } from '@/components/ui/Select'
import { useChangeLocale, useCurrentLocale } from '@/locale/client'
import { type ReactElement } from 'react'

export default function ChangeLanguage() {
  const locale = useCurrentLocale()
  const flagIcon: {[key in typeof locale]: ReactElement} = {
    en: <Icons.flagUs className='w-8' />,
    es: <Icons.flagCo className='w-8' />
  }
  
  const changeLocale = useChangeLocale({
    basePath: "/test"
  })

  // TODO: Add aria-label
  return (
    <div>
      <Select>
        <SelectTrigger>
          {flagIcon[locale]}
        </SelectTrigger>
        <SelectContent side="top" className='bg-background'>
          <span className='cursor-pointer' onClick={() => changeLocale("en")}>
            <Icons.flagUs className='w-8 py-1' />
          </span>
          <span className='cursor-pointer' onClick={() => changeLocale("es")}>
            <Icons.flagCo className='w-8 py-1' />
          </span>
        </SelectContent>
      </Select>
    </div>
  )
}
