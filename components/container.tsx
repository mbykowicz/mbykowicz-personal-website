import { cn } from '@/lib/utils'

export default function Container({
  children,
  className,
}: React.ComponentProps<'div'>) {
  return (
    <div className={cn('container mx-auto max-w-7xl', className)}>
      {children}
    </div>
  )
}
