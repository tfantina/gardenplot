<script>
    import { base } from '$app/paths';
    import NavButton from '$lib/components/page/NavButton.svelte';
</script>

<div class="nav-container col-md-3 col-lg-2">
    <div class="links">
       <div class="content mr-5 p-3 rounded-3 d-flex flex-column align-items-center">
                <NavButton text="Home" target={`${base}/`} />
                <NavButton text="Projects" target={`${base}/projects`} />
                <NavButton text="Blog" target={`https://travisblog.fly.dev/`} />
                <NavButton text="About" target={`${base}/about`} />
        </div>
    </div>
</div>

<style>
    .links {
        position: relative;
        height: 100%;
    }
    .content {
        position: absolute;
    }
</style>