import Link from 'next/link'
import Container from '@/components/container'

export default function Navigation({}: React.ComponentProps<'header'>) {
  return (
    <header className='h-[var(--header-height)] flex items-center border-b border-neutral-800'>
      <Container className='relative h-full px-4 2xl:px-0'>
        <nav className='flex items-center justify-between h-full'>
          <div>
            <Link
              href='/'
              className='relative overflow-hidden font-black tracking-tighter uppercase text-neutral-800'
            >
              <div>Mateusz</div>
              <div className='-mt-1.5'>Bykowicz</div>
            </Link>
          </div>
          <div className='space-x-12'>
            <NavigationItem href='/about' label='About' />
            <NavigationItem href='#projects' label='Projects' />
            <NavigationItem href='#contact' label='Contact' />
          </div>
        </nav>
      </Container>
    </header>
  )
}

function NavigationItem({ href, label }: { href: string; label: string }) {
  return (
    <Link
      href={href}
      className='relative overflow-hidden font-bold text-lg p-1 text-neutral-800 tracking-tight before:transition-all before:duration-300 before:absolute before:w-0 before:left-0 before:opacity-0 before:bottom-0 before:-mb-1.5 before:h-0.5 before:bg-neutral-800 hover:before:w-full hover:before:opacity-100'
    >
      {label}
    </Link>
  )
}
