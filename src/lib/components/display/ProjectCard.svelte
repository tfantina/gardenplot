<script>
	export let meta, path;
	let { title: title, daterange: dategrange, tags: tags, hero: hero, date: date } = meta;

	const options = {
		year: 'numberic',
		month: 'long',
		day: 'numeric'
	};
</script>

<a href={path} class="no-underline">
	<div class="project-card">
	<3>{title}</h3>
	</div>
</a>

<style>
    .project-card {
        display: flex;
        background-image: url({hero});
    }
</style>
