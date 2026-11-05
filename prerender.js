// Génère les pages HTML statiques pour Hostinger, sans navigateur ni serveur en production.
import fs from 'node:fs/promises'
import path from 'node:path'
import { fileURLToPath, pathToFileURL } from 'node:url'
import { build } from 'vite'

const root = path.dirname(fileURLToPath(import.meta.url))
const dist = path.join(root, 'dist')
const cache = path.join(root, '.cache')

function escapeAttribute(value) {
  return value.replaceAll('&', '&amp;').replaceAll('"', '&quot;').replaceAll('<', '&lt;')
}

function renderDocument(template, { markup, metadata }) {
  // Le contenu reste lisible sans JavaScript ; React réactive les animations au chargement.
  const visibleMarkup = markup.replace(/class="scroll-animation([^"]*)"/g, 'class="scroll-animation animate-in$1"')
  let html = template.replace('<div id="root"></div>', `<div id="root">${visibleMarkup}</div>`)
  html = html.replace(/<title>[^<]*<\/title>/, `<title>${escapeAttribute(metadata.title)}</title>`)
  for (const [attribute, key, value] of [
    ['name', 'description', metadata.description],
    ['name', 'robots', metadata.robots],
    ['property', 'og:title', metadata.title],
    ['property', 'og:description', metadata.description],
    ['property', 'og:url', metadata.url],
    ['property', 'og:image', metadata.image],
  ]) {
    const pattern = new RegExp(`(<meta ${attribute}="${key}" content=")[^"]*(")`)
    html = html.replace(pattern, (_, before, after) => `${before}${escapeAttribute(value)}${after}`)
  }
  return html.replace(/(<link rel="canonical" href=")[^"]*(")/, (_, before, after) => `${before}${escapeAttribute(metadata.url)}${after}`)
}

await fs.mkdir(cache, { recursive: true })
const temporary = await fs.mkdtemp(path.join(cache, 'prerender-'))

try {
  const template = await fs.readFile(path.join(dist, 'index.html'), 'utf8')
  if (!template.includes('<div id="root"></div>')) {
    throw new Error('Le build Vite doit précéder le prérendu : lancez npm run build:seo.')
  }

  const result = await build({
    root,
    build: {
      ssr: path.join(root, 'src/prerender.jsx'),
      outDir: temporary,
      emptyOutDir: true,
      ssrManifest: false,
      rollupOptions: { input: path.join(root, 'src/prerender.jsx') },
    },
  })
  const entry = result.output.find(item => item.type === 'chunk' && item.isEntry)
  const { render } = await import(pathToFileURL(path.join(temporary, entry.fileName)).href)

  for (const [pathname, file] of [
    ['/', 'index.html'],
    ['/contact/', 'contact/index.html'],
    ['/404.html', '404.html'],
  ]) {
    const destination = path.join(dist, file)
    await fs.mkdir(path.dirname(destination), { recursive: true })
    await fs.writeFile(destination, renderDocument(template, render(pathname)))
    console.log(`Page prérendue : ${file}`)
  }
} finally {
  await fs.rm(temporary, { recursive: true, force: true })
}
