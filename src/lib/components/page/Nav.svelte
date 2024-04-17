<script>
    import { base } from '$app/paths';
    import NavButton from '$lib/components/page/NavButton.svelte';
</script>

<div class="nav-container col-md-3 col-lg-2">
   <div class="content mx-1 p-3 rounded-3 d-flex flex-column align-items-center">
        <NavButton text="Home" target={`${base}/`} />
        <NavButton text="Blog" target={`${base}/blog`} />
        <NavButton text="About" target={`${base}/about`} />
        <NavButton text="Programming" target={`${base}/programming`} />
        <NavButton text="Projects" target={`${base}/projects`} />
    </div>
</div>