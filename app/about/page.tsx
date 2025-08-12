import Container from '@/components/container'
import SectionHeading from '@/components/section-heading'

export default function About() {
  return (
    <Container className='mt-24'>
      <SectionHeading>About Me</SectionHeading>
      <div className='max-w-6xl mx-auto mt-12 space-y-6 text-2xl leading-relaxed text-justify'>
        <p>
          I&apos;m a frontend developer who loves turning ideas into functional,
          beautiful, and user-friendly web applications. My technical toolkit
          includes React, Next.js, TypeScript, and the Canvas API, as well as
          backend experience with Laravel and REST API integrations.
        </p>
        <p>
          I&apos;m especially passionate about creating interactive, visual
          tools such as custom 2D editors and layout planners, where I can merge
          my interest in geometry, UI design, and smooth user interaction.
        </p>
        <p>
          In addition to development, I design the user interfaces for my
          projects, ensuring a balance between aesthetics, usability, and
          performance. My approach is driven by clean code, modular
          architecture, and attention to detail — I believe great interfaces are
          as much about how they work as how they look.
        </p>
        <p>
          Before focusing entirely on software, I worked in the photovoltaic
          industry, managing projects and coordinating technical teams for
          prosumer solar installations. This experience strengthened my skills
          in organization, communication, and problem-solving — qualities I now
          bring into my development work. Whether I&apos;m coding, designing, or
          collaborating, my goal is the same: deliver solutions that not only
          work well but also feel great to use.
        </p>
      </div>
    </Container>
  )
}
