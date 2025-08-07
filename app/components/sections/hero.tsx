import Link from 'next/link'
import Container from '../container'

export default function Hero() {
  return (
    <Container className='my-48 flex flex-col gap-4 justify-center items-center'>
      <h1 className='font-bold tracking-tight text-6xl max-w-3xl text-balance text-center'>
        Custom Frontend Solutions That Look Good and Work Smoothly
      </h1>
      <p className='max-w-2xl text-xl text-center'>
        I&apos;m a frontend developer with a passion for building interactive
        web applications using React, Next.js, and the Canvas API. I care deeply
        about clean code, thoughtful UI design, and creating tools that solve
        real problems — visually and intuitively.
      </p>
      <Link
        href='mailto:hello@mbykowicz.com'
        className='group relative mt-6 px-6 py-2 rounded-full text-lg font-medium bg-neutral-900 text-white hover:bg-neutral-800 transition'
      >
        Let&apos;s talk
        <div className='translate-y-6 opacity-0 absolute -right-9 -top-2 transition-all duration-300 group-hover:scale-200 group-hover:rotate-20 group-hover:translate-y-0 group-hover:opacity-100 before:absolute before:inset-x-1 before:h-3 before:-bottom-1 before:rounded-full before:bg-neutral-500 before:-z-10 before:blur-sm'>
          💬
        </div>
      </Link>
    </Container>
  )
}
