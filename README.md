# Prestige Assurance

> Landing page responsive pour une agence d’assurance, construite avec React, TypeScript et Vite.

![React](https://img.shields.io/badge/React-19-61dafb?logo=react&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-5-3178c6?logo=typescript&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-6-646cff?logo=vite&logoColor=white)

## Aperçu

Prestige Assurance présente une offre d’assurance pour les particuliers et les professionnels. L’application fournit une page d’accueil, des pages de détail par produit et un formulaire de demande de devis.

## Fonctionnalités

- Navigation responsive pour ordinateur et mobile.
- Présentation des services auto, moto, habitation, santé et professionnels.
- Pages de détail accessibles à partir de chaque produit.
- Formulaire de contact et de demande de devis.
- Animations d’apparition et interface avec thème vert, noir et blanc.

## Stack technique

- [React](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Vite](https://vite.dev/)
- [React Router](https://reactrouter.com/)
- [Lucide](https://lucide.dev/) pour les icônes

## Démarrage local

### Prérequis

- Node.js 20 LTS ou version plus récente
- npm

### Installation

```bash
npm install
```

### Développement

```bash
npm run dev
```

Vite affiche l’URL locale dans le terminal, généralement `http://localhost:5173`.

### Build de production

```bash
npm run build
npm run preview
```

## Structure du projet

```text
.
├── components/          # Sections et composants réutilisables de l’interface
├── App.tsx              # Routes et composition de l’application
├── data.ts              # Catalogue et contenu des produits
├── types.ts             # Types TypeScript partagés
├── index.tsx            # Point d’entrée React
└── vite.config.ts       # Configuration Vite
```

## Routes

| Route | Description |
| --- | --- |
| `/` | Accueil, services, partenaires et contact |
| `/produit/:slug` | Détail d’un produit d’assurance |

## Configuration du formulaire

Le formulaire de contact envoie actuellement les données vers un endpoint Formspree défini dans [components/ContactForm.tsx](components/ContactForm.tsx). Avant de mettre le site en production, remplacez cet endpoint par celui de votre propre compte et vérifiez vos exigences de confidentialité, de consentement et de stockage des données.

## Contenu et mentions

Les textes, coordonnées, visuels et conditions d’assurance doivent être vérifiés et validés par l’agence avant toute mise en ligne. Ce dépôt contient une interface web et ne constitue pas une offre contractuelle.

## Scripts disponibles

| Commande | Description |
| --- | --- |
| `npm run dev` | Lance le serveur de développement |
| `npm run build` | Génère le build de production |
| `npm run preview` | Prévisualise le build de production |

## Contribution

1. Créez une branche dédiée.
2. Effectuez des changements ciblés.
3. Exécutez `npm run build` avant d’ouvrir une pull request.
