## 1. Introduction
Bonjour,

Aujourd’hui, j’ai le plaisir de vous présenter le travail réalisé dans le cadre du projet de refonte de l’application Your Car Your Way. Il s’agit d’une nouvelle plateforme web destinée aux clients particuliers, qui leur permettra de gérer l’ensemble de leur expérience de location de voiture.

Cette nouvelle application a pour objectif de remplacer les multiples solutions actuellement utilisées dans différentes régions du monde, en les unifiant dans un seul système, moderne, sécurisé et accessible à l’échelle internationale.

Au cours de cette présentation, je vais vous guider à travers les trois livrables principaux réalisés dans ce projet :
d’abord, la mise à jour du document des besoins fonctionnels,
ensuite, la modélisation de l’architecture logicielle,
puis une liste de contrôle qualité permettant de valider l'application livrée.

Et je terminerai par une brève présentation du proof of concept, afin d’illustrer concrètement la mise en œuvre d'une fonctionnalité dans cette architecture, support client à proprement parlé.

## 2.
Pour commencer, j’ai repris en profondeur le document Business Requirements, qui liste l’ensemble des fonctionnalités attendues de la future application.

Le document initial avait le mérite de poser les bases, mais il était incomplet sur plusieurs aspects clés. J’ai donc restructuré et enrichi le contenu pour refléter de manière plus précise les besoins métiers, en particulier dans le contexte international de l’entreprise.

1. Premièrement, j’ai étoffé la section **Gestion du profil** pour inclure des fonctionnalités essentielles comme l’inscription, la connexion, la réinitialisation de mot de passe.

2. Ensuite, j’ai intégré une section dédiée à **l’internationalisation**, qui était jusqu’ici absente, alors qu’il s’agit précisément d’un des objectifs principaux de la refonte. L’application devra donc permettre à chaque client de choisir sa langue, sa devise, et afficher les dates et heures selon son format local, avec une détection automatique à la première connexion.

3. Une autre section importante a été ajoutée : la communication avec le **support client**, avec deux approches complémentaires : une méthode asynchrone via formulaire, et une méthode synchrone comme le chat ou la visio.

4. Enfin, j’ai inclus une section dédiée à l’intégration avec les **systèmes internes**. Elle décrit la nécessité de fournir une API REST sécurisée, utilisée par les agences pour lire et modifier les données clients. Cette API doit exposer les opérations standards de création, lecture, mise à jour et suppression pour les entités principales : utilisateurs, réservations, véhicules, et tickets de support.

L’ensemble de ces évolutions permet non seulement de clarifier la portée fonctionnelle de la version 1, mais aussi de créer une base solide et extensible pour les développements futurs.

## 3. Architecture
Passons maintenant à l’architecture logicielle.

L’objectif de cette section est de présenter la structure technique retenue pour répondre aux besoins du projet, tout en assurant robustesse, performance, sécurité et évolutivité.

Avant d'entrer dans les détails, il est d'abord important de définir un ensemble de principes d’architecture :
séparation stricte entre les couches frontend, backend et base de données,
exposition systématique des fonctionnalités via une API REST,
intégration de la sécurité et de la protection des données dès la conception,
et enfin, un design modulaire, scalable et compatible avec l’automatisation CI/CD et les outils de monitoring.

Maintenant on peut découvrir cette architecture plus en détail.

L’architecture repose sur un modèle en trois couches bien séparées : un frontend développé avec Angular, un backend en Spring Boot, et une base de données PostgreSQL. Ces composants sont conteneurisés avec Docker, ce qui facilite le déploiement et l’automatisation.

Sur le plan métier, l’architecture reflète les grands blocs fonctionnels du produit : gestion des utilisateurs, gestion des réservations, support client, et interactions avec les agences. Chaque domaine est isolé dans le backend, selon une logique modulaire, ce qui facilite l’évolutivité et la maintenance du code.

Côté données, nous avons conçu un schéma relationnel robuste sous PostgreSQL, articulé autour des entités clés : Client, qui crée des Réservations et dépose des Tickets de support ; Agence, qui publie des Offres et regroupe des Agents chargés de traiter ces tickets. Les colonnes suffixées _data utilisent le type JSONB (pris en charge par l’ORM) pour stocker des attributs semi-structurés, ce qui apporte de la souplesse tout en préservant la rigueur du modèle relationnel.

D’un point de vue technologique, nous avons fait le choix de technologies éprouvées, bien maintenues et largement adoptées dans l’industrie.

Le socle technique repose sur Angular, Spring Boot et PostgreSQL, trois solutions robustes qui répondent parfaitement aux exigences métier, tout en garantissant stabilité, sécurité et évolutivité.

Ce choix s’inscrit dans une architecture modulaire et containerisée, conçue pour être naturellement scalable et parfaitement compatible avec une stratégie de déploiement cloud, quelle que soit la région.

La sécurité, la gestion des flux API, l'automatisation des déploiements et la supervision sont intégrés dès la conception, dans une logique de conformité et d’industrialisation.

En résumé, l’architecture proposée est à la fois modulaire, sécurisée, évolutive, et pleinement alignée avec les objectifs fonctionnels, techniques et réglementaires du projet.

## 4. Compliance Assessment (~3 min)
La dernière partie porte sur l’évaluation de la conformité de l’architecture et de l’implémentation prévue.

Cette vérification s’appuie sur une liste de contrôle structurée autour de cinq grandes thématiques :

Les composants logiciels, où l’on vérifie par exemple que toutes les fonctionnalités attendues sont bien couvertes, que les modules sont testés et organisés de manière modulaire, et que les API exposées sont bien documentées.

Les services tiers, comme Stripe ou les outils de messagerie, font l’objet d’un audit de conformité, avec une attention particulière portée à la gestion des clés API et à la traçabilité des versions.

La gestion des données s’assure du respect des droits utilisateurs (accès, suppression, portabilité), et de la sécurité du stockage — notamment en déléguant les paiements à un prestataire certifié.

Enfin, l’infrastructure et la sécurité sont pensées dès la conception : par exemple, l’isolation des environnements, les sauvegardes automatisées, le chiffrement des échanges, ou encore la gestion des droits via JWT et RBAC.

Cette checklist garantit que l’architecture livrée est fiable, conforme aux normes de sécurité et de protection des données, et prête à être maintenue sur le long terme.


## 5. PoC
Pour conclure, j’ai réalisé un proof of concept centré sur une des fonctionnalités phares de la nouvelle application : le support client en direct, sous forme de messagerie temps réel.

L’idée ici était de tester la faisabilité technique d’un chat client ↔ support intégré à l’application, en exploitant les mécanismes de communication temps réel proposés par l’architecture.

Côté stack technique, le PoC utilise STOMP, un protocole léger basé sur WebSocket, qui permet une connexion persistante et bidirectionnelle entre le client et le serveur.

Ce qui est intéressant ici, c’est que Spring Messaging agit comme un cadre préconstruit, qui gère automatiquement les aspects complexes de la communication :

il configure le hub WebSocket,
il gère les abonnements des clients à des canaux publics ou privés,
et il permet le broadcast des messages vers les utilisateurs connectés, sans que l’on ait besoin d’implémenter une logique réseau bas niveau.
