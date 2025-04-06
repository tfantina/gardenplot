<script>
    import Tags from '$lib/components/display/Tags.svelte'
    export let meta;

    const frontMatter = (meta) => {
        if (meta?.excerpt) { return meta.excerpt }
        return  meta.rawContent.slice(0, 150) + "..." 
    }
</script>

<div>
    {frontMatter(meta)}
    <Tags tags={meta.tags} />
</div>