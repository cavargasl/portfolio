import { getSiteConfig } from "@/config/siteConfig"
import { getDictionary, type Locale } from "@/i18n"
import Image from "next/image"
import Link from "next/link"

interface SidebarProps {
  lang: Locale
}
export default async function SidebarNav({ lang }: SidebarProps) {
  const { mainNav, name } = await getSiteConfig(lang)
  const { commons } = await getDictionary(lang)
  return (
    <aside className="fixed right-0 top-0 flex h-screen w-64 flex-col items-center justify-center gap-10 overflow-y-auto bg-background px-3 py-4" aria-label={commons.sidebarNav}>
        <Image src="/images/profile.png" alt={name} width={200} height={200} />
      <ul className="w-full space-y-2">
        {
          mainNav.map(item => (
            <li key={item.title} className="text-center">
              <Link href="#" className="p-2 text-lg font-semibold text-primary transition hover:text-foreground" aria-label={item.title}>
                {item.title}
              </Link>
            </li>
          ))
        }
      </ul>
    </aside>
  )
}
