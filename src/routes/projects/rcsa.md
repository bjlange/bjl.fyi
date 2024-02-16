---
title: Optimizing a scientific conference
date: '2015-01-01'
description: Optimizing a multidisciplinary scientific conference series for greater breakthroughs
tags: [optimization, network analysis, survey design, full stack web dev, impact measurement]
cardImg: rcsa_hero
---

The Research Corporation for Scientific Advancement puts on a series of unique conferences called Scialog designed to catalyze novel scientific reasearch collaborations across disciplines. 

I led teams at Datascope and IDEO that that ran collaboration network surveys and used simulated annealing (a stochastic optimization technique) to help RCSA most effectively group up scientists during their conferences. The algorithm maximizes new connections between researchers while taking into consideration diversity of backgrounds, interest in topics, and other factors.

## Results
At the 2015 Scialog: Molecules Come to Life conference, the optimization produced the following results:
 * In 77% of discussion groups at the conference, none of the members had even heard of each other before
 * In all discussion groups at the conference, no one in the groups had spoken or collaborated previously
 * On average, each group of 4 had members from 2.6 different scientific disciplines (e.g. biology, physics) in it.
 * Each discussion group had at least one theorist and one experimentalist

As as impact goes, here's what that resulted in:
 * 118 new conversations between scientists
 * 20 new collaborative proposals for research, the most ever at a Scialog
 * 17 new scientific collaborations
   * 100% growth from pre-conference
   * 53.6% of attendees formed a new collaboration with another attendee
 * Attendees rated the optimized discussion groups as more important to the success of the conference than other activities


Similar results were achieved at future Scialog conferences, and we went on to optimize their large, topic-based discussions as well, move the optimization to serverless cloud compute, and ultimately hand off the work to an internal analyst.

## Deeper dive
If you want to learn more details about the project or my approach, I spoke about this work at O'Reilly Strata 2017:
<iframe class="w-full aspect-video" src="https://www.youtube-nocookie.com/embed/sLOf5YvQ738?si=0M3zj_Hi60LuCCj-" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

