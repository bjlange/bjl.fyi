---
title: "Urban Mobility Venture Pilot"
date: '2018-03-14'
tags: [analytics, ml features, live product, geospatial, behavior change]
cardImg: redacted_carpool_screenshot
cardImgPosition: top
---

<script>
import dash from '$lib/images/mobility_dashboard.png';
import stack from '$lib/images/analytics_stack.png';
import net from '$lib/images/commute_network.png';
import app from '$lib/images/redacted_carpool_screenshot.png';
import poster from '$lib/images/posters.png';
import commutes from '$lib/images/commutes.gif';
</script>

At IDEO, I joined a team in an urban mobility focused venture studio which was just about to pilot their product with a 150-person Bay Area company. The product was designed to shift commuter behavior from single-driver, single-car commutes to any alternative (transit, bike/scooter, carpool, or multimodal), which we called "smart commutes".  

<img src={commutes} alt='An animation showing anonymous commuter GPS data from the app pilot.' class="float-right sm:w-96 sm:ml-8 sm:-mr-16">

Business wise, the idea was that employers would be interested in reducing their parking requirements and improving the wellbeing, retention, and performance of their workforce (which multiple studies show long commutes affect negatively), and if the product could do that while also appearing to employees as a valuable benefit, it would be a win-win.

## ML Feature Development
One of the core functionalities of the product was to provide incentive rewards for taking "smart" commutes, and we decided that ideally the app could identify when these happened on its own, to make things easier for users as well as cut down on fraud.  So we built a transportation mode classifier that would work on GPS track data. I helped with feature engineering and pulling in third party data to improve the performance of the algorithm, as well as an admin dashboard for viewing and editing training data and model outputs.

<div class="mb-4 sm:float-left sm:mb-8 sm:mr-8 sm:-ml-16 relative">
    <img class="sm:w-64" src={dash} alt='Television in the client workspace with live app metric graphs on it' />
    <img id="analytics-map" class="sm:w-96 absolute bottom-0 sm:-bottom-4 sm:right-2" src={stack} alt='Systems diagram showing the connections between many data systems which made up the analytics stack for the venture' />
</div>

## Analytics
I spent time leading up to the pilot designing and building out analytics infrastructure so the whole team could see what was going on and ask their own questions once the pilot was underway. I used Segment for app analytics, BigQuery as a warehouse, Metabase as a BI tool, and a Celery task queue server to handle scheduled ETL from internal and external APIs. 

This would pay off during the pilot as it allowed every member of the team to see and combine data from multiple sources in one place. This visibility, as well as some analysis that I led brought us to...


## The pilot pivot
Three weeks into the six week pilot, after trying tons of different tactics, we weren't satisfied with the change were were seeing from the baseline numbers we collected in the 2 weeks before we began the program. I did some analysis using address data and routing APIs which suggested the transit infrastructure barrier was just too high to overcome: only 18% of driving users had what we deemed a viable transit alternative. After seeing this, the leader of the project decided to pivot to focus hard on carpool. This was a departure from the transit focus the app initially had. 

<img class="w-48 sm:float-right sm:ml-16 relative top-10 z-10 left-4 sm:right-10" src={net} alt='Diagram of a small travel time network from one of the early carpool prototypes' />
<img class="sm:w-96 sm:float-right clear-right sm:ml-8 my-4 relative sm:-mr-16" src={poster} alt='Large posters in the pilot partners workspace with carpool buddy matches' />
<img class="w-72 sm:float-right clear-right sm:ml-8 left-32 sm:left-0 relative -top-32 sm:-top-16 -mb-24 sm:-mb-12 "  src={app} alt='Screenshot of the carpool buddy feature in the app' />
    
    
    



I immediately started working on an algorithm for carpool buddy matching that worked similar to Uber Pool- in essence, minimizing added trip time for drivers by taking into account who was "on the way" for each employee. I collaborated with a designer and mobile dev to work it into the app as well as giant printed posters for our pilot partner's workspace, and within 7 working days we had new carpool features in the app and in the office.

## The results

I'd love to say that this work solved carpooling and led to wild success, but not quite. We did see **one out of every 3 solo drivers try carpooling at least once**, and half of existing carpoolers tried carpooling with someone new. But we also learned that finding carpool buddies was only part of the challenge to increasing carpooling - challenges of departure time coordination and social anxiety were still there and were serious blockers. Had the pilot run for longer and the pilot company been larger, we would have tackled these next. 

All of this experience informed a larger pivot of the company to being a commute analytics tool for corporate real estate leaders which did start to get market traction, though culture at the client organization prevented it from taking root. I'm proud of the work regardless because of the decisions I was able to inform, the learning my work enabled, the speed at which we changed direction, and how well we collaborated as a team.


<style>
   
        @media (min-width: 640px) {
         #analytics-map {
            max-width:140%
               }
        }
 
</style>