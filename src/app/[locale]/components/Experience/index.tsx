import type { SidebarNavItem } from "@/types"
import { ExperienceList } from "./components/ExperienceList"
import Card from "@/components/ui/Card"
import { getScopedI18n } from "@/locale/server"

interface ExperienceProps {
  navItem?: SidebarNavItem
}

export default async function Experience({ navItem }: ExperienceProps) {
  const t = await getScopedI18n("experience")
  const experience = [
    {
      position: t("jobs.0.position"),
      title: t("jobs.0.title"),
      date: t("jobs.0.date"),
      descriptions: [
        t("jobs.0.descriptions.0"),
        t("jobs.0.descriptions.1"),
        t("jobs.0.descriptions.2"),
        t("jobs.0.descriptions.3"),
        t("jobs.0.descriptions.4"),
      ]
    },
    {
      position: t("jobs.1.position"),
      title: t("jobs.1.title"),
      date: t("jobs.1.date"),
      descriptions: [
        t("jobs.1.descriptions.0"),
        t("jobs.1.descriptions.1"),
        t("jobs.1.descriptions.2"),
        t("jobs.1.descriptions.3"),
        t("jobs.1.descriptions.4"),
        t("jobs.1.descriptions.5"),
      ]
    },
    {
      position: t("jobs.2.position"),
      title: t("jobs.2.title"),
      date: t("jobs.2.date"),
      descriptions: [
        t("jobs.2.descriptions.0"),
        t("jobs.2.descriptions.1"),
        t("jobs.2.descriptions.2"),
        t("jobs.2.descriptions.3"),
        t("jobs.2.descriptions.4"),
      ]
    },
    {
      position: t("jobs.3.position"),
      title: t("jobs.3.title"),
      date: t("jobs.3.date"),
      descriptions: [
        t("jobs.3.descriptions.0"),
        t("jobs.3.descriptions.1"),
        t("jobs.3.descriptions.2"),
      ]
    },
  ]
  return (
    <section
      id={navItem?.id}
      aria-label={navItem?.title}
      className='flex h-full snap-y flex-col items-center gap-16 px-8 lg:px-12'
    >
      <h3 className='border-b-4 border-primary text-4xl font-bold sm:text-5xl'>{navItem?.title}</h3>
      <ExperienceList>
        {
          experience.map(item => (
            <Card key={item.title} className="w-full items-start p-2 sm:p-6">
              <header className="flex flex-col flex-wrap items-baseline justify-between">
                <h2 className="text-left text-xl font-medium">{item.position}</h2>
                <h2 className="text-left text-lg">{item.title}</h2>
                <span className="text-sm font-light">{item.date}</span>
              </header>
              <ul>
                {
                  item.descriptions.map((description, idx) => (
                    <li key={idx} className="relative flex items-center gap-2 pl-7 before:absolute before:left-0 before:top-0 before:text-primary before:content-['👉']">
                      {description}
                    </li>
                  ))
                }
              </ul>
            </Card>
          ))
        }
      </ExperienceList>
    </section>
  )
}
