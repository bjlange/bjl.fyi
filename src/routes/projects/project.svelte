<script>
	export let title;
	export let date;
    import TopNav from '$lib/components/topnav.svelte'
</script>

<TopNav />
<article class="max-w-4xl mx-auto mt-4">
	<div id="shift">
		<h1>{title}</h1>
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