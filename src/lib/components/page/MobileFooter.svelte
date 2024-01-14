<script>
    import { base } from '$app/paths';
    import NavButton from '$lib/components/page/NavButton.svelte';
</script>
<footer class="col align-items-center">
    <NavButton text="Home" target={`${base}/`} />
    <NavButton text="Programming" target={`${base}/programming`} />
    <NavButton text="Visuals" target={`${base}/visuals`} />
    <NavButton text="Projects" target={`${base}/projects`} />
     <NavButton text="Feed" target={`${base}/feed`} />
    <NavButton text="About" target={`${base}/about`} />
</footer>