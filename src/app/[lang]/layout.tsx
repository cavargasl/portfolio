import { TailwindIndicator } from "@/components/TailwindIndicator"
import { i18n, type Locale } from "@/i18n"

export function generateStaticParams() {
  return i18n.locales.map((locale) => ({ lang: locale }))
}

interface RootProps {
  children: React.ReactNode
  params: { lang: Locale }
}
export default function Root({ children, params }: RootProps) {
  return (
    <html lang={params.lang}>
      <body>
        {children}
        <TailwindIndicator />
      </body>
    </html>
  )
}