import { match } from '@formatjs/intl-localematcher'
import Negotiator from 'negotiator'

const headers = { 'accept-language': 'en-US,en;q=0.5' }
const languages = new Negotiator({ headers }).languages()
const locales = ['en', 'es']
const defaultLocale = 'es'


import { NextResponse, type NextRequest } from 'next/server'


// Get the preferred locale, similar to above or using a library
function getLocale() {
  return match(languages, locales, defaultLocale)
}

export function middleware(request: NextRequest) {
  // Check if there is any supported locale in the pathname
  const pathname = request.nextUrl.pathname

  const pathnameIsMissingLocale = locales.every(
    (locale) => !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`
  )

  // Redirect if there is no locale
  if (pathnameIsMissingLocale) {
    const locale = getLocale()

    // e.g. incoming request is /products
    // The new URL is now /es/products
    return NextResponse.redirect(
      new URL(`/${locale}${pathname.startsWith('/') ? '' : '/'}${pathname}`, request.url)
    )
  }
}

export const config = {
  matcher: ["/((?!.*\\..*|_next).*)"],
}