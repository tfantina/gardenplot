<script>
	import { base } from '$app/paths';
	import Card from '$lib/components/display/Card.svelte';
	import Tags from '$lib/components/display/Tags.svelte';
	import ShortPost from '$lib/components/display/ShortPost.svelte';
	export let data;
</script>

<div class="d-flex flex-column">
	<p>
		Something akin to a blog. Thoughts, photos, and relevant updates are collected here, click a tag
		to narrow by interest.
	</p>
	<Tags tags={data.tags} />
	{#each data.posts as post}
		<Card path={`${base}${post.path}`} title={post.meta.title}>
			<ShortPost meta={post.meta} size={120} />
		</Card>
	{/each}
</div>
