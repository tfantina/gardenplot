<script>
	import { base } from '$app/paths';
	import Bio from '$lib/components/page/Bio.svelte';
	import Featured from '$lib/components/page/Featured.svelte';
	import Card from '$lib/components/display/Card.svelte';
	import ShortPost from '$lib/components/display/ShortPost.svelte';
	export let data;
</script>

{#if data}
	<div class="content rounded-3 p-4">
		<Bio />
		<Featured />
	</div>

	<div class="d-flex justify-between">
		<Card title="Recent Posts" >
			{#each data.posts as post}
				<Card path={`${base}${post.path}`} title={post.meta.title}>
					<ShortPost meta={post.meta} size={200} />
				</Card>
			{/each}
		</Card>
	</div>
{:else}
	<div>Loading...</div>
{/if}
