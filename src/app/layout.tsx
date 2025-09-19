import type { Metadata } from 'next'
import { Buda } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import { EMAIL_URL, GITHUB_PROFILE_URL, INSTAGRAM_URL, LINKEDIN_URL, PHONE_URL, WEBSITE_URL, WHATSAPP_URL } from '@/constants/urls'

const buda = Buda({
  variable: '--font-buda',
  subsets: ['latin'],
  weight: ['300']
})

export const metadata: Metadata = {
  metadataBase: new URL(WEBSITE_URL),
  title: {
    default:
      'Iván - Ingeniero de Software, Desarrollador Full-Stack y Desarrollador Mobile',
    template: '%s | Iván — Ingeniero de Software'
  },
  description:
    'Portfolio de Iván, un ingeniero de software, desarrollador full-stack y desarrollador mobile.',
  keywords:
    'ingeniero de software, desarrollador full-stack, desarrollador mobile, react, react native, typescript, javascript, node.js, mongodb, astro, tailwind css',
  authors: [{ name: 'Iván', url: WEBSITE_URL }],
  creator: 'Iván',
  publisher: 'Iván',
  alternates: {
    canonical: '/'
  },
  openGraph: {
    url: WEBSITE_URL,
    siteName: 'Iván — Portfolio',
    locale: 'es_ES',
    type: 'website',
    title: 'Iván - Ingeniero de Software, Desarrollador Full-Stack y Desarrollador Mobile',
    description: 'Portfolio de Iván, un ingeniero de software, desarrollador full-stack y desarrollador mobile.'
  },
  twitter: {
    card: 'summary_large_image',
    site: '@iv4n_dev',
    creator: '@iv4n_dev',
    title: 'Iván - Ingeniero de Software, Desarrollador Full-Stack y Desarrollador Mobile',
    description: 'Portfolio de Iván, un ingeniero de software, desarrollador full-stack y desarrollador mobile.'
  },
  icons: {
    icon: [{ url: '/favicon.svg', type: 'image/svg+xml' }]
  },
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ede3c7' },
    { media: '(prefers-color-scheme: dark)', color: '#ede3c7' }
  ],
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': 1,
      'max-image-preview': 'large',
      'max-snippet': -1
    }
  }
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='es'>
      <head>
        <link rel='icon' href='/favicon.svg' type='image/svg+xml' />
        <script
          type='application/ld+json'
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Person',
              name: 'Iván',
              url: WEBSITE_URL,
              jobTitle: 'Ingeniero de Software',
              sameAs: [
                GITHUB_PROFILE_URL,
                LINKEDIN_URL,
                INSTAGRAM_URL,
                EMAIL_URL,
                PHONE_URL,
                WHATSAPP_URL
              ],
              worksFor: {
                '@type': 'Organization',
                name: 'Freelance'
              }
            })
          }}
        />
      </head>
      <body className={`${buda.variable} antialiased bg-orange-100`}>
        <Header />
        {children}
      </body>
    </html>
  )
}
