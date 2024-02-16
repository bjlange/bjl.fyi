---
title: Sparck NLP API
date: '2017-05-01'
tags: [information retrieval, API backends, elasticsearch, documentation design, live product]
description: Improving the discovery of social sector gray literature using NLP
cardImg: sparck-illustration
---

<script>

import pdf from '$lib/documents/IssueLab Case Study.pdf'
import DocLinkIcon from '@iconify/icons-fluent/document-link-16-regular'
import IconButton from '$lib/components/iconbutton.svelte'
import Img from '@zerodevx/svelte-img'
import ss from '$lib/images/sparck-docs-screenshot.png?as=run'
import illus from '$lib/images/sparck-illustration.png?as=run'

</script>

IssueLab is the knowledge platform for Candid, formerly known as the Foundation Center. Their goal is to collect, archive, and make accessible and useful "gray literature"— things like white papers, research reports, evaluations, and case studies. Most of the social sector produces and releases knowledge this way, but the sector lacks the formal channels and aggregators that academia has to make this content searchable, so that's where IssueLab fits in.

<Img alt='An illustration of a robot organizing a pile of papers into a well organized bookshelf' src={illus} class="my-8" />

I worked on a team that built an API which uses natural language processing to help IssueLab add richer metadata to their collection for improved search results and exploration features. The API, called Sparck, accepts PDFs and processes them to produce keywords, key finding statements, and topics. It's named for Karen Spärck Jones, a British pioneer in information retrieval.

On the backend it uses traditional NLP techniques like TF-IDF, as well as a novel technique we developed called WikiTopic. WikiTopic uses an ElasticSearch index of the Wikipedia corpus to produce relevant named topics for documents. (Keep in mind this was years before the development of large language models.)

Because of the long processing time to extract plain text from PDFs, the system works asynchronously using a job queue (implemented using Redis and [RQ](https://python-rq.org/)) and provides APIs and dashboards for the client to check on the status of documents and retrieve results.

<figure class="my-8">
<Img alt='A screenshot of the Sparck API documentation with an explainer called "Inside the Machine"' src={ss} />
<figcaption>The documentation + API explorer site I designed and developed</figcaption>
</figure>

I worked on the backend data engineering for the API (the queue system, API framework, Elastic instance, and deployment of all of the above using Ansible) as well as an online explainer and documentation for our clients. I also worked with the client to train them on the use and maintenance of the system. 


<IconButton href={pdf} icon={DocLinkIcon} text='Read more about the project in a case study'/>
