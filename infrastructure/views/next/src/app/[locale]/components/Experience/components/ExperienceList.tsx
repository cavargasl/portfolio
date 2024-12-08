import React, { Fragment, type ReactElement, forwardRef } from 'react'
import { cn } from '@/lib/utils'
import { Separator } from '@/components/ui/Separator'

interface ExperienceListProps extends React.HTMLAttributes<HTMLDivElement> {
  children: ReactElement[]
}
const ExperienceList = forwardRef<HTMLDivElement, ExperienceListProps>(({ className, ...props }, ref) => {
  const { children } = props

  const childrenArray = React.Children.toArray(children).filter(Boolean)

  return (
    <div
      ref={ref}
      className={cn(
        'relative grid w-full grid-cols-[1.5rem_1fr] justify-items-center gap-x-1 gap-y-6 sm:gap-6 sm:gap-x-4 xl:grid-cols-[1fr_1.5rem_1fr] xl:gap-x-8',
        className
      )}
      {...props}
    >
      <Separator orientation='vertical' className='absolute left-3 bg-secondary xl:left-1/2' />
      {childrenArray.map((job, idx) => {
        return (
          <Fragment key={idx}>
            <Dot className='col-start-1 xl:hidden' />
            {idx % 2 === 0 ? job : null}
            <Dot className='col-start-2 hidden xl:flex' />
            {idx % 2 !== 0 ? job : null}
          </Fragment>
        )
      })}
    </div>
  )
})
ExperienceList.displayName = 'ExperienceList'

interface DotProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode
}
const Dot = forwardRef<HTMLDivElement, DotProps>(({ className, ...props }, ref) => {
  return (
    <span
      ref={ref}
      className={cn('z-10 flex h-6 w-6 items-center justify-center rounded-full border border-secondary bg-background', className)}
      {...props}
    >
      <span ref={ref} className={cn('h-3 w-3 rounded-full bg-secondary', className)} {...props} />
    </span>
  )
})
Dot.displayName = 'Dot'

export { ExperienceList }
