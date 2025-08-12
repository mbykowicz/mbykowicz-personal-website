import { MessageCircleMore } from 'lucide-react'
import Link from 'next/link'

export default function Hero() {
  return (
    <div className='flex flex-col items-center justify-center gap-4 h-[calc(100vh-var(--header-height))]'>
      <h1 className='max-w-3xl text-6xl font-bold tracking-tight text-center text-balance'>
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
        className='relative px-6 py-2 mt-6 text-lg font-medium text-white transition rounded-full group bg-neutral-900 hover:bg-neutral-800'
      >
        Let&apos;s talk
        <div className='absolute transition-all duration-300 translate-y-6 opacity-0 -right-9 -top-2 group-hover:scale-150 group-hover:rotate-20 group-hover:translate-y-0 group-hover:opacity-100'>
          <MessageCircleMore className='text-neutral-400' />
        </div>
      </Link>
    </div>
  )
}
