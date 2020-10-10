---
layout: post
title: "Redesign du HC&nbsp;Chambéry"
date: '2020-10-09T14:47:00+02:00'
tags:
- web
- design
- sport
related:
- url: 2017/10/16/design-shcf
  title: "Redesign du SHCF"
realisation: "oui"
---
En 2020, le club de rink hockey  <a href="https://hcchambery.fr/"><abbr title="Hockey Club Chambéry">HC Chambéry</abbr></a> fête ses 40 ans. Pour l'occasion, j'ai créé un site Web monopage, de nouveaux maillots et quelques éléments visuels pour la communication du club.

## Site Web monopage
<img src="/dist/posts-img/hcc-site-web.png" alt="Capture d'écran du site Web du HCC">

Comme beaucoup de clubs sportifs (si ce n’est tous) le HC Chambéry est présent sur Internet via les réseaux sociaux, Facebook en tête. Il me semblait cependant nécessaire que le club ait un site dédié avec les informations nécessaires (adresse, horaires, tarifs…).

Afin d'être efficace et de sortir la chose au plus vite, le monopage me semblait la meilleure solution :
- très simple à maintenir car rien d’installé, tout est en HTML et CSS direct
- très rapide car peu d’images, peu de dépendances (2 polices) et pas de scripts tiers
- très simple à déployer grâce à Github Pages

Une des expérimentations que je souhaitais mettre en place est l’utilisation de l’unité vw pour les polices de l’affiche en haut de page. Ceci me permet d'obtenir un résultat optimal sur tous les écrans et de gérer un positionnement pseudo-aléatoire original.

<p class="text-center navigation">
  <a class="button older" href="https://hcchambery.fr">Voir le site du HC Chambéry</a>
</p>
## Maillots
<img src="/dist/posts-img/hcc-maillots.png" alt="Nouveaux maillots du HCC">

Pour les maillots, le club souhaitait passer du bleu —&nbsp;commun dans la région&nbsp;— au noir et jaune, couleurs d'origine du club et clin d’œil au <a href="https://www.teamchambe.com">fameux club de Handball Chambérien</a>.

J'ai choisi d’intégrer le logo, à la base dépourvu de cadre, dans un carré à base triangulaire pour en faire une sorte de blason moderne.

Sur cette base, j'ai créé un motif triangulaire en camaïeu de jaunes en bas du maillot dégradé vers un noir total en haut. Manchettes et col jaune pour le contraste. Logos de la ville et de la ligue sur les manches, sponsors sur le torse et dans le dos.

Classique.
