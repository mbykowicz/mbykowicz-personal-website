import { cn } from '../lib/utils'

export default function Container({
  children,
  className,
}: React.ComponentProps<'div'>) {
  return (
    <div className={cn('container mx-auto max-w-7xl px-5 md:px-0', className)}>
      {children}
    </div>
  )
}
