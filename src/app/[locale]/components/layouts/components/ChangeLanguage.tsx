import { Button, buttonVariants } from '@/components/ui/Button'
import { Select, SelectContent, SelectTrigger } from '@/components/ui/Select'
import { cn } from '@/lib/utils'
import { useChangeLocale, useCurrentLocale, useScopedI18n } from '@/locale/client'

export function ChangeLanguage() {
  const locale = useCurrentLocale()
  const scopedT = useScopedI18n("commons")

  const changeLocale = useChangeLocale()

  return (
    <Select>
      <SelectTrigger aria-label={scopedT("openLanguageMenu")} className={cn(buttonVariants({ variant: 'ghost', size: 'icon' }), "font-semibold")}>
        {locale.toLocaleUpperCase()}
      </SelectTrigger>
      <SelectContent side='top' className='bg-background p-0'>
        <Button variant="ghost" size="icon" className='hover:bg-inherit' aria-label={scopedT("changeToEnglish")} onClick={() => changeLocale("en")} disabled={locale === "en"}>EN</Button>
        <Button variant="ghost" size="icon" className='hover:bg-inherit' aria-label={scopedT("changeToSpanish")} onClick={() => changeLocale("es")} disabled={locale === "es"}>ES</Button>
      </SelectContent>
    </Select>
  )
}