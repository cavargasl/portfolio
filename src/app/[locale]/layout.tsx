import SidebarNav from "@/app/[locale]/components/layouts/SidebarNav"
import { TailwindIndicator } from "@/components/TailwindIndicator"
import { I18nProvider } from "@/components/provider"
import { getSiteConfig } from "@/config/siteConfig"
import "@/styles/global.css"

// TODO: generate metadata for the root
interface RootProps {
  children: React.ReactNode
  params: { locale: string }
}
export default async function Root({ children, params }: RootProps) {
  const { name, mainNav } = await getSiteConfig()

  return (
    <html lang={params.locale} suppressHydrationWarning>
      <body>
        <I18nProvider locale={params.locale}>
          <main className='p-4 sm:w-[calc(100%-16rem)]'>
            {children}
          </main>
          <SidebarNav siteConfig={{ name, mainNav }} />
        </I18nProvider>
        <TailwindIndicator />
      </body>
    </html>
  )
}