<script>
	import PortfolioTile from './portfoliotile.svelte';
	export let content;
    const n_fillers = Math.max(0, 4 - (content.length % 4), 3- (content.length % 3));
</script>

<div class="container mx-2 sm:mx-8">
	<h2>Portfolio</h2>
	<div class="flex flex-wrap gap-4">
		{#each content as piece}
			<PortfolioTile {piece} />
		{/each}
        <div class="filler">More to come...</div>
        {#if n_fillers > 1}
            {#each Array(n_fillers-1) as _}
            <div class="filler"></div>
            {/each}
        {/if}
		
	</div>
</div>

<style>
	.filler {
		flex-basis: 337px;
		min-width: 220px;
		max-width: 700px;
		flex-grow: 1;
		color: var(--color-mid-gray);
		font-size: var(--step-2);
		padding: 1rem;
	}
</style>
