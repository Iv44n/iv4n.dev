'use client'

import { INSTAGRAM_URL, LINKEDIN_URL } from '@/constants/urls'
import ContactForm from './ContactForm'

const SOCIAL_LINKS = [
  { name: 'Instagram', url: INSTAGRAM_URL },
  { name: 'LinkedIn', url: LINKEDIN_URL }
]

export default function Contact() {
  return (
    <section
      id='contact'
      aria-label='Información de contacto'
      className='min-h-screen flex flex-col items-start justify-center w-full md:px-[10%] pt-[25%] lg:pt-[5%]'
    >
      <ContactHeader />
      <ContactForm />
      <SocialLinks />
    </section>
  )
}

function ContactHeader() {
  return (
    <header className='text-start mb-12'>
      <h2 className='text-4xl md:text-4xl font-bold tracking-wide uppercase'>
        Información de contacto
      </h2>
      <p className='mt-3 text-gray-400 text-xl md:text-2xl'>
        No dudes en ponerte en contacto rellenando este formulario
      </p>
    </header>
  )
}

function SocialLinks() {
  return (
    <footer className='mt-12 flex flex-col md:flex-row md:items-center md:gap-6 text-xl pb-20 md:pb-0'>
      <span className='font-semibold text-gray-300 mb-2 md:mb-0'>
        También me puedes encontrar en:
      </span>
      <nav className='flex gap-6' aria-label='Enlaces a redes sociales'>
        {SOCIAL_LINKS.map(({ name, url }) => (
          <a
            key={name}
            href={url}
            target='_blank'
            rel='noopener noreferrer'
            className='text-gray-400 hover:text-emerald-400 transition-colors'
          >
            {name}
          </a>
        ))}
      </nav>
    </footer>
  )
}
