## 1. Introduction

Bonjour, aujoud'hui j'ai le plaisir de te présenter le travail réalisé autour de la fiabilité, la sécurité et la continuité de la nouvelle version de l’application MaisonEnPlace, plateforme web destinée à la vente de mobilier et de décoration via un simulateur de réalité augmentée.

Comme nous le savons, la version 1 de l’application a été développée rapidement dans une logique de POC (proof of concept), avec peu de tests, une sécurité perfectible, et une architecture centralisée.

Avec la version 2, notre objectif est clair : proposer une expérience robuste, sécurisée et durable pour nos utilisateurs.

Pour y parvenir, j’ai structuré le travail autour de trois livrables complémentaires :

d'abord, un plan de test, pour vérifier que les fonctionnalités principales se comportent comme attendu;

Ensuite, un plan de sécurité, pour prévenir les risques techniques et protéger les données.

Et le dernier, un plan de sauvegarde des données, pour assurer la reprise rapide de l’activité en cas d’incident.

Je vais présenter chacun de ces livrables, expliquer les choix faits, et montrer comment ils répondent aux enjeux du projet.

## 2. Plan de test
### Intro
Je commence avec le plan de test, qui vise à garantir que les fonctionnalités principales de l’application répondent bien aux attentes des utilisateurs, et qu’elles sont fiables en production.

Ce plan s’appuie sur une approche BDD — Behavior-Driven Development, ce qui permet de décrire les comportements attendus en langage naturel. Cette méthodologie facilite la collaboration entre développeurs, testeurs, et parties prenantes non techniques, tout en étant compatible avec les outils d’automatisation.

Le plan est structuré autour de quatre grands parcours fonctionnels.

🔐 D’abord, l’authentification.
On a testé la connexion avec des identifiants valides, mais aussi les cas d’erreur — comme une tentative de connexion avec de mauvais identifiants.
On a également couvert la connexion via Google, avec le processus OAuth complet.
Enfin, un scénario spécifique vérifie que les mots de passe trop simples — comme "12345678" — sont bloqués dès l’inscription, conformément aux nouvelles règles de sécurité.

🛋️ Ensuite, le catalogue produit.
Une fois connecté, l’utilisateur doit voir la liste des produits.
On teste donc l’affichage initial du catalogue, la recherche d’un produit par son nom, y compris la gestion du cas où aucun résultat ne correspond, et enfin l’utilisation des filtres par type de produit.
Ces scénarios permettent de s’assurer que les données sont bien chargées depuis l’API et que l’expérience de navigation est fluide.

🌀 Le troisième bloc concerne le simulateur de réalité augmentée.
Lorsque l’utilisateur sélectionne un produit, il est redirigé vers le simulateur, qui se charge automatiquement.
On vérifie ici que le modèle 3D du produit est bien récupéré et affiché, que l’utilisateur peut manipuler l’objet (le faire pivoter, le déplacer), et qu’il peut revenir au catalogue à tout moment.
Cette partie est cruciale, car c’est un des éléments différenciants de l’application.

🛒 Enfin, le tunnel d’achat.
On commence par l’ajout du produit au panier depuis le simulateur, puis l’affichage du récapitulatif, la validation du panier, et la saisie des informations de paiement.
Les paiements sont testés dans un environnement sandbox, aussi bien pour des cas réussis que pour des scénarios d’échec, afin de vérifier que les erreurs sont correctement gérées et que l’utilisateur est guidé.

Bien sûr, certaines fonctionnalités sont exclues de ce plan de test :

Le rendu 3D exact des modèles, car il dépend d’un moteur graphique externe (comme Unity ou Three.js), testé séparément

Les paiements réels, qui passent par des prestataires comme Stripe ou Apple Pay, sont testés via sandbox uniquement

Et les performances — comme les temps de réponse ou les tests de charge — relèvent d’une campagne technique à part, avec des outils dédiés comme JMeter ou k6.


En résumé, ce plan permet de valider l’ensemble des comportements critiques attendus dans l’application, dans un langage compréhensible, structuré, et directement intégrable dans une stratégie d’automatisation future.

## 3. Plan de sécurité
Maintenant que nous avons validé les comportements fonctionnels attendus grâce au plan de test, il est essentiel de s’assurer que l’application reste solide face aux menaces externes et internes.

En effet, un comportement correct ne suffit pas si l’application est vulnérable à des attaques ou à des défaillances critiques.

C’est pourquoi je propose de passer à la seconde partie, dédiée à la sécurité de l’application, avec une analyse des principaux risques identifiés et des solutions concrètes pour s’en prémunir, et de protéger l’application et ses utilisateurs contre les menaces les plus critiques.

Cette partie repose sur une analyse des vulnérabilités constatées dans la version 1, ainsi que sur une identification des risques liés à la version 2.
Chaque risque est évalué en fonction de sa gravité, puis associé à des mesures concrètes pour le réduire.

L’un des risques majeurs concerne l’infrastructure elle-même.
Dans la version 1, l’application reposait sur un serveur unique. Cela signifie qu’en cas de panne, l’ensemble du service devenait inaccessible.
C’est un point de défaillance critique.
La solution, ici, consiste à migrer vers une infrastructure cloud scalable, à répartir la charge sur plusieurs instances grâce à un load balancer, et à mettre en place un système de monitoring avec alertes automatiques pour réagir dès qu’un dysfonctionnement est détecté.

Un autre risque important est la transmission non sécurisée des données.
Certaines API de la version 1 utilisaient encore le protocole HTTP, ce qui expose les échanges à des attaques de type man-in-the-middle, notamment au moment de l’authentification.
Le plan prévoit donc de forcer l’utilisation du protocole HTTPS, avec des certificats SSL/TLS à renouvellement automatique — (comme Let’s Encrypt) — et d’ajouter des tests automatisés pour s’assurer que tous les échanges sont sécurisés.

Sur le plan de l’authentification, la version 1 utilisait encore l’algorithme MD5 pour le hachage des mots de passe — ce qui est aujourd’hui considéré comme vulnérable.
Pour y remédier, on préconise le passage à bcrypt ou Argon2, qui sont bien plus robustes, l’introduction de règles de complexité sur les mots de passe, et la mise en place d’un système de verrouillage temporaire après plusieurs tentatives échouées.

Un risque souvent sous-estimé, mais pourtant fondamental, est l’absence de tests automatisés.
Dans la version précédente, aucun test n’avait été mis en place, ce qui rendait la détection de régressions ou d’erreurs beaucoup plus difficile.
Le plan prévoit donc l’intégration d’une stratégie de tests BDD, comme on l’a vu précédemment, mais aussi la mise en place d’une chaîne d’intégration continue avec exécution automatique des tests à chaque mise à jour.

Enfin, l’application étant fortement basée sur des entrées utilisateur — notamment pour la recherche, le login, ou l’inscription — elle est exposée à des attaques par injection SQL.
La prévention passe par l’usage d’un ORM sécurisé avec requêtes préparées, et par une validation systématique des entrées, côté client comme côté serveur.

✔️ En résumé, ce plan de sécurité couvre à la fois les faiblesses héritées de la version 1 et les menaces spécifiques à la version 2.
Les mesures proposées sont concrètes et alignées sur les bonnes pratiques du secteur.
L’objectif est clair : protéger les utilisateurs, les données, et garantir la stabilité de l’application en production.

## 4. Plan de sauvegarde
La sécurité est essentielle pour prévenir les incidents…
Mais malgré toutes les précautions, le risque zéro n’existe pas : un bug critique, une suppression accidentelle, ou un incident matériel peuvent toujours survenir.
C’est pourquoi je conclus cette présentation avec le plan de sauvegarde et de restauration des données, qui garantit à l’entreprise de pouvoir reprendre rapidement son activité, même après une défaillance majeure.

L’application MaisonEnPlace repose sur quatre grands types de données critiques :
les comptes utilisateurs, le catalogue produit, les commandes et paiements, ainsi que les fichiers médias (images et modèles 3D).
Ces données sont essentielles pour le bon fonctionnement de l’application, mais aussi pour la confiance des utilisateurs.

Pour garantir leur intégrité et leur disponibilité, la stratégie de sauvegarde s’appuie sur plusieurs exigences structurantes :

Des sauvegardes automatiques quotidiennes, sans intervention manuelle.

Un stockage hors site, répliqué dans une autre région en moins de 2 heures.

Une rétention des sauvegardes pendant 7 jours glissants.

Des tests de restauration mensuels dans un environnement isolé, avec vérification de l’intégrité.

Un RTO inférieur à 1 heure, et un RPO de 24 heures maximum, ce qui garantit à la fois une reprise rapide et une perte minimale de données.

On prévoit aussi la création régulière d’images complètes du système, notamment avant chaque mise à jour critique, avec une rétention de 30 jours, pour faciliter un redémarrage rapide en cas de panne serveur complète.

Côté solutions techniques, on s’appuie sur des services cloud managés :

Les bases de données utilisent des solutions comme AWS RDS ou GCP Cloud SQL, qui assurent les snapshots journaliers, la restauration à un point dans le temps, et la sécurité des accès.

Les fichiers médias sont stockés dans des buckets cloud avec versionnage activé et réplication automatique.

L’infrastructure prévoit également une redondance géographique, avec une instance miroir prête à prendre le relais, et un load balancer pour répartir la charge ou rediriger le trafic en cas d’incident.

Enfin, un système de monitoring automatisé alerte l’équipe en cas d’échec de sauvegarde, et des exercices de restauration réguliers sont prévus pour maintenir la réactivité opérationnelle.

En cas de problème, un plan de restauration complet est défini :

Il démarre par une analyse préliminaire de l’incident, même lors des exercices simulés.

Il se poursuit par la localisation du bon snapshot, le redéploiement d’une instance, la vérification de l’intégrité des données, la restauration des données, et enfin la redirection du trafic vers la version restaurée.

Chaque incident est ensuite documenté pour améliorer la résilience et affiner les délais cibles RTO et RPO.

✔️ En résumé, cette stratégie permet à MaisonEnPlace d’assurer une haute disponibilité, une protection robuste contre les pertes de données, et une reprise rapide d’activité, en accord avec les enjeux de fiabilité définis pour la version 2.

## 5. Conclusion

Pour conclure, cette présentation nous a permis de découvrir les trois livrables majeurs que j’ai construits dans le cadre de la refonte de MaisonEnPlace :

Un plan de test basé sur le BDD, qui couvre les comportements critiques et permet une validation claire, automatisable et orientée utilisateur.

Un plan de sécurité ciblé, qui anticipe les risques identifiés dans la version 1 et applique des solutions concrètes — qu’elles soient techniques ou organisationnelles.

Et un plan de sauvegarde et de restauration, garantissant la résilience des données et la continuité de service, même en cas d’incident majeur.

Ces trois volets sont conçus pour fonctionner ensemble : ils ne se contentent pas de vérifier que « tout marche », mais ils assurent que l’application reste fiable, disponible et sécurisée sur le long terme.

Merci pour votre attention, je suis maintenant disponible pour toutes questions ou remarques.
