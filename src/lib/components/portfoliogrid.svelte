<script>
	export let content;
</script>

<div>
	<h2>Portfolio</h2>
	<div class="flex flex-wrap gap-4">
		{#each content as piece}
			<a href={piece.path}>
				<div class="tile w-96 h-60 bg-blue-700 p-4 flex items-end content-end flex-wrap rounded">
					<h3 class="text-white mb-2 basis-full">
						{piece.meta.title}
					</h3>
					{#if piece.meta.tags}
						<div>
							{#each piece.meta.tags as tag}
								<span class="text-white text-sm bg-blue-400 rounded px-2 mr-1 mb-1 inline-block">
									{tag}
								</span>
							{/each}
						</div>
					{/if}
				</div>
			</a>
		{/each}
	</div>
</div>

<style>
	h3 {
		font-family: 'Inter Tight Variable', 'Inter Variable', sans-serif;
		font-size: var(--step-3);
	}
	a {
		text-decoration: none;
	}
	.tile {
		transition: box-shadow 0.3s ease-in-out 0s;
	}
	.tile:hover {
		box-shadow: 0px 0px 25px 6px var(--color-blue-400);
	}
</style>
