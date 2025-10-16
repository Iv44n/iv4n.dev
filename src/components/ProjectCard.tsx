import { SiGithub, SiVercel } from 'react-icons/si'
import type { Project } from '@/constants/projects'

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <div className='bg-neutral-900/50 rounded-lg p-6 flex flex-col justify-between'>
      <div>
        <h3 className='text-xl font-medium'>{project.title}</h3>
        <p className='text-foreground-alt mt-2'>{project.description}</p>
        <div className='flex flex-wrap gap-2 mt-4'>
          {project.technologies.map(tech => (
            <span
              key={tech}
              className='bg-neutral-800 text-neutral-300 text-xs font-medium px-2.5 py-1 rounded-full'
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
      <div className='flex gap-4 mt-6'>
        {project.urls.github && (
          <a
            href={project.urls.github}
            target='_blank'
            rel='noopener noreferrer'
            className='flex items-center gap-2 px-4 py-2 rounded-lg transition-colors bg-neutral-800 text-neutral-300 hover:bg-neutral-700'
          >
            <SiGithub />
            GitHub
          </a>
        )}
        {project.urls.live && (
          <a
            href={project.urls.live}
            target='_blank'
            rel='noopener noreferrer'
            className='flex items-center gap-2 px-4 py-2 rounded-lg transition-colors bg-emerald-400 text-neutral-900 hover:bg-emerald-500'
          >
            <SiVercel />
            Live
          </a>
        )}
      </div>
    </div>
  )
}
