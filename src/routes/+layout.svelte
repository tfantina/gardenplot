<script>
    import Header from '$lib/components/page/Header.svelte';
    import Nav from '$lib/components/page/Nav.svelte';
    import MobileFooter from '$lib/components/page/MobileFooter.svelte'
    import '$lib/scss/global.scss'
    import { page } from '$app/stores';
    
</script>
<div class="container">
    <Header>
        <span slot="title">{$page.data.title}</span>
        <img src={$page.data.image} alt={$page.data.title} class="header-image"slot="headerimg" />
    </Header>
    <div class="row">
        <Nav />
        <div class="col-md-9 col-lg-10 content rounded-3 p-4">
            <slot /> 
        </div>
    </div>
</div>
<MobileFooter />