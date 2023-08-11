"use client"
import { IconMoon, IconSun } from "@/components/Icons"
import { Button } from "@/components/ui/Button"
import { useScopedI18n } from "@/locale/client"
import { useTheme } from "next-themes"

export function ThemeToggle() {
  const { setTheme, theme } = useTheme()
  const scopedT = useScopedI18n("commons")

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      aria-label={scopedT("toggleTheme")}
    >
      <IconSun
        className="h-6 w-6 rotate-0 scale-100 transition-all duration-200 dark:-rotate-90 dark:scale-0"
        aria-hidden="true"
      />
      <IconMoon
        className="absolute h-6 w-6 rotate-90 scale-0 transition-all duration-200 dark:rotate-0 dark:scale-100"
        aria-hidden="true"
      />
    </Button>
  )
}
