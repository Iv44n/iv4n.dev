'use client'

import { gsap } from 'gsap'
import { useLayoutEffect, useRef } from 'react'
import Button from './Button'

export default function Hero() {
  const tagline =
    'Ingeniero de software con experiencia en React, Next.js, Node.js, Astro, Expo y React Native. Disfruto transformar ideas en soluciones digitales innovadoras, eficientes y altamente escalables.'

  const sectionRef = useRef<HTMLElement>(null)
  const greetingRef = useRef<HTMLParagraphElement>(null)
  const nameRef = useRef<HTMLHeadingElement>(null)
  const titleRef = useRef<HTMLHeadingElement>(null)
  const descriptionRef = useRef<HTMLParagraphElement>(null)
  const ctaRef = useRef<HTMLDivElement>(null)
  const gradientRef = useRef<HTMLDivElement>(null)

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.set(
        [
          greetingRef.current,
          nameRef.current,
          titleRef.current,
          descriptionRef.current,
          ctaRef.current
        ],
        {
          opacity: 0,
          y: 20,
          filter: 'blur(8px)'
        }
      )

      const tl = gsap.timeline({
        defaults: {
          ease: 'power3.out',
          duration: 1
        }
      })

      const refs = [
        greetingRef.current,
        nameRef.current,
        titleRef.current,
        descriptionRef.current,
        ctaRef.current
      ]

      tl.to(refs, {
        opacity: 1,
        y: 0,
        filter: 'blur(0px)',
        duration: 1,
        stagger: 0.2,
        ease: 'power3.out'
      })

      // Animación sutil del gradiente
      gsap.to(gradientRef.current, {
        rotation: 360,
        duration: 20,
        repeat: -1,
        ease: 'none'
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={sectionRef}
      id='about'
      aria-label='Acerca de mí'
      className='relative min-h-screen flex items-center justify-center overflow-hidden'
    >
      <div className='relative space-y-6 mx-auto text-center'>
        <div className='flex justify-center'>
          <p
            ref={greetingRef}
            className='inline-flex items-center gap-2 text-sm uppercase tracking-[0.2em] text-foreground-alt'
          >
            Hola, mi nombre es
          </p>
        </div>

        <div className='space-y-6'>
          <h1
            ref={nameRef}
            className='text-7xl md:text-8xl lg:text-9xl font-bold tracking-tight'
          >
            Ivan
          </h1>

          <h2
            ref={titleRef}
            className='text-2xl md:text-3xl lg:text-4xl text-foreground-alt tracking-wide'
          >
            Desarrollador{' '}
            <span className='relative z-10 font-medium text-foreground'>
              Full-Stack
            </span>{' '}
            &{' '}
            <span className='relative z-10 font-medium text-foreground'>
              Mobile
            </span>
          </h2>
        </div>

        <p
          ref={descriptionRef}
          className='text-base md:text-lg text-foreground-alt leading-relaxed max-w-2xl mx-auto'
        >
          {tagline}
        </p>

        <div
          ref={ctaRef}
          className='flex flex-col sm:flex-row gap-4 justify-center items-center pt-4'
        >
          <Button as='a' href='#projects'>
            <span className='absolute inset-0 bg-foreground transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left' />
            <span className='relative uppercase tracking-wider text-sm group-hover:text-background transition-colors duration-300'>
              Ver proyectos
            </span>
            <svg
              aria-hidden='true'
              width={18}
              height={18}
              fill='none'
              viewBox='0 0 24 24'
              className='relative group-hover:translate-x-1 transition-transform duration-300 group-hover:text-background'
            >
              <path
                stroke='currentColor'
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M5 12h14m0 0l-6-6m6 6l-6 6'
              />
            </svg>
          </Button>

          <Button as='a' href='#contact' variant='secondary'>
            <span>Contacto</span>
            <svg
              aria-hidden={true}
              width={16}
              height={16}
              fill='none'
              viewBox='0 0 24 24'
              className='group-hover:translate-y-0.5 transition-transform duration-300'
            >
              <path
                stroke='currentColor'
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M12 5v14m0 0l-6-6m6 6l6-6'
              />
            </svg>
          </Button>
        </div>
      </div>
    </section>
  )
}
