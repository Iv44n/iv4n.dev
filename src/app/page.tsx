import Contact from '@/components/Contact'
import Hero from '@/components/Hero'
import ProjectList from '@/components/ProjectList'

export default function Home() {
  return (
    <main
      aria-label='Hero section'
      className='w-full min-h-screen flex flex-col items-center px-[5.2%] md:px-[3%]'
    >
      <Hero />
      <ProjectList />
      <Contact />
    </main>
  )
}
