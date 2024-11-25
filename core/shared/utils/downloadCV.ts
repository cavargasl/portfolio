import { type Language } from '@core/locale/domain'

import { curriculum } from '../const/infrastructure'

export function downloadCV(lang: Language) {
  window.open(curriculum[lang], '_blank')
}

export function downloadUrl(lang: Language) {
  return curriculum[lang]
}
