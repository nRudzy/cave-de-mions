# La Cave de Mions - Application React

Cette application web est une version modernisée du site de La Cave de Mions, construite avec React et conteneurisée avec Docker.

## Prérequis

- Docker
- Docker Compose

## Installation et démarrage

1. Cloner le repository :
```bash
git clone [URL_DU_REPO]
cd cave-de-mions
```

2. Construire et démarrer les conteneurs :
```bash
docker-compose up --build
```

L'application sera accessible à l'adresse : http://localhost:3000

## Structure du projet

```
cave-de-mions/
├── src/
│   ├── components/     # Composants React réutilisables
│   ├── pages/         # Pages de l'application
│   ├── assets/        # Images et autres ressources
│   ├── data/          # Données statiques
│   ├── App.jsx        # Composant principal
│   └── main.jsx       # Point d'entrée
├── public/            # Fichiers statiques
├── Dockerfile         # Configuration Docker
├── docker-compose.yml # Configuration Docker Compose
└── package.json       # Dépendances et scripts
```

## Développement

Pour le développement, l'application utilise le mode développement de Vite avec le rechargement à chaud (hot reload). Les modifications du code source seront automatiquement reflétées dans le navigateur.

## Production

Pour construire l'application pour la production :

```bash
docker-compose -f docker-compose.yml -f docker-compose.prod.yml up --build
```

## Commandes utiles

- Démarrer l'application : `docker-compose up`
- Arrêter l'application : `docker-compose down`
- Voir les logs : `docker-compose logs -f`
- Reconstruire l'application : `docker-compose up --build`

## Technologies utilisées

- React 18
- React Router v6
- Vite
- Docker
- Node.js 20
- Font Awesome

## Fonctionnalités

- Design mobile-first responsive
- Menu de navigation hamburger pour mobile
- Slider de produits
- Section événements
- Formulaire de contact
- Intégration Google Maps
- Animations au scroll
- Lazy loading des images

## Configuration

### Google Maps
Pour activer la carte Google Maps, vous devez :

1. Obtenir une clé API Google Maps
2. Remplacer `YOUR_API_KEY` dans le fichier `index.html` par votre clé API

### Images
Placez vos images dans le dossier `images/` :
- `logo.png` : Logo de La Cave de Mions
- `hero-bg.jpg` : Image d'arrière-plan de la section héro
- `vins.jpg` : Image pour la section vins
- `bieres.jpg` : Image pour la section bières
- `champagnes.jpg` : Image pour la section champagnes
- `charcuterie.jpg` : Image pour la section charcuterie
- `histoire.jpg` : Image pour la section histoire

## Compatibilité

- Chrome (dernière version)
- Firefox (dernière version)
- Safari (dernière version)
- Edge (dernière version)
- iOS Safari
- Chrome pour Android

## Contribution

Les contributions sont les bienvenues ! N'hésitez pas à :

1. Fork le projet
2. Créer une branche pour votre fonctionnalité
3. Commiter vos changements
4. Pousser vers la branche
5. Ouvrir une Pull Request

## Licence

Ce projet est sous licence MIT. Voir le fichier `LICENSE` pour plus de détails. 