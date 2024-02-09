<script>
    export let href = '';
    export let target = '';
    export let rel = '';
    export let icon = '';
    export let text = '';
    export let width = 24;
    export let height = 24;
    export let classes = '';
    export let style = '';
    import Icon from '@iconify/svelte';
</script>

<a {href} {target} {rel} class={classes} {style}>
	<div class="iconbutton p-4 rounded-md inline-block font-medium">
		{#if text}
			<span>{text}</span>
		{/if}
        {#if icon}
        <Icon {icon} {width} {height} class="inline-block" />
        {/if}
	</div>
</a>

<style>
    .iconbutton {
        border: 1px solid var(--color-orange-accent);
        color: var(--color-orange-accent);
    }
    .iconbutton:hover {
        background-color: var(--color-orange-accent);
        color: var(--color-light-gray);
    }
</style>