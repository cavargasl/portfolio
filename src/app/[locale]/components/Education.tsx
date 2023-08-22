import Card from "@/components/ui/Card"
import { getScopedI18n } from "@/locale/server"
import type { SidebarNavItem } from "@/types"

interface EducationProps {
  navItem?: SidebarNavItem
}
export default async function Education({ navItem }: EducationProps) {
  const t = await getScopedI18n("education")

  return (
    <section
      id={navItem?.id}
      aria-label={navItem?.title}
      className='flex h-full min-h-screen flex-col items-center gap-16 bg-muted-foreground p-8 lg:px-12'
    >
      <h3 className='border-b-4 border-primary text-4xl font-bold text-paragraph-foreground sm:text-5xl'>{navItem?.title}</h3>
      <main className="grid w-full max-w-4xl gap-4">
        <Card className="w-full items-start gap-0 border-4 border-primary bg-transparent p-1 text-background sm:p-3">
          <h3 className='font-mono text-2xl font-bold text-paragraph-foreground'>{t("university.title")}</h3>
          <span className='text-xl'>{t("university.name")}</span>
          <span className='font-light'>{t("university.date")}</span>
          <br/>
          <p>{t("university.description")}</p>
        </Card>
      </main>
    </section>
  )
}