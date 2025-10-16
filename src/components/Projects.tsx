import { projects } from '@/constants/projects'
import { GITHUB_PROFILE_URL } from '@/constants/urls'
import Button from './Button'
import ProjectCard from './ProjectCard'

export default function Projects() {
  return (
    <section
      id='projects'
      aria-label='Proyectos'
      className='flex flex-col items-start justify-center w-full z-40'
    >
      <header className='text-start mb-12'>
        <h2 className='text-2xl md:text-4xl font-medium uppercase'>
          Proyectos
        </h2>
        <p className='mt-3 text-foreground-alt text-lg md:text-2xl'>
          Estos son algunos de los proyectos en los que he trabajado.
        </p>
      </header>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-8 w-full'>
        {projects.map(project => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
      <div className='w-full flex justify-center mt-8'>
        <Button as='a' href={GITHUB_PROFILE_URL} variant='secondary'>
          Ver más en GitHub
        </Button>
      </div>
    </section>
  )
}
