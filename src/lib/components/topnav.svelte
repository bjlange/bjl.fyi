<script>
	import informationIcon from '@iconify/icons-mdi/information-slab-circle-outline';
	import Icon from '@iconify/svelte';
</script>

<nav class="flex flex-row justify-center">
	<a href="/">
		<div id="site-title-block" class="p-3 pb-3 flex flex-row items-baseline gap-x-2 gap-y-1 flex-wrap justify-center">
			<span id="fyi" class="font-junicode ">for your information</span>
			<Icon icon={informationIcon} height=32 class="basis-full sm:basis-8 relative inline-block sm:top-2 top-0"  style="color: var(--color-blue-900);"/>
			<span id="hyper">the hypertext pages of Brian J. Lange</span>
		</div>
	</a>
</nav>

<style>
    nav {
        color: var(--color-orange-accent);
        text-align: center;
    }
	#fyi {
		font-variation-settings: 'wdth' 75, 'wght' 500;
		font-size: 1.3rem;
	}
	#hyper {
		font-weight: 500;
        
	}
    #site-title-block {
        border-bottom: 1px solid var(--color-orange-accent);
    }
</style>
