/**
 * Generates static social/share assets into ./public with sharp:
 *   - og.png             (1200x630) Open Graph / Twitter card
 *   - apple-touch-icon.png (180x180) iOS home-screen icon
 *
 * Run with: bun run og   (or: node scripts/generate-og.mjs)
 * Re-run whenever the brand name, role or colors change.
 */
import sharp from 'sharp'
import { fileURLToPath } from 'node:url'
import { dirname, join } from 'node:path'

const __dirname = dirname(fileURLToPath(import.meta.url))
const PUBLIC = join(__dirname, '..', 'public')

const BG = '#0d0d0e'
const FG = '#ededed'
const MUTED = '#a1a1aa'
const ACCENT = '#fb7185'

// iv4n.dev logo path (from public/favicon.svg, 52x52 viewBox).
const LOGO =
  'M39 0H26V13H13H0V26V39V52H13H26V39H39H52V26V13V0H39ZM13 39H26V26H39V13H26V26H13V39Z'

const ogSvg = `
<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
  <defs>
    <radialGradient id="glow" cx="85%" cy="12%" r="60%">
      <stop offset="0%" stop-color="${ACCENT}" stop-opacity="0.22"/>
      <stop offset="100%" stop-color="${ACCENT}" stop-opacity="0"/>
    </radialGradient>
  </defs>

  <rect width="1200" height="630" fill="${BG}"/>
  <rect width="1200" height="630" fill="url(#glow)"/>
  <rect x="0" y="0" width="1200" height="8" fill="${ACCENT}"/>

  <g transform="translate(96, 96) scale(0.95)">
    <path d="${LOGO}" fill="${ACCENT}"/>
  </g>

  <text x="96" y="320" font-family="sans-serif" font-weight="700" font-size="84" fill="${FG}" letter-spacing="-2">Iván Todelano</text>
  <text x="96" y="392" font-family="sans-serif" font-weight="500" font-size="40" fill="${MUTED}">Backend &amp; Distributed Systems Developer</text>

  <text x="96" y="540" font-family="sans-serif" font-weight="600" font-size="30" fill="${MUTED}" letter-spacing="1">TypeScript · NestJS · Go · Java · PostgreSQL · AWS</text>
  <text x="1104" y="540" text-anchor="end" font-family="sans-serif" font-weight="700" font-size="32" fill="${ACCENT}">iv4n.dev</text>
</svg>`

const iconSvg = `
<svg xmlns="http://www.w3.org/2000/svg" width="180" height="180" viewBox="0 0 180 180">
  <rect width="180" height="180" rx="40" fill="${BG}"/>
  <g transform="translate(48, 48) scale(1.61)">
    <path d="${LOGO}" fill="${FG}"/>
  </g>
</svg>`

await sharp(Buffer.from(ogSvg)).png().toFile(join(PUBLIC, 'og.png'))
await sharp(Buffer.from(iconSvg)).png().toFile(join(PUBLIC, 'apple-touch-icon.png'))

console.log('Generated public/og.png and public/apple-touch-icon.png')
