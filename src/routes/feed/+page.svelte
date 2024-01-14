<script>
    import { base } from '$app/paths';
    import Card from '$lib/components/display/Card.svelte';
    export let data

</script>

<div class="d-flex flex-column">
<p>
    Something akin to a blog.  All of my projects, photos, and thoughts are collected here.  
    Coming soon... Tag organization.
</p>
<div class="d-flex flex-wrap mb-4">
    {#each data.tags as tag}
        <div class="tag mx-1">
            {tag}
        </div>
    {/each}
</div>
{#each data.posts as post}
    <Card path={`${base}${post.path}`} meta={post.meta} />
{/each}
</div>
   
