import { Languages, type Language } from "@core/locale/domain";
import { DEFAULT_LANG } from "@core/shared/const/infrastructure";


export function getLangFromUrl(url: URL):Language {
	const [, lang] = url.pathname.split('/');
  return Object.values(Languages).includes(lang as Languages) 
  ? (lang as Languages) 
  : DEFAULT_LANG;
}


// change when you setter prefixDefaultLocale in astro.config.mjs
const showDefaultLang = false
export function changeLocale(lang: Language) {
  if(!showDefaultLang) return lang === DEFAULT_LANG ? '/' : `/${lang}`
  return `/${lang}/`
}
