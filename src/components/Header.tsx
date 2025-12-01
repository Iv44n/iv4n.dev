import Link from 'next/link'
import { CV_URL } from '@/constants/urls'

export default function Header() {
  return (
    <header className='flex items-center justify-between pt-8 px-4'>
      <div className='z-50 flex items-center gap-2 tracking-widest'>
        <span className='text-xl lg:text-2xl font-stylistic'>IV4N.DEV</span>
      </div>

      <div className='items-center gap-3 flex'>
        <Link
          href={CV_URL}
          target='_blank'
          className='group rounded-full border border-foreground px-5 py-1.5 uppercase flex gap-2 items-center cursor-pointer z-10 transition-colors hover:bg-foreground hover:text-background'
        >
          <span className='h-1.5 w-1.5 bg-foreground rounded-full transition-colors group-hover:bg-background' />
          Descargar CV
        </Link>
        {/* <button
          type='button'
          className='rounded-full border border-foreground px-4 py-1.5 uppercase cursor-pointer'
        >
          EN
        </button> */}
      </div>
    </header>
  )
}
