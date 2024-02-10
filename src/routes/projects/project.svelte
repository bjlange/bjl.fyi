<script>
	export let title;
	export let date;
    import TopNav from '$lib/components/topnav.svelte'
</script>

<TopNav />
<article class="max-w-prose mx-2 sm:mx-auto mt-4 mb-12">
	<div id="shift">
		<h1 class="mt-10 mb-8">{title}</h1>
		<slot />
	</div>
</article>

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