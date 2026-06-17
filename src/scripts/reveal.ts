/**
 * Scroll reveal using IntersectionObserver + CSS transitions.
 *
 * Progressive enhancement: content is visible by default (see global.css). This
 * script hides ONLY elements that start below the fold (adding `.reveal-init`)
 * and animates them in as they scroll into view. Above-the-fold content — incl.
 * the LCP element — is never hidden, so it paints immediately and the effect
 * never depends on JS loading.
 */
const SELECTOR = '[data-reveal]'
const STAGGER_MS = 90
const MAX_STAGGER_STEPS = 6

function init() {
  const els = Array.from(document.querySelectorAll<HTMLElement>(SELECTOR))
  if (els.length === 0) return

  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  // Without motion or IntersectionObserver support, leave everything visible.
  if (reduceMotion || !('IntersectionObserver' in window)) return

  // Hide only what starts below the fold; in-view elements stay visible so the
  // LCP element renders at first paint.
  const fold = window.innerHeight * 0.88
  const hidden = els.filter(el => el.getBoundingClientRect().top >= fold)
  if (hidden.length === 0) return
  hidden.forEach(el => el.classList.add('reveal-init'))

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

  hidden.forEach(el => observer.observe(el))
}

try {
  init()
} catch {
  // On failure, content remains visible (the default state) — nothing to do.
}
