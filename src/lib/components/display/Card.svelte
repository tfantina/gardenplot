<script>
	export let path, title;
</script>

{#if path}
	<a href={path}>
		<div class="card card-hover">
			<div class="row text-center">
				<h4>{title}</h4>
			</div>

			<slot />
		</div>
	</a>
{:else}
	<div class="card">
		<div class="row text-center">
			<h4>{title}</h4>
		</div>
		<slot />
	</div>
{/if}
