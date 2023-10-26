<script>
    import Header from '$lib/components/page/Header.svelte';
    import Nav from '$lib/components/page/Nav.svelte';
    import Bio from '$lib/components/page/Bio.svelte';
    import Featured from '$lib/components/page/Featured.svelte';
</script>

<Header>
    <span slot="title">Travis Fantina</span>
</Header>

<div class="row">
    <Nav />
    <div class="col-md-9 col-lg-10 content rounded-3 p-4">
        <Bio />
        <Featured />
    </div>
</div>