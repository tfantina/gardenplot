<script>
    export let meta, path;
    let {title: title, content: content, daterange: daterange, tags: tags, hero: hero, alt: alt, date: date, source: source} =  meta

    const options = {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    };

</script>
<a href={path} class="table-row d-flex">
    <div class="col-2">
        {#if daterange} 
            {daterange}
         {:else}
            {new Date(Date.parse(date)).toLocaleDateString("en-GB", options)}
        {/if}
    </div>
    <div class="col-5 d-flex align-items-center">
        <h5>{title}</h5>
    </div>
    <div class="col-5">
            {#each tags as technology}
               <span class="tag">{technology}</span>
            {/each}
    </div>
</a>
