<script>
    export let meta, path;
    let {title: title, content: content, daterange: daterange, tags: tags, hero: hero, alt: alt, date: date, source: source} =  meta

    const options = {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    };

</script>
<a href={path} class="no-underline">
<div class="content-link">
    <div class="content-link--image">
        {#if hero}
            <img src="{hero}" alt="hero thumbnail for {title}"/>
        {:else}
            <div class="content-link--inner">
                <div class="content-link--gradient"></div>
            </div>
        {/if}
    </div>
    <div class="content-link--content d-flex flex-column justify-content-center">
        <h5>{title}</h5>
        <p>

        </p>    
        <div class="meta d-flex flex-column">
            {#if daterange}
             Project Timeline: {daterange}
            {/if}
            <div>
                {new Date(Date.parse(date)).toLocaleDateString("en-GB", options)}
            </div>
        </div>
        <div>
        {#each tags as technology}
           <span class="tag">{technology}</span>
        {/each}
        </div>
    </div>
</div>
</a>
