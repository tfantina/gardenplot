<script>
    import { base } from '$app/paths';
    import Card from '$lib/components/display/Card.svelte';
    export let data

</script>

<div class="d-flex flex-column">
<p>
    Something akin to a blog. Thoughts, photos, and relevant updates are collected here, click a tag to narrow by interest.
</p>
<div class="d-flex flex-wrap mb-4">
    {#each data.tags as tag}
        <div class="tag mx-1">
            <a href="/blog/tags/{tag}">{tag}</a>
        </div>
    {/each}
</div>
{#each data.posts as post}
    <Card path={`${base}${post.path}`} meta={post.meta} />
{/each}
</div>
   
