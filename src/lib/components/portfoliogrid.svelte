<script>
	import PortfolioTile from './portfoliotile.svelte';
	export let content;
</script>

<div class="container flex flex-row flex-wrap md:flex-nowrap gap-8 justify-center mx-8">
	<h2 class="w-full md:w-fit md:text-right">Portfolio</h2>
	<div class="w-full md:w-fit inline-flex flex-wrap gap-4">
		{#each content as piece}
			<PortfolioTile {piece} />
		{/each}
        {#if content.length % 2 === 1}
            <div class="filler">
                More being added soon...
            </div>
        {:else if content.length % 3 === 1}
        <div class="filler">
            More being added soon...
        </div>   
        <div class="filler">
        </div>   
        {/if}
	</div>
</div>

<style>
    .filler {
        flex-basis: 430px;
        min-width: 220px;
        max-width: 700px;
        flex-grow: 1;
        color: var(--color-mid-gray);
        font-size: var(--step-2);
        padding: 1rem;
    }
</style>
