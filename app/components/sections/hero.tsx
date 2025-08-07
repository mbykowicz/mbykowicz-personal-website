import { MessageCircleMore } from 'lucide-react'
import Link from 'next/link'

export default function Hero() {
  return (
    <div>
      <div className='h-12 flex items-center gap-6 justify-center tracking-wide px-12 font-semibold bg-neutral-800 text-white border-b border-neutral-800'>
        Looking for a frontend developer? Hire me!
      </div>
      <div className='my-48 flex flex-col gap-4 justify-center items-center'>
        <h1 className='font-bold tracking-tight text-6xl max-w-3xl text-balance text-center'>
          Custom Frontend Solutions That Look Good and Work Smoothly
        </h1>
        <p className='max-w-2xl text-xl text-center'>
          I&apos;m a frontend developer with a passion for building interactive
          web applications using React, Next.js, and the Canvas API. I care
          deeply about clean code, thoughtful UI design, and creating tools that
          solve real problems — visually and intuitively.
        </p>
        <Link
          href='mailto:hello@mbykowicz.com'
          className='group relative mt-6 px-6 py-2 rounded-full text-lg font-medium bg-neutral-900 text-white hover:bg-neutral-800 transition'
        >
          Let&apos;s talk
          <div className='translate-y-6 opacity-0 absolute -right-9 -top-2 transition-all duration-300 group-hover:scale-150 group-hover:rotate-20 group-hover:translate-y-0 group-hover:opacity-100'>
            <MessageCircleMore className='text-neutral-400' />
          </div>
        </Link>
      </div>
    </div>
  )
}
