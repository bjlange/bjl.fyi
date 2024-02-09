<script>
	export let title;
	export let date;
    import TopNav from '$lib/components/topnav.svelte'
</script>

<TopNav />
<article class="max-w-5xl mx-auto px-2 mt-4">
	<h1>{title}</h1>

	<slot />
</article>

<style>
	article {
		font-size: var(--step-0);
	}
</style>