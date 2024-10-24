import React from 'react'
import { type SidebarNavItem } from '@/types'
import { cn } from '@/lib/utils'

type SectionContainerProps = {
  navItem?: SidebarNavItem
} & React.HTMLAttributes<HTMLElement>

export default function SectionContainer({ navItem, className, ...props }: SectionContainerProps) {
  return (
    <section
      id={navItem?.id}
      aria-label={navItem?.title}
      className={cn(
        'mx-auto flex h-full min-h-screen w-full max-w-screen-2xl snap-start flex-col items-center gap-16 p-8 lg:px-12',
        className
      )}
      {...props}
    />
  )
}
