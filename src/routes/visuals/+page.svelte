<script>
    import { base } from '$app/paths';
    import Card from '$lib/components/display/Card.svelte';
    export let data;

     const options = {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    };


</script>

<p>
Everyday I try to produce some kind of art, recently this has manifested in the form of taking and editing lots and lots of photos.
</p>
<p>
In the future I'll add some specific categories perhaps to showcase design work or my watercolours but for now I've just wired 
up the feed from my Pixelfed account below:
</p>

{#each data.photos as photo}
<div class="photo">
    <h4>{@html photo.title}</h4>
    <div class="photo--content">
        {@html photo.content}
    </div>
    <div class="meta">
        {new Date(Date.parse(photo.updated)).toLocaleDateString("en-GB", options)}
    </div>
    <a href="{photo.link}">View full post</a>
</div>
{/each}