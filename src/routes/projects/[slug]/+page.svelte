<script>
	export let data;
	import TopNav from '$lib/components/topnav.svelte';
	import './projects.css';
</script>

<TopNav />
<div class="flex flex-row justify-center w-full">
	<article class="max-w-prose mx-2 mt-4 mb-12">
		<div id="shift">
			<h1 class="mt-10 mb-8">{data.title}</h1>
			<svelte:component this={data.content} />
		</div>
	</article>
</div>

<style>
	article {
		font-size: var(--step-0);
	}
	@media (min-width: 640px) {
		#shift {
			margin-left: 2rem;
			margin-right: 2rem;
		}
	}
</style>
