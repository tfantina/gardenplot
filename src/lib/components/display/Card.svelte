<script>

    export let meta, path;

    let {title: title, daterange: daterange, technologies: technologies, hero: hero, alt: alt} =  meta

</script>
<a href={path} class="no-underline">
<div class="card" 
    style="background-image: linear-gradient(165deg, var(--bg-overlay) 2%, var(--accent-overlay)), url({hero})"
>
    <div class="card-body d-flex flex-column">
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
