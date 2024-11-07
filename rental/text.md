## Introduction

Aujourd'hui, j'ai le plaisir de vous présenter une application back-end que j'ai développée pour Chatop Rental. Cette application, construite avec le framework Spring, permet de répondre aux demandes de l'application web de Chatop Rental, tout en gérant les données de manière fluide et sécurisée en interaction avec une base de données MySQL.

Ma présentation sera divisée en 4 parties :
1. je vous expliquerai l'objectif du projet;
2. je parlerai des technologies et des bibliothèques que j'ai utilisées pour le développement.
3. Je vous montrerais les fonctionnalités de l'application en interaction avec les pages web du front.
4. Je passerai en revue des extraits de code pour vous montrer comment j'ai implémenté certaines fonctionnalités clés.

Enfin, je conclurai avec les bonnes pratiques que j'ai suivies, ainsi que des pistes d’amélioration et des développements futurs possibles pour ce projet.

## 1. Compréhension du projet

Ma mission était de développer l'application back-end pour Chatop Rental, une plateforme de location. L'objectif principal était de répondre aux requêtes API déjà définies par l'équipe front-end.

L'application expose quatre endpoints principaux :

Rentals : Gère toutes les informations liées aux locations. C’est l'endpoint le plus complet, prenant en charge presque tous les verbes CRUD (sauf DELETE).

Messages : Permet la communication entre le propriétaire et le locataire.

Auth : Gère l'authentification et l'enregistrement des utilisateurs.

User : Permet la gestion des utilisateurs (création de compte, récupération des informations de l’utilisateur).

Les endpoints Auth et User privilégient les verbes GET et POST pour l'enregistrement et l'authentification, tandis que Rentals couvre un éventail plus large d'opérations.

En développant l'application back-end, il faut avoir une intégration fluide avec le front-end déjà en place, tout en respectant les critères de sécurité.

Donc à part les endpoints, La sécurité est un enjeu majeur pour l’application back-end. Afin de protéger les données et garantir l'intégrité des interactions, plusieurs mesures de sécurité ont été mises en place :

Authentification obligatoire sur toutes les routes,
Cryptage des mots de passe,
Sécurisation du mot de passe de l'application.

Pour cette partie, je vais détailler dans la partie suivante, où je parle

## 2. choix technique
Spring Boot (Framework principal)
Spring Boot permet un développement rapide et une intégration simplifiée des différents composants, tout en offrant une base stable pour des applications évolutives.

Spring Data JPA
Pour la gestion de la base de données, j'ai choisi Spring Data JPA qui facilite l'intégration avec MySQL et permet de travailler directement avec des entités Java, ce qui simplifie le processus de création, de lecture, de mise à jour et de suppression (CRUD) des données. Bien que pour l'instant la suppresion n'ait pas été demandée.

Springdoc OpenAPI
Pour la documentation de l'API, j’ai utilisé Springdoc OpenAPI, qui génère automatiquement des documents OpenAPI et permet une visualisation interactive de l'API via Swagger UI.

Final, une grosse section consacrée à la sécurité de l'application :

J'ai utilisé Spring Securit, pour générer JWT.
Chaque endpoint de l'application nécessite une authentification via JWT (JSON Web Token) pour garantir que seules les requêtes authentifiées puissent accéder aux ressources protégées.

Spring security est également utilisé pour crypter les mots de passe des utilisateurs, à l’aide de l’algorithme BCrypt avant d'être stockés dans la base de données. Cela permet de protéger les informations sensibles contre toute compromission.

Ensuite, j'ai utilisé java-dotenv pour protéger les informations sensibles pour l’application elle-même. Elles sont stockées de manière sécurisée dans le fichier .env, qui est exclu du suivi Git et chiffré pour éviter tout risque d'exposition.

Ces mesures permettent d’assurer une sécurité renforcée pour les utilisateurs et l’application dans son ensemble.
