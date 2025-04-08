<script>
	import { base } from '$app/paths';
	import NavButton from '$lib/components/page/NavButton.svelte';
</script>

<div class="nav-container">
	<div class="links">
		<div class="content p-3 rounded-3 d-flex flex-column align-items-center">
			<NavButton text="Home" target={`${base}/`} />
			<NavButton text="Projects" target={`${base}/projects`} />
			<NavButton text="Blog" target={`${base}/blog`} />
			<NavButton text="About" target={`${base}/about`} />
		</div>
	</div>
</div>

<style>
	.links {
		position: relative;
		height: 100%;
	}
</style>
