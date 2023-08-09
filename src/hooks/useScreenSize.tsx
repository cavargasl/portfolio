import { useState, useEffect } from 'react'

interface ScreenSize {
  SM: boolean
  MD: boolean
}
const breakpoints = {
  SM: 640, // Valor del breakpoint "sm" en Tailwind (640px)
  MD: 768, // Valor del breakpoint "md" en Tailwind (768px)
}
export default function useScreenSize() {
  const [isScreenLargerThan, setIsScreenLargerThan] = useState<ScreenSize>({ SM: false, MD: false })
  
  useEffect(() => {
    const checkScreenSize = () => {
      const isLargerThanSM = window.innerWidth >= breakpoints.SM
      const isLargerThanMD = window.innerWidth >= breakpoints.MD
      setIsScreenLargerThan({ SM: isLargerThanSM, MD: isLargerThanMD })
    }

    checkScreenSize()
    window.addEventListener('resize', checkScreenSize)
    return () => window.removeEventListener('resize', checkScreenSize)
  }, [])

  return isScreenLargerThan
}
