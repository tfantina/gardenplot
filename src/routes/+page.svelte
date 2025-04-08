<script>
	import Bio from '$lib/components/page/Bio.svelte';
	import Featured from '$lib/components/page/Featured.svelte';
	import MusicCard from '$lib/components/page/MusicCard.svelte';
	import PostCard from '$lib/components/page/PostCard.svelte';
	import Card from '$lib/components/display/Card.svelte';
	export let data;
</script>

<div class="content rounded-3 p-4">
	<Bio />
	<Featured />
</div>

<div class="d-flex justify-between">
	<Card title="Recent Posts">
		<div class="card-no-overflow">
			<PostCard posts={data.posts} />
		</div>
	</Card>
</div>
