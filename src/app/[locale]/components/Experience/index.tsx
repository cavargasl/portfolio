import type { SidebarNavItem } from "@/types"
import { ExperienceList } from "./components/ExperienceList"
import Card from "@/components/ui/Card"

interface ExperienceProps {
  navItem?: SidebarNavItem
}
const experience = [
  {
    position: 'Fullstack Developer',
    title: 'Big Safe',
    date: 'jul. 2023 · 1 mes',
    descriptions: [
      "E - Commerce de ventas de servicios de impresión en Next 13 con sus nuevas funcionalidades",
      "Componentes reutilizable hechos con Tailwind, CVA y clsx frameworks",
      "Manejo de usuarios con Clerk framework",
      "Estado global con Redux toolkit para carrito de compra",
      "Implementación de Firebase Database y Firebase Storage"
    ]
  },
  {
    position: 'Frontend Developer',
    title: 'CloudAPPi',
    date: 'abr. 2022 - ene. 2023 · 10 meses',
    descriptions: ['this is my last work']
  },
  {
    position: 'Fullstack Developer',
    title: 'Proyecto de grado',
    date: 'jul. 2021 - abr. 2022 · 10 meses',
    descriptions: ['this is my last work']
  },
  {
    position: 'Frontend Developer',
    title: 'dexFreight',
    date: 'jun. 2021 - nov. 2021 · 6 meses',
    descriptions: ['this is my last work']
  },
]

export default function Experience({ navItem }: ExperienceProps) {
  return (
    <section
      id={navItem?.id}
      aria-label={navItem?.title}
      className='flex h-full snap-y flex-col items-center gap-16 px-8 lg:px-12'
    >
      <h3 className='border-b-4 border-primary text-5xl font-bold'>{navItem?.title}</h3>
      <ExperienceList>
        {
          experience.map(item => (
            <Card key={item.title} className="w-full items-start">
              <header className="flex flex-col flex-wrap items-baseline justify-between">
                <h2 className="text-left text-xl font-medium">{item.position}</h2>
                <h2 className="text-left text-lg">{item.title}</h2>
                <span className="text-sm font-light">{item.date}</span>
              </header>
              <ul>
                {
                  item.descriptions.map((description, idx) => (
                    <li key={idx} className="relative flex items-center gap-2 pl-6 before:absolute before:left-0 before:top-0 before:text-primary before:content-['👉']">
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
