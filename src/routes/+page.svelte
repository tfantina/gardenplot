<script>
	import { base } from '$app/paths';
	import Bio from '$lib/components/page/Bio.svelte';
	import Featured from '$lib/components/page/Featured.svelte';
	export let data;
</script>

{#if data}
	<div class="content rounded-3 p-4">
		<Bio />
		<Featured />
	</div>
{:else}
	<div>Loading...</div>
{/if}
