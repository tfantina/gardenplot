<script>
    import { base } from '$app/paths';
    import Card from '$lib/components/display/Card.svelte';
    export let data;
</script>

{#each data.photos as photo}
    <h4>{@html photo.title}</h4>
    <div class="photo-content">
        {@html photo.content}
    </div>
    <a href="{photo.link}">View full post</a>
{/each}