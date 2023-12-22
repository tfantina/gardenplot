<script>
    import { base } from '$app/paths';
    import NavButton from '$lib/components/page/NavButton.svelte';
</script>

<div class="nav-container flex-column align-items-center col-md-3 col-lg-2">
   <div class="content mx-1 p-3 rounded-3 d-flex flex-column">
        <NavButton text="Home" target={`${base}/`} />
        <NavButton text="Programming" target={`${base}/programming`} />
        <NavButton text="Visuals" target={`${base}/visuals`} />
        <NavButton text="Projects" target={`${base}/projects`} />
        <NavButton text="About" target={`${base}/about`} />
        <NavButton text="Now" target={`${base}/now`} />
    </div>
</div>