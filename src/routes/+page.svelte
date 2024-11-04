<script>
    import Bio from '$lib/components/page/Bio.svelte';
    import Featured from '$lib/components/page/Featured.svelte';
    import MusicCard from '$lib/components/page/MusicCard.svelte';
    import PostCard from '$lib/components/page/PostCard.svelte';
    import Card from '$lib/components/display/Card.svelte';
    export let data;
</script> 
<div class="content rounded-3 p-4">
    <Bio />
    <Featured />
</div>

<div class="d-flex justify-between">
    <Card title="Featured Projects">
        Coming soon... Click "projects" to see
    </Card>

    <Card title="Recents Posts">
        <div class="card-no-overflow">
            <PostCard posts={data.posts} />
        </div>
    </Card>

    <Card title="Recent Listens">
        <div class="card-no-overflow">
            <MusicCard songs={data.songs} />
        </div>
    </Card>
</div>

