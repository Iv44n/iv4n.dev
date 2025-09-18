'use client'

import { gsap } from 'gsap'
import { SplitText } from 'gsap/SplitText'
import { useLayoutEffect, useRef, useState } from 'react'

gsap.registerPlugin(SplitText)

export default function Hero() {
  const titleRef = useRef<HTMLHeadingElement>(null)
  const [isReady, setIsReady] = useState(false)

  useLayoutEffect(() => {
    if (!titleRef.current || !isReady) return setIsReady(true)

    const split = new SplitText(titleRef.current, { type: 'words' })
    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } })

    tl.from(split.words, {
      y: -100,
      opacity: 0,
      rotation: 'random(-50, 50)',
      duration: 0.6,
      ease: 'back',
      stagger: 0.15
    })

    return () => {
      split.revert()
      tl.kill()
    }
  }, [isReady])

  if (!isReady) return null

  return (
    <section className='flex flex-col items-center'>
      <h1
        ref={titleRef}
        className='title-split w-full font-buda uppercase leading-[0.9] tracking-tight text-[clamp(3rem,10vw,8rem)] text-neutral-900'
      >
        INGENIERO DE SOFTWARE, DESARROLLADOR FULL-STACK Y DESARROLLADOR MOBILE.
      </h1>
    </section>
  )
}
