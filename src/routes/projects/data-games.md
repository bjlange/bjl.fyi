---
title: Data Games
date: '2017-05-01'
tags: [experience design, data capability building, full stack web dev, facilitation]
cardImg: 'players_handbook_cover'
cardImgPosition: bottom
---

<script>
import img from '$lib/images/players_handbook_cover.png'
import pdf from '$lib/documents/datascope-Capital1_DataGames_Case_Study.pdf'
import DocLinkIcon from '@iconify/icons-fluent/document-link-16-regular'
import IconButton from '$lib/components/iconbutton.svelte'
</script>

<img class="mb-4 sm:mb-1 sm:-mr-16 sm:ml-8 sm:w-96 sm:float-right" src={img} alt='A cover of a "players handbook" for the Data Games, in the style of a vintage Dungeons and Dragons guide' />


I worked on a team at Datascope that designed and ran an educational data modeling competition for CapitalOne. Like a cross between a Kaggle competition and a hackathon, each team had their own server which had to classify incoming "transactions" throughout the competition. This continuous-scoring design incentivized teams to iterate and make easy, pragmatic improvements to their algorithm early while maintaining system stability and going deep on the data and models to gain an edge over the other teams as time went on, all while we blasted epic movie music and projected real time scores on the wall. It was great fun!

I facilitated the brainstorming and design of the competition and helped build the technical infrastructure (including the scoring server, scoreboard frontend, and contestant API server templates) as well as documentation for the contestants (including that sweet vintage D&D inspired Photoshop job 😉). I also helped host the alpha and beta versions of the actual competition before handing the keys over to our clients, who continued to run the competition as a "capstone" experience for their internal data education efforts.

<IconButton href={pdf} icon={DocLinkIcon} text='Read more about the project in a case study'/>
