'use client'
import { IconClose, IconMenu } from "@/components/Icons"
import { Button } from "@/components/ui/Button"
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
        <Button onClick={toggleSidebar} variant="ghost" size="icon" className="fixed right-4 top-4 lg:hidden" aria-label={scopedT("openSidebarNav")}>
          <IconMenu className="h-6 w-6" aria-hidden="true" />
        </Button>
      }

      <aside
        className={cn(
          "fixed right-0 top-0 z-50 flex h-screen w-full translate-x-0 flex-col items-center justify-center gap-8 overflow-y-auto bg-muted px-3 py-10 transition-transform duration-[250] lg:w-64",
          !isOpen && "duration-200",
          isScreenLargerThan.LG ? "translate-x-0" : isOpen ? "translate-x-0" : "translate-x-full"
        )}
        aria-label={scopedT("sidebarNav")}
      >
        <header className="mb-auto">
          <Button onClick={toggleSidebar} variant="ghost" size="icon" className="fixed right-4 top-4 lg:hidden" aria-label={scopedT("closeSidebarNav")}>
            <IconClose className="h-6 w-6" aria-hidden="true" />
          </Button>
        </header>

        <main className="flex flex-col items-center justify-center gap-8">
            <Image
              src="/images/profile.webp"
              alt={siteConfig.name}
              priority
              width={232}
              height={232}
              className="object-cover"
            />
          <nav className="w-full">
            <ul className="flex flex-col gap-1">
              {
                siteConfig.mainNav.map(item => (
                  <li key={item.title}>
                    <Button variant="ghost" onClick={toggleSidebar} className="w-full text-lg font-semibold" aria-label={item.title}>
                      {item.title}
                    </Button>
                  </li>
                ))
              }
            </ul>
          </nav>
        </main>

        <footer className="mt-auto flex w-full items-center justify-center gap-4">
          <ChangeLanguage />
          <ThemeToggle />
        </footer>
      </aside>
    </>
  )
}
