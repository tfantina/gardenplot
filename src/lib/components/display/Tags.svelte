<script>
	export let tags;
</script>

<div class="d-flex flex-wrab ml-5 align-center">
	<span>🔖</span>
	{#each tags as tag}
		<div class="tag my-1">
			<a href="/blog/tags/{tag}">{tag}</a>
		</div>
	{/each}
</div>
