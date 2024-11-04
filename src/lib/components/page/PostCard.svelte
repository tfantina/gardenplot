<script>
    export let posts;
</script>

<div class="f-col">
    {#each posts as post}
        <a href={post.link} class="post-card">
            <div class="post-card--title">
                {post.title}
            </div>
            <div class="post-card--meta meta">
                {post.date}
            </div>
        </a>
    {/each}
</div>
