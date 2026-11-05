import test from 'node:test'
import assert from 'node:assert/strict'
import fs from 'node:fs/promises'
import path from 'node:path'

const dist = path.resolve(process.env.PRODUCTION_DIST || 'dist')
const origin = 'https://cavedemions.com'

async function assertLocalResource(reference, base) {
  const url = new URL(reference.replaceAll('&amp;', '&'), base)
  if (url.origin !== origin) return
  assert(url.pathname.startsWith('/assets/'), `Ressource hors du dossier assets : ${url.pathname}`)
  const file = path.join(dist, decodeURIComponent(url.pathname))
  assert((await fs.stat(file)).isFile(), `Ressource manquante : ${url.pathname}`)
}

for (const [file, route, title, heading] of [
  ['index.html', '/', 'La Cave de Mions - Vins, Bières et Charcuterie', 'Bienvenue à la Cave de Mions'],
  ['contact/index.html', '/contact/', 'Contact et horaires - La Cave de Mions', 'Contactez-nous'],
  ['404.html', '/404.html', 'Page non trouvée - La Cave de Mions', '404'],
]) {
  test(`${route} contient son contenu, ses métadonnées et ses ressources valides`, async () => {
    const html = await fs.readFile(path.join(dist, file), 'utf8')
    assert(html.includes(`<title>${title}</title>`))
    assert(html.includes(`<h1>${heading}</h1>`))
    assert(html.includes(`rel="canonical" href="${origin}${route}"`))
    assert(!html.includes('contact@lacavedemions.com'))
    assert(!html.includes('localhost'))
    assert(!html.includes('/src/'))
    for (const match of html.matchAll(/<(?:img|script|link)\b[^>]*>/g)) {
      const tag = match[0]
      if (tag.startsWith('<link') && !/rel="(?:stylesheet|icon)"/.test(tag)) continue
      const reference = tag.match(/\b(?:src|href)="([^"]+)"/)?.[1]
      if (reference) await assertLocalResource(reference, `${origin}${route}`)
    }
    const socialImage = html.match(/property="og:image" content="([^"]+)"/)?.[1]
    assert(socialImage)
    await assertLocalResource(socialImage, origin)
    if (route === '/404.html') assert(html.includes('content="noindex, follow"'))
  })
}

test('les URLs des images et polices restent valides depuis les feuilles de style', async () => {
  for (const name of await fs.readdir(path.join(dist, 'assets'))) {
    if (!name.endsWith('.css')) continue
    const css = await fs.readFile(path.join(dist, 'assets', name), 'utf8')
    for (const match of css.matchAll(/url\(\s*["']?([^\s"')]+)["']?\s*\)/g)) {
      if (!match[1].startsWith('data:')) await assertLocalResource(match[1], `${origin}/assets/${name}`)
    }
  }
})

test('la configuration Hostinger sert index.html et une véritable page 404', async () => {
  const config = await fs.readFile(path.join(dist, '.htaccess'), 'utf8')
  assert(config.includes('DirectoryIndex index.html'))
  assert(config.includes('ErrorDocument 404 /404.html'))
  const sitemap = await fs.readFile(path.join(dist, 'sitemap.xml'), 'utf8')
  assert.deepEqual([...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map(match => match[1]), [`${origin}/`, `${origin}/contact/`])
})
