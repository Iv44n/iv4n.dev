/**
 * Prints the CV pages of the built site to PDF with headless Chrome:
 *   - /cv/     → public/cv.pdf     (es)
 *   - /en/cv/  → public/cv-en.pdf  (en)
 *
 * The CV content comes from src/config/site.ts and the `cv.*` / `about.*`
 * strings in src/i18n/locales, so the PDF never drifts from the site.
 *
 * Run with: bun run cv   (builds the site first, then runs this script)
 * Set CHROME_PATH if Chrome isn't available on PATH as `google-chrome`.
 */
import { spawn } from 'node:child_process'
import { createReadStream, existsSync, statSync } from 'node:fs'
import { createServer } from 'node:http'
import { dirname, extname, join, normalize } from 'node:path'
import { fileURLToPath } from 'node:url'

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..')
const DIST = join(ROOT, 'dist')
const PUBLIC = join(ROOT, 'public')
const CHROME = process.env.CHROME_PATH ?? 'google-chrome'

const PAGES = [
  { path: '/cv/', out: 'cv.pdf' },
  { path: '/en/cv/', out: 'cv-en.pdf' }
]

const CONTENT_TYPES = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css',
  '.js': 'text/javascript',
  '.woff2': 'font/woff2',
  '.svg': 'image/svg+xml',
  '.png': 'image/png',
  '.webp': 'image/webp'
}

// Minimal static server over the build output: Chrome needs http so the
// root-relative /_astro/* assets (CSS, fonts) resolve.
const server = createServer((req, res) => {
  const { pathname } = new URL(req.url ?? '/', 'http://localhost')
  let file = normalize(join(DIST, decodeURIComponent(pathname)))
  if (!file.startsWith(DIST)) return res.writeHead(403).end()
  if (existsSync(file) && statSync(file).isDirectory()) file = join(file, 'index.html')
  if (!existsSync(file)) return res.writeHead(404).end()

  res.writeHead(200, {
    'Content-Type': CONTENT_TYPES[extname(file)] ?? 'application/octet-stream'
  })
  createReadStream(file).pipe(res)
})

function printToPdf(url, out) {
  return new Promise((resolve, reject) => {
    const chrome = spawn(
      CHROME,
      [
        '--headless',
        '--disable-gpu',
        '--no-pdf-header-footer',
        // Gives web fonts time to load before printing.
        '--virtual-time-budget=10000',
        `--print-to-pdf=${out}`,
        url
      ],
      { stdio: ['ignore', 'ignore', 'pipe'] }
    )
    let stderr = ''
    chrome.stderr.on('data', chunk => (stderr += chunk))
    chrome.on('error', reject)
    chrome.on('close', code =>
      code === 0 ? resolve() : reject(new Error(`Chrome exited with ${code}\n${stderr}`))
    )
  })
}

if (!existsSync(join(DIST, 'cv', 'index.html'))) {
  console.error('dist/cv/index.html not found — run `bun run build` first.')
  process.exit(1)
}

await new Promise(resolve => server.listen(0, '127.0.0.1', resolve))
const { port } = server.address()

try {
  for (const page of PAGES) {
    await printToPdf(`http://127.0.0.1:${port}${page.path}`, join(PUBLIC, page.out))
    console.log(`✓ public/${page.out}`)
  }
} finally {
  server.close()
}
