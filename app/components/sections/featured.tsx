import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'

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
      <div className='p-6 bg-neutral-300 border-t border-neutral-800'>
        <h2
          className='font-bold text-xl uppercase text-neutral-800'
          id='projects'
        >
          Featured projects
        </h2>
        <p className='text-lg font-medium text-neutral-700 max-w-4xl mt-2'>
          A selection of recent projects showcasing my work in frontend
          development, UI design, and interactive tools.
        </p>
      </div>
      <div className='border-t border-neutral-800'>
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
      className='group relative h-32 flex items-center justify-between px-16 border-b border-neutral-800 transition hover:bg-neutral-800 duration-300'
    >
      <p className='text-4xl text-neutral-800 font-medium group-hover:text-white group-hover:translate-x-6 transition'>
        {name}
      </p>

      {badge ? <Badge>{badge}</Badge> : null}
      <ArrowUpRight
        strokeWidth={1}
        absoluteStrokeWidth
        className='w-10 h-10 text-neutral-800 opacity-0 -translate-x-8 transition duration-300 group-hover:translate-x-0 group-hover:text-white group-hover:opacity-100'
      />
    </Link>
  )
}

function Badge({ children }: { children: React.ReactNode }) {
  return (
    <div className='absolute right-40 px-3 py-1 border-2 border-neutral-800 bg-transparent text-sm font-semibold text-neutral-800 rounded-full group-hover:text-white group-hover:border-white transition'>
      {children}
    </div>
  )
}
