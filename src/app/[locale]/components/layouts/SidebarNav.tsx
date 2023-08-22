'use client'
import { IconClose, IconMenu } from "@/components/Icons"
import { Button, buttonVariants } from "@/components/ui/Button"
import useScreenSize from "@/hooks/useScreenSize"
import { cn } from "@/lib/utils"
import { useScopedI18n } from "@/locale/client"
import { type SidebarNavItem } from "@/types"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import { createPortal } from "react-dom"
import { ChangeLanguage } from "./components/ChangeLanguage"
import { ThemeToggle } from "./components/ThemeToggle"

interface SidebarProps {
  siteConfig: { mainNav: SidebarNavItem[], name: string }
}
export default function SidebarNav({ siteConfig }: SidebarProps) {
  const scopedT = useScopedI18n("commons")
  const [isOpen, setIsOpen] = useState(false)
  const { isScreenLargerThan, isScreenTallerThan } = useScreenSize()
  
  function toggleSidebar() {
    if (!isScreenLargerThan.LG) setIsOpen(!isOpen)
  }

  function getSizing(): number {
    if(isScreenTallerThan.LG) return 232
    if(isScreenTallerThan.MD) return 132
    return 60
  }

  return (
    <>
      {createPortal(
        <>
          {
            isScreenLargerThan.LG ? null :
              <Button
                onClick={toggleSidebar}
                variant="ghost"
                size="icon"
                className="fixed right-2 top-2 z-50 sm:right-4 sm:top-4"
                aria-label={isOpen ? scopedT("closeSidebarNav") : scopedT("openSidebarNav")}
              >
                {
                  isOpen ?
                    <IconClose className="h-6 w-6" aria-hidden="true" />
                    :
                    <IconMenu className="h-6 w-6" aria-hidden="true" />
                }
              </Button>
          }
        </>,
        document.body
      )}

      <aside
        className={cn(
          "fixed right-0 top-0 z-40 flex min-h-screen w-full translate-x-0 flex-col items-center justify-center gap-8 bg-muted px-4 py-8 transition-transform duration-[250ms] ease-out-circ lg:w-64",
          !isOpen && "duration-200 ease-in-out-expo",
          isScreenLargerThan.LG ? "translate-x-0" : isOpen ? "translate-x-0" : "translate-x-full"
        )}
        aria-label={scopedT("sidebarNav")}
      >
        <span
          className="mb-auto"
          aria-hidden="true"
        />

        <main className="flex w-full flex-col items-center justify-center gap-8">
          <Image
            src="/images/profile.webp"
            alt={siteConfig.name}
            priority
            width={getSizing()}
            height={getSizing()}
            className="object-cover"
          />
          <nav className="w-full">
            <ul className="flex flex-col gap-1">
              {
                siteConfig.mainNav.map(item => (
                  <li key={item.title}>
                    <Link
                      className={cn(buttonVariants({ variant: "ghost" }), "w-full text-lg font-semibold")}
                      href={`#${item.id}`}
                      onClick={toggleSidebar}
                      aria-label={item.title}
                    >
                      {item.title}
                    </Link>
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
