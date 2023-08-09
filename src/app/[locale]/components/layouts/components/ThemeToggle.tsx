"use client"
import { useScopedI18n } from "@/locale/client"
import { useTheme } from "next-themes"

export function ThemeToggle() {
  const { setTheme, theme } = useTheme()
  const scopedT = useScopedI18n("commons")
  return (
    <div className="toggle-theme">
      <label className="toggle-label">
        <input
          type="checkbox"
          checked={theme === "light"}
          className="toggle-checkbox"
          onChange={() => setTheme(theme === "light" ? "dark" : "light")}
          aria-label={scopedT("toggleTheme")}
        />
        <span className="toggle-slider"></span>
      </label>
    </div>
  )
}
