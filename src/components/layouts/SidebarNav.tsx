'use client'
import useScreenSize from "@/hooks/useScreenSize"
import { type Dictionary } from "@/i18n"
import { cn } from "@/lib/utils"
import { type SidebarNavItems } from "@/types"
import Image from "next/image"
import { useState } from "react"


interface SidebarProps {
  commons: Dictionary["commons"]
  siteConfig: { mainNav: SidebarNavItems, name: string }
}
export default function SidebarNav({ commons, siteConfig }: SidebarProps) {
  const [isOpen, setIsOpen] = useState(false)
  const { isScreenLargerThanSM } = useScreenSize()
  function toggleSidebar() {
    setIsOpen(!isOpen)
  }

  return (
    <>
      <button type="button" onClick={toggleSidebar} className="fixed right-5 top-5 inline-flex items-center rounded-lg p-2 text-foreground focus:outline-none focus:ring-2 focus:ring-foreground sm:hidden">
        <span className="sr-only">{commons.openSidebarNav}</span>
        <svg className="h-6 w-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <path clipRule="evenodd" fillRule="evenodd" d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"></path>
        </svg>
      </button>

      <aside
        className={cn(
          "fixed right-0 top-0 flex h-screen w-full translate-x-0 flex-col items-center justify-center gap-8 overflow-y-auto bg-foreground px-3 py-4 transition-transform duration-500 sm:w-64",
          isScreenLargerThanSM ? "translate-x-0" : isOpen ? "translate-x-0" : "translate-x-full"
        )}
        aria-label={commons.sidebarNav}
      >
        <button type="button" onClick={toggleSidebar} className="fixed right-5 top-5 inline-flex items-center rounded-lg p-2 text-primary focus:outline-none focus:ring-2 focus:ring-primary sm:hidden">
          <span className="sr-only">{commons.closeSidebarNav}</span>
          <svg className="h-6 w-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <path clipRule="evenodd" fillRule="evenodd" d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"></path>
          </svg>
        </button>

        <Image src="/images/profile.png" alt={siteConfig.name} priority width={200} height={256} />

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
          <p>change language</p>
          <p>change theme</p>
        </div>
      </aside>
    </>
  )
}
