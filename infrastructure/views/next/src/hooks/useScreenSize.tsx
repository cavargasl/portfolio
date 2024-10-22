import { useEffect, useState } from 'react'

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
const breakpointsTaller = {
  SM: 464,
  MD: 564,
  LG: 664,
}
const getInitialScreenSize = (): ScreenSize => ({
  SM: window.innerWidth >= breakpoints.SM,
  MD: window.innerWidth >= breakpoints.MD,
  LG: window.innerWidth >= breakpoints.LG,
})

const getInitialScreenTallerSize = (): ScreenSize => ({
  SM: window.innerHeight >= breakpointsTaller.SM,
  MD: window.innerHeight >= breakpointsTaller.MD,
  LG: window.innerHeight >= breakpointsTaller.LG,
})
export default function useScreenSize() {
  const [isScreenLargerThan, setIsScreenLargerThan] = useState<ScreenSize>(getInitialScreenSize)
  const [isScreenTallerThan, setIsScreenTallerThan] = useState<ScreenSize>(getInitialScreenTallerSize)

  useEffect(() => {
    const checkScreenSize = () => {
      const isLargerThanSM = window.innerWidth >= breakpoints.SM
      const isLargerThanMD = window.innerWidth >= breakpoints.MD
      const isLargerThanLG = window.innerWidth >= breakpoints.LG
      const isLargerTallerSM = window.innerHeight >= breakpointsTaller.SM
      const isLargerTallerMD = window.innerHeight >= breakpointsTaller.MD
      const isLargerTallerLG = window.innerHeight >= breakpointsTaller.LG
      setIsScreenLargerThan({ SM: isLargerThanSM, MD: isLargerThanMD, LG: isLargerThanLG })
      setIsScreenTallerThan({ SM: isLargerTallerSM, MD: isLargerTallerMD, LG: isLargerTallerLG })
    }

    window.addEventListener('resize', checkScreenSize)
    return () => window.removeEventListener('resize', checkScreenSize)
  }, [])

  return { isScreenLargerThan, isScreenTallerThan }
}
