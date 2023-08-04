"use client"
import { useTheme } from "next-themes"

export function ThemeToggle() {
  const { setTheme, theme } = useTheme()

  return (
    <div className="toggle-theme">
      <label className="toggle-label">
        <input type="checkbox" checked={theme === "light"} className="toggle-checkbox" onChange={() => setTheme(theme === "light" ? "dark" : "light")} />
        <span className="toggle-slider"></span>
      </label>
    </div>
  )
}
