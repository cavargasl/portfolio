"use client"
import { IconMoon, IconSun } from "@/components/Icons"
import { useScopedI18n } from "@/locale/client"
import { useTheme } from "next-themes"

export function ThemeToggle() {
  const { setTheme, theme } = useTheme()
  const scopedT = useScopedI18n("commons")

  return (
    <button
      className="relative"
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      aria-label={scopedT("toggleTheme")}
    >
      <IconSun
        className="h-6 w-6 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0"
        aria-hidden="true"
      />
      <IconMoon
        className="absolute left-0 top-0 h-6 w-6 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100"
        aria-hidden="true"
      />
    </button>
  )
}
