<script>
    export let path, img, alt, title, date, technologies;
</script>
<a href={path}>
<div class="card">
    <div class="card-img">
        <img src={img} alt={alt} />
    </div>
    <div class="card-body">
        <h5>{title}</h5>
        <strong>{date}</strong>
        {#each technologies as technology}
            {technology}
        {/each}
    </div>
</div>
</a>