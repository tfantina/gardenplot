<script>
    import Header from '$lib/components/page/Header.svelte';
    import Nav from '$lib/components/page/Nav.svelte';
    import '$lib/scss/global.scss'
    import { page } from '$app/stores';
    console.log("WOO HOO")
    console.log($page.data.title)
</script>
<div class="container">
    <Header>
        <span slot="title">{$page.data.title}</span>
    </Header>
    <div class="row">
        <Nav />
        <div class="col-md-9 col-lg-10 content rounded-3 p-4">
            <slot /> 
        </div>
    </div>
</div>