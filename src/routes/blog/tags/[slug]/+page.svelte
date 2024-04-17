<script>
    import { base } from '$app/paths';
    import Card from '$lib/components/display/Card.svelte';
    export let data
</script>

<div class="d-flex flex-column">
<div class="d-flex align-center">
    All posts tagged with: <div class="tag mx-1">{data.title}</div>
</div>

{#each data.posts as post}
    <Card path={`${base}${post.path}`} meta={post.meta} />
{/each}
</div>
   
