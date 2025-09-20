'use client'

import { gsap } from 'gsap'
import Image from 'next/image'
import { useLayoutEffect, useRef } from 'react'
import { projects } from '@/constants/projects'

export default function ProjectList() {
  const containerRef = useRef<HTMLDivElement>(null)

  useLayoutEffect(() => {
    if (!containerRef.current) return

    const itemTls: gsap.core.Timeline[] = []
    const items = Array.from(
      containerRef.current.querySelectorAll('.project-item')
    ) as HTMLElement[]

    const io = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (!entry.isIntersecting) return
          const el = entry.target as HTMLElement
          const imgEl = el.querySelector('img') as HTMLElement | null
          const titleEl = el.querySelector('h2') as HTMLElement | null
          const tl = gsap.timeline({ defaults: { ease: 'power3.out' } })
          if (imgEl) {
            tl.fromTo(
              imgEl,
              { y: 40, opacity: 0, scale: 0.98 },
              { y: 0, opacity: 1, scale: 1, duration: 0.9 }
            )
          }
          if (titleEl) {
            tl.fromTo(
              titleEl,
              { y: 18, opacity: 0 },
              { y: 0, opacity: 1, duration: 0.6 },
              '-=0.6'
            )
          }
          itemTls.push(tl)
          io.unobserve(el)
        })
      },
      {
        threshold: 0.18,
        root: null,
        rootMargin: '0px 0px -8% 0px'
      }
    )

    items.forEach(item => {
      const imgEl = item.querySelector('img') as HTMLElement | null
      const titleEl = item.querySelector('h2') as HTMLElement | null
      if (imgEl) gsap.set(imgEl, { opacity: 0, y: 40, scale: 0.98 })
      if (titleEl) gsap.set(titleEl, { opacity: 0, y: 18 })
      io.observe(item)
    })

    return () => {
      itemTls.forEach(t => {
        t.kill()
      })
      io.disconnect()
    }
  }, [])

  return (
    <section
      id='projects'
      aria-label='Proyectos'
      ref={containerRef}
      className='mt-12 flex justify-center'
    >
      <div className='w-full rounded-2xl overflow-hidden'>
        {projects.map(project => (
          <div key={project.title} className='mb-20 project-item'>
            <div className='rounded-md'>
              <div className='rounded-md overflow-hidden'>
                <Image
                  src={project.imageUrl}
                  alt={`Vista previa del proyecto ${project.title}`}
                  width={1000}
                  height={600}
                  priority
                  sizes='(max-width: 768px) 100vw, 980px'
                  className='object-cover'
                />
              </div>
            </div>
            <div className='py-4 flex items-center gap-1'>
              <span className='bg-emerald-500 rounded-full p-1'></span>
              <h2 className='text-xl font-semibold uppercase'>
                {project.title}
              </h2>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
