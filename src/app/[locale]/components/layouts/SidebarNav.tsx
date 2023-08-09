'use client'
import { Icons } from "@/components/Icons"
import useScreenSize from "@/hooks/useScreenSize"
import { cn } from "@/lib/utils"
import { useScopedI18n } from "@/locale/client"
import { type SidebarNavItems } from "@/types"
import Image from "next/image"
import { useState } from "react"
import { ChangeLanguage } from "./components/ChangeLanguage"
import { ThemeToggle } from "./components/ThemeToggle"

interface SidebarProps {
  siteConfig: { mainNav: SidebarNavItems, name: string }
}
export default function SidebarNav({ siteConfig }: SidebarProps) {
  const scopedT = useScopedI18n("commons")
  const [isOpen, setIsOpen] = useState(true)
  const isScreenLargerThan = useScreenSize()
  function toggleSidebar() {
    setIsOpen(!isOpen)
  }

  return (
    <>
      {
        !isOpen &&
        <button type="button" onClick={toggleSidebar} className="fixed right-4 top-4 inline-flex items-center rounded-lg p-2 text-foreground focus:outline-none focus:ring-2 focus:ring-foreground md:hidden">
          <span className="sr-only">{scopedT("openSidebarNav")}</span>
          <Icons.menu className="h-6 w-6" aria-hidden="true" />
        </button>
      }

      <aside
        className={cn(
          "fixed right-0 top-0 z-50 flex h-screen w-full translate-x-0 flex-col items-center justify-center gap-8 overflow-y-auto bg-muted px-3 py-4 transition-transform duration-500 md:w-64",
          isScreenLargerThan.MD ? "translate-x-0" : isOpen ? "translate-x-0" : "translate-x-full"
        )}
        aria-label={scopedT("sidebarNav")}
      >
        <button type="button" onClick={toggleSidebar} className="fixed right-4 top-4 inline-flex items-center rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-foreground md:hidden">
          <span className="sr-only">{scopedT("closeSidebarNav")}</span>
          <Icons.close className="h-6 w-6" aria-hidden="true" />
        </button>

        <Image
          src="/images/profile.webp"
          alt={siteConfig.name}
          priority
          width={232}
          height={232}
          className="object-cover"
        />

        <ul className="w-full">
          {
            siteConfig.mainNav.map(item => (
              <li key={item.title} className="text-center">
                <button onClick={toggleSidebar} className="w-full rounded-sm p-2 text-lg font-semibold text-primary transition hover:bg-accent hover:text-accent-foreground" aria-label={item.title}>
                  {item.title}
                </button>
              </li>
            ))
          }
        </ul>
        <div className="fixed bottom-10 right-0 flex w-full items-center justify-center gap-4 text-primary md:w-64">
          <ChangeLanguage />
          <ThemeToggle />
        </div>
      </aside>
    </>
  )
}
