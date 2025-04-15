<script>
	import Tags from '$lib/components/display/Tags.svelte';
	import MetaDate from '$lib/components/display/MetaDate.svelte';
	export let meta, size;

	const frontMatter = (meta) => {
		if (size == 0) {
			return '';
		}

		if (meta?.excerpt) {
			return meta.excerpt;
		}

		return meta.rawContent.slice(0, size) + '...';
	};
</script>

<div>
	{frontMatter(meta)}
	<div class="post-card--meta meta d-flex align-center">
		<MetaDate date={meta.date} />
		<Tags tags={meta.tags} />
	</div>
</div>
