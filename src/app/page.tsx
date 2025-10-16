import Contact from '@/components/Contact'
import Hero from '@/components/Hero'
import Projects from '@/components/Projects'
import Skills from '@/components/Skills'

export default function Home() {
  return (
    <main
      aria-label='Hero section'
      className='w-full min-h-screen flex flex-col items-center px-4 space-y-28'
    >
      <Hero />
      <Projects />
      <Skills />
      <Contact />
    </main>
  )
}
