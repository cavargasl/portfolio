import { match } from '@formatjs/intl-localematcher'
import Negotiator from 'negotiator'
import { NextResponse, type NextRequest } from 'next/server'
import { i18n } from './i18n'

const defaultLocale = 'es'
const defaultHeaders = { 'accept-language': defaultLocale }
const locales = i18n.locales


// Get the preferred locale, similar to above or using a library
function getLocale({ acceptLanguage }: { acceptLanguage: string | null }) {
  const headers: { 'accept-language': string } = acceptLanguage ? { 'accept-language': acceptLanguage } : defaultHeaders
  return match(new Negotiator({ headers }).languages(), locales, defaultLocale)
}

export function middleware(request: NextRequest) {
  // Check if there is any supported locale in the pathname
  const pathname = request.nextUrl.pathname

  const pathnameIsMissingLocale = locales.every(
    (locale) => !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`
  )

  // Redirect if there is no locale or if the locale is not supported
  if (pathnameIsMissingLocale) {
    const pathNames = pathname.split('/')
    let newPathname = ""
    pathNames.forEach((pathname, index) => {
      if (index > 1) {
        newPathname += `/${pathname}`
      }
    })
    const locale = getLocale({ acceptLanguage: request.headers.get('accept-language') })
    newPathname = `/${locale}${newPathname}`
    return NextResponse.redirect(
      new URL(newPathname, request.url)
    )
  }
}

export const config = {
  matcher: ["/((?!.*\\..*|_next).*)"],
}