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
      aria-label='Contact Information'
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
        Contact Info
      </h2>
      <p className='mt-3 text-gray-400 text-xl md:text-2xl'>
        Feel free to reach out by filling this form
      </p>
    </header>
  )
}

function SocialLinks() {
  return (
    <footer className='mt-12 flex flex-col md:flex-row md:items-center md:gap-6 text-lg'>
      <span className='font-semibold text-gray-300 mb-2 md:mb-0'>
        Also find me on:
      </span>
      <nav className='flex gap-6' aria-label='Social media links'>
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
