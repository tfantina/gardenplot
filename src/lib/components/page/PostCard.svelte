<script>
	export let posts;
	function getTitle(post) {
		if (post.tags.includes('micro')) {
			return post.rawContent;
		}
		console.log(post);
		if (!post.title) {
			return post.rawContent.slice(0, 120) + '...';
		}
		return post.title;
	}
</script>

<div class="f-col">
	{#each posts as post}
		<a href={post.path} class="post-card">
			<div class="post-card--title">
				{getTitle(post.meta)}
			</div>
			<div class="post-card--meta meta">
				{post.meta.date}
			</div>
		</a>
	{/each}
</div>
