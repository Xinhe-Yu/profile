## 1. Compréhension du projet et choix techniques
### Compréhension du projet
Objectif du projet :
Création d’un site web permettant aux utilisateurs de consulter les historiques des Jeux Olympiques (JO), à la fois de manière globale et par pays, avec des représentations visuelles sous forme de graphiques interactifs.

Structure du site :
Le site comporte deux pages principales :

Page d’accueil :

Partie informative : Présentation générale de l’application, affichant le contexte, le titre, ainsi que des statistiques globales sur les Jeux Olympiques.
Partie interactive : Un graphique en forme de camembert permettant aux utilisateurs d’interagir pour obtenir des informations détaillées sur chaque pays. En cliquant sur un pays, l’utilisateur est redirigé vers une page détaillée dédiée à ce pays.
Page de détail (par pays) :

Partie informative : Affichage du nom du pays sélectionné et présentation de quelques statistiques générales sur ses performances aux JO.
Partie interactive : Un graphique linéaire représentant l’évolution du nombre de médailles au fil des années (axe X pour les années et axe Y pour le nombre de médailles). Les utilisateurs peuvent passer le curseur sur le graphique pour voir les détails année par année. Un bouton permet de revenir facilement à la page d’accueil.
Maquette fournie :
La maquette du site m’a été fournie et il est essentiel de la respecter scrupuleusement. Voici les principaux éléments de design à suivre :

Couleur principale : Teal (#04838f).
Bordure arrondie : Environ 8px (ou 0,5 rem).
Disposition des cartes d’information : Utilisation du display: flex pour l’affichage.
Icône de médaille : Présente dans une infobulle (tooltip).
Police : Sans-serif.

### Choix techniques
A. RxJS (Reactive Extensions for JavaScript) pour la gestion des programmes événementiels
Avantages :

Meilleure gestion des opérations asynchrones :
RxJS simplifie la gestion des flux asynchrones complexes en traitant les événements comme des observables. Cela facilite le suivi et la gestion des séquences asynchrones.

Opérateurs puissants et gestion d'erreurs intégrée :
La bibliothèque propose des opérateurs performants tels que map, filter, mergeMap, switchMap, et intègre une gestion des erreurs robuste.

Intégration fluide avec Angular :
RxJS est bien intégré dans l'écosystème Angular, ce qui facilite son utilisation dans les projets Angular.

Inconvénients :

Risque de fuites de mémoire :
Il est crucial de se désinscrire correctement des observables, faute de quoi cela peut entraîner des fuites de mémoire.

Taille importante du bundle :
Bien que puissante, la bibliothèque peut alourdir le projet en raison de sa taille.

B. Ngx-charts pour les graphiques
Avantages :

Conçu pour Angular :
Développé spécifiquement pour Angular, Ngx-charts offre une intégration profonde avec les fonctionnalités réactives d'Angular, comme la détection des changements.

Interactions riches :
La bibliothèque prend en charge nativement les infobulles (tooltips), le zoom et le déplacement (panning) dans les graphiques.

Responsive :
De nombreux graphiques sont réactifs par défaut et s’adaptent automatiquement à la taille de la fenêtre.

Animations :
Ngx-charts propose des animations par défaut agréables, bien que cela puisse parfois causer des problèmes.

Problèmes et inconvénients :

Support des animations :
Pour que le graphique linéaire soit pleinement fonctionnel, il est nécessaire de fournir les animations (provideAnimations). Il y a toujours un avertissement lié aux animations, un problème qui reste ouvert à ce jour.

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
