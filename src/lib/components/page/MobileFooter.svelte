<script>
    import { base } from '$app/paths';
    import NavButton from '$lib/components/page/NavButton.svelte';
</script>
<footer class="col align-items-center">
    <NavButton text="Home" target={`${base}/`} />
    <NavButton text="Blog" target={`${base}/blog`} />
    <NavButton text="About" target={`${base}/about`} />
    <NavButton text="Projects" target={`${base}/projects`} />
</footer>