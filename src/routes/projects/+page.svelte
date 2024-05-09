<script>
    import { base } from '$app/paths';
    import Card from '$lib/components/display/Card.svelte';
    export let data;
</script>
<p>
Rough timeline of various projects I've worked on.
</p>

<div class="d-flex flex-column">
{#each data.projects as project}
    <Card path={`${base}${project.path}`} meta={project.meta} />
{/each}
</div>
   
