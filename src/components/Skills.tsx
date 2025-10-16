import { skills } from '@/constants/skills'
import { SKILL_ICON_MAP } from './icon-map'

export default function Skills() {
  return (
    <section
      id='skills'
      aria-label='Habilidades'
      className='flex flex-col items-start justify-center w-full z-40'
    >
      <header className='text-start mb-12'>
        <h2 className='text-2xl md:text-4xl font-medium uppercase'>
          Habilidades
        </h2>
        <p className='mt-3 text-foreground-alt text-lg md:text-2xl'>
          Estas son algunas de las tecnologías con las que he trabajado.
        </p>
      </header>
      <div className='w-full grid grid-cols-2 md:grid-cols-4 gap-12'>
        {Object.entries(skills).map(([category, skillList]) => (
          <div key={category}>
            <h3 className='text-xl font-medium mb-4 capitalize'>{category}</h3>
            <div className='flex flex-col gap-4'>
              {skillList.map(skill => (
                <div key={skill} className='flex items-center gap-2'>
                  {SKILL_ICON_MAP[skill]}
                  <span>{skill}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
