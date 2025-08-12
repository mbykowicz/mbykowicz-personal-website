import { cn } from '@/lib/utils'
import { ComponentProps } from 'react'

export default function SectionHeading({
  children,
  className,
}: ComponentProps<'h2'>) {
  return (
    <h2
      className={cn(
        'relative mb-4 text-5xl font-bold text-neutral-800 after:absolute after:left-0 after:-bottom-9 after:w-48 after:h-3 after:bg-neutral-800',
        className,
      )}
      id='projects'
    >
      {children}
    </h2>
  )
}
