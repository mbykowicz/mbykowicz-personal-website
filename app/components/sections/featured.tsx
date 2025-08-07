import Link from 'next/link'
import Container from '../container'
import { ArrowUpRight } from 'lucide-react'

const items = [
  {
    name: 'Canvas 2D Starter Kit',
    href: '/',
    description:
      'A foundational toolkit designed to simplify the creation of interactive, extensible canvas-based editors.',
    badge: 'Comming Soon',
  },
  {
    name: 'PV Planner',
    href: '/',
    description:
      'A web application that allows users to visually design and plan photovoltaic (solar panel) installations on rooftops.',
  },
  {
    name: 'Table Designer for Laravel',
    href: '/',
    description:
      'Tool for Laravel developers to visually design database tables and generate migration files with ease.',
    badge: 'In Progress',
  },
  {
    name: 'Travel Guide Creator',
    href: '/',
    description:
      'A tool for creating visually engaging travel guides, allowing users to design itineraries, maps, and travel tips with ease.',
  },
]

export default function Featured() {
  return (
    <Container className='my-10'>
      <h2 className='font-bold text-2xl'>Featured projects</h2>
      <p className='text-lg text-neutral-600 max-w-xl mt-2'>
        A selection of recent projects showcasing my work in frontend
        development, UI design, and interactive tools.
      </p>
      <div className='border-t border-neutral-800 mt-14'>
        {items.map((item, index) => (
          <FeatureItem
            key={index}
            name={item.name}
            href={item.href}
            description={item.description}
            badge={item.badge}
          />
        ))}
      </div>
    </Container>
  )
}

function FeatureItem({
  name,
  href,
  description,
  badge,
}: {
  name: string
  href: string
  description?: string
  badge?: string
}) {
  return (
    <Link
      href={href}
      className='group relative h-32 flex items-center justify-between px-16 border-b border-neutral-800 transition hover:bg-neutral-800 duration-300'
    >
      <div className='space-y-2'>
        <p className='text-4xl text-neutral-800 font-medium group-hover:text-white transition'>
          {name}
        </p>
        <p className=' text-neutral-600 max-w-4xl group-hover:text-white transition'>
          {description}
        </p>
      </div>
      {badge ? <Badge>{badge}</Badge> : null}
      <ArrowUpRight
        strokeWidth={1}
        absoluteStrokeWidth
        className='w-10 h-10 text-neutral-800 transition group-hover:-translate-x-4 group-hover:text-white'
      />
    </Link>
  )
}

function Badge({ children }: { children: React.ReactNode }) {
  return (
    <div className='absolute right-40 px-3 py-1 bg-white text-sm font-semibold text-neutral-600 rounded-full'>
      {children}
    </div>
  )
}
