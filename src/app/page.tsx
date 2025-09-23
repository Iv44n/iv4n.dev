import Hero from '@/components/Hero'
import ProjectList from '@/components/ProjectList'

export default function Home() {
  return (
    <main
      aria-label='Hero section'
      className='w-full min-h-screen flex flex-col items-center px-[5.2%] md:px-[3%] lg:px-[2%]'
    >
      <Hero />
      <ProjectList />
      <section id='contact' aria-label='Contacto' className='w-full mt-16'>
        <div className='py-4 flex items-center gap-2'>
          <span className='bg-emerald-500 rounded-full p-1'></span>
          <h2 className='text-xl font-semibold uppercase'>Contacto</h2>
        </div>
        <p className='text-neutral-800'>
          Puedes escribirme a{' '}
          <a
            className='text-emerald-700 underline'
            href='mailto:ivan@example.com'
          >
            ivan@example.com
          </a>{' '}
          o encontrarme en LinkedIn y GitHub.
        </p>
      </section>
    </main>
  )
}
