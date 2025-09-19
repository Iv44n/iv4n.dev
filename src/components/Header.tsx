'use client'
import gsap from 'gsap'
import Link from 'next/link'
import { useEffect, useRef, useState } from 'react'
import Hamburger from './Hamburger'

const navLinks = [
  { href: '#about', label: 'About' },
  { href: '#projects', label: 'Projects' },
  { href: '#contact', label: 'Contact' }
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
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const toggleMenu = () => {
    setIsOpen(prev => !prev)
    if (tlRef.current) {
      const isReversed = tlRef.current.reversed()
      tlRef.current.reversed(!isReversed)
    }
  }

  return (
    <header className='sticky top-0 left-0 w-full z-50 p-4 lg:px-16'>
      <div className='w-full h-[2.5px] mb-1 border-b-[1px] border-emerald-500'>
        <div
          ref={barRef}
          className='h-[2.5px] bg-emerald-500'
          style={{ width: '0%' }}
        />
      </div>
      <div className='flex justify-between items-center'>
        <div className='z-50 flex items-center gap-1'>
          <span className='bg-emerald-500 rounded-full p-1'></span>
          <p className='text-lg font-medium uppercase'>iv4n.dev</p>
        </div>
        <Hamburger onClick={toggleMenu} isOpen={isOpen} />
        <nav
          ref={menuRef}
          className='absolute top-0 left-0 w-full z-40 h-0 overflow-hidden px-8 lg:px-16 bg-[#abd69f]'
        >
          <ul className='flex flex-col gap-2 justify-center h-full'>
            {navLinks.map((link, i) => (
              <li
                key={link.href}
                ref={el => {
                  if (el) linksRef.current[i] = el
                }}
              >
                <Link
                  href={link.href}
                  onClick={toggleMenu}
                  className='text-7xl font-buda uppercase'
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  )
}
