'use client'

import { gsap } from 'gsap'
import { SplitText } from 'gsap/SplitText'
import Link from 'next/link'
import { useLayoutEffect, useRef } from 'react'

gsap.registerPlugin(SplitText)

export default function Hero() {
  const titleRef = useRef<HTMLHeadingElement>(null)

  useLayoutEffect(() => {
    if (!titleRef.current) return

    const split = new SplitText(titleRef.current, { type: 'lines' })

    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } })

    tl.from(split.lines, {
      y: 20,
      autoAlpha: 0,
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
    <section
      id='about'
      aria-label='Acerca de mí'
      className='w-full min-h-[calc(100dvh-9rem)] lg:min-h-[calc(100dvh-16rem)] flex flex-col justify-end'
    >
      <div className='flex flex-col justify-between gap-5 lg:flex-row lg:items-end lg:mt-0'>
        <div className='flex-1'>
          <span className='block text-[clamp(1rem,3vw,1.25rem)] mb-4 pl-0.5'>
            Hola, mi nombre es
          </span>

          <h1
            ref={titleRef}
            className='uppercase text-[clamp(2.6rem,5.5vw,6rem)] leading-10 md:leading-21 font-semibold lg:font-medium font-stylistic'
          >
            <span>{name},</span>
            <br />
            <span className='text-emerald-500'>{role}</span>
          </h1>
        </div>

        <p className='lg:w-[40%] text-[clamp(1.15rem,4vw,1.4rem)] leading-7 pl-0.5'>
          {tagline}
        </p>
      </div>
      <div className='flex justify-end w-full'>
        <Link
          href='#projects'
          className='lg:w-[40%] flex gap-2 rounded-full border border-foreground p-1.5 lg:border-0 lg:p-0 self-end mt-13 hover:opacity-50 transition-opacity'
        >
          <span className='w-full hidden lg:block uppercase border-b border-foreground mb-2 text-lg'>
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
