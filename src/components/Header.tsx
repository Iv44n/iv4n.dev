'use client'

import gsap from 'gsap'
import Link from 'next/link'
import { useCallback, useEffect, useRef, useState } from 'react'
import {
  GITHUB_PROFILE_URL,
  INSTAGRAM_URL,
  LINKEDIN_URL
} from '@/constants/urls'
import Hamburger from './Hamburger'

const navLinks = [
  { href: '/', label: 'Sobre mí' },
  { href: '#projects', label: 'Proyectos' },
  { href: '#skills', label: 'Habilidades' },
  { href: '#contact', label: 'Contacto' }
]

const socialLinks = [
  { href: INSTAGRAM_URL, label: 'Instagram' },
  { href: LINKEDIN_URL, label: 'LinkedIn' },
  { href: GITHUB_PROFILE_URL, label: 'GitHub' }
]

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const menuRef = useRef<HTMLDivElement>(null)
  const linksRef = useRef<HTMLLIElement[]>([])
  const barRef = useRef<HTMLDivElement>(null)
  const tlRef = useRef<gsap.core.Timeline | null>(null)

  useEffect(() => {
    if (!menuRef.current) return

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ paused: true })

      tl.to(menuRef.current, {
        duration: 1,
        clipPath: 'circle(100% at 50% 50%)',
        height: '100vh',
        ease: 'power2.inOut'
      }).from(
        linksRef.current.filter(Boolean),
        {
          duration: 1,
          opacity: 0,
          y: 20,
          stagger: 0.1,
          ease: 'power2.out'
        },
        '-=0.5'
      )

      tlRef.current = tl
      tl.reverse()
    }, menuRef)

    return () => {
      ctx.revert()
      tlRef.current?.kill()
    }
  }, [])

  useEffect(() => {
    let ticking = false

    const handleScroll = () => {
      if (!barRef.current) return
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const scrollTop = window.scrollY
          const docHeight =
            document.documentElement.scrollHeight -
            document.documentElement.clientHeight
          const scrolled = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0

          gsap.to(barRef.current, {
            width: `${scrolled}%`,
            duration: 0.2,
            ease: 'none'
          })

          ticking = false
        })
        ticking = true
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const toggleMenu = useCallback(() => {
    setIsOpen(prev => !prev)
    if (tlRef.current) {
      tlRef.current.reversed(!tlRef.current.reversed())
    }
  }, [])

  return (
    <header className='sticky top-0 left-0 z-50 w-full p-[6%] md:px-[3%] lg:px-[2%] lg:pt-[2.5%] lg:flex lg:justify-between lg:gap-[5%]'>
      <div className='lg:flex-1'>
        <div className='mb-1 h-[2.5px] w-full border-b border-neutral-500 lg:mb-5 rounded-full'>
          <div
            ref={barRef}
            className='h-[2.5px] bg-emerald-500 rounded-full'
            style={{ width: '0%' }}
          />
        </div>

        <div className='flex items-center justify-between'>
          <div className='z-50 flex items-center gap-2 tracking-widest'>
            <span className='text-xl lg:text-2xl font-stylistic'>IV4N.DEV</span>
          </div>
          <nav className='hidden flex-1 items-center justify-around gap-8 uppercase text-neutral-500 lg:flex'>
            {navLinks.map(link => (
              <Link
                key={link.href}
                href={link.href}
                className='text-xl transition-colors'
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <div className='z-50 lg:hidden'>
            <Hamburger onClick={toggleMenu} isOpen={isOpen} />
          </div>
        </div>
      </div>

      <div className='hidden items-center gap-3 lg:flex'>
        <button
          type='button'
          className='rounded-full border border-emerald-500 px-4 py-1 text-md uppercase tracking-wide'
        >
          Download CV
        </button>
        <button
          type='button'
          className='rounded-full border border-emerald-500 px-3 py-1 text-md'
        >
          EN
        </button>
      </div>

      <nav
        ref={menuRef}
        className='fixed inset-0 left-0 z-40 h-0 w-full overflow-hidden backdrop-blur-lg px-[5.6%]'
      >
        <div className='h-full flex flex-col justify-center gap-2 pb-28'>
          <ul className='flex flex-col justify-center gap-6 font-stylistic px-4'>
            {navLinks.map((link, i) => (
              <li
                className='flex items-center gap-6'
                key={link.href}
                ref={el => {
                  if (el) linksRef.current[i] = el
                }}
              >
                <span className='h-1.5 w-1.5 bg-foreground rounded-[1px]' />
                <Link
                  href={link.href}
                  onClick={toggleMenu}
                  className='font-buda text-5xl'
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <div>
            <div className='flex gap-2 border-t border-foreground py-7 border-b mt-10'>
              <button
                type='button'
                className='rounded-full border border-foreground px-5 py-2.5 uppercase pb-1.5 text-sm flex gap-2 items-center'
              >
                <span className='h-1.5 w-1.5 bg-foreground rounded-full' />
                Descargar CV
              </button>
              <Link
                href='#'
                className='rounded-full border border-foreground px-5 py-2.5 uppercase pb-1.5 text-sm'
              >
                EN
              </Link>
            </div>
            <div className='space-x-2 flex flex-col mt-5 gap-1'>
              <span className='uppercase font-bold tracking-tight'>
                Sigueme
              </span>
              <div className='flex gap-4'>
                {socialLinks.map(social => (
                  <Link
                    href={social.href}
                    key={social.label}
                    className='text-sm leading-relaxed tracking-wider hover:underline'
                    target='_blank'
                  >
                    {social.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  )
}
