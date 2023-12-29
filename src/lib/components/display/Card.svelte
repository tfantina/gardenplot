<script>

    export let meta, path;

    let {title: title, daterange: daterange, technologies: technologies, hero: hero, alt: alt} =  meta

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
        {#each technologies as technology}
           <span class="tag">{technology}</span>
        {/each}
        </div>
    </div>
</div>
</a>
