import { useState, useEffect } from 'react'

export default function useScreenSize() {
  const [isScreenLargerThanSM, setIsScreenLargerThanSM] = useState(false)

  useEffect(() => {
    const checkScreenSize = () => {
      const isLargerThanSM = window.innerWidth >= 640; // Valor del breakpoint "sm" en Tailwind (640px)
      setIsScreenLargerThanSM(isLargerThanSM);
    }

    checkScreenSize()
    window.addEventListener('resize', checkScreenSize)
    return () => window.removeEventListener('resize', checkScreenSize)
  }, [])

  return { isScreenLargerThanSM }
}
