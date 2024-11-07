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

User : Permet la gestion des utilisateurs (récupération des informations de l’utilisateur).

Les endpoints Auth et User privilégient les verbes GET et POST pour l'enregistrement et l'authentification, tandis que Rentals couvre un éventail plus large d'opérations.

En plus, en développant l'application back-end, le respect les critères de sécurité est très important.

Donc à part les endpoints, La sécurité est aussi un enjeu majeur. Afin de protéger les données et garantir l'intégrité des interactions, plusieurs mesures de sécurité ont été mises en place, ce qui comprend :

Authentification obligatoire sur toutes les routes,
Cryptage des mots de passe,
Sécurisation des informations sensibles de l'application.

Pour cette partie, je vais détailler dans la partie suivante, où je parle des librairies que j'ai choisies pour renforcer la sécurité.

## 2. choix technique
Spring Boot (Framework principal)
Spring Boot permet un développement rapide et une intégration simplifiée des différents composants, tout en offrant une base stable pour des applications évolutives.

Spring Data JPA
Pour la gestion de la base de données, j'ai choisi Spring Data JPA qui facilite l'intégration avec MySQL et permet de travailler directement avec des entités Java, ce qui simplifie le processus de création, de lecture, de mise à jour et de suppression (CRUD) des données. Bien que pour l'instant la suppresion n'ait pas été demandée.

Springdoc OpenAPI
Pour la documentation de l'API, j’ai utilisé Springdoc OpenAPI, qui génère automatiquement des documents OpenAPI et permet une visualisation interactive de l'API via Swagger UI.

Final, une grosse section consacrée à la sécurité de l'application :

J'ai utilisé Spring Security, pour générer JWT.
Chaque endpoint de l'application nécessite une authentification via JWT (JSON Web Token) pour garantir que seules les requêtes authentifiées puissent accéder aux ressources protégées.

Spring security est également utilisé pour crypter les mots de passe des utilisateurs, à l’aide de l’algorithme BCrypt avant d'être stockés dans la base de données. Cela permet de protéger les informations sensibles contre toute compromission.

Ensuite, j'ai utilisé java-dotenv pour protéger les informations sensibles pour l’application elle-même. Elles sont stockées de manière sécurisée dans le fichier .env, qui est exclu du suivi Git et chiffré pour éviter tout risque d'exposition.

Ces mesures permettent d’assurer une sécurité renforcée pour les utilisateurs et l’application dans son ensemble.

## 4.  analyse du code
1. Configuration

Le dossier configuration contient tous les fichiers de configuration essentiels pour le bon fonctionnement de l’application :

Configuration de la sécurité : inclut la mise en place de Spring Security, avec la gestion des tokens JWT pour l'authentification et l'autorisation.

Configuration de l’API documentation : paramètre Swagger pour générer automatiquement la documentation de l’API via Springdoc OpenAPI.

2. Types : Entités et DTO

Il regroupe les éléments de données de l’application :

Entities : qui représentent les tables de la base de données. Chaque entité correspond à une table, donc essentiellement User, Rental, Message. Elle définissent les attributs qui seront stockés dans MySQL et permettent à Spring Data JPA de faire le mapping entre les objets Java et les enregistrements en base de données.

DTO (Data Transfer Objects) : les DTO sont utilisés pour transférer les données entre les différentes couches de l’application. Ils permettent de contrôler les données envoyées et reçues par les contrôleurs en ne transmettant que les informations nécessaires, ce qui est essentiel pour la sécurité et la performance.

3. Services : Controllers, Repositories, Services

La dernière section regroupe les controllers, repositories, et services, qui ensemble forment la couche métier de l’application :

Controllers : Les contrôleurs définissent les endpoints de l’API et traitent les requêtes provenant du front-end. Par exemple, RentalController gère les requêtes liées aux locations, AuthController gère l’authentification et l’inscription, etc. Chaque contrôleur utilise les services pour appliquer la logique métier, et retourne les réponses sous forme de DTO.

Repositories : Les repositories, fournis par Spring Data JPA, s'occupent de la communication avec la base de données. Ils permettent des opérations CRUD simplifiées et d'accéder aux données sans écrire de code SQL explicite. Par exemple, UserRepository permet de récupérer des utilisateurs par leurs attributs, comme le nom d’utilisateur ou l’ID.

Services : Les services contiennent la logique métier de l’application. Ils agissent comme une couche intermédiaire entre les contrôleurs et les repositories. Par exemple, AuthService gère l'authentification, génère les tokens JWT et valide les informations de connexion, tandis que RentalService gère les opérations sur les locations, comme la création, la modification, et la consultation de données.

## Conclusion
Bonnes pratiques appliquées :

J’ai pris soin de sécuriser les routes et de protéger les données sensibles des utilisateurs ainsi que celles de l’application.

J’ai utilisé des DTO (Data Transfer Objects) pour mieux gérer les échanges de données entre les différentes couches de l’application.

Pour garantir une gestion rigoureuse des modifications, j’ai travaillé avec des branches distinctes et des pull requests avant d’intégrer les changements dans la branche principale.

J’ai utilisé différents codes de statut HTTP afin d'indiquer clairement les erreurs et les résultats des requêtes, améliorant ainsi la gestion des réponses.

Enfin, la documentation a été une priorité : j’ai utilisé OpenAPI pour documenter les API et ajouté un fichier Markdown dans le répertoire GitHub pour décrire l’ensemble de l’application.


Actuellement, les méthodes disponibles sont assez basiques. Il serait intéressant d’étendre l’application avec de nouvelles fonctionnalités, telles que la possibilité de supprimer une location, de consulter les messages et, potentiellement, de supprimer un compte.

De plus, bien que l'inscription se fasse pour l'instant uniquement via l’adresse email et le mot de passe, l’application étant déjà compatible avec OAuth2, une intégration avec des services d’authentification tiers comme Google ou Meta pourrait être ajoutée à l’avenir pour offrir plus de flexibilité.
