import type { Metadata } from 'next'
import { Buda } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'

const buda = Buda({
  variable: '--font-buda',
  subsets: ['latin'],
  weight: ['300']
})

export const metadata: Metadata = {
  title: 'Portfolio',
  description: 'Portfolio of a software engineer'
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='es'>
      <head>
        <link rel='icon' href='/favicon.ico' sizes='any' />
      </head>
      <body className={`${buda.className} antialiased bg-orange-100`}>
        <Header />
        {children}
      </body>
    </html>
  )
}
