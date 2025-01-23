## Introduction

Aujourd'hui, j'ai le plaisir de vous présenter une application full-stack que j'ai développée pour Orion : Monde de dév (MDD), un réseau social vise à faciliter les connexions et la collaboration entre les développeurs.

Ma présentation sera structurée en quatre parties principales :
1. je vous expliquerai ma compréhension du projet ;
2. je parlerai des technologies et des bibliothèques que j'ai utilisées pour le développement.
3. Je vous montrerais les fonctionnalités de l'application en interaction avec les pages web.
4. Je passerai en revue des extraits de code source pour vous montrer comment j'ai implémenté certaines fonctionnalités clés.

## 1. Compréhension du projet
Ma tâche consistait à créer une plateforme en ligne dédiée aux développeurs. Le but principal était de construire une application full-stack en version MVP (minimum viable product) qui :

1. Respecte les exigences techniques fixées par Orion
2. Intègre toutes les fonctionnalités détaillées dans le cahier des charges
3. Suit les maquettes fournies pour le design

### Contraintes techniques du projet

Une des principales exigences était la séparation entre le back et le front. Ces deux parties communiquent via une API, avec un accent particulier mis sur la sécurité des échanges.

Les frameworks principaux ont été imposés dès le début du projet :
Backend : JAVA avec le framework Spring
Utilisation privilégiée des librairies natives de Spring pour assurer une cohérence et une performance optimale
Frontend : TypeScript avec le framework Angular

L'utilisation de Git et GitHub était obligatoire pour la gestion du code source.

Ces contraintes techniques ont été intégrées dès la phase de conception du projet. J'ai veillé à respecter la structure initiale mise en place par ma collègue, assurant ainsi une continuité et une cohérence dans le développement de l'application.

### fonctionnalités demandées

Les fonctionnalités demandées pour le forum se répartissent en trois grands domaines.

Commençons par la gestion des utilisateurs, qui comprend les fonctions essentielles d'inscription, de connexion et de déconnexion. Une fois connectés, les utilisateurs peuvent consulter et modifier leur profil.

Passons maintenant à la gestion des abonnements. Les utilisateurs ont la possibilité de consulter tous les thèmes disponibles sur le forum. Ils peuvent ensuite s'abonner ou se désabonner des thèmes depuis les pages dédiées.

Le troisième domaine concerne la gestion des articles. Les utilisateurs peuvent consulter tous les articles liés aux thèmes auxquels ils sont abonnés. Ils ont également accès aux détails de chaque article. De plus, ils ont la possibilité de les commenter ou d'ajouter leurs propres articles.

En complément de ces fonctionnalités principales, plusieurs exigences spécifiques ont été intégrées. Toutes les pages du site doit être résponsive, s'adaptant ainsi à différents appareils. Une attention particulière a été portée à la sécurité, avec l'implémentation de mots de passe robustes. Pour garantir l'intégrité des contenus, l'application attribue automatiquement l'auteur et la date lors de la création d'articles ou de commentaires.

### maquettes fournie
Les maquettes pour l'ensemble du projet ont été fournies, couvrant un total de huit pages. Chaque page est déclinée en deux versions : une pour les ordinateurs et une pour les appareils mobiles.

Le design adopte une approche minimaliste. La couleur principale choisie est le violet, en harmonie avec le logo du MDD. Ma collègue a déjà configuré le thème en utilisant la variante "deeppurple" de Material Design.

## 2. choix technique
Passons maintenant aux choix techniques que j'ai effectués pour ce projet. J'ai utilisé le template fourni par l'entreprise. Ce document détaille non seulement mes choix, mais inclut également les liens vers les documentations officielles et les justifications pour chaque sélection.

Au total, j'ai documenté les deux frameworks principaux imposé, en expliquant pourquoi j'ai changé les versions, différentes aux ceux qui sont été définis lors de l'initialisation.

J'ai expliqué les choix que j'ai faits pour l'architecture et les designs patterns principaux.

Pour le backend, j'ai choisi 8 librairies complémentaires qui recouvrent la sécurité, la gestion de données, la simplification de code. Côté frontend, j'ai opté pour 2 librairies, Angular Material pour l'interface utilisateur, et RxJS pour gérer les opérations asynchrones.

Finalement j'ai aussi noté les outils que l'on a utilisé pour la gestion de version.

Ces choix technologiques ont été faits pour optimiser le développement, assurer la performance de l'application et faciliter sa maintenance future.

## 3. Démonstration du code
1. Registration de user
2. abonnement de thème
3. désabonnement de thème
4. modification du profil
5. consultation d'article
6. ajout de commentaire
7. ajout d'article

## 4.  analyse du code
Les contrôleurs gèrent les points d’entrée de l’application via les API REST.

Les services représentent la logique métier principale de l’application.

Les repositories gèrent l'accès aux données et les opérations dans la base de données.


## Conclusion
Bonnes pratiques appliquées :

J’ai pris soin de sécuriser les routes et de protéger les données sensibles des utilisateurs ainsi que celles de l’application.

J’ai respecté les principes solid, qui ont permis de créer un code modulaire, facilement maintenable et extensible, en accordant une attention particulière à la responsabilité unique des classes.

Pour garantir une gestion rigoureuse des modifications, j’ai travaillé avec des branches distinctes et des pull requests avant d’intégrer les changements dans la branche principale.

J’ai utilisé différents codes de statut HTTP afin d'indiquer clairement les erreurs et les résultats des requêtes, améliorant ainsi la gestion des réponses.

Enfin, la documentation a été une priorité : j’ai rempli le document pour les techniques, utilisé OpenAPI pour documenter les API et ajouté un fichier Markdown dans le répertoire GitHub pour décrire l’ensemble de l’application.

Si la version MVP du Monde de Dév est satisfaisante, tous ces gestes-là faciliteront le futur developpement de cette application.
