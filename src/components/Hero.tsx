'use client'

import { gsap } from 'gsap'
import { SplitText } from 'gsap/SplitText'
import Link from 'next/link'
import { useEffect, useRef } from 'react'

gsap.registerPlugin(SplitText)

export default function Hero() {
  const titleRef = useRef<HTMLHeadingElement>(null)

  useEffect(() => {
    if (!titleRef.current) return

    const split = new SplitText(titleRef.current, { type: 'lines' })

    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } })

    tl.from(split.lines, {
      y: 100,
      opacity: 0,
      duration: 0.6,
      ease: 'back.out(1.7)',
      stagger: 0.15
    })

    return () => {
      tl.kill()
      split.revert()
    }
  }, [])

  const name = 'Ivan'
  const role = 'Desarrollador Full-Stack & Mobile.'
  const tagline =
    'Ingeniero de software con experiencia en React, Next.js, Node.js, Astro, Expo y React Native. Disfruto transformar ideas en soluciones digitales innovadoras, eficientes y altamente escalables.'

  return (
    <section id='about' aria-label='Acerca de mí' className='w-full mb-20'>
      <div className='flex flex-col justify-between gap-5 lg:flex-row lg:items-end lg:min-h-[calc(100vh-30rem)] mt-20 lg:mt-0'>
        <div className='flex-1'>
          <span className='block text-[clamp(1rem,3vw,1.25rem)] tracking-wider mb-4 pl-0.5'>
            Hola, mi nombre es
          </span>

          <h1
            ref={titleRef}
            className='uppercase text-[clamp(2.8rem,6vw,5rem)] leading-[0.95] font-bold font-stylistic'
          >
            <span>{name},</span>
            <br />
            <span className='text-emerald-500'>{role}</span>
          </h1>
        </div>

        <p className='lg:w-[40%] text-foreground-alt text-[clamp(1.2rem,3vw,1.6rem)] pl-0.5'>
          {tagline}
        </p>
      </div>
      <div className='flex justify-end w-full'>
        <Link
          href='#projects'
          className='lg:w-[40%] flex gap-2 rounded-full border border-foreground p-1.5 lg:border-0 lg:p-0 self-end mt-13 hover:opacity-50 transition-opacity'
        >
          <span className='w-full hidden lg:block uppercase border-b border-foreground mb-2'>
            Ir a proyectos
          </span>
          <svg
            width={24}
            height={24}
            fill='none'
            viewBox='0 0 24 24'
            aria-hidden='true'
            className='lg:mt-1.5'
          >
            <path
              stroke='currentColor'
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth={1}
              d='M12 4v16m0 0l-4-4m4 4l4-4'
            />
          </svg>
        </Link>
      </div>
    </section>
  )
}
