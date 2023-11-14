<script>
    import Card from '$lib/components/display/Card.svelte';
    export let data;
</script>
<div class="d-flex flex-row">
{#each data.projects as project}
    <Card path={project.path} title={project.meta.title} date={project.meta.date} technologies={project.meta.technologies} />
{/each}
</div>
   
