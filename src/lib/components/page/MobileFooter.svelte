<script>
    import { base } from '$app/paths';
    import NavButton from '$lib/components/page/NavButton.svelte';
</script>
<footer class="col align-items-center">
    <NavButton text="Programming" target={`${base}/programming`} />
    <NavButton text="Visuals" target={`${base}/visuals`} />
</footer>