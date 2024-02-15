<script>
	import headshot from '$lib/images/headshot.jpg';
	import underConstruction from '$lib/images/UnderConstruction.gif';
	import Icon from '@iconify/svelte';
	import linkedinIcon from '@iconify/icons-mdi/linkedin';
	import instagramIcon from '@iconify/icons-mdi/instagram';
	import githubIcon from '@iconify/icons-mdi/github';
	import PortfolioGrid from '../lib/components/portfoliogrid.svelte';
	export let data;
	const iconSize = 30;

</script>


<section id="nameplate" class="flex flex-row flex-wrap justify-center gap-8 mx-8 my-36">
	<img src={headshot} class="rounded-full w-52 h-52" alt="A headshot of Brian J Lange" />
	<div class="max-w-prose flex-grow">
		<div id="hello">Hey there! I'm</div>
		<h1>Brian J. Lange.</h1>
		<h2>I'm a data scientist, product person, and leader of creative problem solvers.</h2>
		<p>I'm also a bike rider, Chicagoan, and enjoyer of nature, music, and good food and drink.</p>
		<p>
			Previously I've worked at IDEO and Datascope, building data science teams and solving problems
			for clients using data, algorithms, and human-centered design.
		</p>
		<div id="iconRow" style="margin-left:-2px">
			<a href="https://www.linkedin.com/in/brianjlange/" target="_blank" rel="noopener noreferrer">
				<Icon
					icon={linkedinIcon}
					width={iconSize}
					height={iconSize}
					style="display: inline-block;"
				/>
				<span class="sr-only">LinkedIn</span>
				<!-- This is for screen readers -->
			</a>
			<a href="https://www.instagram.com/bjlange/" target="_blank" rel="noopener noreferrer">
				<Icon
					icon={instagramIcon}
					width={iconSize}
					height={iconSize}
					style="display: inline-block;"
				/>
				<span class="sr-only">Instagram</span>
				<!-- This is for screen readers -->
			</a>
			<a href="https://github.com/bjlange/" target="_blank" rel="noopener noreferrer">
				<Icon icon={githubIcon} width={iconSize} height={iconSize} style="display: inline-block;" />
				<span class="sr-only">GitHub</span>
				<!-- This is for screen readers -->
			</a>
		</div>
	</div>
</section>
<section class="flex flex-row justify-center mx-auto">
	<PortfolioGrid content={data.content} />
</section>

<style>
	#nameplate {
		font-weight: 300;
		line-height: 1.2em;

		& h1 {
			font-size: var(--step-5);
			font-family: 'Inter Tight', 'Inter', sans-serif;
			line-height: 1.2em;
		}
	}
	h2 {
		font-size: var(--step-3);
		margin-bottom: 1rem;
		line-height: 1.2em;
	}
	p {
		font-size: var(--step-1);
	}
	#hello {
		font-size: var(--step-1);
		line-height: 1.2em;
	}
	#iconRow {
		& a {
			text-decoration: none;
		}
	}
</style>
