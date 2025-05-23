## 1. Introduction

Bonjour, aujoud'hui j'ai le plaisir de vous présenter le travail que j’ai réalisé dans le cadre du projet CATASTERRE, application web de visualisation des risques naturels à destination des notaires et agences immobilières.

Ce projet a pour objectif de faciliter les études de risques associées aux biens immobiliers — inondation, sismicité, pollution, etc. Dans cette phase, nous devons démarrer immédiatement notre premier sprint.

Dans ce contexte, j’ai été amené à intervenir sur plusieurs aspects clés du projet.

Tout d’abord, j’ai construit le Sprint Backlog en sélectionnant les User Stories les plus pertinentes pour atteindre notre objectif : afficher les zones d’inondation dans des zones côtières.

Ensuite, j’ai travaillé sur la conformité réglementaire, en rédigeant un document aligné avec le RGPD et les bonnes pratiques ITIL, pour garantir un cadre sécurisé, fiable et conforme aux attentes du secteur.

J’ai également réfléchi à la collaboration au sein de l’équipe, en mettant en place un plan d’action. Celui-ci comprend des propositions pour améliorer la collaboration dans l'équipe, une analyse des compétences actuelles, la sélection d’un outil de suivi, ainsi qu’une liste de formations ciblées pour renforcer notre maîtrise des tests.

Et enfin, pour garantir la qualité des livrables dans la durée, j’ai rédigé une fiche de poste pour un ingénieur QA, qui pourra accompagner l’équipe dans les prochains sprints sur la stratégie de tests et la validation continue.

Ces quatre volets structurent les livrables que je vais vous présenter aujourd’hui, de manière progressive, en commençant par le Sprint Backlog.

## 2. Sprint Backlog
L’objectif fixé pour ce sprint était le suivant :
“Afficher les zones d’inondation dans des zones côtières.”
C'est à la fois fonctionnel, visuel, et centré sur les données géographiques.

Pour construire le Sprint Backlog, j’ai analysé l’ensemble des User Stories disponibles en m’appuyant sur 4 critères principaux :

Tout d'abord, il s'agit de la cohérence directe avec l’objectif de sprint — seules les tâches liées à l’inondation et à la visualisation cartographique ont été retenues ;

Ensuite, c'est la priorité métier, en lien avec les besoins exprimés par les utilisateurs finaux ;

bien sûr, la charge estimée est prise en compte, puisque la capacité de l’équipe pour ce sprint était de 15 Story Points ;

Et enfin, il reste un point important : la mobilisation équilibrée de toute l’équipe — j’ai veillé à ce que le sprint engage les compétences du front, du back et de l’UX design, pour que chacun ait un rôle actif dans l’avancement collectif.

Au final, j’ai retenu 5 User Stories, pour un total de 15 points :

US 2 : Trouver une bibliothèque JavaScript libre de cartographie (5 SP)
→ Cette tâche technique engage directement Dimitry, notre développeur front, et pose les bases pour toutes les visualisations cartographiques à venir.

US 4 : Afficher les différents niveaux de hauteur d’eau sur une carte (3 SP)
→ Travail partagé entre le front-end et l’UX, avec une contribution de Jorge pour la clarté de l’affichage et la lisibilité des calques sur carte.

US 6 : Vérification d’une inondation précédente (3 SP)
→ Mise en œuvre principalement côté back-end, avec des appels API et une logique métier claire.

US 1 : Génération d’un rapport des risques selon la zone (3 SP)
→ Une tâche transverse qui combine traitement des données côté back et présentation du contenu côté front.

US 10 : Génération automatique d’un courrier au maire (1 SP)
→ Petite tâche de sortie de données textuelles, simple à intégrer dans un flux existant, pilotée côté back.

Ce Sprint Backlog nous permet donc d’avancer efficacement sur le plan technique, tout en sollicitant activement les trois membres de l’équipe.

Nous pouvons ainsi progresser de manière coordonnée, tout en livrant des résultats concrets dès ce premier sprint.

Je vous propose maintenant de passer à la suite :
la conformité RGPD et ITIL, que nous avons intégrée dès la phase de conception du projet.


## Conformité RGPD et ITIL
Car il a été essentiel d’assurer la conformité réglementaire et la qualité de l’environnement technique.

En Concernant le RGPD, Le projet CATASTERRE manipule essentiellement des données géographiques, mais pas de données personnelles au sens strict.

Néanmoins, j’ai veillé à respecter plusieurs principes clés du RGPD dans les User Stories sélectionnées :

Chaque rapport de risques généré par l’application est transmis à un notaire dans un objectif légal clair, qui est d’informer le client final de manière transparente.

Nous ne collectons aucune donnée personnelle : seuls les éléments géographiques nécessaires à l’étude du bien (parcelle, zone à risque…) sont utilisés.

Toutes les API, notamment celles utilisées pour afficher les hauteurs d’eau ou vérifier un historique d’inondation, sont sécurisées avec Spring Security et JWT. Cela garantit une protection complète des échanges.

Les données ne sont pas stockées durablement. Les rapports sont générés à la demande, et peuvent éventuellement être conservés temporairement pour traitement, mais jamais de manière systématique.

Nous avons prévu, dans le backlog, une fonctionnalité qui permet à l’utilisateur — notaire ou client — de demander l’anonymisation ou la suppression d’un rapport.

L’accès à certaines requêtes sensibles, comme l’historique d’inondation, nécessite une validation explicite du notaire avant traitement.

⚙️Ensuite, pour le Côté ITIL, plusieurs bonnes pratiques ont été appliquées pour structurer le projet sur des bases solides :

L’architecture 3 tiers du projet — Angular pour le front, Spring Boot pour le back-end, MySQL en base — permet une séparation claire des couches, avec une bonne évolutivité.

Les accès sont contrôlés par rôles et tokens JWT. Chaque endpoint est protégé selon le profil utilisateur (notaire, admin, etc.).

Un pipeline CI/CD complet sous GitHub Actions est en place, avec tests automatisés, vérification de la couverture (> 75 %), et génération d’image Docker prête à être déployée.

L’équipe suit une démarche TDD, avec un suivi de la vélocité sprint après sprint, pour ajuster notre rythme et améliorer la qualité au fil du temps.

Enfin, les anomalies sont remontées via GitHub Issues, classées par priorité, et discutées chaque jour lors des Daily Scrums.

En résumé, la conformité n’est pas un ajout en fin de projet, mais un principe intégré dans les choix techniques et dans la conception des User Stories.

Nous allons maintenant aborder la dimension humaine du projet : le plan d’action d’équipe, qui permet d’améliorer la collaboration, de faire monter en compétences les membres, et de préparer l’arrivée d’un futur QA.

## Plan d'action pour améliorer la collaboration & la qualité
Pour assurer la réussite du sprint, il était aussi important de prendre en compte la dynamique de l’équipe.

Dès le début du sprint, un point bloquant a été identifié par notre développeuse back-end :

"Nous ne pouvons pas développer et tester en même temps par manque de compétences en test automatisé."

J’ai donc construit un plan d’action pour améliorer la collaboration au quotidien et initier une culture de la qualité partagée.

D’abord, il s’agit de renforcer la coopération dans l’équipe, en s’appuyant sur des leviers simples, adaptés à notre contexte.

Première initiative : nous allons mettre en place des binômes de suivi par User Story.
Chaque développeur reste bien dans sa spécialité — front ou back — mais travaille en binôme avec un autre membre de l’équipe, qui va relire les tests, challenger les cas d’usage, et aider à clarifier les critères métier.

Cela ne vise pas à faire du "pair programming" au sens classique, mais plutôt à créer une culture de feedback croisé, à partager les logiques fonctionnelles, et à développer une vision commune de la qualité produit, sans demander à chacun de devenir expert dans toute la stack.

🔹 Deuxième idée : instaurer un créneau d’équipe informel d’1h par semaine.
Chaque semaine, un membre de l’équipe anime une mini-session sur un sujet qu’il maîtrise — ça peut être JUnit, GitHub Actions, les mocks, ou même Docker.

L’idée, c’est de transformer l’apprentissage en rituel collectif, sans pression, et de favoriser la curiosité et la transmission dans un cadre bienveillant.

🔹 Troisième idée : créer une page Notion partagée pour les blocages en asynchrone.
Chaque membre pourra y indiquer en quelques mots ses points de friction, mis à jour avant le Daily Scrum.

Cela permet de détecter les problèmes plus tôt, de faciliter leur résolution collective, et surtout, d’éviter de pointer un seul responsable : on favorise la transparence et l’auto-organisation.


J’ai également une matrice de compétences basée sur les technologies essentielles du projet : Angular, Spring Boot, tests automatisés, CI/CD, et qualité produit.

On y voit clairement que :

Dimitry, notre développeur front-end, est à l’aise avec Angular mais reste débutant en tests front.

Rachida, côté back-end, est confirmée en Java/Spring et Docker, mais aussi encore en montée de compétence sur les tests.

Jorge, notre designer, est expert en Figma.

Cette matrice nous permet de visualiser immédiatement les écarts à combler pour renforcer notre stratégie de test.

🔄
Pour éviter que cette matrice reste figée, j’ai proposé d’utiliser SkillTree, un outil open source qui permet de suivre l’évolution des compétences au fil des sprints, de visualiser les progrès de chacun, et de structurer la montée en qualité de façon transparente.


En plus, j’ai sélectionné 3 formations ciblées pour répondre au le point bloquant identifié par notre membre d'équipe :

Testing Java avec JUnit 5, Mockito et REST Assured (Udemy – 11h – 19,99 €)
pour automatiser les tests back sur API et microservices.

Angular Testing Course (Angular University – 5h – Gratuit)
pour maîtriser les tests unitaires et d’intégration côté front.

L’essentiel de Selenium (LinkedIn Learning – 3h – via abonnement ~39,66 €)
pour les tests end-to-end.

Avec cette approche structurée, on sort de la logique “le QA gère tout” pour aller vers une équipe autonome sur la qualité, où chacun contribue selon ses forces — et progresse là où c’est nécessaire.


## Fiche de poste QA Engineer
Pour aller plus loin dans cette dynamique qualité, j’ai également proposé le recrutement d’un profil clé : un ingénieur en assurance qualité (QA Engineer).
Il jouera un rôle central dans les prochains sprints pour soutenir l’équipe dans une démarche structurée et proactive de test.

🧩 Le poste est défini autour de 5 responsabilités principales :
D’abord, il pilotera l’ensemble de la stratégie de tests, afin de garantir la qualité des livrables.

Il travaillera en collaboration étroite avec toute l'équipe, dès la phase de conception.

Il assurera la mise en place et le suivi des outils d’automatisation.

Il mesurera les indicateurs qualité : couverture de tests, anomalies, dette technique.

Et bien sûr, il participera pleinement à la vie de l’équipe agile, notamment aux cérémonies Scrum, pour ancrer l’amélioration continue dans notre fonctionnement.

🛠️ Côté missions opérationnelles :
Ce poste couvre aussi bien les tests techniques que les pratiques d’équipe :

Il rédigera les cas de test critiques sur Angular et Spring Boot.

Il aidera l’équipe à adopter une démarche TDD concrète, et validera les livrables Docker selon des critères clairs (zéro erreur critique, couverture > 75%).

Il jouera un rôle de facilitateur qualité, en formant l’équipe et en organisant des séances comme des Dojo QA.

👤 Le profil recherché
Nous cherchons quelqu’un avec au moins 3 ans d’expérience, autonome, rigoureux, mais surtout avec un bon esprit d’équipe.
Il doit maîtriser les outils de test (JUnit, Jasmine, Selenium), connaître GitHub Actions et Docker, et être à l’aise dans un environnement Agile/Scrum.
La connaissance de Sonar, du RGPD, ou d’ITIL est un vrai plus dans le contexte du projet CATASTERRE.


## Conclusion
Pour conclure, ce travail m’a permis d’aborder le projet CATASTERRE sous un angle complet : à la fois technique, organisationnel, réglementaire et humain.

Nous avons commencé par définir un Sprint Backlog cohérent, aligné sur l’objectif du sprint et structuré pour mobiliser efficacement les compétences de toute l’équipe.

Ensuite, j’ai intégré dans le projet les exigences du RGPD et des bonnes pratiques ITIL, non pas comme une contrainte extérieure, mais comme des éléments de structuration dès la phase de conception.

J’ai aussi proposé un plan d’action pour renforcer la coopération dans l’équipe, à travers des rituels, une analyse des compétences, un outil de suivi évolutif (SkillTree) et des formations ciblées, afin de faire monter progressivement l’équipe en autonomie sur les tests.

Et enfin, pour aller plus loin dans la stratégie qualité, j’ai formalisé une fiche de poste de QA Engineer, un profil clé qui viendra compléter l’équipe pour les prochains sprints.

Ce premier sprint pose donc des bases solides : on avance concrètement sur le produit, tout en structurant l’équipe pour livrer durablement un logiciel fiable, sécurisé, et conforme à son usage métier.

Merci pour votre attention, je suis disponible pour vos questions ou remarques.
