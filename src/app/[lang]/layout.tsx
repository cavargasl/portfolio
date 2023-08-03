import { TailwindIndicator } from "@/components/TailwindIndicator"
import SidebarNav from "@/components/layouts/SidebarNav"
import { getSiteConfig } from "@/config/siteConfig"
import { getDictionary, i18n, type Locale } from "@/i18n"
import "@/styles/global.css"

export function generateStaticParams() {
  return i18n.locales.map((locale) => ({ lang: locale }))
}

interface RootProps {
  children: React.ReactNode
  params: { lang: Locale }
}
export default async function Root({ children, params }: RootProps) {
  const {commons} = await getDictionary(params.lang)
  const { mainNav, name } = await getSiteConfig(params.lang)

  return (
    <html lang={params.lang}>
      <body>
        <main className='p-4 sm:w-[calc(100%-16rem)]'>
          {children}
        </main>
        <SidebarNav commons={commons} siteConfig={{name, mainNav}} />
        <TailwindIndicator />
      </body>
    </html>
  )
}