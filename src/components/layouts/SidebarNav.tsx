'use client'
import ChangeLanguage from "@/app/[lang]/components/ChangeLanguage"
import useScreenSize from "@/hooks/useScreenSize"
import { type Dictionary } from "@/i18n"
import { cn } from "@/lib/utils"
import { type SidebarNavItems } from "@/types"
import Image from "next/image"
import { useState } from "react"
import { Icons } from "../Icons"


interface SidebarProps {
  commons: Dictionary["commons"]
  siteConfig: { mainNav: SidebarNavItems, name: string }
}
export default function SidebarNav({ commons, siteConfig }: SidebarProps) {
  const [isOpen, setIsOpen] = useState(true)
  const { isScreenLargerThanSM } = useScreenSize()
  function toggleSidebar() {
    setIsOpen(!isOpen)
  }

  return (
    <>
      <button type="button" onClick={toggleSidebar} className="fixed right-4 top-4 inline-flex items-center rounded-lg p-2 text-foreground focus:outline-none focus:ring-2 focus:ring-foreground sm:hidden">
        <span className="sr-only">{commons.openSidebarNav}</span>
        <Icons.menu className="h-6 w-6" aria-hidden="true" />
      </button>

      <aside
        className={cn(
          "fixed right-0 top-0 flex h-screen w-full translate-x-0 flex-col items-center justify-center gap-8 overflow-y-auto bg-foreground px-3 py-4 transition-transform duration-500 sm:w-64",
          isScreenLargerThanSM ? "translate-x-0" : isOpen ? "translate-x-0" : "translate-x-full"
        )}
        aria-label={commons.sidebarNav}
      >
        <button type="button" onClick={toggleSidebar} className="fixed right-4 top-4 inline-flex items-center rounded-lg p-2 text-primary focus:outline-none focus:ring-2 focus:ring-primary sm:hidden">
          <span className="sr-only">{commons.closeSidebarNav}</span>
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
                <button onClick={toggleSidebar} className="w-full p-2 text-lg font-semibold text-primary transition hover:text-primary-foreground" aria-label={item.title}>
                  {item.title}
                </button>
              </li>
            ))
          }
        </ul>
        <div className="fixed bottom-10 right-0 flex w-full items-center justify-center gap-4 text-primary sm:w-64">
          <ChangeLanguage />
          <p>change theme</p>
        </div>
      </aside>
    </>
  )
}
