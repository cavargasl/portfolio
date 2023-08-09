import SidebarNav from "@/app/[locale]/components/layouts/SidebarNav"
import { TailwindIndicator } from "@/components/TailwindIndicator"
import { I18nProvider, ThemeProvider } from "@/components/provider"
import { getSiteConfig } from "@/config/siteConfig"
import { fontMono, fontSans } from "@/lib/fonts"
import { cn } from "@/lib/utils"
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
      <body className={cn(
        "font-sans antialiased",
        fontMono.variable,
        fontSans.variable,
      )}>
        <I18nProvider locale={params.locale}>
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
            <main className='sm:w-[calc(100%-16rem)]'>
              {children}
            </main>
            <SidebarNav siteConfig={{ name, mainNav }} />
          </ThemeProvider>
        </I18nProvider>
        <TailwindIndicator />
      </body>
    </html>
  )
}