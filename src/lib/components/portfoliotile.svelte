<script>
    export let piece; 
    let cardImg = 'none';
    import { onMount } from 'svelte';

    onMount(async () => {
        const img = piece.meta.cardImg;

        if (img) {
            const module = await import(`$lib/images/${img}.png?format=webp`);
            cardImg = module.default;
        }
    });
</script>

<a class="tilelink h-60" href={piece.path}>
    <div class="p-4 w-full h-full tile flex items-end content-end flex-wrap rounded" 
        style="background-image: {!cardImg | cardImg === 'none' ?  'none' : `url(${cardImg})`}; background-position: {piece.meta.cardImgPosition}">
        <h3 class="text-white drop-shadow-lg mb-2 basis-full">
            {piece.meta.title}
        </h3>
        {#if piece.meta.tags}
            <div>
                {#each piece.meta.tags as tag}
                    <span class="tagpill text-white text-xs rounded px-2 py-0.5 mr-1 inline-block">
                        {tag}
                    </span>
                {/each}
            </div>
        {/if}
    </div>
</a>

<style>
    h3 {
		font-family: 'Inter Tight Variable', 'Inter Variable', sans-serif;
		font-size: var(--step-3);
        font-weight: 600;
        text-decoration: none;
	}
	a {
		text-decoration: none;
	}
    .tilelink {
        flex-basis: 430px;
        min-width: 220px;
        max-width: 700px;
        flex-grow: 1;
    }
    .tagpill {
        background-color: var(--color-blue-700);
    }
	.tile {
		transition: box-shadow 0.3s ease-in-out 0s;
        background-color: var(--color-blue-main);
        background-blend-mode: soft-light;
        background-repeat: no-repeat;
	}
	.tile:hover {
		box-shadow: 0px 0px 25px 6px var(--color-blue-400);
	}
    .tile {
        background-size: cover;
        background-position: center;
    }
</style>