import { cn } from '@/lib/utils'

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
}
export default function Card({ children, className, ...props }: CardProps) {
  return (
    <div className={cn('flex flex-col items-center gap-4 rounded-sm bg-muted p-6', className)} {...props}>
      {children}
    </div>
  )
}
