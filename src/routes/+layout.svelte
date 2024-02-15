<script>
	import "../app.css";
	import './styles.css';
	import '@fontsource-variable/inter/slnt.css';
	import '@fontsource-variable/inter-tight';

	import { MetaTags } from 'svelte-meta-tags'; // Import the MetaTags component.
    import { page } from '$app/stores'; // Import the page store to access route-specific data.
	import extend from 'just-extend';

	// Create a reactive statement to compute meta tags.
	$: metaTags = extend(true, {}, data.baseMetaTags, $page.data.pageMetaTags);

	export let data;
</script>
<MetaTags {...metaTags} />

<div class="app">

	<main>
		<slot />
	</main>
</div>

<style>
	p {
		margin-bottom: 1rem;
	}
</style>
