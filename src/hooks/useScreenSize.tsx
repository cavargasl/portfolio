import { useState, useEffect } from 'react'

interface ScreenSize {
  SM: boolean
  MD: boolean
  LG: boolean
}
const breakpoints = {
  SM: 640, // Valor del breakpoint "sm" en Tailwind (640px)
  MD: 768, // Valor del breakpoint "md" en Tailwind (768px)
  LG: 1024, // Valor del breakpoint "lg" en Tailwind (1024px)
}
export default function useScreenSize() {
  const [isScreenLargerThan, setIsScreenLargerThan] = useState<ScreenSize>({ SM: false, MD: false, LG: false })
  
  useEffect(() => {
    const checkScreenSize = () => {
      const isLargerThanSM = window.innerWidth >= breakpoints.SM
      const isLargerThanMD = window.innerWidth >= breakpoints.MD
      const isLargerThanLG = window.innerWidth >= breakpoints.LG
      setIsScreenLargerThan({ SM: isLargerThanSM, MD: isLargerThanMD, LG: isLargerThanLG })
    }

    checkScreenSize()
    window.addEventListener('resize', checkScreenSize)
    return () => window.removeEventListener('resize', checkScreenSize)
  }, [])

  return isScreenLargerThan
}
