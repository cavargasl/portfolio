import { Icons } from '@/components/Icons'
import { Select, SelectContent, SelectTrigger } from '@/components/ui/Select'
import { i18n } from '@/i18n'
import Link from 'next/link'
import { useParams } from 'next/navigation'

export default function ChangeLanguage() {
  const params = useParams()
  const lang = typeof params.lang === 'string' ? params.lang : i18n.defaultLocale

  function getFlag(lang: string) {
    if (lang === 'en') return <Icons.flagUs className='w-8' />
    if (lang === 'es') return <Icons.flagCo className='w-8' />
    return null
  }

  // TODO: Add aria-label
  return (
    <div>
      <Select>
        <SelectTrigger>
          {getFlag(lang)}
        </SelectTrigger>
        <SelectContent side="top" className='bg-background'>
          <Link href="/en">
            <Icons.flagUs className='w-8 py-1' />
          </Link>
          <Link href="/es">
            <Icons.flagCo className='w-8 py-1' />
          </Link>
        </SelectContent>
      </Select>
    </div>
  )
}
