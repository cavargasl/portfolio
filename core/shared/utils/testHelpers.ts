import { type Language } from '@core/locale/domain'

import * as cheerio from 'cheerio'

function extractTextFromHtml(html: string) {
  const $ = cheerio.load(html)
  return $.text()
}

export function isTextInLanguage(text: string, lang: Language, isHtml = false) {
  if (isHtml) {
    text = extractTextFromHtml(text)
  }

  const normalizedText = text.replace(/[\r\n]+/g, ' ').trim()
  const sampleText = normalizedText.split(' ').slice(0, 15).join(' ')

  const commonEnglishWords = ['the', 'and', 'is', 'in', 'of', 'to', 'a', 'that', 'it', 'on', 'at', 'an', 'for']
  const commonSpanishWords = ['el', 'la', 'es', 'y', 'en', 'de', 'que', 'un', 'se', 'no', 'una', 'para']

  const commonWords: Record<Language, string[]> = {
    en: commonEnglishWords,
    es: commonSpanishWords,
  }

  const regex = new RegExp(`\\b(${commonWords[lang].join('|')})\\b`, 'gi')

  const matches = (sampleText.match(regex) || []).length

  return matches >= 2
}
