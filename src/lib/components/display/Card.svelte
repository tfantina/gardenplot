<script>
    export let meta, path;
    console.log(meta)
    let {title: title, daterange: daterange, tags: tags, hero: hero, alt: alt} =  meta

</script>
<a href={path} class="no-underline">
<div class="content-link">
    <div class="content-link--image">
        {#if hero}
            <img src="{hero}" alt="image-hero"/>
        {:else}
            { title }
        {/if}
    </div>
    <div class="content-link--content d-flex flex-column justify-content-center">
        <h5>{title}</h5>
        {daterange}
        <div>
        {#each tags as technology}
           <span class="tag">{technology}</span>
        {/each}
        </div>
    </div>
</div>
</a>
