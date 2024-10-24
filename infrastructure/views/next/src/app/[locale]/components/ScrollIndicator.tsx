'use client'

import { motion, useScroll } from 'framer-motion'

export default function ScrollIndicator() {
  const { scrollYProgress } = useScroll()
  return <motion.div style={{ scaleX: scrollYProgress }} className='fixed inset-x-0 top-0 z-50 h-2 origin-left bg-tertiary lg:right-64' />
}
