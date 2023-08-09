import { createI18nMiddleware } from 'next-international/middleware'
import { type NextRequest } from 'next/server'

const I18nMiddleware = createI18nMiddleware(['es', 'en'] as const, 'es', {
  urlMappingStrategy: 'rewrite'
})

export function middleware(request: NextRequest) {
  return I18nMiddleware(request)
}

export const config = {
  matcher: ["/((?!.*\\..*|_next).*)"],
}