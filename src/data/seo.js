import logo from '../assets/logo_hd_cave_de_mions.png'

const origin = 'https://cavedemions.com'

export function getPageMetadata(pathname) {
  const route = pathname.replace(/\/+$/, '') || '/'
  const pages = {
    '/': {
      title: 'La Cave de Mions - Vins, Bières et Charcuterie',
      description: 'Découvrez La Cave de Mions, votre spécialiste en vins, bières artisanales, champagnes et charcuterie à Mions. Dégustations et événements réguliers.',
      url: `${origin}/`,
    },
    '/contact': {
      title: 'Contact et horaires - La Cave de Mions',
      description: 'Retrouvez les coordonnées et horaires de La Cave de Mions au 105 Rue du 23 Août 1944, 69780 Mions. Téléphone : 04 78 20 20 55.',
      url: `${origin}/contact/`,
    },
  }

  return {
    ...(pages[route] || {
      title: 'Page non trouvée - La Cave de Mions',
      description: 'La page recherchée est introuvable. Retrouvez les produits et coordonnées de La Cave de Mions depuis notre accueil.',
      url: `${origin}${pathname}`,
    }),
    image: new URL(logo, origin).href,
    robots: pages[route] ? 'index, follow' : 'noindex, follow',
  }
}
