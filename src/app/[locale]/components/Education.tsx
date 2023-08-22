import Card from "@/components/ui/Card"
import { getScopedI18n } from "@/locale/server"
import type { SidebarNavItem } from "@/types"

interface EducationProps {
  navItem?: SidebarNavItem
}
export default async function Education({ navItem }: EducationProps) {
  const t = await getScopedI18n("education")

  const courses = [
    {
      title: t("courses.items.0.title"),
      where: t("courses.items.0.where"),
    },
    {
      title: t("courses.items.1.title"),
      where: t("courses.items.1.where"),
    },
    {
      title: t("courses.items.2.title"),
      where: t("courses.items.2.where"),
    },
    {
      title: t("courses.items.3.title"),
      where: t("courses.items.3.where"),
    },
    {
      title: t("courses.items.4.title"),
      where: t("courses.items.4.where"),
    },
    {
      title: t("courses.items.5.title"),
      where: t("courses.items.5.where"),
    },
  ]

  return (
    <section
      id={navItem?.id}
      aria-label={navItem?.title}
      className='flex h-full min-h-screen flex-col items-center gap-16 bg-muted-foreground p-8 lg:px-12'
    >
      <h3 className='border-b-4 border-primary text-4xl font-bold text-paragraph-foreground sm:text-5xl'>{navItem?.title}</h3>
      <main className="w-full max-w-4xl">
        <Card className="w-full items-start gap-0 border-2 border-primary bg-transparent p-1 text-background sm:p-3">
          <h3 className='font-mono text-2xl font-bold text-paragraph-foreground'>{t("university.title")}</h3>
          <span className='text-xl'>{t("university.name")}</span>
          <span className='font-light'>{t("university.date")}</span>
          <br />
          <p>{t("university.description")}</p>
        </Card>
        <h3 className='mt-10 w-fit border-b-2 border-primary text-2xl font-semibold text-paragraph-foreground'>{t("courses.title")}</h3>
        <div className="mt-4 grid gap-4">
          {
            courses.map(course => (
              <Card key={course.title} className="w-full items-start gap-0 border border-primary bg-transparent p-1 text-background sm:p-3">
                <h3 className='font-mono text-lg font-bold text-paragraph-foreground'>{course.title}</h3>
                <span className=''>{course.where}</span>
              </Card>
            ))
          }
        </div>
      </main>
    </section>
  )
}