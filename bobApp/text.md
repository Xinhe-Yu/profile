## 1. Introduction

Salut ! Alors voilà la petite démo de ce que j’ai mis en place pour t’aider avec BobApp. On va parler de l'automatisation, de la qualité du code, du déploiement... et comment on va te faire gagner du temps (et des cheveux).

En gros, on va suivre ce petit plan tranquille :

D’abord je te remets un peu dans le contexte, même si tu le vis tous les jours

Ensuite, on plonge dans le cœur du sujet : la pipeline CI/CD que j’ai mise en place avec GitHub Actions ; on verra comment tout s’enchaîne automatiquement, les tests, la qualité du code, le build, etc.

Troisièment, on prendra le temps de regarder ensemble les résultats dans SonarCloud.

Et enfin, on fera un point sur les retours des utilisateurs — pas toujours tendres — et les pistes d’amélioration pour la suite.

Allons-y !

## 2. Contexte et Objectifs

Bon, on part d’une situation qu’on connaît bien : tu développes sur le temps libre, tu passes ton temps à corriger des bugs, valider des pull requests, faire des déploiements en FTP (aie), et pendant ce temps les utilisateurs râlent. Bref : galère.

Et comme c’est open source mais sans onboarding clair ni automatisation, y’a pas vraiment de gens qui viennent filer un coup de main.

Du coup, l’idée ici, c’est simple : on automatise tout ce bazar, pour que tu puisses te concentrer sur ce que tu kiffes — coder des nouvelles features, rigoler avec tes blagues, et pourquoi pas, boire ton café tranquille le matin sans avoir à ouvrir le terminal direct.

Concrètement, notre objectif c’est ça :

Automatiser les tâches chiantes

Fiabiliser les mises à jour (plus de bug qui casse tout sans qu’on le voie)

Et faciliter la contribution des autres, pour que tu sois plus tout seul à bord du navire.


## 3. Aperçu du workflow CI/CD

OK, maintenant que le décor est posé, je te montre ce que j’ai mis en place côté automatisation, le fameux workflow CI/CD avec GitHub Actions.

Alors voilà comment ça fonctionne :

Quand quelqu’un fait une pull request, ou pousse un commit sur la branche main, ça déclenche automatiquement la première partie du pipeline. Là on va lancer les tests, faire l’analyse qualité, et vérifier que tout est propre avant de valider quoi que ce soit.

Mais — et c’est important — le build des images Docker et le déploiement, ça se fait uniquement quand la PR est mergée dans main, pas à chaque ouverture. Sinon tu te retrouves avec des builds inutiles à gogo, et du spam dans Docker Hub.

Et au cas où, on peut aussi lancer le pipeline à la main depuis GitHub avec un bouton magique (workflow_dispatch). Pratique si tu veux rejouer une étape.

Voilà, en résumé, c’est du :

Tests et analyse qualité dès qu’une PR arrive

Build et déploiement seulement quand tout est validé et mergé dans main

## 3.5 GITHUB
Bon allez, maintenant qu’on a vu comment le pipeline est structuré, on va le lancer pour de vrai.

Je vais accepter une pull request, et normalement ça va tout déclencher automatiquement : les tests, l’analyse qualité, et si tout va bien, le build et le push sur Docker Hub.

Voilà, c’est parti ! Tu vois ici dans l’onglet Actions, GitHub commence à exécuter le workflow. Là, il attaque les tests, on va suivre ça ensemble pendant que ça tourne

## 4. Tests automatiques
Donc première étape : les tests.

Côté back, on lance les tests Java avec JUnit, et on récupère la couverture avec Jacoco. Côté front, pareil, les tests Angular sont exécutés avec Karma, et le rapport de couverture est aussi généré automatiquement.

On en profite pour stocker les rapports, pour les utiliser plus tard dans l’analyse Sonar.

Et le petit bonus : j’ai automatisé la publication de ces rapports. Comme ça, tu peux aller consulter les rapports à tout moment, tranquillement, dans ton navigateur.

Et le tout tourne à chaque PR ou push sur main, donc ça permet de détecter les problèmes tout de suite.

## 5. Analyse Sonar
Maintenant que les tests sont passés, on attaque la deuxième grosse étape du pipeline : l’analyse qualité avec SonarCloud.

Alors là, l’idée c’est de checker automatiquement si le code qu’on ajoute est propre, maintenable, sécurisé… et s’il respecte des seuils de qualité. Bref, c’est notre petit audit automatique à chaque mise à jour.

Et comme on a séparé le front et le back, on a mis en place deux analyses distinctes. Chacune récupère les rapports de couverture générés à l’étape précédente, et scanne le code à la recherche de duplications, bugs, problèmes de fiabilité, etc.

J’ai utilisé l’action officielle SonarCloud, donc tout est intégré dans GitHub Actions. Si les tests passent, Sonar se déclenche automatiquement. Sinon, il bloque net — histoire de ne pas intégrer du code douteux.

Bon, on checkera les résultats ensemble dans un instant, tu vas voir, ça explique pas mal de galères que t’as eues avec les utilisateurs.

## 6. Build & Docker
Allez, on continue le pipeline. Une fois que les tests sont passés et que l’analyse Sonar dit que le code est clean, là on peut passer à la dernière étape : le build et le déploiement des images Docker."

"Donc là pour le backend et le frontend, chacun a sa propre image Docker. Et les deux sont buildées automatiquement dans GitHub Actions, avec un docker build classique."

"Ensuite, si tout est OK, les images sont poussées directement sur Docker Hub. Ça veut dire que dès que tu merges une PR sur main, les images sont prêtes à être utilisées.

"Et en plus, le workflow est bien verrouillé : le build Docker ne se lance que si tout ce qui précède a réussi. Donc tu pousses jamais une image pétée par erreur."

Regarde ici sur Docker Hub, tu vois les deux images, générées automatiquement après merge. Et on pourrait même aller plus loin, genre déploiement direct sur un serveur si t’en as besoin.


## 7. Résultat Sonar-Backend
OK, maintenant que le pipeline est terminé, on va voir ce que Sonar nous raconte sur la qualité de BobApp."

"On commence par le backend. Alors, c’est pas catastrophique du tout, mais y’a clairement des choses à améliorer.

→ 💻 Tu ouvres SonarCloud pour afficher le projet backend

"Regarde : côté sécurité, c’est nickel. Aucune vulnérabilité, donc pas de faille ouverte, pas de package bizarre. Et niveau maintenabilité, c’est aussi très bon : quelques petits code smells, mineurs, qu’on pourra corriger tranquillement."

"Pas de duplication non plus — ce qui veut dire que ton code est bien factorisé, pas du tout en mode copier-coller sauvage.

"MAIS… côté fiabilité, on prend un petit coup dans l’aile : note D. Et surtout, la couverture des tests est à 38%, alors qu’on vise 80% minimum."

"En gros : ton code est propre, mais pas assez testé pour qu’on dorme tranquille quand on merge des trucs. Et ça, on va le ressentir côté utilisateur, tu vas voir juste après."

"Et un autre petit point : Sonar a repéré deux security hotspots — c’est pas des failles, juste des trucs à vérifier à la main. Genre ici : un générateur de nombres aléatoires, et une option de debug qui reste activée. Rien de dramatique, mais faut garder un œil."

## 8. Résultat Sonar - Front end
Maintenant côté frontend, c’est une autre ambiance. Là, franchement, c’est propre de chez propre."

→ 💻 Tu montres le projet frontend sur SonarCloud

"Sécurité : A. Maintenabilité : A. Pas de code dupliqué, pas de bug bloquant. Et surtout, la couverture de test est à plus de 83%, donc au-dessus de notre objectif."

"Ça veut dire que ce que tu montres aux utilisateurs est bien testé, bien écrit, et plutôt stable."

"Le seul petit axe d’amélioration ici, ce serait d’ajouter quelques tests end-to-end. Genre pour simuler un vrai utilisateur qui clique sur le bouton, envoie une blague, etc. Ça permettrait de capter des soucis d’intégration entre le front et le back, ce qu’on verra dans les retours utilisateurs."

## 9. Quality gates et KPIs
Petite pause rapide avant de passer aux avis des utilisateurs, pour t’expliquer un concept clé dans Sonar : les quality gates."

"En gros, c’est comme un feu rouge ou un feu vert. Si ton code respecte un certain nombre de critères de qualité — les fameux KPI — alors feu vert, on peut merger. Sinon, feu rouge, on bloque tout."

Ça sert à éviter qu’on introduise des bugs ou des régressions en douce, sans s’en rendre compte.

Alors pour définir le quality gate, je te propose trois indicateurs clés. L’idée c’est pas de tout contrôler à la perfection, mais d’éviter que du mauvais code passe en douce.

1. Le premier, c’est la couverture des nouveaux fichiers. On veut que chaque nouveauté soit testée. Si tu codes une nouvelle feature mais que t’as pas de test derrière, t’es sûr qu’un jour, elle va péter sans prévenir. Donc on vise au moins 80%, pour être raisonnablement confiants.

2. Le deuxième, c’est les bugs critiques. Là on est strict : zéro tolérance. Si Sonar détecte un problème bloquant, c’est que ça peut casser ton app, ou créer un gros souci en prod. Donc dans ce cas-là, on bloque la PR tant que c’est pas corrigé.

3. Et enfin, on regarde la duplication dans le nouveau code. On veut éviter que les gens fassent du copier-coller partout. Non seulement ça rend le code plus lourd, mais surtout, quand tu dois corriger un bug copié 10 fois… bon courage.

"Donc on met une limite à 3%, pour garder une base de code claire, propre, et plus facile à maintenir.

Avec ces trois règles simples, on couvre les bases : tester ce qu’on ajoute, éviter les bugs critiques, et écrire du code lisible. Et si tout est vert, alors feu vert pour le merge.

Ça met un peu de rigueur, ouais, mais franchement… ça évite les mauvaises surprises en prod. Genre un bug qui fait planter l’app le dimanche soir. On a tous connu ça

## 10. Avis utilisateurs
Et maintenant, regarde ce que disent les utilisateurs.

🔹Avis 1 :
"Impossible de poster une suggestion de blague, le bouton tourne et fait planter mon navigateur"

"Ça, typiquement, c’est lié à un manque de tests côté backend. On a vu tout à l’heure que la couverture backend est trop faible. Et là, si l’API plante, le front s’en sort pas et affiche rien. Avec un bon test + une gestion d’erreur claire, ça se corrige. Sans doute aussi des test E2E pour mieux assurer les choses

🔹 Avis 2 :
"J’ai remonté un bug sur le post de vidéo il y a deux semaines et il est encore présent"

"Ici c’est clair : manque de suivi, et pas de test de non-régression. Y’a rien qui empêche qu’un bug revienne. Une issue GitHub bien visible + un test automatisé et ce genre de bug, on n’en parle plus."

🔹 Avis 3 :
"Ça fait une semaine que je ne reçois plus rien, j’ai envoyé un email il y a 5 jours mais toujours pas de nouvelles…"

"Alors là, on touche à deux choses : soit y’a un bug silencieux (et sans log ou monitoring, on le voit pas), soit c’est juste le comportement normal… mais pas bien expliqué."

"Du coup je propose d’ajouter des messages clairs dans l’interface, du style 'Aucune nouvelle blague aujourd’hui', ou 'Dernière blague générée à 8h15', tu vois l’idée."

"Bref, tu vois que les retours utilisateurs, ils sont pas juste du bruit — ils pointent des vraies failles qu’on a vues dans le code. Et maintenant, on peut y répondre de façon structurée."

## 11. Piste d'amélioration
On a vu d’où viennent les bugs, ce que dit Sonar, et ce que râlent les utilisateurs… voilà ce que je te propose pour améliorer tout ça

 1. Renforcer la robustesse fonctionnelle
"Déjà, priorité numéro un : augmenter la couverture de test côté backend. On est à 38%, faut qu’on monte petit à petit vers les 80%."

"Et au-delà des tests unitaires, je recommande d’ajouter quelques tests end-to-end — comme simuler l’envoi d’une blague, vérifier que l’interface affiche bien le bon contenu, etc. Ça va nous permettre de vraiment fiabiliser les parcours utilisateurs les plus sensibles."

2. Améliorer la gestion des retours utilisateurs
"Ensuite, on met en place un vrai suivi des bugs. On utilise les issues GitHub, on les étiquette, on documente ce qui a été corrigé, ce qui est en cours…"

"Non seulement ça t’aide à y voir clair, mais en plus ça montre aux contributeurs (et aux utilisateurs) que le projet est vivant, qu’il évolue, et qu’on les écoute."

3. Suivre les indicateurs de qualité technique
"Tous les warning Sonar ne sont pas bloquants, mais les bugs critiques et les security hotspots, on doit les traiter proprement. Il faut pas que ça traîne dans un coin."

"L’idée c’est de ne pas se laisser submerger, mais de garder un œil sur ces indicateurs régulièrement."

🧱 4. Renforcer l’architecture et la stabilité
"Et pour finir, je recommande d’ajouter des messages explicites dans l’app. Genre, si aucune blague n’a été générée aujourd’hui, autant l’indiquer clairement à l’utilisateur, plutôt qu’il pense que le site est cassé."

"Côté backend, un peu plus de logs, ou même un système d’alerte si une API tombe, ça serait pas du luxe. Et on pourrait aussi séparer les configs selon l’environnement, genre dev, test, prod… pour éviter les mauvaises surprises en ligne."

"Bref, rien d’insurmontable, mais avec ces 4 axes-là, BobApp passe à la vitesse supérieure.

## 12. Conclusion
Bon voilà, t’as vu un peu tout ce qu’on a mis en place :"

Une vraie pipeline CI/CD qui tourne toute seule

Des tests automatisés avec des rapports lisibles

Une analyse qualité complète qui bloque les PR douteuses

Des images Docker prêtes à l’emploi dès que tu merges

Et surtout, un vrai début de démarche qualité pour répondre aux galères des utilisateurs


C’est pas encore parfait — y’a du taf, surtout côté backend et suivi des retours — mais maintenant on a une base solide. T’as plus besoin de tout faire à la main, et ça, franchement, c’est déjà une petite révolution."

"Et en bonus, avec une infra propre et une contribution plus simple, y’a des chances que d’autres gens rejoignent le projet et t’aident à faire de BobApp une appli encore plus drôle, stable et sympa à utiliser.

Voilà, c’est tout pour moi ! Merci de ta confiance
