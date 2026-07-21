# Permis B Théorique — Belgique

Site statique d'entraînement au permis B théorique belge : cours, examen blanc (50 questions, barème officiel), flashcards.

## Contenu
- `index.html` — page unique (SPA)
- `manifest.json` — permet l'ajout du site à l'écran d'accueil sur mobile
- `sw.js` — service worker : le site fonctionne hors ligne après une première visite
- `css/style.css` — styles
- `js/data-*.js` — banque de 206 questions (6 thèmes)
- `js/visuels.js` — bibliothèque de panneaux et scènes SVG (illustrations originales)
- `js/cours.js` — contenu des 6 chapitres de cours
- `js/app.js` — logique de l'application

## Fonctionnalités
- Cours illustrés (47 panneaux, 22 mises en situation), examen blanc, flashcards
- Recherche par mot-clé dans les cours
- Suivi de progression par thème (cumulé entre les sessions, dans le navigateur)
- Fiche mémo imprimable en A4 (bouton en bas de page)
- Fonctionne hors connexion une fois visité une première fois
- Raccourcis clavier en flashcards : espace (retourner), 1/2 ou flèches (marquer)

Aucune dépendance, aucun build : uniquement HTML/CSS/JS vanilla.

## Déployer sur GitHub Pages

1. Crée un nouveau dépôt sur GitHub (ex. `permis-b-theorique`).
2. Dépose tout le contenu de ce dossier à la racine du dépôt (ne pas mettre les fichiers dans un sous-dossier).
3. Va dans **Settings** → **Pages**.
4. Sous **Build and deployment** → **Source**, choisis **Deploy from a branch**.
5. Sélectionne la branche **main** et le dossier **/ (root)**, puis **Save**.
6. Après 1–2 minutes, le site est accessible à l'adresse indiquée en haut de la page Pages (généralement `https://<utilisateur>.github.io/<nom-du-depot>/`).

## Notes
- Les meilleurs scores d'examen sont sauvegardés localement dans le navigateur (`localStorage`), rien n'est envoyé sur un serveur.
- Contenu à but pédagogique, non officiel — se référer au Code de la route belge et aux supports de son auto-école.
