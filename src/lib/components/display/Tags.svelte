<script>
    export let tags;
</script>   


<div class="d-flex flex-wrap mb-4 align-center">
    <span>🔖</span>
    {#each tags as tag}
        <div class="tag mx-1">
            <a href="/blog/tags/{tag}">{tag}</a>
        </div>
    {/each}
</div>