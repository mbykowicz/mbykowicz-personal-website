import Link from 'next/link'
import Container from '../container'

interface Props extends React.ComponentProps<'header'> {}

const items = [{ href: '/', label: 'Home' }]

export default function Navigation({}: Props) {
  return (
    <header className='h-[var(--header-height)] flex items-center'>
      <Container className='h-full border-b border-neutral-300'>
        <nav className='h-full flex items-center justify-between'>
          <div>
            <Link
              href='/'
              className='relative overflow-hidden text-sm uppercase font-black text-neutral-800 tracking-tighter'
            >
              <div>Mateusz</div>
              <div className='-mt-1.5'>Bykowicz</div>
            </Link>
          </div>
          <div className='space-x-12'>
            <NavigationItem href='#about' label='About' />
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
      className='relative overflow-hidden font-semibold text-neutral-800 tracking-tight before:transition-all before:duration-300 before:absolute before:w-0 before:opacity-0 before:bottom-0 before:-mb-1.5 before:h-0.5 before:bg-neutral-800 hover:before:w-full hover:before:opacity-100'
    >
      {label}
    </Link>
  )
}
