<script>
	import { base } from '$app/paths';
	import NavButton from '$lib/components/page/NavButton.svelte';

	let toggled = false;

	const toggleNav = () => {
		toggled = toggled ? false : true;
	};
</script>

<button class="nav-mobile" class:toggled on:click={toggleNav}>
	<span />
	<span />
	<span />
</button>

<div class="nav-container" class:nav-active={toggled}>
	<div class="links">
		<div class="content p-3 rounded-3 d-flex flex-column align-items-center">
			<NavButton text="Home" target={`${base}/`} />
			<NavButton text="Projects" target={`${base}/projects`} />
			<NavButton text="Micro Blog" target="https://tfantina.micro.blog/" />
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
