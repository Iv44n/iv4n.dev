/**
 * Scroll reveal using IntersectionObserver + CSS transitions.
 * Replaces GSAP/ScrollTrigger (~110KB) with a ~1KB native implementation
 * while keeping the same fade + slide-up + stagger effect.
 */
const SELECTOR = '[data-reveal]'
const STAGGER_MS = 90
const MAX_STAGGER_STEPS = 6

function revealAll(els: HTMLElement[]) {
  els.forEach(el => el.classList.add('is-visible'))
}

function init() {
  const els = Array.from(document.querySelectorAll<HTMLElement>(SELECTOR))
  if (els.length === 0) return

  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  if (reduceMotion || !('IntersectionObserver' in window)) {
    revealAll(els)
    return
  }

  const show = (el: HTMLElement, delay: number) => {
    el.style.transitionDelay = delay > 0 ? `${delay}ms` : ''
    el.style.willChange = 'opacity, transform'
    el.classList.add('is-visible')

    const cleanup = () => {
      el.style.willChange = ''
      el.style.transitionDelay = ''
      el.removeEventListener('transitionend', cleanup)
    }
    el.addEventListener('transitionend', cleanup)
  }

  const observer = new IntersectionObserver(
    (entries, obs) => {
      // Stagger only the batch entering together, in document order.
      const entering = entries
        .filter(e => e.isIntersecting)
        .sort((a, b) =>
          a.target.compareDocumentPosition(b.target) &
          Node.DOCUMENT_POSITION_FOLLOWING
            ? -1
            : 1
        )

      entering.forEach((entry, i) => {
        const el = entry.target as HTMLElement
        show(el, Math.min(i, MAX_STAGGER_STEPS) * STAGGER_MS)
        obs.unobserve(el)
      })
    },
    { rootMargin: '0px 0px -12% 0px', threshold: 0 }
  )

  els.forEach(el => observer.observe(el))
}

try {
  init()
} catch {
  revealAll(Array.from(document.querySelectorAll<HTMLElement>(SELECTOR)))
}
