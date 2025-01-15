## Introduction

Bonjour, j’ai le plaisir de vous présenter le travail que j’ai réalisé pour établir des tests automatiques sur l’application web Yoga-App. Ces tests jouent un rôle essentiel dans l’assurance de la qualité du code et la stabilité de l’application.

Ma présentation se divisera en deux grandes parties :

1. Je vais parler de l’objectif et de la nature du travail confié, avec un aperçu des types de tests et de leur couverture.

2. Il s'agit d'une démonstration des tests basés sur les bibliothèques utilisées : JUnit pour le back-end, Jest et Cypress pour le front-end.

Pour chaque groupe de tests, j’exécuterai les tests, puis nous examinerons ensemble les rapports générés après leur lancement. En attendant, je vais parcourir les tests que j'ai implémentés, expliquer comment je les ai organisés.

## 1. Compréhension du projet et choix techniques
### Compréhension du projet
#### Objectif du projet :

L’objectif principal de mon travail était de développer des tests pour une application full-stack déjà existante, dans le but d’assurer un haut niveau de qualité du code et de garantir sa stabilité. Pour atteindre cet objectif, il a été convenu de viser une couverture de tests de plus de 80 %, avec des tests bien répartis entre le back-end et le front-end.

Un point d’attention particulier a été mis sur les tests d’intégration, qui doivent couvrir au moins 30 % du code pour garantir un bon fonctionnement global.

En plus, dans le back-end, les DTOs n'ont pas besoin d'être testés. Donc je n'ai pas implémenté les tests pour DTO et les payloads.

## 2. Démonstration
### Junit


Avant d'entrer dans les détails, je voudrais d'abord mentionner la méthode pour implementer les tests unitaires, donc la méthode AAA (Arrange, Act, Assert), qui permet de structurer les tests de manière claire et efficace :

Arrange : Préparer l’environnement de test (comme initialiser les données nécessaires et configurer les dépendances).

Act : Exécuter l’action ou la méthode à tester.

Assert : Vérifier que les résultats obtenus correspondent aux résultats attendus, grâce à des assertions.

On lance les tests !
mvn verify

Pour les tests unitaires du back-end, j’ai principalement testé trois catégories clés :

#### Les services :

Les services représentent la logique métier principale de l’application. J’ai écrit des tests pour vérifier que les fonctionnalités de chaque service fonctionnent correctement et indépendamment des autres couches.
Par exemple, j’ai testé un service qui gère participation et annulations des utilisateurs à une session yoga. Pour chaque scénario le service il doit réagir correctement.

#### Les contrôleurs :

Les contrôleurs gèrent les points d’entrée de l’application via les API REST. J’ai utilisé deux outils principaux :

J’ai utilisé Mockito pour mocker (simuler) les réponses des services appelés par les contrôleurs. Cela permet de tester les contrôleurs de manière isolée, sans dépendre de l’implémentation réelle des services.

J’ai utilisé MockMvc pour simuler des requêtes HTTP et déclencher les actions des contrôleurs, comme si elles provenaient d’un client réel.

#### Les services de sécurité :

Étant donné l’importance de la sécurité dans une application, j’ai testé des services comme la génération de JWT et l'authentification.

#### Modèle et mapper
En ce qui concerne les modèles et les mappers, j’ai également écrit des tests unitaires. Cependant, ils sont moins importants, car une grande partie de ces éléments a été générée automatiquement à partir des annotations lombrok.

#### Tests d’Intégration
Pour les tests d’intégration, j’ai choisi de commencer par les contrôleurs et les mappers, car ils sont au cœur de la communication entre les différentes couches :

**Contrôleurs** : Ces tests d’intégration valident la chaîne complète, de la réception des requêtes HTTP jusqu’à l’accès à la base de données, en passant par le traitement des données dans les services. Cela permet de vérifier que chaque composant coopère correctement avec les autres.

**Mappers** : Les mappers sont utilisés pour transformer les données entre les entités de la base de données et les objets métier ou DTO (Data Transfer Objects). Tester cette couche garantit que les données sont correctement formatées et transmises.

Pendant ces tests, d’autres couches sont également sollicitées, notamment les services, les répertoires et les entités. Cela assure une couverture globale des principales interactions de l’application.

Pour les tests d’intégration, j’ai configuré une base de données en mémoire H2 spécifiquement dédiée aux tests. Cela permet d’isoler les données utilisées pour les tests de celles utilisées en développement, afin de garantir que les tests s’exécutent dans un environnement contrôlé et reproductible.

Cela demande en effet des configurations supplémentaires, la version "test" pour les fichiers ressource et une annotation pour spécifier l'environnement du test.

Maintenant les tests sont fini et on va aller voir les rapports générés.

### Jest


Après avoir présenté les tests pour le back-end, passons aux tests réalisés pour le front-end avec Jest.

npm run jest:coverage

#### Pour les composants Angular :

Angular génère automatiquement un fichier de test pour chaque composant lors de sa création. J’ai les utilisé, ce qui permet de tester directement les fonctionnalités spécifiques de chaque composant, comme l’affichage des données, les interactions utilisateur, ou encore les comportements conditionnels.

Bien que je n’aie pas spécifiquement implémenté de tests d’intégration explicites, mais dans les tests de composant, on teste aussi l'interaction avec les modèles (comme avec les directives) et les dépendances.

Ils vérifient aussi si les données fournies par un service s’affichent correctement dans le DOM, chaque fois quand on appelle la fonction `fixture.detectChanges()`


#### Services Angular :

J’ai créé manuellement des fichiers de test juste à côté de chaque fichier de service.

Ces tests vérifient la logique des services, comme la récupération ou le traitement des données, et utilisent des techniques de simulation pour les appels HTTP ou les dépendances externes.

### Cypress

npm run e2e

Les tests end-to-end (E2E) visent à valider le bon fonctionnement de l’application dans son ensemble, en simulant des interactions réelles d’un utilisateur. Contrairement aux tests unitaires ou d’intégration, les tests E2E couvrent toute la chaîne, depuis l’interface utilisateur jusqu’à API. Cela permet de garantir que les différentes parties de l’application fonctionnent bien ensemble.

Méthodologie
Pour les tests E2E, il est souvent difficile de suivre strictement la méthode 3A, car chaque étape du scénario implique une interaction avec l’application et nécessite de vérifier que le comportement observé correspond aux attentes.

J’ai organisé les tests par fonctionnalités majeures de l’application, afin de garder une structure claire et modulaire :

Authentification : Un fichier dédié pour tester l’inscription, la connexion, la consultation de profil et la déconnexion d’un utilisateur.

Gestion des sessions de yoga :
Tests pour la page de liste des sessions.
Tests pour la page de détail d’une session.
Tests pour la création et l’édition de sessions.

Pour optimiser les tests et éviter de répéter les mêmes étapes dans plusieurs fichiers, j’ai préparé des commandes personnalisées dans le fichier support/commands.ts. Par exemple, la connexion utilisateur ou la navigation et d'autres actions courantes.

npm run cypress:run && npm run e2e:coverage

## Conclusion
bonnes pratiques:

j'ai distingué les workflows et versionné les modification avec Git;

Lors des tests d’intégration pour le back-end, j’ai veillé à utiliser un environnement de test isolé de l’environnement de développement.

Toutes les données utilisées dans les tests ont été typées.

J’ai pris soin de rédiger une documentation claire et précise, expliquant comment exécuter chaque type de test.

En suivant ces bonnes pratiques, j’ai pu garantir non seulement une couverture de tests élevée, mais aussi une base solide pour la maintenance et l’évolutivité des tests.
