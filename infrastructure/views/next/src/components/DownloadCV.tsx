'use client'

import { useCurrentLocale, useScopedI18n } from '@/locale/client'
import { Button } from './ui/Button'
import { downloadCV } from '@core/shared/utils/downloadCV'

export default function DownloadCV() {
  const lang = useCurrentLocale()
  const t = useScopedI18n('contact')
  return (
    <Button aria-label={t('cv')} onClick={() => downloadCV(lang)} variant={'outline'} title={t('downloadCV')}>
      {t('cv')}
    </Button>
  )
}
