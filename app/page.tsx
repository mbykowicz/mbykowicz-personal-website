import Container from './components/container'
import Featured from './components/sections/featured'
import Hero from './components/sections/hero'
import Navigation from './components/sections/navigation'

export default function Home() {
  return (
    <div className='min-h-screen'>
      <Navigation />
      <Container className='border-x border-neutral-800'>
        <Hero />
        <Featured />
      </Container>
    </div>
  )
}
