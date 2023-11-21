<script>
    import NavButton from '$lib/components/page/NavButton.svelte';
</script>

<div class="nav-container flex-column align-items-center col-md-3 col-lg-2">
   <div class="content mx-1 p-3 rounded-3 d-flex flex-column">
        <NavButton text="Programming" target={"/programming"} />
        <NavButton text="Visuals" target={"/visuals"} />
        <NavButton text="Projects" target={"/projects"} />
        <NavButton text="About" target={"/about"} />
        <NavButton text="Now" target={"/now"} />
    </div>
</div>