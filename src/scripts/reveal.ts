import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

function init() {
  const targets = gsap.utils.toArray('[data-reveal]')
  if (targets.length === 0) return

  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  if (reduceMotion) {
    gsap.set(targets, { opacity: 1, y: 0 })
    return
  }

  gsap.registerPlugin(ScrollTrigger)

  gsap.set(targets, { y: 18 })

  ScrollTrigger.batch('[data-reveal]', {
    start: 'top 88%',
    onEnter: batch =>
      gsap.to(batch, {
        opacity: 1,
        y: 0,
        duration: 0.7,
        ease: 'power3.out',
        stagger: 0.09,
        overwrite: true,
        clearProps: 'transform'
      })
  })
  window.addEventListener('load', () => ScrollTrigger.refresh())
}

try {
  init()
} catch {
  gsap.set('[data-reveal]', { opacity: 1, y: 0, clearProps: 'transform' })
}
