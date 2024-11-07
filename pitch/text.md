## Introduction

présenter une application web que j'ai développée, qui permet de consulter et d'analyser les historiques des Jeux Olympiques de manière interactive.

Ma présentation sera divisée en trois parties principales :

1. Je vous expliquerai l'objectif du projet, la structure des pages, ainsi que les technologies et les bibliothèques que j'ai utilisées pour le développement.

2. Je vous montrerai les fonctionnalités de l'application à travers ses deux pages : la page d'accueil et la page de détail par pays.

3. Je passerai en revue des extraits de code pour vous montrer comment j'ai implémenté certaines fonctionnalités clés.

Enfin, je conclurai avec les bonnes pratiques que j'ai suivies, ainsi que des pistes d’amélioration et des développements futurs possibles pour ce projet.

## 1. Compréhension du projet et choix techniques
### Compréhension du projet
#### Objectif du projet :
Création d’un site web permettant aux utilisateurs de consulter les historiques des Jeux Olympiques (JO), à la fois de manière globale et par pays, avec des représentations visuelles sous forme de graphiques interactifs.

#### Structure du site :
Le site comporte deux pages principales et chaque page contient une partie informative et une partie interactive :

Page d’accueil :

Pour la page d'acceuil, la partie informative est une présentation générale de l’application, affichant le contexte, le titre, ainsi que des statistiques globales sur les JOs.
Partie interactive : Un graphique en forme de camembert permettant aux utilisateurs d’interagir pour obtenir le nombre des médailles total de chaque pays. En cliquant sur un pays, l’utilisateur est redirigé vers une page détaillée dédiée à ce pays.

Page de détail (par pays) :
Concernant la page de détail, dans sa partie informative, on voit l'affichage du nom du pays sélectionné et présentation de quelques statistiques générales sur ses performances aux JO.
Quant à la partie interactive : Un graphique linéaire représentant l’évolution du nombre de médailles au fil des années. Les utilisateurs peuvent passer le curseur sur le graphique pour voir les détails année par année. Un bouton permet de revenir facilement à la page d’accueil.

#### Maquette fournie :
Comme La maquette du site m’a été fournie et il est important de la bien observer et de la respecter.
Voici les principaux éléments de design à suivre :

Couleur principale est un bleu canard (#04838f).
La bordure est arrondie d'environ 8px (ou 0,5 rem).
Les cartes d’information sont dans un boite de display: flex.
Une icône de médaille est présente dans une infobulle (tooltip).
À la fin, on emploie une police sans-serif.

### Choix techniques
A. RxJS (Reactive Extensions for JavaScript) pour la gestion des programmes événementiels

Avantages :

(Meilleure gestion des opérations asynchrones :)
- RxJS simplifie la gestion des flux asynchrones en traitant les événements comme des observables.

(Opérateurs puissants et gestion d'erreurs intégrée :)
- Elle propose des opérateurs performants et intègre une gestion des erreurs robuste.

(Intégration fluide avec Angular :)
RxJS est bien intégré dans l'écosystème Angular.

Inconvénients :

Risque de fuites de mémoire :
Il est crucial de se désinscrire correctement des observables.

Taille importante, comme elle est très puissante.

Bien que puissante, la bibliothèque peut alourdir le projet en raison de sa taille.

B. Ngx-charts pour les graphiques
Avantages :

Développé spécifiquement pour Angular, Ngx-charts offre une intégration profonde avec les fonctionnalités réactives d'Angular, comme la détection des changements.

Interactions riches :
La bibliothèque prend en charge nativement les infobulles (tooltips), le zoom et le déplacement (panning) dans les graphiques.

Responsive :
De nombreux graphiques sont réactifs par défaut et s’adaptent automatiquement à la taille de la fenêtre.

Problèmes et inconvénients :

Support des animations :
Il y a toujours des avertissements (liés aux animations ou pas), problème qui restent ouvert à ce jour. Les superviseurs de cette libraires ne sont pas super réactifs aux issues liés aux avertissements, on voit ça dans leur répo github.

## 4. Conclusion

Bonnes pratiques appliquées :

Expérience Utilisateur (UX) : Création de pages entièrement responsives.
Workflow : Utilisation de branches distinctes et des pull requests pour intégrer les modifications dans la branche principale.
Typage des variables : Renforcement de la robustesse du code.
Gestion des observables : Utilisation de RxJS avec désinscription au bon moment pour éviter les fuites de mémoire.
Réduction des dépendances externes : Limitation de l’utilisation des librairies tierces.
Gestion des erreurs : Mise en place de toasts et de pages personnalisées pour signaler les erreurs.
Documentation : Rédaction de documentations pour faciliter la compréhension et la maintenance du code.

Pistes de développement futures
Sécurité des données :
Actuellement, l'application se base sur la lecture interne des données. Cependant, l’utilisation d’AJAX pour les transferts ouvre la possibilité d’intégrer des données externes à l’avenir. Pour cela, des mesures supplémentaires devront être mises en place pour sécuriser ces données, comme l’utilisation de tokens d’authentification et de certificats de sécurité (credentials), afin d'assurer une protection optimale.

Élargissement des catégories de statistiques :
À ce stade, l’application propose des détails par pays uniquement. Cependant, grâce à une structure de routage flexible et scalable, il sera facile d’ajouter d’autres catégories de statistiques dans le futur, par exemple : par sport, par année, ou encore par athlète.
