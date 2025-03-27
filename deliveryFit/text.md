## 1. Introduction

Bonjour, aujourd'hui j'ai le plaisir de vous présenter notre proposition commerciale pour le projet DeliveryFit destiné à Alisa's Closet.
<!-- Je suis Xinhe, développeuse Full Stack chez Volbi-Tech, et je vais vous détailler notre approche pour ce projet d'optimisation logistique. -->

Notre objectif est de créer une application web qui va transformer votre système de livraison actuel en identifiant automatiquement le point d'expédition le plus proche du client - qu'il s'agisse de votre centre de livraison ou d'un de vos magasins. Cette solution permettra de réduire les délais de livraison et d'optimiser les coûts logistiques, tout en s'intégrant à votre plateforme e-commerce existante.

Notre présentation se déroulera en trois parties principales. Tout d'abord, nous rappellerons le contexte du projet et ses objectifs principaux. Ensuite, nous détaillerons notre analyse et nos estimations concernant la charge de travail, les coûts et les risques potentiels. Enfin, nous vous présenterons deux propositions commerciales : une version initiale qui répond exactement à votre cahier des charges, et une version enrichie qui intègre des services à valeur ajoutée pour maximiser le potentiel de l'application. Cette approche vous permettra de choisir la solution la plus adaptée à vos besoins et à votre vision stratégique.

## 2. Contexte et objectifs
Rappelons brièvement le contexte de ce projet. Alisa's Closet, en tant que détaillant de vêtements établi depuis plus de 10 ans, fait face à une demande croissante de livraisons en ligne. Votre système actuel, qui centralise toutes les expéditions depuis un unique centre de livraison, présente des inefficacités qui impactent à la fois vos coûts opérationnels et l'expérience client.

Le projet DeliveryFit vise à résoudre ces problématiques à travers quatre objectifs principaux :

Premièrement, optimiser votre chaîne logistique en identifiant le point d'expédition le plus proche du client.

Deuxièmement, réduire significativement les délais de livraison, ce qui améliorera directement la satisfaction de vos clients.

Troisièmement, diminuer vos coûts de transport grâce à des trajets plus courts et mieux optimisés.

Tout ceci doit s'intégrer de manière transparente à votre plateforme e-commerce existante, sans perturber l'expérience d'achat de vos clients. L'application interviendra au moment critique de la validation du panier pour déterminer le meilleur point d'expédition, avant de rediriger l'utilisateur vers le processus de paiement habituel.

## 3. Structure des tâches techniques
Pour réaliser le projet DeliveryFit, nous avons identifié et organisé les tâches techniques en cinq grandes catégories fonctionnelles, comme vous pouvez le voir sur ce diagramme.

Le développement Back-End, réalisé avec Spring Boot, constitue le cœur fonctionnel de l'application. Il comprendra la mise en place de l'architecture sécurisée, la création des APIs nécessaires, et le module de comparaison des distances.

<!-- Ce module intégrera une API de géolocalisation et utilisera des algorithmes géospatiaux pour calculer avec précision les distances entre les points de livraison et le domicile du client.  -->

Il gèrera également la vérification des stocks en temps réel et le système de notification aux magasins.

Le Front-End, développé avec Angular, sera responsable de l'expérience utilisateur. Il interceptera le processus d'achat au moment de la validation du panier, affichera une interface pendant la recherche du point d'expédition optimal, puis présentera les informations de livraison avant de rediriger l'utilisateur vers le site original. Tout cela de manière fluide et transparente, sans perturber le parcours d'achat habituel.

Les tâches d'intégration permettront la communication harmonieuse entre DeliveryFit et votre plateforme  existante.

Les phases de tests et de déploiement garantiront quant à elles la fiabilité et la performance de l'application en conditions réelles d'utilisation.

Cette organisation nous permet d'avoir une vision claire de l'ensemble du projet et facilite l'estimation précise des ressources nécessaires.

## 4. Estimation: Méthode d'estimation de la complexité
Pour estimer la charge de travail, nous avons utilisé une échelle de complexité inspirée des méthodologies Agiles, en prenant en compte l'ampleur et le niveau de difficulté de chaque tâche. Notre approche s'est particulièrement concentrée sur le niveau de difficulté technique, car nous avons délibérément décomposé les tâches générales en unités plus petites lors de l'élaboration de notre liste de tâches. La méthode nous permet d'obtenir une estimation du temps plus fine et plus fiable.

Ainsi, une tâche simple et routinière se voit attribuer une complexité de 1 à 2 points, comme l'implémentation des APIs, tandis qu'une tâche nécessitant une expertise technique pointue ou impliquant des risques élevés peut atteindre 5 points de complexité, comme par exmple la mise en place de l'architecture de l'application et de la sécurité des données, ou le développement de l'algorithme de comparaison des distances. Cette échelle nous aide à mieux anticiper les efforts nécessaires pour chaque composante du projet et à allouer nos ressources de manière optimale.

Pour chaque tâche, nous avons également prévu une marge proportionnelle à sa complexité, allant de 25% pour les tâches simples à 75% pour les plus complexes, afin d'anticiper d'éventuels imprévus.

## 5. Estimation: Coût
Pour réaliser DeliveryFit, nous mobilisons une équipe de trois experts : un architecte logiciel expérimenté (800€/jour) qui supervisera la conception globale et l'intégration, un développeur Back-End et un développeur Front-End confirmés (700€/jour chacun). Cette composition garantit une expertise technique ciblée sur chaque aspect du projet tout en optimisant le rapport qualité-coût. L'allocation précise des ressources selon les compétences spécifiques de chaque membre nous permettra de respecter les délais et le budget tout en maintenant un haut niveau de qualité.

## 6. Analyse des risques
Pour garantir le succès du projet DeliveryFit, nous avons réalisé une analyse approfondie des risques potentiels. Notre méthodologie d'évaluation repose sur une matrice 5x5 combinant deux dimensions clés :

D'une part, la probabilité d'occurrence du risque, notée de 1 à 5, de très peu probable à très probable. Par exemple, nous avons évalué que la dépendance à des services tiers est un risque très probable compte tenu de l'intégration nécessaire avec des API de géolocalisation.

D'autre part, la gravité des conséquences si le risque se matérialise, notée de 1 à 5, donc de négligeable à catastrophique. Par exemple, nous avons estimé que les vulnérabilités de sécurité représentent un risque de gravité majeure (niveau 4) étant donné la nature sensible des données clients traitées.

En multipliant ces deux facteurs, nous obtenons un score qui nous permet de hiérarchiser les risques et de concentrer nos efforts sur les plus critiques.

Comme vous pouvez le voir dans notre matrice, nous avons identifié plusieurs risques techniques (symbolisés par 💻) et risques de gestion de projet (symbolisés par 🧍‍♀️).
<!-- Les risques les plus significatifs concernent les performances du système sous charge (score 16), la dépendance aux services externes (score 15) et les vulnérabilités de sécurité (score 12). -->

Pour chaque risque identifié, nous avons élaboré des mesures préventives spécifiques. Par exemple, pour prévenir les problèmes de performance, nous prévoyons de concevoir une architecture scalable dès le départ et d'optimiser les requêtes avec des mécanismes de cache appropriés. Pour les risques liés aux services externes, nous évaluerons rigoureusement les fournisseurs et mettrons en place des mécanismes de fallback.

Cette approche proactive de gestion des risques nous permet d'anticiper les difficultés potentielles et d'assurer la réussite du projet dans les délais et le budget impartis.

## 7. Proposition initiale
Notre proposition financière pour DeliveryFit s'élève à 8 900 €, soit 11% en dessous du budget maximal défini. Cette optimisation résulte d'une planification méticuleuse et d'une allocation stratégique des ressources. Notre équipe de trois experts travaillera pendant 12 jours-homme au total, avec une répartition adaptée aux compétences de chacun. La marge budgétaire de 1 100 € que nous dégageons pourra être allouée à une réserve pour imprévus, renforçant ainsi la sécurité financière du projet.

Pour garantir que DeliveryFit réponde parfaitement à vos attentes, nous nous engageons à atteindre des objectifs de performance précis et mesurables. Notre solution sera caractérisée par:

- Un temps de réponse optimal, tant au niveau du back-end pour le calcul du point d'expédition que du front-end pour l'affichage des informations

- Une capacité de traitement robuste, capable de gérer efficacement les pics d'activité sans dégradation de performance

- Une précision remarquable dans les calculs de distance, permettant d'identifier systématiquement le point d'expédition le plus avantageux

- Une haute disponibilité du service, avec un taux d'erreur minimal pour assurer une expérience utilisateur fiable

- Une optimisation logistique tangible, se traduisant par une réduction significative des délais et des coûts de livraison

- Une intégration transparente avec vos systèmes existants, incluant la synchronisation en temps réel des données de stock

- Un respect scrupuleux des contraintes de temps et de budget, avec une livraison dans le délai imparti de 5 mois

Ces objectifs de performance ne sont pas de simples promesses, mais des engagements concrets que notre architecture technique et notre méthodologie Agile nous permettront d'honorer.

## 8. Contre proposition
Au-delà de la solution de base qui répond parfaitement à vos exigences, nous avons identifié des opportunités stratégiques pour transformer DeliveryFit d'un simple outil d'optimisation logistique en un véritable levier de croissance pour votre entreprise.

Parlons d'abord de l'expérience client enrichie. Nous savons tous que la satisfaction client est au cœur de votre succès. Avec cette fonctionnalité, vos clients pourront choisir entre plusieurs options de livraison - standard, express, ou click & collect. Ils seraient aussi informés automatiquement à chaque étape clé de leur livraison, en choississant leur canal de notification préféré, que ce soit par email, SMS ou via l'application mobile.

Passons maintenant à l'analyse de données et aux tableaux de bord. C'est là que vos données se transforment en décisions éclairées. Vous aurez accès à des tableaux de bord intuitifs qui vous permettront de suivre en temps réel vos KPIs logistiques essentiels. Vous pourrez analyser les tendances de livraison pour repérer les opportunités d'optimisation. Et grâce à des visualisations interactives, vous évaluerez facilement les performances par région, magasin et produit.

Avec ce service, Vous pourrez identifier rapidement les goulots d'étranglement, optimiser continuellement votre chaîne logistique, et surtout, prendre des décisions basées sur des données concrètes. C'est un véritable outil stratégique pour votre entreprise.

## 9. Contre proposition financière
Après avoir présenté ces services supplémentaires à forte valeur ajoutée, j'en viens maintenant à notre proposition financière. Pour intégrer l'expérience client enrichie et les outils d'analyse de données, notre investissement total s'élèverait à 12 600 €.

Pour cette version enrichie, notre équipe investira un total de 17 jours-homme. Cela représente 5 jours supplémentaires par rapport à la version de base, mais avec un impact considérable sur la valeur ajoutée du produit. Il est important de souligner que malgré cette augmentation de périmètre, nous respecterons toujours le délai de livraison de 5 mois.

Ce surcoût de 2 600 € représente un investissement judicieux qui générera des bénéfices tangibles et mesurables :

Augmentation du taux de satisfaction client

Réduction des coûts logistiques grâce à l'optimisation continue

Avantage concurrentiel sur le marché du e-commerce

Prise de décisions stratégiques basées sur des données concrètes

## 10. Conclusion
En conclusion, le projet DeliveryFit représente une opportunité stratégique pour Alisa's Closet de transformer son système de livraison et d'améliorer son service client.

Nous vous avons présenté aujourd'hui deux propositions solides :

Notre proposition initiale à 8 900 € répond parfaitement à votre cahier des charges, tout en restant sous le budget maximal défini. Elle vous permettra d'optimiser vos livraisons en identifiant automatiquement le point d'expédition le plus proche du client.

Notre proposition enrichie à 12 600 € va au-delà de vos exigences initiales en intégrant une expérience client enrichie et des outils d'analyse de données puissants. Bien qu'elle dépasse le budget initial, elle constitue un investissement stratégique avec un retour sur investissement tangible.

Quelle que soit l'option que vous choisirez, notre équipe d'experts s'engage à livrer une solution performante, fiable et évolutive dans le délai imparti de 5 mois. Notre méthodologie Agile nous permettra de vous impliquer tout au long du projet et d'adapter notre approche selon vos retours.

Je vous remercie pour votre attention et reste à votre disposition pour répondre à vos questions ou approfondir certains aspects de notre proposition.
