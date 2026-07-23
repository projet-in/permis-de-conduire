# Permis B Théorique — Belgique

Site statique d'entraînement au permis B théorique belge : cours, examen blanc (50 questions, barème officiel), flashcards.

## Contenu
- `index.html` — page unique (SPA)
- `manifest.json` — permet l'ajout du site à l'écran d'accueil sur mobile
- `sw.js` — service worker : le site fonctionne hors ligne après une première visite
- `css/style.css` — styles
- `js/data-*.js` — banque de 321 questions (10 thèmes)
- `js/visuels.js` — bibliothèque de panneaux et scènes SVG (illustrations originales, utilisées quand aucune image officielle n'existe) + détection automatique du visuel pertinent pour une question
- `js/catalogue-panneaux.js` — catalogue de référence des 223 panneaux officiels belges (familles A à S)
- `js/images-reelles.js` — remplace automatiquement les icônes maison par les vraies images officielles (Wikimedia Commons, domaine public) partout où elles existent
- `img/panneaux/` — 215 images officielles de panneaux belges (licence domaine public, PD-B-road-sign)
- `js/cours.js` — contenu des 10 chapitres de cours + lexique
- `js/app.js` — logique de l'application

## Panneaux : vraies images vs illustrations maison
215 codes utilisent désormais les vraies images officielles (Wikimedia Commons, domaine public) : 35/48 dans les cours/examen/flashcards, 200/223 dans le catalogue complet. Les codes restants gardent une illustration SVG originale, soit parce qu'aucune image officielle n'existe pour ce code précis, soit parce que le contenu doit varier dynamiquement (ex. les vitesses C43 30/50/70/90/120, une seule image ne pouvant montrer 5 nombres différents).

## Thèmes couverts
Signalisation, priorités, vitesses, alcool & sanctions, stationnement, dépassement, secourisme & comportement en cas d'accident, écoconduite & chargement, usagers vulnérables & deux-roues, autoroutes & voies rapides.

Ce n'est pas une reproduction littérale du texte légal complet du Code de la route belge (l'arrêté royal du 1/12/1975), mais une couverture large des thèmes réellement testés à l'examen théorique officiel.

## Fonctionnalités
- Cours illustrés (48 panneaux, 24 mises en situation), examen blanc, flashcards
- Catalogue complet et cherchable des 223 panneaux officiels belges (familles A à S)
- Panneaux/situations affichés automatiquement dans l'examen et les flashcards quand la question s'y prête
- Table des matières, quiz rapide (5 questions, noté sur 3 étoiles) et liens croisés vers les chapitres liés, en fin de chaque chapitre
- Mini-jeu Memory des panneaux
- Badges/succès à débloquer et streak quotidien
- Mode sombre (bouton 🌙 dans l'en-tête)
- Historique des examens et bouton « réviser mon point faible » en un clic
- Export/import de la progression (fichier JSON, pour ne rien perdre si le navigateur est vidé)
- Lexique des sigles et termes techniques (MMA, PLS, ADR, SUL...)
- Suivi des chapitres déjà lus et de la progression par thème (localStorage)
- Recherche par mot-clé dans les cours
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
