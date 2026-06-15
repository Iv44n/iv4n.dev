/**
 * Generates the hero image for the "Scaling client apps with SDKs" post into
 * ./src/assets/blog with sharp:
 *   - sdk-architecture.png (2040x1020, served as 1020x510)
 *
 * Visualizes the article's core idea: multiple clients funnel through a single
 * internal SDK instead of each reimplementing the communication layer.
 *
 * Run with: bun run blog:hero   (or: node scripts/generate-blog-hero.mjs)
 * Re-run whenever the brand colors change.
 */
import sharp from 'sharp'
import { fileURLToPath } from 'node:url'
import { dirname, join } from 'node:path'

const __dirname = dirname(fileURLToPath(import.meta.url))
const OUT = join(__dirname, '..', 'src', 'assets', 'blog')

const BG = '#0d0d0e'
const CARD = '#161618'
const BORDER = '#2a2a2e'
const FG = '#ededed'
const MUTED = '#a1a1aa'
const ARROW = '#3f3f46'
const ACCENT = '#fb7185'

const clients = ['React Web', 'React Native', 'Dashboard', 'Extension']

// Client card geometry (designed in a 1020x510 viewBox).
const CARD_W = 195
const CARD_H = 70
const GAP = 40
const ROW_Y = 92
const startX = (1020 - (clients.length * CARD_W + (clients.length - 1) * GAP)) / 2

const clientCards = clients
  .map((label, i) => {
    const x = startX + i * (CARD_W + GAP)
    const cx = x + CARD_W / 2
    return `
    <rect x="${x}" y="${ROW_Y}" width="${CARD_W}" height="${CARD_H}" rx="12" fill="${CARD}" stroke="${BORDER}" stroke-width="1.5"/>
    <text x="${cx}" y="${ROW_Y + CARD_H / 2 + 6}" text-anchor="middle" font-family="sans-serif" font-weight="600" font-size="22" fill="${FG}">${label}</text>`
  })
  .join('')

// Arrows from each client's bottom-center, converging onto the SDK box top edge.
const SDK_X = 330
const SDK_W = 360
const SDK_Y = 248
const SDK_H = 96
const sdkTopTargets = [400, 470, 550, 620]
const arrows = clients
  .map((_, i) => {
    const fromX = startX + i * (CARD_W + GAP) + CARD_W / 2
    const fromY = ROW_Y + CARD_H
    const toX = sdkTopTargets[i]
    return `<line x1="${fromX}" y1="${fromY}" x2="${toX}" y2="${SDK_Y}" stroke="${ARROW}" stroke-width="1.75" marker-end="url(#arrow)"/>`
  })
  .join('')

// Backend box + connecting arrow from the SDK.
const BACK_W = 280
const BACK_X = (1020 - BACK_W) / 2
const BACK_Y = 408
const BACK_H = 72

const svg = `
<svg xmlns="http://www.w3.org/2000/svg" width="2040" height="1020" viewBox="0 0 1020 510">
  <defs>
    <radialGradient id="glow" cx="85%" cy="10%" r="65%">
      <stop offset="0%" stop-color="${ACCENT}" stop-opacity="0.16"/>
      <stop offset="100%" stop-color="${ACCENT}" stop-opacity="0"/>
    </radialGradient>
    <marker id="arrow" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
      <path d="M0 0 L10 5 L0 10 z" fill="${ARROW}"/>
    </marker>
  </defs>

  <rect width="1020" height="510" fill="${BG}"/>
  <rect width="1020" height="510" fill="url(#glow)"/>
  <rect x="0" y="0" width="1020" height="5" fill="${ACCENT}"/>

  ${clientCards}
  ${arrows}

  <!-- Internal SDK (the single gateway) -->
  <rect x="${SDK_X}" y="${SDK_Y}" width="${SDK_W}" height="${SDK_H}" rx="14" fill="${CARD}" stroke="${ACCENT}" stroke-width="2"/>
  <text x="510" y="${SDK_Y + 40}" text-anchor="middle" font-family="sans-serif" font-weight="700" font-size="30" fill="${ACCENT}" letter-spacing="-0.5">Internal SDK</text>
  <text x="510" y="${SDK_Y + 72}" text-anchor="middle" font-family="sans-serif" font-weight="500" font-size="18" fill="${MUTED}">auth · retries · realtime · types</text>

  <line x1="510" y1="${SDK_Y + SDK_H}" x2="510" y2="${BACK_Y}" stroke="${ARROW}" stroke-width="1.75" marker-end="url(#arrow)"/>

  <!-- Backend -->
  <rect x="${BACK_X}" y="${BACK_Y}" width="${BACK_W}" height="${BACK_H}" rx="12" fill="${CARD}" stroke="${BORDER}" stroke-width="1.5"/>
  <text x="510" y="${BACK_Y + BACK_H / 2 + 7}" text-anchor="middle" font-family="sans-serif" font-weight="600" font-size="24" fill="${FG}">Backend API</text>

  <text x="960" y="490" text-anchor="end" font-family="sans-serif" font-weight="700" font-size="20" fill="${ACCENT}">iv4n.dev</text>
</svg>`

await sharp(Buffer.from(svg)).png().toFile(join(OUT, 'sdk-architecture.png'))

console.log('Generated src/assets/blog/sdk-architecture.png')
