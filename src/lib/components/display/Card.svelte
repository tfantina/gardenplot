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
            <img src="{hero}" alt="hehttps://pixelfed.social/p/tfantina/653463191348593627ro thumbnail for {title}"/>
        {:else}
            <div class="content-link--inner">
                <div class="content-link--gradient"></div>
            </div>
        {/if}
    </div>
    <div class="content-link--content d-flex flex-column justify-content-center">
        <h5>{title}</h5>   
        <div class="meta d-flex flex-row">
            <div class="d-flex flex-column">
                {#if daterange}
                <div>
                     Project Timeline: {daterange}
                </div>
            {/if}
            <div>
                {new Date(Date.parse(date)).toLocaleDateString("en-GB", options)}
            </div>
        </div>
            <div class="content-link--content__tag">
                <strong>Tags:</strong>
                {#each tags as technology}
                   <span class="tag">{technology}</span>
                {/each}
            </div>
        </div>
        <div>
        </div>
    </div>
</div>
</a>
