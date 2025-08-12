import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import SectionHeading from '../section-heading'

const items = [
  {
    name: 'Canvas 2D Starter Kit',
    href: '/',
    badge: 'Comming Soon',
  },
  {
    name: 'PV Planner',
    href: '/',
    badge: 'In Progress',
  },
  {
    name: 'Table Designer for Laravel',
    href: '/',
    badge: 'In Progress',
  },
  {
    name: 'Travel Guide Creator',
    href: '/',
    badge: 'In Progress',
  },
  {
    name: 'Expense Tracker Mobile App',
    href: '/',
  },
]

export default function Featured() {
  return (
    <div className='my-10'>
      <SectionHeading>Featured Projects</SectionHeading>
      <div className='max-w-6xl mx-auto border-t border-neutral-800'>
        {items.map((item, index) => (
          <FeatureItem
            key={index}
            name={item.name}
            href={item.href}
            badge={item.badge}
          />
        ))}
      </div>
    </div>
  )
}

function FeatureItem({
  name,
  href,
  badge,
}: {
  name: string
  href: string
  badge?: string
}) {
  return (
    <Link
      href={href}
      className='relative flex items-center justify-between h-32 px-16 transition duration-300 border-b group border-neutral-800 hover:bg-neutral-800'
    >
      <p className='text-4xl font-medium transition text-neutral-800 group-hover:text-white group-hover:translate-x-6'>
        {name}
      </p>

      {badge ? <Badge>{badge}</Badge> : null}
      <ArrowUpRight
        strokeWidth={1}
        absoluteStrokeWidth
        className='w-10 h-10 transition duration-300 -translate-x-8 opacity-0 text-neutral-800 group-hover:translate-x-0 group-hover:text-white group-hover:opacity-100'
      />
    </Link>
  )
}

function Badge({ children }: { children: React.ReactNode }) {
  return (
    <div className='absolute px-3 py-1 text-sm font-semibold transition bg-transparent border-2 rounded-full right-40 border-neutral-800 text-neutral-800 group-hover:text-white group-hover:border-white'>
      {children}
    </div>
  )
}
