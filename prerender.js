// Prérendu complet avec Puppeteer pour le SEO
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import puppeteer from 'puppeteer';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const PREVIEW_PORT = 4000;

// Routes à prérendrer
const routes = [
  '/',
  '/contact'
  // Ajouter d'autres routes au besoin
];

// Fonction principale de prérendu
async function prerender() {
  console.log('Démarrage du prérendu...');

  // Lancer le serveur de preview Vite pour le prérendu
  const { spawn } = await import('child_process');
  const server = spawn('npx', ['vite', 'preview', '--port', PREVIEW_PORT.toString()], {
    stdio: ['ignore', 'pipe', 'pipe']
  });

  // Attendre que le serveur soit prêt
  await new Promise((resolve) => {
    server.stdout.on('data', (data) => {
      console.log(`Serveur: ${data}`);
      if (data.toString().includes('Local:') || data.toString().includes('ready in')) {
        resolve();
      }
    });

    server.stderr.on('data', (data) => {
      console.error(`Erreur serveur: ${data}`);
    });
  });

  console.log('Serveur de prévisualisation démarré');

  // Lancer le navigateur headless
  const browser = await puppeteer.launch({
    headless: "new",
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });
  const page = await browser.newPage();

  try {
    // Pour chaque route
    for (const route of routes) {
      const url = `http://localhost:${PREVIEW_PORT}${route}`;
      console.log(`Prérendu de ${url}`);

      // Naviguer vers la page et attendre que le contenu soit chargé
      await page.goto(url, {
        waitUntil: 'networkidle0', // Attend que le réseau soit inactif
      });

      // Attendre que le contenu React soit rendu
      await page.waitForSelector('#root > *');

      // Attendre 1 seconde de plus pour les animations/chargements supplémentaires
      await new Promise(r => setTimeout(r, 1000));

      // Récupérer le HTML complet
      let html = await page.content();

      // Corriger les URLs absolues et les remplacer par des relatives
      // Version compatible avec l'ouverture directe de fichiers
      if (route === '/') {
        // Pour la page d'accueil
        html = html.replace(new RegExp(`http://localhost:${PREVIEW_PORT}/assets/`, 'g'), './assets/');

        // Assurez-vous que les liens script et style utilisent des chemins relatifs
        html = html.replace(/<link rel="stylesheet" crossorigin href="\.\/assets\//g, '<link rel="stylesheet" crossorigin href="./assets/');
        html = html.replace(/<script type="module" crossorigin src="\.\/assets\//g, '<script type="module" crossorigin src="./assets/');
      } else {
        // Pour les sous-dossiers
        html = html.replace(new RegExp(`http://localhost:${PREVIEW_PORT}/assets/`, 'g'), '../assets/');

        // Assurez-vous que les liens script et style utilisent des chemins relatifs
        html = html.replace(/<link rel="stylesheet" crossorigin href="\.\/assets\//g, '<link rel="stylesheet" crossorigin href="../assets/');
        html = html.replace(/<script type="module" crossorigin src="\.\/assets\//g, '<script type="module" crossorigin src="../assets/');
      }

      // Assurer l'inlining du CSS critique pour un meilleur rendu initial
      // Extraire le CSS depuis le lien vers la feuille de style
      const cssLinks = await page.$$eval('link[rel="stylesheet"]', links =>
        links.map(link => link.href).filter(href => href.includes('assets'))
      );

      // Si CSS trouvé, inliner son contenu
      if (cssLinks.length > 0) {
        for (const cssLink of cssLinks) {
          try {
            const cssResponse = await page.goto(cssLink, { waitUntil: 'networkidle0' });
            const css = await cssResponse.text();

            // Ajouter le CSS inline dans le head
            html = html.replace('</head>', `<style id="critical-css">${css}</style></head>`);

            // Retourner à la page originale
            await page.goto(url, { waitUntil: 'networkidle0' });
          } catch (err) {
            console.error(`Erreur lors de l'extraction du CSS: ${err}`);
          }
        }
      }

      // Créer le dossier de destination si nécessaire
      const targetPath = path.join(__dirname, 'dist', route === '/' ? '' : route);
      if (route !== '/' && !fs.existsSync(targetPath)) {
        fs.mkdirSync(targetPath, { recursive: true });
      }

      // Écrire le fichier HTML
      fs.writeFileSync(
        path.join(targetPath, 'index.html'),
        html
      );

      console.log(`✅ Page prérendue: ${route}`);
    }
  } catch (error) {
    console.error('Erreur pendant le prérendu:', error);
  } finally {
    // Fermer le navigateur et arrêter le serveur
    await browser.close();
    server.kill();
    console.log('Prérendu terminé');
  }
}

// Exécuter la fonction principale
prerender().catch(console.error);
