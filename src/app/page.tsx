import Hero from '@/components/Hero'
import ProjectList from '@/components/ProjectList'

export default function Home() {
  return (
    <main
      aria-label='Hero section'
      className='w-full min-h-screen flex flex-col items-center px-4 py-20 lg:py-24 lg:px-16'
    >
      <Hero />
      <ProjectList />
    </main>
  )
}
