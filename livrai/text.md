## 1. Introduction

Aujourd'hui, j'ai le plaisir de vous présenter les résultats de l'audit de l'application existante de LiVrai ainsi que notre proposition pour sa refonte. Notre objectif est de transformer cette application en un outil plus adapté à la croissance de l'entreprise, tout en intégrant les technologies modernes et en renforçant la maintenanbilité de l'application ainsi que la sécurité des données.

Notre présentation se déroulera en deux parties principales. Nous commencerons par un résumé détaillé de l'audit, qui mettra en lumière les forces et les faiblesses de l'application actuelle. Ensuite, nous passerons au cahier des charges pour la nouvelle application, où nous exposerons notre vision pour une solution plus robuste, évolutive et sécurisée.


## 2. Contexte et Fonctionnalité
L'application actuelle de LiVrai distingue deux catégories d'utilisateurs : les administrateurs et les clients. Les admin, qui sont en réalité les membres du service commercial, ont plusieurs responsabilités clés. Ils sont chargés de créer les comptes clients, de gérer les demandes de livraison en les acceptant ou les refusant, et de superviser la facturation via une liste de commandes.

De leur côté, les clients ont un rôle plus limité, se concentrant principalement sur la réservation des livraisons.

Cependant, cette structure présente désormais des limitations face à la croissance de l'entreprise. Deux problèmes majeurs se dégagent :

Premièrement, le fait que les clients ne puissent obtenir un compte que par l'intermédiaire du personnel de vente devient un frein à l'efficacité et à la rapidité du processus d'inscription.

Deuxièmement, le partage d'une interface unique et de droits d'accès identiques entre les services commerciaux et les services de livraison pose des problèmes de gestion et de sécurité des données.

Ces limitations soulignent la nécessité d'une refonte de l'application pour mieux répondre aux besoins actuels de LiVrai et soutenir sa croissance future.

## 3. Architecture Technique
Au niveau de l'architecture, l'application existante de LiVrai suit un modèle classique : MVC (Modèle-Vue-Contrôleur) basé sur une architecture Java EE (Entreprise Edition) à trois niveaux.

Le frontend, ou la couche de présentation, utilise des JSP (JavaServer Pages) avec la bibliothèque JSTL (JavaServer Pages Standard Tag, version 1.2) pour générer dynamiquement les pages HTML, complétées par du CSS pour le style.

Le backend, ou la couche métier, est développé en Java (version 1.6) et utilise des servlets (version 3.0.1) comme contrôleurs pour gérer les requêtes entrantes et orchestrer les interactions entre la vue et le modèle.

Pour la persistance des données, l'application utilise une base de données MySQL (avec un connecteur en version 8.0.32). Cette couche gère le stockage et la récupération des données métier.

(L'ensemble de l'application est packagé sous forme de fichier WAR (Web Application Archive), ce qui est standard pour les applications web Java EE. La gestion du projet et des dépendances est assurée par Maven en version 4.0.0, facilitant ainsi le build et le déploiement de l'application.)

## 4. Points forts et déficiences
Forts de cette compréhension des fonctionnalité et de l'architecture actuelle, nous avons pu identifier un certain nombre de points forts à préserver, mais aussi des axes d'amélioration cruciaux.

Commençons par les aspects positifs.

L'un des principaux atouts de l'application est son architecture MVC claire. Cette séparation nette entre la logique métier, la présentation et les données facilite grandement la maintenance et l'évolution de l'application.

Un autre point fort est la gestion efficace des rôles utilisateurs, offrant des interfaces différenciées selon que l'utilisateur soit administrateur ou client. Cela permet une expérience utilisateur adaptée à chaque type d'utilisateur.

Cependant, l'application présente également des déficiences importantes qui nécessitent notre attention.

La plus critique est l'utilisation de versions obsolètes des technologies. Java 1.6, par exemple, n'est plus supporté depuis 2013, ce qui pose des risques sérieux en termes de sécurité et de performance.

En parlant de sécurité, l'application manque de mécanismes de protection contre les injections SQL et les attaques XSS. Plus alarmant encore, les mots de passe sont stockés en clair, ce qui représente une vulnérabilité majeure.

Enfin, l'interface utilisateur est basique, sans utilisation de framework frontend moderne, ce qui limite l'expérience utilisateur et la réactivité de l'application.

Ces déficiences, bien que sérieuses, offrent des opportunités d'amélioration dans la refonte de l'application. Notre objectif sera de capitaliser sur les points forts existants tout en modernisant l'architecture, renforçant la sécurité, et améliorant l'expérience utilisateur.

## 5. Cahier des Charges - Objectifs du Projet (1 minute)
Après avoir récapitulé les caractéristiques de l'application existante, il est maintenant temps de vous présenter notre projet de refonte, détaillé dans le cahier des charges pour la nouvelle version.

Notre objectif principal est de refondre entièrement l'application pour la rendre plus robuste, sécurisée et parfaitement adaptée à la croissance dynamique de LiVrai. Cette refonte vise à transformer l'application en un outil moderne, performant et évolutif, capable de soutenir les ambitions de l'entreprise à long terme.

Le succès de ce projet sera mesuré par plusieurs indicateurs clés, tels que la satisfaction client, l'efficacité opérationnelle observée par le personnel, et la performance technique surveillée par des outils de monitoring. Ces mesures nous permettront d'évaluer l'impact positif de la nouvelle application sur les opérations de LiVrai et sur l'expérience utilisateur.

## 6. Nouvelles Fonctionnalités (2 minutes)
Maintenant, examinons ensemble les fonctionnalités clés de la nouvelle version de l'application. Une amélioration majeure est la distinction entre trois groupes d'utilisateurs : les clients, le service commercial et le service livraison. Cette séparation permet une meilleure gestion des droits d'accès et une expérience utilisateur adaptée à chaque rôle.

Pour les clients, nous introduisons la possibilité de créer leur propre compte, offrant ainsi une plus grande autonomie. Ils pourront également gérer leurs informations personnelles, passer des commandes de livraison, et suivre l'état de leurs livraisons en temps réel via un tableau de bord intuitif.

Le service commercial bénéficiera d'une interface de gestion dédiée, leur permettant de créer des comptes pour certains clients, d'accéder à la facturation, et de gérer les relations client de manière plus efficace.

Quant au service livraison, ils auront accès à un tableau de bord spécifique pour gérer les livraisons en cours et accéder aux informations de facturation.

Ces nouvelles fonctionnalités répondent directement aux besoins exprimés par LiVrai, notamment en termes d'autonomie client, de gestion efficace des livraisons, et de différenciation des rôles utilisateurs. Cette approche permettra d'optimiser les processus opérationnels tout en améliorant significativement l'expérience utilisateur pour tous les acteurs impliqués.

Pour donner vie à ces nouvelles fonctionnalités et garantir une application moderne et évolutive, nous proposons l'architecture technique suivante.

## 7. Architecture technique proposée
Voici son aperçu.

Au niveau du frontend, nous utiliserons Angular 18 pour créer une Single Page Application (SPA) interactive et réactive. Les requêtes du client seront sécurisées grâce au protocole HTTPS et gérées par un répartiteur de charge Scaleway, qui assure une distribution efficace du trafic.

Le backend sera développé avec Spring Boot 3.4, basé sur Java 21. Il s'exécutera à l'intérieur d'un conteneur Docker. La base de données sera PostgreSQL 16, qui offre robustesse et évolutivité pour la gestion des données.

Enfin, pour assurer une intégration et un déploiement continus, nous utiliserons GitHub Actions, qui automatisera les tests et le déploiement de l'application sur l'infrastructure cloud de Scaleway.

Au-delà de ces composants principaux, nous mettrons en place des outils périphériques essentiels, comme l'ELK Stack pour la gestion des logs et le monitoring de l'application, rassurant ainsi une détection rapide des éventuels problèmes. On utilise également DigiCert, pour renforcer la sécurité des communications entre le client et le serveur.

## 8. Sécurité, conformité et accessibilité

La sécurité, la conformité réglementaire et l'accessibilité sont des priorités absolues dans ce projet.

Pour garantir la sécurité de l'application, nous allons mettre en œuvre Spring Security, un framework robuste qui offre une authentification et une autorisation solides. Cela permettra de protéger les endpoints API et de restreindre l'accès aux données sensibles. Nous allons également implémenter des mesures de protection contre les injections SQL, XSS (Cross-site Scripting) et autres vulnérabilités courantes.

De plus, nous allons veiller à respecter les exigences du RGPD. Cela comprend la mise en place d'un système de consentement explicite pour la collecte des données personnelles, ainsi que des fonctionnalités permettant aux utilisateurs d'accéder, de modifier et de supprimer leurs données.

Enfin, nous allons concevoir l'application en tenant compte de l'accessibilité pour tous les utilisateurs. Nous suivrons les normes courantes (WCAG et RGAA) pour garantir la compatibilité avec les technologies d'assistance, proposer des contrastes suffisants et faciliter la navigation au clavier.

WCAG : Web Content Accessibility Guidelines
RGAA : Référentiel général d'amélioration de l'accessibilité (rédigé par la direction interministérielle du numérique)

## 9. conclusion

En résumé, cette refonte complète de l'application LiVrai permettra de moderniser votre infrastructure, de renforcer la sécurité de vos données et d'améliorer l'expérience utilisateur pour vos clients et vos équipes. L'implémentation de ces recommandations fournira à LiVrai une plateforme moderne, robuste et évolutive pour soutenir sa croissance future. Nous vous remercions pour votre attention.💻
