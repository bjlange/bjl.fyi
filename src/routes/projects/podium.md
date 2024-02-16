---
title: Podium
date: '2012-01-01'
tags: [enterepreneurship, live product, full stack web dev, AWS]
description: A web video platform that helped professionals get feedback on important presentations
cardImg: podium3

---

<script>
    import Img from '@zerodevx/svelte-img'    
    import logo from '$lib/images/podiumlogo.png?as=run:0';
    import s1 from '$lib/images/podium1.png?as=run';
    import s2 from '$lib/images/podium2.png?as=run';
    import s3 from '$lib/images/podium3.png?as=run';
</script>

Originally started in 2012 in [NUVention Web](https://farley.northwestern.edu/academics-resources/nuvention/), a software and entrepreneurship class at Northwestern, Podium was a web platform that helped professionals get feedback on important presentations like sales and funding pitches. It allowed users to post videos of dry runs of their presentations, share them to anyone with an email address, and receive feedback that’s automatically time-tagged to the relevant part of the video, similar to how products like Soundcloud and Loom work (though this was years before Loom or anything like it existed).

<div class="flex flex-row gap-2 mt-8 mb-2">
    <Img alt='Screenshot of the Podium landing page stating "Quick and secure feedback to improve your presentations."' src={s1} />
    <Img alt='Screenshot of the Podoum library page showing multiple videos' src={s2} />
</div>
<Img alt='Screenshot of the Podium commenting interface for a video of a business pitch' class="mb-8" src={s3} />


I shared development responsibilites with one other technical co-founder, and was involved in pretty much all the product decisions made, from business model to branding to technology. I developed the logo and color scheme for it, and worked on the back end, front end, customer service, and integration with external services like Mandrill for email and Amazon Elastic Transcoder for video processing.

<Img alt='The Podium logo' class="my-8 mx-auto sm:w-96" src={logo} />

Podium was used by notable organizations like the Techstars incubators to help their members sharpen and perfect their pitches.
