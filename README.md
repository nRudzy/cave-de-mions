# La Cave de Mions

Site vitrine React 18 / Vite avec une page d'accueil et une page Contact.
La livraison Hostinger est entièrement statique : aucun serveur Node.js n'est
nécessaire sur l'hébergement.

## Développement local

Prérequis : Node.js 20 ou supérieur et npm.

```bash
npm ci
npm run dev
```

Le site est disponible sur http://localhost:3000 avec rechargement automatique.
Les images utilisées sont dans `src/assets/`. Les composants de l'accueil sont
dans `src/components/sections/` et la page Contact dans `src/pages/Contact.jsx`.

## Compilation et vérifications

```bash
npm run build:seo
npm run test:production
```

Le prérendu utilise React pendant la compilation et ne nécessite pas Chrome.
Il produit les fichiers HTML de chaque page avec les ressources absolues
`/assets/`, pour une publication à la racine de https://cavedemions.com.

```text
dist/
  .htaccess
  index.html
  contact/index.html
  404.html
  assets/
  robots.txt
  sitemap.xml
```

`npm run build` seul produit le bundle Vite sans le prérendu. Utiliser
`npm run build:seo` pour la livraison. Les tests de production vérifient les
pages générées, les chemins des ressources et les métadonnées.

## Sauvegarde et livraison Hostinger

1. Depuis le gestionnaire de fichiers Hostinger, archiver le `public_html`
   complet, y compris les fichiers cachés comme `.htaccess`. Conserver et
   télécharger cette sauvegarde **hors du dossier public**. Une copie HTTP des
   fichiers visibles ne remplace pas cette sauvegarde complète.
2. Déposer le contenu de `dist/` directement dans `public_html`, en remplaçant
   les fichiers existants, notamment `.htaccess` et `contact/index.html`.
   `index.html` doit être à la racine, sans dossier `dist/` intermédiaire.
3. Vérifier l'accueil, `/contact/`, un rechargement direct de Contact et une URL
   inexistante après l'envoi. Vérifier également les photos et les liens email
   sur mobile. Le `.htaccess` définit `index.html` comme page par défaut et
   `404.html` comme document d'erreur, avec un statut HTTP 404.
4. Pour revenir en arrière, restaurer le contenu de la sauvegarde complète,
   y compris son `.htaccess`.

Ne pas publier le code source, `node_modules`, `.git`, les sauvegardes ou les
archives de livraison. Le dossier `build/` est réservé aux livraisons locales
et est ignoré par Git.
