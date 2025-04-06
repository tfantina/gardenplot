<script>
	export let posts;
</script>

<div class="f-col">
	{#each posts as post}
		<a href={post.path} class="post-card">
			<div class="post-card--title">
				{post.meta.title}
			</div>
			<div class="post-card--meta meta">
				{post.meta.date}
			</div>
		</a>
	{/each}
</div>
