import type { Metadata } from 'next'
import localFont from 'next/font/local'
import './globals.css'

import Navigation from '@/components/sections/navigation'
import Container from '@/components/container'

const satoshi = localFont({
  src: [
    {
      path: '../public/fonts/satoshi-variable.woff2',
      style: 'normal',
    },
    {
      path: '../public/fonts/satoshi-variable-italic.woff2',
      style: 'italic',
    },
  ],
  variable: '--font-satoshi',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Mateusz Bykowicz - Full Stack Web Developer',
  description:
    'I am Mateusz Bykowicz, a full stack developer specializing in creating modern web applications and websites. Explore projects, skills, and insights into web development.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en' className='min-h-screen'>
      <body className={`${satoshi.variable} antialiased`}>
        <div className='min-h-screen'>
          <Navigation />
          {children}
        </div>
      </body>
    </html>
  )
}
