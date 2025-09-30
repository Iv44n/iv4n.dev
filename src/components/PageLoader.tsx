'use client'

import { gsap } from 'gsap'
import { useCallback, useEffect, useRef, useState } from 'react'

export default function PageLoader({
  children
}: {
  children: React.ReactNode
}) {
  const [progress, setProgress] = useState(0)
  const [loading, setLoading] = useState(true)

  const percentRef = useRef<HTMLSpanElement>(null)
  const brandRef = useRef<HTMLSpanElement>(null)
  const progressRef = useRef(0)

  const runFinalAnimation = useCallback(() => {
    const tl = gsap.timeline({ defaults: { ease: 'power2.out' } })

    tl.to(percentRef.current, { opacity: 0, duration: 0.5, delay: 0.5 })
      .fromTo(
        brandRef.current,
        { width: '0ch' },
        { width: '7ch', duration: 1.5, ease: 'power1.inOut' }
      )
      .to(brandRef.current, { opacity: 0, duration: 0.6, delay: 0.5 })
      .call(() => setLoading(false))
  }, [])

  const updateProgress = useCallback(() => {
    progressRef.current += 1.5
    if (progressRef.current > 100) progressRef.current = 100
    const value = Math.floor(progressRef.current)
    setProgress(value)

    if (value === 100) {
      gsap.ticker.remove(updateProgress)
      runFinalAnimation()
    }
  }, [runFinalAnimation])

  useEffect(() => {
    gsap.ticker.add(updateProgress)
    return () => gsap.ticker.remove(updateProgress)
  }, [updateProgress])

  return (
    <div className='relative w-full h-full'>
      {loading && (
        <div className='fixed inset-0 flex items-center justify-center z-40 font-stylistic'>
          <span ref={percentRef} className='text-[clamp(5rem,13vw,15rem)] font-semibold'>
            {progress}
          </span>
          <span
            ref={brandRef}
            className='text-[clamp(5rem,13vw,15rem)] font-bold absolute overflow-hidden whitespace-nowrap uppercase'
            style={{ opacity: 1, display: 'inline-block', width: '0ch' }}
          >
            iv4n.dev
          </span>
        </div>
      )}

      {!loading && children}
    </div>
  )
}
